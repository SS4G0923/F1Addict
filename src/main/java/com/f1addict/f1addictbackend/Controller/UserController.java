package com.f1addict.f1addictbackend.Controller;

import com.f1addict.f1addictbackend.Common.R;
import com.f1addict.f1addictbackend.Entity.User;
import com.f1addict.f1addictbackend.Service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    UserService userService;
    @PostMapping("/add")
    public R addUser(@RequestBody User user){
        User userByEmail = userService.getUserByEmail(user.getEmail());
        if(userByEmail != null){
            return R.error("注册失败，用户已存在");
        }
        userService.addUser(user);
        return R.success("注册成功");
    }

    @PostMapping("/get")
    public R getUserByEmailAndPassword(@RequestBody User passinUser){
        User userByEmail = userService.getUserByEmail(passinUser.getEmail());
        User userByEmailAndPwd = userService.getUserByEmailAndPassword(passinUser.getEmail(), passinUser.getPassword());
        if(userByEmail == null){
            return R.error("用户不存在");
        }
        else if(userByEmailAndPwd == null){
            return R.error("密码错误");
        }
        return R.success(userByEmailAndPwd);
    }
}
