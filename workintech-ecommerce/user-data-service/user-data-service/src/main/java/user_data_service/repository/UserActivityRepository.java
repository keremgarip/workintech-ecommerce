package user_data_service.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import user_data_service.entity.UserActivity;

public interface UserActivityRepository extends JpaRepository<UserActivity, Long> {
    List<UserActivity> findByUserIdOrderByCreatedAtDesc(Long userId);

}
