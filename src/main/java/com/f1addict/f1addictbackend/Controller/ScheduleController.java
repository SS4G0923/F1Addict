package com.f1addict.f1addictbackend.Controller;

import com.f1addict.f1addictbackend.Common.R;
import com.f1addict.f1addictbackend.Entity.Schedule;
import com.f1addict.f1addictbackend.Service.ScheduleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Month;
import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("/schedule")
@CrossOrigin("*")
public class ScheduleController {

    @Autowired
    ScheduleService scheduleService;

    @GetMapping
    public R getScheduleList(){
        List<Schedule> list = scheduleService.getScheduleList();
        return R.success(list);
    }
}
