package com.tech57.platform.service;



import com.tech57.platform.entity.DemandeStage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${app.mail.admin}")
    private String emailAdmin;

    public void envoyerAccuseReception(DemandeStage demande) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(demande.getEmail());
            message.setSubject("Tech57 - Confirmation de votre demande de stage");
            message.setText(
                    "Bonjour " + demande.getPrenom() + " " + demande.getNom() + ",\n\n" +
                            "Nous avons bien recu votre demande de stage dans le domaine : " + demande.getDomaine() + ".\n" +
                            "Notre equipe va l'etudier et reviendra vers vous rapidement.\n\n" +
                            "Cordialement,\nL'equipe Tech57"
            );
            mailSender.send(message);
        } catch (Exception e) {
            // On n'interrompt jamais la creation de la demande si l'email echoue
            System.err.println("Erreur envoi email candidat : " + e.getMessage());
        }
    }

    public void notifierAdmin(DemandeStage demande) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(emailAdmin);
            message.setSubject("Nouvelle demande de stage recue");
            message.setText(
                    "Nouvelle demande de : " + demande.getPrenom() + " " + demande.getNom() + "\n" +
                            "Domaine : " + demande.getDomaine() + "\n" +
                            "Email : " + demande.getEmail() + "\n" +
                            "Consultez le backoffice pour traiter cette demande."
            );
            mailSender.send(message);
        } catch (Exception e) {
            System.err.println("Erreur envoi email admin : " + e.getMessage());
        }
    }

    public void notifierChangementStatut(DemandeStage demande) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(demande.getEmail());
            message.setSubject("Tech57 - Mise a jour de votre demande de stage");
            message.setText(
                    "Bonjour " + demande.getPrenom() + ",\n\n" +
                            "Le statut de votre demande de stage a change : " + demande.getStatut() + "\n\n" +
                            "Cordialement,\nL'equipe Tech57"
            );
            mailSender.send(message);
        } catch (Exception e) {
            System.err.println("Erreur envoi email changement statut : " + e.getMessage());
        }
    }
}
