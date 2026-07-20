package com.tech57.platform.controller;

import com.tech57.platform.entity.Administrateur;
import com.tech57.platform.service.AdministrateurService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Backoffice : gestion des comptes administrateurs
@RestController
@RequestMapping("/api/admin/comptes")
@RequiredArgsConstructor
public class AdminCompteController {

    private final AdministrateurService administrateurService;

    @GetMapping
    public List<Administrateur> getAll() { return administrateurService.getAll(); }

    @PostMapping
    public Administrateur create(@RequestBody CreateCompteRequest request) {
        Administrateur admin = new Administrateur();
        admin.setNom(request.getNom());
        admin.setPrenom(request.getPrenom());
        admin.setEmail(request.getEmail());
        return administrateurService.create(admin, request.getMotDePasse());
    }

    @PutMapping("/{id}")
    public Administrateur update(@PathVariable Long id, @RequestBody Administrateur data) {
        return administrateurService.update(id, data);
    }

    @PutMapping("/{id}/mot-de-passe")
    public void changerMotDePasse(@PathVariable Long id, @RequestBody String nouveauMotDePasse) {
        administrateurService.changerMotDePasse(id, nouveauMotDePasse);
    }

    @DeleteMapping("/{id}")
    public void desactiver(@PathVariable Long id) { administrateurService.desactiver(id); }

    @Data
    public static class CreateCompteRequest {
        private String nom;
        private String prenom;
        private String email;
        private String motDePasse;
    }
}
