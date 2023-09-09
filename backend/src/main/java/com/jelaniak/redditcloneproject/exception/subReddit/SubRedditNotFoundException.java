package com.jelaniak.redditcloneproject.exception.subReddit;

public class SubRedditNotFoundException extends Exception {
    public SubRedditNotFoundException() {
    }

    public SubRedditNotFoundException(String errorMessage) {
        super(errorMessage);
    }

    public SubRedditNotFoundException(Throwable cause) {
        super(cause);
    }

    public SubRedditNotFoundException(String errorMessage, Throwable cause) {
        super(errorMessage, cause);
    }

}
