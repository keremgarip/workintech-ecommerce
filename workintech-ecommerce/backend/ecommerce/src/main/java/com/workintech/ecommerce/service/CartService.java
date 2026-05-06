package com.workintech.ecommerce.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.workintech.ecommerce.dto.AddCartItemRequest;
import com.workintech.ecommerce.dto.CartItemResponse;
import com.workintech.ecommerce.dto.CartResponse;
import com.workintech.ecommerce.dto.UpdateCartItemRequest;
import com.workintech.ecommerce.entity.CartItem;
import com.workintech.ecommerce.entity.Product;
import com.workintech.ecommerce.exception.BadRequestException;
import com.workintech.ecommerce.exception.ResourceNotFoundException;
import com.workintech.ecommerce.repository.CartItemRepository;
import com.workintech.ecommerce.repository.ProductRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CartService {
    private final CartItemRepository cartItemRepository;
    private final ProductRepository productRepository;

    public CartResponse getCart(Long userId) {
        List<CartItem> cartItems = cartItemRepository.findByUserId(userId);

        List<CartItemResponse> itemResponses = cartItems.stream()
                .map(this::toItemResponse)
                .toList();

        double total = itemResponses.stream()
                .mapToDouble(CartItemResponse::getLineTotal)
                .sum();

        return CartResponse.builder()
                .userId(userId)
                .items(itemResponses)
                .totalPrice(total)
                .build();
    }

    public CartResponse addItem(Long userId, AddCartItemRequest request) {
        Product product = productRepository.findById(request.getProductId())
                .filter(Product::getIsActive)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        if (request.getQuantity() == null || request.getQuantity() <= 0) {
            throw new BadRequestException("Quantity must be greater than 0");
        }

        CartItem cartItem = cartItemRepository
                .findByUserIdAndProductId(userId, product.getId())
                .orElse(null);

        int newQuantity = request.getQuantity();

        if (cartItem != null) {
            newQuantity += cartItem.getQuantity();
        }

        if (newQuantity > product.getStock()) {
            throw new BadRequestException("Not enough stock");
        }

        if (cartItem == null) {
            cartItem = CartItem.builder()
                    .userId(userId)
                    .product(product)
                    .quantity(newQuantity)
                    .addedAt(LocalDateTime.now())
                    .build();
        } else {
            cartItem.setQuantity(newQuantity);
        }

        cartItemRepository.save(cartItem);

        return getCart(userId);
    }

    public CartResponse updateItem(Long userId, Long productId, UpdateCartItemRequest request) {
        CartItem cartItem = cartItemRepository.findByUserIdAndProductId(userId, productId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart item not found"));

        if (request.getQuantity() == null || request.getQuantity() < 0) {
            throw new RuntimeException("Quantity cannot be negative");
        }

        if (request.getQuantity() == 0) {
            cartItemRepository.delete(cartItem);
            return getCart(userId);
        }

        Product product = cartItem.getProduct();

        if (request.getQuantity() > product.getStock()) {
            throw new RuntimeException("Not enough stock");
        }

        cartItem.setQuantity(request.getQuantity());
        cartItemRepository.save(cartItem);

        return getCart(userId);
    }

    @Transactional
    public CartResponse removeItem(Long userId, Long productId) {
        cartItemRepository.deleteByUserIdAndProductId(userId, productId);
        return getCart(userId);
    }

    @Transactional
    public CartResponse clearCart(Long userId) {
        cartItemRepository.deleteByUserId(userId);
        return getCart(userId);
    }

    private CartItemResponse toItemResponse(CartItem cartItem) {
        Product product = cartItem.getProduct();

        double lineTotal = product.getPrice() * cartItem.getQuantity();

        return CartItemResponse.builder()
                .productId(product.getId())
                .productName(product.getName())
                .price(product.getPrice())
                .quantity(cartItem.getQuantity())
                .lineTotal(lineTotal)
                .build();
    }
}
