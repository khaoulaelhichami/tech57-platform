package com.tech57.platform.controller;

import com.tech57.platform.entity.*;
import com.tech57.platform.service.ContenuService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Backoffice : gestion du contenu affiche sur la vitrine
@RestController
@RequestMapping("/api/admin/contenu")
@RequiredArgsConstructor
public class AdminContenuController {

    private final ContenuService contenuService;

    // --- Services ---
    @GetMapping("/services")
    public List<ServiceItem> getServices() { return contenuService.getAllServices(); }

    @PostMapping("/services")
    public ServiceItem createService(@RequestBody ServiceItem s) { return contenuService.saveService(s); }

    @PutMapping("/services/{id}")
    public ServiceItem updateService(@PathVariable Long id, @RequestBody ServiceItem s) {
        s.setId(id);
        return contenuService.saveService(s);
    }

    @DeleteMapping("/services/{id}")
    public void deleteService(@PathVariable Long id) { contenuService.deleteService(id); }

    // --- Projets ---
    @GetMapping("/projets")
    public List<Projet> getProjets() { return contenuService.getAllProjets(); }

    @PostMapping("/projets")
    public Projet createProjet(@RequestBody Projet p) { return contenuService.saveProjet(p); }

    @PutMapping("/projets/{id}")
    public Projet updateProjet(@PathVariable Long id, @RequestBody Projet p) {
        p.setId(id);
        return contenuService.saveProjet(p);
    }

    @DeleteMapping("/projets/{id}")
    public void deleteProjet(@PathVariable Long id) { contenuService.deleteProjet(id); }

    // --- Clients ---
    @GetMapping("/clients")
    public List<Client> getClients() { return contenuService.getAllClients(); }

    @PostMapping("/clients")
    public Client createClient(@RequestBody Client c) { return contenuService.saveClient(c); }

    @PutMapping("/clients/{id}")
    public Client updateClient(@PathVariable Long id, @RequestBody Client c) {
        c.setId(id);
        return contenuService.saveClient(c);
    }

    @DeleteMapping("/clients/{id}")
    public void deleteClient(@PathVariable Long id) { contenuService.deleteClient(id); }

    // --- Partenaires ---
    @GetMapping("/partenaires")
    public List<Partenaire> getPartenaires() { return contenuService.getAllPartenaires(); }

    @PostMapping("/partenaires")
    public Partenaire createPartenaire(@RequestBody Partenaire p) { return contenuService.savePartenaire(p); }

    @PutMapping("/partenaires/{id}")
    public Partenaire updatePartenaire(@PathVariable Long id, @RequestBody Partenaire p) {
        p.setId(id);
        return contenuService.savePartenaire(p);
    }

    @DeleteMapping("/partenaires/{id}")
    public void deletePartenaire(@PathVariable Long id) { contenuService.deletePartenaire(id); }

    // --- Membres ---
    @GetMapping("/membres")
    public List<Membre> getMembres() { return contenuService.getAllMembres(); }

    @PostMapping("/membres")
    public Membre createMembre(@RequestBody Membre m) { return contenuService.saveMembre(m); }

    @PutMapping("/membres/{id}")
    public Membre updateMembre(@PathVariable Long id, @RequestBody Membre m) {
        m.setId(id);
        return contenuService.saveMembre(m);
    }

    @DeleteMapping("/membres/{id}")
    public void deleteMembre(@PathVariable Long id) { contenuService.deleteMembre(id); }

    // --- Pieces requises (configuration des documents demandes pour le stage) ---
    @GetMapping("/pieces-requises")
    public List<PieceRequise> getPieces() { return contenuService.getAllPieces(); }

    @PostMapping("/pieces-requises")
    public PieceRequise createPiece(@RequestBody PieceRequise p) { return contenuService.savePiece(p); }

    @PutMapping("/pieces-requises/{id}")
    public PieceRequise updatePiece(@PathVariable Long id, @RequestBody PieceRequise p) {
        p.setId(id);
        return contenuService.savePiece(p);
    }

    @DeleteMapping("/pieces-requises/{id}")
    public void deletePiece(@PathVariable Long id) { contenuService.deletePiece(id); }
}
