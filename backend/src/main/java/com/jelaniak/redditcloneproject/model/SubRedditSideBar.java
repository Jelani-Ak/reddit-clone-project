package com.jelaniak.redditcloneproject.model;

import lombok.Data;

import java.util.List;

@Data
public class SubRedditSideBar {
    private String subRedditDescription;
    private List<RedditFlair> redditFlair;
}
