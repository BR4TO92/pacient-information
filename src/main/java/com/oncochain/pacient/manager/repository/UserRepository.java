package com.oncochain.pacient.manager.repository;

import com.oncochain.pacient.manager.model.Pacient;
import com.oncochain.pacient.manager.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

	User findByUserName(String userName);
}
