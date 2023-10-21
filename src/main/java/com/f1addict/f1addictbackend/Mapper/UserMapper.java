package com.f1addict.f1addictbackend.Mapper;

import com.f1addict.f1addictbackend.Entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {
    @Select("select * from users where email = #{email} and password = #{password}")
    User getUserByEmailAndPassword(String email, String password);

    @Select("select * from users where email = #{email}")
    User getUserByEmail(String email);

    @Insert("insert into users(email, username, password) values(#{email}, #{username}, #{password})")
    void addUser(User user);
}
