package com.tech57.platform.controller;

import com.tech57.platform.dto.DemandeStageRequest;
import com.tech57.platform.entity.DemandeStage;
import com.tech57.platform.entity.DocumentDemande;
import com.tech57.platform.entity.StatutDemande;
import com.tech57.platform.service.ContenuService;
import com.tech57.platform.service.DemandeStageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.util.List;
import com.tech57.platform.service.ExportService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@RestController
@RequiredArgsConstructor
public class DemandeStageController {

    private final DemandeStageService demandeStageService;
    private final ContenuService contenuService;
    private final ExportService exportService;

    // --- Public : depot de candidature avec fichiers ---
    @PostMapping(value = "/api/demandes/postuler", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public DemandeStage postuler(
            @RequestPart("donnees") DemandeStageRequest request,
            @RequestPart(value = "cv", required = false) MultipartFile cv,
            @RequestPart(value = "cin", required = false) MultipartFile cin,
            @RequestPart(value = "convention", required = false) MultipartFile convention,
            @RequestPart(value = "lettreMotivation", required = false) MultipartFile lettreMotivation,
            @RequestPart(value = "attestation", required = false) MultipartFile attestation) {

        return demandeStageService.postuler(request, cv, cin, convention, lettreMotivation, attestation);
    }

    // --- Public : liste des pieces a fournir ---
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

    // --- Admin : documents joints a une demande ---
    @GetMapping("/api/admin/demandes/{id}/documents")
    public List<DocumentDemande> getDocuments(@PathVariable Long id) {
        return demandeStageService.getDocuments(id);
    }
    @GetMapping("/api/admin/demandes/{id}/export-pdf")
    public ResponseEntity<byte[]> exportPdf(@PathVariable Long id) {
        DemandeStage demande = demandeStageService.getById(id);
        byte[] pdf = exportService.exportDemandePdf(demande);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=demande-" + id + ".pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }

    @GetMapping("/api/admin/demandes/export-excel")
    public ResponseEntity<byte[]> exportExcel(@RequestParam(required = false) StatutDemande statut) {
        List<DemandeStage> demandes = statut == null ? demandeStageService.getAll() : demandeStageService.getByStatut(statut);
        byte[] excel = exportService.exportDemandesExcel(demandes);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=demandes.xlsx")
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .body(excel);
    }
}