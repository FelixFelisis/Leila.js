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

Bien que réalisée avec le soucis d'être fonctionnelle, légère et propre, cette bibliothèque
n'a aucunement la prétention d'être parfaite. Si vous repérez d'éventuelles optimisations
possibles, n'hésitez pas à le faire savoir et à contribuer au projet !

L'objectif de leila.js reste avant tout de rassembler une communauté de développeurs de
tout âge et de tout niveau autour d'un même projet collaboratif. 
Donc quelque soit votre niveau en programmation, n'hésitez pas à rejoindre et à soutenir le projet.

# Stade du développement

Leila.js est actuellement EN CONSTRUCTION.

Pour prendre part aux décisions, vous pouvez rejoindre le server discord suivant :

[discord](https://discord.gg/kv9zA3Z)

Vous pouvez également lire le Wiki qui propose une journal de bord du développement
et qui contiendra prochainement la documentation.

# L'idée

Leila.js se veut être une librairie légère est très simple d'utilisation.

Au terme de son développement elle devra fournir les fonctionnalités suivantes : 
+ rendu 2D
+ rendu 3D
+ physique (2D)
+ gestion de scènes

# Le langage et les outils

Leila.js est, comme indiqué par son nom, développée en javascript. 
Pour accelérer le développement et permettre une orgnaisation en modules, Leila.js est conçu sous Node.js.
On utilise également browserify pour packager la librairie en un seul fichier utilisable dans n'importe
quelle page web.

# Build la bibliothèque

Pour packager la bibliothèque après lui avoir apporté d'éventuelles modifications, simplement utiliser
la commande : `$ npm run build`. 

Cela produira un fichier `bundle.js` dans le dossier `build`.

Vous pouvez ensuite importer ce `bundle.js` dans n'importe qu'elle balise `<script>`.

