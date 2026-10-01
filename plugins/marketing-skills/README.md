# marketing-skills

Un plugin Claude Code avec des skills pour le marketing au quotidien, pensé pour les marchés francophones. Claude charge automatiquement le bon skill quand votre demande y correspond. Vous pouvez aussi en appeler un directement, par exemple `/marketing-skills:copywriting`.

## Skills généraux

| Skill | Usage |
| --- | --- |
| `copywriting` | Pages d'atterrissage, titres, slogans, CTA, annonces, fiches produit |
| `brand-voice` | Guide de ton, vérification de cohérence, réécriture selon la voix de la marque |
| `seo-content` | Briefs de contenu, articles optimisés, balises meta, audits on-page |
| `social-media` | Posts, threads, légendes, scripts vidéo, calendriers éditoriaux, déclinaisons |
| `email-campaigns` | Newsletters, annonces, séquences d'onboarding et de nurturing, prospection |
| `launch-plan` | Plans de lancement, rétroplanning, liste des supports, indicateurs |
| `competitor-analysis` | Matrices concurrentielles, fiches argumentaires, pages comparatives |

## Skills marchés francophones

| Skill | Usage |
| --- | --- |
| `localisation-francophone` | Adapter un contenu pour la France, la Belgique, la Suisse, le Québec, le Luxembourg ou l'Afrique francophone ; transcréation depuis l'anglais |
| `redaction-francaise` | Typographie (espaces insécables, guillemets, majuscules, nombres), calques de l'anglais, tutoiement/vouvoiement, écriture inclusive |
| `conformite-marketing-fr` | RGPD, cookies CNIL, prospection, loi Toubon, influence commerciale, prix barrés, mentions obligatoires, loi 96, loi 25, LCAP, droit suisse |
| `calendrier-commercial-fr` | Soldes, rentrée, French Days, Black Friday, fêtes et temps forts par pays |

## Conseils

- Ajoutez un fichier `BRAND_VOICE.md` à votre projet (le skill `brand-voice` peut le rédiger) : les autres skills le suivront, y compris le choix du tutoiement ou du vouvoiement.
- Les skills utilisent des espaces réservés comme `[STAT : …]` au lieu d'inventer des chiffres, des témoignages ou des prix. Remplacez-les par de vraies données avant publication.
- `conformite-marketing-fr` ne remplace pas un avis juridique : faites valider les points sensibles par un juriste.
