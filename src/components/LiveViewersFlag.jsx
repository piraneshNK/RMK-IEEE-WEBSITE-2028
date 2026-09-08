import React, { useState } from 'react';
import { Globe, Activity } from 'lucide-react';

export default function LiveViewersFlag() {
  const [liveCount] = useState(0);

  const flagVisitors = [
    { country: "United States", flag: "🇺🇸", count: 0, code: "us" },
    { country: "India", flag: "🇮🇳", count: 0, code: "in" },
    { country: "Malaysia", flag: "🇲🇾", count: 0, code: "my" },
    { country: "Switzerland", flag: "🇨🇭", count: 0, code: "ch" },
    { country: "China", flag: "🇨🇳", count: 0, code: "cn" },
    { country: "Egypt", flag: "🇪🇬", count: 0, code: "eg" },
    { country: "Germany", flag: "🇩🇪", count: 0, code: "de" },
    { country: "Japan", flag: "🇯🇵", count: 0, code: "jp" },
    { country: "United Kingdom", flag: "🇬🇧", count: 0, code: "gb" },
    { country: "Singapore", flag: "🇸🇬", count: 0, code: "sg" },
    { country: "Australia", flag: "🇦🇺", count: 0, code: "au" },
    { country: "Canada", flag: "🇨🇦", count: 0, code: "ca" },
    { country: "France", flag: "🇫🇷", count: 0, code: "fr" },
    { country: "Italy", flag: "🇮🇹", count: 0, code: "it" },
    { country: "Poland", flag: "🇵🇱", count: 0, code: "pl" },
    { country: "Taiwan", flag: "🇹🇼", count: 0, code: "tw" },
  ];

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
            {liveCount}
          </span>
        </div>
      </div>

      {/* Country Flag Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 pt-1">
        {flagVisitors.map((v, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-blue-950/60 px-2.5 py-1.5 rounded-xl border border-blue-900/50 hover:border-blue-600 transition-colors text-xs"
          >
            <div className="flex items-center space-x-2 truncate">
              {/* Original Color Flag Image */}
              <img
                src={`https://flagcdn.com/w40/${v.code.toLowerCase()}.png`}
                alt={`${v.country} official flag`}
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
              <span className="hidden text-base leading-none">{v.flag}</span>
              <span className="font-semibold text-slate-200 text-[11px] truncate max-w-[65px]">
                {v.country}
              </span>
            </div>

            {/* White Area Count Badge */}
            <span className="bg-white text-slate-900 font-mono text-[11px] font-extrabold px-1.5 py-0.5 rounded-md shadow-sm border border-slate-200 flex-shrink-0 ml-1">
              {v.count}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
        <span>Real-time Geolocation Flag Tracker for Representing Countries</span>
        <span>IEEE Photonics AI 2028</span>
      </div>

    </section>
  );
}
