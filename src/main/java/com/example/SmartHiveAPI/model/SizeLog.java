package com.example.SmartHiveAPI.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.Valid;
import java.io.Serializable;
import java.util.Date;

@Data
@Valid
@Entity
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class SizeLog implements Serializable {
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
}
