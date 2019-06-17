package com.example.SmartHiveAPI.controller;

import com.example.SmartHiveAPI.exception.ResourceNotFoundException;
import com.example.SmartHiveAPI.model.PlanningDropdown;
import com.example.SmartHiveAPI.repositories.PlanningDropdownRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.MethodNotAllowedException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PlanningDropdownController {
    @Autowired
    PlanningDropdownRepository planningDropdownRepository;

    @PostMapping("/planning-dropdown")
    public List<PlanningDropdown> createDropdown(@RequestBody PlanningDropdown pdd) {
        planningDropdownRepository.save(pdd);
        return planningDropdownRepository.findAll();
    }

    @GetMapping("/planning-dropdown")
    public List<PlanningDropdown> getDropdown() {
        return planningDropdownRepository.findAll();
    }

    // Update a DD
    @PutMapping("/planning-dropdown/{ddId}")
    public List<PlanningDropdown> updateDropDown(@PathVariable Long ddId,
                                     @Valid @RequestBody PlanningDropdown ddDetails) {
        PlanningDropdown pdd = planningDropdownRepository.findById(ddId)
                .orElseThrow(() -> new ResourceNotFoundException("PlanningDropdown", "id", ddId));
        pdd.setText(ddDetails.getText());
        planningDropdownRepository.save(pdd);
        return planningDropdownRepository.findAll();
    }

    // Delete a DD
    @DeleteMapping("/planning-dropdown/{ddId}")
    public List<PlanningDropdown> deleteDropdown(@PathVariable Long ddId) throws MethodNotAllowedException {
        PlanningDropdown pdd = planningDropdownRepository.findById(ddId)
                .orElseThrow(() -> new ResourceNotFoundException("PlanningDropdown", "id", ddId));
        planningDropdownRepository.delete(pdd);
        return planningDropdownRepository.findAll();
    }
}
