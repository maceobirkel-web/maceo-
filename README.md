# Studio Tourisme — site vitrine

Site statique (HTML, CSS, quelques petits fichiers JavaScript), sans framework ni outil de compilation.
Il s'héberge gratuitement sur Netlify, Vercel ou GitHub Pages.

## Contenu du dossier

```
index.html              Page d'accueil (10 sections)
mentions-legales.html   Mentions légales
cgv.html                Conditions générales de vente (+ formulaire de rétractation)
cgu.html                Conditions générales d'utilisation du site
confidentialite.html    Politique de confidentialité (RGPD, cookies)
404.html                Page « introuvable »
_headers, _redirects    Sécurité (HTTPS, en-têtes) pour Netlify
vercel.json             Même chose pour Vercel
.htaccess               Même chose pour un hébergeur Apache (OVH, o2switch…)
robots.txt, sitemap.xml Référencement
.nojekyll               Utile pour GitHub Pages uniquement
assets/
  css/style.css         Toute la mise en forme (couleurs en haut du fichier)
  js/main.js            Menu mobile, vérification du formulaire, anti-spam, envoi
  js/consentement.js    Bandeau cookies + mesure d'audience (GoatCounter)
  js/animations.js      Animations de la page d'accueil (défilement, titre, prix, étapes)
  js/vendor/            Bibliothèque d'animation GSAP, hébergée sur le site
  fonts/                Police DM Sans, hébergée sur le site (licence SIL OFL)
  img/                  Favicon, icône Apple, image de partage (og-image.jpg)
```

Pour voir le site sur votre ordinateur : double-cliquez sur `index.html`.
(Le formulaire ne s'envoie réellement qu'une fois le site en ligne et Formspree configuré.
En ouvrant le fichier directement, certains navigateurs affichent une police de secours : c'est normal, DM Sans s'affiche une fois le site en ligne.)

---

## 1. Ce qu'il vous reste à compléter

Tous les éléments manquants sont écrits **entre crochets** et **surlignés en jaune** sur les pages.
Pour les retrouver, cherchez `a-completer`, `VOTRE-DOMAINE` et `VOTRE_ID_FORMSPREE` dans les fichiers
(dans VS Code : Ctrl + Maj + F).

| Élément | Où | Quand |
|---|---|---|
| `[SIRET]` | mentions légales, CGV, confidentialité | Dès réception (sous 1 à 4 semaines après la déclaration) |
| `[ADRESSE POSTALE]` | mentions légales, CGV (2 fois), confidentialité | Avant la mise en ligne |
| `[EN COURS]` (immatriculation RNE) | mentions légales | Remplacer par « Immatriculé au RNE » une fois inscrit |
| `[NOM / ADRESSE / SITE DE L'HÉBERGEUR]` | mentions légales, confidentialité | Après le choix de l'hébergeur (adresses en commentaire dans le fichier) |
| `[NOM DE DOMAINE]` + `VOTRE-DOMAINE.fr` | mentions légales, balises SEO des 5 pages, `robots.txt`, `sitemap.xml` | Après l'achat du domaine |
| `[DATE DE MISE EN LIGNE]` | les 4 pages légales | Le jour de la publication |
| `[MÉDIATEUR DE LA CONSOMMATION]` | CGV, article 19 | **Obligatoire** avant de vendre à des particuliers |
| `[AUTRES MOYENS DE PAIEMENT]` | CGV, article 6 | Supprimez la mention si vous n'acceptez que le virement |
| `[NOMS DES OUTILS UTILISÉS]` (IA) | confidentialité, section 3 | Avant la mise en ligne |
| `Instagram : [À DÉFINIR]` | accueil, section Contact | Instructions en commentaire juste au-dessus de la ligne |
| `VOTRE_ID_FORMSPREE` | accueil, formulaire | Voir la partie 2 |
| `VOTRE_CODE_GOATCOUNTER` | `assets/js/consentement.js`, ligne 9 | Voir la partie 2 bis |

> Adresse : en micro-entreprise, l'adresse publiée est celle de votre siège. Si vous ne souhaitez pas
> afficher votre adresse personnelle, vous pouvez recourir à une société de domiciliation.

## 2. Brancher le formulaire sur Formspree (gratuit)

Formspree reçoit les demandes du formulaire et vous les transfère par e-mail. Aucun serveur à gérer.

1. Allez sur **https://formspree.io** et cliquez sur **Get Started** (ou *Sign up*).
2. Créez votre compte avec l'adresse **maceo.birkel@gmail.com**, puis confirmez-la via l'e-mail reçu.
3. Cliquez sur **+ New Form** (ou *Create Form*). Nom : `Studio Tourisme - Audit`. Adresse de réception : maceo.birkel@gmail.com.
4. Formspree affiche une adresse du type `https://formspree.io/f/abcdwxyz`. Les 8 caractères à la fin (`abcdwxyz`) sont votre **identifiant**.
5. Ouvrez `index.html`, cherchez `VOTRE_ID_FORMSPREE` et remplacez-le par votre identifiant :
   ```html
   <form ... action="https://formspree.io/f/abcdwxyz" method="POST">
   ```
6. Mettez le site en ligne, puis envoyez-vous une demande de test. La première fois, Formspree peut vous demander de confirmer le formulaire par e-mail.

Réglages conseillés dans l'onglet **Settings** du formulaire :
- **Restrict to Domain** : indiquez votre nom de domaine, pour que personne d'autre ne puisse utiliser votre formulaire.
- Si l'envoi affiche une erreur alors que tout est bien rempli, désactivez **reCAPTCHA** : le site envoie le formulaire sans recharger la page, ce qui n'est pas compatible avec le reCAPTCHA de Formspree. Un champ piège anti-robots (`_gotcha`) est déjà en place.

L'offre gratuite de Formspree est limitée en nombre d'envois par mois (environ 50, vérifiez sur leur page *Pricing*). C'est largement suffisant pour démarrer.

## 2 bis. Activer la mesure d'audience (GoatCounter, gratuit)

GoatCounter compte les visites sans cookie et sans suivre les visiteurs. Il ne se lance que si le visiteur clique sur « Accepter » dans le bandeau.

1. Allez sur **https://www.goatcounter.com** et cliquez sur **Sign up**.
2. Choisissez un code, par exemple `studio-tourisme` : vos statistiques seront sur `https://studio-tourisme.goatcounter.com`.
3. Ouvrez `assets/js/consentement.js`, remplacez `VOTRE_CODE_GOATCOUNTER` par ce code (entre les guillemets).
4. Mettez le site en ligne, acceptez le bandeau, visitez quelques pages : elles apparaissent dans votre tableau de bord GoatCounter.

Tant que le code n'est pas rempli, le bandeau s'affiche mais rien n'est chargé.

## 3. Mettre le site en ligne

**Option la plus simple : Netlify Drop**
1. Créez un compte gratuit sur https://app.netlify.com.
2. Allez sur https://app.netlify.com/drop et glissez-déposez **le dossier complet** du site.
3. Le site est en ligne en quelques secondes sur une adresse `xxx.netlify.app`. Vous pourrez la renommer et y relier votre nom de domaine (*Domain management*).

**Vercel** : créez un compte sur https://vercel.com, *Add New… > Project*, importez le dépôt GitHub. Aucune configuration : c'est un site statique.

**GitHub Pages** : dans le dépôt GitHub, *Settings > Pages > Source : Deploy from a branch*, choisissez la branche et le dossier `/ (root)`.
Avec l'adresse par défaut `utilisateur.github.io/nom-du-depot/`, la page 404 s'affichera sans mise en forme : ce n'est plus le cas une fois un nom de domaine relié.

**HTTPS forcé** : Netlify, Vercel et GitHub Pages fournissent le certificat gratuitement.
Sur GitHub Pages, cochez **Enforce HTTPS** dans *Settings > Pages*. Sur Netlify et Vercel, c'est automatique.
Les fichiers `_headers` (Netlify), `vercel.json` (Vercel) et `.htaccess` (Apache) ajoutent les en-têtes de sécurité
(HSTS, politique de sécurité du contenu, protection contre l'affichage du site dans un cadre). GitHub Pages ne permet pas ces en-têtes.

Après la mise en ligne :
- remplacez `VOTRE-DOMAINE.fr` partout (4 pages, `robots.txt`, `sitemap.xml`) ;
- complétez l'hébergeur dans les mentions légales et la politique de confidentialité ;
- testez le partage du lien (WhatsApp, LinkedIn) : l'image `assets/img/og-image.jpg` doit apparaître ;
- déclarez le site sur Google Search Console et envoyez le `sitemap.xml`.

## 4. Activer les avis clients (plus tard)

Une section « Avis clients » est prête dans `index.html`, **désactivée** (entre `<!--` et `-->`).
Les règles sont rappelées en commentaire. En résumé :
- uniquement de vrais avis, reçus par écrit, avec l'accord de la personne ;
- texte recopié fidèlement, sans note ni statistique inventée ;
- les avis obtenus grâce à la remise de lancement doivent **indiquer qu'il y a eu une contrepartie**
  (obligation d'information du Code de la consommation sur les avis en ligne). La mention est prévue.

## 5. Modifier le site

- **Textes** : directement dans les fichiers `.html`, avec n'importe quel éditeur (VS Code recommandé).
- **Couleurs** : thème sombre « nuit et ambre » (fond noir chaud, accents ambre et or). Variables en haut de `assets/css/style.css` (`--fond`, `--surface`, `--orange`, `--titre`, etc. ; certains noms comme `--bleu` sont historiques et contiennent désormais de l’ambre). Le design suit le skill ui-ux-pro-max, voir `CLAUDE.md`.
- **Animations** : `assets/js/animations.js`. Elles se coupent d'elles-mêmes si le visiteur a activé « réduire les animations » sur son téléphone ou son ordinateur.
- **Prix** : section `id="tarifs"` et tableau de l'offre de lancement dans `index.html`. Pensez aussi aux CGV si le contenu d'un pack change.
- **Fin de l'offre de lancement** : supprimez le bloc `<div class="offre">…</div>` dans la section `id="engagements"`, et le paragraphe « Offre de lancement » de l'article 5 des CGV.

## 6. Démarches à ne pas oublier (hors site)

Ces points ne relèvent pas du site, mais ils conditionnent la validité des pages légales :
- **Médiateur de la consommation** : adhésion obligatoire pour vendre à des particuliers (quelques dizaines d'euros par an selon les organismes). Liste des médiateurs agréés sur le site de la CECMC (economie.gouv.fr).
- **Compte bancaire dédié** : obligatoire en micro-entreprise dès que le chiffre d'affaires dépasse 10 000 € deux années de suite. Recommandé dès le départ.
- **Assurance responsabilité civile professionnelle** : non obligatoire pour cette activité, mais recommandée.
- **Devis et factures** : mentions obligatoires (EI, SIRET, « TVA non applicable, art. 293 B du CGI », pénalités de retard et indemnité de 40 € pour les clients professionnels).
- **Démarrage anticipé** (article 9 des CGV) : prévoyez sur vos devis une case du type « Je demande que la prestation commence avant la fin du délai de rétractation de 14 jours », à faire cocher par les clients particuliers.
- **Relecture juridique** : ces pages sont une base sérieuse, mais une relecture par un juriste ou votre CCI/CMA reste conseillée avant de les utiliser.

## Choix techniques

- Aucune dépendance externe chargée sans accord : DM Sans et GSAP sont hébergés sur le site (pas d'appel à Google). Seul GoatCounter est externe, et uniquement après « Accepter ». Le choix est mémorisé 6 mois dans le navigateur (pas de cookie) ; le lien « Gérer les cookies » en bas de page permet de changer d'avis.
- Formulaire : vérification de chaque champ avec un message en français, champ piège anti-robots (`_gotcha`) et délai minimum de 3 secondes avant l'envoi. Formspree ajoute son propre filtre anti-spam.
- Aucune clé secrète dans les fichiers du site : l'identifiant Formspree et le code GoatCounter sont publics par nature.
- Vitesse mesurée avec Lighthouse le 2026-10-01 (page d'accueil) : 95/100 sur mobile, 100/100 sur ordinateur ; accessibilité, bonnes pratiques et SEO : 100/100.
- Accessibilité : balises sémantiques, lien d'évitement, labels sur tous les champs, contrastes AA, FAQ en `<details>` natifs utilisables au clavier, menu mobile avec `aria-expanded`. Vérifié avec axe-core (0 erreur) et html-validate.
- Sans JavaScript, le site reste utilisable : le menu s'affiche en entier, tout le contenu est visible sans animation et le formulaire s'envoie normalement vers Formspree.
