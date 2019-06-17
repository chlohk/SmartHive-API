package com.example.SmartHiveAPI.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.Valid;
import java.util.Date;


@Data
@Valid
@Entity
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class PlanElement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    Date deadline;
    boolean isWithoutDeadline;
    String text;
    int dropDownElementId;
    boolean isDropDown;
    Date resolvedDate;
    boolean isResolved;

    public int compareTo(PlanElement pe) {
        if (getDeadline() == null || pe.getDeadline() == null) {
            return 0;
        }
        return getDeadline().compareTo(pe.getDeadline());
    }
}
