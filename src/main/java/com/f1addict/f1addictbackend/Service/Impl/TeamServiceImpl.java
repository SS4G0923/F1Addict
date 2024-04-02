package com.f1addict.f1addictbackend.Service.Impl;

import com.f1addict.f1addictbackend.Entity.Team;
import com.f1addict.f1addictbackend.Mapper.TeamMapper;
import com.f1addict.f1addictbackend.Service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamServiceImpl implements TeamService {

    @Autowired
    TeamMapper teamMapper;
    public List<Team> selectAll() {

        int i = 1;
        List<Team> teamList = teamMapper.getTeamList();

        for(Team team : teamList){
            team.setStanding(i++);
        }

        return teamList;
    }
}
