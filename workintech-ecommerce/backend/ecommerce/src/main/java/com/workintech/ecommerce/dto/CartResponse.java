package com.workintech.ecommerce.dto;

import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CartResponse {
    private Long userId;
    private List<CartItemResponse> items;
    private Double totalPrice;
}
