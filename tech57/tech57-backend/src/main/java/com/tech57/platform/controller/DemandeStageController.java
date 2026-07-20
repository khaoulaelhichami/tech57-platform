package com.tech57.platform.controller;

import com.tech57.platform.dto.DemandeStageRequest;
import com.tech57.platform.entity.DemandeStage;
import com.tech57.platform.entity.StatutDemande;
import com.tech57.platform.service.ContenuService;
import com.tech57.platform.service.DemandeStageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class DemandeStageController {

    private final DemandeStageService demandeStageService;
    private final ContenuService contenuService;

    // --- Public : depot de candidature sans compte ---
    @PostMapping("/api/demandes/postuler")
    public DemandeStage postuler(@RequestBody DemandeStageRequest request) {
        return demandeStageService.postuler(request);
    }

    // --- Public : liste des pieces a fournir (configurable par l'admin) ---
    @GetMapping("/api/demandes/pieces-requises")
    public Object getPiecesRequises() {
        return contenuService.getPiecesActives();
    }

    // --- Admin : gestion des demandes ---
    @GetMapping("/api/admin/demandes")
    public List<DemandeStage> getAll(@RequestParam(required = false) StatutDemande statut) {
        return statut == null ? demandeStageService.getAll() : demandeStageService.getByStatut(statut);
    }

    @GetMapping("/api/admin/demandes/{id}")
    public DemandeStage getById(@PathVariable Long id) {
        return demandeStageService.getById(id);
    }

    @PutMapping("/api/admin/demandes/{id}/statut")
    public DemandeStage changerStatut(@PathVariable Long id, @RequestParam StatutDemande statut) {
        return demandeStageService.changerStatut(id, statut);
    }

    @PutMapping("/api/admin/demandes/{id}/note")
    public DemandeStage ajouterNote(@PathVariable Long id, @RequestBody String note) {
        return demandeStageService.ajouterNote(id, note);
    }
}
