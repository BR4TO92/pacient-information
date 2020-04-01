package com.oncochain.pacient.manager.dto;

public class PacientDTO {

	private int id;
	private String name;
	private int age;
	private String sex;

	private String smokingStatus;

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
