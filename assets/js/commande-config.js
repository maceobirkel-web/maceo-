/* Studio Tourisme — réglages de la commande en ligne.
   C'est le SEUL fichier à modifier pour brancher la commande (voir README, partie 7).
   Tant qu'une valeur contient "A_CONFIGURER", la fonction correspondante reste masquée. */
window.STUDIO_COMMANDE = {
  /* Adresse qui reçoit les commandes, via FormSubmit (gratuit, sans compte).
     Après la première commande, FormSubmit envoie un e-mail d'activation, puis une adresse
     de remplacement (une suite de lettres et chiffres) : collez-la ici à la place de l'e-mail. */
  formsubmit: "maceo.birkel@gmail.com",

  /* Robot Make (scénario « Commande client ») : reçoit une copie de chaque commande validée,
     pour créer le dossier client et lancer la production après l'acompte. */
  make: "https://hook.eu1.make.com/ntf76j2ac8sbwfe1a0vld88gqg1lf5vu",

  /* Liens de paiement Stripe (Payment Links), un par pack.
     acompte = 30 % du prix d'un logement ; solde = 70 %. Cochez « quantité modifiable » dans Stripe. */
  stripe: {
    essentiel:  { acompte: "A_CONFIGURER", solde: "A_CONFIGURER" },
    visibilite: { acompte: "A_CONFIGURER", solde: "A_CONFIGURER" },
    premium:    { acompte: "A_CONFIGURER", solde: "A_CONFIGURER" }
  },

  /* Code promo Stripe de l'offre de lancement (coupon de 30 %). */
  codeLancement: "LANCEMENT",

  /* Virement, proposé en plus de la carte (ou seul si Stripe n'est pas configuré). */
  virement: {
    titulaire: "A_CONFIGURER",
    iban: "A_CONFIGURER",
    bic: "A_CONFIGURER"
  },

  /* Signature des messages envoyés aux clients. */
  signature: "Maceo Birkel\nStudio Tourisme\n07 59 53 17 84"
};

/* Contenu des packs : à garder identique à la section Tarifs de index.html et aux CGV. */
window.STUDIO_PACKS = {
  essentiel: {
    nom: "Essentiel",
    prix: 99,
    delai: "72 h",
    contenu: ["Audit de l'annonce", "Retouche de 15 photos", "Nouveau titre et nouvelle description", "Ordre des photos optimisé"]
  },
  visibilite: {
    nom: "Visibilité",
    prix: 249,
    delai: "5 jours",
    contenu: ["Tout le pack Essentiel", "1 vidéo IA de 30 secondes", "Version verticale pour Instagram et TikTok", "Annonce traduite en anglais"]
  },
  premium: {
    nom: "Premium",
    prix: 490,
    delai: "7 jours",
    contenu: ["Tout le pack Visibilité", "3 vidéos courtes", "Site dédié au logement avec demande de réservation", "Conseils sur vos prix et votre calendrier"]
  }
};
