package com.workintech.ecommerce.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.workintech.ecommerce.entity.CartItem;
import com.workintech.ecommerce.entity.Order;
import com.workintech.ecommerce.entity.Product;
import com.workintech.ecommerce.exception.BadRequestException;
import com.workintech.ecommerce.repository.CartItemRepository;
import com.workintech.ecommerce.repository.OrderRepository;
import com.workintech.ecommerce.repository.ProductRepository;

@ExtendWith(MockitoExtension.class)
public class OrderServiceTest {
    
    @Mock
    private CartItemRepository cartItemRepository;

    @Mock
    private ProductRepository productRepository;

    @Mock
    private OrderRepository orderRepository;

    @Mock
    private ActivityLogService activityLogService;

    @InjectMocks
    private OrderService orderService;

    @Test
    void createOrder_ShouldCreateOrder_WhenCartIsValid() {
        Product product = Product.builder()
                .id(1L)
                .name("Laptop")
                .price(15000.0)
                .stock(10)
                .isActive(true)
                .build();

        CartItem cartItem = CartItem.builder()
                .id(1L)
                .userId(1L)
                .product(product)
                .quantity(2)
                .build();

        when(cartItemRepository.findByUserId(1L)).thenReturn(List.of(cartItem));

        when(orderRepository.save(any(Order.class))).thenAnswer(invocation -> {
            Order order = invocation.getArgument(0);
            order.setId(1L);
            return order;
        });

        var response = orderService.createOrder(1L);

        assertEquals(1L, response.getId());
        assertEquals(1L, response.getUserId());
        assertEquals(30000.0, response.getTotalAmount());
        assertEquals("ONAYLANDI", response.getStatus());
        assertEquals(1, response.getItems().size());

        assertEquals(8, product.getStock());

        verify(productRepository).save(product);
        verify(orderRepository).save(any(Order.class));
        verify(cartItemRepository).deleteByUserId(1L);
        verify(activityLogService).log(eq(1L), eq("ORDER_CREATED"), anyString());
    }

    @Test
    void createOrder_ShouldThrowException_WhenCartIsEmpty() {
        when(cartItemRepository.findByUserId(1L)).thenReturn(List.of());

        assertThrows(BadRequestException.class, () -> orderService.createOrder(1L));

        verify(orderRepository, never()).save(any(Order.class));
    }

    @Test
    void createOrder_ShouldThrowException_WhenStockIsNotEnough() {
        Product product = Product.builder()
                .id(1L)
                .name("Laptop")
                .price(15000.0)
                .stock(1)
                .isActive(true)
                .build();

        CartItem cartItem = CartItem.builder()
                .id(1L)
                .userId(1L)
                .product(product)
                .quantity(5)
                .build();

        when(cartItemRepository.findByUserId(1L)).thenReturn(List.of(cartItem));

        assertThrows(BadRequestException.class, () -> orderService.createOrder(1L));

        verify(orderRepository, never()).save(any(Order.class));
    }
}
