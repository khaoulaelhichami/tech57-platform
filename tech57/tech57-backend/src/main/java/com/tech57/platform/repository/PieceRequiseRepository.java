package com.tech57.platform.repository;

import com.tech57.platform.entity.PieceRequise;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PieceRequiseRepository extends JpaRepository<PieceRequise, Long> {
    List<PieceRequise> findByActiveTrue();
}
