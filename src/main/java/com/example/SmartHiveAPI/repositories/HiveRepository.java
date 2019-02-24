package com.example.SmartHiveAPI.repositories;

import com.example.SmartHiveAPI.model.Hive;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HiveRepository extends JpaRepository<Hive, Long> {

}
