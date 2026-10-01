---
name: email-campaigns
description: Rédiger des e-mails marketing et des séquences d'e-mails — newsletters, annonces produit, séries de bienvenue et d'onboarding, nurturing, réactivation, panier abandonné et prospection à froid. À utiliser quand l'utilisateur demande un e-mail, des objets d'e-mail, une séquence automatisée, ou veut améliorer ses taux d'ouverture et de clic.
---

# Campagnes e-mail

## Brief

Établir : type d'e-mail, segment visé et ce qu'il a déjà fait (inscription, essai, désabonnement), l'objectif unique de chaque e-mail, le nom de l'expéditeur, l'offre ou la date limite, le ton, le tutoiement ou vouvoiement, le marché francophone, et les contraintes de l'outil d'envoi (variables comme `{{prenom}}`, texte brut ou HTML).

## Anatomie d'un e-mail

1. **Objet** — proposer 5 options de styles différents : bénéfice, curiosité, urgence, personnel, question. Viser moins de ~50 caractères. Pas de MAJUSCULES ni de ponctuation excessive (signaux de spam).
2. **Texte de prévisualisation** — prolonge l'objet sans le répéter (~40 à 90 caractères).
3. **Première phrase** — parle du lecteur, pas de l'entreprise.
4. **Corps** — une idée, paragraphes courts, facile à parcourir. Les bénéfices avant les fonctionnalités.
5. **Un seul CTA principal** — le texte du bouton est un verbe précis. Le répéter une fois dans les e-mails longs.
6. **P.-S.** (facultatif) — rappeler l'offre ou ajouter de l'urgence ; les P.-S. sont lus.

Formules d'appel et de politesse : adapter au marché et au ton (« Bonjour Camille, » est sûr partout ; « Allô » ou « Salut » selon la marque au Québec). Dans un e-mail marketing, éviter les formules longues (« Veuillez agréer… »).

## Séquences

Présenter d'abord la carte de la séquence, puis chaque e-mail :

| # | Délai / déclencheur | Objectif | Objet | Message clé | CTA |
| --- | --- | --- | --- | --- | --- |

Modèles courants :
- **Bienvenue / onboarding (4 à 6 e-mails) :** livrer la valeur promise → premier succès rapide → fonctionnalité clé → preuve sociale → montée en gamme ou étape suivante.
- **Nurturing :** expliquer le problème, créer la confiance, CTA doux puis direct.
- **Réactivation (3 e-mails) :** « toujours intéressé ? » → rappel de la meilleure valeur → e-mail de rupture avec désinscription claire.
- **Lancement :** teaser → jour J → preuve sociale / FAQ → dernière chance.
- **Prospection à froid :** ≤ 120 mots, première phrase personnalisée, une seule demande claire, pas de pièce jointe ; les relances apportent du nouveau, pas « je me permets de vous relancer ».

Ajouter des conditions de sortie (par ex. « arrêter si l'utilisateur convertit »).

## Conformité et délivrabilité

Les règles dépendent du pays du destinataire — se référer au skill `conformite-marketing-fr`. Points essentiels :

- **France / Belgique / UE (RGPD + règles e-privacy) :** en B2C, consentement préalable (opt-in) obligatoire, sauf clients existants pour des produits ou services analogues. En B2B (France), l'envoi est possible sans consentement préalable si le message est en rapport avec la fonction du destinataire, avec un droit d'opposition simple.
- **Canada / Québec (LCAP) :** consentement exprès ou tacite, identification de l'expéditeur, mécanisme de désabonnement traité sous 10 jours ouvrables.
- **Suisse (LCD) :** consentement préalable pour les envois de masse, expéditeur identifiable, désinscription gratuite.
- Toujours prévoir un lien de désinscription et l'identité de l'expéditeur (espaces réservés si inconnus).
- N'écrire qu'à des personnes qui ont accepté ; signaler toute demande qui suppose des listes achetées ou extraites.
- Ne jamais inventer de remises, de dates limites ou de témoignages : utiliser des espaces réservés.

## Tests

Proposer un test A/B par e-mail (généralement l'objet ou le CTA) et l'indicateur pour trancher (le taux d'ouverture est peu fiable avec les protections de confidentialité ; privilégier les clics ou les conversions).
