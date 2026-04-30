package user_data_service.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import user_data_service.service.UserDataSummaryService;
import user_data_service.dto.UserDataSummaryResponse;

@RestController
@RequestMapping("/api/integration/users")
@RequiredArgsConstructor
public class IntegrationController {
    
    private final UserDataSummaryService summaryService;

    @GetMapping("/{userId}/summary")
    public UserDataSummaryResponse getUserSummary(@PathVariable Long userId) {
        return summaryService.getSummary(userId);
    }
}
