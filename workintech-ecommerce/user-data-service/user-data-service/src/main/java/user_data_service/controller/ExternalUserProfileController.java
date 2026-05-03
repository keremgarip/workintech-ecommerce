package user_data_service.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import user_data_service.dto.ExternalUserProfileRequest;
import user_data_service.dto.ExternalUserProfileResponse;
import user_data_service.service.ExternalUserProfileService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping("/api/external-users/{userId}/profile")
@RequiredArgsConstructor
public class ExternalUserProfileController {
    
    private final ExternalUserProfileService profileService;

    @GetMapping
    public ExternalUserProfileResponse getProfile(@PathVariable Long userId) {
        return profileService.getProfile(userId);
    }

    @PostMapping
    public ExternalUserProfileResponse createOrUpdateProfile(@PathVariable Long userId, @RequestBody ExternalUserProfileRequest request) {
        
        return profileService.saveOrUpdateProfile(userId, request);
    }

    @PutMapping
    public ExternalUserProfileResponse updateProfile(@PathVariable Long userId, @RequestBody ExternalUserProfileRequest request) {
        
        return profileService.saveOrUpdateProfile(userId, request);
    }
    
}
