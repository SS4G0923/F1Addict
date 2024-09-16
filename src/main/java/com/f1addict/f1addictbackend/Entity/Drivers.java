package com.f1addict.f1addictbackend.Entity;

import lombok.Data;

@Data
public class Drivers {
    int standing;
    int no;
    String firstName;
    String lastName;
    String team;
    int points;
    String country;
}
