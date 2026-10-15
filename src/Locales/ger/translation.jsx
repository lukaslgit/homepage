export default {
  home: "STARTSEITE",
  projects: "PROJEKTE",
  contact: "KONTAKT",
  getInTouch: "KONTAKTIEREN",
  contactMe: "Kontaktiere mich!",
  name: "Name",
  email: "E-Mail",
  msg: "Nachricht",
  send: "SENDEN",
  gallery: "Galerie",
  about_the_project: "Über das Projekt",
  architecture: "Architektur",
  features: "Funktionen",
  security: "Sicherheit",
  private_repository: "Privates Repository",
  viewLive: "Live-Demo ansehen",

  homepage_main1: (
    <>
      <strong>Junior Full-Stack-Entwickler (PERN)</strong> mit Fokus auf die
      Entwicklung skalierbarer, sicherer und benutzerfreundlicher Webanwendungen.
      Erfahrung mit <strong>PostgreSQL, Express.js, Node.js und React</strong>
      sowie praktische Kenntnisse in{" "}
      <strong>
        JavaScript/TypeScript, Tailwind CSS, CSS/Sass, REST-APIs und
        komponentenbasierter Architektur
      </strong>.
    </>
  ),

  homepage_main2: (
    <>
      Vertraut mit <strong>API-Design, Authentifizierung mit Cookies und JWT
      sowie Passwortsicherheit mit bcrypt</strong>. Erfahrung mit API-Tests
      mithilfe von <strong>Postman</strong> und Grundkenntnisse in automatisierten
      End-to-End-Tests mit <strong>Playwright</strong>.
    </>
  ),

  homepage_main3: (
    <>
      Praktische Erfahrung mit{" "}
      <strong>
        Ubuntu, Nginx, Git-basierten Deployment-Prozessen und der Konfiguration
        von Produktionsservern
      </strong>. Fokus auf sauberen Code, Performance-Optimierung,
      Sicherheitsstandards sowie die Entwicklung zuverlässiger und wartbarer
      Anwendungen.
    </>
  ),

  homepage_mid1_title: "RESPONSIVES DESIGN",
  homepage_mid1_text: (
    <>
      Ich erstelle Webanwendungen, die auf allen Geräten und Bildschirmgrößen gut aussehen und reibungslos funktionieren.
    </>
  ),
  homepage_mid2_title: "SICHERES BACKEND & API",
  homepage_mid2_text: (
    <>
      Erfahrung im Aufbau sicherer und effizienter REST APIs mit Express und deren nahtloser Integration in Frontend-Anwendungen.
    </>
  ),
  homepage_mid3_title: "MODERNE TOOLS & STATE MANAGEMENT",
  homepage_mid3_text: (
    <>
      Kenntnisse in React, Next.js, Redux/Context API, Tailwind CSS und komponentenbasierter Architektur zur Erstellung interaktiver und leistungsfähiger Benutzeroberflächen.
    </>
  ),

  aboutMe: "ÜBER MICH",
  homepage_end1_title: "Frontend & React",
  homepage_end1_text: (
    <>
      Erfahrung im Erstellen responsiver, zugänglicher und benutzerfreundlicher Oberflächen mit <strong>React, Next.js, Redux/Context API, TypeScript, Tailwind CSS und CSS/Sass</strong>.
    </>
  ),
  homepage_end2_title: "Backend & REST APIs",
  homepage_end2_text: (
    <>
      Erfahrung in der Entwicklung von REST APIs mit <strong>Express.js</strong>, PostgreSQL-Datenbankintegration, Authentifizierung mit Cookies und JWT sowie sicherer Passwortverwaltung mit <strong>bcrypt</strong>.
    </>
  ),
  homepage_end3_title: "Server & Deployment",
  homepage_end3_text: (
    <>
      Erfahrung mit <strong>Ubuntu</strong>-Servern, <strong>Nginx</strong>, Git-basiertem Deployment und Produktionserver-Setup für stabile und leistungsfähige Anwendungen.
    </>
  ),
  homepage_end4_title: "Sprachen & Kommunikation",
  homepage_end4_text: (
    <>
      Fließend in <strong>Englisch (B2)</strong> und <strong>Deutsch (B2)</strong>. Kommunikationsfähig in internationalen Teams.
    </>
  ),

  my: "MEINE",
  projectpage_main1: (
    <>
      Moderne Full-Stack-Webanwendung mit <strong>React</strong> Frontend und <strong>Express.js</strong> Backend. Das Backend verwaltet API-Zugriffe und Datenfluss sicher. Bereitgestellt auf einem VPS mit <strong>Ubuntu</strong> und <strong>Nginx</strong>, zeigt praktische Erfahrungen in Full-Stack-Entwicklung, API-Integration, serverseitigem Rendering und Produktion Deployment.
    </>
  ),
  projectpage_main2: (
    <>
      Webanwendung mit separater Anmeldung für Manager und Mitarbeiter, die eine sichere Authentifizierung (JWT) und Passwort-Hashing (bcrypt) verwendet.
      Manager können Aufgaben erstellen und Lkw verwalten, während Mitarbeiter ihre zugewiesenen Aufgaben einsehen können.
    </>

  ),
  projectpage_main3: (
    <>
      Mobile iOS/Android-App für Autoenthusiasten. Nutzer können GPS-Routen auf einer interaktiven Karte entdecken und navigieren, in Echtzeit chatten, anderen Nutzern folgen und Beiträge mit Analytics teilen. Die App unterstützt außerdem die Organisation von Autotreffen und umfasst einen vollständigen Authentifizierungsprozess.
    </>

  ),
  projectpage_main4: (
    <>
      Eine maßgeschneiderte IoT-Abfahrtstafel mit Echtzeitdaten des öffentlichen Verkehrs aus Wien, Graz, Berlin und Bratislava.
      Vier unabhängige Codebasen: ESP32-S3-Firmware in C++ mit FreeRTOS, ein Node.js-GTFS-Backend,
      eine React-Native-Konfigurations-App mit BLE/Wi-Fi-Unterstützung und eine Python-Pipeline für die Schriftartenverarbeitung
    </>
  ),

  easteregg1_name: "Useless Darkmode",
  easteregg1_hint: "Found on the Projects page - click on the moon icon inside the WeatherApp mockup.",
  easteregg2_name: "Tasks?",
  easteregg2_hint: 'Found on the Projects page - click on "Tasks" in the TruckApp nav bar.',
  easteregg3_name: "Donauzentrum?",
  easteregg3_hint: 'Found on the Projects page - select the "26A / 94A → Kagran U" direction in the CityBoard phone mockup.',

  contactpage_main1: "Ich freue mich immer, in Kontakt zu treten und mögliche Karrierechancen zu besprechen. Wenn Sie mehr über meine Erfahrungen erfahren oder eine Zusammenarbeit erkunden möchten, können Sie sich gerne melden.",
  contactpage_form_empty: "Alle Felder müssen ausgefüllt sein!",
  contactpage_form_wrongmail: "Bitte eine gültige E-Mail-Adresse eingeben!",
  contactpage_form_succes: "E-Mail gesendet, danke!",
// CityBoard

cb_p_firmware1: "ESP32-S3 mit PlatformIO / Arduino Framework - SPI-Display, BLE 5.0, 802.11 Wi-Fi, LEDC PWM-Hintergrundbeleuchtung",
cb_p_firmware2: "FreeRTOS-Zwei-Task-Architektur - Fetch-Task und Render-/Animation-Task laufen parallel und werden über einen rekursiven Mutex und ein binäres Semaphor synchronisiert",
cb_p_firmware3: "TFT_eSPI mit Sprite-Compositing und partiellen Bildschirmaktualisierungen - eliminiert Flackern bei einer 40-ms-Animationsschleife",
cb_p_firmware4: "BLE-GATT-Peripheriegerät mit 14 benutzerdefinierten Characteristics: WLAN-Zugangsdaten, Haltestellen-IDs, Richtungsfilter, Gehzeit, Helligkeit, Nachtmodus, Geräte-ID, Zurücksetzen auf Werkseinstellungen",
cb_p_firmware5: "HTTP-REST-Server (Port 80) für schnelle LAN-basierte Konfiguration mit automatischem BLE-Fallback",
cb_p_firmware6: "NVS-Flash (ESP32 Preferences) - alle Einstellungen bleiben über Neustarts hinweg erhalten, ohne externen Speicher",
cb_p_firmware7: "Stadtspezifische Abfahrtsanzeige-Layouts, RGB565-Farbpaletten und Rendering-Code für Wien, Graz, Berlin und Bratislava",
cb_p_firmware8: "Animierter Indikator für unmittelbar bevorstehende Abfahrten, Lauftext für lange Zielnamen und Verkehrsstörungen, Live-HH:MM:SS-Uhr in der Kopfzeile",

cb_p_app1: "React Native 0.81 + Expo SDK 54 - plattformübergreifend für iOS und Android",
cb_p_app2: "4-Bildschirm-Einrichtungsassistent: BLE-Scan → WLAN-Konfiguration → Auswahl von Haltestelle und Richtung → Live-Abfahrtsmonitor",
cb_p_app3: "BLE-Gerätesuche und Lesen/Schreiben von GATT-Characteristics (react-native-ble-plx)",
cb_p_app4: "Dual-Transport-Konfigurationssync: Zuerst wird HTTP über WLAN versucht (3-s-Timeout), anschließend automatischer Fallback auf BLE GATT, der Verbindungsmodus wird per Hintergrund-Polling automatisch erkannt",
cb_p_app5: "Haltestellensuche für 4 Städte: WienerLinien-CSV-Index mit Zusammenführung von Bahnsteigen, ÖBB transport.rest, BVG transport.rest, selbst entwickelte DPB REST API",
cb_p_app6: "Vollständig eigener PanResponder-Slider - die Drag-Anchor-Korrektur verhindert den Positionssprung beim Greifen, onShouldBlockNativeResponder blockiert das native Scrollen in einem verschachtelten ScrollView",
cb_p_app7: "Multi-Geräte-Dashboard mit vollständig in AsyncStorage gespeicherter Konfiguration, Erkennung von Duplikatgeräten anhand von BLE-ID und IP-Adresse",
cb_p_app8: "Live-Monitor-Bildschirm: automatische Aktualisierung alle 15 s, farbcodierter Countdown (rot / orange / gelb), direkte Helligkeitssteuerung während der Verbindung",

cb_p_backend1: "Node.js + Express 5 REST API für Live-Abfahrtsdaten der Bratislava DPB aus dem offiziellen statischen GTFS-Feed",
cb_p_backend2: "Vollständiger GTFS-CSV-Parser (stops, routes, trips, stop_times, calendar, calendar_dates) in In-Memory-Maps - O(1)-Lookup, keine Datenbank",
cb_p_backend3: "Zeitzonenbewusste Fahrplanberechnung für CET/CEST mit korrekter Verarbeitung von Fahrten über Mitternacht hinweg",
cb_p_backend4: "Georäumliche Haltestellensuche mit der Haversine-Formel",
cb_p_backend5: "Die Response-Envelope entspricht dem Format der WienerLinien-Ogd-API - die Firmware benötigt keine stadtspezifische Parsing-Logik für Bratislava",
cb_p_backend6: "Endpunkte: Haltestellensuche nach Name und geografischem Radius, Abfahrtsmonitor mit gruppierten Richtungen, Linienliste, vollständige Haltestellenfolge einer Fahrt",

cb_p_tooling1: "Python-Skript zur Konvertierung beliebiger .ttf-Schriften in das Adafruit-GFX-PROGMEM-Bitmap-Format für TFT_eSPI auf dem ESP32",
cb_p_tooling2: "Verwendet libfreetype6 über Python ctypes - keine pip-Pakete oder C-Build-Toolchain erforderlich",
cb_p_tooling3: "Generiert Glyphen für Unicode 0x0020–0x017E (Latin + Latin Extended-A): slowakische Š ľ č ž ť ď und weitere mitteleuropäische Zeichen",
cb_p_tooling4: "Alle 5 benutzerdefinierten Schriftarten werden direkt in den Firmware-Flash kompiliert: Poppins Bold (20pt, 12pt), Doto Regular / Bold / Black (12pt)",

cb_engineeringLeft_t1: "Keine öffentliche API für Bratislava",
cb_engineeringLeft_b1: "Einen vollständigen Parser für den statischen GTFS-Feed von Grund auf entwickelt - Fahrplanberechnung, Verarbeitung von Fahrten über Mitternacht und CET/CEST-Zeitzonenunterstützung.",

cb_engineeringLeft_t2: "Countdowns mit Sekundengenauigkeit aus minutengenauen Daten",
cb_engineeringLeft_b2: "ISO-8601-Abfahrtszeitstempel werden mittels mktime() in Unix-Epoch-Zeit umgewandelt, die Firmware berechnet daraus live die exakt verbleibenden Sekunden.",

cb_engineeringLeft_t3: "Gleichzeitiger Display-Zugriff von zwei FreeRTOS-Tasks",
cb_engineeringLeft_b3: "Ein rekursiver tftMutex schützt alle TFT-Aufrufe, ein separater depsMutex schützt die Abfahrtsdaten und der Animation-Task verwendet trylock, um nicht blockierend zu bleiben.",

cb_engineeringMid_t1: "Eigener Slider innerhalb eines ScrollView",
cb_engineeringMid_b1: "Die PanResponder-Drag-Anchor (startXRef) verhindert den Positionssprung, der durch die Änderung des Koordinatenursprungs von locationX beim Greifen entsteht; onShouldBlockNativeResponder blockiert während des Ziehens die native Scroll-Ebene.",

cb_engineeringMid_t2: "Koexistenz von BLE- und HTTP-Konfiguration",
cb_engineeringMid_b2: "HTTP über WLAN wird zunächst mittels AbortController mit einem 3-s-Timeout versucht, BLE GATT dient als Fallback. Das Gerät überträgt seine IP-Adresse in einer BLE-Characteristic, sodass die App automatisch wieder eine Verbindung herstellen kann.",

cb_engineeringMid_t3: "Doppelte Abfahrten von GTFS-Haltestellen mit mehreren Bahnsteigen",
cb_engineeringMid_b3: "Nach dem Sortieren wird ein O(n²)-Deduplication-Pass durchgeführt, der (line, towards, departEpoch) vergleicht, bevor die Anzeigeplätze gefüllt werden - dadurch werden Duplikate auf Bahnsteigebene erkannt, die GTFS nicht selbst dedupliziert.",

cb_engineeringRight_t1: "Vollbildflackern bei jedem Uhrentick",
cb_engineeringRight_b1: "Ein partielles fillRect leert nur die Zeitspalte in der Kopfzeile; ein vollständiger Redraw erfolgt nur beim Moduswechsel. Ein clockOnly-Parameter steuert den Aktualisierungsumfang innerhalb der 40-ms-Render-Schleife.",

cb_engineeringRight_t2: "Slowakische und tschechische Zeichen in den Firmware-Schriften",
cb_engineeringRight_b2: "Die eigene Python-Font-Pipeline erweitert die Glyphenabdeckung auf Latin Extended-A (U+00A0–U+017E); außerdem wurde der UTF-8-Multibyte-Decoder-Pfad von TFT_eSPI in der Firmware für Glyphen oberhalb von U+007F korrigiert.",

cb_inspiration: "Inspiration",
cb_inspiration_desc: (

  <p>
      Inspiriert von <a href='https://github.com/coppermilk/wiener_linien_esp32_monitor' target='_blank' rel='noopener noreferrer' style={{ color: 'rgb(98,161,255)' }}>coppermilk/wiener_linien_esp32_monitor</a> -
      einem Open-Source-Abfahrtsmonitor ausschließlich für Wien auf derselben T-Display-S3-Hardware. CityBoard hat dieses Konzept zu einem
      Multistädte-System mit einem dedizierten mobilen Konfigurator, einem eigenen Transit-Backend und einem vollständigen FreeRTOS-Konkurrenzmodell erweitert.
  </p>),

cb_project_about: ( <span>

  <p>
      CityBoard ist ein physisches IoT-Gerät auf Basis des LilyGo T-Display S3 (ESP32-S3 mit integriertem 320×170-Pixel-TFT-Display).
      Es verbindet sich mit WLAN, ruft Live-Abfahrtsdaten von offiziellen Verkehrs-APIs ab und rendert stadtspezifische Abfahrtsanzeige-Layouts
      mit flüssigem Lauftext, Echtzeit-Countdowns mit Sekundengenauigkeit und einer Live-Uhr.
      Unterstützte Städte sind Wien, Graz, Berlin und Bratislava.
  </p>
  <p style={{ marginTop: '1.2rem' }}>
      Das Gerät wird vollständig drahtlos konfiguriert. Eine begleitende React-Native-App führt durch einen
      vierstufigen Assistenten - BLE-Kopplung, WLAN-Einrichtung, Haltestellenauswahl mit Richtungsfilter und Display-Einstellungen.
      Wenn sich das Smartphone im selben Netzwerk befindet, verwendet die App HTTP für eine höhere Geschwindigkeit; bei nicht verfügbarem WLAN
      wechselt sie automatisch auf BLE GATT. Alle Einstellungen bleiben dank NVS-Flash auch nach einem Neustart erhalten.
  </p>
  <p style={{ marginTop: '1.2rem' }}>
      Da die Bratislavaer Verkehrsgesellschaft DPB keine öffentliche API bereitstellt, wurde ein eigener Node.js-Dienst entwickelt,
      der deren offiziellen statischen GTFS-Feed parst und eine REST API bereitstellt, deren Antwortformat exakt dem
      WienerLinien Ogd API entspricht - dadurch benötigt die Firmware für diese Stadt keinerlei stadtspezifische Parsing-Logik.
  </p>
  </span>
  ),

cb_project_desc: (

  <p>
      Eine individuell entwickelte intelligente Abfahrtstafel mit Echtzeit-ÖPNV-Daten aus vier Städten.
      Das Projekt umfasst vier unabhängige Codebasen - Embedded-C++-Firmware, eine Node.js-Transit-API,
      einen React-Native-Mobilkonfigurator und eine Python-Font-Toolchain - vollständig von einem Entwickler umgesetzt.
  </p>
  ),

cb_engineering_challenges: "Technische Herausforderungen",


// Apex

  apex_features_routes1: "A-to-B-Routen auf einer interaktiven Karte mit der OSRM-Routing-Engine erstellen",
  apex_features_routes2: "Routen vor der Fahrt als Polylinie anzeigen - Turn-by-Turn-Navigation direkt in der App",
  apex_features_routes3: "Routen nach einer Fahrt mit Titel, Beschreibung und Fotos speichern",
  apex_features_routes4: "Routen öffentlich mit der Community teilen oder privat halten",

  apex_features_social1: "Instagram-ähnlicher Bilder-Feed - Fotos mit Bildunterschriften posten, liken, kommentieren und per DM teilen",
  apex_features_social2: "Vollständiges Echtzeit-DM-System mit Tippanzeigen, Lesebestätigungen und Online-Status",
  apex_features_social3: "Nutzern folgen / nicht mehr folgen, Follower- und Following-Listen anzeigen, Konten blockieren",
  apex_features_social4: "Unangemessene Inhalte melden - Überprüfung im webbasierten Admin-Panel",

  apex_features_xp1: "Geolokalisierte XP-Spots (Tankstellen, Parkplätze) beanspruchen, live über die Overpass API aus OpenStreetMap abgerufen",
  apex_features_xp2: "Saisonale Quests mit Geofencing-Checkpoints - die App prüft automatisch das GPS und vergibt bei Ankunft XP",
  apex_features_xp3: "XP durch die Teilnahme an Gruppentreffen innerhalb von 500 m vom Standort-Pin verdienen",
  apex_features_xp4: "Globale und nur für Freunde sichtbare Bestenliste, filterbar nach 7 Tagen, 30 Tagen oder Gesamtzeit",

  apex_features_meets1: "Einen Pin auf der Karte setzen, um ein geplantes Gruppentreffen mit Datum und Beschreibung zu erstellen",
  apex_features_meets2: "Andere Nutzer können bevorstehende Treffen über den Community-Tab durchsuchen und ihnen beitreten",
  apex_features_meets3: "Teilnehmer innerhalb von 500 m des Standorts erhalten automatisch +100 XP, sobald das Treffen beginnt",
  apex_features_meets4: "Abgelaufene Treffen und vergangene Events werden durch einen nächtlichen Cronjob automatisch bereinigt",

  apex_mobileStack1: "React Native (Expo SDK 54)",
  apex_mobileStack2: "React Navigation v7 - Stack + Bottom Tabs",
  apex_mobileStack3: "Leaflet.js innerhalb einer WebView (Kartendarstellung)",
  apex_mobileStack4: "OSRM - Routenberechnung & Turn-by-Turn-Navigation",
  apex_mobileStack5: "OpenStreetMap Overpass API (XP-Spots)",
  apex_mobileStack6: "expo-location - Echtzeit-GPS-Tracking",
  apex_mobileStack7: "Axios mit JWT-Interceptoren & automatischer Token-Erneuerung",

  apex_backendStack1: "Node.js + Express.js",
  apex_backendStack2: "PostgreSQL - Connection Pooling über pg",
  apex_backendStack3: "WebSocket (ws) - Echtzeit-DMs auf demselben HTTP-Server",
  apex_backendStack4: "JWT (1 Tag Zugriff) + bcryptjs (12 Salt-Runden)",
  apex_backendStack5: "Multer + Sharp + Cloudflare R2 (Bildspeicher)",
  apex_backendStack6: "node-cron - nächtliche geplante Bereinigungsjobs",
  apex_backendStack7: "express-rate-limit - Schutz vor Brute-Force-Angriffen & Missbrauch",

  apex_adminStack1: "React (Vite) - eigenständige Web-App",
  apex_adminStack2: "Axios - dieselbe Backend-API",
  apex_adminStack3: "JWT-Authentifizierung (7-Tage-Token) + separater Admin-Endpunkt",
  apex_adminStack4: "adminMiddleware - zweite Authentifizierungsebene für alle Admin-Routen",
  apex_adminStack5: "Content-Moderation-Dashboard - Meldungen überprüfen, Beiträge entfernen",

  apex_authSecurity1: "bcrypt-Passwort-Hashing - 12 Salt-Runden",
  apex_authSecurity2: "JWT-Access-Tokens - 1 Tag gültig, niemals in der Datenbank gespeichert",
  apex_authSecurity3: "Refresh-Token-Rotation - alter Token wird bei jedem Refresh gelöscht",
  apex_authSecurity4: "80 Zeichen lange kryptografisch zufällige Refresh-Tokens (crypto.randomBytes)",
  apex_authSecurity5: "Nächtlicher Cronjob löscht alle abgelaufenen Refresh-Tokens",

  apex_apiSecurity1: "Auth-Endpunkte mit Rate-Limit: 10 Anfragen / 15 Min. pro IP",
  apex_apiSecurity2: "Globales Rate-Limit: 1000 Anfragen / 15 Min. pro IP",
  apex_apiSecurity3: "authMiddleware validiert das JWT, bevor irgendein Handler ausgeführt wird",
  apex_apiSecurity4: "adminMiddleware - zweite Prüfebene für alle Admin-Routen",
  apex_apiSecurity5: "WebSocket-Authentifizierung: Der erste Frame muss ein gültiges JWT enthalten",

  apex_dataSecurity1: "Parametrisierte SQL-Abfragen durchgehend - SQL-Injection verhindert",
  apex_dataSecurity2: "MIME-Type-Whitelist für Dateien: nur JPEG, PNG und WebP",
  apex_dataSecurity3: "Sharp entfernt EXIF-Metadaten (einschließlich GPS) bei jedem Upload",
  apex_dataSecurity4: "Upload-Limit von 8 MB wird von Multer vor der Verarbeitung durchgesetzt",
  apex_dataSecurity5: "Dateien im Cloudflare-R2-CDN - R2-Objekte werden beim Löschen von Beiträgen/Avataren entfernt",

  apex_desc: (
    <p>
        Eine Mobile-First-Social-Plattform für Auto- und Motorradbegeisterte.
        Routenplanung, Live-Navigation, XP-Fortschritt, Community-Herausforderungen
        und die Koordination gemeinsamer Fahrten - alles in einer App.
    </p>
  ),

  apex_private_desc: "Der Quellcode dieses Projekts bleibt privat, um seine Sicherheitsarchitektur und Geschäftslogik zu schützen. Wenn Sie Interesse daran haben, die Codebasis zu prüfen - beispielsweise für eine Einstellung, Zusammenarbeit oder andere berufliche Zwecke - kontaktieren Sie mich gerne direkt. Ich arrangiere dann gerne einen entsprechenden Zugriff.",

  apex_private_tooltip: "Dieses Repository ist privat. Der Quellcode kann auf Anfrage eingesehen werden - kontaktieren Sie mich gerne.",

  apex_about_desc: (
    <p>
        Apex Roads wurde für Autofahrer und Motorradbegeisterte entwickelt - quasi Strava für Autos und Motorräder.
        Nutzer zeichnen Routen auf, sammeln XP, steigen in Bestenlisten auf, teilen Fotos und organisieren gemeinsame Fahrten.
        Die App kombiniert eine interaktive Karten-Engine mit OSRM und Leaflet, eine Echtzeit-Social-Ebene über
        WebSockets, ein Gamification-System mit Geofencing-Quests und Live-GPS-Tracking - alles über eine einzige
        PostgreSQL-basierte Node.js-API mit Bildbereitstellung über Cloudflare R2.
    </p>
  ),

// TruckApp

  truckapp_managerFeatures1: "Aufgaben erstellen und Mitarbeitern zuweisen",
  truckapp_managerFeatures2: "Lkw zur Flotte hinzufügen, bearbeiten und entfernen",
  truckapp_managerFeatures3: "Mitarbeiterkonten verwalten",
  truckapp_managerFeatures4: "Übersicht über alle aktiven und abgeschlossenen Aufgaben",
  truckapp_managerFeatures5: "Verfügbarkeit und Status der Lkw verfolgen",

  truckapp_workerFeatures1: "Zugewiesene Aufgaben mit Details anzeigen",
  truckapp_workerFeatures2: "Aufgabenstatus aktualisieren (in Bearbeitung / erledigt)",
  truckapp_workerFeatures3: "Auf Lkw-Informationen für zugewiesene Aufgaben zugreifen",
  truckapp_workerFeatures4: "Einfaches und übersichtliches Aufgaben-Dashboard",

  truckapp_desc: "Eine Fleet-Management-Plattform in Entwicklung mit separaten Dashboards für Manager und Mitarbeiter, entwickelt mit dem PERN-Stack.",

  truckapp_about_desc: (
    <p>
        TruckManager ist eine Fullstack-Anwendung, die darauf ausgelegt ist,
        die Flotten- und Aufgabenverwaltung für kleine Logistikteams zu vereinfachen.
        Die Authentifizierung erfolgt über JWT-Tokens und Passwörter werden mit bcrypt
        geschützt. Die Anwendung trennt die Zuständigkeiten klar - Manager erhalten
        die vollständige Kontrolle über die Flotte und das Aufgabenboard, während
        Mitarbeiter nur die für sie relevanten Informationen sehen.
    </p>
  ),

};

