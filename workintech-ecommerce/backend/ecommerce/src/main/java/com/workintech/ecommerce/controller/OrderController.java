package com.workintech.ecommerce.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.workintech.ecommerce.dto.CreateOrderRequest;
import com.workintech.ecommerce.dto.OrderResponse;
import com.workintech.ecommerce.service.OrderService;

import lombok.RequiredArgsConstructor;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @PostMapping
    public OrderResponse createOrder(@RequestBody CreateOrderRequest request) {
        return orderService.createOrder(request);
    }

    @GetMapping
    public Page<OrderResponse> getOrderHistory(@RequestParam Long userId, Pageable pageable) {
        return orderService.getOrderHistory(userId, pageable);
    }
    
}
