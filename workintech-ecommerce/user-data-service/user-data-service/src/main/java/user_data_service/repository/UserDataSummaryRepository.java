package user_data_service.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import user_data_service.entity.UserDataSummary;

public interface UserDataSummaryRepository extends JpaRepository<UserDataSummary, Long>{
    
    Optional<UserDataSummary> findByUserId(Long userId);
}
