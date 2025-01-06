# MenuFinder

## Description
MenuFinder est une plateforme web qui permet aux restaurateurs de publier et gérer leurs menus en ligne, et aux utilisateurs de rechercher des restaurants selon divers critères (localisation, prix, type de cuisine, plats spécifiques). L'application inclut également un espace administrateur pour gérer les restaurateurs, les utilisateurs, et modérer les avis/commentaires.

## Fonctionnalités

### Espace Utilisateur
- **Inscription et Connexion :**
  - Inscription par email/mot de passe ou via OAuth (Google, Facebook).
  - Authentification sécurisée avec JWT.
- **Recherche de Restaurants :**
  - Recherche par localisation (intégration d'une API de géolocalisation, ex. : Google Maps).
  - Filtres : type de cuisine, budget, disponibilité de plats spécifiques.
- **Consultation de Menus :**
  - Aperçu des restaurants (nom, localisation, type de cuisine, budget moyen).
  - Affichage des menus avec descriptions, prix, et images des plats.
- **Favoris et Avis :**
  - Possibilité de marquer des restaurants comme favoris.
  - Laisser des avis/commentaires (avec modération).

### Espace Restaurateur
- **Gestion du Compte :**
  - Inscription/connexion sécurisée.
  - Modification des informations du profil du restaurant (nom, localisation, type de cuisine, horaires).
- **Gestion des Menus :**
  - Création et mise à jour des cartes (entrées, plats principaux, desserts, boissons).
  - Upload d'images pour illustrer les plats ou le restaurant.
- **Consultation des Avis :**
  - Lecture et réponse aux avis/commentaires.
  - Signalement d'avis inappropriés.

### Espace Administrateur
- **Gestion des Utilisateurs et Restaurateurs :**
  - Suspension ou suppression d'utilisateurs/restaurateurs.
- **Modération des Avis :**
  - Gestion des signalements d'avis/commentaires problématiques.
- **Statistiques :**
  - Nombre de restaurants inscrits, menus publiés, utilisateurs actifs, et taux moyen d'avis positifs.

## Technologies Utilisées

### Backend
- **Langage :** Node.js avec Express.js ou Java avec Spring Boot.
- **Base de Données :** PostgreSQL (relationnelle) ou MongoDB (NoSQL).
- **ORM/ODM :** TypeORM (Node.js) ou Hibernate (Spring Boot).
- **Sécurité :** JWT, bcrypt.js pour le hachage des mots de passe.
- **Documentation API :** Swagger.

### Frontend
- **Framework :** React.js avec Redux Toolkit pour la gestion d'état.
- **UI :** Material-UI (MUI) ou Tailwind CSS.
- **Maquettage :** Figma pour concevoir les interfaces.

### Hébergement
- **Frontend :** Vercel ou Netlify.
- **Backend :** Render ou Heroku.
- **Base de Données :** ElephantSQL (PostgreSQL) ou MongoDB Atlas.

## Installation et Configuration

### Prérequis
- Node.js v16+ ou Java (JDK 17).
- Git.
- PostgreSQL ou MongoDB installé localement ou en cloud.

### Étapes
1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/username/MenuFinder.git
   ```
2. **Backend :**
   - Naviguer dans le dossier `backend`.
   - Installer les dépendances :
     ```bash
     npm install
     ```
   - Configurer les variables d'environnement dans `.env` (exemple fourni dans `.env.example`).
   - Lancer le serveur :
     ```bash
     npm start
     ```
3. **Frontend :**
   - Naviguer dans le dossier `frontend`.
   - Installer les dépendances :
     ```bash
     npm install
     ```
   - Lancer le serveur :
     ```bash
     npm start
     ```
4. **Base de Données :**
   - Configurer la base de données selon le fichier `.env`.
   - Exécuter les migrations si nécessaire.

## Documentation API
Les endpoints majeurs sont documentés dans Swagger. Une fois le backend démarré, accédez à la documentation à l'URL : `http://localhost:PORT/api-docs`.

## Tests
- **Backend Tests :**
  - Exécuter :
    ```bash
    npm test
    ```
- **Frontend Tests :**
  - Exécuter :
    ```bash
    npm test
    ```

## Structure du Projet
```
MenuFinder/
├── backend/
│   ├── src/
│   ├── .env
│   ├── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
└── README.md
```

## Auteurs
- Rémi Leroi
