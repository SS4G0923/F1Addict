package com.f1addict.f1addictbackend.Service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.f1addict.f1addictbackend.Entity.Drivers;

import java.util.List;

public interface DriversService extends IService<Drivers> {

    List<Drivers> selectAll();


}
