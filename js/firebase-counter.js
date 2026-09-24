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
// 1. GET DOM ELEMENT
// ======================================================

const flagsGridEl =
  document.getElementById("live-flags-grid");


// ======================================================
// 2. COUNTRIES
// ======================================================

const TARGET_COUNTRIES = [
  { country: "United States", code: "US" },
  { country: "India", code: "IN" },
  { country: "Malaysia", code: "MY" },
  { country: "Switzerland", code: "CH" },
  { country: "China", code: "CN" },
  { country: "Egypt", code: "EG" },
  { country: "Germany", code: "DE" },
  { country: "Japan", code: "JP" },
  { country: "United Kingdom", code: "GB" },
  { country: "Singapore", code: "SG" },
  { country: "Australia", code: "AU" },
  { country: "Canada", code: "CA" },
  { country: "France", code: "FR" },
  { country: "Italy", code: "IT" },
  { country: "Poland", code: "PL" },
  { country: "Taiwan", code: "TW" }
];


// ======================================================
// 3. GET COUNTRY INFORMATION
// ======================================================

function getCountryInfo(code) {

  return (
    TARGET_COUNTRIES.find(
      item => item.code === code
    ) || {
      country: code,
      code: code
    }
  );

}


// ======================================================
// 4. DISPLAY ONLY ACTIVE COUNTRIES
// ======================================================

function renderFlags(counts = {}) {

  if (!flagsGridEl) return;


  const activeCountries =
    Object.entries(counts)
      .filter(
        ([code, count]) => count > 0
      )
      .map(
        ([code, count]) => {

          const country =
            getCountryInfo(code);

          return {
            ...country,
            count
          };

        }
      );


  // No active visitors
  if (activeCountries.length === 0) {

    flagsGridEl.innerHTML = "";

    return;
  }


  // Display only countries having visitors
  flagsGridEl.innerHTML =
    activeCountries
      .map(item => {

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
              ${item.count}
            </span>

          </div>
        `;

      })
      .join("");

}


// ======================================================
// 5. DETECT VISITOR COUNTRY
// ======================================================

async function getVisitorCountry() {

  try {

    const response =
      await fetch(
        "https://ipapi.co/json/"
      );


    if (!response.ok) {

      throw new Error(
        "Country API request failed"
      );

    }


    const data =
      await response.json();


    console.log(
      "Visitor location:",
      data
    );


    return {

      country:
        data.country_name ||
        "Unknown",

      countryCode:
        (
          data.country_code ||
          "XX"
        ).toUpperCase()

    };


  } catch (error) {

    console.error(
      "Could not detect visitor country:",
      error
    );


    return {

      country: "Unknown",

      countryCode: "XX"

    };

  }

}


// ======================================================
// 6. REGISTER THIS VISITOR
// ======================================================

async function registerVisitor() {

  try {

    // Detect visitor's country
    const location =
      await getVisitorCountry();


    console.log(
      "Visitor country:",
      location.country
    );


    console.log(
      "Visitor country code:",
      location.countryCode
    );


    // Firebase live visitor location
    const visitorsRef =
      ref(
        db,
        "live_visitors"
      );


    // Create unique visitor ID
    const visitorRef =
      push(visitorsRef);


    // Remove visitor automatically
    // when browser disconnects
    await onDisconnect(
      visitorRef
    ).remove();


    // Save visitor
    await set(
      visitorRef,
      {

        country:
          location.country,

        countryCode:
          location.countryCode,

        connected:
          true,

        connectedAt:
          serverTimestamp()

      }
    );


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
// 7. LISTEN TO FIREBASE
// ======================================================

function listenForVisitors() {

  const visitorsRef =
    ref(
      db,
      "live_visitors"
    );


  onValue(

    visitorsRef,

    snapshot => {

      const data =
        snapshot.val();


      // ------------------------------------------
      // NO VISITORS
      // ------------------------------------------

      if (!data) {

        renderFlags({});

        console.log(
          "Active visitors: 0"
        );

        return;
      }


      // ------------------------------------------
      // COUNT COUNTRIES
      // ------------------------------------------

      const counts = {};


      Object.values(data).forEach(
        visitor => {

          if (!visitor) return;


          // Only active visitors
          if (
            visitor.connected !== false
          ) {

            const code =
              (
                visitor.countryCode ||
                "XX"
              ).toUpperCase();


            counts[code] =
              (
                counts[code] || 0
              ) + 1;

          }

        }
      );


      // ------------------------------------------
      // DISPLAY
      // ------------------------------------------

      renderFlags(
        counts
      );


      // ------------------------------------------
      // DEBUG
      // ------------------------------------------

      const activeCount =
        Object.values(counts)
          .reduce(
            (total, count) =>
              total + count,
            0
          );


      console.log(
        "Active visitors:",
        activeCount
      );


      console.log(
        "Country counts:",
        counts
      );

    },


    error => {

      console.error(
        "Firebase listener error:",
        error
      );

    }

  );

}


// ======================================================
// 8. START
// ======================================================

async function startVisitorCounter() {

  console.log(
    "Starting live visitor counter..."
  );


  // Listen to Firebase
  // immediately
  listenForVisitors();


  // Register current visitor
  await registerVisitor();

}


// ======================================================
// 9. PAGE LOAD
// ======================================================

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    startVisitorCounter
  );

} else {

  startVisitorCounter();

}