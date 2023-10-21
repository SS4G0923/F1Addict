package com.f1addict.f1addictbackend.Mapper;

import com.f1addict.f1addictbackend.Entity.Team;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface TeamMapper {
    @Select("select * from teams")
    public List<Team> getTeamList();
}
