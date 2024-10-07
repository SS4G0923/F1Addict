package com.f1addict.f1addictbackend.Entity;

import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;

@Data
public class Schedule {
    String raceName;
    String raceCountry;
    String date;
    @TableField(exist = false)
    String description;
    int raceNum;
}
