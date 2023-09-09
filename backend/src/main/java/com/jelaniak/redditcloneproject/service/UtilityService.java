package com.jelaniak.redditcloneproject.service;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class UtilityService {

    public String getTimeNow() {
        String timeNow = "[" + LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss")) + "] ";
        return timeNow;
    }
}
