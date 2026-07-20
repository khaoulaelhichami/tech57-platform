# Frontend - Plateforme Tech57 (React)

## Prerequis
- Node.js 18+
- npm

## Installation
```bash
npm install
```

## Lancer le projet
```bash
npm run dev
```
Application disponible sur : http://localhost:5173

Le backend doit tourner sur http://localhost:8080.

## Structure

```
src/
├── api/axios.js              → configuration Axios + intercepteur JWT
├── context/AuthContext.jsx   → gestion de la session admin
├── components/
│   ├── PublicNavbar.jsx
│   ├── ProtectedRoute.jsx
│   └── admin/
│       ├── AdminLayout.jsx       → sidebar + layout du backoffice
│       └── ContenuManager.jsx    → composant CRUD générique (services, projets, clients...)
├── pages/
│   ├── public/                → Accueil, Services, Projets, Équipe, Contact, Demande de stage
│   └── admin/
│       ├── Login.jsx
│       ├── dashboard/            → indicateurs + graphiques
│       ├── demandes/             → gestion des demandes de stage
│       ├── stagiaires/           → suivi des stagiaires
│       ├── contenu/              → gestion du contenu de la vitrine
│       ├── comptes/              → gestion des comptes administrateurs
│       └── parametres/           → configuration des pièces requises
```

## Routes principales

- `/` `/services` `/projets` `/equipe` `/contact` `/demande-stage` → site public
- `/admin/login` → connexion administrateur
- `/admin/dashboard` `/admin/demandes` `/admin/stagiaires` `/admin/contenu/*` `/admin/comptes` `/admin/parametres/*` → backoffice (protégé par JWT)
