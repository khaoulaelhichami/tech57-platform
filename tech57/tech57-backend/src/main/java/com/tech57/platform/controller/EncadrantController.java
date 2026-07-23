package com.tech57.platform.controller;

import com.tech57.platform.entity.Encadrant;
import com.tech57.platform.service.EncadrantService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/encadrants")
@RequiredArgsConstructor
public class EncadrantController {

    private final EncadrantService encadrantService;

    @GetMapping
    public List<Encadrant> getAll() {
        return encadrantService.getAll();
    }

    @GetMapping("/{id}")
    public Encadrant getById(@PathVariable Long id) {
        return encadrantService.getById(id);
    }

    @PostMapping
    public Encadrant create(@RequestBody Encadrant encadrant) {
        return encadrantService.create(encadrant);
    }

    @PutMapping("/{id}")
    public Encadrant update(@PathVariable Long id, @RequestBody Encadrant data) {
        return encadrantService.update(id, data);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        encadrantService.delete(id);
    }
}
