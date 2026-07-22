package com.tech57.platform.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String prenom;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(name = "mot_de_passe", nullable = false)
    private String motDePasse;

    // Blocage / déblocage par un admin (indépendant de la validation du compte)
    @Column(nullable = false)
    private boolean actif = true;

    // Validation du compte Encadrant par un Admin
    @Enumerated(EnumType.STRING)
    @Column(name = "statut_validation", nullable = false)
    private StatutValidation statutValidation = StatutValidation.APPROUVE;
    // Par defaut APPROUVE (ex: seed admin). L'inscription Encadrant (Etape 4)
    // forcera explicitement EN_ATTENTE.

    @Column(name = "date_creation", nullable = false)
    private LocalDateTime dateCreation = LocalDateTime.now();

    private LocalDateTime derniereConnexion;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<>();
}