package com.example.SmartHiveAPI.controller;

import com.example.SmartHiveAPI.exception.ResourceNotFoundException;
import com.example.SmartHiveAPI.model.Hive;
import com.example.SmartHiveAPI.model.Log;
import com.example.SmartHiveAPI.repositories.HiveRepository;
import com.example.SmartHiveAPI.repositories.LogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class LogController {

    @Autowired
    LogRepository logRepository;

    @Autowired
    HiveRepository hiveRepository;

    @PostMapping("/hive/freaklog/{hiveId}")
    public Log createLog(@PathVariable Long hiveId, @Valid @RequestBody Log log) {
        Hive hive = hiveRepository.findById(hiveId)
                .orElseThrow(() -> new ResourceNotFoundException("Hive", "id", hiveId));
        log.setDate(new java.sql.Date(System.currentTimeMillis()));
        hive.addLog(log);
        logRepository.save(log);
        return log;
    }

    @PutMapping("/hive/freaklog/{logId}")
    public Log updateLog(@PathVariable Long logId, @Valid @RequestBody Log log) {
        Log oldlog = logRepository.findById(logId).orElseThrow(() -> new ResourceNotFoundException("Hive", "id", logId));
        oldlog.setDate(log.getDate());
        oldlog.setText(log.getText());
        logRepository.save(oldlog);
        return oldlog;
    }
}
