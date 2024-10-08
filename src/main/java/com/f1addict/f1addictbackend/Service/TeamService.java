package com.f1addict.f1addictbackend.Service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.f1addict.f1addictbackend.Common.R;
import com.f1addict.f1addictbackend.Entity.Teams;

import java.util.List;

public interface TeamService extends IService<Teams> {

    List<Teams> selectAll();

    R<String> updateTeam(Teams team);
}
