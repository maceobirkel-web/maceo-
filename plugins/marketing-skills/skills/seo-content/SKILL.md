---
name: seo-content
description: Planifier, rédiger ou optimiser des contenus pour le référencement naturel (SEO) — articles de blog, pages d'atterrissage, balises title et meta description, briefs de contenu, cocons sémantiques et audits SEO on-page. À utiliser quand l'utilisateur parle de SEO, de référencement, de positionnement, de mots-clés, de trafic organique, de balises meta, ou veut un article qui se positionne.
---

# Contenu SEO

Écrire d'abord pour l'internaute : les moteurs de recherche récompensent les contenus qui répondent pleinement à l'intention de recherche.

## 1. Déterminer l'intention

Pour le mot-clé cible, classer l'intention : **informationnelle** (comment, qu'est-ce que, pourquoi), **commerciale** (meilleur, comparatif, avis), **transactionnelle** (acheter, prix, inscription) ou **navigationnelle**. Le format doit correspondre : « comment faire » appelle un guide, « meilleur X » appelle un comparatif, pas une fiche produit.

Sans outil qui les fournit, on ne voit ni les volumes de recherche ni les positions réelles. Ne pas inventer de volumes ou de scores de difficulté : marquer toute estimation comme telle et inviter l'utilisateur à vérifier dans son outil SEO.

Les recherches diffèrent selon le pays : « courriel » au Québec, « e-mail » ou « mail » en France, « GSM » en Belgique. Préciser le marché et la version de Google visés (voir `localisation-francophone`).

## 2. Brief de contenu (planification)

```markdown
**Mot-clé principal :** ...
**Mots-clés secondaires / associés :** ...
**Intention de recherche :** ...
**Lecteur cible :** ...
**Marché :** France / Belgique / Suisse / Québec / autre
**Angle (en quoi notre contenu sera meilleur que ce qui se positionne) :** ...
**Balise title proposée (≤ 60 caractères) :** ...
**Meta description (≤ 155 caractères) :** ...
**Slug d'URL :** /slug-court-descriptif (sans accents)
**Plan :** structure H2/H3 avec notes par section
**Questions à traiter (type « Autres questions posées ») :** ...
**Liens internes à ajouter :** ...
**Longueur visée :** selon la profondeur nécessaire, sans remplissage
```

## 3. Rédaction

- Placer le mot-clé principal dans le title, le H1, les 100 premiers mots et au moins un H2 — naturellement, sans bourrage.
- Répondre à la question principale dès les 2 ou 3 premières phrases (favorable aux extraits optimisés), puis approfondir.
- Écrire des H2/H3 descriptifs qui forment une table des matières. Majuscule au premier mot seulement.
- Utiliser listes, tableaux et étapes quand ils facilitent la lecture.
- Apporter une vraie valeur ajoutée : exemples, données propres à l'utilisateur, prises de position, captures, modèles. Signaler où ajouter une expérience vécue (E-E-A-T).
- Ajouter une FAQ pour les questions associées quand c'est pertinent.
- Terminer par une prochaine étape ou un CTA adapté à l'intention.

## 4. Audit on-page (optimisation d'un contenu existant)

Si le contenu est dans le dépôt (Markdown, MDX, HTML, JSON de CMS), le lire directement. Vérifier et signaler :

- Balise title et meta description : présentes, uniques, de bonne longueur, avec le mot-clé, incitatives.
- Un seul H1 ; hiérarchie des titres logique.
- Adéquation à l'intention et sujets manquants.
- Attribut `alt` des images, noms de fichiers descriptifs.
- Liens internes et externes ; liens cassés ou ancres génériques (« cliquez ici »).
- Balise canonical, `noindex`, Open Graph / Twitter, données structurées (JSON-LD) si pertinent.
- Pour un site multi-pays : balises `hreflang` (`fr-FR`, `fr-BE`, `fr-CH`, `fr-CA`, `x-default`) cohérentes et réciproques.
- Lisibilité : longueur des phrases, blocs de texte trop denses.

Rendre une liste priorisée : impact **Élevé / Moyen / Faible**, chacun avec la correction exacte. Proposer d'appliquer les corrections.
