package com.tech57.platform.controller;

import com.tech57.platform.service.ContenuService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

// Endpoints publics consommes par le site vitrine (lecture seule)
@RestController
@RequestMapping("/api/public")
@RequiredArgsConstructor
public class PublicController {

    private final ContenuService contenuService;

    @GetMapping("/services")
    public Object getServices() { return contenuService.getServicesPublics(); }

    @GetMapping("/projets")
    public Object getProjets() { return contenuService.getProjetsPublics(); }

    @GetMapping("/clients")
    public Object getClients() { return contenuService.getClientsPublics(); }

    @GetMapping("/partenaires")
    public Object getPartenaires() { return contenuService.getPartenairesPublics(); }

    @GetMapping("/membres")
    public Object getMembres() { return contenuService.getMembresPublics(); }
}
