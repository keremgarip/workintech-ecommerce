package com.workintech.ecommerce.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.workintech.ecommerce.dto.UserDataSummaryResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserDataIntegrationService {
    
    private final RestTemplate restTemplate;

    @Value("${helper.service.url}")
    private String helperServiceUrl;

    public UserDataSummaryResponse getUserSummary(Long userId) {
        String url = helperServiceUrl + "/api/integration/users/" + userId + "/summary";

        return restTemplate.getForObject(url, UserDataSummaryResponse.class);
    }

    public void createInitialProfile(Long userId, String city) {
        String url = helperServiceUrl + "/api/external-users/" + userId + "/profile";

        var request = new java.util.HashMap<String, Object>();
        request.put("city", city);
        request.put("interests", "");
        request.put("gender", null);
        request.put("birthDate", null);

        try {
            restTemplate.postForObject(url, request, Object.class);
        } catch (Exception e) {
            System.out.println("Helper service profile creation failed");
        }
    }
}
