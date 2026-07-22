package com.tech57.platform.config;

import com.tech57.platform.entity.Role;
import com.tech57.platform.entity.StatutValidation;
import com.tech57.platform.entity.User;
import com.tech57.platform.repository.RoleRepository;
import com.tech57.platform.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Set;

// Cree les roles de base + un compte admin de demo au premier demarrage
@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        Role admin = roleRepository.findByNom("ADMIN")
                .orElseGet(() -> roleRepository.save(new Role("ADMIN")));
        roleRepository.findByNom("ENCADRANT")
                .orElseGet(() -> roleRepository.save(new Role("ENCADRANT")));

        if (!userRepository.existsByEmail("admin@tech57.com")) {
            User user = new User();
            user.setNom("Tech57");
            user.setPrenom("Admin");
            user.setEmail("admin@tech57.com");
            user.setMotDePasse(passwordEncoder.encode("Admin@123"));
            user.setActif(true);
            user.setStatutValidation(StatutValidation.APPROUVE);
            user.setRoles(Set.of(admin));
            userRepository.save(user);
            System.out.println(">>> Compte admin de demo cree : admin@tech57.com / Admin@123");
        }
    }
}