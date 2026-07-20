package com.tech57.platform.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "documents_demande")
@Data
public class DocumentDemande {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type; // correspond au nom d'une PieceRequise
    private String nomFichier;
    private String cheminFichier;

    @ManyToOne
    @JoinColumn(name = "demande_id", nullable = false)
    private DemandeStage demande;

    private LocalDateTime dateDepot = LocalDateTime.now();
}
