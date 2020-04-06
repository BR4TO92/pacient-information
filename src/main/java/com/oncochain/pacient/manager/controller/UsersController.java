package com.oncochain.pacient.manager.controller;

import com.oncochain.pacient.manager.model.User;
import com.oncochain.pacient.manager.repository.PacientRepository;
import com.oncochain.pacient.manager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UsersController {
	@Autowired
	private UserRepository userRepository;

	@GetMapping("/auth")
	public Principal user(Principal user) {
		return user;
	}

	@GetMapping("/user/logged")
	public User currentUserName() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String loggedUserName = authentication.getName();
		User loggedUser = userRepository.findByUserName(loggedUserName);

		return loggedUser;
	}
}
