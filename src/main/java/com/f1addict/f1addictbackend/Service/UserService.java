package com.f1addict.f1addictbackend.Service;

import com.f1addict.f1addictbackend.Entity.User;

public interface UserService {

    User getUserByEmailAndPassword(String email, String password);

    User getUserByEmail(String email);

    void addUser(User user);
}
