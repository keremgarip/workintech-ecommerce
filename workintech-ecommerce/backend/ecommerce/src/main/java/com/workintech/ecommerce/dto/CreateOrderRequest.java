package com.workintech.ecommerce.dto;

import lombok.Data;

@Data
public class CreateOrderRequest {
    private Long userId;
    private String shippingAddress;
    private String paymentMethod;
    private String customerName;
    private String customerPhone;
}
