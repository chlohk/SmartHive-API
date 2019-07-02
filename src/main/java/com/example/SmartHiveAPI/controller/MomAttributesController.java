package com.example.SmartHiveAPI.controller;

import com.example.SmartHiveAPI.exception.ResourceNotFoundException;
import com.example.SmartHiveAPI.model.Colony;
import com.example.SmartHiveAPI.model.Hive;
import com.example.SmartHiveAPI.model.MomAttributes;
import com.example.SmartHiveAPI.repositories.ColonyRepository;
import com.example.SmartHiveAPI.repositories.HiveRepository;
import com.example.SmartHiveAPI.service.SizeLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class MomAttributesController {

    @Autowired
    HiveRepository hiveRepository;

    @Autowired
    ColonyRepository colonyRepository;

    @Autowired
    SizeLogService sizeLogService;

    @PutMapping("/hive/{hiveId}/attributes")
    public List<Colony> updateHiveMomAttributes(@PathVariable Long hiveId,
                                                @Valid @RequestBody MomAttributes momAttributes) {
        Hive hive = hiveRepository.findById(hiveId)
                .orElseThrow(() -> new ResourceNotFoundException("hive", "id", hiveId));

        hive.setMomAttributes(momAttributes);
        hiveRepository.save(hive);
        for (Hive h : hiveRepository.findAll()) {
            sizeLogService.updateSizeLogs(h.getId());
        }
        return colonyRepository.findAll();
    }
}
