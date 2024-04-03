package com.soubarnika.goodreads.service.impl;

import com.soubarnika.goodreads.dto.UserDTO;
import com.soubarnika.goodreads.entity.Users;
import com.soubarnika.goodreads.exception.GoodReadsException;
import com.soubarnika.goodreads.repository.UsersRepository;
import com.soubarnika.goodreads.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.sql.SQLIntegrityConstraintViolationException;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    Users user;

    @Autowired
    UsersRepository usersRepository;

    @Override
    public boolean register(Users user) throws GoodReadsException {
        try{
            usersRepository.save(user);
        }
        catch(DataIntegrityViolationException e){
            throw new GoodReadsException("UniqueError", e);
        }
        return true;
    }

    @Override
    public boolean login(UserDTO userDTO) {
        user = usersRepository.findByEmail(userDTO.getEmail());
        if (user == null) {
            return false;
        }
        else {
            if(!user.getPassword().equals(userDTO.getPassword())){
                return false;
            }
        }
        return true;
    }

    @Override
    public Boolean updatePassword(String email, String password) {
        user = usersRepository.findByEmail(email);
        if(email == null)
            return false;
        else{
            user.setPassword(password);
            usersRepository.save(user);
            return true;
        }
    }
}
