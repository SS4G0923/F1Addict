package com.f1addict.f1addictbackend.Service.Impl;

import com.alibaba.fastjson.JSON;
import com.f1addict.f1addictbackend.Entity.Driver;
import com.f1addict.f1addictbackend.Entity.Team;
import com.f1addict.f1addictbackend.Mapper.DriverMapper;
import com.f1addict.f1addictbackend.Service.DriverService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class DriverServiceImpl implements DriverService {

        @Autowired
        DriverMapper driverMapper;

        @Autowired
        RedisTemplate<String, String> redisTemplate;

        public List<Driver> selectAll() {

            int i = 1;
            String driverListString = redisTemplate.opsForValue().get("driverList");
            List<Driver> driverList = null;
            if(driverListString != null){
                driverList = JSON.parseArray(driverListString, Driver.class);
                log.info("get driverList from redis");
            }

            if(driverListString == null){
                driverList = driverMapper.selectAll();
                redisTemplate.opsForValue().set("driverList", JSON.toJSONString(driverList), 3600L, java.util.concurrent.TimeUnit.SECONDS);
                log.info("get driverList from mysql");
            }

            for(Driver driver : driverList){
                driver.setStanding(i++);
            }
            return driverList;
        }
}
