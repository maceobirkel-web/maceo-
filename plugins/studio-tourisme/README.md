# Plugin Claude Code — studio-tourisme

Questionnaire de découverte client et fiche client pour le studio tourisme (création de sites web pour hébergements, activités, restaurants, offices de tourisme).

## Installation

Dans Claude Code :

```
/plugin marketplace add maceobirkel-web/maceo-
/plugin install studio-tourisme@maceo-plugins
```

Redémarre Claude Code si les commandes n'apparaissent pas.

## Utilisation

| Commande | Usage |
|---|---|
| `/questionnaire-client [établissement]` | Entretien guidé, bloc par bloc (10 blocs, ~50 questions dont ~30 obligatoires). Écrit `clients/<slug>/fiche-client.md`. Relancée sur un client existant, elle ne pose que les questions manquantes. |
| `/fiche-client [notes]` | Construit la fiche à partir de notes, d'un e-mail ou d'une transcription. Liste les questions obligatoires sans réponse. |

Le skill `questionnaire-client` se déclenche aussi tout seul quand tu parles à Claude d'un nouveau client du studio.

## Personnaliser

- Questions : `skills/questionnaire-client/references/questions.md`
- Format de la fiche : `skills/questionnaire-client/references/fiche-client-modele.md`
- Règles de conduite de l'entretien et d'analyse : `skills/questionnaire-client/SKILL.md`
