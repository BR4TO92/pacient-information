package com.oncochain.repository;

import com.oncochain.model.Pacient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PacientRepository extends CrudRepository<Pacient, Integer> {

	Pacient findByName(String name);
	void deleteByName(String name);
}
