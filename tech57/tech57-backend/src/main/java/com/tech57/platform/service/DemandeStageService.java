package com.tech57.platform.service;

import com.tech57.platform.dto.DemandeStageRequest;
import com.tech57.platform.entity.DemandeStage;
import com.tech57.platform.entity.Stagiaire;
import com.tech57.platform.entity.StatutDemande;
import com.tech57.platform.repository.DemandeStageRepository;
import com.tech57.platform.repository.StagiaireRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DemandeStageService {

    private final DemandeStageRepository demandeStageRepository;
    private final StagiaireRepository stagiaireRepository;

    public List<DemandeStage> getAll() {
        return demandeStageRepository.findAll();
    }

    public List<DemandeStage> getByStatut(StatutDemande statut) {
        return demandeStageRepository.findByStatut(statut);
    }

    public DemandeStage getById(Long id) {
        return demandeStageRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Demande introuvable"));
    }

    // Depot public, sans compte
    public DemandeStage postuler(DemandeStageRequest request) {
        DemandeStage demande = new DemandeStage();
        demande.setNom(request.getNom());
        demande.setPrenom(request.getPrenom());
        demande.setEmail(request.getEmail());
        demande.setTelephone(request.getTelephone());
        demande.setEtablissement(request.getEtablissement());
        demande.setDomaine(request.getDomaine());
        demande.setPeriodeDebut(request.getPeriodeDebut());
        demande.setPeriodeFin(request.getPeriodeFin());
        demande.setStatut(StatutDemande.RECUE);

        return demandeStageRepository.save(demande);
        // TODO : envoyer un accuse de reception par e-mail (Spring Mail)
    }

    // Actions admin : accepter, refuser, mettre en attente, demander complement...
    public DemandeStage changerStatut(Long id, StatutDemande nouveauStatut) {
        DemandeStage demande = getById(id);
        demande.setStatut(nouveauStatut);
        demandeStageRepository.save(demande);

        // Passage automatique en fiche "Stagiaire" apres acceptation
        if (nouveauStatut == StatutDemande.ACCEPTEE) {
            boolean dejaStagiaire = stagiaireRepository.findAll().stream()
                    .anyMatch(s -> s.getDemande().getId().equals(demande.getId()));
            if (!dejaStagiaire) {
                Stagiaire stagiaire = new Stagiaire();
                stagiaire.setDemande(demande);
                stagiaire.setDateDebut(demande.getPeriodeDebut());
                stagiaire.setDateFin(demande.getPeriodeFin());
                stagiaireRepository.save(stagiaire);
            }
        }

        // TODO : envoyer un e-mail de notification au candidat lors du changement de statut

        return demande;
    }

    public DemandeStage ajouterNote(Long id, String note) {
        DemandeStage demande = getById(id);
        demande.setNoteAdmin(note);
        return demandeStageRepository.save(demande);
    }
}
