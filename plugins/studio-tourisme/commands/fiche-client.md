---
description: Transforme des notes, un e-mail ou une transcription de rendez-vous en fiche client du studio tourisme
argument-hint: "[chemin d'un fichier de notes, ou notes collées]"
allowed-tools: Read, Write, Edit, Glob
---

Utilise le skill `questionnaire-client` en **mode 2 (fiche depuis des notes)**.

Source : $ARGUMENTS

Si la source est un chemin de fichier, lis-le. Si c'est du texte, utilise-le tel quel. Si elle est vide, demande à l'utilisateur de coller ses notes.

Écris ou mets à jour `clients/<slug>/fiche-client.md`, puis liste les questions obligatoires sans réponse, formulées pour être envoyées telles quelles au client.
