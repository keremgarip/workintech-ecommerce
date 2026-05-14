package com.workintech.ecommerce.service;

import com.workintech.ecommerce.dto.ExternalProductDto;
import com.workintech.ecommerce.dto.ExternalProductResponse;
import com.workintech.ecommerce.entity.Product;
import com.workintech.ecommerce.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ProductImportService {

    private final ProductRepository productRepository;
    private final RestTemplate restTemplate;

    public void importProductsFromExternalApi() {
        String url = "https://workintech-fe-ecommerce.onrender.com/products?limit=100&offset=0";

    ExternalProductResponse response;

    try {
        response = restTemplate.getForObject(url, ExternalProductResponse.class);
        System.out.println("IMPORT RESPONSE: " + response);
    } catch (Exception e) {
        e.printStackTrace();
        throw e;
    }

    if (response == null || response.getProducts() == null) {
        return;
    }

        for (ExternalProductDto externalProduct : response.getProducts()) {

            String imageUrl = null;

            if (externalProduct.getImages() != null && !externalProduct.getImages().isEmpty()) {
                imageUrl = externalProduct.getImages().get(0).getUrl();
            } else {
                imageUrl = externalProduct.getImage();
            }

            Product product = Product.builder()
                    .name(externalProduct.getName())
                    .description(externalProduct.getDescription())
                    .price(externalProduct.getPrice())
                    .stock(externalProduct.getStock() != null ? externalProduct.getStock() : 10)
                    .imageUrl(imageUrl)
                    .isActive(true)
                    .createdAt(LocalDateTime.now())
                    .build();

            productRepository.save(product);
        }
    }
}
