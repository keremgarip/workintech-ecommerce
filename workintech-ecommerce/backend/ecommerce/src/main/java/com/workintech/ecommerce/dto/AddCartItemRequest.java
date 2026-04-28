package com.workintech.ecommerce.dto;

import lombok.Data;

@Data
public class AddCartItemRequest {
    private Long productId;
    private Integer quantity;
}
