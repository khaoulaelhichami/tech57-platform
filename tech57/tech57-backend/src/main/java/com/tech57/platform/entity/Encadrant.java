package com.tech57.platform.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "encadrants")
@Data
public class Encadrant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String prenom;
    private String email;
    private String telephone;
    private String specialite; // Robotique, IT, Design, Digitalisation

    private boolean actif = true;
}
