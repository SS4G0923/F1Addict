package com.f1addict.f1addictbackend.Service.Impl;

import com.f1addict.f1addictbackend.Entity.Schedule;
import com.f1addict.f1addictbackend.Mapper.ScheduleMapper;
import com.f1addict.f1addictbackend.Service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.LinkedList;
import java.util.List;

@Service
public class ScheduleServiceImpl implements ScheduleService {

    @Autowired
    ScheduleMapper scheduleMapper;

    public List<Schedule> getScheduleList(){
        List<Schedule> list = scheduleMapper.getSchedule();
        List<Schedule> result = new LinkedList<>();
        LocalDate now = LocalDate.now();
        Month month = now.getMonth();
        String currMonth = month.toString();
        int day = now.getDayOfMonth();
        boolean inMonth = false;
        for(Schedule schedule : list){
            int raceNum = schedule.getRaceNum();
            String date = schedule.getDate();
            int spaceIndex = date.indexOf(" ");
            String monthValue = date.substring(0, spaceIndex).toUpperCase();
            if(monthValue.equals(currMonth)){
                inMonth = true;
                int dayValue = Integer.parseInt(date.substring(date.indexOf("-") + 1));
                if(dayValue >= day){
                    for(Schedule schedule1 : list){
                        if(schedule1.getRaceNum() >= raceNum - 1 && schedule1.getRaceNum() <= raceNum + 2){
                            result.add(schedule1);
                        }
                    }
                }
                continue;
            }

            if(inMonth) {
                if (result.isEmpty()) {
                    for (Schedule schedule1 : list) {
                        if (schedule1.getRaceNum() >= raceNum - 1 && schedule1.getRaceNum() <= raceNum + 2) {
                            result.add(schedule1);
                        }
                    }
                }
            }
        }

        int i = 0;
        for(Schedule schedule : result){
            if(i == 0) schedule.setDescription("Previous");
            if(i == 1) schedule.setDescription("Next");
            if(i == 2) schedule.setDescription("Upcoming");
            i++;
        }

        return result;
    }
}
