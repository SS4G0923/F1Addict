package com.f1addict.f1addictbackend.Service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.f1addict.f1addictbackend.Entity.Schedule;

import java.util.List;

public interface ScheduleService extends IService<Schedule> {

    List<Schedule> getScheduleList();
}
