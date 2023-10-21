package com.f1addict.f1addictbackend.Service.Impl;

import com.f1addict.f1addictbackend.Entity.Driver;
import com.f1addict.f1addictbackend.Mapper.DriverMapper;
import com.f1addict.f1addictbackend.Service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DriverServiceImpl implements DriverService {

        @Autowired
        DriverMapper driverMapper;
        public List<Driver> selectAll() {
            List<Driver> driverList = driverMapper.selectAll();
            return driverList;
        }
}
