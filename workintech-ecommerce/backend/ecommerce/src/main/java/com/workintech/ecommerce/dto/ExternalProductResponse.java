package com.workintech.ecommerce.dto;

import java.util.List;

import lombok.Data;

@Data
public class ExternalProductResponse {
    private List<ExternalProductDto> products;
    private Integer total;
}
