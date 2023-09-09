package com.jelaniak.redditcloneproject.service;

import com.jelaniak.redditcloneproject.dto.request.SignUpRequestDTO;
import com.jelaniak.redditcloneproject.exception.user.AlreadyExistsException;
import com.jelaniak.redditcloneproject.exception.user.UserNotFoundException;
import com.jelaniak.redditcloneproject.model.RoleType;
import com.jelaniak.redditcloneproject.model.User;
import com.jelaniak.redditcloneproject.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashSet;

@Slf4j
@Service
public class UserService {

    private final UserRepository userRepository;
    private final UtilityService utilityService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserService(
            UserRepository userRepository,
            UtilityService utilityService,
            BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.utilityService = utilityService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public User findByUserId(ObjectId userId) throws UserNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User by Id: '" + userId + "' was not found"));

        return user;
    }

    public void signUp(SignUpRequestDTO registerRequest) throws AlreadyExistsException {
        log.info(utilityService.getTimeNow() + "Creating new user, '" + registerRequest.username() + "'..");

        checkUsernameAndEmailExists(registerRequest);
        createUser(registerRequest);

        log.info(utilityService.getTimeNow() + "User created successfully");
    }

    private void checkUsernameAndEmailExists(SignUpRequestDTO registerRequest) throws AlreadyExistsException {
        boolean userExists = userRepository.existsByUsername(registerRequest.username());
        boolean emailExists = userRepository.existsByEmail(registerRequest.email());

        if (userExists && emailExists) {
            String errorMessage = "Username '" + registerRequest.username() + "' and email '" + registerRequest.email() + "' are both already taken";
            log.error(errorMessage);

            throw new AlreadyExistsException(errorMessage);
        } else if (userExists) {
            String errorMessage = "Failed to create user. Username '" + registerRequest.username() + "' is already taken";
            log.error(errorMessage);

            throw new AlreadyExistsException(errorMessage);
        } else if (emailExists) {
            String errorMessage = "Failed to create user. Email '" + registerRequest.email() + "' is already taken";
            log.error(errorMessage);

            throw new AlreadyExistsException(errorMessage);
        }
    }

    private ObjectId createUser(SignUpRequestDTO signUpRequest) {
        User user = new User();

        user.setUserId(new ObjectId());
        user.setUsername(signUpRequest.username());
        user.setPassword(bCryptPasswordEncoder.encode(signUpRequest.password()));
        user.setEmail(signUpRequest.email());
        user.setDisplayName(null);
        user.setProfileAboutText(null);
        user.setProfileLocation(null);
//        user.setRoles(assignRoles(signUpRequest.getRoles()));
        user.setDateOfCreation(LocalDateTime.now());
        user.setUsersYouFollow(new HashSet<>());
        user.setVerified(false);
        user.setLocked(false);
        user.setEnabled(false);

        return userRepository.save(user).getUserId();
    }
}
