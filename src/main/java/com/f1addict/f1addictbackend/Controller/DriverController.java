package com.f1addict.f1addictbackend.Controller;


import com.f1addict.f1addictbackend.Entity.Driver;
import com.f1addict.f1addictbackend.Common.R;
import com.f1addict.f1addictbackend.Service.DriverService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/driver")
@CrossOrigin("*")
public class DriverController {

    @Autowired
    DriverService driverService;
    @ResponseBody
    @GetMapping("/list")
    public R list() {
        List<Driver> list = driverService.selectAll();
        return R.success(list);
    }
}
