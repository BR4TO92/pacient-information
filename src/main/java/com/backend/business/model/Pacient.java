package com.backend.business.model;

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

	@Column(name = "smoking_years")
	private Integer smokingYears;

	public Pacient() {}

	public Pacient(String name, int age, String sex, String smokingStatus, Integer smokingYears) {
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.smokingStatus = smokingStatus;
		this.smokingYears = smokingYears;
	}

	public Pacient(int id, String name, int age, String sex, String smokingStatus, Integer smokingYears) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.smokingStatus = smokingStatus;
		this.smokingYears = smokingYears;
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

	public Integer getSmokingYears() {
		return smokingYears;
	}

	public void setSmokingYears(Integer smokingYears) {
		this.smokingYears = smokingYears;
	}
}
