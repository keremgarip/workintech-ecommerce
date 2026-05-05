package com.workintech.ecommerce.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class UserDataSummaryResponse {
    private Long userId;
    private String city;
    private String favoriteCategory;
    private LocalDateTime lastLoginDate;
    private Integer totalViews;
}
