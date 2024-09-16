package com.f1addict.f1addictbackend.Entity;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserAuth {
    String email;
    String username;
    String password;
    LocalDateTime createTime;
    LocalDateTime updateTime;
}
