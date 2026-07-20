package com.tech57.platform.repository;

import com.tech57.platform.entity.DocumentDemande;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DocumentDemandeRepository extends JpaRepository<DocumentDemande, Long> {
    List<DocumentDemande> findByDemandeId(Long demandeId);
}
