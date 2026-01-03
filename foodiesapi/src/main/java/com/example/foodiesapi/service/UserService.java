package com.example.foodiesapi.service;

import com.example.foodiesapi.io.UserRequest;
import com.example.foodiesapi.io.UserResponse;
import org.springframework.security.core.context.SecurityContextHolder;

public interface UserService {
    UserResponse registerUser(UserRequest request);

    String findByUserId();
}
