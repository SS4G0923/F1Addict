package com.f1addict.f1addictbackend.Service.Impl;

import com.f1addict.f1addictbackend.Entity.User;
import com.f1addict.f1addictbackend.Mapper.UserMapper;
import com.f1addict.f1addictbackend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;
    @Override
    public User getUserByEmailAndPassword(String email, String password) {
        return userMapper.getUserByEmailAndPassword(email, password);
    }
    @Override
    public User getUserByEmail(String email) {
        return userMapper.getUserByEmail(email);
    }
    @Override
    public void addUser(User user) {
        userMapper.addUser(user);
    }
}
