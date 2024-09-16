package com.f1addict.f1addictbackend.Entity;

import lombok.Data;

@Data
public class Driver {
    int standing;
    int no;
    String firstName;
    String lastName;
    String team;
    int points;
    String country;
}
