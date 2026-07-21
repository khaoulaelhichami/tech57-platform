package com.tech57.platform.repository;

import com.tech57.platform.entity.Administrateur;
import com.tech57.platform.entity.Role;
import com.tech57.platform.entity.StatutCompte;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AdministrateurRepository extends JpaRepository<Administrateur, Long> {

    Optional<Administrateur> findByEmail(String email);

    boolean existsByEmail(String email);

    List<Administrateur> findByStatutCompte(StatutCompte statutCompte);

    List<Administrateur> findByRole(Role role);

}