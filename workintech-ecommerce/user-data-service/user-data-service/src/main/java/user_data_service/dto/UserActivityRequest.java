package user_data_service.dto;

import lombok.Data;

@Data
public class UserActivityRequest {
   private String activityType;
   private String description;
   private String ipAddress;
   private String deviceInfo; 
}
