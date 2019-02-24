package com.example.SmartHiveAPI.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity(name="Colony")
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "colony")
@EntityListeners(AuditingEntityListener.class)
public class Colony implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    public void addHive(Hive hive) {
        hives.add(hive);
    }
    public Boolean hasHives() {
        if (hives.isEmpty()) {
            return Boolean.FALSE;
        }
        return Boolean.TRUE;
    }

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name="colony_id")
    private List<Hive> hives = new ArrayList<>();
}
