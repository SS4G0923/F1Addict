package com.f1addict.f1addictbackend.Mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.f1addict.f1addictbackend.Entity.Schedule;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ScheduleMapper extends BaseMapper<Schedule> {
}
