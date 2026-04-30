package user_data_service.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "user_data_summaries")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDataSummary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private String city;

    private String favoriteCategory;

    private LocalDateTime lastLoginDate;

    private Integer totalViews;

    private LocalDateTime updatedAt;
}
