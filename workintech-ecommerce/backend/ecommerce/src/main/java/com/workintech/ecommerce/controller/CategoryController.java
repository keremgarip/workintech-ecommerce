package com.workintech.ecommerce.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import com.workintech.ecommerce.service.CategoryService;
import com.workintech.ecommerce.dto.CategoryResponse;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService CategoryService;

    @GetMapping
    public List<CategoryResponse> getMethodName() {
        return CategoryService.getAllActiveCategories();
    }
    
}
