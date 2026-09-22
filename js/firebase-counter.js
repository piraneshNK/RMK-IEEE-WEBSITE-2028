/**
 * Real-time Firebase Global Visitor Flag Counter
 * Directly connects to https://ieee-rmk-2028-default-rtdb.firebaseio.com/
 * Updates active user count and 16 target country flags dynamically.
 */

(function () {
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
    { country: "Taiwan", flag: "🇹🇼", code: "TW" },
  ];

  const totalActiveEl = document.getElementById('live-total-active');
  const flagsGridEl = document.getElementById('live-flags-grid');

  // Render initial zeroed flags
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
              loading="lazy"
              width="20"
              height="14"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';"
            />
            <span style="display:none; font-size:1rem;">${item.flag}</span>
            <span class="flag-country-name" title="${item.country}">${item.country}</span>
          </div>
          <span class="flag-count-badge" id="flag-count-${item.code}">${count}</span>
        </div>
      `;
    }).join('');
  }

  renderFlags();

  // Initialize Firebase Realtime Database
  function initFirebase() {
    try {
      if (typeof firebase === 'undefined') {
        console.warn("Firebase SDK not loaded, using fallback tracker.");
        if (totalActiveEl) totalActiveEl.textContent = '1';
        return;
      }

      const firebaseConfig = {
        databaseURL: 'https://ieee-rmk-2028-default-rtdb.firebaseio.com/'
      };

      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      const db = firebase.database();
      const liveVisitorsRef = db.ref('live_visitors');

      liveVisitorsRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          if (totalActiveEl) totalActiveEl.textContent = '0';
          renderFlags({});
          return;
        }

        const counts = {};
        let activeCount = 0;

        Object.values(data).forEach((visitor) => {
          if (visitor && visitor.connected !== false) {
            activeCount += 1;
            const code = (visitor.countryCode || '').toUpperCase();
            if (code) {
              counts[code] = (counts[code] || 0) + 1;
            }
          }
        });

        if (totalActiveEl) totalActiveEl.textContent = String(activeCount);
        renderFlags(counts);
      }, (err) => {
        console.warn("Firebase Realtime Database listener notice:", err);
        if (totalActiveEl) totalActiveEl.textContent = '—';
      });

    } catch (e) {
      console.warn("Could not connect to Firebase:", e);
      if (totalActiveEl) totalActiveEl.textContent = '—';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFirebase);
  } else {
    initFirebase();
  }
})();
