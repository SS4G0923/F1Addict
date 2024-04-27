package com.f1addict.f1addictbackend.Service.Impl;

import com.alibaba.fastjson.JSON;
import com.f1addict.f1addictbackend.Entity.Team;
import com.f1addict.f1addictbackend.Mapper.TeamMapper;
import com.f1addict.f1addictbackend.Service.TeamService;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class TeamServiceImpl implements TeamService {

    @Autowired
    TeamMapper teamMapper;

    @Resource
    RedisTemplate<String, String> redisTemplate;

    public List<Team> selectAll() {

        int i = 1;
        String teamListString = redisTemplate.opsForValue().get("teamList");
        List<Team> teamList = null;
        if(teamListString != null){
            teamList = JSON.parseArray(teamListString, Team.class);
            log.info("get teamList from redis");
        }

        if(teamListString == null){
            teamList = teamMapper.getTeamList();
            redisTemplate.opsForValue().set("teamList", JSON.toJSONString(teamList), 3600L, java.util.concurrent.TimeUnit.SECONDS);
            log.info("get teamList from mysql");
        }


        for(Team team : teamList){
            team.setStanding(i++);
        }

        return teamList;
    }
}
