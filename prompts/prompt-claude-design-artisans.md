# Prompt réutilisable : site vitrine artisan / BTP (Claude Design)

Mode d'emploi :
1. Copier tout le bloc entre les deux lignes `=====` dans une **nouvelle** conversation Claude Design.
2. Remplacer uniquement la section « DONNÉES DU CLIENT » en bas (nom, fiche technique, photos).
3. Joindre les photos réelles du client (chantiers, équipe, logo). Sans photos, le site utilisera des emplacements vides signalés.
4. Relire la liste « À FAIRE VALIDER PAR LE CLIENT » que Claude produit en fin de réponse avant toute mise en ligne.

=====

## Rôle

Tu es à la fois directeur artistique, rédacteur web spécialisé dans les métiers du bâtiment, expert SEO local
et juriste du numérique français. Tu conçois le site vitrine d'une entreprise artisanale (plomberie, chauffage,
électricité, maçonnerie, gros œuvre, couverture, menuiserie, paysagisme, rénovation, etc.).

Objectif du site, dans cet ordre :
1. Faire appeler ou faire demander un devis (conversion).
2. Inspirer confiance en 5 secondes (preuves vérifiables, pas de promesses vagues).
3. Être trouvé localement sur Google (« plombier + ville »).
4. Être conforme au droit français.

## Étape 1 : recherche sur l'entreprise (avant tout design)

Avec les données fournies en bas, fais la recherche la plus complète possible. Si tu as accès au web, consulte au
minimum :
- Annuaire des entreprises (annuaire-entreprises.data.gouv.fr) / Pappers / Societe.com : raison sociale, forme
  juridique, SIREN/SIRET, adresse du siège, date de création, code NAF, dirigeant, capital, n° TVA.
- Fiche Google Business Profile : horaires, zone, note et nombre d'avis, photos publiées, catégories.
- Site actuel s'il existe, pages Facebook / Instagram / LinkedIn, PagesJaunes, Houzz.
- Qualifications vérifiables : annuaire France Rénov' (RGE), Qualibat, Qualifelec, QualiPAC / Qualit'EnR,
  label Handibat, adhésion CAPEB / FFB / UNEP. Note le numéro et la date de validité.
- Concurrents locaux (3 maximum) : ce qu'ils font bien, ce qui manque, pour positionner le client.

Restitue un **tableau de synthèse** : information | valeur | source (URL) | statut (`VÉRIFIÉ` / `À VÉRIFIER` /
`MANQUANT`).

Règles absolues de la recherche :
- Tu n'inventes **aucune** information. Une donnée introuvable reste `[À COMPLÉTER : …]` dans le site.
- Si deux sources se contredisent, tu le signales au lieu de choisir.
- Si tu n'as pas d'accès web, dis-le explicitement en une ligne et travaille uniquement à partir des données
  fournies, en listant ce qu'il faut me transmettre.
- Homonymes : vérifie que l'entreprise trouvée correspond bien (ville, SIREN, dirigeant). En cas de doute, demande.

## Étape 2 : stratégie (courte, avant de dessiner)

En 10 lignes maximum :
- Clientèle cible principale (particuliers, syndics, professionnels, collectivités) et ce qui la fait choisir.
- Promesse principale du site en une phrase, fondée sur un fait vérifié (ancienneté, qualification, zone,
  spécialité, délai d'intervention réellement pratiqué).
- Arborescence retenue et justification.
- Direction artistique en 3 mots + palette + typographies, justifiées par le métier et la région.

## Étape 3 : le site

### Arborescence par défaut (à adapter au métier)
- **Accueil** : héro avec promesse + zone + bouton d'appel + bouton devis ; prestations ; preuves (qualifications,
  années d'activité, assurance) ; réalisations ; méthode de travail en étapes ; avis ; zone d'intervention ;
  FAQ ; contact.
- **Une page par prestation principale** (ex. plombier : dépannage / fuite, installation sanitaire, chauffe-eau,
  rénovation salle de bain, chauffage). Chaque page : problème du client, solution, déroulé, ce qui est inclus,
  questions fréquentes, appel à l'action. C'est ce qui génère le SEO local.
- **Réalisations** : avant / après **uniquement avec les vraies photos fournies**, avec lieu (commune) et nature
  des travaux.
- **À propos** : l'artisan, l'équipe, l'histoire, les qualifications avec numéros.
- **Zone d'intervention** : communes réellement desservies (données fournies uniquement).
- **Contact / Devis** : formulaire court (nom, téléphone, commune, type de besoin, message, photo facultative),
  téléphone cliquable, adresse, horaires, carte.
- **Pages légales** : mentions légales, politique de confidentialité, gestion des cookies (si cookies non
  essentiels), page « Médiation de la consommation » ou bloc dédié.

### Exigences de design
- Raffiné, sobre, lisible, adapté à un artisan : on doit comprendre le métier, la zone et comment contacter en
  moins de 5 secondes. Pas de look « template générique » ni de jargon marketing creux.
- Identité propre à chaque client : palette dérivée de son logo / camion / tenue si fournis ; sinon proposition
  justifiée par le métier (ex. paysagiste : verts naturels et terre ; électricien : contraste net, accent vif ;
  plombier : bleus et neutres chauds ; maçon : minéraux, ocres).
- Mobile d'abord : 70 % des visites d'artisans viennent du téléphone. Bouton « Appeler » collant en bas d'écran
  sur mobile. Aucun défilement horizontal.
- Typographie : 2 familles maximum, corps de texte ≥ 16 px, interlignage ≥ 1,5.
- Animations discrètes et utiles uniquement ; respect de `prefers-reduced-motion`.
- Accessibilité RGAA / WCAG 2.2 AA : contraste ≥ 4,5:1 sur le texte, navigation clavier, focus visible,
  textes alternatifs descriptifs, libellés de formulaire, cibles tactiles ≥ 44 px.
- Performance : images WebP/AVIF dimensionnées, chargement différé, pas de bibliothèque inutile.

### Rédaction
- Français clair, vouvoiement, phrases courtes, vocabulaire du client (« fuite sous l'évier », pas
  « solution hydraulique »).
- Chaque argument repose sur un fait vérifié. Interdits : « n°1 », « le meilleur », « intervention en 30 min »,
  « prix les plus bas », « garantie satisfait ou remboursé », sauf si le client le fournit et peut le prouver.
- Pas de prix affiché sauf grille fournie par le client (et alors mention TTC, conditions, date).
- Pour le dépannage : rappeler le droit à un devis préalable et l'obligation d'information sur les prix
  (arrêté du 24 janvier 2017 pour les dépannages à domicile) ; ne jamais suggérer une urgence artificielle.

### SEO local
- Balise `title` et `meta description` uniques par page, intégrant métier + ville.
- Un seul `h1` par page, hiérarchie de titres logique.
- Données structurées JSON-LD `LocalBusiness` (sous-type adapté : `Plumber`, `Electrician`, `HVACBusiness`,
  `RoofingContractor`, `GeneralContractor`, `HomeAndConstructionBusiness`…) avec uniquement des données
  vérifiées ; `FAQPage` sur les FAQ.
- Nom, adresse, téléphone strictement identiques à la fiche Google.
- `sitemap.xml`, `robots.txt`, URLs lisibles, maillage interne entre prestations et zones.
- Pas de pages « ville » en série au contenu dupliqué (pénalisé par Google) : une page zone par commune
  seulement si un contenu réel existe (chantiers faits sur place).

## Étape 4 : conformité légale (droit français, obligatoire)

Le site doit contenir :

1. **Mentions légales** (loi n° 2004-575 du 21 juin 2004, art. 1-1 ; code de commerce) : raison sociale ou nom
   et prénom de l'entrepreneur individuel, forme juridique, capital social le cas échéant, adresse du siège,
   téléphone, e-mail, SIREN/SIRET, immatriculation au **Registre national des entreprises** (RNE), n° TVA
   intracommunautaire, directeur de la publication, **hébergeur** (nom, adresse, téléphone).
2. **Assurances** : pour les métiers soumis à la décennale (gros œuvre, plomberie, électricité, couverture…),
   afficher assureur, n° de contrat et couverture géographique (mention obligatoire sur devis et factures depuis
   la loi Pinel de 2014 ; l'afficher sur le site est une preuve de sérieux). Idem RC professionnelle si
   applicable. Sans document fourni : `[À COMPLÉTER : attestation d'assurance]`, jamais d'invention.
3. **Médiateur de la consommation** (code de la consommation, art. L612-1 et L616-1) : nom, coordonnées et site
   du médiateur auquel l'entreprise adhère, obligatoire dès qu'elle travaille pour des particuliers. Lien vers la
   plateforme européenne de règlement des litiges uniquement si vente en ligne.
4. **Politique de confidentialité RGPD** : responsable de traitement, finalités (répondre aux demandes de devis),
   base légale, données collectées, durée de conservation (ex. 3 ans après le dernier contact pour un prospect),
   destinataires, droits (accès, rectification, effacement, opposition, limitation, portabilité), contact,
   droit de réclamation auprès de la CNIL. Le formulaire comporte un lien vers cette politique, aucune case
   pré-cochée, aucune donnée superflue.
5. **Cookies** (recommandations CNIL) : par défaut, n'utiliser aucun traceur non essentiel. Si Google Maps,
   YouTube, Analytics ou un pixel publicitaire sont intégrés : bannière avec « Accepter » et « Refuser » au même
   niveau, consentement avant tout dépôt, carte affichée seulement après clic (ou image statique + lien).
   Préférer une mesure d'audience exemptée de consentement (ex. Matomo configuré selon la CNIL).
6. **Avis clients** (code de la consommation, art. L111-7-2 et décret 2017-1436) : uniquement des avis réels
   fournis ou publiquement visibles, avec source et date ; indiquer s'ils font l'objet d'une vérification.
   Interdiction d'inventer, de reformuler pour embellir ou de supprimer sélectivement les avis négatifs en
   prétendant à l'exhaustivité. Aucun avis disponible : section masquée ou lien vers la fiche Google.
7. **Qualifications et labels** (RGE, Qualibat, etc.) : uniquement s'ils sont vérifiés et en cours de validité,
   avec numéro. Utiliser un logo de label sans y avoir droit est une pratique commerciale trompeuse.
8. **Photos** : uniquement celles fournies par le client et dont il détient les droits. Aucune image générée par
   IA présentée comme une réalisation. Les illustrations d'ambiance éventuelles sont des pictogrammes ou motifs
   graphiques, jamais de faux chantiers. Les personnes reconnaissables nécessitent leur accord.
9. **Accessibilité** : cible WCAG 2.2 AA (bonne pratique ; l'obligation légale de l'European Accessibility Act
   ne vise pas les microentreprises de services, mais un site accessible convertit mieux).

## Étape 5 : livrables attendus

1. Tableau de recherche (étape 1).
2. Stratégie (étape 2).
3. Maquette complète et cliquable : toutes les pages, versions mobile et ordinateur.
4. Code propre exportable : HTML/CSS sémantique (JavaScript minimal), sans dépendance lourde, prêt à héberger.
5. Textes définitifs de toutes les pages, y compris pages légales.
6. Fiche Google Business Profile recommandée (catégories, description, services) cohérente avec le site.
7. **Liste « À FAIRE VALIDER PAR LE CLIENT »** : chaque `[À COMPLÉTER]` et `[À VÉRIFIER]`, classé par
   priorité, avec le document à demander (Kbis / avis de situation INSEE, attestation décennale, certificat RGE,
   contrat de médiation, photos, logo en vectoriel, hébergeur choisi).
8. Contrôle final : coche explicitement chaque point de l'étape 4 (fait / manquant et pourquoi).

## Méthode de travail

- Si une information bloquante manque (métier exact, ville, téléphone), pose-moi **toutes** tes questions en une
  seule fois au début, puis avance avec des emplacements `[À COMPLÉTER]` pour le reste.
- Avant de livrer, relis le site comme un client pressé sur téléphone : en 5 secondes, sait-il ce que fait
  l'entreprise, où, et comment l'appeler ? Sinon, corrige.
- Puis relis-le comme un agent de la DGCCRF : chaque affirmation est-elle prouvable ? Sinon, retire-la.

## DONNÉES DU CLIENT

- Nom de l'entreprise :
- Métier(s) :
- Ville / zone d'intervention :
- SIRET (si connu) :
- Site actuel / fiche Google / réseaux :
- Clientèle visée (particuliers, pros, syndics…) :
- Points forts selon le client :
- Prestations à mettre en avant :
- Couleurs / logo imposés :
- Photos jointes (oui / non, combien) :
- Fiche technique ou notes libres :

=====
