package com.oncochain.controller;

import com.oncochain.dto.PacientDTO;
import com.oncochain.model.Pacient;
import com.oncochain.repository.PacientRepository;
import com.oncochain.service.PacientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PacientController {

	@Autowired
	private PacientService pacientService;

	@RequestMapping("/")
	public String index() {

		return "Hello from PacientController.java";
	}

	@GetMapping("/auth")
	public Principal user(Principal user) {
		return user;
	}

	@GetMapping("/pacients")
	public List<Pacient> get() {

		return pacientService.get();
	}

	@GetMapping("/pacient/{name}")
	public Pacient getByName(@PathVariable String name){

		return pacientService.getByName(name);
	}

	@PostMapping("/pacient")
	public Pacient create(@RequestPart("pacientFile") MultipartFile pacientFile, @RequestPart("newPacient") PacientDTO pacientDTO) throws IOException {

		return pacientService.create(pacientFile, pacientDTO);
	}

	@PostMapping("/newPacient")
	public Pacient create(@RequestBody PacientDTO pacientDTO) {

		return pacientService.create(pacientDTO);
	}

	@PutMapping("/pacient/{name}")
	public Pacient update(@PathVariable String name, @RequestBody PacientDTO pacientDTO){

		return pacientService.update(name, pacientDTO);
	}

	@DeleteMapping("pacient/{name}")
	public boolean delete(@PathVariable String name){

		return pacientService.deleteByName(name);
	}
}
