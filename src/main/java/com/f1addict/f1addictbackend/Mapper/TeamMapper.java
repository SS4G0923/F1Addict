package com.f1addict.f1addictbackend.Mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.f1addict.f1addictbackend.Entity.Teams;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TeamMapper extends BaseMapper<Teams> {
}
