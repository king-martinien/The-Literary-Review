# Configuration du VPS (Nginx + SSL)

Ce dossier contient les fichiers et instructions pour configurer votre VPS afin de rendre l'application accessible via votre nom de domaine en HTTPS.

## Prérequis
1.  Avoir un nom de domaine (ex: `mon-site.com`).
2.  Avoir configuré la zone DNS (Type A) pour pointer vers l'IP du VPS.
3.  Avoir Nginx installé sur le VPS (`sudo apt install nginx`).

## Étape 1 : Configurer Nginx (Reverse Proxy)

1.  Connectez-vous à votre VPS en SSH.
2.  Créez un nouveau fichier de configuration :
    ```bash
    sudo nano /etc/nginx/sites-available/mon-site
    ```
3.  Copiez le contenu du fichier `nginx-host.conf` (qui est dans ce dossier) et collez-le dans le terminal.
    *   **IMPORTANT** : Remplacez `VOTRE_DOMAINE.com` par votre vrai nom de domaine partout.
4.  Sauvegardez (`Ctrl+O`, Entrée) et quittez (`Ctrl+X`).
5.  Activez le site :
    ```bash
    sudo ln -s /etc/nginx/sites-available/mon-site /etc/nginx/sites-enabled/
    ```
6.  Vérifiez la configuration et redémarrez Nginx :
    ```bash
    sudo nginx -t
    sudo systemctl restart nginx
    ```

À ce stade, votre site devrait être accessible en HTTP sur `http://votre-domaine.com`.

## Étape 2 : Activer HTTPS (SSL gratuit avec Certbot)

1.  Installez Certbot et le plugin Nginx :
    ```bash
    sudo apt update
    sudo apt install certbot python3-certbot-nginx
    ```
2.  Lancez la génération du certificat :
    ```bash
    sudo certbot --nginx -d votre-domaine.com -d www.votre-domaine.com
    ```
3.  Suivez les instructions à l'écran (entrez votre email, acceptez les conditions).
4.  Certbot va automatiquement modifier votre configuration Nginx pour activer le HTTPS.

C'est terminé ! Votre site est maintenant sécurisé (cadenas vert).
