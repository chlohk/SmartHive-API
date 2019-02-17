package com.example.SmartHiveAPI.controller;

import com.example.SmartHiveAPI.Hive;
import com.example.SmartHiveAPI.HiveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public Hive createHive(@RequestBody Hive hive) {
        System.out.println(hive);
        return hiveRepository.save(hive);
    }
    // Get a Single Note

    // Update a Note

    // Delete a Note
}

