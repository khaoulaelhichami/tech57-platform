package com.tech57.platform.service;

import com.tech57.platform.entity.Administrateur;
import com.tech57.platform.repository.AdministrateurRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

// Gestion des comptes administrateurs (creation, modification, desactivation)
@Service
@RequiredArgsConstructor
public class AdministrateurService {

    private final AdministrateurRepository administrateurRepository;
    private final PasswordEncoder passwordEncoder;

    public List<Administrateur> getAll() {
        return administrateurRepository.findAll();
    }

    public Administrateur create(Administrateur admin, String motDePasseClair) {
        admin.setMotDePasse(passwordEncoder.encode(motDePasseClair));
        return administrateurRepository.save(admin);
    }

    public Administrateur update(Long id, Administrateur data) {
        Administrateur admin = administrateurRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Administrateur introuvable"));
        admin.setNom(data.getNom());
        admin.setPrenom(data.getPrenom());
        admin.setEmail(data.getEmail());
        admin.setActif(data.isActif());
        return administrateurRepository.save(admin);
    }

    public void changerMotDePasse(Long id, String nouveauMotDePasse) {
        Administrateur admin = administrateurRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Administrateur introuvable"));
        admin.setMotDePasse(passwordEncoder.encode(nouveauMotDePasse));
        administrateurRepository.save(admin);
    }

    public void desactiver(Long id) {
        Administrateur admin = administrateurRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Administrateur introuvable"));
        admin.setActif(false);
        administrateurRepository.save(admin);
    }
}
