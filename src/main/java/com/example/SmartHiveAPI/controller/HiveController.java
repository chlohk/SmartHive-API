package com.example.SmartHiveAPI.controller;

import com.example.SmartHiveAPI.repositories.ColonyRepository;
import com.example.SmartHiveAPI.repositories.HiveRepository;
import com.example.SmartHiveAPI.model.Colony;
import com.example.SmartHiveAPI.model.Hive;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class HiveController {

    @Autowired
    HiveRepository hiveRepository;

    @Autowired
    ColonyRepository colonyRepository;

    // Get All Hives
    @GetMapping("/hive")
    public List<Hive> getAllHives() {
        return hiveRepository.findAll();
    }
    // Create a new Hive
    @PostMapping("/hive/{colonyId}")
    public Hive createHive(@PathVariable Long colonyId, @RequestBody Hive hive) {
        Optional<Colony> colony = colonyRepository.findById(colonyId);
        colony.ifPresent(colony1 -> colony1.addHive(hive));
        return hiveRepository.save(hive);
    }
    // Get a Single Note

    // Update a Note

    // Delete a Hive


}

