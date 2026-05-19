package user_data_service.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserAddressResponse {
    private Long id;
    private Long userId;
    private String title;
    private String name;
    private String surname;
    private String phone;
    private String city;
    private String district;
    private String neighborhood;
    private String address;
}
