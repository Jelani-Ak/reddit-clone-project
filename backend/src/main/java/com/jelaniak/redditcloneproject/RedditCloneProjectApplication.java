package com.jelaniak.redditcloneproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RedditCloneProjectApplication {

	public static void main(String[] args) {
		System.setProperty("server.servlet.context-path", "/reddit-clone");
		SpringApplication.run(RedditCloneProjectApplication.class, args);
	}
}
