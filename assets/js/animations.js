/* Studio Tourisme — animations (GSAP + ScrollTrigger).
   Motifs tirés du skill ui-ux-pro-max : révélation au défilement, apparition
   en cascade, titre mot par mot, barre de progression de lecture.
   Sans JavaScript ou avec « réduire les animations », tout reste affiché. */
(function () {
  "use strict";

  /* ---------- En-tête compact au défilement (sans mouvement, toujours actif) ---------- */
  var entete = document.querySelector(".entete");
  if (entete) {
    var majEntete = function () {
      entete.classList.toggle("est-compacte", window.scrollY > 24);
    };
    majEntete();
    window.addEventListener("scroll", majEntete, { passive: true });
  }

  /* ---------- Halo des cartes qui suit le pointeur (souris uniquement) ---------- */
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll(".carte").forEach(function (carte) {
      carte.addEventListener("pointermove", function (e) {
        var r = carte.getBoundingClientRect();
        carte.style.setProperty("--x", e.clientX - r.left + "px");
        carte.style.setProperty("--y", e.clientY - r.top + "px");
      });
    });
  }

  if (!window.gsap || !window.ScrollTrigger) return;

  var gsap = window.gsap;
  gsap.registerPlugin(window.ScrollTrigger);

  var mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", function () {
    /* Barre de progression de lecture */
    gsap.to(".progression", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.3 }
    });

    /* Titre de l'accroche, mot par mot (la partie en couleur garde sa classe) */
    var titre = document.querySelector(".accroche__titre");
    if (titre) {
      var morceaux = [];
      titre.childNodes.forEach(function (noeud) {
        var accent = noeud.nodeType === 1;
        noeud.textContent.trim().split(/\s+/).forEach(function (mot) {
          if (mot) morceaux.push('<span class="mot' + (accent ? " accent" : "") + '">' + mot + "</span>");
        });
      });
      titre.innerHTML = morceaux.join(" ");
    }

    var intro = gsap.timeline({ defaults: { ease: "expo.out" } });
    intro
      .from(".accroche .section__surtitre", { autoAlpha: 0, y: 16, duration: 0.6 })
      .from(".accroche__titre .mot", { autoAlpha: 0, y: 40, rotateX: -35, duration: 0.9, stagger: 0.05 }, "-=0.3")
      /* Le sous-titre reste visible dès l'affichage (plus grand texte de l'écran : chargement perçu plus rapide) */
      .from(".accroche__sous-titre", { y: 20, duration: 0.9 }, 0)
      .from(".accroche__actions .bouton", { autoAlpha: 0, y: 16, duration: 0.6, stagger: 0.08 }, "-=0.5")
      .from(".accroche__note", { autoAlpha: 0, y: 12, duration: 0.6 }, "-=0.4")
      .from(".comparatif", { autoAlpha: 0, y: 48, scale: 0.96, duration: 1.1 }, 0.35)
      .from(".comparatif__liste li", { autoAlpha: 0, x: -12, duration: 0.5, stagger: 0.05, ease: "power2.out" }, 0.8);

    /* Photo de l'accroche : parallaxe discrète (fond uniquement, jamais le texte) */
    gsap.to(".accroche__photo", {
      yPercent: 8,
      ease: "none",
      scrollTrigger: { trigger: ".accroche", start: "top top", end: "bottom top", scrub: true }
    });

    /* Galerie : les photos se dévoilent en cascade */
    gsap.from(".galerie__photo", {
      autoAlpha: 0,
      y: 40,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
      clearProps: "transform",
      scrollTrigger: { trigger: ".galerie__grille", start: "top 85%" }
    });

    /* Léger parallaxe des halos de l'aurore */
    gsap.to(".aurore", {
      yPercent: 18,
      ease: "none",
      scrollTrigger: { trigger: ".accroche", start: "top top", end: "bottom top", scrub: true }
    });

    /* En-têtes de section : révélation douce */
    gsap.utils.toArray(".section__entete").forEach(function (el) {
      gsap.from(el.children, {
        autoAlpha: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%" }
      });
    });

    /* Grilles : apparition en cascade (Stagger List du skill) */
    var cascades = [
      ".grille-4 .carte",
      ".grille-3 .carte",
      ".photos__colonne",
      ".tarifs .tarif",
      ".tarifs__notes li",
      "#pour-qui .profil",
      ".engagements .engagement",
      ".faq .faq__item",
      ".paiement > div",
      ".coordonnees li"
    ];
    cascades.forEach(function (selecteur) {
      /* Une cascade par conteneur, déclenchée quand ce conteneur arrive à l'écran */
      var groupes = new Map();
      gsap.utils.toArray(selecteur).forEach(function (el) {
        var parent = el.parentElement;
        if (!groupes.has(parent)) groupes.set(parent, []);
        groupes.get(parent).push(el);
      });
      groupes.forEach(function (elements) {
        gsap.from(elements, {
          autoAlpha: 0,
          y: 28,
          scale: 0.96,
          duration: 0.55,
          stagger: { each: 0.08, from: "start" },
          ease: "back.out(1.4)",
          clearProps: "transform",
          scrollTrigger: { trigger: elements[0], start: "top 88%" }
        });
      });
    });

    /* Prix : comptage jusqu'au vrai montant */
    gsap.utils.toArray(".tarif__montant").forEach(function (el) {
      var texte = el.textContent;
      var valeur = parseInt(texte, 10);
      if (!valeur) return;
      var compteur = { v: 0 };
      gsap.to(compteur, {
        v: valeur,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
        onUpdate: function () {
          el.textContent = Math.round(compteur.v) + " €";
        },
        onComplete: function () {
          el.textContent = texte;
        }
      });
    });

    /* Étapes : la ligne se remplit au défilement */
    var etapes = document.querySelector(".etapes");
    if (etapes) {
      gsap.fromTo(
        etapes,
        { "--avancement": 0 },
        {
          "--avancement": 1,
          ease: "none",
          scrollTrigger: { trigger: etapes, start: "top 80%", end: "bottom 55%", scrub: 0.5 }
        }
      );
      gsap.from(".etape", {
        autoAlpha: 0,
        y: 32,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: etapes, start: "top 80%" }
      });
    }

    /* Offre de lancement : la remise apparaît en grand */
    gsap.from(".offre__remise", {
      autoAlpha: 0,
      scale: 0.6,
      duration: 1,
      ease: "elastic.out(1, 0.6)",
      scrollTrigger: { trigger: ".offre", start: "top 80%" }
    });
    gsap.from(".offre", {
      autoAlpha: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: ".offre", start: "top 85%" }
    });

    /* Formulaire */
    gsap.from(".formulaire", {
      autoAlpha: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: ".formulaire", start: "top 85%" }
    });
  });
})();
