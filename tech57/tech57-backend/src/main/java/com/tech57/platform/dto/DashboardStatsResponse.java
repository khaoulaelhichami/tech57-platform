package com.tech57.platform.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Map;

@Data
@AllArgsConstructor
public class DashboardStatsResponse {
    private long totalDemandes;
    private long stagiairesActifs;
    private Map<String, Long> demandesParStatut;
    private Map<String, Long> demandesParDomaine;
}
