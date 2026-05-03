package user_data_service.dto;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ExternalUserProfileResponse {
    private Long userId;
    private LocalDate birthDate;
    private String gender;
    private String city;
    private String interests;
}
