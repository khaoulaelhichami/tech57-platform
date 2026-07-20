package com.tech57.platform.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

// Cree automatiquement quand une DemandeStage passe au statut ACCEPTEE
@Entity
@Table(name = "stagiaires")
@Data
public class Stagiaire {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "demande_id", nullable = false)
    private DemandeStage demande;

    private String encadrant; // simple champ texte (pas d'entite dediee dans ce perimetre)

    private LocalDate dateDebut;
    private LocalDate dateFin;

    @Column(length = 2000)
    private String evaluation;

    private boolean actif = true;
}
