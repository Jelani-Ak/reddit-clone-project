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
import java.util.Set;

@Data
@Document(value = "Reddit-Post")
public class RedditPost {
    @Id
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId redditPostId;
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId authorId;
    private String authorName;
    private String subRedditName;
    private Media media;
    private String content;
    private RedditFlair redditFlair;
    private int likes;
    private int dislikes;

    @CreatedDate
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime dateOfCreation;

    @DBRef
    private Set<Comment> comments;
}

