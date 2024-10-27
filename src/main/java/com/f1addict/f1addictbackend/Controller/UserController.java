package com.f1addict.f1addictbackend.Controller;

import com.f1addict.f1addictbackend.Common.R;
import com.f1addict.f1addictbackend.Entity.UserAuth;
import com.f1addict.f1addictbackend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/register")
    public R<String> addUser(@RequestBody UserAuth userAuth){
        UserAuth userAuthByEmail = userService.getUserByEmail(userAuth.getEmail());
        if(userAuthByEmail != null){
            return R.error("注册失败，用户已存在");
        }
        userService.saveUser(userAuth);
        return R.success("注册成功");
    }

    @PostMapping("/login")
    public R<String> getUserByEmailAndPassword(@RequestBody UserAuth userAuth){
        return userService.login(userAuth);
    }
}
