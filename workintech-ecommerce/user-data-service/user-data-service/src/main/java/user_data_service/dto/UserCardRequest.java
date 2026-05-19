package user_data_service.dto;

import lombok.Data;

@Data
public class UserCardRequest {
    private String cardHolderName;
    private String cardNumber;
    private String expireMonth;
    private String expireYear;
    private String cvv;
}
