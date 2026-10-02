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
nouveau-client.html     Page interne (pour vous) : envoyer le lien de commande après un appel
commande.html           Questionnaire de commande du client (non référencé)
merci.html              Après la commande : paiement de l'acompte (non référencé)
_headers, _redirects    Sécurité (HTTPS, en-têtes) pour Netlify
vercel.json             Même chose pour Vercel
.htaccess               Même chose pour un hébergeur Apache (OVH, o2switch…)
robots.txt, sitemap.xml Référencement
.nojekyll               Utile pour GitHub Pages uniquement
assets/
  css/style.css         Toute la mise en forme (couleurs en haut du fichier)
  js/main.js            Menu mobile, vérification du formulaire, anti-spam, envoi
  js/commande-config.js Réglages de la commande en ligne (liens Stripe, IBAN, adresse)
  js/commande.js        Fonctionnement des 3 pages de commande
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
- **Démarrage anticipé** (article 9 des CGV) : case prévue dans le questionnaire de commande en ligne (partie 7) ; pour un devis papier, prévoyez une case du type « Je demande que la prestation commence avant la fin du délai de rétractation de 14 jours », à faire cocher par les clients particuliers.
- **Relecture juridique** : ces pages sont une base sérieuse, mais une relecture par un juriste ou votre CCI/CMA reste conseillée avant de les utiliser.

## 7. Commande en ligne après un appel (onboarding automatique)

### Comment ça marche

1. **Vous** (fin d'appel, 20 secondes) : ouvrez `nouveau-client.html` sur votre iPhone, tapez le nom,
   l'e-mail et le téléphone du client, choisissez le pack, puis **Envoyer par e-mail** ou **par SMS**.
   Le message (récapitulatif de l'offre + lien personnel) est déjà rédigé, vous n'avez qu'à appuyer sur Envoyer.
2. **Le client** ouvre le lien : le questionnaire est prérempli (nom, e-mail, pack, prix). Il renseigne son
   logement, ses photos, coche les CGV (et, s'il est particulier, la case facultative « commencer avant
   la fin des 14 jours »), puis valide.
3. **Automatiquement** : vous recevez la commande complète par e-mail, le client en reçoit une copie
   (elle vaut confirmation écrite), puis il arrive sur la page de paiement de l'acompte (carte via Stripe,
   ou virement).
4. **Stripe** vous prévient du paiement et envoie le reçu au client.
5. **À la livraison validée** : rouvrez `nouveau-client.html`, choisissez « La demande de solde », envoyez.

Ce qui reste manuel, volontairement : le déclenchement (vous seul savez que l'appel a abouti) et l'appui
sur « Envoyer » (le message part de votre propre adresse Gmail, donc il arrive en boîte de réception et
reste dans vos e-mails envoyés). Aucun compte n'est nécessaire pour cette étape.

### À configurer une fois (depuis l'iPhone)

Le site doit d'abord être en ligne (partie 3). Ensuite :

**a) Raccourci sur l'écran d'accueil** : dans Safari, ouvrez `https://VOTRE-DOMAINE.fr/nouveau-client.html`,
touchez Partager, puis « Sur l'écran d'accueil ». La page s'ouvre alors comme une application.

**b) FormSubmit (réception des commandes, gratuit, sans compte)**
1. Ouvrez votre propre lien de commande et passez une commande de test avec votre adresse e-mail.
2. FormSubmit envoie un e-mail « Activate Form » à maceo.birkel@gmail.com : touchez le bouton d'activation.
3. Repassez une commande de test : vous devez recevoir la commande, et la copie « client » sur l'adresse saisie.
4. Facultatif : FormSubmit vous donne une adresse de remplacement (suite de lettres et chiffres) qui évite
   d'afficher votre e-mail dans le code. Remplacez `formsubmit` dans `assets/js/commande-config.js`.

**c) Stripe (paiement par carte)**
1. Créez un compte sur https://dashboard.stripe.com (dans Safari, ou avec l'app Stripe), et activez les
   paiements : identité, statut d'entrepreneur individuel, SIRET, IBAN pour recevoir l'argent.
2. Menu **Liens de paiement** > **+ Nouveau**, produit « Acompte Essentiel », prix **29,70 €**, paiement unique.
   Dans les options, cochez **Autoriser les clients à ajuster la quantité** et **Autoriser les codes promotionnels**.
3. Recommencez pour les 5 autres liens :

   | Lien | Prix pour 1 logement |
   |---|---|
   | Acompte Essentiel / Visibilité / Premium | 29,70 € / 74,70 € / 147 € |
   | Solde Essentiel / Visibilité / Premium | 69,30 € / 174,30 € / 343 € |

4. Offre de lancement : menu **Produits** > **Coupons** > **+ Nouveau**, 30 %, durée « une fois », puis un
   **code promotionnel** `LANCEMENT` limité à 5 utilisations.
5. Collez les 6 liens dans `assets/js/commande-config.js` (ou envoyez-les à Claude, qui les mettra en place).

Frais Stripe : environ 1,5 % + 0,25 € par paiement avec une carte européenne (vérifiez sur leur page *Tarifs*).

**Factures automatiques (Stripe)** : chaque paiement par carte peut produire sa facture, envoyée au client.
1. Pour chacun des 6 liens de paiement : options du lien > cochez **Créer une facture après le paiement**
   et **Collecter l'adresse du client** (et le nom de l'entreprise, pour les conciergeries).
2. **Paramètres > Facturation > Factures** : choisissez la numérotation **sur l'ensemble du compte**
   (numéros qui se suivent, comme l'exige la loi), et mettez en pied de page :
   `Maceo Birkel EI - Studio Tourisme - SIRET [SIRET] - [ADRESSE] - TVA non applicable, art. 293 B du CGI.
   Clients professionnels : pénalités de retard égales à 3 fois le taux d'intérêt légal, indemnité forfaitaire
   de recouvrement de 40 €.`
3. Stripe facture ce service (un petit pourcentage par facture payée, voir leur page *Tarifs*).
Vous obtenez ainsi une facture d'acompte puis une facture de solde, chacune émise au moment du paiement.
Un paiement par virement n'est pas facturé automatiquement : faites alors la facture à la main (Stripe,
ou un logiciel de facturation gratuit).
Facture électronique : les micro-entreprises devront émettre leurs factures entre professionnels en format
électronique via une plateforme agréée à partir de septembre 2027. Pour les conciergeries, il faudra alors
passer par un outil agréé ; vérifiez le calendrier sur impots.gouv.fr.

**d) Virement (facultatif)** : renseignez titulaire, IBAN et BIC dans `assets/js/commande-config.js`.
Ils s'affichent alors sur la page de paiement. Attention, ils sont visibles dans le code du site.

Tant qu'un élément n'est pas configuré, il est simplement masqué : sans Stripe ni IBAN, la page de paiement
indique au client que vous lui envoyez les coordonnées de paiement sous 24 h.

### Points de vigilance

- **Démarchage téléphonique des particuliers** : depuis le 11 août 2026, appeler un particulier pour lui
  vendre une prestation exige son **accord préalable** (loi du 30 juin 2025). Appeler des conciergeries et
  des professionnels pour leur activité reste possible. Les appels de prospection depuis un numéro en 06/07
  sont aussi encadrés. Voir la fiche de la DGCCRF « Les règles du démarchage téléphonique ».
- Après un appel, un particulier n'est engagé qu'une fois l'offre acceptée par écrit : c'est le rôle du
  questionnaire (article L221-16 du Code de la consommation).
- **Médiateur de la consommation** : toujours obligatoire avant de vendre à des particuliers (partie 6).
- Les prix des packs sont recopiés dans `assets/js/commande-config.js` : modifiez-les aussi là si vous
  changez les tarifs de la page d'accueil.

## Choix techniques

- Aucune dépendance externe chargée sans accord : DM Sans et GSAP sont hébergés sur le site (pas d'appel à Google). Seul GoatCounter est externe, et uniquement après « Accepter ». Le choix est mémorisé 6 mois dans le navigateur (pas de cookie) ; le lien « Gérer les cookies » en bas de page permet de changer d'avis.
- Formulaire : vérification de chaque champ avec un message en français, champ piège anti-robots (`_gotcha`) et délai minimum de 3 secondes avant l'envoi. Formspree ajoute son propre filtre anti-spam.
- Aucune clé secrète dans les fichiers du site : l'identifiant Formspree et le code GoatCounter sont publics par nature.
- Vitesse mesurée avec Lighthouse le 2026-10-01 (page d'accueil) : 95/100 sur mobile, 100/100 sur ordinateur ; accessibilité, bonnes pratiques et SEO : 100/100.
- Accessibilité : balises sémantiques, lien d'évitement, labels sur tous les champs, contrastes AA, FAQ en `<details>` natifs utilisables au clavier, menu mobile avec `aria-expanded`. Vérifié avec axe-core (0 erreur) et html-validate.
- Sans JavaScript, le site reste utilisable : le menu s'affiche en entier, tout le contenu est visible sans animation et le formulaire s'envoie normalement vers Formspree.

## Icône sur l'écran d'accueil (iPhone et Android)

Le site peut s'installer comme une application : `manifest.webmanifest` (nom, couleurs, icônes)
et les icônes `assets/img/apple-touch-icon.png` (180 px), `icone-192.png` et `icone-512.png`.
Sur iPhone : ouvrir le site dans **Safari** → bouton **Partager** → **Sur l'écran d'accueil**.
Le site s'ouvre ensuite en plein écran, sans barre d'adresse.

## Mise en ligne actuelle

Le site est publié par GitHub Pages à l'adresse https://maceobirkel-web.github.io/maceo-/,
directement depuis la branche `main` (dossier racine). Toute modification fusionnée dans `main`
est en ligne 1 à 2 minutes plus tard. La branche `gh-pages` n'est pas utilisée.
Le dépôt étant public, les fichiers internes (`README.md`, `CLAUDE.md`, `.mcp.json`) sont aussi lisibles en ligne :
n'y mettez jamais de mot de passe ni de clé (la clé 21st reste dans la variable `API_KEY_21ST`).

## 8. Automatisation de la production (Make) — état au 2 octobre 2026

**Objectif** : après l'appel et le « oui » du client, tout s'enchaîne sans intervention, jusqu'à la vérification finale par Maceo.

### Déjà en place
- **Make.com** : compte gratuit, région EU (`eu1.make.com`), connecté avec maceo.birkel@gmail.com.
- **Scénario « Integration Webhooks »** (à renommer « Commande client »), activé « Immediately as data arrives » :
  1. **Webhook** « Commande Studio Tourisme » : `https://hook.eu1.make.com/ntf76j2ac8sbwfe1a0vld88gqg1lf5vu`
     (renseigné dans `assets/js/commande-config.js`, clé `make`). `commande.js` y envoie chaque commande validée
     (sendBeacon) avec une référence `ST-AAAAMMJJ-HHMM-XXXX`, les montants en chiffres et `demarrage`
     (`pro` / `immediat` / `apres14j`).
  2. **Google Drive — Create a Folder** : dans « Studio Tourisme » (My Drive), nom `{{1.reference}} - {{1.nom}} - {{1.commune}}`.
  3. **Google Sheets — Add a Row** : classeur « studio tourisme », feuille « Feuille 1 », 18 colonnes
     Référence · Date · Nom · E-mail · Téléphone · Statut · Pack · Logements · Total · Acompte · Solde · Commune ·
     Lien annonce · Lien photos · Démarrage · Dossier Drive (`{{2.webViewLink}}`) · Acompte reçu (« Non ») · État (« Commande reçue »).
- Testé de bout en bout le 2 octobre 2026 : dossier et ligne créés.

### Vidéo IA : où on en est (2 octobre 2026, soir)
- Compte **fal.ai** créé (type « Personal », connexion Google maceo.birkel@gmail.com). Crédit à ajouter dans Billing (20 € prévus).
- Modèle retenu : **`fal-ai/kling-video/v3/pro/image-to-video`** (Kling 3.0 Pro, image vers vidéo).
  Variante plus rapide à comparer plus tard : `fal-ai/kling-video/v3/turbo/pro/image-to-video`.
- **Test manuel à faire** dans l'interface fal.ai avant d'automatiser :
  - image de départ (`start_image_url`) : `https://maceobirkel-web.github.io/maceo-/assets/img/photos/chalet-vue-montagne.jpg`
  - prompt : `Slow, smooth cinematic camera push-in. Keep the room exactly as in the photo: same furniture, same objects, same windows, same view, same layout. Do not add, remove or change anything. Natural light, realistic, stable, no distortion.`
  - negative prompt : `new objects, extra furniture, people, animals, text, watermark, morphing, warping, distortion, melting, changing walls, changing view, flicker`
  - durée 5 s, audio désactivé.
  - À juger : beauté du rendu, et surtout **rien d'inventé ni de déformé**.
- Ensuite : 2ᵉ scénario Make « Production » (tableau → photos du dossier Drive → fal.ai → vidéos rangées dans le dossier → ligne « À vérifier » → e-mail à Maceo).
  Au début, Maceo dépose lui-même les photos du client dans son dossier Drive.
- Clé API fal.ai : à créer au moment de construire le scénario, à coller **uniquement dans Make**.

### Prochaines étapes
1. **Déclenchement de la production** : un 2ᵉ scénario surveille le tableau ; quand Maceo passe « Acompte reçu » à « Oui »
   (en attendant Stripe, qui nécessite le SIRET), il lance la production.
   Règle des 14 jours : `apres14j` → attendre 14 jours après la commande avant de lancer les IA.
2. **Photos du client** : page de dépôt sur le site (les liens iCloud/Google Photos ne se téléchargent pas toujours automatiquement).
3. **IA** (comptes à créer par Maceo, clés API à coller uniquement dans Make, jamais dans le dépôt public) :
   - vidéo : **fal.ai** (Kling 3.0 ; Veo 3.1 en option Premium) ;
   - retouche : **Autoenhance.ai**, *sans* remplacement de ciel ni home staging virtuel ;
   - textes et traduction : API Claude (`claude-opus-5-5`).
4. **Vérification** : notification à Maceo, validation d'un clic, puis livraison au client et lien de solde.
   Vérification systématique des vidéos (les modèles génératifs peuvent inventer des éléments).
5. **Budget** visé : 150 €/mois (Make ~11 $/mois en offre Core quand nécessaire).
