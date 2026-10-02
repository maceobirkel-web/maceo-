/* Studio Tourisme — commande en ligne, sans serveur.
   1) nouveau-client.html : Maceo prépare le message à envoyer au client après l'appel ;
   2) commande.html : le client remplit le questionnaire et valide la commande (FormSubmit) ;
   3) merci.html : le client règle l'acompte (Stripe ou virement).
   Les réglages (adresse, liens Stripe, IBAN) sont dans commande-config.js. */
(function () {
  "use strict";

  var CONFIG = window.STUDIO_COMMANDE || {};
  var PACKS = window.STUDIO_PACKS || {};
  var REMISE_LANCEMENT = 0.3;
  var PART_ACOMPTE = 0.3;

  /* ---------- Outils communs ---------- */
  var $ = function (selecteur, racine) { return (racine || document).querySelector(selecteur); };
  var $$ = function (selecteur, racine) { return Array.prototype.slice.call((racine || document).querySelectorAll(selecteur)); };

  var estConfigure = function (valeur) {
    return typeof valeur === "string" && valeur !== "" && valeur.indexOf("A_CONFIGURER") === -1;
  };

  var euros = function (montant) {
    var entier = Math.round(montant * 100) % 100 === 0;
    return montant.toLocaleString("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: entier ? 0 : 2 });
  };

  var arrondi = function (montant) { return Math.round(montant * 100) / 100; };

  var calculer = function (cle, logements, lancement) {
    var pack = PACKS[cle];
    if (!pack) return null;
    var n = Math.max(1, parseInt(logements, 10) || 1);
    var brut = pack.prix * n;
    var total = arrondi(lancement ? brut * (1 - REMISE_LANCEMENT) : brut);
    var acompte = arrondi(total * PART_ACOMPTE);
    return { pack: pack, cle: cle, n: n, lancement: !!lancement, brut: brut, total: total, acompte: acompte, solde: arrondi(total - acompte) };
  };

  var parametres = new URLSearchParams(window.location.search);

  var urlPage = function (page, donnees) {
    var url = new URL(page, window.location.href);
    url.search = "";
    url.hash = "";
    Object.keys(donnees || {}).forEach(function (cle) {
      if (donnees[cle] !== "" && donnees[cle] !== undefined && donnees[cle] !== null) url.searchParams.set(cle, donnees[cle]);
    });
    return url.toString();
  };

  var lienStripe = function (cle, type, email, lancement) {
    var liens = (CONFIG.stripe || {})[cle] || {};
    if (!estConfigure(liens[type])) return "";
    var url = new URL(liens[type]);
    if (email) url.searchParams.set("prefilled_email", email);
    if (lancement && estConfigure(CONFIG.codeLancement)) url.searchParams.set("prefilled_promo_code", CONFIG.codeLancement);
    return url.toString();
  };

  var virementConfigure = function () {
    var v = CONFIG.virement || {};
    return estConfigure(v.titulaire) && estConfigure(v.iban);
  };

  var texteVirement = function (reference) {
    var v = CONFIG.virement || {};
    return "Titulaire : " + v.titulaire + "\nIBAN : " + v.iban + (estConfigure(v.bic) ? "\nBIC : " + v.bic : "") +
      "\nRéférence à indiquer : " + reference;
  };

  var prenom = function (nom) { return (nom || "").trim().split(/\s+/)[0] || ""; };

  var resumeMontant = function (c) {
    var ligne = "Pack " + c.pack.nom + ", " + c.n + (c.n > 1 ? " logements" : " logement") + " : ";
    if (c.lancement) return ligne + euros(c.total) + " au lieu de " + euros(c.brut) + " (offre de lancement, -30 %)";
    return ligne + euros(c.total);
  };

  /* ==========================================================================
     1. Page « nouveau client » (pour Maceo)
     ========================================================================== */
  var initLanceur = function (formulaire) {
    var sortie = $("#lanceur-resultat");
    var lienChamp = $("#lanceur-lien");
    var apercu = $("#lanceur-apercu");
    var boutonMail = $("#lanceur-mail");
    var boutonSms = $("#lanceur-sms");
    var boutonPartage = $("#lanceur-partage");
    var boutonCopie = $("#lanceur-copie");
    var statut = $("#lanceur-statut");
    var avertissement = $("#lanceur-avertissement");
    var messageCourant = { sujet: "", long: "", court: "", lien: "" };

    if (navigator.share) boutonPartage.hidden = false;

    var activer = function (lien, href) {
      if (href) {
        lien.href = href;
        lien.removeAttribute("aria-disabled");
      } else {
        lien.removeAttribute("href");
        lien.setAttribute("aria-disabled", "true");
      }
    };

    var lire = function () {
      var donnees = new FormData(formulaire);
      return {
        mode: donnees.get("mode") || "nouveau",
        nom: (donnees.get("nom") || "").trim(),
        email: (donnees.get("email") || "").trim(),
        tel: (donnees.get("tel") || "").replace(/[^\d+]/g, ""),
        pack: donnees.get("pack") || "",
        n: donnees.get("logements") || "1",
        lancement: donnees.get("lancement") === "oui"
      };
    };

    var signature = (CONFIG.signature || "Studio Tourisme");

    var messageNouveau = function (d, c) {
      var lien = urlPage("commande.html", { p: c.cle, n: c.n, l: c.lancement ? "1" : "", nom: d.nom, email: d.email, tel: d.tel });
      var cgv = urlPage("cgv.html");
      var bonjour = "Bonjour" + (prenom(d.nom) ? " " + prenom(d.nom) : "") + ",";
      var long = [
        bonjour,
        "",
        "Merci pour notre échange. Comme convenu, voici le récapitulatif de l'offre :",
        "",
        "- " + resumeMontant(c),
        "- Contenu : " + c.pack.contenu.join(", "),
        "- Délai : " + c.pack.delai + " après réception de l'acompte et de vos éléments",
        "- Paiement : acompte de 30 % (" + euros(c.acompte) + ") à la commande, solde de " + euros(c.solde) + " à la livraison, après votre validation",
        "- Deux séries de modifications incluses",
        "",
        "Pour valider la commande, il vous suffit de remplir ce formulaire (environ 5 minutes). Vous y indiquez les informations sur votre logement et vos photos, puis vous réglez l'acompte en ligne :",
        lien,
        "",
        "Conditions générales de vente : " + cgv,
        "",
        "Rien n'est dû tant que vous n'avez pas validé ce formulaire. Je reste disponible pour toute question.",
        "",
        "Bien à vous,",
        signature
      ].join("\n");
      var court = bonjour + " merci pour notre échange. Voici le lien pour valider votre commande Studio Tourisme (pack " + c.pack.nom + ", " +
        euros(c.total) + ") : " + lien + " Rien n'est dû avant validation. " + prenom(signature);
      return { sujet: "Votre commande Studio Tourisme : pack " + c.pack.nom, long: long, court: court, lien: lien };
    };

    var messageSolde = function (d, c) {
      var stripe = lienStripe(c.cle, "solde", d.email, c.lancement);
      var reference = "Solde " + c.pack.nom + " " + d.nom;
      var bonjour = "Bonjour" + (prenom(d.nom) ? " " + prenom(d.nom) : "") + ",";
      var moyens = [];
      if (stripe) {
        moyens.push("Paiement par carte (sécurisé par Stripe) :\n" + stripe +
          (c.n > 1 ? "\nIndiquez " + c.n + " dans le champ « quantité »." : ""));
      }
      if (virementConfigure()) moyens.push("Paiement par virement :\n" + texteVirement(reference));
      if (!moyens.length) moyens.push("Je vous transmets les coordonnées de paiement dans un prochain message.");
      var long = [
        bonjour,
        "",
        "Merci pour votre validation. Le solde de votre commande s'élève à " + euros(c.solde) + " (" + resumeMontant(c) + ", acompte de " + euros(c.acompte) + " déjà versé).",
        "",
        moyens.join("\n\n"),
        "",
        "Les fichiers définitifs, en pleine qualité, vous sont envoyés dès réception du paiement.",
        "",
        "Bien à vous,",
        signature
      ].join("\n");
      var court = bonjour + " merci pour votre validation. Le solde de votre commande Studio Tourisme est de " + euros(c.solde) + "." +
        (stripe ? " Paiement par carte : " + stripe : " Je vous envoie les coordonnées de paiement par e-mail.") + " " + prenom(signature);
      return { sujet: "Studio Tourisme : solde de votre commande", long: long, court: court, lien: stripe };
    };

    var mettreAJour = function () {
      var d = lire();
      var c = calculer(d.pack, d.n, d.lancement);
      $$("[data-mode]").forEach(function (el) { el.hidden = el.getAttribute("data-mode") !== d.mode; });

      if (!c) {
        sortie.hidden = true;
        return;
      }
      sortie.hidden = false;

      messageCourant = d.mode === "solde" ? messageSolde(d, c) : messageNouveau(d, c);
      apercu.textContent = messageCourant.long;
      lienChamp.value = messageCourant.lien;
      $("#lanceur-lien-bloc").hidden = !messageCourant.lien;

      var alertes = [];
      if (d.mode === "solde" && !lienStripe(c.cle, "solde") && !virementConfigure()) {
        alertes.push("Aucun moyen de paiement n'est encore configuré (voir README, partie 7).");
      }
      if (!d.email) alertes.push("Ajoutez l'e-mail du client pour activer l'envoi par e-mail.");
      if (!d.tel) alertes.push("Ajoutez son téléphone pour activer l'envoi par SMS.");
      avertissement.textContent = alertes.join(" ");
      avertissement.hidden = !alertes.length;

      activer(boutonMail, d.email ? "mailto:" + encodeURIComponent(d.email) + "?subject=" + encodeURIComponent(messageCourant.sujet) +
        "&body=" + encodeURIComponent(messageCourant.long) : "");
      activer(boutonSms, d.tel ? "sms:" + d.tel + "?&body=" + encodeURIComponent(messageCourant.court) : "");
    };

    var annoncer = function (texte) {
      statut.textContent = texte;
      window.setTimeout(function () { statut.textContent = ""; }, 4000);
    };

    formulaire.addEventListener("input", mettreAJour);
    formulaire.addEventListener("change", mettreAJour);
    formulaire.addEventListener("submit", function (e) { e.preventDefault(); });

    boutonPartage.addEventListener("click", function () {
      navigator.share({ title: messageCourant.sujet, text: messageCourant.long }).catch(function () {});
    });

    boutonCopie.addEventListener("click", function () {
      var texte = messageCourant.long;
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(texte).then(function () { annoncer("Message copié."); }, function () { annoncer("La copie n'a pas fonctionné."); });
      } else {
        apercu.focus();
        annoncer("Sélectionnez le texte du message pour le copier.");
      }
    });

    $("#lanceur-reinitialiser").addEventListener("click", function () {
      formulaire.reset();
      mettreAJour();
      $("#lanceur-nom").focus();
    });

    mettreAJour();
  };

  /* ==========================================================================
     2. Page « commande » (pour le client)
     ========================================================================== */
  /* Copie de la commande vers le robot Make, en parallèle de FormSubmit.
     sendBeacon : l'envoi continue même si la page change, et ne bloque jamais le client. */
  var envoyerAuRobot = function (formulaire, c, statut, demarrage) {
    if (!estConfigure(CONFIG.make) || !navigator.sendBeacon) return;
    if (formulaire.elements._honey && formulaire.elements._honey.value) return;

    var maintenant = new Date();
    var deuxChiffres = function (n) { return (n < 10 ? "0" : "") + n; };
    var donnees = new URLSearchParams();
    donnees.append("reference",
      "ST-" + maintenant.getFullYear() + deuxChiffres(maintenant.getMonth() + 1) + deuxChiffres(maintenant.getDate()) +
      "-" + deuxChiffres(maintenant.getHours()) + deuxChiffres(maintenant.getMinutes()) +
      "-" + Math.random().toString(36).slice(2, 6).toUpperCase());
    donnees.append("date_commande", maintenant.toISOString());

    /* Tous les champs remplis par le client (les champs techniques commencent par « _ ») */
    new FormData(formulaire).forEach(function (valeur, nom) {
      if (nom.charAt(0) !== "_" && typeof valeur === "string") donnees.append(nom, valeur);
    });

    /* Valeurs calculées, en chiffres, plus simples à utiliser dans Make */
    donnees.append("statut", statut);
    donnees.append("demarrage", demarrage); /* pro | immediat | apres14j */
    donnees.append("montant_total", String(c.total));
    donnees.append("montant_acompte", String(c.acompte));
    donnees.append("montant_solde", String(c.solde));

    try { navigator.sendBeacon(CONFIG.make, donnees); } catch (erreur) { /* le robot est un bonus : la commande part quand même */ }
  };

  var initCommande = function (formulaire) {
    var lancement = parametres.get("l") === "1";
    var recap = $("#commande-recap");

    // Préremplissage depuis le lien envoyé par Maceo
    var preremplir = function (nom, valeur) {
      var champ = formulaire.elements[nom];
      if (champ && valeur) champ.value = valeur;
    };
    preremplir("nom", parametres.get("nom"));
    preremplir("email", parametres.get("email"));
    preremplir("telephone", parametres.get("tel"));
    preremplir("nombre_logements", parametres.get("n"));
    var packDemande = parametres.get("p");
    if (packDemande && PACKS[packDemande]) {
      var radio = $('input[name="pack_cle"][value="' + packDemande + '"]', formulaire);
      if (radio) radio.checked = true;
    }

    formulaire.action = "https://formsubmit.co/" + CONFIG.formsubmit;

    // Affiche un bloc et réactive ses champs, ou le masque et les exclut de l'envoi
    var basculer = function (bloc, visible) {
      bloc.hidden = !visible;
      $$("input, textarea, select", bloc).forEach(function (champ) {
        champ.disabled = !visible;
      });
    };

    var calculCourant = function () {
      var cle = (formulaire.elements.pack_cle && formulaire.elements.pack_cle.value) || "";
      return calculer(cle, formulaire.elements.nombre_logements.value, lancement);
    };

    var mettreAJour = function () {
      var c = calculCourant();
      var statut = formulaire.elements.statut_client.value;

      $$("[data-statut]").forEach(function (bloc) { basculer(bloc, bloc.getAttribute("data-statut") === statut); });
      $$("[data-packs]").forEach(function (bloc) {
        basculer(bloc, !!c && bloc.getAttribute("data-packs").split(" ").indexOf(c.cle) !== -1);
      });
      basculer($("#bloc-lien-photos"), formulaire.elements.mode_photos.value === "lien");

      if (!c) {
        recap.innerHTML = "<p>Choisissez un pack ci-dessous pour afficher le récapitulatif.</p>";
        return;
      }
      var lignes = [
        ["Pack", c.pack.nom],
        ["Logements", String(c.n)],
        ["Prix", c.lancement ? "<s>" + euros(c.brut) + "</s> " + euros(c.total) + " (offre de lancement, -30 %)" : euros(c.total)],
        ["Acompte à la commande (30 %)", "<strong>" + euros(c.acompte) + "</strong>"],
        ["Solde à la livraison", euros(c.solde)],
        ["Délai", c.pack.delai + " après l'acompte et la réception de vos éléments"]
      ];
      recap.innerHTML =
        "<dl class=\"recap__liste\">" +
        lignes.map(function (l) { return "<div><dt>" + l[0] + "</dt><dd>" + l[1] + "</dd></div>"; }).join("") +
        "</dl><p class=\"recap__contenu\"><strong>Inclus :</strong> " + c.pack.contenu.join(", ") + ".</p>" +
        "<p class=\"recap__mention\">Prix nets. TVA non applicable, art. 293 B du CGI.</p>";
    };

    formulaire.addEventListener("change", mettreAJour);
    formulaire.elements.nombre_logements.addEventListener("input", mettreAJour);

    formulaire.addEventListener("submit", function (e) {
      var c = calculCourant();
      if (!c) {
        e.preventDefault();
        $('input[name="pack_cle"]', formulaire).focus();
        return;
      }
      var statut = formulaire.elements.statut_client.value;
      var demarrage = statut === "particulier"
        ? (formulaire.elements.demarrage_anticipe && formulaire.elements.demarrage_anticipe.checked ? "immediat" : "apres14j")
        : "pro";
      var email = formulaire.elements.email.value.trim();

      formulaire.elements.pack.value = c.pack.nom;
      formulaire.elements.offre_lancement.value = c.lancement ? "Oui (-30 %)" : "Non";
      formulaire.elements.prix_total.value = euros(c.total);
      formulaire.elements.acompte.value = euros(c.acompte);
      formulaire.elements.solde.value = euros(c.solde);
      formulaire.elements._subject.value = "Nouvelle commande " + c.pack.nom + " - " + formulaire.elements.nom.value.trim();
      formulaire.elements._next.value = urlPage("merci.html", {
        p: c.cle, n: c.n, l: c.lancement ? "1" : "", email: email, d: demarrage
      });

      envoyerAuRobot(formulaire, c, statut, demarrage);

      var bouton = $('button[type="submit"]', formulaire);
      bouton.disabled = true;
      bouton.textContent = "Envoi en cours…";
    });

    // Retour arrière depuis la page FormSubmit : réactive le bouton
    window.addEventListener("pageshow", function () {
      var bouton = $('button[type="submit"]', formulaire);
      bouton.disabled = false;
      bouton.textContent = bouton.getAttribute("data-texte");
    });

    mettreAJour();
  };

  /* ==========================================================================
     3. Page « merci » : paiement de l'acompte
     ========================================================================== */
  var initMerci = function (racine) {
    var c = calculer(parametres.get("p"), parametres.get("n"), parametres.get("l") === "1");
    var email = parametres.get("email") || "";
    var demarrage = parametres.get("d");

    if (!c) {
      $("#merci-paiement").hidden = true;
      $("#merci-inconnu").hidden = false;
      return;
    }

    $$("[data-montant='acompte']", racine).forEach(function (el) { el.textContent = euros(c.acompte); });
    $("#merci-recap").textContent = resumeMontant(c) + ".";

    var stripe = lienStripe(c.cle, "acompte", email, c.lancement);
    if (stripe) {
      $("#merci-stripe").hidden = false;
      $("#merci-stripe-lien").href = stripe;
      $("#merci-quantite").hidden = c.n === 1;
      $("#merci-quantite-n").textContent = String(c.n);
    }
    if (virementConfigure()) {
      $("#merci-virement").hidden = false;
      $("#merci-virement-texte").textContent = texteVirement("Acompte " + c.pack.nom + (email ? " " + email : ""));
    }
    if (!stripe && !virementConfigure()) $("#merci-manuel").hidden = false;

    $("#merci-delai").textContent = c.pack.delai;
    $$("[data-demarrage]", racine).forEach(function (el) { el.hidden = el.getAttribute("data-demarrage") !== demarrage; });
  };

  /* ---------- Lancement selon la page ---------- */
  var lanceur = document.getElementById("lanceur");
  if (lanceur) initLanceur(lanceur);
  var commande = document.getElementById("formulaire-commande");
  if (commande) initCommande(commande);
  var merci = document.getElementById("merci");
  if (merci) initMerci(merci);
})();
