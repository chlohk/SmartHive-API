package com.example.SmartHiveAPI.repositories;

import com.example.SmartHiveAPI.model.Colony;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColonyRepository extends JpaRepository<Colony, Long> {
}
