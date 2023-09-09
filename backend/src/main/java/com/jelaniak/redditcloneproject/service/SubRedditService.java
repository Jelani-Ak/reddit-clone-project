package com.jelaniak.redditcloneproject.service;

import com.jelaniak.redditcloneproject.dto.request.CreateSubredditRequest;
import com.jelaniak.redditcloneproject.dto.request.EditSubRedditRequest;
import com.jelaniak.redditcloneproject.exception.subReddit.SubRedditNotFoundException;
import com.jelaniak.redditcloneproject.model.SubReddit;
import com.jelaniak.redditcloneproject.repository.SubRedditRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashSet;

@Service
public class SubRedditService {

    private final SubRedditRepository subRedditRepository;

    @Autowired
    public SubRedditService(
            SubRedditRepository subRedditRepository) {
        this.subRedditRepository = subRedditRepository;
    }

    public ObjectId createSubReddit(CreateSubredditRequest createSubredditRequest) {
        SubReddit subReddit = new SubReddit();
        subReddit.setSubRedditId(new ObjectId());
        subReddit.setSubRedditName(createSubredditRequest.subRedditName());
        subReddit.setSubRedditIcon(null);
        subReddit.setSubRedditBanner(null);
        subReddit.setSubRedditCreationDate(LocalDateTime.now());
        subReddit.setSubRedditSideBar(null);
        subReddit.setSubRedditMembers(new HashSet<>());
        subReddit.setSubRedditModerators(new HashSet<>());
        subReddit.setRedditPosts(new HashSet<>());

        return subRedditRepository.save(subReddit).getSubRedditId();
    }

    public String deleteSubreddit(ObjectId subRedditId, ObjectId userId) throws SubRedditNotFoundException {
        SubReddit subReddit = findSubReddit(subRedditId);
        boolean isPermittedUser = subReddit.getSubRedditModerators().stream().anyMatch(user -> user.getUserId() == userId);

        if (isPermittedUser) {
            subRedditRepository.delete(subReddit);
            return "Subreddit, '" + subReddit.getSubRedditName() + "' successfully deleted";
        }

        return "You do not have permission to delete this Subreddit";
    }

    public ObjectId editSubReddit(EditSubRedditRequest editSubRedditRequest) throws SubRedditNotFoundException {
        SubReddit subReddit = findSubReddit(editSubRedditRequest.subRedditId());

        subReddit.setSubRedditName(editSubRedditRequest.subRedditName());
        subReddit.setSubRedditIcon(editSubRedditRequest.subRedditIcon());
        subReddit.setSubRedditBanner(editSubRedditRequest.subRedditBanner());

        return subRedditRepository.save(subReddit).getSubRedditId();
    }

    public SubReddit findSubReddit(ObjectId subRedditId) throws SubRedditNotFoundException {
        SubReddit subReddit = subRedditRepository.findById(subRedditId)
                .orElseThrow(() -> new SubRedditNotFoundException("Failed to find Sub-Reddit with id: " + subRedditId));

        return subReddit;
    }
}
