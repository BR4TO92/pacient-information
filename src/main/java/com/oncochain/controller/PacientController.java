package com.oncochain.controller;

import com.oncochain.model.Pacient;
import com.oncochain.repository.PacientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@Transactional
public class PacientController {

	@Autowired
	private PacientRepository pacientRepository;

	@RequestMapping("/")
	public String index() {
		return "Hello from PacientController.java";
	}

	@GetMapping("/pacients")
	public List<Pacient> get() {
		List<Pacient> pacientList = new ArrayList<>();
		pacientRepository.findAll().forEach(pacient -> pacientList.add(pacient));

		return pacientList;
	}

	@PostMapping("/pacient")
	public Pacient create(@RequestBody Map<String, String> newPacient){
		int id = Integer.parseInt(newPacient.get("id"));
		String name = newPacient.get("name");
		int age = Integer.parseInt(newPacient.get("age"));

		return pacientRepository.save(new Pacient(id, name, age));
	}

	@PutMapping("/pacient/{name}")
	public Pacient update(@PathVariable String name, @RequestBody Map<String, String> pacient){
		String newName = pacient.get("name");
		int newAge = Integer.parseInt(pacient.get("age"));
		Pacient existentPacient = pacientRepository.findByName(name);
		existentPacient.setName(newName);
		existentPacient.setAge(newAge);

		return pacientRepository.save(existentPacient);
	}

	@DeleteMapping("pacient/{name}")
	public boolean delete(@PathVariable String name){
		pacientRepository.deleteByName(name);

		return true;
	}
}
