package user_data_service.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class ExternalUserProfileRequest {
    private LocalDate birthDate;
    private String gender;
    private String city;
    private String interests;
}
