/* Studio Tourisme — bandeau de consentement et mesure d'audience.
   L'outil de mesure (GoatCounter, sans cookie) ne se charge qu'après « Accepter ».
   Le choix est gardé 6 mois dans le navigateur, puis redemandé.
   Le lien « Gérer les cookies » du pied de page rouvre le bandeau. */
(function () {
  "use strict";

  /* À REMPLACER : votre code GoatCounter (voir README), par ex. "studio-tourisme" */
  var CODE_GOATCOUNTER = "VOTRE_CODE_GOATCOUNTER";

  var CLE = "st-consentement";
  var DUREE = 182 * 24 * 60 * 60 * 1000; /* 6 mois */

  var lire = function () {
    try {
      var choix = JSON.parse(localStorage.getItem(CLE));
      if (choix && Date.now() - choix.date < DUREE) return choix.valeur;
    } catch (e) {}
    return null;
  };

  var enregistrer = function (valeur) {
    try {
      localStorage.setItem(CLE, JSON.stringify({ valeur: valeur, date: Date.now() }));
    } catch (e) {}
  };

  var chargerMesure = function () {
    if (CODE_GOATCOUNTER.indexOf("VOTRE_") === 0 || document.querySelector("script[data-goatcounter]")) return;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://gc.zgo.at/count.js";
    s.setAttribute("data-goatcounter", "https://" + CODE_GOATCOUNTER + ".goatcounter.com/count");
    document.body.appendChild(s);
  };

  var bandeau = null;

  var fermer = function (valeur) {
    enregistrer(valeur);
    bandeau.hidden = true;
    if (valeur === "accepte") chargerMesure();
  };

  var ouvrir = function () {
    if (!bandeau) {
      bandeau = document.createElement("section");
      bandeau.className = "cookies";
      bandeau.setAttribute("aria-labelledby", "cookies-titre");
      bandeau.innerHTML =
        '<p class="cookies__titre" id="cookies-titre">Mesure d’audience</p>' +
        '<p class="cookies__texte">Avec votre accord, nous comptons les visites de façon anonyme pour améliorer le site. ' +
        'Aucun cookie publicitaire, aucune revente de données. <a href="confidentialite.html#cookies">En savoir plus</a></p>' +
        '<div class="cookies__actions">' +
        '<button type="button" class="bouton bouton--petit" data-choix="refuse">Refuser</button>' +
        '<button type="button" class="bouton bouton--petit" data-choix="accepte">Accepter</button>' +
        "</div>";
      bandeau.addEventListener("click", function (e) {
        var bouton = e.target.closest("[data-choix]");
        if (bouton) fermer(bouton.getAttribute("data-choix"));
      });
      document.body.appendChild(bandeau);
    }
    bandeau.hidden = false;
  };

  var choix = lire();
  if (choix === "accepte") chargerMesure();
  else if (choix === null) ouvrir();

  document.querySelectorAll("[data-cookies]").forEach(function (lien) {
    lien.addEventListener("click", function () {
      ouvrir();
      bandeau.querySelector("[data-choix]").focus();
    });
  });
})();
