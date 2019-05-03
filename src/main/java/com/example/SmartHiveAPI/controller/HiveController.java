package com.example.SmartHiveAPI.controller;

import com.example.SmartHiveAPI.exception.ResourceNotFoundException;
import com.example.SmartHiveAPI.model.*;
import com.example.SmartHiveAPI.repositories.ColonyRepository;
import com.example.SmartHiveAPI.repositories.HiveRepository;
import com.example.SmartHiveAPI.repositories.SizeLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static java.lang.Math.min;

@RestController
@RequestMapping("/api")
public class HiveController {

    @Autowired
    HiveRepository hiveRepository;

    @Autowired
    ColonyRepository colonyRepository;

    @Autowired
    SizeLogRepository sizeLogRepository;

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

        // First time call
        if (sizeLogs.isEmpty()) {
            SizeLog newLog = new SizeLog();
            newLog.setDay(new java.sql.Date(System.currentTimeMillis()));
            newLog.setAddedNumOfFrames(0);
            newLog.setRemovedNumOfFrames(0);
            newLog.setRemovedCocoons(0);
            sizeLogs.add(newLog);
            hive.setSizeLogs(sizeLogs);
            hiveRepository.save(hive);
            hive = hiveRepository.findById(hiveId)
                    .orElseThrow(() -> new ResourceNotFoundException("Hive", "id", hiveId));
            sizeLogs = hive.getSizeLogs();
            return sizeLogs;
        }

        SizeLog first = sizeLogs.get(sizeLogs.size() - 1);

        SimpleDateFormat fmt = new SimpleDateFormat("yyyyMMdd");
        System.out.println(fmt.format(first.getDay()).equals(fmt.format(new java.sql.Date(System.currentTimeMillis()))));
        System.out.println(first);
        if (fmt.format(first.getDay()).equals(fmt.format(new java.sql.Date(System.currentTimeMillis())))) {
            Collections.reverse(sizeLogs);
            return sizeLogs.subList(0, min(sizeLogs.size(), 3));
        } else {
            if (sizeLogs.size() == 1) {
                if (!first.isHasMagazine() && first.getAddedNumOfFrames() == 0
                        && first.getRemovedCocoons() == 0
                        && first.getRemovedNumOfFrames() == 0) {
                    sizeLogs.remove(first);
                    first.setDay(new java.sql.Date(System.currentTimeMillis()));
                    sizeLogs.add(0, first);
                    hive.setSizeLogs(sizeLogs);
                    hiveRepository.save(hive);
                    hive = hiveRepository.findById(hiveId)
                            .orElseThrow(() -> new ResourceNotFoundException("Hive", "id", hiveId));
                    sizeLogs = hive.getSizeLogs();
                    return sizeLogs;
                } else {
                    SizeLog newLog = new SizeLog();
                    newLog.setDay(new java.sql.Date(System.currentTimeMillis()));
                    newLog.setAddedNumOfFrames(0);
                    newLog.setRemovedNumOfFrames(0);
                    newLog.setTotalNumOfFrames(sizeLogs.get(sizeLogs.size() - 1).getTotalNumOfFrames());
                    newLog.setMagazineSize(sizeLogs.get(sizeLogs.size() - 1).getMagazineSize());
                    newLog.setRemovedCocoons(0);
                    sizeLogs.add(0, newLog);
                    hive.setSizeLogs(sizeLogs);
                    hiveRepository.save(hive);
                    hive = hiveRepository.findById(hiveId)
                            .orElseThrow(() -> new ResourceNotFoundException("Hive", "id", hiveId));
                    sizeLogs = hive.getSizeLogs();
                    return sizeLogs;
                }
            } else {
                if (first.getMagazineSize() == sizeLogs.get(sizeLogs.size() - 2).getMagazineSize() && first.getAddedNumOfFrames() == 0
                        && first.getRemovedCocoons() == 0
                        && first.getRemovedNumOfFrames() == 0
                        && first.isHasMagazine() == sizeLogs.get(sizeLogs.size() - 2).isHasMagazine()
                        && first.getMagazineSize() == sizeLogs.get(sizeLogs.size() - 2).getMagazineSize()) {
                    sizeLogs.remove(first);
                    first.setDay(new java.sql.Date(System.currentTimeMillis()));
                    sizeLogs.add(0, first);
                    hive.setSizeLogs(sizeLogs);
                    hiveRepository.save(hive);
                    hive = hiveRepository.findById(hiveId)
                            .orElseThrow(() -> new ResourceNotFoundException("Hive", "id", hiveId));
                    sizeLogs = hive.getSizeLogs();
                    Collections.reverse(sizeLogs);
                    return sizeLogs.subList(0, min(sizeLogs.size(), 3));
                } else {
                    SizeLog newLog = new SizeLog();
                    newLog.setDay(new java.sql.Date(System.currentTimeMillis()));
                    newLog.setAddedNumOfFrames(0);
                    newLog.setRemovedNumOfFrames(0);
                    newLog.setTotalNumOfFrames(sizeLogs.get(sizeLogs.size() - 1).getTotalNumOfFrames());
                    newLog.setMagazineSize(sizeLogs.get(sizeLogs.size() - 1).getMagazineSize());
                    newLog.setRemovedCocoons(0);
                    sizeLogs.add(0, newLog);
                    hive.setSizeLogs(sizeLogs);
                    hiveRepository.save(hive);
                    hive = hiveRepository.findById(hiveId)
                            .orElseThrow(() -> new ResourceNotFoundException("Hive", "id", hiveId));
                    sizeLogs = hive.getSizeLogs();
                    Collections.reverse(sizeLogs);
                    return sizeLogs.subList(0, min(sizeLogs.size(), 3));
                }
            }
        }
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

