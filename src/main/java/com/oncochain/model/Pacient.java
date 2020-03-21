package com.oncochain.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Pacient {

	@Id
	private int id;

	private String name;
	private int age;

	public Pacient() {}

	public Pacient(String name, int age) {
		this.name = name;
		this.age = age;
	}

	public Pacient(int id, String name, int age) {
		this.id = id;
		this.name = name;
		this.age = age;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
}
