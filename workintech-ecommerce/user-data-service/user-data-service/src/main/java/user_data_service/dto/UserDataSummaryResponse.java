package user_data_service.dto;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDataSummaryResponse {
    
    private Long userId;
    private String city;
    private String favoriteCategory;
    private LocalDateTime lastLoginDate;
    private Integer totalViews;
}
