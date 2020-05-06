# Installation du serveur sous NGINX Ubuntu 20.04

1. Instalation
2. Commençon a heberger
3. Configuration d'un serveur de base
4. Comment se passer du vieux "localhost"
5. Penchons nous sur le HTTP{S}
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

```linux
/etc/nginx/nginx.conf
```
Dans ce dossier nous avons tous ce qui est la configuration du http
```linux
/etc/nginx/sites-availables/
```
donc on va y ajouter notre dossier rois 
```linux
mkdir rois /etc/nginx/sites-availables/
```
```linux
sudo nano /etc/nginx/sites-available/rois
```
et ajouter
```linux
server {
        # Port d'écoute principal des requêtes HTTP du serveur web
        listen 80 default_server;
        listen [::]:80 default_server;

        # Dossiers principal de site web
        root /var/www/html;

        # Type de fichier autorisé à la racine du site; ajouter "index.php" au début de la liste
        index index.php index.html index.htm index.nginx-debian.html;

        # Nom d’hôte principal
        server_name localhost;
        }
        
}
```
Reaload le systeme NGINX
```linux
sudo systemctl reload nginx
```
pour les configurations des sites autorisés à se servir du serveur
```linux
/etc/nginx/sites-enabled/
```
pour les sites activés à fonctionner sur le serveur et pour y crée les liens symboliques 

## Comment se passer du vieux "localhost"
```linux
server {
    # Port d'écoute http du serveur
    listen              80;

    # Emplacement d'hébergement du site
    root                /var/www/html/site/;

    # Type de fichiers principaux autorisés à la racine
    index               index.php index.html index.htm;

    # Nom d'Hôte (ici nom d'hote virtuel)
    server_name         les-rois-du-gaming.craoutch;

    location / {
            try_files $uri $uri/ =404;
    }
}
```
Puis modifier l'adresse host dans le dossier 
```linux
sudo nano /etc/hosts
```
Au bout de la ligne 127.0.0.1 mettre notre nom d'hote virtuel

Puis quittez
Pour verifier si cela fonctione ping notre nom d'hôte les-rois-du-gaming.craoutch et si tous fonctionne les pacquets son bien envoyer
Ce n'est pas finis dans le terminal

```linux
sudo nano /etc/nginx/sites-available/rois
```
```linux
server {

    listen          80;
    root            /var/www/html/sites/Projet-dev;
    index           index.php index.html index.htm;
    server_name     les-rois-du-gaming.craoutch;
```
Creation du lien symbolique dans le dossier site-enable
via la commande 
```linux
sudo ln -s /etc/nginx/sites-available/rois /etc/nginx/sites-enabled
```
Maintenant verification 
```linux 
sudo nginx -t
```
et si tous est bien configurer 
```linux
nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```
Si certaines erreur apparaisse ce referé a ce site 
https://www.elkwaetblog.tk/administration-linux-installation-serveur-http-nginx-plusieurs-sites
## Penchons nous sur le HTTP{S}

```linux
sudo mkdir ssl
sudo chmod 700 ssl/
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/cert.key -out /etc/nginx/ssl/cert.crt
(Passer le remplissage des informations, elles ne sont pas importantes dans notre cas)
```
```linux
sudo touch sites-available/rois.conf
```
```linux
server {
    listen      80;
    listen [::]:80;

    server_name les-rois-du-gaming.craoutch;

    location /stub_status {
        stub_status;
        allow 127.0.0.1;
        deny all;
    }
}

server {
    listen      443 ssl;
    listen [::]:443 ssl;

    server_name les-rois-du-gamin.craoutch;

    ssl_certificate     /etc/nginx/ssl/cert.crt;
    ssl_certificate_key /etc/nginx/ssl/cert.key;
    }
}

```
Creation du lien symbolique 

```linux
sudo ln sites-available/rois.conf sites-enabled/
```
Maintenant on test 
```linux
sudo nginx -t
```
Si tous a reussi 
```linux
sudo systemctl restart nginx
```

Voila le serveur est fonctionnel avec notre site 