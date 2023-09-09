package com.jelaniak.redditcloneproject.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.time.LocalDateTime;
import java.util.Set;

@Data
public class Comment {
    @Id
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId commentId;
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId userId;
    private Media media;
    private String content;

    @CreatedDate
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime dateOfCreation;

    @DBRef
    private Set<Comment> innerComments;
}
