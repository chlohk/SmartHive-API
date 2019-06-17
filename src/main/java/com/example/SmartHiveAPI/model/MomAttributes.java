package com.example.SmartHiveAPI.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.Valid;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@Valid
@Entity
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class MomAttributes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    private MomStatus momStatus;

    private Date statusStartingDate;

    private Boolean isLayingEggs;

    private Date eggsLastSeen;

    private MarkedStatus markedStatus;

    private Date markedDate;

    private String markedDescription;

    private Boolean isMarkedDateMonthSet;

    private Date birthday;

    private Boolean isBirthdayDateMonthSet;

    private Date controlFrameStartDate;

    private Date cocoonChosenDate;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name="mom_attributes_id")
    private Set<Log> freakLog = new HashSet<>();

}
