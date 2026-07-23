USE tech57_platform;

-- Compte administrateur de test
INSERT INTO administrateurs (nom, prenom, email, mot_de_passe, actif, super_admin, date_creation)
SELECT 'Admin', 'Tech57', 'admin@tech57.com', '$2b$10$vb88z/QnYbGij7nezOkojeSlZREL/OV6edj6PDJoPS6Tn94XBQsxS', true, true, NOW()
WHERE NOT EXISTS (SELECT 1 FROM administrateurs WHERE email = 'admin@tech57.com');

-- Pièces requises
INSERT INTO pieces_requises (nom, obligatoire, active)
SELECT 'CV', true, true
WHERE NOT EXISTS (SELECT 1 FROM pieces_requises WHERE nom = 'CV');

INSERT INTO pieces_requises (nom, obligatoire, active)
SELECT 'Lettre de motivation', true, true
WHERE NOT EXISTS (SELECT 1 FROM pieces_requises WHERE nom = 'Lettre de motivation');

INSERT INTO pieces_requises (nom, obligatoire, active)
SELECT 'Copie CIN', true, true
WHERE NOT EXISTS (SELECT 1 FROM pieces_requises WHERE nom = 'Copie CIN');

INSERT INTO pieces_requises (nom, obligatoire, active)
SELECT 'Attestation de scolarité', false, true
WHERE NOT EXISTS (SELECT 1 FROM pieces_requises WHERE nom = 'Attestation de scolarité');

INSERT INTO pieces_requises (nom, obligatoire, active)
SELECT 'Convention de stage', false, true
WHERE NOT EXISTS (SELECT 1 FROM pieces_requises WHERE nom = 'Convention de stage');

-- Clients
INSERT INTO clients (nom, logo, actif)
SELECT 'Société X', 'logo-societe-x.png', true
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE nom = 'Société X');

INSERT INTO clients (nom, logo, actif)
SELECT 'Innovate Lab', 'logo-innovate-lab.png', true
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE nom = 'Innovate Lab');

INSERT INTO clients (nom, logo, actif)
SELECT 'GreenTech', 'logo-greentech.png', true
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE nom = 'GreenTech');

-- Membres de l’équipe
INSERT INTO membres (nom, prenom, poste, bio, ordre, actif)
SELECT 'Ait', 'Sara', 'CEO', 'Dirigeante de la structure et responsable stratégique.', 1, true
WHERE NOT EXISTS (SELECT 1 FROM membres WHERE prenom = 'Sara' AND nom = 'Ait');

INSERT INTO membres (nom, prenom, poste, bio, ordre, actif)
SELECT 'Benali', 'Youssef', 'CTO', 'Responsable technique et innovation produit.', 2, true
WHERE NOT EXISTS (SELECT 1 FROM membres WHERE prenom = 'Youssef' AND nom = 'Benali');

INSERT INTO membres (nom, prenom, poste, bio, ordre, actif)
SELECT 'Durand', 'Marie', 'Designer', 'Experte UX/UI et parcours utilisateur.', 3, true
WHERE NOT EXISTS (SELECT 1 FROM membres WHERE prenom = 'Marie' AND nom = 'Durand');

-- Partenaires
INSERT INTO partenaires (nom, logo, actif)
SELECT 'Orange', 'logo-orange.png', true
WHERE NOT EXISTS (SELECT 1 FROM partenaires WHERE nom = 'Orange');

INSERT INTO partenaires (nom, logo, actif)
SELECT 'Microsoft', 'logo-microsoft.png', true
WHERE NOT EXISTS (SELECT 1 FROM partenaires WHERE nom = 'Microsoft');

INSERT INTO partenaires (nom, logo, actif)
SELECT 'Capgemini', 'logo-capgemini.png', true
WHERE NOT EXISTS (SELECT 1 FROM partenaires WHERE nom = 'Capgemini');

-- Services
INSERT INTO services (titre, description, icone, ordre, actif)
SELECT 'Conseil digital', 'Accompagnement stratégique sur la transformation numérique.', 'bi-graph-up', 1, true
WHERE NOT EXISTS (SELECT 1 FROM services WHERE titre = 'Conseil digital');

INSERT INTO services (titre, description, icone, ordre, actif)
SELECT 'Développement web', 'Applications web modernes, sécurisées et évolutives.', 'bi-code-square', 2, true
WHERE NOT EXISTS (SELECT 1 FROM services WHERE titre = 'Développement web');

INSERT INTO services (titre, description, icone, ordre, actif)
SELECT 'Formation', 'Programmes de formation sur mesure et accompagnement métier.', 'bi-mortarboard', 3, true
WHERE NOT EXISTS (SELECT 1 FROM services WHERE titre = 'Formation');

-- Projets
INSERT INTO projets (titre, description, client_id, date_publication, actif)
SELECT 'Projet SmartFactory', 'Modernisation d’un système de production avec automatisation et suivi temps réel.', c.id, '2024-01-15', true
FROM clients c
WHERE c.nom = 'Société X'
  AND NOT EXISTS (SELECT 1 FROM projets WHERE titre = 'Projet SmartFactory');

INSERT INTO projets (titre, description, client_id, date_publication, actif)
SELECT 'Plateforme RH', 'Déploiement d’une application RH collaborative pour la gestion des talents.', c.id, '2024-06-01', true
FROM clients c
WHERE c.nom = 'Innovate Lab'
  AND NOT EXISTS (SELECT 1 FROM projets WHERE titre = 'Plateforme RH');

INSERT INTO projets (titre, description, client_id, date_publication, actif)
SELECT 'Campus Connect', 'Solution de gestion des étudiants et des parcours académiques.', c.id, '2025-02-20', true
FROM clients c
WHERE c.nom = 'GreenTech'
  AND NOT EXISTS (SELECT 1 FROM projets WHERE titre = 'Campus Connect');

-- Demandes de stage de test
INSERT INTO demandes_stage (nom, prenom, email, telephone, etablissement, domaine, periode_debut, periode_fin, statut, date_depot, note_admin)
SELECT 'Rami', 'Lina', 'lina@example.com', '0600000000', 'Université Hassan II', 'IT', '2026-08-01', '2026-10-31', 'RECUE', NOW(), 'Candidature de test pour la démo'
WHERE NOT EXISTS (SELECT 1 FROM demandes_stage WHERE email = 'lina@example.com');

INSERT INTO demandes_stage (nom, prenom, email, telephone, etablissement, domaine, periode_debut, periode_fin, statut, date_depot, note_admin)
SELECT 'El Idrissi', 'Amine', 'amine@example.com', '0711111111', 'ENSA', 'Design', '2026-09-01', '2026-12-15', 'EN_COURS_ETUDE', NOW(), 'Candidature à suivre.'
WHERE NOT EXISTS (SELECT 1 FROM demandes_stage WHERE email = 'amine@example.com');
