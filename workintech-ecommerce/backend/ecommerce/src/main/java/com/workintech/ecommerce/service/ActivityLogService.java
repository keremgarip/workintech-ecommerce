package com.workintech.ecommerce.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.workintech.ecommerce.entity.ActivityLog;
import com.workintech.ecommerce.repository.ActivityLogRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ActivityLogService {
    
    private final ActivityLogRepository activityLogRepository;

    public void log(Long userId, String action, String description) {
        log.info("ACTION: {}, USER_ID: {}, DESCRIPTION: {}", action, userId, description);

        ActivityLog activityLog = ActivityLog.builder()
        .userId(userId)
        .action(action)
        .description(description)
        .createdAt(LocalDateTime.now())
        .build();

        activityLogRepository.save(activityLog);
    }
}
