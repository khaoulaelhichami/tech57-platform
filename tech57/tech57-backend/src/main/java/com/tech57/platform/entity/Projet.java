package com.tech57.platform.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name = "projets")
@Data
public class Projet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titre;

    @Column(length = 2000)
    private String description;

    private String image;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    private LocalDate datePublication;

    private boolean actif = true;
}
