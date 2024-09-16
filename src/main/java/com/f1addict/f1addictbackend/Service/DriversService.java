package com.f1addict.f1addictbackend.Service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.f1addict.f1addictbackend.Entity.Drivers;

import java.util.List;

public interface DriverService extends IService<Drivers> {

    List<Drivers> selectAll();
}
