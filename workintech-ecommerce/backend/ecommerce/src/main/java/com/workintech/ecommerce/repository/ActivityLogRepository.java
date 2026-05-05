package com.workintech.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workintech.ecommerce.entity.ActivityLog;

public interface ActivityLogRepository extends JpaRepository<ActivityLog, Long> {
    
}
