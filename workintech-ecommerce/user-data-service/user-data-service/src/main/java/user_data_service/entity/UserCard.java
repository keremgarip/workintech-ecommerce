package user_data_service.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "user_card")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserCard {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private String cardHolderName;

    private String cardNumber;

    private String expireMonth;

    private String expireYear;

    private String cvv;
}
