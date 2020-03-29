package com.oncochain.pacient.manager.repository;

import com.oncochain.pacient.manager.model.Pacient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PacientRepository extends CrudRepository<Pacient, Integer> {

	Pacient findByName(String name);
	void deleteByName(String name);
}
