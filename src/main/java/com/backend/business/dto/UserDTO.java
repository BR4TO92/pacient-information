package com.backend.business.dto;

public class UserDTO {

	private int id;
	private String userName;
	private String firstName;
	private String lastName;
	private String organisation;

	public UserDTO(String userName, String firstName, String lastName, String organisation) {
		this.userName = userName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.organisation = organisation;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getOrganisation() {
		return organisation;
	}

	public void setOrganisation(String organisation) {
		this.organisation = organisation;
	}
}
