package com.tech57.platform.repository;

import com.tech57.platform.entity.DemandeStage;
import com.tech57.platform.entity.StatutDemande;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DemandeStageRepository extends JpaRepository<DemandeStage, Long> {
    List<DemandeStage> findByStatut(StatutDemande statut);
    List<DemandeStage> findByDomaine(String domaine);
    long countByStatut(StatutDemande statut);
}
