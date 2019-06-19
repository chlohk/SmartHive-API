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
public class PlanElement implements Comparable<PlanElement>{
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

    @Override
    public int compareTo(PlanElement o) {
        if (o.isResolved() && isResolved()) {
            return getResolvedDate().compareTo(o.getResolvedDate());
        }

        if (o.getDeadline() == null) {
            return -1;
        }
        if (getDeadline() == null) {
            return 1;
        }
        return getDeadline().compareTo(o.getDeadline());
    }
}
