package com.f1addict.f1addictbackend.Service.Impl;

import com.alibaba.fastjson.JSON;
import com.f1addict.f1addictbackend.Entity.Driver;
import com.f1addict.f1addictbackend.Entity.Schedule;
import com.f1addict.f1addictbackend.Mapper.ScheduleMapper;
import com.f1addict.f1addictbackend.Service.ScheduleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.LinkedList;
import java.util.List;

@Service
@Slf4j
public class ScheduleServiceImpl implements ScheduleService {

    @Autowired
    ScheduleMapper scheduleMapper;

    @Autowired
    RedisTemplate<String, String> redisTemplate;

    public List<Schedule> getScheduleList(){
        String scheduleString = redisTemplate.opsForValue().get("schedule");
        List<Schedule> list = null;
        if(scheduleString != null){
            list = JSON.parseArray(scheduleString, Schedule.class);
            log.info("get schedule from redis");
        }

        if(scheduleString == null){
            list = scheduleMapper.getSchedule();
            redisTemplate.opsForValue().set("schedule", JSON.toJSONString(list), 3600L, java.util.concurrent.TimeUnit.SECONDS);
            log.info("get schedule from mysql");
        }

        List<Schedule> result = new LinkedList<>();
        LocalDate now = LocalDate.now();
        Month month = now.getMonth();
        String currMonth = month.toString();
        boolean isCurrent = false;
        int day = now.getDayOfMonth();
        boolean inMonth = false;
        int raceNum;
        boolean isFull = false;
        int tempRaceNum = 0;
        for(Schedule schedule : list) {
            if (isFull) break;
            raceNum = schedule.getRaceNum();
            String date = schedule.getDate();
            int spaceIndex = date.indexOf(" ");
            String monthValue = date.substring(0, spaceIndex).toUpperCase();
            if (monthValue.equals(currMonth)) {
                inMonth = true;
                tempRaceNum = raceNum;
                int dayValue = Integer.parseInt(date.substring(date.indexOf("-") + 1));
                if (dayValue >= day) {
                    if (dayValue - 2 <= day) {
                        isCurrent = true;
                    }
                    for (Schedule schedule1 : list) {
                        if (schedule1.getRaceNum() >= raceNum - 1 && schedule1.getRaceNum() <= raceNum + 2) {
                            result.add(schedule1);
                            if (result.size() == 4) {
                                isFull = true;
                                break;
                            }
                        }
                    }
                }
            }
        }
        if (inMonth) {
            if (result.isEmpty()) {
                for (Schedule schedule1 : list) {
                    if (schedule1.getRaceNum() >= tempRaceNum && schedule1.getRaceNum() <= tempRaceNum + 3) {
                        result.add(schedule1);
                    }
                }
            }
        }


        int i = 0;
        for(Schedule schedule : result){
            if(i == 0) schedule.setDescription("Previous");
            if(i == 1) schedule.setDescription(isCurrent ? "Current" : "Next");
            if(i == 2) schedule.setDescription("Upcoming");
            i++;
        }

        return result;
    }
}
