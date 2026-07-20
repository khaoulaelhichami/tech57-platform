package com.tech57.platform.repository;

import com.tech57.platform.entity.ServiceItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ServiceItemRepository extends JpaRepository<ServiceItem, Long> {
    List<ServiceItem> findByActifTrueOrderByOrdreAsc();
}
