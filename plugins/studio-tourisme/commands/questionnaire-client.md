---
description: Mène le questionnaire de découverte d'un nouveau client du studio tourisme, puis écrit sa fiche client
argument-hint: "[nom de l'établissement]"
allowed-tools: Read, Write, Edit, Glob, AskUserQuestion
---

Utilise le skill `questionnaire-client` en **mode 1 (entretien)**.

Établissement indiqué : $ARGUMENTS

Si aucun nom n'est indiqué, commence par le demander. Si `clients/<slug>/fiche-client.md` existe déjà pour cet établissement, lis-la et ne pose que les questions restées **à compléter**.

À la fin, écris ou mets à jour la fiche, puis donne en trois lignes maximum : le chemin du fichier, le type de site recommandé, et le nombre de questions obligatoires encore ouvertes.
