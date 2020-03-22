package com.oncochain.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.oncochain.dto.PacientDTO;
import com.oncochain.model.Pacient;
import com.oncochain.repository.PacientRepository;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
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
import java.util.Scanner;

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
		String sex = "";

		if(!document.isEmpty()) {
			PDDocument pdfDocument = PDDocument.load(document.getInputStream());

			if (pdfDocument.isEncrypted()) {
				System.out.println("The document is encrypted and cannot be read.");
			}
			else {
				PDFTextStripper pdfTextStripper = new PDFTextStripper();
				String text = pdfTextStripper.getText(pdfDocument);
				String[] lines = text.split("\\n");
				String[] desiredLine = lines[7].split(" ");
				sex = desiredLine[1];
			}

			pdfDocument.close();
		}

		ObjectMapper mapper = new ObjectMapper();
		PacientDTO pacientDTO = mapper.readValue(newPacient, PacientDTO.class);
		int id = pacientDTO.getId();
		String name = pacientDTO.getName();
		int age = pacientDTO.getAge();

		return pacientRepository.save(new Pacient(id, name, age, sex));
	}

	public Pacient create(Map<String, String> newPacient) {
		int id = Integer.parseInt(newPacient.get("id"));
		String name = newPacient.get("name");
		int age = Integer.parseInt(newPacient.get("age"));
		String sex = newPacient.get("sex");

		return pacientRepository.save(new Pacient(id, name, age, sex));
	}

	public Pacient update(String name, Map<String, String> pacient){
		String newName = pacient.get("name");
		int newAge = Integer.parseInt(pacient.get("age"));
		String newSex = pacient.get("sex");
		Pacient existentPacient = pacientRepository.findByName(name);
		existentPacient.setName(newName);
		existentPacient.setAge(newAge);
		existentPacient.setSex(newSex);

		return pacientRepository.save(existentPacient);
	}

	public boolean deleteByName(String name){
		pacientRepository.deleteByName(name);

		return true;
	}
}
