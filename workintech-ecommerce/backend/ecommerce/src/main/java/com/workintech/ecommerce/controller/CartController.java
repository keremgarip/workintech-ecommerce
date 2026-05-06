package com.workintech.ecommerce.controller;

import com.workintech.ecommerce.dto.*;
import com.workintech.ecommerce.service.CartService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping
    public CartResponse getCart(@RequestParam Long userId) {
        return cartService.getCart(userId);
    }

    @PostMapping("/items")
    public CartResponse addItem(
            @RequestParam Long userId,
            @Valid @RequestBody AddCartItemRequest request
    ) {
        return cartService.addItem(userId, request);
    }

    @PutMapping("/items/{productId}")
    public CartResponse updateItem(
            @RequestParam Long userId,
            @PathVariable Long productId,
            @Valid @RequestBody UpdateCartItemRequest request
    ) {
        return cartService.updateItem(userId, productId, request);
    }

    @DeleteMapping("/items/{productId}")
    public CartResponse removeItem(
            @RequestParam Long userId,
            @PathVariable Long productId
    ) {
        return cartService.removeItem(userId, productId);
    }

    @DeleteMapping("/clear")
    public CartResponse clearCart(@RequestParam Long userId) {
        return cartService.clearCart(userId);
    }
}