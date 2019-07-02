package com.example.SmartHiveAPI.controller;

import com.example.SmartHiveAPI.exception.ResourceNotFoundException;
import com.example.SmartHiveAPI.model.*;
import com.example.SmartHiveAPI.repositories.ColonyRepository;
import com.example.SmartHiveAPI.repositories.HiveRepository;
import com.example.SmartHiveAPI.repositories.PlanElementRepository;
import com.example.SmartHiveAPI.repositories.SizeLogRepository;
import com.example.SmartHiveAPI.service.SizeLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/api")
public class HiveController {

    @Autowired
    SizeLogService sizeLogService;

    @Autowired
    HiveRepository hiveRepository;

    @Autowired
    ColonyRepository colonyRepository;

    @Autowired
    SizeLogRepository sizeLogRepository;

    @Autowired
    PlanElementRepository planElementRepository;

    // Get All Hives
    @GetMapping("/hive")
    public List<Hive> getAllHives() {
        for (Hive h : hiveRepository.findAll()) {
            sizeLogService.updateSizeLogs(h.getId());
        }
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
        for (Hive h : hiveRepository.findAll()) {
            sizeLogService.updateSizeLogs(h.getId());
        }

        return colonyRepository.findAll();
    }

    // Create a new PlanElement
    @PostMapping("/hive/{hiveId}/planning")
    public List<Colony> createHive(@PathVariable Long hiveId, @RequestBody PlanElement plan) {
        Hive hive = hiveRepository.findById(hiveId)
                .orElseThrow(() -> new ResourceNotFoundException("Hive", "id", hiveId));

        Set<PlanElement> planElements = hive.getPlanElements();
        planElements.add(plan);
        hive.setPlanElements(planElements);
        for (Hive h : hiveRepository.findAll()) {
            sizeLogService.updateSizeLogs(h.getId());
        }
        hiveRepository.save(hive);

        return colonyRepository.findAll();
    }


    @PutMapping("/hive/{hiveId}/planning/{planId}")
    public List<Colony> updateHive(@PathVariable Long hiveId,
                                   @PathVariable Long planId,
                                   @Valid @RequestBody PlanElement planDetails) {
        Hive hive = hiveRepository.findById(hiveId)
                .orElseThrow(() -> new ResourceNotFoundException("Hive", "id", hiveId));
        Optional<PlanElement> planElement = planElementRepository.findById(planId);
        if (!planElement.isPresent()) {
            throw new ResourceNotFoundException("Plan", "id", planId);
        }

        Set<PlanElement> planElements;
        planElements = hive.getPlanElements();

        planElements.remove(planElement.get());


        PlanElement plan = planElement.get();
        plan.setDeadline(planDetails.getDeadline());
        plan.setDropDown(planDetails.isDropDown());
        plan.setDropDownElementId(planDetails.getDropDownElementId());
        plan.setId(planDetails.getId());
        plan.setResolved(planDetails.isResolved());
        plan.setResolvedDate(planDetails.getResolvedDate());
        plan.setText(planDetails.getText());
        plan.setWithoutDeadline(planDetails.isWithoutDeadline());

        planElements.add(plan);
        hive.setPlanElements(planElements);
        hiveRepository.save(hive);
        for (Hive h : hiveRepository.findAll()) {
            sizeLogService.updateSizeLogs(h.getId());
        }
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
        for (Hive h : hiveRepository.findAll()) {
            sizeLogService.updateSizeLogs(h.getId());
        }
        return colonyRepository.findAll();
    }

    // Delete a Hive
    @DeleteMapping("/hive/{hiveId}")
    public List<Colony> deleteHive(@PathVariable Long hiveId) {
        Hive hive = hiveRepository.findById(hiveId)
                .orElseThrow(() -> new ResourceNotFoundException("Hive", "id", hiveId));
        hiveRepository.delete(hive);
        for (Hive h : hiveRepository.findAll()) {
            sizeLogService.updateSizeLogs(h.getId());
        }
        return colonyRepository.findAll();
    }

    @GetMapping("/hive/{hiveId}/sizelogs")
    public List<SizeLog> getSizeLogs(@PathVariable Long hiveId) {
        for (Hive hive : hiveRepository.findAll()) {
            sizeLogService.updateSizeLogs(hive.getId());
        }
        return hiveRepository.findById(hiveId).get().getSizeLogs();
    }

    @PutMapping("/hive/{hiveId}/sizelogs/{logId}")
    public List<SizeLog> updateLogs(@PathVariable Long hiveId, @PathVariable Long logId, @RequestBody SizeLog newSizeLog) {

        Hive hive = hiveRepository.findById(hiveId)
                .orElseThrow(() -> new ResourceNotFoundException("Hive", "id", hiveId));
        List<SizeLog> sizeLogs = hive.getSizeLogs();
        System.out.println(sizeLogs);
        for (SizeLog log : sizeLogs) {
            if (logId.equals(log.getId())) {
                int index = sizeLogs.indexOf(log);
                sizeLogs.remove(log);
                sizeLogs.add(index, newSizeLog);
                System.out.println(sizeLogs);
                hive.setSizeLogs(sizeLogs);
                hiveRepository.save(hive);
                return sizeLogs;
            }
        }
        for (Hive h : hiveRepository.findAll()) {
            sizeLogService.updateSizeLogs(h.getId());
        }
        return sizeLogs;
    }
}
