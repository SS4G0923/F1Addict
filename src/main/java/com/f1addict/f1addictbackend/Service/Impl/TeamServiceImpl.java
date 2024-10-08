package com.f1addict.f1addictbackend.Service.Impl;

import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.f1addict.f1addictbackend.Common.R;
import com.f1addict.f1addictbackend.Entity.Drivers;
import com.f1addict.f1addictbackend.Entity.Teams;
import com.f1addict.f1addictbackend.Mapper.TeamMapper;
import com.f1addict.f1addictbackend.Service.TeamService;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class TeamServiceImpl extends ServiceImpl<TeamMapper, Teams> implements TeamService {

    @Autowired
    TeamMapper teamMapper;

    @Resource
    RedisTemplate<String, String> redisTemplate;

    public List<Teams> selectAll() {

        int i = 1;
        String teamListString = redisTemplate.opsForValue().get("teamList");
        List<Teams> teamsList = null;
        if(teamListString != null){
            teamsList = JSON.parseArray(teamListString, Teams.class);
            log.info("get teamList from redis");
        }

        if(teamListString == null){
            teamsList = teamMapper.selectList(null);
            redisTemplate.opsForValue().set("teamList", JSON.toJSONString(teamsList), 3600L, java.util.concurrent.TimeUnit.SECONDS);
            log.info("get teamList from mysql");
        }


        for(Teams teams : teamsList){
            teams.setStanding(i++);
        }

        return teamsList;
    }

    @Override
    public R<String> updateTeam(Teams team) {
        LambdaQueryWrapper<Teams> lqw = new LambdaQueryWrapper<>();
        lqw = lqw.eq(Teams::getName, team.getName());
        Teams retTeams = teamMapper.selectOne(lqw);
        if(retTeams == null){
            return R.error(404, "未找到该车队");
        }
        teamMapper.update(team, lqw);
        redisTemplate.delete("teamsList");
        return R.success("更新成功");
    }
}
