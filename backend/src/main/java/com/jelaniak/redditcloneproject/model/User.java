package com.jelaniak.redditcloneproject.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Data
@Document(value = "User")
public class User {

    @Id
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId userId;
    private String username;
    private String password;
    private String email;
    private String displayName;
    private String profileAboutText;
    private String profileLocation;
    private List<String> profileSocialLinks;

    @DBRef private Set<Role> roles;

    @CreatedDate
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime dateOfCreation;

    private Media userAvatar;
    private Media userBanner;

    @DBRef private Set<User> usersYouFollow;

    @DBRef private Set<RedditPost> redditPosts;

    // TODO: In the frontend, do a filter on:
    //  - Liked reddit posts/comments
    //  - Disliked reddit posts/comments
    //  - Saved reddit posts/comments
    //  - hidden reddit posts/comments

    // Actioned meaning, liked, disliked, saved, hidden etc
    @DBRef private Set<RedditPost> actionedRedditPosts;
    @DBRef private Set<Comment> actionedComments;

    private boolean verified;
    private boolean locked;
    private boolean enabled;
}
