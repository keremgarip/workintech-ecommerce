package com.workintech.ecommerce.service;

import com.workintech.ecommerce.dto.LoginRequest;
import com.workintech.ecommerce.dto.RegisterRequest;
import com.workintech.ecommerce.entity.User;
import com.workintech.ecommerce.exception.BadRequestException;
import com.workintech.ecommerce.exception.UnauthorizedException;
import com.workintech.ecommerce.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class AuthServiceTest {
    
    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private ActivityLogService activityLogService;

    @InjectMocks
    private AuthService authService;

    @Test
    void register_ShouldCreateUser_WhenEmailDoesNotExist() {
        RegisterRequest request = new RegisterRequest();
        request.setFirstName("Ali");
        request.setLastName("Veli");
        request.setEmail("ali@test.com");
        request.setPassword("123456");

        when(userRepository.existsByEmail("ali@test.com")).thenReturn(false);
        when(passwordEncoder.encode("123456")).thenReturn("hashedPassword");
        
        User savedUser = User.builder()
        .id(1L)
        .firstName("Ali")
        .lastName("Veli")
        .email("ali@test.com")
        .passwordHash("hashedPassword")
        .role("USER")
        .isActive(true)
        .build();

        when(userRepository.save(any(User.class))).thenReturn(savedUser);

        var response = authService.register(request);

        assertEquals("ali@test.com", response.getEmail());
        assertEquals("dummy-token", response.getToken());

        verify(userRepository).save(any(User.class));
        verify(activityLogService).log(eq(1L), eq("USER_REGISTER"), anyString());
    }

    @Test
    void register_ShouldThrowException_WhenEmailExists() {
        RegisterRequest request = new RegisterRequest();
        request.setEmail("ali@test.com");

        when(userRepository.existsByEmail("ali@test.com")).thenReturn(true);

        assertThrows(BadRequestException.class, () -> authService.register(request));

        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    void login_ShouldReturnResponse_WhenCredentialsAreCorrect() {
        LoginRequest request = new LoginRequest();
        request.setEmail("ali@test.com");
        request.setPassword("123456");

        User user = User.builder()
        .id(1L)
        .email("ali@test.com")
        .passwordHash("hashedPassword")
        .build();

        when(userRepository.findByEmail("ali@test.com")).thenReturn(Optional.of(user));
        when(passwordEncoder.matches("123456", "hashedPassword")).thenReturn(true);

        var response = authService.login(request);

        assertEquals("ali@test.com", response.getEmail());
        assertEquals("dummy-token", response.getToken());

        verify(activityLogService).log(eq(1L), eq("USER_LOGIN"), anyString());
    }

    @Test
    void login_ShouldThrowException_WhenPasswordWrong() {
        LoginRequest request = new LoginRequest();
        request.setEmail("ali@test.com");
        request.setPassword("wrong");

        User user = User.builder()
                .id(1L)
                .email("ali@test.com")
                .passwordHash("hashedPassword")
                .build();

        when(userRepository.findByEmail("ali@test.com")).thenReturn(Optional.of(user));
        when(passwordEncoder.matches("wrong", "hashedPassword")).thenReturn(false);

        assertThrows(UnauthorizedException.class, () -> authService.login(request));
    }
}
