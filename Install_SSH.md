# Install SSH

## Installer le SSH 

```linux
sudo apt install openssh-server
```

Allez dans le fichier 
```linux
 sudo nano /etc/ssh/sshd_config

```
Decommenter la partit de la pubkey yes et changez le port sinon le port de base est 22

Puis mettre genere une cle publique 
```linux
ssh-keygen -t rsa
```
Sur son second laptop 

install openssh-client
```linux
sudo apt install openssh-client 
```
verifier sur quel adresse est son laptop principal 

grace a ip a

puis se connecter via son second laptop via 
```linux 
ssh *nom d'utilisateur*@ip -p *port*
```
et puis entrer le mot de passe de son laptop