package com.jelaniak.redditcloneproject.exception.user;

public class AlreadyExistsException extends Exception {
    public AlreadyExistsException() {
    }

    public AlreadyExistsException(String errorMessage) {
        super(errorMessage);
    }

    public AlreadyExistsException(Throwable cause) {
        super(cause);
    }

    public AlreadyExistsException(String errorMessage, Throwable cause) {
        super(errorMessage, cause);
    }
}
