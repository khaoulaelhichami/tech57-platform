package com.tech57.platform.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "membres")
@Data
public class Membre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String prenom;

    private String poste;

    private String photo;

    @Column(length = 1000)
    private String bio;

    private Integer ordre = 0;

    private boolean actif = true;
}
