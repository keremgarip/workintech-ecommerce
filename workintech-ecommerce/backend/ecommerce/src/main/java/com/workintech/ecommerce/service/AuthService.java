package com.workintech.ecommerce.service;

import java.time.LocalDateTime;

import com.workintech.ecommerce.dto.*;
import com.workintech.ecommerce.entity.User;
import com.workintech.ecommerce.exception.BadRequestException;
import com.workintech.ecommerce.exception.UnauthorizedException;
import com.workintech.ecommerce.repository.UserRepository;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final ActivityLogService activityLogService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserDataIntegrationService userDataIntegrationService;

    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new BadRequestException("Email already exists");
        }

        User user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .passwordHash(passwordEncoder.encode(request.getPassword()))
                .role("USER")
                .isActive(true)
                .createdAt(LocalDateTime.now())
                .build();

        User savedUser = userRepository.save(user);

activityLogService.log(
        savedUser.getId(),
        "USER_REGISTER",
        "User registered with email: " + savedUser.getEmail()
);
        userDataIntegrationService.createInitialProfile(savedUser.getId(), savedUser.getAddress());

        return AuthResponse.builder()
        .userId(savedUser.getId())
        .email(savedUser.getEmail())
        .role(savedUser.getRole())
        .token("dummy-token")
        .build();
    }

    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
        .orElseThrow(() -> new UnauthorizedException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPasswordHash())) {
            throw new UnauthorizedException("Invalid email or password");
        }

        activityLogService.log(
        user.getId(),
        "USER_LOGIN",
        "User logged in with email: " + user.getEmail()
);

        return AuthResponse.builder()
                .userId(user.getId())
                .email(user.getEmail())
                .role(user.getRole())
                .token("dummy-token")
                .build();
    }
}