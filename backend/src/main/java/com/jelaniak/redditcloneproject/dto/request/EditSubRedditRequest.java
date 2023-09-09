package com.jelaniak.redditcloneproject.dto.request;

import com.jelaniak.redditcloneproject.model.Media;
import org.bson.types.ObjectId;

public record EditSubRedditRequest(
        ObjectId subRedditId,
        String subRedditName,
        Media subRedditIcon,
        Media subRedditBanner) {
}
