package com.tech57.platform.service;



import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileStorageService {

    @Value("${app.upload.dir}")
    private String uploadDir;

    // Enregistre un fichier sur le disque et retourne son chemin
    public String store(MultipartFile file) {
        try {
            Path dossier = Paths.get(uploadDir).toAbsolutePath().normalize();
            Files.createDirectories(dossier);

            String extension = "";
            String nomOriginal = file.getOriginalFilename();
            if (nomOriginal != null && nomOriginal.contains(".")) {
                extension = nomOriginal.substring(nomOriginal.lastIndexOf("."));
            }
            String nomUnique = UUID.randomUUID() + extension;

            Path destination = dossier.resolve(nomUnique);
            Files.copy(file.getInputStream(), destination);

            return destination.toString();
        } catch (IOException e) {
            throw new RuntimeException("Erreur lors de l'enregistrement du fichier : " + e.getMessage());
        }
    }

    // Charge un fichier pour le telecharger plus tard
    public Resource charger(String cheminFichier) {
        try {
            Path path = Paths.get(cheminFichier);
            Resource resource = new UrlResource(path.toUri());
            if (resource.exists()) return resource;
            throw new RuntimeException("Fichier introuvable : " + cheminFichier);
        } catch (MalformedURLException e) {
            throw new RuntimeException("Chemin de fichier invalide : " + cheminFichier);
        }
    }
}
