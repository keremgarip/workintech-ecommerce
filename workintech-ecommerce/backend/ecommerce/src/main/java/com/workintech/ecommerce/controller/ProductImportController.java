package com.workintech.ecommerce.controller;

import com.workintech.ecommerce.service.ProductImportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/import")
@RequiredArgsConstructor
public class ProductImportController {

    private final ProductImportService productImportService;

    @PostMapping("/products")
    public ResponseEntity<Map<String, Object>> importProducts() {
        int importedCount =
                productImportService.importProductsFromExternalApi();

        return ResponseEntity.ok(
                Map.of(
                        "message", "Products imported successfully",
                        "importedCount", importedCount
                )
        );
    }
}
