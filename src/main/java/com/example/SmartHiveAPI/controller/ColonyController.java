package com.example.SmartHiveAPI.controller;

import com.example.SmartHiveAPI.exception.ResourceNotFoundException;
import com.example.SmartHiveAPI.model.Colony;
import com.example.SmartHiveAPI.model.Hive;
import com.example.SmartHiveAPI.repositories.ColonyRepository;
import com.example.SmartHiveAPI.repositories.HiveRepository;
import com.example.SmartHiveAPI.service.SizeLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.MethodNotAllowedException;

import javax.validation.Valid;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ColonyController {

    @Autowired
    ColonyRepository colonyRepository;

    @Autowired
    HiveRepository hiveRepository;

    @Autowired
    SizeLogService sizeLogService;

    // Get All Colonies
//    @CrossOrigin(origins = "*")
    @GetMapping("/colony")
    public List<Colony> getAllColonies() {
        for (Hive hive : hiveRepository.findAll()) {
            sizeLogService.updateSizeLogs(hive.getId());
        }
        return colonyRepository.findAll();
    }

    // Create a new Colony
    @PostMapping("/colony")
    public List<Colony> createColony(@RequestBody Colony colony) {
        for (Hive hive : hiveRepository.findAll()) {
            sizeLogService.updateSizeLogs(hive.getId());
        }
        colonyRepository.save(colony);
        return colonyRepository.findAll();
    }

    // Get a Single Colony
    @GetMapping("/colony/{colonyId}")
    public Colony getColonyById(@PathVariable Long colonyId) {
        for (Hive hive : hiveRepository.findAll()) {
            sizeLogService.updateSizeLogs(hive.getId());
        }
        return colonyRepository.findById(colonyId)
                .orElseThrow(() -> new ResourceNotFoundException("Colony", "id", colonyId));
    }

    // Update a Colony
    @PutMapping("/colony/{colonyId}")
    public List<Colony> updateColony(@PathVariable Long colonyId,
                               @Valid @RequestBody Colony colonyDetails) {
        for (Hive hive : hiveRepository.findAll()) {
            sizeLogService.updateSizeLogs(hive.getId());
        }
        Colony colony = colonyRepository.findById(colonyId)
                .orElseThrow(() -> new ResourceNotFoundException("Colony", "id", colonyId));
        colony.setName(colonyDetails.getName());
        colonyRepository.save(colony);

        return colonyRepository.findAll();
    }

    // Delete a Colony
    @DeleteMapping("/colony/{colonyId}")
    public List<Colony> deleteColony(@PathVariable Long colonyId) throws MethodNotAllowedException {
        Colony colony = colonyRepository.findById(colonyId)
                .orElseThrow(() -> new ResourceNotFoundException("Colony", "id", colonyId));

        if (colony.hasHives()) {
            throw new MethodNotAllowedException(HttpMethod.DELETE, Arrays.asList(HttpMethod.values()));
        }
        colonyRepository.delete(colony);
        for (Hive hive : hiveRepository.findAll()) {
            sizeLogService.updateSizeLogs(hive.getId());
        }
        return colonyRepository.findAll();
    }

}

