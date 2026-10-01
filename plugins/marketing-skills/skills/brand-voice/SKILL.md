---
name: brand-voice
description: Définir, documenter ou appliquer le ton et la voix d'une marque. À utiliser quand l'utilisateur veut créer un guide de ton ou une charte éditoriale, vérifier la cohérence de contenus avec la marque, ou réécrire un texte pour qu'il corresponde à une voix existante.
---

# Ton de marque

## Chercher d'abord un guide existant

Avant d'en créer un, chercher un guide de ton dans le projet : fichiers comme `BRAND_VOICE.md`, `CHARTE_EDITORIALE.md`, `brand-voice.md`, `VOICE.md`, `docs/brand/*`, `style-guide*`, ou une section « Ton » dans `CLAUDE.md`. S'il existe, le suivre et ne proposer de modifications que sur demande.

## Créer un guide de ton

1. **Rassembler des exemples.** Demander (ou trouver) 3 à 10 contenus que l'utilisateur juge fidèles à la marque, et d'autres qu'il juge à côté. Demander aussi la cible, la mission et 2 ou 3 marques admirées.
2. **Dégager des traits.** Identifier 3 ou 4 traits de voix. Définir chacun par une paire « ceci, pas cela » pour le rendre concret :
   - *Assuré, pas arrogant*
   - *Ludique, pas puéril*
   - *Expert, pas universitaire*
3. **Trancher les questions propres au français** :
   - **Tutoiement ou vouvoiement** — et s'il change selon le canal (réseaux sociaux vs. facturation) ou le marché (le tutoiement passe plus facilement au Québec qu'en France ou en Suisse).
   - **Écriture inclusive** — aucune, formulations épicènes et doublets (« toutes et tous »), ou point médian (« client·es »). Choisir une règle et l'appliquer partout.
   - **Anglicismes** — tolérés, limités ou proscrits (plus sensible au Québec, voir `localisation-francophone`).
4. **Rédiger le guide** avec la structure suivante et l'enregistrer dans `BRAND_VOICE.md` (ou là où l'utilisateur le souhaite) :

```markdown
# Guide de ton — [Marque]

## À qui nous parlons
[Cible principale en 2 ou 3 phrases]

## Traits de voix
### [Trait] — [ceci], pas [cela]
- À faire : [consigne concrète]
- À éviter : [consigne concrète]
- Exemple : « [phrase fidèle] » vs « [phrase à côté] »

## Tutoiement / vouvoiement
[Règle et exceptions]

## Écriture inclusive
[Règle retenue et exemples]

## Ton selon le contexte
| Contexte | Variation du ton | Exemple |
| Accueil / onboarding | Chaleureux, encourageant | ... |
| Messages d'erreur | Calme, direct, utile | ... |
| Réseaux sociaux | Plus léger, plus de personnalité | ... |
| Juridique / facturation | Simple, précis | ... |

## Lexique
- À utiliser : [termes préférés]
- À éviter : [termes interdits, jargon, anglicismes, termes des concurrents]

## Règles d'écriture
[Majuscules, ponctuation et espaces, émojis, nombres, nom du produit — voir `redaction-francaise`]
```

## Vérifier des contenus

Pour chaque contenu relu, fournir :
- Une note de cohérence avec la marque (1 à 5) justifiée en une ligne.
- Un tableau des phrases concernées : `texte original | problème (trait ou règle) | réécriture proposée`.
- Les problèmes récurrents d'un contenu à l'autre, pour que l'utilisateur corrige la cause.

## Réécrire

Conserver le sens, les faits et la structure ; ne changer que la voix. Garder la longueur à ±15 % sauf indication contraire.
