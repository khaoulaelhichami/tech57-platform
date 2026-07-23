package com.tech57.platform.service;

import com.tech57.platform.entity.Encadrant;
import com.tech57.platform.repository.EncadrantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EncadrantService {

    private final EncadrantRepository encadrantRepository;

    public List<Encadrant> getAll() {
        return encadrantRepository.findAll();
    }

    public Encadrant getById(Long id) {
        return encadrantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Encadrant introuvable"));
    }

    public Encadrant create(Encadrant encadrant) {
        return encadrantRepository.save(encadrant);
    }

    public Encadrant update(Long id, Encadrant data) {
        Encadrant existant = getById(id);
        existant.setNom(data.getNom());
        existant.setPrenom(data.getPrenom());
        existant.setEmail(data.getEmail());
        existant.setTelephone(data.getTelephone());
        existant.setSpecialite(data.getSpecialite());
        existant.setActif(data.isActif());
        return encadrantRepository.save(existant);
    }

    public void delete(Long id) {
        encadrantRepository.deleteById(id);
    }
}
