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
public class NoteDTO implements Comparable<NoteDTO> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    String text;
    boolean hasWarning;
    boolean longTerm;
    int orderNumber;
    Date dateAdded;
    Date lastModified;
    Date dateDeleted;
    boolean isDeleted;

    @Override
    public int compareTo(NoteDTO o) {
        if (o.isDeleted && isDeleted) {
            return getDateDeleted().compareTo(o.getDateDeleted());
        }

        if (getOrderNumber() > o.getOrderNumber()) {
            return -1;
        }

        return 1;
    }
}
