package com.example.SmartHiveAPI.repositories;

import com.example.SmartHiveAPI.model.PlanElement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlanElementRepository extends JpaRepository<PlanElement, Long> {
}
