---
name: brand-voice
description: Define, document, or apply a brand voice and tone guide. Use when the user wants to create a style/voice guide, audit content for on-brand consistency, or rewrite text to match an existing brand voice.
---

# Brand Voice

## Locate an existing guide first

Search the project for a voice guide before creating one: files like `BRAND.md`, `brand-voice.md`, `VOICE.md`, `docs/brand/*`, `style-guide*`, or a "Voice" section in `CLAUDE.md`. If one exists, follow it and only propose changes when asked.

## Creating a voice guide

1. **Gather samples.** Ask for (or find) 3–10 pieces of content the user considers on-brand, plus any they consider off-brand. Also ask about audience, mission, and 2–3 brands they admire.
2. **Extract traits.** Identify 3–4 voice traits. For each, define it with a "this, not that" pair so it's actionable:
   - *Confident, not arrogant*
   - *Playful, not silly*
   - *Expert, not academic*
3. **Write the guide** using this structure and save it as `BRAND_VOICE.md` (or where the user prefers):

```markdown
# [Brand] Voice Guide

## Who we're talking to
[Primary audience in 2–3 sentences]

## Voice traits
### [Trait] — [this], not [that]
- Do: [concrete guidance]
- Don't: [concrete guidance]
- Example: "[on-brand line]" vs. "[off-brand line]"

## Tone by context
| Context | Tone shift | Example |
| Onboarding | Warm, encouraging | ... |
| Error messages | Calm, direct, helpful | ... |
| Social | Lighter, more personality | ... |
| Legal/billing | Plain, precise | ... |

## Word list
- Use: [preferred terms]
- Avoid: [banned terms, jargon, competitor terms]

## Mechanics
[Capitalization, punctuation, emoji, numbers, Oxford comma, product name styling]
```

## Auditing content

For each piece reviewed, return:
- An overall on-brand score (1–5) with a one-line justification.
- A table of specific lines: `original | issue (which trait/rule) | suggested rewrite`.
- Patterns that recur across pieces, so the user can fix the root cause.

## Rewriting

Preserve meaning, facts, and structure; change only voice. Keep length within ±15% unless told otherwise.
