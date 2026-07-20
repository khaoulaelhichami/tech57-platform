package com.tech57.platform.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class DemandeStageRequest {
    private String nom;
    private String prenom;
    private String email;
    private String telephone;
    private String etablissement;
    private String domaine;
    private LocalDate periodeDebut;
    private LocalDate periodeFin;
}
