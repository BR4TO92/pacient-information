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

	public Pacient create(MultipartFile pacientFile, PacientDTO pacientDTO) throws IOException{
		String sex = "";

		if(!pacientFile.isEmpty()) {
			PDDocument pdfDocument = PDDocument.load(pacientFile.getInputStream());

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

		int id = pacientDTO.getId();
		String name = pacientDTO.getName();
		int age = pacientDTO.getAge();

		return pacientRepository.save(new Pacient(id, name, age, sex));
	}

	public Pacient create(PacientDTO pacientDTO) {
		int id = pacientDTO.getId();
		String name = pacientDTO.getName();
		int age = pacientDTO.getAge();
		String sex = pacientDTO.getSex();

		return pacientRepository.save(new Pacient(id, name, age, sex));
	}

	public Pacient update(String name, PacientDTO pacientDTO){
		String newName = pacientDTO.getName();
		int newAge = pacientDTO.getAge();
		String newSex = pacientDTO.getSex();
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
