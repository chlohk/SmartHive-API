package com.example.SmartHiveAPI.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class SizeLog implements Comparable<SizeLog> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int magazineSize;
    private int totalNumOfFrames;
    private int addedNumOfFrames;
    private int removedNumOfFrames;
    private int removedCocoons;
    private Date day;
    private boolean hasMagazine;

    @Override
    public int compareTo(SizeLog o) {
        return getId().compareTo(o.getId());
    }

}
