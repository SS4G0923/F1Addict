package com.f1addict.f1addictbackend.Controller;


import com.f1addict.f1addictbackend.Entity.Drivers;
import com.f1addict.f1addictbackend.Common.R;
import com.f1addict.f1addictbackend.Service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/driver")
@CrossOrigin("*")
public class DriverController {

    @Autowired
    DriverService driverService;

    @ResponseBody
    @GetMapping("/list")
    public R<List<Drivers>> list() {
        List<Drivers> list = driverService.selectAll();
        return R.success(list);
    }
}
