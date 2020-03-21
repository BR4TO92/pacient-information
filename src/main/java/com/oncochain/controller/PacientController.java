package com.oncochain.controller;

import com.oncochain.model.Pacient;
import com.oncochain.model.PacientMockedData;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class PacientController {

	PacientMockedData pacientMockedData = PacientMockedData.getInstance();

	@RequestMapping("/")
	public String index() {
		return "Hello from PacientController.java";
	}

	@GetMapping("/pacients")
	public List<Pacient> get() {
		return pacientMockedData.get();
	}

	@PostMapping("/pacient")
	public Pacient create(@RequestBody Map<String, String> newPacient){
		String name = newPacient.get("name");
		int age = Integer.parseInt(newPacient.get("age"));

		return pacientMockedData.create(name, age);
	}

	@PutMapping("/pacient/{name}")
	public Pacient update(@PathVariable String name, @RequestBody Map<String, String> pacient){
		String newName = pacient.get("name");
		int newAge = Integer.parseInt(pacient.get("age"));

		return pacientMockedData.update(name, newName, newAge);
	}

	@DeleteMapping("pacient/{name}")
	public boolean delete(@PathVariable String name){
		return pacientMockedData.delete(name);
	}
}
