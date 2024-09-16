package com.f1addict.f1addictbackend.Service.Impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.f1addict.f1addictbackend.Common.R;
import com.f1addict.f1addictbackend.Entity.UserAuth;
import com.f1addict.f1addictbackend.Entity.UserAuthPTO;
import com.f1addict.f1addictbackend.Mapper.UserMapper;
import com.f1addict.f1addictbackend.Service.UserService;
import com.f1addict.f1addictbackend.Util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, UserAuth> implements UserService {

    @Autowired
    UserMapper userMapper;

    private final BCryptPasswordEncoder bpe = new BCryptPasswordEncoder();

    private final JwtUtil jwt = new JwtUtil();

    @Override
    public R login(UserAuth userAuth) {
        LambdaQueryWrapper<UserAuth> lqw = new LambdaQueryWrapper<>();
        lqw = lqw.eq(UserAuth::getEmail, userAuth.getEmail());
        UserAuth retUser = userMapper.selectOne(lqw);
        if(bpe.matches(userAuth.getPassword(), retUser.getPassword())){
            Map<String, Object> claims = new HashMap<>();
            claims.put("email", retUser.getEmail());
            claims.put("username", retUser.getUsername());
            claims.put("password", userAuth.getPassword());
            UserAuthPTO userAuthPTO = new UserAuthPTO();
            userAuthPTO.setUsername(retUser.getUsername());
            userAuthPTO.setToken(jwt.GenerateJwt(claims));
            return R.success(userAuthPTO);
        }
        return R.error(401, "账号或密码不正确");
    }

    public UserAuth getUserByEmail(String email){
        return userMapper.selectOne(new LambdaQueryWrapper<UserAuth>().eq(UserAuth::getEmail, email));
    }

    @Override
    public int saveUser(UserAuth userAuth) {
        if(userMapper.selectCount(new LambdaQueryWrapper<UserAuth>().eq(UserAuth::getUsername, userAuth.getUsername())) > 0)
            return 1;
        String encryptedPassword = bpe.encode(userAuth.getPassword());
        userAuth.setPassword(encryptedPassword);
        userAuth.setCreateTime(LocalDateTime.now());
        userAuth.setUpdateTime(LocalDateTime.now());
        return userMapper.insert(userAuth);
    }
}
