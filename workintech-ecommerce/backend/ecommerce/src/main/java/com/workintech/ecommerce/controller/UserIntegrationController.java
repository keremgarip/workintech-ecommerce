package com.workintech.ecommerce.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.workintech.ecommerce.dto.UserDataSummaryResponse;
import com.workintech.ecommerce.service.UserDataIntegrationService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserIntegrationController {
    
    private final UserDataIntegrationService integrationService;

    @GetMapping("/{userId}/summary")
    public UserDataSummaryResponse getUserSummary(@PathVariable Long userId) {
        return integrationService.getUserSummary(userId);
    }
}
