/* ── ACE-fietsen · NL/DE language switch ────────────────────────── */
(function () {
  "use strict";

  var STORAGE_KEY = "ace-lang";

  var T = {
    index: {
      nl: {
        _title: "ACE-fietsen · Onderhoud & reparatie van ligfietsen en trikes in Winterswijk",
        _desc: "Achterhoek Cycle Engineering (ACE-fietsen): onderhoud en reparatie van uw ligfiets of trike in Winterswijk. Enkel op afspraak — vaak dezelfde dag weer klaar.",
        "skip": "Ga direct naar de inhoud",
        "nav-welkom": "Welkom",
        "nav-over": "Over ACE",
        "nav-afspraak": "Afspraak maken",
        "cta": "Afspraak maken",
        "eyebrow": "Winterswijk &middot; ligfietsen &amp; trikes",
        "h1": "Welkom bij Achterhoek Cycle Engineering",
        "lead": "Heeft uw ligfiets of trike een onderhoudsbeurt of reparatie nodig? Dan bent u hier aan het goede adres.",
        "svc-title": "Waarvoor kunt u bij ACE terecht?",
        "svc-sub": "Specialist in ligfietsen en trikes &mdash; van kleine beurt tot grotere reparatie.",
        "card1-t": "Onderhoud &amp; reparatie",
        "card1-p": "Uw ligfiets of trike krijgt een professionele onderhoudsbeurt of reparatie in onze werkplaats in Winterswijk.",
        "card2-t": "Snel gereed",
        "card2-p": "Maak een afspraak en uw fiets kan vaak dezelfde dag alweer mee naar huis.",
        "card3-t": "Persoonlijke aandacht",
        "card3-p": "Eerlijk advies, degelijk vakwerk en tijd voor elke klant en elke fiets &mdash; ook voor een goed gesprek over ligfietsen onder het genot van een kop thee of koffie.",
        "over-title": "Over ACE",
        "about-1": "<strong>Achterhoek Cycle Engineering</strong> is de plek voor het onderhoud van uw ligfiets of trike in de Achterhoek.",
        "about-2": "Mijn naam is Wytske de Jong. In 2023 kocht ik een prachtige tweedehands velomobiel. Toen deze mankementen had die ik zelf niet meer opgelost kreeg, kwam ik bij Mark Burgers van Advanced Cycle Engineering in Winterswijk terecht. Tijdens de reparatie zijn we aan de praat geraakt over het fietsenmakersvak. Hij vertelde dat hij een opvolger zocht voor de onderhoudstak van het bedrijf. Zo kwam het dat ik in de zomer van 2024 in de leer ben gegaan bij Mark en zijn team. Zij hebben mij de fijne kneepjes en de liefde voor het vak geleerd.",
        "about-3": "Na 1,5 jaar meedraaien heb ik in 2025 de knoop doorgehakt om per 1 januari 2026 het onderhoudsstokje over te nemen van Mark. Zo is Achterhoek Cycle Engineering ontstaan. Een nieuwe naam, maar nog wel de oude vertrouwde locatie in Winterswijk. Op die manier blijft de kennis en service die u gewend bent gewoon bestaan &mdash; maar dan in een nieuw jasje.",
        "about-4": "Vanaf 1 januari 2026 bent u voor al het onderhoud aan uw ligfiets of trike van harte welkom bij Achterhoek Cycle Engineering. Wat u van mij mag verwachten? Eerlijk advies, degelijk vakwerk en persoonlijke aandacht. Ik neem de tijd voor elke klant en elke fiets, zodat u met een goed gevoel weer op pad kunt.",
        "appt-title": "Afspraak maken",
        "appt-sub": "Kies de manier die u het beste uitkomt om uw afspraak te maken.",
        "book-p": "Ik werk <strong>enkel op afspraak</strong>, zodat ik altijd genoeg tijd voor u en uw fiets kan reserveren. U kunt telefonisch, via e-mail of WhatsApp een afspraak maken. Vaak is het mogelijk om uw fiets nog dezelfde dag weer mee naar huis te nemen.",
        "c-phone": "Telefoon",
        "c-wa-label": "WhatsApp",
        "c-wa": "Stuur direct een bericht",
        "c-hours": "Telefonisch bereikbaar",
        "c-hours-v": "di–vr, 10:00–17:00",
        "c-email": "E-mail",
        "c-addr": "Bezoekadres",
        "c-addr-v": "Weurden 60, 7101 NL Winterswijk",
        "ft-brand": "Achterhoek Cycle Engineering<br/>Ligfietsen en trikes &middot; Winterswijk",
        "ft-contact": "Contact",
        "ft-menu": "Menu",
        "ft-m1": "Welkom bij ACE",
        "ft-m2": "Over ACE",
        "ft-m3": "Afspraak maken",
        "ft-m4": "Privacy policy",
        "ft-hours": "Enkel open op afspraak"
      },
      de: {
        _title: "ACE-fietsen · Wartung & Reparatur von Liegerädern und Trikes in Winterswijk",
        _desc: "Achterhoek Cycle Engineering (ACE-fietsen): Wartung und Reparatur von Liegerädern und Trikes in Winterswijk. Nur nach Termin — oft noch am selben Tag wieder fertig.",
        "skip": "Direkt zum Inhalt",
        "nav-welkom": "Willkommen",
        "nav-over": "Über ACE",
        "nav-afspraak": "Termin vereinbaren",
        "cta": "Termin vereinbaren",
        "eyebrow": "Winterswijk &middot; Liegeräder &amp; Trikes",
        "h1": "Willkommen bei Achterhoek Cycle Engineering",
        "lead": "Brauchen Ihr Liegerad oder Trike eine Wartung oder Reparatur? Dann sind Sie hier genau richtig.",
        "svc-title": "Womit Sie sich an ACE wenden können",
        "svc-sub": "Spezialist für Liegeräder und Trikes &mdash; von der kleinen Wartung bis zur größeren Reparatur.",
        "card1-t": "Wartung &amp; Reparatur",
        "card1-p": "Ihr Liegerad oder Trike erhält in unserer Werkstatt in Winterswijk eine professionelle Wartung oder Reparatur.",
        "card2-t": "Schnell fertig",
        "card2-p": "Vereinbaren Sie einen Termin – Ihr Rad ist oft noch am selben Tag wieder startklar.",
        "card3-t": "Persönliche Betreuung",
        "card3-p": "Ehrliche Beratung, sorgfältige Handwerksarbeit und Zeit für jeden Kunden und jedes Rad &mdash; auch für ein gutes Gespräch über Liegeräder bei einer Tasse Tee oder Kaffee.",
        "over-title": "Über ACE",
        "about-1": "<strong>Achterhoek Cycle Engineering</strong> ist die Anlaufstelle für die Wartung Ihres Liegerads oder Trikes im Achterhoek.",
        "about-2": "Mein Name ist Wytske de Jong. 2023 kaufte ich eine wunderschöne gebrauchte Velomobile. Als sie Probleme hatte, die ich selbst nicht mehr lösen konnte, landete ich bei Mark Burgers von Advanced Cycle Engineering in Winterswijk. Während der Reparatur kamen wir auf den Beruf des Fahrradmechanikers zu sprechen. Er erzählte, dass er einen Nachfolger für den Wartungsbereich des Unternehmens suchte. So kam es, dass ich im Sommer 2024 bei Mark und seinem Team in die Lehre ging. Sie haben mir die Feinheiten und die Liebe zum Handwerk beigebracht.",
        "about-3": "Nach 1,5 Jahren Mitarbeit habe ich 2025 den Entschluss gefasst, zum 1. Januar 2026 den Wartungsbereich von Mark zu übernehmen. So entstand Achterhoek Cycle Engineering. Ein neuer Name, aber noch an der bekannten, vertrauten Adresse in Winterswijk. Damit bleiben das Wissen und der Service, an die Sie gewöhnt sind, einfach bestehen &mdash; nur in einem neuen Gewand.",
        "about-4": "Ab dem 1. Januar 2026 sind Sie für die gesamte Wartung Ihres Liegerads oder Trikes bei Achterhoek Cycle Engineering herzlich willkommen. Was dürfen Sie von mir erwarten? Ehrliche Beratung, sorgfältige Handwerksarbeit und persönliche Betreuung. Ich nehme mir Zeit für jeden Kunden und jedes Rad, damit Sie mit gutem Gefühl wieder losfahren können.",
        "appt-title": "Termin vereinbaren",
        "appt-sub": "Wählen Sie die Möglichkeit, die Ihnen am besten passt, um Ihren Termin zu machen.",
        "book-p": "Ich arbeite <strong>nur nach Termin</strong>, damit ich mir immer genug Zeit für Sie und Ihr Rad nehmen kann. Sie können telefonisch, per E-Mail oder über WhatsApp einen Termin vereinbaren. Oft ist es möglich, Ihr Rad noch am selben Tag wieder mit nach Hause zu nehmen.",
        "c-phone": "Telefon",
        "c-wa-label": "WhatsApp",
        "c-wa": "Direkt eine Nachricht senden",
        "c-hours": "Telefonisch erreichbar",
        "c-hours-v": "Di–Fr, 10:00–17:00",
        "c-email": "E-Mail",
        "c-addr": "Adresse",
        "c-addr-v": "Weurden 60, 7101 NL Winterswijk",
        "ft-brand": "Achterhoek Cycle Engineering<br/>Liegeräder und Trikes &middot; Winterswijk",
        "ft-contact": "Kontakt",
        "ft-menu": "Menü",
        "ft-m1": "Willkommen bei ACE",
        "ft-m2": "Über ACE",
        "ft-m3": "Termin vereinbaren",
        "ft-m4": "Datenschutzerklärung",
        "ft-hours": "Nur nach Termin"
      }
    },
    privacy: {
      nl: {
        _title: "Privacy policy · ACE-fietsen",
        _desc: "Privacy policy van Achterhoek Cycle Engineering (ACE-fietsen).",
        "skip": "Ga direct naar de inhoud",
        "nav-welkom": "Welkom",
        "nav-over": "Over ACE",
        "nav-afspraak": "Afspraak maken",
        "cta": "Afspraak maken",
        "p-title": "Privacy policy",
        "p-sub": "Wie wij zijn en wat wij doen met uw gegevens.",
        "pr-1": "Achterhoek Cycle Engineering hecht veel waarde aan de bescherming van uw persoonsgegevens. In deze privacy policy willen we heldere en transparante informatie geven over hoe wij omgaan met persoonsgegevens.",
        "pr-2": "Wij doen er alles aan om uw privacy te waarborgen en gaan daarom zorgvuldig om met persoonsgegevens. Achterhoek Cycle Engineering houdt zich in alle gevallen aan de toepasselijke wet- en regelgeving, waaronder de Algemene Verordening Gegevensbescherming. Dit brengt met zich mee dat wij in ieder geval:",
        "pr-3a": "uw persoonsgegevens verwerken in overeenstemming met het doel waarvoor deze zijn verstrekt; deze doelen en het type persoonsgegevens zijn beschreven in deze privacy policy;",
        "pr-3b": "verwerking van uw persoonsgegevens beperken tot enkel die gegevens welke minimaal nodig zijn voor de doeleinden waarvoor ze worden verwerkt;",
        "pr-3c": "vragen om uw uitdrukkelijke toestemming als wij deze nodig hebben voor de verwerking van uw persoonsgegevens;",
        "pr-3d": "passende technische en organisatorische maatregelen hebben genomen zodat de beveiliging van uw persoonsgegevens gewaarborgd is;",
        "pr-3e": "geen persoonsgegevens doorgeven aan andere partijen, tenzij dit nodig is voor de uitvoering van de doeleinden waarvoor ze zijn verstrekt;",
        "pr-3f": "op de hoogte zijn van uw rechten omtrent uw persoonsgegevens, u hierop willen wijzen en deze respecteren.",
        "pr-4": "Als Achterhoek Cycle Engineering zijn wij verantwoordelijk voor de verwerking van uw persoonsgegevens. Indien u na het doornemen van onze privacy policy, of in algemenere zin, vragen heeft hierover of contact met ons wenst op te nemen, kan dit via de contactgegevens onder aan dit document.",
        "pr-h1": "Verwerking van persoonsgegevens van klanten of leveranciers",
        "pr-v1": "Persoonsgegevens van klanten of leveranciers worden door Achterhoek Cycle Engineering verwerkt ten behoeve van de volgende doelstellingen:",
        "pr-v2": "administratieve doeleinden;",
        "pr-v3": "communicatie over de opdracht en/of uitnodigingen;",
        "pr-v4": "het uitvoering geven aan of het uitgeven van een opdracht.",
        "pr-v5": "Grondslag voor deze persoonsgegevens is:",
        "pr-v6": "de overeengekomen opdracht.",
        "pr-d0": "Voor de bovenstaande doelstellingen kan Achterhoek Cycle Engineering de volgende persoonsgegevens van u vragen:",
        "pr-d1": "voornaam;",
        "pr-d2": "tussenvoegsel;",
        "pr-d3": "achternaam;",
        "pr-d4": "telefoonnummer;",
        "pr-d5": "e-mailadres.",
        "pr-d6": "Uw persoonsgegevens worden door Achterhoek Cycle Engineering opgeslagen ten behoeve van bovengenoemde verwerkingen voor de periode: gedurende de looptijd van de overeenkomst en daarna alleen in de financiële administratie voor maximaal 7 jaar.",
        "pr-h2": "Contactgegevens",
        "pr-c1": "Achterhoek Cycle Engineering (ACE-fietsen)<br />\n          Weurden 60, 7101 NL Winterswijk<br />\n          Tel. en WhatsApp: <a href=\"tel:+31638731057\">+31 6 38 73 10 57</a><br />\n          E-mail: <a href=\"mailto:info@ace-fietsen.nl\">info@ace-fietsen.nl</a><br />\n          KVK: 98809369",
        "ft-back": "Terug naar de homepage"
      },
      de: {
        _title: "Datenschutzerklärung · ACE-fietsen",
        _desc: "Datenschutzerklärung von Achterhoek Cycle Engineering (ACE-fietsen).",
        "skip": "Direkt zum Inhalt",
        "nav-welkom": "Willkommen",
        "nav-over": "Über ACE",
        "nav-afspraak": "Termin vereinbaren",
        "cta": "Termin vereinbaren",
        "p-title": "Datenschutzerklärung",
        "p-sub": "Wer wir sind und was wir mit Ihren Daten tun.",
        "pr-1": "Achterhoek Cycle Engineering legt großen Wert auf den Schutz Ihrer personenbezogenen Daten. In dieser Datenschutzerklärung möchten wir klare und transparente Informationen darüber geben, wie wir mit personenbezogenen Daten umgehen.",
        "pr-2": "Wir tun alles, um Ihren Datenschutz zu gewährleisten, und gehen daher sorgfältig mit personenbezogenen Daten um. Achterhoek Cycle Engineering hält sich in allen Fällen an die maßgeblichen Gesetze und Vorschriften, einschließlich der Datenschutz-Grundverordnung (DSGVO). Dies bedeutet mindestens, dass wir:",
        "pr-3a": "Ihre personenbezogenen Daten im Einklang mit dem Zweck verarbeiten, für den sie bereitgestellt wurden; diese Zwecke und die Art der personenbezogenen Daten sind in dieser Datenschutzerklärung beschrieben;",
        "pr-3b": "die Verarbeitung Ihrer personenbezogenen Daten auf solche Daten beschränken, die für die Verarbeitungsziele minimal erforderlich sind;",
        "pr-3c": "um Ihre ausdrückliche Einwilligung bitten, wenn wir sie für die Verarbeitung Ihrer personenbezogenen Daten benötigen;",
        "pr-3d": "angemessene technische und organisatorische Maßnahmen ergriffen haben, damit der Schutz Ihrer personenbezogenen Daten gewährleistet ist;",
        "pr-3e": "keine personenbezogenen Daten an Dritte weitergeben, es sei denn, dies ist für die Ausführung der Zwecke erforderlich, für die die Daten bereitgestellt wurden;",
        "pr-3f": "Ihre Rechte im Hinblick auf Ihre personenbezogenen Daten kennen, Sie auf diese hinweisen und sie respektieren.",
        "pr-4": "Als Achterhoek Cycle Engineering sind wir für die Verarbeitung Ihrer personenbezogenen Daten verantwortlich. Sollten Sie nach der Lektüre unserer Datenschutzerklärung, oder allgemeiner, Fragen dazu haben oder Kontakt zu uns aufnehmen möchten, können Sie dies über die Kontaktangaben am Ende dieses Dokuments tun.",
        "pr-h1": "Verarbeitung personenbezogener Daten von Kunden oder Lieferanten",
        "pr-v1": "Personenbezogene Daten von Kunden oder Lieferanten werden von Achterhoek Cycle Engineering zu folgenden Zwecken verarbeitet:",
        "pr-v2": "administrative Zwecke;",
        "pr-v3": "Kommunikation über den Auftrag und/oder Einladungen;",
        "pr-v4": "die Ausführung oder die Auftragserteilung.",
        "pr-v5": "Rechtsgrundlage für diese personenbezogenen Daten ist:",
        "pr-v6": "der vereinbarte Auftrag.",
        "pr-d0": "Für die oben genannten Zwecke kann Achterhoek Cycle Engineering folgende personenbezogene Daten von Ihnen anfordern:",
        "pr-d1": "Vorname;",
        "pr-d2": "Zwischenname;",
        "pr-d3": "Nachname;",
        "pr-d4": "Telefonnummer;",
        "pr-d5": "E-Mail-Adresse.",
        "pr-d6": "Ihre personenbezogenen Daten werden von Achterhoek Cycle Engineering für die oben genannten Verarbeitungen für die Dauer des Vertrags aufbewahrt und danach nur noch in der Finanzverwaltung für maximal 7 Jahre.",
        "pr-h2": "Kontaktdaten",
        "pr-c1": "Achterhoek Cycle Engineering (ACE-fietsen)<br />\n          Weurden 60, 7101 NL Winterswijk<br />\n          Tel. und WhatsApp: <a href=\"tel:+31638731057\">+31 6 38 73 10 57</a><br />\n          E-Mail: <a href=\"mailto:info@ace-fietsen.nl\">info@ace-fietsen.nl</a><br />\n          KVK: 98809369",
        "ft-back": "Zurück zur Startseite"
      }
    }
  };

  function storageGet() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function storageSet(v) {
    try { localStorage.setItem(STORAGE_KEY, v); } catch (e) { /* ignore */ }
  }

  function apply(lang) {
    var page = document.body.getAttribute("data-page") || "index";
    if (!T[page] || !T[page][lang] || (lang !== "nl" && lang !== "de")) lang = "nl";
    var d = T[page][lang];

    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute("data-i18n");
      if (typeof d[key] === "string") els[i].innerHTML = d[key];
    }

    document.documentElement.lang = lang;
    if (d._title) document.title = d._title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta && d._desc) meta.setAttribute("content", d._desc);

    var btns = document.querySelectorAll(".lang [data-lang]");
    for (var j = 0; j < btns.length; j++) {
      btns[j].setAttribute("aria-pressed", String(btns[j].getAttribute("data-lang") === lang));
    }
    storageSet(lang);
  }

  document.addEventListener("click", function (e) {
    var b = e.target && e.target.closest ? e.target.closest("[data-lang]") : null;
    if (b) apply(b.getAttribute("data-lang"));
  });

  apply(storageGet() || "");
})();
