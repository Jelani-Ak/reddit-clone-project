package com.jelaniak.redditcloneproject.repository;

import com.jelaniak.redditcloneproject.model.SubReddit;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubRedditRepository extends MongoRepository<SubReddit, ObjectId> {
}
