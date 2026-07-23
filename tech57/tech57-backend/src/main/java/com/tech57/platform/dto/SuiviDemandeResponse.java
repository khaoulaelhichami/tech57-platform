package com.tech57.platform.dto;

import com.tech57.platform.entity.StatutDemande;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SuiviDemandeResponse {
    private String nom;
    private String prenom;
    private String domaine;
    private StatutDemande statut;
}
