package com.jelaniak.redditcloneproject.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Data
@Document(value = "Sub-Reddit")
public class SubReddit {

    @Id
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId subRedditId;
    private String subRedditName;
    private Media subRedditIcon;
    private Media subRedditBanner;
    private LocalDateTime subRedditCreationDate;
    private SubRedditSideBar subRedditSideBar;

    @DBRef
    private Set<User> subRedditMembers;
    @DBRef
    private Set<User> subRedditModerators;

    @DBRef
    private Set<RedditPost> redditPosts;
}


