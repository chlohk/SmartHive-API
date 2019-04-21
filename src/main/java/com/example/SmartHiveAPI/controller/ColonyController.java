package com.example.SmartHiveAPI.controller;

import com.example.SmartHiveAPI.repositories.ColonyRepository;
import com.example.SmartHiveAPI.exception.ResourceNotFoundException;
import com.example.SmartHiveAPI.model.Colony;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
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

    // Get All Colonies
//    @CrossOrigin(origins = "*")
    @GetMapping("/colony")
    public List<Colony> getAllColonies() {
        return colonyRepository.findAll();
    }

    // Create a new Colony
    @PostMapping("/colony")
    public List<Colony> createColony(@RequestBody Colony colony) {
        colonyRepository.save(colony);
        return colonyRepository.findAll();
    }

    // Get a Single Colony
    @GetMapping("/colony/{colonyId}")
    public Colony getColonyById(@PathVariable Long colonyId) {
        return colonyRepository.findById(colonyId)
                .orElseThrow(() -> new ResourceNotFoundException("Colony", "id", colonyId));
    }

    // Update a Colony
    @PutMapping("/colony/{colonyId}")
    public List<Colony> updateColony(@PathVariable Long colonyId,
                               @Valid @RequestBody Colony colonyDetails) {
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
        return colonyRepository.findAll();
    }

}

