<p align="center">
  <img src="leiLogo.png"/>
</p>

# Leila.js

*A mini lib to build games for the Web*

Une petite bibliothèque javascript pour créer des jeux navigateurs.

# Note

Il semble important de rappeler que Leila.js est un projet à but éducatif.
C'est une bibliothèque réalisée avant tout par des débutants et des passionnés
de programmation. Elle n'est donc pas déstinée à un usage "professionnel".

Cependant, elle est réalisée avec le soucis d'être fonctionnelle, légère et propre.
Si vous repérez d'éventuelles optimisations possibles, n'hésitez pas à le faire savoir et à contribuer au projet !

L'objectif de leila.js reste avant tout de rassembler une communauté de développeurs de
tout âge et de tout niveau autour d'un même projet collaboratif.

# Stade du développement

Leila.js est actuellement EN CONSTRUCTION.

Pour prendre part aux décisions, vous pouvez rejoindre le server discord suivant :

[discord](https://discord.gg/kv9zA3Z)

# L'idée

Leila.js se veut être une librairie légère et très simple d'utilisation.

Au terme de son développement elle devra fournir les fonctionnalités suivantes :
+ rendu 2D
+ rendu 3D
+ physique (2D)
+ gestion de scènes de jeu ou d'état

# Le langage et les outils

Leila.js est, comme indiqué par son nom, développée en javascript.
Pour accelérer le développement et permettre une orgnaisation en modules, Leila.js est conçu sous Node.js.
On utilise également browserify pour packager la librairie en un seul fichier utilisable dans n'importe quelle page web.

# Packager la bibliothèque

Pour packager la bibliothèque après lui avoir apporté d'éventuelles modifications, simplement utiliser la commande : `$ npm run build`.

Cela produira un fichier `bundle.js` dans le dossier `build`.

Vous pouvez ensuite importer ce `bundle.js` dans n'importe qu'elle balise `<script>`.
