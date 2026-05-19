package user_data_service.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserCardResponse {
    private Long id;
    private Long userId;
    private String cardHolderName;
    private String cardNumber;
    private String expireMonth;
    private String expireYear;
}
