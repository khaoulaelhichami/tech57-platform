package com.tech57.platform.security;

import com.tech57.platform.entity.Administrateur;
import com.tech57.platform.repository.AdministrateurRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final AdministrateurRepository administrateurRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Administrateur admin = administrateurRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Administrateur introuvable : " + email));

        return new User(
                admin.getEmail(),
                admin.getMotDePasse(),
                List.of(new SimpleGrantedAuthority("ROLE_ADMIN"))
        );
    }
}
