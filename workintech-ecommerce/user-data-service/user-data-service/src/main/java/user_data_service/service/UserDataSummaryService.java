package user_data_service.service;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import user_data_service.dto.UserDataSummaryResponse;
import user_data_service.entity.UserDataSummary;
import user_data_service.repository.UserDataSummaryRepository;

@Service
@RequiredArgsConstructor
public class UserDataSummaryService {
    
    private final UserDataSummaryRepository repository;

    public UserDataSummaryResponse getSummary(Long userId) {
        UserDataSummary summary = repository.findByUserId(userId)
        .orElse(null);

        if (summary == null) {
            return UserDataSummaryResponse.builder()
            .userId(userId)
            .city(null)
            .favoriteCategory(null)
            .lastLoginDate(null)
            .totalViews(0)
            .build();
        }

        return UserDataSummaryResponse.builder()
        .userId(summary.getUserId())
        .city(summary.getCity())
        .favoriteCategory(summary.getFavoriteCategory())
        .lastLoginDate(summary.getLastLoginDate())
        .totalViews(summary.getTotalViews())
        .build();
    }
}
