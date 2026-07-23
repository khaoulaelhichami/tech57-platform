package com.tech57.platform.service;

import com.tech57.platform.dto.LoginRequest;
import com.tech57.platform.dto.LoginResponse;
import com.tech57.platform.entity.Administrateur;
import com.tech57.platform.repository.AdministrateurRepository;
import com.tech57.platform.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final AdministrateurRepository administrateurRepository;
    private final JwtUtil jwtUtil;

    public LoginResponse login(LoginRequest request) {
        System.out.println("Email reçu : " + request.getEmail());
        System.out.println("Mot de passe reçu : " + request.getMotDePasse());
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getMotDePasse()
                    )
            );
            System.out.println("Authentification réussie");
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
        Administrateur admin = administrateurRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Administrateur introuvable"));

        String token = jwtUtil.generateToken(admin.getEmail());

        return new LoginResponse(token, admin.getEmail(), admin.getNom(), admin.getPrenom());
    }
}
