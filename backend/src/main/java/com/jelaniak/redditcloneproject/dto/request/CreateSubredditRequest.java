package com.jelaniak.redditcloneproject.dto.request;

public record CreateSubredditRequest(
        String subRedditName,
        String subRedditDescription) {
}
