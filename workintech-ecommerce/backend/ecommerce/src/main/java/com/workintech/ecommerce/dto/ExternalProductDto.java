package com.workintech.ecommerce.dto;

import lombok.Data;
import java.util.List;

@Data
public class ExternalProductDto {
    private Long id;
    private String name;
    private String description;
    private Double price;
    private Integer stock;
    private String image;
    private List<ExternalProductImageDto> images;
}