package user_data_service.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import user_data_service.dto.ExternalUserProfileRequest;
import user_data_service.dto.ExternalUserProfileResponse;
import user_data_service.entity.ExternalUserProfile;
import user_data_service.repository.ExternalUserProfileRepository;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ExternalUserProfileService {

    private final ExternalUserProfileRepository repository;

    public ExternalUserProfileResponse getProfile(Long userId) {
        ExternalUserProfile profile = repository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        return toResponse(profile);
    }

    public ExternalUserProfileResponse saveOrUpdateProfile(Long userId, ExternalUserProfileRequest request) {
        ExternalUserProfile profile = repository.findByUserId(userId)
                .orElse(
                        ExternalUserProfile.builder()
                                .userId(userId)
                                .createdAt(LocalDateTime.now())
                                .build()
                );

        profile.setBirthDate(request.getBirthDate());
        profile.setGender(request.getGender());
        profile.setCity(request.getCity());
        profile.setInterests(request.getInterests());
        profile.setUpdatedAt(LocalDateTime.now());

        ExternalUserProfile savedProfile = repository.save(profile);

        return toResponse(savedProfile);
    }

    private ExternalUserProfileResponse toResponse(ExternalUserProfile profile) {
        return ExternalUserProfileResponse.builder()
                .userId(profile.getUserId())
                .birthDate(profile.getBirthDate())
                .gender(profile.getGender())
                .city(profile.getCity())
                .interests(profile.getInterests())
                .build();
    }
}
