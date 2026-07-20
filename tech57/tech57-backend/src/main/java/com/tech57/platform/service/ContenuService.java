package com.tech57.platform.service;

import com.tech57.platform.entity.*;
import com.tech57.platform.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

// Regroupe la gestion du contenu de la vitrine (services, projets, clients, partenaires, membres)
@Service
@RequiredArgsConstructor
public class ContenuService {

    private final ServiceItemRepository serviceItemRepository;
    private final ProjetRepository projetRepository;
    private final ClientRepository clientRepository;
    private final PartenaireRepository partenaireRepository;
    private final MembreRepository membreRepository;
    private final PieceRequiseRepository pieceRequiseRepository;

    // --- Services ---
    public List<ServiceItem> getAllServices() { return serviceItemRepository.findAll(); }
    public List<ServiceItem> getServicesPublics() { return serviceItemRepository.findByActifTrueOrderByOrdreAsc(); }
    public ServiceItem saveService(ServiceItem s) { return serviceItemRepository.save(s); }
    public void deleteService(Long id) { serviceItemRepository.deleteById(id); }

    // --- Projets ---
    public List<Projet> getAllProjets() { return projetRepository.findAll(); }
    public List<Projet> getProjetsPublics() { return projetRepository.findByActifTrue(); }
    public Projet saveProjet(Projet p) { return projetRepository.save(p); }
    public void deleteProjet(Long id) { projetRepository.deleteById(id); }

    // --- Clients ---
    public List<Client> getAllClients() { return clientRepository.findAll(); }
    public List<Client> getClientsPublics() { return clientRepository.findByActifTrue(); }
    public Client saveClient(Client c) { return clientRepository.save(c); }
    public void deleteClient(Long id) { clientRepository.deleteById(id); }

    // --- Partenaires ---
    public List<Partenaire> getAllPartenaires() { return partenaireRepository.findAll(); }
    public List<Partenaire> getPartenairesPublics() { return partenaireRepository.findByActifTrue(); }
    public Partenaire savePartenaire(Partenaire p) { return partenaireRepository.save(p); }
    public void deletePartenaire(Long id) { partenaireRepository.deleteById(id); }

    // --- Membres ---
    public List<Membre> getAllMembres() { return membreRepository.findAll(); }
    public List<Membre> getMembresPublics() { return membreRepository.findByActifTrueOrderByOrdreAsc(); }
    public Membre saveMembre(Membre m) { return membreRepository.save(m); }
    public void deleteMembre(Long id) { membreRepository.deleteById(id); }

    // --- Pieces requises (liste configurable, sans intervention technique) ---
    public List<PieceRequise> getAllPieces() { return pieceRequiseRepository.findAll(); }
    public List<PieceRequise> getPiecesActives() { return pieceRequiseRepository.findByActiveTrue(); }
    public PieceRequise savePiece(PieceRequise p) { return pieceRequiseRepository.save(p); }
    public void deletePiece(Long id) { pieceRequiseRepository.deleteById(id); }
}
