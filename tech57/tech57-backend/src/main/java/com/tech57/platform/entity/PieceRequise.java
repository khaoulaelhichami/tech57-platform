package com.tech57.platform.entity;

import jakarta.persistence.*;
import lombok.Data;

// Liste configurable des pieces a fournir pour une demande de stage
// (modifiable par l'admin sans intervention technique)
@Entity
@Table(name = "pieces_requises")
@Data
public class PieceRequise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nom; // ex: "CV", "Lettre de motivation", "Copie CIN"

    private boolean obligatoire = true;

    private boolean active = true;
}
