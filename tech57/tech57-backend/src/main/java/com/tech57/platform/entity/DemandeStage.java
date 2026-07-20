package com.tech57.platform.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "demandes_stage")
@Data
public class DemandeStage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String prenom;
    private String email;
    private String telephone;
    private String etablissement;
    private String domaine; // robotique / IT / design / digitalisation

    private LocalDate periodeDebut;
    private LocalDate periodeFin;

    @Enumerated(EnumType.STRING)
    private StatutDemande statut = StatutDemande.RECUE;

    private LocalDateTime dateDepot = LocalDateTime.now();

    @Column(length = 2000)
    private String noteAdmin; // commentaire interne / historique des echanges (simplifie)
}
