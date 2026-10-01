# Studio Tourisme : consignes pour Claude

- Site statique HTML/CSS, sans framework. Répondre à l'utilisateur en français, simplement.
- Pour tout travail visuel (design du site, animations, photos animées, vidéos, visuels pour les réseaux),
  utiliser en priorité le skill `.claude/skills/ui-ux-pro-max` (source :
  https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) et en tirer le meilleur résultat possible :
  lancer `--design-system`, puis les domaines utiles (`gsap` et `ux` pour le mouvement, `color`, `typography`).
- La charte d'origine (bleu #1F4FD1, IBM Plex Sans, arrondis 4 px, pas d'effets) n'est plus prioritaire :
  le choix de l'utilisateur du 2026-10-01 est de suivre le skill.
- Règles qui restent obligatoires (loi et engagement commercial) : aucun faux avis, faux chiffre ni image
  de logement inventée ; une animation ou une vidéo n'ajoute jamais rien qui n'existe pas dans le logement ;
  uniquement des photos dont l'utilisateur a les droits ; accessibilité (contrastes, mouvement réduit).
