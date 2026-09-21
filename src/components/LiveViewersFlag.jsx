import React, { useState, useEffect } from 'react';
import { Globe, Activity } from 'lucide-react';
import { ref, onValue, off } from 'firebase/database';
import { db } from '../firebase';

// 16 designated target countries
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
  { country: "Australia", flag: "AU" },
  { country: "Canada", flag: "🇨🇦", code: "CA" },
  { country: "France", flag: "🇫🇷", code: "FR" },
  { country: "Italy", flag: "🇮🇹", code: "IT" },
  { country: "Poland", flag: "🇵🇱", code: "PL" },
  { country: "Taiwan", flag: "🇹🇼", code: "TW" },
];

export default function LiveViewersFlag() {
  const [totalActive, setTotalActive] = useState(0);
  const [countryCounts, setCountryCounts] = useState({});
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reference to /live_visitors in Firebase Realtime Database
    const liveVisitorsRef = ref(db, 'live_visitors');

    // Real-time listener: triggers whenever visitors join, leave, or update
    const unsubscribe = onValue(
      liveVisitorsRef,
      (snapshot) => {
        setHasError(false);
        const data = snapshot.val();

        if (!data) {
          setTotalActive(0);
          setCountryCounts({});
          return;
        }

        const counts = {};
        let activeCount = 0;

        // Iterate through active visitor sessions
        Object.values(data).forEach((visitor) => {
          if (visitor && visitor.connected !== false) {
            activeCount += 1;
            const code = (visitor.countryCode || '').toUpperCase();
            if (code) {
              counts[code] = (counts[code] || 0) + 1;
            }
          }
        });

        setTotalActive(activeCount);
        setCountryCounts(counts);
      },
      (error) => {
        console.error("Firebase Realtime Database listener error:", error);
        setHasError(true);
      }
    );

    // Unsubscribe listener when component unmounts
    return () => {
      off(liveVisitorsRef, 'value', unsubscribe);
    };
  }, []);

  return (
    <section className="bg-[#071630] rounded-2xl p-5 border border-blue-900/60 shadow-lg text-slate-300 space-y-4">
      
      {/* Widget Header */}
      <div className="flex items-center justify-between border-b border-blue-900/50 pb-3">
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4 text-blue-400" />
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">
            Global Live Visitor Flag Counter
          </h3>
        </div>

        {/* Live Status Pill with White Area Badge */}
        <div className="inline-flex items-center space-x-2 bg-blue-950/90 border border-blue-700/60 px-3 py-1 rounded-full text-[11px] font-bold text-blue-200">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <Activity className="w-3 h-3 text-blue-400" />
          <span>Active Delegates Online:</span>
          <span className="bg-white text-slate-900 px-2 py-0.5 rounded-md font-mono font-extrabold text-xs shadow-sm border border-slate-200">
            {hasError ? '—' : totalActive}
          </span>
        </div>
      </div>

      {/* 16 Country Flag Grid (2 rows on desktop: lg:grid-cols-8, responsive on mobile/tablet) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 pt-1">
        {TARGET_COUNTRIES.map((item) => {
          const count = countryCounts[item.code] || 0;
          return (
            <div
              key={item.code}
              className="flex items-center justify-between bg-blue-950/60 px-2.5 py-1.5 rounded-xl border border-blue-900/50 hover:border-blue-600 transition-colors text-xs"
            >
              <div className="flex items-center space-x-2 truncate">
                {/* Official Flag Image from FlagCDN */}
                <img
                  src={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`}
                  alt={`${item.country} flag`}
                  loading="lazy"
                  decoding="async"
                  width="20"
                  height="14"
                  className="w-5 h-3.5 object-cover rounded-[2px] shadow-xs flex-shrink-0"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'inline';
                    }
                  }}
                />
                <span className="hidden text-base leading-none">{item.flag || '🌐'}</span>
                <span className="font-semibold text-slate-200 text-[11px] truncate max-w-[65px]" title={item.country}>
                  {item.country}
                </span>
              </div>

              {/* White Rounded Number Badge */}
              <span className="bg-white text-slate-900 font-mono text-[11px] font-extrabold px-1.5 py-0.5 rounded-md shadow-sm border border-slate-200 flex-shrink-0 ml-1">
                {count}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer Details */}
      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
        <span>Real-time Geolocation Flag Tracker for Representing Countries</span>
        <span>Photonics AI 2028</span>
      </div>

    </section>
  );
}
