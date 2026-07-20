# Backend - Plateforme Tech57 (Spring Boot)

Vitrine institutionnelle + Demande de stage en ligne + Backoffice Administrateur.

## Prerequis
- JDK 17+
- Maven
- MySQL Server

## Configuration
```sql
CREATE DATABASE tech57_platform;
```
Modifier `src/main/resources/application.properties` avec vos identifiants MySQL.

## Lancer le projet
```bash
mvn spring-boot:run
```
API disponible sur : http://localhost:8080

## Endpoints principaux

### Public (sans authentification)
- GET  /api/public/services | /projets | /clients | /partenaires | /membres
- GET  /api/demandes/pieces-requises
- POST /api/demandes/postuler
- POST /api/auth/login

### Backoffice Administrateur (JWT requis)
- GET  /api/admin/dashboard/stats
- GET/PUT /api/admin/demandes, /api/admin/demandes/{id}/statut
- GET/PUT /api/admin/stagiaires/{id}
- GET/POST/PUT/DELETE /api/admin/contenu/services|projets|clients|partenaires|membres|pieces-requises
- GET/POST/PUT/DELETE /api/admin/comptes
