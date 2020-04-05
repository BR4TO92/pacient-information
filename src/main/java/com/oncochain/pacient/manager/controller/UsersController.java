package com.oncochain.pacient.manager.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UsersController {

	@GetMapping("/auth")
	public Principal user(Principal user) {
		return user;
	}
}
