package com.example.SmartHiveAPI.controller;

import com.example.SmartHiveAPI.exception.ResourceNotFoundException;
import com.example.SmartHiveAPI.model.*;
import com.example.SmartHiveAPI.repositories.ColonyRepository;
import com.example.SmartHiveAPI.repositories.HiveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    public List<Colony> createHive(@PathVariable Long colonyId, @RequestBody Hive hive) {
        Optional<Colony> colony = colonyRepository.findById(colonyId);
        colony.ifPresent(colony1 -> colony1.addHive(hive));
        MomAttributes momA = new MomAttributes();
        momA.setMomStatus(MomStatus.MISSING);
        momA.setMarkedDescription("");
        momA.setIsLayingEggs(false);
        momA.setStatusStartingDate(new java.sql.Date(System.currentTimeMillis()));
        momA.setMarkedStatus(MarkedStatus.UNMARKED);
        momA.setIsMarkedDateMonthSet(false);
        momA.setIsBirthdayDateMonthSet(false);
        hive.setMomAttributes(momA);

        hiveRepository.save(hive);
        return colonyRepository.findAll();
    }

    // Update a Hive
    @PutMapping("/hive/{hiveId}/colony/{colonyId}")
    public List<Colony> updateHive(@PathVariable Long hiveId,
                                   @PathVariable Long colonyId,
                                   @Valid @RequestBody Hive hiveDetails) {
        Hive hive = hiveRepository.findById(hiveId)
                .orElseThrow(() -> new ResourceNotFoundException("Hive", "id", hiveId));
        Colony oldColony = hive.getColony();
        oldColony.removeHive(hive);
        hive.setDescription(hiveDetails.getDescription());
        hive.setNumber(hiveDetails.getNumber());
        if (colonyRepository.findById(colonyId).isPresent()) {
            hive.setColony(colonyRepository.findById(colonyId).get());
        }
        Optional<Colony> colony = colonyRepository.findById(colonyId);
        colony.ifPresent(colony1 -> colony1.addHive(hive));
        hiveRepository.save(hive);
        return colonyRepository.findAll();
    }

    // Delete a Hive
    @DeleteMapping("/hive/{hiveId}")
    public List<Colony> deleteHive(@PathVariable Long hiveId) {
        Hive hive = hiveRepository.findById(hiveId)
                .orElseThrow(() -> new ResourceNotFoundException("Hive", "id", hiveId));
        hiveRepository.delete(hive);
        return colonyRepository.findAll();
    }
}

