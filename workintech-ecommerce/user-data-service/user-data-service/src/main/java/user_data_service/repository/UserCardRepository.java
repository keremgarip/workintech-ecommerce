package user_data_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import user_data_service.entity.UserCard;
import java.util.List;


public interface UserCardRepository extends JpaRepository<UserCard, Long> {
    List<UserCard> findByUserId(Long userId);
    
}
