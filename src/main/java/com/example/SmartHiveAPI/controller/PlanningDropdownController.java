package com.example.SmartHiveAPI.controller;

import com.example.SmartHiveAPI.exception.ResourceNotFoundException;
import com.example.SmartHiveAPI.model.PlanningDropdown;
import com.example.SmartHiveAPI.repositories.PlanningDropdownRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.MethodNotAllowedException;

import javax.validation.Valid;
import java.util.Collection;
import java.util.Collections;
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
        pdd.setDeadline(ddDetails.getDeadline());
        pdd.setWithoutDeadline(ddDetails.isWithoutDeadline());
        pdd.setOrderNumber(ddDetails.getOrderNumber());
        planningDropdownRepository.save(pdd);
        return planningDropdownRepository.findAll();
    }

    // Update all DD's
    @PutMapping("/planning-dropdown/update-all")
    public List<PlanningDropdown> updateDropDown(@Valid @RequestBody List<PlanningDropdown> list) {
        for (PlanningDropdown pdd : list) {
            updateDropDown(pdd.getId(), pdd);
        }
        return planningDropdownRepository.findAll();
    }

    // Delete a DD
    @DeleteMapping("/planning-dropdown/{ddId}")
    public List<PlanningDropdown> deleteDropdown(@PathVariable Long ddId) throws MethodNotAllowedException {
        PlanningDropdown pdd = planningDropdownRepository.findById(ddId)
                .orElseThrow(() -> new ResourceNotFoundException("PlanningDropdown", "id", ddId));
        planningDropdownRepository.delete(pdd);
        List<PlanningDropdown> all = planningDropdownRepository.findAll();
        Collections.sort(all);
        int i = 1;
        for(PlanningDropdown p: all) {
            p.setOrderNumber(i++);
            planningDropdownRepository.save(p);
        }
        return planningDropdownRepository.findAll();
    }
}
