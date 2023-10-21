package com.f1addict.f1addictbackend.Controller;

import com.f1addict.f1addictbackend.Common.R;
import com.f1addict.f1addictbackend.Entity.Team;
import com.f1addict.f1addictbackend.Service.TeamService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/team")
@CrossOrigin("*")
public class TeamController {

    @Autowired
    TeamService teamService;
    @ResponseBody
    @GetMapping("/list")
    public R listAll(){
        List<Team> list = teamService.selectAll();
        return R.success(list);
    }
}
