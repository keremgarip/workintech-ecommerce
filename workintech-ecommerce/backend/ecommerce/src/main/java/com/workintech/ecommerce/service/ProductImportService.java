package com.workintech.ecommerce.service;

import com.workintech.ecommerce.dto.ExternalProductDto;
import com.workintech.ecommerce.dto.ExternalProductResponse;
import com.workintech.ecommerce.entity.Product;
import com.workintech.ecommerce.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductImportService {

    private static final String BASE_URL =
            "https://workintech-fe-ecommerce.onrender.com/products";

    private static final int PAGE_SIZE = 100;

    private final ProductRepository productRepository;
    private final RestTemplate restTemplate;

    @Transactional
    public int importProductsFromExternalApi() {
        int offset = 0;
        int importedCount = 0;

        while (true) {
            String url = BASE_URL
                    + "?limit=" + PAGE_SIZE
                    + "&offset=" + offset;

            ExternalProductResponse response;

            try {
                response = restTemplate.getForObject(
                        url,
                        ExternalProductResponse.class
                );
            } catch (Exception exception) {
                throw new IllegalStateException(
                        "Ürünler alınamadı. Offset: " + offset,
                        exception
                );
            }

            if (response == null
                    || response.getProducts() == null
                    || response.getProducts().isEmpty()) {

                break;
            }

            List<Product> productsToSave = new ArrayList<>();

            for (ExternalProductDto externalProduct
                    : response.getProducts()) {

                String imageUrl = resolveImageUrl(externalProduct);

                Product product = Product.builder()
                        .name(externalProduct.getName())
                        .description(externalProduct.getDescription())
                        .price(externalProduct.getPrice())
                        .stock(
                                externalProduct.getStock() != null
                                        ? externalProduct.getStock()
                                        : 10
                        )
                        .imageUrl(imageUrl)
                        .isActive(true)
                        .createdAt(LocalDateTime.now())
                        .build();

                productsToSave.add(product);
            }

            productRepository.saveAll(productsToSave);

            int receivedCount = response.getProducts().size();

            importedCount += receivedCount;
            offset += receivedCount;

            System.out.println(
                    "Imported page: offset=" + offset
                            + ", received=" + receivedCount
                            + ", totalImported=" + importedCount
            );

            /*
             * Son sayfada 100'den az kayıt geldiyse
             * artık başka kayıt bulunmadığını kabul ediyoruz.
             */
            if (receivedCount < PAGE_SIZE) {
                break;
            }
        }

        return importedCount;
    }

    private String resolveImageUrl(
            ExternalProductDto externalProduct
    ) {
        if (externalProduct.getImages() != null
                && !externalProduct.getImages().isEmpty()) {

            return externalProduct
                    .getImages()
                    .get(0)
                    .getUrl();
        }

        return externalProduct.getImage();
    }
}