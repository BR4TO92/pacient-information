package com.oncochain.model;

import java.util.ArrayList;
import java.util.List;

public class PacientMockedData {

	private List<Pacient> pacientList;

	private static PacientMockedData instance = null;

	public static PacientMockedData getInstance() {

		if(instance == null) {
			instance = new PacientMockedData();
		}

		return instance;
	}

	public PacientMockedData() {
		pacientList = new ArrayList<>();
		pacientList.add(new Pacient("Felix", 25));
		pacientList.add(new Pacient("Daniel", 27));
	}

	public List<Pacient> get() {
		return pacientList;
	}

	public Pacient getPacientByAge(int age) {
		for(Pacient pacient : pacientList) {
			if(pacient.getAge() == age) {
				return pacient;
			}
		}

		return null;
	}

	public Pacient create(String name, int age) {
		Pacient newPacient = new Pacient(name, age);
		pacientList.add(newPacient);

		return newPacient;
	}

	public Pacient update(String name, String newName, int newAge) {
		for(Pacient pacient : pacientList) {
			if(pacient.getName().equalsIgnoreCase(name)) {
				int index = pacientList.indexOf(pacient);
				pacient.setName(newName);
				pacient.setAge(newAge);
				pacientList.set(index, pacient);

				return pacient;
			}
		}

		return null;
	}

	public boolean delete(String name) {
		int index = -1;

		for(Pacient pacient : pacientList) {
			if(pacient.getName().equalsIgnoreCase(name)) {
				index = pacientList.indexOf(pacient);
				continue;
			}
		}

		if(index > -1) {
			pacientList.remove(index);
		}

		return true;
	}
}
