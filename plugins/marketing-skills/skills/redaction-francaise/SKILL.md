---
name: redaction-francaise
description: Relire, corriger et mettre en forme des textes marketing en français selon les règles de typographie et de style — espaces insécables, guillemets, majuscules, nombres, abréviations, anglicismes, écriture inclusive, tutoiement/vouvoiement et traces de traduction depuis l'anglais. À utiliser quand l'utilisateur demande une relecture, une correction, une harmonisation typographique, ou quand un texte français semble « traduit de l'anglais ».
---

# Rédaction et typographie françaises

## Typographie

### Ponctuation et espaces (France, Belgique, Suisse)
- **Espace insécable avant** `:` `;` `!` `?` `»` et **après** `«`. En toute rigueur : espace fine insécable (U+202F) devant `; ! ?` et espace insécable (U+00A0) devant `:` et dans les guillemets. En pratique, une espace insécable partout est acceptable.
- Pas d'espace avant `.` `,` `…` `)`.
- **Québec :** espace insécable seulement devant `:` et dans les guillemets « » ; pas d'espace (ou espace fine) devant `; ! ?`.
- Dans le web et le HTML, utiliser `&nbsp;` / `&#8239;` ou les caractères Unicode, sinon la ponctuation se retrouve seule en début de ligne. Vérifier si le CMS ou le framework gère cela automatiquement.

### Guillemets et apostrophes
- Guillemets français « … » avec espaces insécables ; “ ” pour une citation dans une citation.
- Apostrophe typographique `’` de préférence à `'` dans les textes publiés (rester cohérent sur tout le site).

### Majuscules
- **Titres : majuscule au premier mot seulement** (et aux noms propres). « Découvrez nos nouvelles offres », pas « Découvrez Nos Nouvelles Offres ». C'est l'erreur la plus fréquente dans les textes traduits de l'anglais.
- Pas de majuscule aux jours, mois, langues et gentilés employés comme adjectifs : « lundi 5 janvier », « le marché français », mais « les Français ».
- **Accentuer les majuscules** : « État », « À partir de », « ÉVÉNEMENT ».

### Nombres, prix, unités
- Séparateur de milliers : espace insécable (`10 000`) ; décimales : virgule (`3,5`). Suisse : voir `localisation-francophone`.
- Prix : `19,90 €` (symbole après, espace insécable). Québec : `19,99 $`.
- Pourcentages : `20 %` (espace insécable).
- Heures : `14 h 30` ou `14h30` (choisir et s'y tenir).
- Ordinaux : `1er`, `1re`, `2e` (pas « 2ème », ni « 2nd » sauf « second »).
- Abréviations : `M.` (monsieur, pas « Mr »), `Mme`, `n°` ou `no`, `etc.` (jamais « etc… »), `P.-S.`.

## Style

### Repérer les calques de l'anglais
| À éviter | Préférer |
| --- | --- |
| « Nous sommes excités de… » | « Nous avons le plaisir de… » / « Bonne nouvelle : … » |
| « Réaliser que » (au sens de *to realize*) | « Se rendre compte que » |
| « Faire du sens » | « Avoir du sens » |
| « Supporter un projet » | « Soutenir un projet » |
| « Être en charge de » | « Être chargé de » / « S'occuper de » |
| « Adresser un problème » | « Traiter / résoudre un problème » |
| « Opportunité » (au sens d'occasion) | « Occasion » |
| « Définitivement » (au sens de *definitely*) | « Sans aucun doute » / « Clairement » |
| Title Case, points de suspension partout, voix passive | Phrases actives, majuscule initiale seule |

### Anglicismes
Suivre la règle de la marque (voir `brand-voice`). À défaut : garder les termes passés dans l'usage de la cible (« e-mail » en France, « courriel » au Québec), traduire le reste. Dans la publicité en France et au Québec, une traduction française est légalement requise (voir `conformite-marketing-fr`).

### Tutoiement et vouvoiement
- Choisir l'un ou l'autre et ne **jamais mélanger** dans un même parcours (site, e-mails, application).
- Repérer les incohérences : « Créez votre compte » sur un bouton et « Ton profil » dans le menu.

### Écriture inclusive
Appliquer la règle de la marque. Options, de la plus discrète à la plus visible :
1. **Formulations épicènes** : « l'équipe », « la clientèle », « les personnes inscrites ».
2. **Doublets** : « toutes et tous », « les client·es »… ou « les clientes et clients ».
3. **Point médian** : « les utilisateur·rices ». Moins lisible, mal lu par certains lecteurs d'écran, et proscrit dans certains contextes (administration et enseignement en France). À éviter dans les titres et boutons.

## Relecture : livrable

1. Le texte corrigé.
2. Un tableau des corrections : `avant | après | règle`. Regrouper les corrections répétitives (par ex. « 14 espaces insécables ajoutées »).
3. Les questions ouvertes (tutoiement ou vouvoiement, règle d'écriture inclusive) si le guide de ton ne tranche pas.

Pour corriger des fichiers du dépôt (Markdown, HTML, JSON de traduction, fichiers i18n), proposer la modification directement et ne pas toucher aux clés, variables (`{{nom}}`, `%s`) ni au balisage.
