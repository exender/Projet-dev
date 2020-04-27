# Installation du serveur sous linux Ubuntu 18.04

```
sudo nano /etc/apt/sources.list

Copier les lignes suivantes et les coller dans le fichier (Ctrl,Shift,V)

# Pour installer  php7.0
deb http://packages.dotdeb.org jessie all
# Pour installer Nginx
deb http://nginx.org/packages/mainline/debian/ jessie nginx
```

Ne pas oubliez de mettre a jour ``` sudo apt-get update```

Puis commencez a install "NGINX,PHP 7.0 ,elinks"

Pour savoir si Nginx actif lancer sur notre naviguateur par defaut un http://localhost ou alors un http://127.0.0.1

Ce qui devrai vous faire apparaitre la page de base de Nginx 