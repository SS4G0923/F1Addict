package com.f1addict.f1addictbackend.Service.Impl;

import com.f1addict.f1addictbackend.Entity.Schedule;
import com.f1addict.f1addictbackend.Mapper.ScheduleMapper;
import com.f1addict.f1addictbackend.Service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScheduleServiceImpl implements ScheduleService {

    @Autowired
    ScheduleMapper scheduleMapper;

    public List<Schedule> getScheduleList(){
        return scheduleMapper.getSchedule();
    }
}
