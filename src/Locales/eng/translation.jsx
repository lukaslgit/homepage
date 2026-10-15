export default {
  home: "HOME",
  my: "MY",
  projects: "PROJECTS",
  contact: "CONTACT",
  getInTouch: "GET IN TOUCH",
  contactMe: "Contact Me!",
  name: "Name",
  email: "Email",
  msg: "Message",
  send: "SEND",
  gallery: "Gallery",
  about_the_project: "About the project",
  architecture: "Architecture",
  features: "Features",
  security: "Security",
  private_repository: "Private Repository",
  viewLive: "View Live",

  homepage_main1: (
    <>
      <strong>Junior Full-Stack Developer (PERN)</strong> focused on building
      scalable, secure, and user-friendly web applications. Experienced with{" "}
      <strong>PostgreSQL, Express.js, Node.js, and React</strong>, with practical
      knowledge of{" "}
      <strong>
        JavaScript/TypeScript, Tailwind CSS, CSS/Sass, REST APIs, and
        component-based architecture
      </strong>.
    </>
  ),

  homepage_main2: (
    <>
      Familiar with <strong>API design, authentication using cookies and JWT,
      and password security with bcrypt</strong>. Experienced in API testing
      with <strong>Postman</strong> and familiar with automated end-to-end
      testing using <strong>Playwright</strong>.
    </>
  ),

  homepage_main3: (
    <>
      Hands-on experience with{" "}
      <strong>
        Ubuntu, Nginx, Git-based deployment, and production server configuration
      </strong>. Focused on writing clean code, improving performance, following
      security best practices, and building reliable, maintainable applications.
    </>
  ),

  homepage_mid1_title: "RESPONSIVE DESIGN",
  homepage_mid1_text: (
    <>
      I create web applications that look great and function flawlessly across all devices and screen sizes.
    </>
  ),
  homepage_mid2_title: "SECURE BACKEND & API",
  homepage_mid2_text: (
    <>
      Experienced in building secure and efficient REST APIs with Express and integrating them seamlessly with frontend applications.
    </>
  ),
  homepage_mid3_title: "MODERN TOOLS & STATE MANAGEMENT",
  homepage_mid3_text: (
    <>
      Skilled in React, Next.js, Redux/Context API, Tailwind CSS, and component-based architecture for building interactive, high-performance interfaces.
    </>
  ),

  aboutMe: "ABOUT ME",
  homepage_end1_title: "Frontend & React",
  homepage_end1_text: (
    <>
      Proficient in building responsive, accessible, and user-friendly interfaces using <strong>React, Next.js, Redux/Context API, TypeScript, Tailwind CSS, and CSS/Sass</strong>.
    </>
  ),
  homepage_end2_title: "Backend & REST APIs",
  homepage_end2_text: (
    <>
      Experienced in developing REST APIs with <strong>Express.js</strong>, PostgreSQL database integration, authentication with cookies and JWT, and secure password handling using <strong>bcrypt</strong>.
    </>
  ),
  homepage_end3_title: "Server & Deployment",
  homepage_end3_text: (
    <>
      Comfortable with <strong>Ubuntu</strong> servers, <strong>Nginx</strong>, Git-based deployments, and production server setup to deliver stable and performant applications.
    </>
  ),
  homepage_end4_title: "Languages & Communication",
  homepage_end4_text: (
    <>
      Fluent in <strong>English (B2)</strong> and <strong>German (B2)</strong>. Capable of collaborating effectively in international teams.
    </>
  ),
  projectpage_main1: (
    <>
      A modern full-stack web application built with <strong>React</strong> frontend and <strong>Express.js</strong> backend. 
      The backend manages secure API integration and data flow. Deployed on a VPS with <strong>Ubuntu</strong> and <strong>Nginx</strong>, demonstrating hands-on experience with full-stack development, API integration, server-side rendering, and production deployment.
    </>
  ),
  projectpage_main2: (
    <>
      Web application with separate login for managers and workers, using secure authentication (JWT) and password hashing (bcrypt).
      Managers can create tasks and manage trucks, while workers can view their assigned tasks.
    </>
  ),
  projectpage_main3: (
    <>
      iOS/Android Mobile app for car enthusiasts. Users can discover and navigate GPS routes on an interactive map, chat in real time, follow others and share posts with analytics. The app also supports organizing car meets and includes a full authentication flow.
    </>
  ),
  projectpage_main4: (
    <>
      A custom IoT departure board with real-time transit data from Vienna, Graz, Berlin, and Bratislava.
      Four independent codebases: ESP32-S3 C++ firmware with FreeRTOS, a Node.js GTFS backend,
      a React Native BLE/Wi-Fi configurator app, and a Python font pipeline.
    </>
  ),

  easteregg1_name: "Useless Darkmode",
  easteregg1_hint: "Found on the Projects page - click on the moon icon inside the WeatherApp mockup.",
  easteregg2_name: "Tasks?",
  easteregg2_hint: 'Found on the Projects page - click on "Tasks" in the TruckApp nav bar.',
  easteregg3_name: "Donauzentrum?",
  easteregg3_hint: 'Found on the Projects page - select the "26A / 94A → Kagran U" direction in the CityBoard phone mockup.',

  contactpage_main1: "I’m always pleased to connect and discuss potential career opportunities. Feel free to reach out to learn more about my experience or explore collaboration.",
  contactpage_form_empty: "All fields must be filled!",
  contactpage_form_wrongmail: "Please enter a valid email!",
  contactpage_form_succes: "Email sent, thank you!",

// CityBoard

  cb_p_firmware1: "ESP32-S3 with PlatformIO / Arduino framework - SPI display, BLE 5.0, 802.11 Wi-Fi, LEDC PWM backlight",
  cb_p_firmware2: "FreeRTOS dual-task architecture - fetch task and render/animation task run concurrently, synchronized via recursive mutex and binary semaphore",
  cb_p_firmware3: "TFT_eSPI with sprite compositing and partial-region screen updates - eliminates flicker on a 40 ms animation loop",
  cb_p_firmware4: "BLE GATT peripheral with 14 custom characteristics: Wi-Fi credentials, stop IDs, direction filter, walk time, brightness, night mode, device ID, factory reset",
  cb_p_firmware5: "HTTP REST server (port 80) for fast LAN-based configuration with automatic BLE fallback",
  cb_p_firmware6: "NVS flash (ESP32 Preferences) - all settings survive power cycles with no external storage",
  cb_p_firmware7: "City-specific departure board layouts, RGB565 color palettes, and rendering code for Vienna, Graz, Berlin, and Bratislava",
  cb_p_firmware8: "Animated imminent-departure indicator, marquee scrolling for long destination names and service disruptions, live HH:MM:SS clock in the header",

  cb_p_app1: "React Native 0.81 + Expo SDK 54 - cross-platform iOS and Android",
  cb_p_app2: "4-screen setup wizard: BLE scan → Wi-Fi configuration → Stop & direction selection → Live departure monitor",
  cb_p_app3: "BLE device scanning and GATT characteristic reads/writes (react-native-ble-plx)",
  cb_p_app4: "Dual-transport config sync: HTTP over Wi-Fi attempted first (3 s timeout), BLE GATT as automatic fallback, connection mode auto-detected with background polling",
  cb_p_app5: "4-city stop search: WienerLinien CSV index with platform merging, ÖBB transport.rest, BVG transport.rest, self-built DPB REST API",
  cb_p_app6: "Fully custom PanResponder slider - drag-anchor fix eliminates position jump on grab, blocks native scroll in nested ScrollView",
  cb_p_app7: "Multi-device dashboard with full config persisted in AsyncStorage, duplicate-device detection by BLE ID and IP address",
  cb_p_app8: "Live monitor screen: 15 s auto-refresh, color-coded countdown (red / orange / yellow), inline brightness control while connected",

  cb_p_backend1: "Node.js + Express 5 REST API serving live departure data for Bratislava DPB from the official GTFS static feed",
  cb_p_backend2: "Full GTFS CSV parser (stops, routes, trips, stop_times, calendar, calendar_dates) into in-memory Maps - O(1) lookup, no database",
  cb_p_backend3: "CET/CEST timezone-aware schedule computation with correct after-midnight trip wrapping",
  cb_p_backend4: "Geospatial stop search using the haversine formula",
  cb_p_backend5: "Response envelope mirrors WienerLinien Ogd API format - firmware needs zero city-specific parsing logic for Bratislava",
  cb_p_backend6: "Endpoints: stop search by name and by geo-radius, departure monitor with grouped directions, line list, full trip stop sequence",

  cb_p_tooling1: "Python script converting any .ttf font into Adafruit GFX PROGMEM bitmap format for TFT_eSPI on ESP32",
  cb_p_tooling2: "Uses libfreetype6 via Python ctypes - no pip packages or C build toolchain required",
  cb_p_tooling3: "Generates glyphs for Unicode 0x0020–0x017E (Latin + Latin Extended-A): Slovak Š ľ č ž ť ď and other Central European characters",
  cb_p_tooling4: "Produces all 5 custom fonts compiled into firmware flash: Poppins Bold (20pt, 12pt), Doto Regular / Bold / Black (12pt)",

  cb_engineeringLeft_t1: "No public API for Bratislava",
  cb_engineeringLeft_b1: "Built a complete GTFS static-feed parser from scratch - schedule computation, after-midnight trip wrapping, and CET/CEST timezone handling.",

  cb_engineeringLeft_t2: "Second-precision countdowns from minute-resolution data",
  cb_engineeringLeft_b2: "Parsed ISO 8601 departure timestamps into Unix epoch via mktime(), firmware computes exact seconds-remaining live from the stored epoch.",

  cb_engineeringLeft_t3: "Concurrent display access from two FreeRTOS tasks",
  cb_engineeringLeft_b3: "Recursive tftMutex guards all TFT calls, a separate depsMutex protects departure data, the animation task uses trylock to stay non-blocking.",

  cb_engineeringMid_t1: "Custom slider inside a ScrollView",
  cb_engineeringMid_b1: "PanResponder drag-anchor (startXRef) eliminates the position jump caused by locationX changing coordinate origin on grant, onShouldBlockNativeResponder blocks the native scroll layer during a drag.",

  cb_engineeringMid_t2: "BLE and HTTP config coexistence",
  cb_engineeringMid_b2: "HTTP over Wi-Fi is tried first via AbortController with a 3 s timeout, BLE GATT is used as fallback. The device broadcasts its IP in a BLE characteristic so the app can reconnect automatically.",

  cb_engineeringMid_t3: "Duplicate departures from multi-platform GTFS stops",
  cb_engineeringMid_b3: "Post-sort O(n²) dedup pass comparing (line, towards, departEpoch) before filling display slots - catches platform-level duplicates that GTFS does not deduplicate.",

  cb_engineeringRight_t1: "Full-screen flicker on every clock tick'",
  cb_engineeringRight_b1: "Partial-region fillRect clears only the header time column; full redraw fires only on mode switch. A clockOnly parameter controls update scope within the 40 ms render loop.",

  cb_engineeringRight_t2: "Slovak and Czech characters in firmware fonts",
  cb_engineeringRight_b2: "Custom Python font pipeline extended glyph coverage to Latin Extended-A (U+00A0–U+017E), fixed the TFT_eSPI UTF-8 multi-byte decoder path in firmware for glyphs above U+007F.",

  cb_inspiration: "Inspiration",
  cb_inspiration_desc: (
  <p>
      Inspired by <a href='https://github.com/coppermilk/wiener_linien_esp32_monitor' target='_blank' rel='noopener noreferrer' style={{ color: 'rgb(98,161,255)' }}>coppermilk/wiener_linien_esp32_monitor</a> -
      an open-source Vienna-only departure monitor on the same T-Display S3 hardware. CityBoard took that concept and expanded it into a
      multi-city system with a dedicated mobile configurator, a custom transit backend, and a full FreeRTOS concurrency model.
  </p>),

  cb_project_about: (
  <span>
  <p>
      CityBoard is a physical IoT device built on the LilyGo T-Display S3 (ESP32-S3 with a built-in 320×170 px TFT display).
      It connects to Wi-Fi, fetches live departure data from official transit APIs, and renders city-styled departure board
      layouts with smooth scrolling text, real-time second-precision countdowns, and a live clock.
      Supported cities are Vienna, Graz, Berlin, and Bratislava.
  </p>
  <p style={{ marginTop: '1.2rem' }}>
      The device is configured entirely over the air. A companion React Native app walks through
      a four-step wizard - BLE pairing, Wi-Fi setup, stop selection with direction filtering, and display preferences.
      When the phone is on the same network, the app uses HTTP for speed, it falls back to BLE GATT automatically
      when Wi-Fi is unavailable. All settings survive power cycles via NVS flash.
  </p>
  <p style={{ marginTop: '1.2rem' }}>
      Because Bratislava's DPB transit agency publishes no public API, a dedicated Node.js service was built
      to parse their official GTFS static feed and expose a REST API whose response format exactly mirrors
      the WienerLinien Ogd API - so the firmware requires zero city-specific parsing logic for that city.
  </p>
  </span>
  ),

  cb_project_desc: (
  <p>
      A custom-built smart departure board showing real-time transit from four cities.
      The project spans four independent codebases - embedded C++ firmware, a Node.js transit API,
      a React Native mobile configurator, and a Python font toolchain - built end-to-end by one developer.
  </p>
  ),

  cb_engineering_challenges: "Engineering challenges",

// Apex

  apex_features_routes1: "Plot A-to-B routes on an interactive map using OSRM routing engine",
  apex_features_routes2: "Preview routes as a polyline before driving - navigate turn-by-turn inside the app",
  apex_features_routes3: "Save routes with a title, description, and photos after a drive",
  apex_features_routes4: "Make routes public to share with the community or keep them private",

  apex_features_social1: "Instagram-style image feed - post photos with captions, like, comment, and share via DMs",
  apex_features_social2: "Full real-time DM system with typing indicators, read receipts, and online presence",
  apex_features_social3: "Follow / unfollow users, view follower and following lists, block accounts",
  apex_features_social4: "Report inappropriate content - reviewed in the admin web panel",

  apex_features_xp1: "Claim geo-located XP spots (fuel stations, parking) sourced live from OpenStreetMap via Overpass API",
  apex_features_xp2: "Season-based quests with geo-fenced checkpoints - app auto-checks GPS and awards XP on arrival",
  apex_features_xp3: "Earn XP by attending group meetups within 500 m of the pin location",
  apex_features_xp4: "Global and friends-only leaderboard, filterable by 7 days, 30 days, or all-time",

  apex_features_meets1: "Drop a pin on the map to create a scheduled group meetup with a date and description",
  apex_features_meets2: "Other users browse and join upcoming meets from the community tab",
  apex_features_meets3: "Attendees within 500 m of the location automatically claim +100 XP when the meet starts",
  apex_features_meets4: "Expired meets and past events are auto-cleaned by a nightly cron job",

  apex_mobileStack1: "React Native (Expo SDK 54)",
  apex_mobileStack2: "React Navigation v7 - Stack + Bottom Tabs",
  apex_mobileStack3: "Leaflet.js inside a WebView (map rendering)",
  apex_mobileStack4: "OSRM - route calculation & turn-by-turn",
  apex_mobileStack5: "OpenStreetMap Overpass API (XP spots)",
  apex_mobileStack6: "expo-location - real-time GPS tracking",
  apex_mobileStack7: "Axios with JWT interceptors & auto token refresh",

  apex_backendStack1: "Node.js + Express.js",
  apex_backendStack2: "PostgreSQL - connection pooling via pg",
  apex_backendStack3: "WebSocket (ws) - real-time DMs on same HTTP server",
  apex_backendStack4: "JWT (1-day access) + bcryptjs (12 salt rounds)",
  apex_backendStack5: "Multer + Sharp + Cloudflare R2 (image storage)",
  apex_backendStack6: "node-cron - nightly scheduled cleanup jobs",
  apex_backendStack7: "express-rate-limit - brute-force & abuse protection",

  apex_adminStack1: "React (Vite) - standalone web app",
  apex_adminStack2: "Axios - same backend API",
  apex_adminStack3: "JWT auth (7-day token) + separate admin endpoint",
  apex_adminStack4: "adminMiddleware - second auth layer on all admin routes",
  apex_adminStack5: "Content moderation dashboard - review reports, take down posts'",

  apex_authSecurity1: "bcrypt password hashing - 12 salt rounds",
  apex_authSecurity2: "JWT access tokens - 1-day expiry, never stored in DB",
  apex_authSecurity3: "Refresh token rotation - old token deleted on every refresh",
  apex_authSecurity4: "80-char cryptographically random refresh tokens (crypto.randomBytes)",
  apex_authSecurity5: "Nightly cron purges all expired refresh tokens",

  apex_apiSecurity1: "Auth endpoints rate-limited: 10 req / 15 min per IP",
  apex_apiSecurity2: "Global rate limit: 1000 req / 15 min per IP",
  apex_apiSecurity3: "authMiddleware validates JWT before any handler runs",
  apex_apiSecurity4: "adminMiddleware - second layer check on all admin routes",
  apex_apiSecurity5: "WebSocket auth: first frame must carry a valid JWT",

  apex_dataSecurity1: "Parameterized SQL queries throughout - SQL injection impossible",
  apex_dataSecurity2: "MIME-type file whitelist: JPEG, PNG, WebP only",
  apex_dataSecurity3: "Sharp strips EXIF metadata (incl. GPS) on every upload'",
  apex_dataSecurity4: "8 MB upload cap enforced by Multer before processing",
  apex_dataSecurity5: "Files in Cloudflare R2 CDN - R2 objects deleted on post/avatar delete",

  apex_desc: (
    <p>
        A mobile-first social platform for driving and motorcycle enthusiasts.
        Route planning, live navigation, XP progression, community challenges,
        and group ride coordination - all in one app.
    </p>
  ),

  apex_private_desc: "The source code for this project is kept private to protect its security architecture and business logic. If you're interested in reviewing the codebase - for hiring, collaboration, or other professional purposes - please reach out directly and I'll be happy to arrange access.",

  apex_private_tooltip: "This repository is private. The source code is available for review upon request - feel free to get in touch.",

  apex_about_desc: (
    <p>
        Apex Roads is built for road drivers and motorcycle enthusiasts - think Strava, but for cars and bikes.
        Users log routes, earn XP, climb leaderboards, share photos, and organize group rides.
        The app combines an interactive map engine powered by OSRM and Leaflet, a real-time social layer over
        WebSockets, a gamification system with geo-fenced quests, and live GPS tracking - all on a single
        PostgreSQL-backed Node.js API with image delivery via Cloudflare R2.
    </p>
  ),

// TruckApp

  truckapp_managerFeatures1: "Create and assign tasks to workers",
  truckapp_managerFeatures2: "Add, edit and remove trucks from the fleet",
  truckapp_managerFeatures3: "Manage worker accounts",
  truckapp_managerFeatures4: "Overview of all active and completed tasks",
  truckapp_managerFeatures5: "Track truck availability and status",

  truckapp_workerFeatures1: "View assigned tasks with details",
  truckapp_workerFeatures2: "Update task status (in progress / done)",
  truckapp_workerFeatures3: "Access truck information for assigned tasks",
  truckapp_workerFeatures4: "Simple and clean task dashboard",

  truckapp_desc: "A work-in-progress fleet management platform with separate dashboards for managers and workers, built on the PERN stack.",

  truckapp_about_desc: (
    <p>
        TruckManager is a fullstack application designed to streamline
        fleet and task management for small logistics teams. Authentication
        is handled with JWT tokens and passwords are secured with bcrypt.
        The app separates concerns cleanly - managers get full control over
        the fleet and task board, while workers see only what's relevant to them.
    </p>
  )

};

