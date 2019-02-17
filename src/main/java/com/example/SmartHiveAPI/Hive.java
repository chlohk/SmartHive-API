package com.example.SmartHiveAPI;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@Table(name = "hives")
@EntityListeners(AuditingEntityListener.class)
public class Hive {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Hive(String location) {
        this.location = location;
    }

    protected Hive() {}

    public Long getId() {
        return id;
    }

    public String getLocation() {
        return location;
    }

    private String location;
}
