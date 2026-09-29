# Studio Tourisme — site vitrine

Site statique (HTML, CSS, un petit fichier JavaScript), sans framework ni outil de compilation.
Il s'héberge gratuitement sur Netlify, Vercel ou GitHub Pages.

## Contenu du dossier

```
index.html              Page d'accueil (10 sections)
mentions-legales.html   Mentions légales
cgv.html                Conditions générales de vente (+ formulaire de rétractation)
confidentialite.html    Politique de confidentialité (RGPD, cookies)
404.html                Page « introuvable »
robots.txt, sitemap.xml Référencement
.nojekyll               Utile pour GitHub Pages uniquement
assets/
  css/style.css         Toute la mise en forme (couleurs en haut du fichier)
  js/main.js            Menu mobile + envoi du formulaire
  fonts/                Police IBM Plex Sans, hébergée sur le site (licence SIL OFL)
  img/                  Favicon, icône Apple, image de partage (og-image.png)
```

Pour voir le site sur votre ordinateur : double-cliquez sur `index.html`.
(Le formulaire ne s'envoie réellement qu'une fois le site en ligne et Formspree configuré.)

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
| `[NOM DE DOMAINE]` + `VOTRE-DOMAINE.fr` | mentions légales, balises SEO des 4 pages, `robots.txt`, `sitemap.xml` | Après l'achat du domaine |
| `[DATE DE MISE EN LIGNE]` | les 3 pages légales | Le jour de la publication |
| `[MÉDIATEUR DE LA CONSOMMATION]` | CGV, article 19 | **Obligatoire** avant de vendre à des particuliers |
| `[AUTRES MOYENS DE PAIEMENT]` | CGV, article 6 | Supprimez la mention si vous n'acceptez que le virement |
| `[NOMS DES OUTILS UTILISÉS]` (IA) | confidentialité, section 3 | Avant la mise en ligne |
| `Instagram : [À DÉFINIR]` | accueil, section Contact | Instructions en commentaire juste au-dessus de la ligne |
| `VOTRE_ID_FORMSPREE` | accueil, formulaire | Voir la partie 2 |

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

## 3. Mettre le site en ligne

**Option la plus simple : Netlify Drop**
1. Créez un compte gratuit sur https://app.netlify.com.
2. Allez sur https://app.netlify.com/drop et glissez-déposez **le dossier complet** du site.
3. Le site est en ligne en quelques secondes sur une adresse `xxx.netlify.app`. Vous pourrez la renommer et y relier votre nom de domaine (*Domain management*).

**Vercel** : créez un compte sur https://vercel.com, *Add New… > Project*, importez le dépôt GitHub. Aucune configuration : c'est un site statique.

**GitHub Pages** : dans le dépôt GitHub, *Settings > Pages > Source : Deploy from a branch*, choisissez la branche et le dossier `/ (root)`.
Avec l'adresse par défaut `utilisateur.github.io/nom-du-depot/`, la page 404 s'affichera sans mise en forme : ce n'est plus le cas une fois un nom de domaine relié.

Après la mise en ligne :
- remplacez `VOTRE-DOMAINE.fr` partout (4 pages, `robots.txt`, `sitemap.xml`) ;
- complétez l'hébergeur dans les mentions légales et la politique de confidentialité ;
- testez le partage du lien (WhatsApp, LinkedIn) : l'image `assets/img/og-image.png` doit apparaître ;
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
- **Couleurs** : variables en haut de `assets/css/style.css` (`--bleu`, `--noir`, etc.).
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

- Aucune dépendance externe chargée par le navigateur : pas de Google Fonts (police hébergée localement), pas d'outil de statistiques, pas de cookie. D'où l'absence de bandeau cookies.
- Accessibilité : balises sémantiques, lien d'évitement, labels sur tous les champs, contrastes AA, FAQ en `<details>` natifs utilisables au clavier, menu mobile avec `aria-expanded`. Vérifié avec axe-core (0 erreur) et html-validate.
- Sans JavaScript, le site reste utilisable : le menu s'affiche en entier et le formulaire s'envoie normalement vers Formspree.

## 7. Photos d'arrière-plan (provisoires)

Trois photos sont utilisées en fondu : en haut de page (`chalet-salon`), derrière l'offre de lancement
(`piscine-jardin`) et derrière les questions (`chalet-poutres`). Elles sont dans `assets/img/photos/`,
chacune en `.webp` (léger, utilisé en priorité) et en `.jpg` (secours).

**Ce sont des photos d'essai.** Avant de rendre le site public, utilisez uniquement :
- vos propres photos, ou celles d'un client qui vous a donné son accord **par écrit** ;
- ou des photos libres de droits (Unsplash, Pexels), avec la mention « Photo d'illustration ».

Pour remplacer une photo : gardez le même nom de fichier et remplacez les deux versions (`.jpg` et `.webp`).
Taille conseillée : 1400 à 1800 px de large, moins de 400 Ko. Le cadrage se règle dans `style.css`
(`background-position` des classes `.fond--accroche`, `.fond--piscine`, `.fond--poutres`).
