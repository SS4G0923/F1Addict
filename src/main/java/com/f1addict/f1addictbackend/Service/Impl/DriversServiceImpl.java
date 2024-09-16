package com.f1addict.f1addictbackend.Service.Impl;

import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.f1addict.f1addictbackend.Entity.Drivers;
import com.f1addict.f1addictbackend.Mapper.DriversMapper;
import com.f1addict.f1addictbackend.Service.DriversService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class DriversServiceImpl extends ServiceImpl<DriversMapper, Drivers> implements DriversService {

        @Autowired
        DriversMapper driversMapper;

        @Autowired
        RedisTemplate<String, String> redisTemplate;

        public List<Drivers> selectAll() {

            int i = 1;
            String driverListString = redisTemplate.opsForValue().get("driverList");
            List<Drivers> driversList = null;
            if(driverListString != null){
                driversList = JSON.parseArray(driverListString, Drivers.class);
                log.info("get driverList from redis");
            }

            if(driverListString == null){
                driversList = driversMapper.selectList(null);
                redisTemplate.opsForValue().set("driverList", JSON.toJSONString(driversList), 3600L, java.util.concurrent.TimeUnit.SECONDS);
                log.info("get driverList from mysql");
            }

            for(Drivers drivers : driversList){
                drivers.setStanding(i++);
            }
            return driversList;
        }
}
