package com.jelaniak.redditcloneproject.dto.request;

public record SignUpRequestDTO(
        String email,
        String username,
        String password) {
}
