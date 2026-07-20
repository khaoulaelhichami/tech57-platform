package com.tech57.platform.service;

import com.tech57.platform.dto.DashboardStatsResponse;
import com.tech57.platform.entity.StatutDemande;
import com.tech57.platform.repository.DemandeStageRepository;
import com.tech57.platform.repository.StagiaireRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final DemandeStageRepository demandeStageRepository;
    private final StagiaireRepository stagiaireRepository;

    public DashboardStatsResponse getStats() {
        long total = demandeStageRepository.count();
        long stagiairesActifs = stagiaireRepository.findByActifTrue().size();

        Map<String, Long> parStatut = new LinkedHashMap<>();
        for (StatutDemande statut : StatutDemande.values()) {
            parStatut.put(statut.name(), demandeStageRepository.countByStatut(statut));
        }

        // Repartition par domaine (calcule simplement a partir de la liste complete)
        Map<String, Long> parDomaine = new LinkedHashMap<>();
        demandeStageRepository.findAll().forEach(d -> {
            String domaine = d.getDomaine() == null ? "Non precise" : d.getDomaine();
            parDomaine.merge(domaine, 1L, Long::sum);
        });

        return new DashboardStatsResponse(total, stagiairesActifs, parStatut, parDomaine);
    }
}
