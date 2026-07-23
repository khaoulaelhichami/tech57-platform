package com.tech57.platform.service;

import com.tech57.platform.dto.DemandeStageRequest;
import com.tech57.platform.entity.DemandeStage;
import com.tech57.platform.entity.DocumentDemande;
import com.tech57.platform.entity.Stagiaire;
import com.tech57.platform.entity.StatutDemande;
import com.tech57.platform.repository.DemandeStageRepository;
import com.tech57.platform.repository.DocumentDemandeRepository;
import com.tech57.platform.repository.StagiaireRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.tech57.platform.dto.SuiviDemandeResponse;

import java.util.List;
@Service
@RequiredArgsConstructor
public class DemandeStageService {

    private final DemandeStageRepository demandeStageRepository;
    private final StagiaireRepository stagiaireRepository;
    private final DocumentDemandeRepository documentDemandeRepository;
    private final FileStorageService fileStorageService;
    private final EmailService emailService;

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

    public DemandeStage postuler(DemandeStageRequest request, MultipartFile cv, MultipartFile cin,
                                 MultipartFile convention, MultipartFile lettreMotivation,
                                 MultipartFile attestation) {
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
        demande = demandeStageRepository.save(demande);

        enregistrerDocument(demande, "CV", cv);
        enregistrerDocument(demande, "CIN", cin);
        enregistrerDocument(demande, "Convention", convention);
        enregistrerDocument(demande, "LettreMotivation", lettreMotivation);
        enregistrerDocument(demande, "Attestation", attestation);

        emailService.envoyerAccuseReception(demande);
        emailService.notifierAdmin(demande);

        return demande;
    }

    private void enregistrerDocument(DemandeStage demande, String type, MultipartFile file) {
        if (file == null || file.isEmpty()) return;
        String chemin = fileStorageService.store(file);
        DocumentDemande doc = new DocumentDemande();
        doc.setType(type);
        doc.setNomFichier(file.getOriginalFilename());
        doc.setCheminFichier(chemin);
        doc.setDemande(demande);
        documentDemandeRepository.save(doc);
    }

    public List<DocumentDemande> getDocuments(Long demandeId) {
        return documentDemandeRepository.findByDemandeId(demandeId);
    }

    public DemandeStage changerStatut(Long id, StatutDemande nouveauStatut) {
        DemandeStage demande = getById(id);
        demande.setStatut(nouveauStatut);
        demandeStageRepository.save(demande);

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

        emailService.notifierChangementStatut(demande);
        return demande;
    }

    public DemandeStage ajouterNote(Long id, String note) {
        DemandeStage demande = getById(id);
        demande.setNoteAdmin(note);
        return demandeStageRepository.save(demande);
    }
    public SuiviDemandeResponse suivreDemande(Long id, String email) {
        DemandeStage demande = getById(id);
        if (!demande.getEmail().equalsIgnoreCase(email)) {
            throw new RuntimeException("Aucune demande trouvee avec ces informations");
        }
        return new SuiviDemandeResponse(
                demande.getNom(), demande.getPrenom(), demande.getDomaine(), demande.getStatut()
        );
    }
}
