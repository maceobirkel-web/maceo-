/* Studio Tourisme — JavaScript minimal :
   1) menu mobile, 2) vérification du formulaire et anti-spam,
   3) envoi vers Formspree sans quitter la page.
   Sans JavaScript, le menu reste visible et le navigateur vérifie et envoie le formulaire. */
(function () {
  "use strict";

  /* ---------- 1. Menu mobile ---------- */
  var bascule = document.querySelector(".nav__bascule");
  var nav = document.getElementById("navigation");

  if (bascule && nav) {
    var fermer = function () {
      bascule.setAttribute("aria-expanded", "false");
      nav.classList.remove("est-ouvert");
    };

    bascule.addEventListener("click", function () {
      var ouvert = bascule.getAttribute("aria-expanded") === "true";
      bascule.setAttribute("aria-expanded", String(!ouvert));
      nav.classList.toggle("est-ouvert", !ouvert);
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) fermer();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("est-ouvert")) {
        fermer();
        bascule.focus();
      }
    });
  }

  /* ---------- Formulaire de contact (Formspree) ---------- */
  var formulaire = document.getElementById("formulaire-contact");
  if (!formulaire || !window.fetch || !window.FormData) return;

  var statut = document.getElementById("formulaire-statut");
  var boutonEnvoi = formulaire.querySelector('button[type="submit"]');
  var texteBouton = boutonEnvoi ? boutonEnvoi.textContent : "";

  /* ---------- 2. Vérification des champs, messages en français ---------- */
  var MESSAGES = {
    nom: "Indiquez votre nom et prénom.",
    telephone: "Indiquez un numéro de téléphone valide, par exemple 06 12 34 56 78.",
    email: "Indiquez une adresse e-mail valide, par exemple nom@exemple.fr.",
    lien_annonce: "Collez le lien complet de votre annonce, qui commence par https://",
    profil: "Choisissez Hôte ou Conciergerie.",
    nombre_logements: "Indiquez un nombre de logements entre 1 et 999."
  };

  var champs = Array.prototype.slice.call(formulaire.querySelectorAll("input[required]"));
  var tentative = false;

  formulaire.setAttribute("novalidate", "");

  /* Une zone d'erreur par champ, reliée au champ pour les lecteurs d'écran */
  var zones = {};
  champs.forEach(function (champ) {
    if (zones[champ.name]) return;
    var bloc = champ.closest(".champ");
    var zone = document.createElement("span");
    zone.className = "champ__erreur";
    zone.id = "erreur-" + champ.name;
    bloc.appendChild(zone);
    zones[champ.name] = zone;
    formulaire.querySelectorAll('input[name="' + champ.name + '"]').forEach(function (c) {
      var lies = c.getAttribute("aria-describedby");
      c.setAttribute("aria-describedby", (lies ? lies + " " : "") + zone.id);
    });
  });

  var telephoneValide = function (valeur) {
    var chiffres = valeur.replace(/[\s.\-()]/g, "");
    return /^\+?[0-9]{10,15}$/.test(chiffres);
  };

  var verifier = function (champ) {
    var valeur = champ.value.trim();
    var ok = champ.checkValidity() && valeur !== "";
    if (champ.type === "radio") ok = !!formulaire.querySelector('input[name="' + champ.name + '"]:checked');
    if (ok && champ.type === "tel") ok = telephoneValide(valeur);
    if (ok && champ.type === "url") ok = /^https?:\/\/[^\s.]+\.[^\s]+$/i.test(valeur);
    formulaire.querySelectorAll('input[name="' + champ.name + '"]').forEach(function (c) {
      c.setAttribute("aria-invalid", String(!ok));
    });
    zones[champ.name].textContent = ok ? "" : MESSAGES[champ.name] || "Ce champ est obligatoire.";
    return ok;
  };

  champs.forEach(function (champ) {
    var evenement = champ.type === "radio" ? "change" : "blur";
    champ.addEventListener(evenement, function () {
      if (tentative || champ.value.trim() !== "") verifier(champ);
    });
    champ.addEventListener("input", function () {
      if (champ.getAttribute("aria-invalid") === "true") verifier(champ);
    });
  });

  /* ---------- Anti-spam : pot de miel et délai minimum ---------- */
  var ouvertureForm = Date.now();
  var potDeMiel = formulaire.querySelector('input[name="_gotcha"]');

  var afficher = function (message, type) {
    statut.textContent = message;
    statut.className = "formulaire__statut est-" + type;
  };

  formulaire.addEventListener("submit", function (e) {
    e.preventDefault();
    tentative = true;

    var premierInvalide = null;
    champs.forEach(function (champ) {
      if (!verifier(champ) && !premierInvalide) premierInvalide = champ;
    });
    if (premierInvalide) {
      afficher("Certains champs sont à corriger.", "erreur");
      premierInvalide.focus();
      return;
    }

    /* Robot probable : champ caché rempli. On fait comme si tout allait bien, sans rien envoyer. */
    if (potDeMiel && potDeMiel.value) {
      formulaire.reset();
      afficher("Merci, votre demande est bien envoyée.", "succes");
      return;
    }

    /* Envoi trop rapide pour un humain (moins de 3 secondes après l'ouverture de la page) */
    if (Date.now() - ouvertureForm < 3000) {
      afficher("Envoi trop rapide : patientez quelques secondes puis cliquez à nouveau.", "erreur");
      return;
    }

    if (formulaire.action.indexOf("VOTRE_ID_FORMSPREE") !== -1) {
      afficher(
        "Le formulaire n'est pas encore relié à Formspree. En attendant, écrivez-nous à maceo.birkel@gmail.com ou appelez le 07 59 53 17 84.",
        "erreur"
      );
      return;
    }

    boutonEnvoi.disabled = true;
    boutonEnvoi.textContent = "Envoi en cours…";
    statut.textContent = "";
    statut.className = "formulaire__statut";

    fetch(formulaire.action, {
      method: "POST",
      body: new FormData(formulaire),
      headers: { Accept: "application/json" }
    })
      .then(function (reponse) {
        if (!reponse.ok) throw new Error("Réponse " + reponse.status);
        formulaire.reset();
        tentative = false;
        champs.forEach(function (c) { c.removeAttribute("aria-invalid"); });
        afficher(
          "Merci, votre demande est bien envoyée. Nous vous recontactons sous 24 h avec l'audit de votre annonce.",
          "succes"
        );
      })
      .catch(function () {
        afficher(
          "L'envoi n'a pas fonctionné. Réessayez, ou écrivez-nous directement à maceo.birkel@gmail.com.",
          "erreur"
        );
      })
      .then(function () {
        boutonEnvoi.disabled = false;
        boutonEnvoi.textContent = texteBouton;
        statut.focus();
      });
  });
})();
