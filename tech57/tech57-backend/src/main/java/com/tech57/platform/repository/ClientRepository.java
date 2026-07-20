package com.tech57.platform.repository;

import com.tech57.platform.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClientRepository extends JpaRepository<Client, Long> {
    List<Client> findByActifTrue();
}
