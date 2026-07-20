package com.tech57.platform.repository;

import com.tech57.platform.entity.Membre;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MembreRepository extends JpaRepository<Membre, Long> {
    List<Membre> findByActifTrueOrderByOrdreAsc();
}
