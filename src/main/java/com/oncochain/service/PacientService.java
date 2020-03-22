package com.oncochain.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.oncochain.dto.PacientDTO;
import com.oncochain.model.Pacient;
import com.oncochain.repository.PacientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class PacientService {

	@Autowired
	private PacientRepository pacientRepository;

	public List<Pacient> get() {
		List<Pacient> pacientList = new ArrayList<>();
		pacientRepository.findAll().forEach(pacient -> pacientList.add(pacient));

		return pacientList;
	}

	public Pacient getByName(String name){

		return pacientRepository.findByName(name);
	}

	public Pacient create(MultipartFile document, String newPacient) throws IOException{
		if(!document.isEmpty()) {
			File file = new File(document.getOriginalFilename());
			System.out.println(file.getName());
		}

		ObjectMapper mapper = new ObjectMapper();
		PacientDTO pacientDTO = mapper.readValue(newPacient, PacientDTO.class);
		int id = pacientDTO.getId();
		String name = pacientDTO.getName();
		int age = pacientDTO.getAge();

		return pacientRepository.save(new Pacient(id, name, age));
	}

	public Pacient create(Map<String, String> newPacient) {
		int id = Integer.parseInt(newPacient.get("id"));
		String name = newPacient.get("name");
		int age = Integer.parseInt(newPacient.get("age"));

		return pacientRepository.save(new Pacient(id, name, age));
	}

	public Pacient update(String name, Map<String, String> pacient){
		String newName = pacient.get("name");
		int newAge = Integer.parseInt(pacient.get("age"));
		Pacient existentPacient = pacientRepository.findByName(name);
		existentPacient.setName(newName);
		existentPacient.setAge(newAge);

		return pacientRepository.save(existentPacient);
	}

	public boolean deleteByName(String name){
		pacientRepository.deleteByName(name);

		return true;
	}
}
