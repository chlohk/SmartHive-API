package com.example.SmartHiveAPI.service;

import com.example.SmartHiveAPI.exception.ResourceNotFoundException;
import com.example.SmartHiveAPI.model.Hive;
import com.example.SmartHiveAPI.model.SizeLog;
import com.example.SmartHiveAPI.repositories.HiveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.List;

@Service("SizeLog")
public class SizeLogService {

    @Autowired
    HiveRepository hiveRepository;

    public void updateSizeLogs(long hiveId) {
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
            return;
        }

        // Get the last log in the list (Sort by day).
        Collections.reverse(sizeLogs);
        SizeLog lastLog = sizeLogs.get(0);

        // Check if today's date is the same with the last log
        SimpleDateFormat fmt = new SimpleDateFormat("yyyyMMdd");
        Boolean dateIsTheSame = fmt.format(lastLog.getDay())
                .equals(fmt.format(new java.sql.Date(System.currentTimeMillis())));

        // Second time call (Already has an instance in list).
        if (sizeLogs.size() >= 1) {
            if (dateIsTheSame) {
                // Return existing list.
                return;
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

                }
            }
        }
        hiveRepository.save(hive);
        Collections.sort(sizeLogs);
        return;
    }
}
