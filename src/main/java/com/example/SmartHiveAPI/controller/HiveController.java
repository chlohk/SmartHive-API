package com.example.SmartHiveAPI.controller;

import com.example.SmartHiveAPI.Hive;
import com.example.SmartHiveAPI.HiveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class HiveController {

    @Autowired
    HiveRepository hiveRepository;

    // Get All Hives
    @GetMapping("/hives")
    public List<Hive> getAllHives() {
        return hiveRepository.findAll();
    }
    // Create a new Hive
    @PostMapping("/hives")
    public Hive createHive(@RequestBody @Valid Hive hive) {
        System.out.println(hive.getId());
        System.out.println(hive.getLocation());
        return hiveRepository.save(hive);
    }
    // Get a Single Note

    // Update a Note

    // Delete a Note
}

