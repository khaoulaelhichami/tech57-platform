package com.tech57.platform.repository;

import com.tech57.platform.entity.Stagiaire;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StagiaireRepository extends JpaRepository<Stagiaire, Long> {
    List<Stagiaire> findByActifTrue();
}
