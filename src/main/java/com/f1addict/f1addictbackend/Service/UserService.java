package com.f1addict.f1addictbackend.Service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.f1addict.f1addictbackend.Common.R;
import com.f1addict.f1addictbackend.Entity.UserAuth;

public interface UserService extends IService<UserAuth> {

    R<String> login(UserAuth userAuth);

    UserAuth getUserByEmail(String email);

    int saveUser(UserAuth userAuth);
}
