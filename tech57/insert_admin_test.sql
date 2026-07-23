-- ============================================================
-- Script de test : creation d'un compte administrateur
-- A executer APRES le premier demarrage du backend
-- (les tables sont creees automatiquement par Hibernate)
-- ============================================================

--USE tech57_platform;

INSERT INTO administrateurs (nom, prenom, email, mot_de_passe, actif, super_admin, date_creation)
VALUES
('Admin', 'Tech57', 'admin@tech57.com', '$2b$10$vb88z/QnYbGij7nezOkojeSlZREL/OV6edj6PDJoPS6Tn94XBQsxS', true, true, NOW());

-- Identifiants de connexion :
--   email : admin@tech57.com
--   mot de passe : admin123

-- Verification
SELECT id, nom, prenom, email, actif, super_admin FROM administrateurs;

-- (Optionnel) Quelques pieces requises par defaut pour le formulaire de demande de stage
INSERT INTO pieces_requises (nom, obligatoire, active) VALUES
('CV', true, true),
('Lettre de motivation', true, true),
('Copie CIN', true, true),
('Attestation de scolarité', false, true),
('Convention de stage', false, true);
