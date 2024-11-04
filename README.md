# Envoyer une image sur l'écran du CI

Ce repo contient le code nécessaire pour l'app qui permet d'envoyer une image sur l'écran du CI

Il contient 3 dossiers : 
- `client_ecran_CI` : le front-end, une page web en React qui sert d'interface graphique, afin de sélectionner une image en local sur son appareil et de l'envoyer depuis son browser
- `api` : le back-end en Flask qui reçoit l'image et la copie au bon endroit.
- `le_dossier_3` : dossier qui était sur mon PC avant que je perde toutes mes données. C'est simplement ce qui gère l'affichage sur l'écran depuis le raspi (soit via un navigateur qui update l'image, soit via un script qui refresh l'image affichée).

Les instructions pour lancer chaque app (React et API) se trouve dans les `README.md` respectifs de chaque dossiers. 