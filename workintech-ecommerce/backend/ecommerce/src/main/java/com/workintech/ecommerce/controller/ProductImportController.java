package com.workintech.ecommerce.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.workintech.ecommerce.service.ProductImportService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/import")
@RequiredArgsConstructor
public class ProductImportController {
    
    private final ProductImportService productImportService;

    @PostMapping("/products")
    public String importProducts() {
        productImportService.importProductsFromExternalApi();
        return "Products imported successfully";
    }
}
