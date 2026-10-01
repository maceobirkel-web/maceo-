# maceo-

Une marketplace de plugins Claude Code.

## Plugins

| Plugin | Description |
| --- | --- |
| [`marketing-skills`](plugins/marketing-skills) | Skills marketing en français : copywriting, ton de marque, SEO, réseaux sociaux, e-mailing, lancements, veille concurrentielle, et spécificités des marchés francophones |

## Installation

Dans Claude Code :

```
/plugin marketplace add maceobirkel-web/maceo-
/plugin install marketing-skills@maceo-plugins
```

Pour l'essayer depuis un clone local, sans l'installer :

```
claude --plugin-dir ./plugins/marketing-skills
```

## Ajouter un skill

Créez `plugins/marketing-skills/skills/<nom-du-skill>/SKILL.md` avec cet en-tête :

```markdown
---
name: nom-du-skill
description: Ce que fait le skill et quand Claude doit l'utiliser.
---

Instructions pour Claude…
```

Augmentez le champ `version` dans `plugins/marketing-skills/.claude-plugin/plugin.json` et `.claude-plugin/marketplace.json` à chaque nouvelle version.
