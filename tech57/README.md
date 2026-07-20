# Plateforme Tech57 — Vitrine + Demande de Stage + Backoffice Administrateur

Application web (Java Spring Boot + React + MySQL) réalisée selon le cahier des charges Tech57 :
- Interface publique (vitrine institutionnelle)
- Module de demande de stage en ligne (sans compte)
- Backoffice administrateur complet (dashboard, gestion des demandes, des stagiaires,
  du contenu du site, des comptes admin et des paramètres)

## Structure du projet

```
tech57-backend/     → API REST (Java 17, Spring Boot, Spring Security + JWT, MySQL)
tech57-frontend/    → Interface web (React, React Router, Axios, Bootstrap, Recharts)
```

Voir le README.md de chaque dossier pour les instructions détaillées.

## Démarrage rapide

1. **MySQL** : créer la base (ou laisser `createDatabaseIfNotExist=true` le faire) :
   ```sql
   CREATE DATABASE tech57_platform;
   ```
2. **Backend** : configurer `tech57-backend/src/main/resources/application.properties`,
   puis `mvn spring-boot:run`
3. **Frontend** : `cd tech57-frontend && npm install && npm run dev`
4. Backend sur http://localhost:8080 — Frontend sur http://localhost:5173

## Créer un compte administrateur de test

Ce squelette ne contient pas de compte admin par défaut. Utilisez le script SQL fourni
séparément (`insert_admin_test.sql`) après le premier démarrage du backend
(les tables sont créées automatiquement par Hibernate).

## Focus Backoffice Administrateur

Le backoffice (`/admin/*`) couvre :
- **Dashboard** : indicateurs clés + graphiques (répartition par statut / domaine)
- **Demandes de stage** : liste filtrable, fiche détaillée, changement de statut,
  notes internes, passage automatique en "Stagiaire" après acceptation
- **Stagiaires** : suivi (encadrant, dates, évaluation, statut actif/terminé)
- **Contenu du site** : CRUD complet pour Services, Projets, Clients, Partenaires, Membres
- **Comptes administrateurs** : création, désactivation
- **Paramètres** : configuration de la liste des pièces requises pour la demande de stage
