package com.oncochain.controller;

import com.oncochain.model.Pacient;
import com.oncochain.repository.PacientRepository;
import com.oncochain.service.PacientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class PacientController {

	@Autowired
	private PacientService pacientService;

	@RequestMapping("/")
	public String index() {
		return "Hello from PacientController.java";
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
	public Pacient create(@RequestBody Map<String, String> newPacient){

		return pacientService.create(newPacient);
	}

	@PutMapping("/pacient/{name}")
	public Pacient update(@PathVariable String name, @RequestBody Map<String, String> pacient){

		return pacientService.update(name, pacient);
	}

	@DeleteMapping("pacient/{name}")
	public boolean delete(@PathVariable String name){

		return pacientService.deleteByName(name);
	}
}
