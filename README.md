<p align="center">
  <img src="leiLogo.png"/>
</p>

# Leila.js

*A mini lib to build games for the Web*

Une petite bibliothèque javascript pour créer des jeux navigateurs.


# Stade du développement

En cours : 
  + CanvasManager
  + Core

Finis : 
  + réglages npm
  + réglages browserify

# Pourquoi ?

L'objectif de leila.js est de rassembler une communauté de développeurs de
tout âge et de tout niveau autour d'un même projet collaboratif. 

Quelque soit votre niveau en programmation, n'hésitez pas à rejoindre et à soutenir le projet.

# L'idée

Leila.js se veut être une librairie légère est très simple d'utilisation.

Au terme de son développement elle devra fournir les fonctionnalités suivantes : 
+ Un moteur de rendu 2D
+ Un moteur de rendu 3D
+ Un moteur physique (2D)
+ La gestion de scènes

# Adresse aux nouveaux venus

Vous voulez participer ? Vous êtes un peu perdu ? Pas de soucis, ce paragraphe est fait pour vous ^^.

## Le langage et les outils

Leila.js est, comme indiqué par son nom, développée en javascript. 
Pour accelérer le développement et permettre une orgnaisation en modules, Leila.js est conçu sous Node.js.
On utilise également browserify pour packager la librairie en un seul fichier utilisable dans n'importe
qu'elle page web.

## Build la bibliothèque

Pour packager la bibliothèque après lui avoir apporté d'éventuelles modifications, simplement utiliser
la commande : `$ npm run build`. 

Cela produira un fichier `bundle.js` dans le dossier `build`.

Vous pouvez ensuite importer ce `bundle.js` dans n'importe qu'elle balise `<script>`.

