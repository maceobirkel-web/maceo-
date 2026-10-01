# maceo-

A Claude Code plugin marketplace.

## Plugins

| Plugin | Description |
| --- | --- |
| [`marketing-skills`](plugins/marketing-skills) | Skills for copywriting, brand voice, SEO, social media, email, launches and competitor research |

## Install

In Claude Code:

```
/plugin marketplace add maceobirkel-web/maceo-
/plugin install marketing-skills@maceo-plugins
```

To try it from a local clone without installing:

```
claude --plugin-dir ./plugins/marketing-skills
```

## Adding a skill

Create `plugins/marketing-skills/skills/<skill-name>/SKILL.md` with frontmatter:

```markdown
---
name: skill-name
description: What it does and when Claude should use it.
---

Instructions for Claude...
```

Bump `version` in `plugins/marketing-skills/.claude-plugin/plugin.json` and `.claude-plugin/marketplace.json` when you release changes.
