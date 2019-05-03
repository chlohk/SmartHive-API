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
import java.util.List;

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



    @OneToMany(cascade=CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name="hive_id")
    private List<SizeLog> sizeLogs = new ArrayList<>();

    @OneToOne(cascade=CascadeType.ALL)
    private MomAttributes momAttributes;

    @NotEmpty
    private String description;

    @JsonIgnore
    public List<SizeLog> getMaxThreeSizeLogs() {
       return getSizeLogs().subList(0, min(getSizeLogs().size(), 2));
    }
}
