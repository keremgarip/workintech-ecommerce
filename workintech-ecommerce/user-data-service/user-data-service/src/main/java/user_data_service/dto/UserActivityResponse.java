package user_data_service.dto;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserActivityResponse {
    private Long id;
    private Long userId;
    private String activityType;
    private String description;
    private String ipAddress;
    private String deviceInfo;
    private LocalDateTime createdAt;
}
