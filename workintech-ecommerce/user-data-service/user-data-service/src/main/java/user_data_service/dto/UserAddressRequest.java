package user_data_service.dto;

import lombok.Data;

@Data
public class UserAddressRequest {
    private String title;
    private String name;
    private String surname;
    private String phone;
    private String city;
    private String district;
    private String neighborhood;
    private String address;
}
