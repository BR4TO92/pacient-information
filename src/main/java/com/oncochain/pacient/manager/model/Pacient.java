package com.oncochain.pacient.manager.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pacients")
public class Pacient {

	@Id
	private int id;
	private String name;
	private int age;
	private String sex;

	@Column(name = "smoking_status")
	private String smokingStatus;

	public Pacient() {}

	public Pacient(String name, int age, String sex, String smokingStatus) {
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.smokingStatus = smokingStatus;
	}

	public Pacient(int id, String name, int age, String sex, String smokingStatus) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.smokingStatus = smokingStatus;
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

	public String getSex() { return sex; }

	public void setSex(String sex) { this.sex = sex; }

	public String getSmokingStatus() { return smokingStatus; }

	public void setSmokingStatus(String smokingStatus) { this.smokingStatus = smokingStatus; }
}
