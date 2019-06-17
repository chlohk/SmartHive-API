package com.example.SmartHiveAPI.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static java.lang.Math.min;

@Data
@Valid
@Entity(name = "Hive")
@AllArgsConstructor
@Table(name = "hive")
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Hive implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int number;

    public void addLog(Log log) {
        getMomAttributes().getFreakLog().add(log);
    }

    @JsonIgnore
    @ManyToOne
    @LazyCollection(LazyCollectionOption.FALSE)
    @JoinColumn(name = "colony_id")
    private Colony colony;

    @JsonIgnore
    @OneToMany(cascade=CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name="hive_id")
    private Set<PlanElement> planElements = new HashSet<>();

    @JsonIgnore
    @OneToMany(cascade=CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name="hive_id")
    private List<SizeLog> sizeLogs = new ArrayList<>();

    @OneToOne(cascade=CascadeType.ALL)
    private MomAttributes momAttributes;

    @NotEmpty
    private String description;

    public Set<PlanElement> getResolvedPlanElements() {
        return getPlanElements().stream().filter(planElement -> planElement.isResolved).collect(Collectors.toSet());
    }

    public Set<PlanElement> getUnresolvedPlanElements() {
        return getPlanElements().stream().filter(planElement -> !planElement.isResolved).sorted().collect(Collectors.toSet());
    }

    @JsonIgnore
    public List<SizeLog> getMaxThreeSizeLogs() {
       return getSizeLogs().subList(0, min(getSizeLogs().size(), 2));
    }
}
