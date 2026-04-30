package com.workintech.ecommerce.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.workintech.ecommerce.dto.OrderResponse;
import com.workintech.ecommerce.service.OrderService;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @PostMapping
    public OrderResponse createOrder(@RequestParam Long userId) {
        return orderService.createOrder(userId);
    }

    @GetMapping
    public List<OrderResponse> getOrderHistory(@RequestParam Long userId) {
        return orderService.getOrderHistory(userId);
    }
    
}
