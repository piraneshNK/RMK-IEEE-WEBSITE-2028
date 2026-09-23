import { db } from "./firebase-config.js";

import {
  ref,
  push,
  set,
  onValue,
  onDisconnect,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";


// ======================================================
// 1. GET DOM ELEMENTS
// ======================================================

const totalActiveEl = document.getElementById("live-total-active");
const flagsGridEl = document.getElementById("live-flags-grid");


// ======================================================
// 2. COUNTRIES WE WANT TO DISPLAY
// ======================================================

const TARGET_COUNTRIES = [
  { country: "United States", flag: "🇺🇸", code: "US" },
  { country: "India", flag: "🇮🇳", code: "IN" },
  { country: "Malaysia", flag: "🇲🇾", code: "MY" },
  { country: "Switzerland", flag: "🇨🇭", code: "CH" },
  { country: "China", flag: "🇨🇳", code: "CN" },
  { country: "Egypt", flag: "🇪🇬", code: "EG" },
  { country: "Germany", flag: "🇩🇪", code: "DE" },
  { country: "Japan", flag: "🇯🇵", code: "JP" },
  { country: "United Kingdom", flag: "🇬🇧", code: "GB" },
  { country: "Singapore", flag: "🇸🇬", code: "SG" },
  { country: "Australia", flag: "🇦🇺", code: "AU" },
  { country: "Canada", flag: "🇨🇦", code: "CA" },
  { country: "France", flag: "🇫🇷", code: "FR" },
  { country: "Italy", flag: "🇮🇹", code: "IT" },
  { country: "Poland", flag: "🇵🇱", code: "PL" },
  { country: "Taiwan", flag: "🇹🇼", code: "TW" }
];


// ======================================================
// 3. RENDER COUNTRY COUNTERS
// ======================================================

function renderFlags(counts = {}) {

  if (!flagsGridEl) return;

  flagsGridEl.innerHTML = TARGET_COUNTRIES.map(item => {

    const count = counts[item.code] || 0;

    return `
      <div class="flag-box">

        <div class="flag-box-left">

          <img
            src="https://flagcdn.com/w40/${item.code.toLowerCase()}.png"
            alt="${item.country} flag"
            width="20"
            height="14"
          />

          <span class="flag-country-name">
            ${item.country}
          </span>

        </div>

        <span class="flag-count-badge">
          ${count}
        </span>

      </div>
    `;

  }).join("");
}


// ======================================================
// 4. DETECT VISITOR COUNTRY
// ======================================================

async function getVisitorCountry() {

  try {

    const response = await fetch("https://ipapi.co/json/");

    if (!response.ok) {
      throw new Error("Country API request failed");
    }

    const data = await response.json();

    console.log("Visitor location:", data);

    return {
      country: data.country_name || "Unknown",
      countryCode: (data.country_code || "XX").toUpperCase()
    };

  } catch (error) {

    console.error("Could not detect visitor country:", error);

    return {
      country: "Unknown",
      countryCode: "XX"
    };
  }
}


// ======================================================
// 5. REGISTER VISITOR IN FIREBASE
// ======================================================

async function registerVisitor() {

  try {

    // First detect country
    const location = await getVisitorCountry();

    console.log("Visitor country:", location.country);
    console.log("Visitor country code:", location.countryCode);


    // Firebase location where visitors will be stored
    const visitorsRef = ref(db, "live_visitors");


    // Create unique visitor ID
    const visitorRef = push(visitorsRef);


    // IMPORTANT:
    // Register disconnect BEFORE setting visitor online.
    await onDisconnect(visitorRef).remove();


    // Create visitor record
    await set(visitorRef, {

      country: location.country,

      countryCode: location.countryCode,

      connected: true,

      connectedAt: serverTimestamp()

    });


    console.log(
      "Visitor registered:",
      visitorRef.key
    );


    return visitorRef;


  } catch (error) {

    console.error(
      "Could not register visitor:",
      error
    );

    return null;
  }
}


// ======================================================
// 6. LISTEN TO ALL ACTIVE VISITORS
// ======================================================

function listenForVisitors() {

  const visitorsRef = ref(db, "live_visitors");


  onValue(
    visitorsRef,
    (snapshot) => {

      const data = snapshot.val();


      // No visitors
      if (!data) {

        if (totalActiveEl) {
          totalActiveEl.textContent = "0";
        }

        renderFlags({});

        return;
      }


      // Country counters
      const counts = {};

      let activeCount = 0;


      // Go through every visitor
      Object.values(data).forEach(visitor => {

        if (!visitor) return;


        // Only count connected visitors
        if (visitor.connected !== false) {

          activeCount++;


          const code =
            (visitor.countryCode || "XX").toUpperCase();


          counts[code] =
            (counts[code] || 0) + 1;
        }

      });


      // Update total
      if (totalActiveEl) {

        totalActiveEl.textContent =
          String(activeCount);
      }


      // Update country counters
      renderFlags(counts);


      console.log(
        "Active visitors:",
        activeCount
      );

      console.log(
        "Country counts:",
        counts
      );
    },

    (error) => {

      console.error(
        "Firebase listener error:",
        error
      );

    }
  );
}


// ======================================================
// 7. START SYSTEM
// ======================================================

async function startVisitorCounter() {

  console.log(
    "Starting live visitor counter..."
  );


  // Start listening immediately
  listenForVisitors();


  // Register this visitor
  await registerVisitor();

}


// ======================================================
// 8. START AFTER PAGE LOAD
// ======================================================

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    startVisitorCounter
  );

} else {

  startVisitorCounter();

}