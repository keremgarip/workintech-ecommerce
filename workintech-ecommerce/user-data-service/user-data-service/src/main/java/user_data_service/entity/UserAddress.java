package user_data_service.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "user_addresses")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserAddress {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private String title;
    private String name;
    private String surname;
    private String phone;
    private String city;
    private String district;
    private String neighborhood;

    @Column(length = 500)
    private String address;
}
