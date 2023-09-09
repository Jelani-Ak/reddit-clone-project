package com.jelaniak.redditcloneproject.repository;

import com.jelaniak.redditcloneproject.model.RedditPost;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RedditPostRepository extends MongoRepository<RedditPost, ObjectId> {
}
