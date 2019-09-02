package com.example.SmartHiveAPI.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.Valid;

@Data
@Valid
@Entity
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class PlanningDropdown implements Comparable<PlanningDropdown>{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String text;
    private int deadline;
    private int orderNumber;
    private boolean withoutDeadline;

    @Override
    public int compareTo(PlanningDropdown o) {
        return getOrderNumber() - o.getOrderNumber();
    }
}
