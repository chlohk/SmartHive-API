package com.example.SmartHiveAPI.controller;

import com.example.SmartHiveAPI.exception.ResourceNotFoundException;
import com.example.SmartHiveAPI.model.*;
import com.example.SmartHiveAPI.repositories.ColonyRepository;
import com.example.SmartHiveAPI.repositories.HiveRepository;
import com.example.SmartHiveAPI.repositories.PlanElementRepository;
import com.example.SmartHiveAPI.repositories.SizeLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/api")
public class HiveController {

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
        hive.setSizeLogs(new ArrayList<>());

        hiveRepository.save(hive);
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

    @GetMapping("/hive/{hiveId}/sizelogs")
    public List<SizeLog> getSizeLogs(@PathVariable Long hiveId) {
        Hive hive = hiveRepository.findById(hiveId)
                .orElseThrow(() -> new ResourceNotFoundException("Hive", "id", hiveId));
        List<SizeLog> sizeLogs = hive.getSizeLogs();

        // First time call.
        if (sizeLogs.isEmpty()) {

            // Initiate parameters.
            SizeLog newSizeLog = new SizeLog();
            newSizeLog.setTotalNumOfFrames(0);
            newSizeLog.setMagazineSize(0);
            newSizeLog.setAddedNumOfFrames(0);
            newSizeLog.setHasMagazine(false);
            newSizeLog.setRemovedCocoons(0);
            newSizeLog.setRemovedNumOfFrames(0);
            newSizeLog.setDay(new java.sql.Date(System.currentTimeMillis()));

            sizeLogs.add(newSizeLog);

            hive.setSizeLogs(sizeLogs);
            hiveRepository.save(hive);
            return sizeLogs;
        }

        // Get the last log in the list (Sort by ID).
        Long maxInt = sizeLogs.stream().mapToLong(SizeLog::getId).max().getAsLong();
        SizeLog lastLog = sizeLogs.stream().filter(log -> log.getId().equals(maxInt)).findFirst().get();

        // Check if today's date is the same with the last log
        SimpleDateFormat fmt = new SimpleDateFormat("yyyyMMdd");
        Boolean dateIsTheSame = fmt.format(lastLog.getDay())
                .equals(fmt.format(new java.sql.Date(System.currentTimeMillis())));

        // Second time call (Already has an instance in list).
        if (sizeLogs.size() == 1) {
            if (dateIsTheSame) {
                // Return existing list.
                return sizeLogs;
            } else {
                // Check if last log is not edited -> Change date the of the last log.
                if (!lastLog.isHasMagazine() && lastLog.getMagazineSize() == 0 &&
                        lastLog.getRemovedNumOfFrames() == 0 &&
                        lastLog.getRemovedCocoons() == 0 &&
                        lastLog.getAddedNumOfFrames() == 0) {
                    sizeLogs.remove(lastLog);
                    lastLog.setDay(new java.sql.Date(System.currentTimeMillis()));
                    sizeLogs.add(lastLog);
                    hive.setSizeLogs(sizeLogs);
                } else {

                    // Add new log if the date is not the same.
                    sizeLogs.remove(lastLog);
                    lastLog.setDay(new java.sql.Date(System.currentTimeMillis()));
                    sizeLogs.add(lastLog);
                    hive.setSizeLogs(sizeLogs);
                    hiveRepository.save(hive);


                    // Get the right order and return.
                    Long firstInt = sizeLogs.stream().mapToLong(SizeLog::getId).max().getAsLong();
                    SizeLog firstLog = sizeLogs.stream().filter(log -> log.getId().equals(firstInt)).findFirst().get();
                    sizeLogs.remove(firstLog);
                    Long secondInt = sizeLogs.stream().mapToLong(SizeLog::getId).max().getAsLong();
                    SizeLog secondLog = sizeLogs.stream().filter(log -> log.getId().equals(secondInt)).findFirst().get();
                    sizeLogs.remove(secondLog);

                    List<SizeLog> returnList = new ArrayList<>();
                    returnList.add(firstLog);
                    returnList.add(secondLog);
                    return returnList;
                }
            }
        }

        // Third time call (2 logs in list).
        if (sizeLogs.size() == 2) {
            if (dateIsTheSame) {
                // Get the right order and return.
                Long firstInt = sizeLogs.stream().mapToLong(SizeLog::getId).max().getAsLong();
                SizeLog firstLog = sizeLogs.stream().filter(log -> log.getId().equals(firstInt)).findFirst().get();
                sizeLogs.remove(firstLog);
                Long secondInt = sizeLogs.stream().mapToLong(SizeLog::getId).max().getAsLong();
                SizeLog secondLog = sizeLogs.stream().filter(log -> log.getId().equals(secondInt)).findFirst().get();
                sizeLogs.remove(secondLog);

                List<SizeLog> returnList = new ArrayList<>();
                returnList.add(firstLog);
                returnList.add(secondLog);
                return returnList;
            } else {
                // Check if last log is not edited.
                if (!lastLog.isHasMagazine() && lastLog.getMagazineSize() == 0 &&
                        lastLog.getRemovedNumOfFrames() == 0 &&
                        lastLog.getRemovedCocoons() == 0 &&
                        lastLog.getAddedNumOfFrames() == 0) {
                    Long firstInt = sizeLogs.stream().mapToLong(SizeLog::getId).max().getAsLong();
                    SizeLog firstLog = sizeLogs.stream().filter(log -> log.getId().equals(firstInt)).findFirst().get();
                    sizeLogs.remove(firstLog);
                    Long secondInt = sizeLogs.stream().mapToLong(SizeLog::getId).max().getAsLong();
                    SizeLog secondLog = sizeLogs.stream().filter(log -> log.getId().equals(secondInt)).findFirst().get();
                    sizeLogs.remove(secondLog);
                    Long thirdInt = sizeLogs.stream().mapToLong(SizeLog::getId).max().getAsLong();
                    SizeLog thirdLog = sizeLogs.stream().filter(log -> log.getId().equals(thirdInt)).findFirst().get();
                    sizeLogs.remove(thirdLog);

                    List<SizeLog> returnList = new ArrayList<>();
                    returnList.add(firstLog);
                    returnList.add(secondLog);
                    returnList.add(thirdLog);
                    return returnList;
                } else {
                    sizeLogs.remove(lastLog);
                    lastLog.setDay(new java.sql.Date(System.currentTimeMillis()));
                    sizeLogs.add(lastLog);
                    hive.setSizeLogs(sizeLogs);
                    hiveRepository.save(hive);
                    Long firstInt = sizeLogs.stream().mapToLong(SizeLog::getId).max().getAsLong();
                    SizeLog firstLog = sizeLogs.stream().filter(log -> log.getId().equals(firstInt)).findFirst().get();
                    sizeLogs.remove(firstLog);
                    Long secondInt = sizeLogs.stream().mapToLong(SizeLog::getId).max().getAsLong();
                    SizeLog secondLog = sizeLogs.stream().filter(log -> log.getId().equals(secondInt)).findFirst().get();
                    sizeLogs.remove(secondLog);
                    Long thirdInt = sizeLogs.stream().mapToLong(SizeLog::getId).max().getAsLong();
                    SizeLog thirdLog = sizeLogs.stream().filter(log -> log.getId().equals(thirdInt)).findFirst().get();
                    sizeLogs.remove(thirdLog);

                    List<SizeLog> returnList = new ArrayList<>();
                    returnList.add(firstLog);
                    returnList.add(secondLog);
                    returnList.add(thirdLog);
                    return returnList;
                }
            }
        }

        // More than 2 logs in list.
        return null;

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
        return sizeLogs;
    }
}
