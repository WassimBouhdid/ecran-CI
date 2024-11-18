# Envoyer une image sur l'écran du CI

Ce repo contient le code nécessaire pour l'app qui permet d'envoyer une image sur l'écran du CI

Il contient 3 dossiers : 
- `client_ecran_CI` : le front-end, une page web en React qui sert d'interface graphique, afin de sélectionner une image en local sur son appareil et de l'envoyer depuis son browser
- `api` : Une API en python (`Flask`) qui reçoit des images des utilisateurs et les copie au bon endroit.
- `scripts` : Des scripts utilisés par l'application, et qui seront copiés à l'endroit approprié en utilisant le script `install.sh`

Important : dans tous les scripts, les chemins absolus sont `/home/ci/Documents/screen/`. C'est à cet endroit que dois être téléchargé le repo. Attention à ne pas changer cela, ou alors il faudrait changer le chemin dans TOUS les scripts.


## Installation
Note : Actuellement, le raspi est configuré pour lancer tous les programmes nécessaires. En cas d'erreur ou de ré-installation, suivre les instructions ci-dessous. 

Note2 : Les instructions pour lancer chaque app (React et API) se trouvent dans les `README.md` respectifs de chaque dossier. C'est utile si vous voulez tester en local sur votre machine, ou en cas d'erreur. 


### Pré-requis
Ce Readme considère que vous avez les connaissances suffisantes pour :

- Utiliser GNU/Linux 
- Utiliser un terminal pour lancer des instructions en ligne de commande.
- Se connecter en SSH
- Avoir des connaissances basique d'informatique 

En cas de difficultés, de nombreuses ressources en ligne permettent de s'y retrouver. Ne pas hésiter à demander à un contributeur de ce repo ou à un membre de l'Urlab qui seront revis de vous aider. 

### Cloner ce repository
Une fois connecté en SSH (ou même en mode graphique directement sur un écran à l'aide d'une souris et d'un clavier en fait), suivez les étapes suivantes : 

1. Vérifier que `git` est installé : `$git --version`
2. Si une erreur s'affiche, installer git avec : `$sudo apt install git`
3. S'assurer d'être dans le bon directory : `$ cd ~/Documents`
3. Cloner ce repository : `$git clone https://github.com/Cerkinfo/ecran-CI.git`
4. Renommer le dossier : `$mv ecran-CI screen` (en cas d'erreur, c'est que soit le dossier existe déjà, soit que le repo porte un autre nom. Adapter en fonction)
5. Se déplacer dans le dossier : `$ cd screen`

### Installation 
Le script `install.sh` contient les toutes les commandes nécessaires à l'installation. /!\ Ce script n'a jamais été testé, il doit probablement ne pas marcher à 100% du premier coup. Good luck with that.

1. Rendre le script exécutable : `sudo chmod u+x install.sh`
2. Vérifier que le fichier est bien exécutable : `$ ls -l script.sh`
La ligne devrait commencer par quelque chose comme :`.rwxr--r--`
3. - Dans un monde idéal (SPOILER : il pas fini encore):
    - - Run le script avec : `$ ./install.sh` 
    - Dans la réalité ou ça ne marchera sans doute pas du premier coup, regarder les différentes instructions et essayer de suivre un peu ce qu'il se passe
#TODO : finir ce script avec les instructions commentées, tenter de faire une fresh install, checker que tout fonctionne, et documenter ce qu'il se passe dans ce script

## Lancer l'app
Normalement, si tout s'est bien passé à l'installation, tout devrait se lancer au boot du raspi. Si pas, bonne chance.

