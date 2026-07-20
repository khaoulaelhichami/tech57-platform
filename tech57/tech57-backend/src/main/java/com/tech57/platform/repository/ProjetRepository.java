package com.tech57.platform.repository;

import com.tech57.platform.entity.Projet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjetRepository extends JpaRepository<Projet, Long> {
    List<Projet> findByActifTrue();
}
