package user_data_service.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import user_data_service.dto.UserActivityRequest;
import user_data_service.dto.UserActivityResponse;
import user_data_service.service.UserActivityService;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/external-users/{userId}/activities")
@RequiredArgsConstructor
public class UserActivityController {
    
    private final UserActivityService activityService;

    @PostMapping
    public UserActivityResponse addActivity(@PathVariable Long userId, @RequestBody UserActivityRequest request) {
        
        return activityService.addActivity(userId, request);
    }
    
    @GetMapping
    public List<UserActivityResponse> getActivities(@PathVariable Long userId) {
        return activityService.getActivities(userId);
    }
    
}
