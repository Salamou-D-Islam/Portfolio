# Salamou JS - Projet Portfolio

Cette application est mon projet personnel. Elle a pour objectif de permettre aux visiteurs de mieux me connaître à travers une page de profil, de découvrir mes réalisations via la page des projets, et de me contacter facilement.
Il s’agit à la fois de mon projet personnel et de mon tout premier projet React abouti. L’application intègre également un backend permettant la gestion dynamique des pages Profil et Projets, ainsi qu’une fonctionnalité d’envoi de mails via le formulaire de contact.
Ce projet marque une étape importante dans mon apprentissage de React et du développement full stack.

lien de l'application hébérgé:
[Salamou JS]([https://support.google.com/mail/answer/185833?hl=fr](https://islam-derrouiche-salamou.netlify.app/))
---
## Fonctionnalités

### Frontend

Le frontend a été développé avec React en utilisant Vite.js pour le bundling et les performances.
J’ai mis en place une architecture basée sur :
   •	L’utilisation des states et des hooks React
   •	Des composants réutilisables (formulaires, boutons, composants UI)
   •	Une première implémentation des opérations CRUD côté frontend, avant l’adaptation du backend
Pour le design et le style, j’ai utilisé :
   •	CSS
   •	Principalement Tailwind CSS, ce qui m’a permis d’accélérer le développement du design et de gérer efficacement le responsive design de l’application.
   
### Backend:

Le backend a été développé avec FastAPI (Python), choisi pour sa légèreté et ses performances dans la création d’API REST.
Ce projet m’a permis de découvrir et d’utiliser FastAPI dans un cas concret, en parallèle de mon apprentissage de React.
   •	Base de données : PostgreSQL
   •	ORM : SQLAlchemy, utilisé pour simplifier la manipulation et la gestion des données
   •	Implémentation des opérations CRUD pour la gestion du profil et des projets

Le backend intègre des fonctionnalités avancées de sécurité et d’authentification :
•	Authentification à deux facteurs (2FA)
Mise en place d’une authentification sécurisée basée sur :
  o	Des sessions
  o	Des cookies
  o	L’envoi d’un code de vérification par mail avec expiration

•	Gestion de l’envoi de mails
L’envoi de mails (SMTP) est utilisé dans deux cas :
  o	Réception d’un code d’authentification pour la connexion à l’espace administrateur
  o	Réception de messages envoyés via le formulaire de contact
•	Sécurisation des données sensibles
  o	Hashage des codes d’authentification avant stockage en base de données
  o	Aucune donnée sensible n’est stockée en clair

Le frontend et le backend sont entièrement séparés, chacun dans un projet distinct, et communiquent via des requêtes API (fetch).

### Déploiement:

Le déploiement a été réalisé en plusieurs étapes :
   •	Déploiement du backend FastAPI sur Fly.io
   •	Hébergement de la base de données PostgreSQL sur NeonTech
   •	Mise à jour des URLs des requêtes API côté frontend pour pointer vers le backend déployé
   •	Build du frontend React afin de faciliter son déploiement
   •	Déploiement du frontend sur Netlify
  
## Technologies utilisées
- React
- JavaScript
- HTML5 / CSS3 / Tailwind CSS
- Python (FastAPI) avec Jinja2
- Base de données: PostgresSQL
- Outils de déploiement: Fly.io

## 1️⃣ Installation locale
- ## Prérequis

- Node.js >= 18
- Python >= 3.10
- npm

- Compte Fly.io pour déploiement (optionnel)

### Cloner le projet
```bash
git clone https://github.com/Salamou-D-Islam/Portfolio
cd Portfolio

### Lancer le frontend en local

cd front
npm install

### Lancer le frontend en local
cd front
npm install
npm run dev
Frontend : http://localhost:5173

⚠️ N’oubliez pas de modifier les endpoints fetch pour pointer vers votre backend (local ou déployé).

### Déploiement frontend
npm run build
Publier le dossier dist/ sur la plateforme de votre choix (Netlify, Vercel, Render, serveur perso…)
⚠️ Adapter les endpoints fetch pour le backend déployé

### Lancer le backend en local
cd back
python -m venv venv

# Activer l'environnement
# Windows
.venv\Scripts\activate
# Linux / Mac
source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --reload
Backend : http://localhost:8000



### 3️⃣ Déploiement sur Fly.io

#Installer Fly CLI dans le poweshell (lancez le en mode administrateur si ça ne marche pas)
curl -L https://fly.io/install.sh | sh

# Se connecter à Fly.io
fly auth login

#Lancer l’application et créer l’app Fly
fly launch

#Déployer une mise à jour
fly deploy

# Configurer les variables d’environnement:

fly secrets set SECRET_KEY=<votre_secret>
fly secrets set SQLALCHEMY_DATABASE_URL=<url_de_votre_bdd>
fly secrets set email_admin=<votre_email_admin>
fly secrets set name_admin=<votre_name_admin>
fly secrets set MAIL_USERNAME=<vote_MAIL_USERNAME>
fly secrets set MAIL_RECEIVER=<votre_MAIL_RECEIVER>
fly secrets set MAIL_PASSWORD=<votre_MAIL_PASSWORD>
⚠️ Utilisez le mot de passe d’application, **pas votre mot de passe personnel**. Plus d'info: https://support.google.com/mail/answer/185833?hl=fr
fly secrets set MAIL_FROM=<votre_MAIL_FROM>



