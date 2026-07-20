package com.tech57.platform.controller;

import com.tech57.platform.entity.Stagiaire;
import com.tech57.platform.service.StagiaireService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/stagiaires")
@RequiredArgsConstructor
public class StagiaireController {

    private final StagiaireService stagiaireService;

    @GetMapping
    public List<Stagiaire> getAll() { return stagiaireService.getAll(); }

    @GetMapping("/{id}")
    public Stagiaire getById(@PathVariable Long id) { return stagiaireService.getById(id); }

    @PutMapping("/{id}")
    public Stagiaire update(@PathVariable Long id, @RequestBody Stagiaire data) {
        return stagiaireService.update(id, data);
    }
}
