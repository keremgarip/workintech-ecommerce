package user_data_service.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import user_data_service.dto.UserActivityRequest;
import user_data_service.dto.UserActivityResponse;
import user_data_service.entity.UserActivity;
import user_data_service.repository.UserActivityRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserActivityService {

    private final UserActivityRepository repository;

    public UserActivityResponse addActivity(Long userId, UserActivityRequest request) {
        UserActivity activity = UserActivity.builder()
                .userId(userId)
                .activityType(request.getActivityType())
                .description(request.getDescription())
                .ipAddress(request.getIpAddress())
                .deviceInfo(request.getDeviceInfo())
                .createdAt(LocalDateTime.now())
                .build();

        return toResponse(repository.save(activity));
    }

    public List<UserActivityResponse> getActivities(Long userId) {
        return repository.findByUserIdOrderByCreatedAtDesc(userId)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    private UserActivityResponse toResponse(UserActivity activity) {
        return UserActivityResponse.builder()
                .id(activity.getId())
                .userId(activity.getUserId())
                .activityType(activity.getActivityType())
                .description(activity.getDescription())
                .ipAddress(activity.getIpAddress())
                .deviceInfo(activity.getDeviceInfo())
                .createdAt(activity.getCreatedAt())
                .build();
    }
}
