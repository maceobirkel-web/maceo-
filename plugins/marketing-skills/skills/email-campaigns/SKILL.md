---
name: email-campaigns
description: Write marketing emails and email sequences — newsletters, product announcements, onboarding/welcome series, nurture drips, re-engagement, abandoned cart and cold outreach. Use when the user asks for an email, subject lines, a drip or lifecycle sequence, or wants to improve open/click rates.
---

# Email Campaigns

## Brief

Establish: email type, audience segment and what they've already done (signed up, trialed, churned), the single goal of each email, sender name, offer/deadline, voice, and any ESP constraints (merge tags like `{{first_name}}`, plain-text vs HTML).

## Single email anatomy

1. **Subject line** — give 5 options across styles: benefit, curiosity, urgency, personal, question. Aim for under ~50 characters. No spammy ALL CAPS or excessive punctuation.
2. **Preview text** — extends the subject, never repeats it (~40–90 chars).
3. **Opening line** — about the reader, not about you.
4. **Body** — one idea, short paragraphs, scannable. Benefits before features.
5. **One primary CTA** — button text is a specific verb phrase. Repeat it once for long emails.
6. **P.S.** (optional) — restate the offer or add urgency; P.S. lines get read.

## Sequences

Output a sequence map first, then each email:

| # | Send timing / trigger | Goal | Subject | Core message | CTA |
| --- | --- | --- | --- | --- | --- |

Common blueprints:
- **Welcome / onboarding (4–6 emails):** deliver promised value → quick win → key feature → social proof → upgrade/next step.
- **Nurture:** educate on the problem, build trust, soft then direct CTA.
- **Re-engagement (3 emails):** "still interested?" → best value reminder → breakup email with clear opt-out.
- **Launch:** teaser → launch day → social proof / FAQ → last chance.
- **Cold outreach:** ≤120 words, personalized first line, one clear ask, no attachments; follow-ups add new value, not "just bumping this".

Add exit conditions (e.g. "stop if user converts").

## Compliance & deliverability

- Include an unsubscribe placeholder and physical address placeholder for marketing email (CAN-SPAM / GDPR / CASL).
- Only email people who opted in; flag if the request implies scraped or purchased lists.
- Never invent discounts, deadlines, or testimonials — use placeholders.

## Testing

Suggest one A/B test per email (usually subject line or CTA) and the metric to judge it by (open rate is unreliable with privacy protections; prefer clicks or conversions).
