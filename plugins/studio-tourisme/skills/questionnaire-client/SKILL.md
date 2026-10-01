---
name: questionnaire-client
description: Questionnaire de découverte et fiche client du studio tourisme (agence qui crée des sites web pour hébergements, activités, restaurants, offices de tourisme). À utiliser quand on démarre un projet avec un nouveau client du studio, qu'on prépare un brief ou un devis de site web touristique, ou qu'on transforme des notes de rendez-vous client en fiche client.
---

# Questionnaire client — Studio tourisme

Ce skill sert à recueillir, auprès d'un client du studio tourisme, tout ce qu'il faut pour cadrer et chiffrer son site web, puis à produire une **fiche client** standardisée.

## Fichiers de référence

- `references/questions.md` : la banque de questions, en 10 blocs. Chaque question a un identifiant (ex. `A3`), un statut (**obligatoire** ou facultative) et des réponses types.
- `references/fiche-client-modele.md` : le modèle exact de la fiche à produire.

Lis les deux fichiers avant de commencer.

## Mode 1 — Entretien (questionnaire en direct)

Utilisé quand l'utilisateur remplit le questionnaire avec Claude (seul, ou pendant un appel avec le client).

1. Demande d'abord le nom de l'établissement et son type d'activité (bloc A). Le type conditionne les questions suivantes : saute celles marquées pour un autre type (ex. pas de « nombre de chambres » pour une activité de loisirs).
2. Pose les questions **bloc par bloc**, jamais plus d'un bloc à la fois. Quand l'outil `AskUserQuestion` est disponible, utilise-le pour les questions à choix (jusqu'à 4 questions par appel, `multiSelect: true` pour les choix multiples) ; pose les questions ouvertes en texte.
3. Accepte « je ne sais pas » ou « plus tard » : note la question comme **à compléter**, ne bloque pas.
4. Relance une seule fois si une réponse obligatoire est vague (ex. « un budget raisonnable » → demande une fourchette).
5. Après le dernier bloc, affiche un récapitulatif court et demande validation avant d'écrire la fiche.

## Mode 2 — Fiche depuis des notes

Utilisé quand l'utilisateur fournit des notes, un compte rendu, un e-mail ou une transcription.

1. Extrais chaque information et range-la sous l'identifiant de question correspondant.
2. N'invente rien. Une information absente devient **à compléter**. Une déduction (ex. saisonnalité déduite de « fermé en hiver ») est marquée *(déduit)*.
3. Liste à la fin les questions obligatoires sans réponse, pour la prochaine prise de contact.

## Écriture de la fiche

- Chemin : `clients/<slug>/fiche-client.md`, où `<slug>` est le nom de l'établissement en minuscules, sans accents, mots séparés par des tirets (ex. `clients/gite-les-trois-chenes/fiche-client.md`). Si le fichier existe déjà, lis-le et mets-le à jour au lieu de l'écraser ; ajoute une ligne à l'historique.
- Respecte la structure de `references/fiche-client-modele.md` (titres, ordre, tableau de synthèse).
- Remplis la section **Analyse du studio** toi-même, à partir des réponses :
  - **Type de site recommandé** : vitrine simple, vitrine + moteur de réservation tiers, site avec réservation/paiement intégrés, ou site multi-offres (office de tourisme, agence).
  - **Points d'attention** : risques concrets (dépendance aux OTA, photos insuffisantes, délai irréaliste par rapport au budget, absence de nom de domaine, contenu multilingue non disponible…).
  - **Questions restantes** : toutes les questions obligatoires à compléter.
- Ne donne pas de prix chiffré : le studio fixe ses tarifs. Indique seulement la complexité estimée (faible / moyenne / élevée) et ce qui la fait monter.

## Ton

Vouvoie le client si l'entretien se fait en sa présence. Questions courtes, une idée par question, vocabulaire non technique (« moteur de réservation » plutôt que « booking engine », expliqué en une phrase si besoin).
