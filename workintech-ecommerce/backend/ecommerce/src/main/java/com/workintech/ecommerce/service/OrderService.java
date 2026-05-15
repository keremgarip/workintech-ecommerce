package com.workintech.ecommerce.service;

import com.workintech.ecommerce.dto.CreateOrderRequest;
import com.workintech.ecommerce.dto.OrderItemResponse;
import com.workintech.ecommerce.dto.OrderResponse;
import com.workintech.ecommerce.entity.CartItem;
import com.workintech.ecommerce.entity.Order;
import com.workintech.ecommerce.entity.OrderItem;
import com.workintech.ecommerce.entity.Product;
import com.workintech.ecommerce.exception.BadRequestException;
import com.workintech.ecommerce.repository.CartItemRepository;
import com.workintech.ecommerce.repository.OrderRepository;
import com.workintech.ecommerce.repository.ProductRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final CartItemRepository cartItemRepository;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;
    private final ActivityLogService activityLogService;

    @Transactional
    public OrderResponse createOrder(CreateOrderRequest request) {
        Long userId = request.getUserId();

        if (userId == null) {
            throw new BadRequestException("User ID is required");
        }

        List<CartItem> cartItems = cartItemRepository.findByUserId(userId);

        if (cartItems.isEmpty()) {
            throw new BadRequestException("Cart is empty");
        }

        for (CartItem cartItem : cartItems) {
            Product product = cartItem.getProduct();

            if (!product.getIsActive()) {
                throw new RuntimeException("Product is not active: " + product.getName());
            }

            if (cartItem.getQuantity() > product.getStock()) {
                throw new BadRequestException("Not enough stock for product: " + product.getName());
            }
        }

        Order order = Order.builder()
                .userId(userId)
                .orderNumber(generateOrderNumber())
                .status("ONAYLANDI")
                .shippingAddress(request.getShippingAddress())
                .paymentMethod(request.getPaymentMethod())
                .customerName(request.getCustomerName())
                .customerPhone(request.getCustomerPhone())
                .createdAt(LocalDateTime.now())
                .build();

        List<OrderItem> orderItems = cartItems.stream()
                .map(cartItem -> {
                    Product product = cartItem.getProduct();

                    double lineTotal = product.getPrice() * cartItem.getQuantity();

                    product.setStock(product.getStock() - cartItem.getQuantity());
                    productRepository.save(product);

                    return OrderItem.builder()
                            .order(order)
                            .productId(product.getId())
                            .productName(product.getName())
                            .quantity(cartItem.getQuantity())
                            .unitPrice(product.getPrice())
                            .lineTotal(lineTotal)
                            .build();
                })
                .toList();

        double totalAmount = orderItems.stream()
                .mapToDouble(OrderItem::getLineTotal)
                .sum();

        order.setItems(orderItems);
        order.setTotalAmount(totalAmount);

        Order savedOrder = orderRepository.save(order);

        activityLogService.log(
            userId,
            "ORDER_CREATED",
            "Order created: " + savedOrder.getOrderNumber()
        );

        cartItemRepository.deleteByUserId(userId);

        return toResponse(savedOrder);
    }

    private String generateOrderNumber() {
        return "ORD-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
    }

    private OrderResponse toResponse(Order order) {
        List<OrderItemResponse> itemResponses = order.getItems().stream()
                .map(item -> OrderItemResponse.builder()
                        .productId(item.getProductId())
                        .productName(item.getProductName())
                        .quantity(item.getQuantity())
                        .unitPrice(item.getUnitPrice())
                        .lineTotal(item.getLineTotal())
                        .build())
                .toList();

        return OrderResponse.builder()
                .id(order.getId())
                .orderNumber(order.getOrderNumber())
                .userId(order.getUserId())
                .totalAmount(order.getTotalAmount())
                .status(order.getStatus())
                .createdAt(order.getCreatedAt())
                .items(itemResponses)
                .build();
    }

    public Page<OrderResponse> getOrderHistory(Long userId, Pageable pageable) {
        return orderRepository.findByUserIdOrderByCreatedAtDesc(userId, pageable)
        .map(this::toResponse);
    }

    public Page<OrderResponse> getAllOrdersForAdmin(Pageable pageable) {
        return orderRepository.findAllByOrderByCreatedAtDesc(pageable)
        .map(this::toResponse);
    }
}
