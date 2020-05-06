# Installer et configurer netdata :

```linux
bash <(curl -Ss https://my-netdata.io/kickstart.sh) --stable-channel
```
```linux
cd /etc/netdata
```
    Créer et éditer le fichier python.d/nginx.conf avec vi, vim ou nano (au choix ^^)
```linux
sudo vi python.d/nginx.conf
```
    Puis entrer :
```linux
localhost:
    name : 'local'
    url  : 'http://localhost/stub_status'
```
    Configurer l'ip de netdata afin de pouvoir y accéder sur notre réseaux avec d'autre machine :
```linux
sudo vi netdata.conf
```
    Rechercher la partie [web] et remplace # bind to = * par :

bind to = 127.0.0.1,[IP local]

    Redémarrer Netdata
```linux
sudo systemctl restart netdata
```






server {

        listen 80 default_server;
        server_name les-rois-du-gaming.craoutch;
        location / stub_status {
                stub_status;
                allow 127.0.0.1;
                deny all;  
        }
        return 301 https://$server_name$request_uri;
        }
server {

        listen 443 ssl;
        server_name les-rois-du-gaming.craoutch;

        ssl_certificate /etc/nginx/ssl/cert.crt;
        ssl_certificate_key /etc/nginx/ssl/cert.key;

        root /var/www/html/site/Projet-dev;
        index index.html;

        location / {
            try_files   $uri $uri/ =404;
    }
}
