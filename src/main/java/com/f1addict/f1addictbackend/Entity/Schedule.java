package com.f1addict.f1addictbackend.Entity;

import lombok.Data;

@Data
public class Schedule {
    String raceName;
    String raceCountry;
    String date;
    String description;
    int raceNum;
}
