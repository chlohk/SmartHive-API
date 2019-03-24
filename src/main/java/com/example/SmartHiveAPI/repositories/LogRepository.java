package com.example.SmartHiveAPI.repositories;

import com.example.SmartHiveAPI.model.Log;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogRepository extends JpaRepository<Log, Long> {

}
