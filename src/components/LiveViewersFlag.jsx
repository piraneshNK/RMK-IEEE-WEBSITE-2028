import React, { useState } from 'react';
import { Globe, Activity } from 'lucide-react';

export default function LiveViewersFlag() {
  const [liveCount] = useState(0);

  const flagVisitors = [
    { country: "United States", flag: "🇺🇸", count: 0, code: "US" },
    { country: "India", flag: "🇮🇳", count: 0, code: "IN" },
    { country: "Malaysia", flag: "🇲🇾", count: 0, code: "MY" },
    { country: "Switzerland", flag: "🇨🇭", count: 0, code: "CH" },
    { country: "China", flag: "🇨🇳", count: 0, code: "CN" },
    { country: "Egypt", flag: "🇪🇬", count: 0, code: "EG" },
    { country: "Germany", flag: "🇩🇪", count: 0, code: "DE" },
    { country: "Japan", flag: "🇯🇵", count: 0, code: "JP" },
    { country: "United Kingdom", flag: "🇬🇧", count: 0, code: "GB" },
    { country: "Singapore", flag: "🇸🇬", count: 0, code: "SG" },
    { country: "Australia", flag: "🇦🇺", count: 0, code: "AU" },
    { country: "Canada", flag: "🇨🇦", count: 0, code: "CA" },
    { country: "France", flag: "🇫🇷", count: 0, code: "FR" },
    { country: "Italy", flag: "🇮🇹", count: 0, code: "IT" },
    { country: "Poland", flag: "🇵🇱", count: 0, code: "PL" },
    { country: "Taiwan", flag: "🇹🇼", count: 0, code: "TW" },
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

        {/* Live Status Pill */}
        <div className="inline-flex items-center space-x-1.5 bg-blue-950/80 border border-blue-700/60 px-2.5 py-1 rounded-full text-[11px] font-bold text-blue-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <Activity className="w-3 h-3 text-blue-400 ml-0.5" />
          <span>{liveCount} Active Delegates Online</span>
        </div>
      </div>

      {/* Country Flag Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 pt-1">
        {flagVisitors.map((v, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-blue-950/40 px-2.5 py-1.5 rounded-xl border border-blue-900/40 hover:border-blue-700/60 transition-colors text-xs"
          >
            <div className="flex items-center space-x-1.5 truncate">
              <span className="text-base leading-none">{v.flag}</span>
              <span className="font-semibold text-slate-200 text-[11px] truncate max-w-[70px]">
                {v.country}
              </span>
            </div>
            <span className="font-mono text-[11px] font-bold text-blue-400 bg-blue-900/50 px-1.5 py-0.5 rounded">
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
