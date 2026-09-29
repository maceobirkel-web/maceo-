/* Studio Tourisme — JavaScript minimal :
   1) menu mobile, 2) envoi du formulaire vers Formspree sans quitter la page.
   Sans JavaScript, le menu reste visible et le formulaire s'envoie normalement. */
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

  /* ---------- Apparition des blocs au défilement ---------- */
  var reduit = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduit) {
    var groupes = [".comparatif", ".section__entete", ".grille-4 > *", ".tarifs > *", ".tarifs__notes > li",
      ".etapes > li", ".paiement", ".grille-2 > *", ".offre", ".engagements > li", ".faq__item", ".formulaire", ".coordonnees"];
    var blocs = [];
    groupes.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el, i) {
        el.classList.add("apparait");
        // décalage en cascade pour les éléments d'une même grille
        if (sel.indexOf(">") !== -1) el.style.setProperty("--delai", Math.min(i, 5) * 0.08 + "s");
        blocs.push(el);
      });
    });
    var obs = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("est-visible");
          obs.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });
    blocs.forEach(function (el) { obs.observe(el); });
    document.documentElement.classList.add("anim-pret");
  }

  /* ---------- 2. Formulaire de contact (Formspree) ---------- */
  var formulaire = document.getElementById("formulaire-contact");
  if (!formulaire || !window.fetch || !window.FormData) return;

  var statut = document.getElementById("formulaire-statut");
  var boutonEnvoi = formulaire.querySelector('button[type="submit"]');
  var texteBouton = boutonEnvoi ? boutonEnvoi.textContent : "";

  var afficher = function (message, type) {
    statut.textContent = message;
    statut.className = "formulaire__statut est-" + type;
  };

  formulaire.addEventListener("submit", function (e) {
    e.preventDefault();

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
