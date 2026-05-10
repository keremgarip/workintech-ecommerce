package com.workintech.ecommerce.service;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.workintech.ecommerce.entity.Product;
import com.workintech.ecommerce.exception.ResourceNotFoundException;
import com.workintech.ecommerce.repository.ProductRepository;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ProductServiceTest {
    
    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductService productService;

    @Test
    void getAllActiveProducts_ShouldReturnOnlyActiveProducts() {
        Product product = Product.builder()
        .id(1L)
        .name("Laptop")
        .description("Gaming laptop")
        .price(15000.0)
        .stock(10)
        .imageUrl("img1.jpg")
        .isActive(true)
        .build();

        Pageable pageable = PageRequest.of(0, 10);

        when(productRepository.findByIsActiveTrue(pageable)).thenReturn(new PageImpl<>(List.of(product), pageable, 1));

        var result = productService.getAllActiveProducts(pageable);

        assertEquals(1, result.getTotalElements());
        assertEquals(1, result.getContent().size());
        assertEquals("Laptop", result.getContent().get(0).getName());

        verify(productRepository).findByIsActiveTrue(pageable);
    }

    @Test
    void getProductById_ShouldReturnProduct_WhenActiveProductExists() {
        Product product = Product.builder()
        .id(1L)
        .name("Laptop")
        .description("Gaming laptop")
        .price(15000.0)
        .stock(10)
        .imageUrl("img1.jpg")
        .isActive(true)
        .build();

        when(productRepository.findById(1L)).thenReturn(Optional.of(product));

        var result = productService.getProductById(1L);

        assertEquals(1L, result.getId());
        assertEquals("Laptop", result.getName());

    }

    @Test
    void getProductById_ShouldThrowException_WhenProductIsPassive() {
        Product product = Product.builder()
        .id(1L)
        .name("Old Product")
        .isActive(false)
        .build();

        when(productRepository.findById(1L)).thenReturn(Optional.of(product));

        assertThrows(ResourceNotFoundException.class, () -> productService.getProductById(1L));
    }
}
