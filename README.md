# Event - BJCP

Ce projet est un site statique de présentation de trois événements majeurs organisés par BJCP.

## Structure du projet

```
coding-website
├── src
│   ├── index.html         # Page principale présentant les événements
│   ├── styles
│   │   └── main.css       # Feuille de style principale
│   ├── scripts
│   │   └── app.js         # Script pour les interactions (ex: affichage des images en grand)
├── Images                 # Dossier contenant les images des événements
│   ├── journee sportive.png
│   ├── soiree cine.png
│   └── kermesse.png
├── package.json           # Fichier de configuration npm (pour Render ou Express)
├── server.js              # Serveur Express pour hébergement web service (optionnel)
└── README.md              # Documentation du projet
```

## Instructions d'installation

1. Clone le dépôt :
   ```
   git clone https://github.com/yourusername/event-BJCP.git
   ```

2. Va dans le dossier du projet :
   ```
   cd event-BJCP/coding-website
   ```

3. Installe les dépendances (si tu utilises l’option Web Service) :
   ```
   npm install
   ```

4. Lance le serveur localement (optionnel, pour Web Service) :
   ```
   npm start
   ```

5. Ouvre `src/index.html` dans ton navigateur pour voir le site en local.

## Déploiement sur Render

- Pour un **Static Site** : indique `src` comme dossier racine, laisse les commandes de build et start vides.
- Pour un **Web Service** :  
  - Build command : `npm install`  
  - Start command : `npm start`  
  - Root directory : `coding-website`

## Fonctionnalités

- Présentation visuelle et détaillée de trois événements (Journée Sportive, Soirée Ciné, Grande Kermesse)
- Affichage des images en grand lors d’un clic
- Design responsive et moderne

## Licence

Ce projet est sous licence