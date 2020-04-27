# Installation du serveur sous NGINX Ubuntu 20.04


## Installation
```
sudo nano /etc/apt/sources.list

Copier les lignes suivantes et les coller dans le fichier (Ctrl,Shift,V)

# Pour installer  php7.0
deb http://packages.dotdeb.org jessie all
# Pour installer Nginx
deb http://nginx.org/packages/mainline/debian/ jessie nginx
```

Ne pas oubliez de mettre a jour ``` sudo apt-get update```

Puis commencez a install "NGINX,elinks"
```sudo apt install nginx elinks```

Dans le terminal taper sudo apt update

Pour savoir si Nginx actif lancer sur notre naviguateur par defaut un http://localhost ou alors un http://127.0.0.1

Ce qui devrai vous faire apparaitre la page de base de Nginx 
![](https://i.imgur.com/czCiOTh.png)

## Commençon a heberger 
Il faut savoir que tout les dossiers de nginx sont dans ``` /var/www/html```

Pour être plus soigneux et s'y retrouver je conseille fortement de crée un dossier que l'on va appeler site ce qui nous permetra d'y mettre notre site avec les fichier de notre site dedans.

Pour crée dossier ``` sudo mkdir site /var/www/html```

Dans notre situation a nous nous avions auparavent deja un dossier appeler "Projet-dev" ou il y'avais deja tous les fichier dedans donc nous avons deplacer ce dossier dans le dossier que nous venons de crée. Depuis l'arboressence ou ce trouve notre dossier Projet-dev 

``` sudo mv Projet-dev /var/www/html/site/```

Donc des que l'on actualise notre page localhost on y ajoute dans l'adresse les 2 sous dossier 
http://localhost/site/Projet-dev/

Maintenant que nous avons tous bien actualiser sur notre naviguateur et tout bien ajouter au bon endroit on est censé y voir la page d'accueil 
![](https://i.imgur.com/F5s8ofH.png)

Avec dans notre barre de recherche 

http://localhost/site/Projet-dev/

## Configuration du serveur de base 
Dans nginx tous les fichiers de configurations sont situé dans /etc/nginx/ 






 

