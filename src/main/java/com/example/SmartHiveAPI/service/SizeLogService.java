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

        if (sizeLogs.isEmpty()) {
            addNewSizeLog(sizeLogs, hive);
            return;
        }

        Collections.reverse(sizeLogs);
        SizeLog lastLog = sizeLogs.get(0);

        if (lastLogHasTodaysDate(lastLog)) {
            return;
        }

        if (wasLastLogEntryUseful(sizeLogs, lastLog)) {
            SizeLog newLog = SizeLog.builder()
                    .hasMagazine(lastLog.isHasMagazine())
                    .magazineSize(lastLog.getMagazineSize())
                    .addedNumOfFrames(0)
                    .removedNumOfFrames(0)
                    .totalNumOfFrames(lastLog.getTotalNumOfFrames())
                    .removedCocoons(0)
                    .day(new java.sql.Date(System.currentTimeMillis()))
                    .build();

            sizeLogs.add(newLog);
            hive.setSizeLogs(sizeLogs);

        } else {
            sizeLogs.remove(lastLog);
            lastLog.setDay(new java.sql.Date(System.currentTimeMillis()));
            sizeLogs.add(lastLog);
            hive.setSizeLogs(sizeLogs);
        }
        hiveRepository.save(hive);
        Collections.sort(sizeLogs);
    }

    private void addNewSizeLog(List<SizeLog> sizeLogs, Hive hive) {
        SizeLog newSizeLog = SizeLog.builder()
                .hasMagazine(false)
                .magazineSize(0)
                .addedNumOfFrames(0)
                .removedNumOfFrames(0)
                .totalNumOfFrames(0)
                .removedCocoons(0)
                .day(new java.sql.Date(System.currentTimeMillis()))
                .build();

        sizeLogs.add(newSizeLog);
        hive.setSizeLogs(sizeLogs);
        hiveRepository.save(hive);
    }

    private boolean lastLogHasTodaysDate(SizeLog lastLog) {
        SimpleDateFormat fmt = new SimpleDateFormat("yyyyMMdd");
        return  fmt.format(lastLog.getDay())
                .equals(fmt.format(new java.sql.Date(System.currentTimeMillis())));
    }

    private boolean wasLastLogEntryUseful(List<SizeLog> sizeLogs, SizeLog lastLog) {
        if(sizeLogs.size() >= 2) {
            SizeLog nextToLastSizeLog = sizeLogs.get(1);
            if(nextToLastSizeLog.isHasMagazine() && lastLog.isHasMagazine()) {
                return nextToLastSizeLog.getMagazineSize() != lastLog.getMagazineSize() ||
                        lastLog.getRemovedNumOfFrames() != 0 ||
                        lastLog.getRemovedCocoons() != 0 ||
                        lastLog.getAddedNumOfFrames() != 0;
            } else if (!nextToLastSizeLog.isHasMagazine() && !lastLog.isHasMagazine()) {
                return lastLog.getRemovedNumOfFrames() != 0 ||
                        lastLog.getRemovedCocoons() != 0 ||
                        lastLog.getAddedNumOfFrames() != 0;
            } else {
                return true;
            }
        }

        return lastLog.isHasMagazine() ||
                lastLog.getRemovedNumOfFrames() != 0 ||
                lastLog.getRemovedCocoons() != 0 ||
                lastLog.getAddedNumOfFrames() != 0;
    }
}
