package com.example.SmartHiveAPI.repositories;

import com.example.SmartHiveAPI.model.NoteDTO;
import com.example.SmartHiveAPI.model.PlanElement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<NoteDTO, Long> {
}
