package com.tech57.platform.service;

import com.tech57.platform.entity.Stagiaire;
import com.tech57.platform.repository.StagiaireRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StagiaireService {

    private final StagiaireRepository stagiaireRepository;

    public List<Stagiaire> getAll() {
        return stagiaireRepository.findAll();
    }

    public Stagiaire getById(Long id) {
        return stagiaireRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Stagiaire introuvable"));
    }

    public Stagiaire update(Long id, Stagiaire data) {
        Stagiaire stagiaire = getById(id);
        stagiaire.setEncadrant(data.getEncadrant());
        stagiaire.setDateDebut(data.getDateDebut());
        stagiaire.setDateFin(data.getDateFin());
        stagiaire.setEvaluation(data.getEvaluation());
        stagiaire.setActif(data.isActif());
        return stagiaireRepository.save(stagiaire);
    }
}
