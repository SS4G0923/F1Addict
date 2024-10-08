package com.f1addict.f1addictbackend.Controller;

import com.f1addict.f1addictbackend.Common.R;
import com.f1addict.f1addictbackend.Entity.Drivers;
import com.f1addict.f1addictbackend.Entity.Teams;
import com.f1addict.f1addictbackend.Service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/team")
@CrossOrigin("*")
public class TeamController {

    @Autowired
    TeamService teamService;

    @ResponseBody
    @GetMapping("/list")
    public R listAll(){
        List<Teams> list = teamService.selectAll();
        return R.success(list);
    }

    @PostMapping("/update")
    public R<String> update(@RequestBody Teams team){
        return teamService.updateTeam(team);
    }
}
