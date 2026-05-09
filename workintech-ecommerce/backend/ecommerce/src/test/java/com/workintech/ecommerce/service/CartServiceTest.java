package com.workintech.ecommerce.service;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.workintech.ecommerce.dto.AddCartItemRequest;
import com.workintech.ecommerce.dto.UpdateCartItemRequest;
import com.workintech.ecommerce.entity.CartItem;
import com.workintech.ecommerce.entity.Product;
import com.workintech.ecommerce.exception.BadRequestException;
import com.workintech.ecommerce.repository.CartItemRepository;
import com.workintech.ecommerce.repository.ProductRepository;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class CartServiceTest {
    
    @Mock
    private CartItemRepository cartItemRepository;

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private CartService cartService;

    @Test
    void addItem_ShouldAddProductToCart_WhenStockIsEnough() {
        Product product = Product.builder()
        .id(1L)
        .name("Laptop")
        .price(15000.0)
        .stock(10)
        .isActive(true)
        .build();

        AddCartItemRequest request = new AddCartItemRequest();
        request.setProductId(1L);
        request.setQuantity(2);

        when(productRepository.findById(1L)).thenReturn(Optional.of(product));
        when(cartItemRepository.findByUserIdAndProductId(1L, 1L)).thenReturn(Optional.empty());
        when(cartItemRepository.findByUserId(1L)).thenReturn(List.of(
            CartItem.builder().userId(1L).product(product).quantity(2).build()
        ));

        var response = cartService.addItem(1L, request);

        assertEquals(1L, response.getUserId());
        assertEquals(1, response.getItems().size());
        assertEquals(30000.0, response.getTotalPrice());

        verify(cartItemRepository).save(any(CartItem.class));
    }

    @Test
    void addItem_ShouldThrowException_WhenStockIsNotEnough() {
        Product product = Product.builder()
        .id(1L)
        .name("Laptop")
        .stock(1)
        .isActive(true)
        .build();

        AddCartItemRequest request = new AddCartItemRequest();
        request.setProductId(1L);
        request.setQuantity(5);

        when(productRepository.findById(1L)).thenReturn(Optional.of(product));
        when(cartItemRepository.findByUserIdAndProductId(1L, 1L)).thenReturn(Optional.empty());

        assertThrows(BadRequestException.class, () -> cartService.addItem(1L, request));
    }

    @Test
    void updateItem_ShouldDeleteItem_WhenQuantityIsZero() {
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

        UpdateCartItemRequest request = new UpdateCartItemRequest();
        request.setQuantity(0);

        when(cartItemRepository.findByUserIdAndProductId(1L, 1L)).thenReturn(Optional.of(cartItem));
        when(cartItemRepository.findByUserId(1L)).thenReturn(List.of());

        var response = cartService.updateItem(1L, 1L, request);

        assertEquals(0, response.getItems().size());
        assertEquals(0.0, response.getTotalPrice());

        verify(cartItemRepository).delete(cartItem);
    }
}
