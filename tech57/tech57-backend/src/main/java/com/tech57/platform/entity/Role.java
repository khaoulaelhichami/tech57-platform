package com.tech57.platform.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "roles")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Valeurs attendues : "ADMIN", "ENCADRANT"
    @Column(nullable = false, unique = true, length = 30)
    private String nom;

    public Role(String nom) {
        this.nom = nom;
    }
}