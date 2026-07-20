package com.tech57.platform.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "partenaires")
@Data
public class Partenaire {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nom;

    private String logo;

    private boolean actif = true;
}
