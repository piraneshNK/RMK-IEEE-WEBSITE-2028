import React, { useState, useEffect } from 'react';
import { Globe, Users, Activity } from 'lucide-react';

export default function LiveViewersFlag() {
  const [liveCount, setLiveCount] = useState(48);

  const flagVisitors = [
    { country: "United States", flag: "🇺🇸", count: 14, code: "US" },
    { country: "India", flag: "🇮🇳", count: 12, code: "IN" },
    { country: "Germany", flag: "🇩🇪", count: 6, code: "DE" },
    { country: "Japan", flag: "🇯🇵", count: 5, code: "JP" },
    { country: "United Kingdom", flag: "🇬🇧", count: 4, code: "GB" },
    { country: "Switzerland", flag: "🇨🇭", count: 3, code: "CH" },
    { country: "Australia", flag: "🇦🇺", count: 2, code: "AU" },
    { country: "Singapore", flag: "🇸🇬", count: 2, code: "SG" },
  ];

  // Subtle live fluctuation effect for realistic online count
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
      setLiveCount(prev => Math.max(38, Math.min(65, prev + delta)));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#071630] rounded-2xl p-5 border border-blue-900/60 shadow-lg text-slate-300 space-y-4">
      
      {/* Widget Header */}
      <div className="flex items-center justify-between border-b border-blue-900/50 pb-3">
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Global Live Visitor Flag Counter
          </span>
        </div>

        {/* Live Status Pill */}
        <div className="inline-flex items-center space-x-1.5 bg-emerald-950/80 border border-emerald-700/60 px-2.5 py-1 rounded-full text-[11px] font-bold text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <Activity className="w-3 h-3 text-emerald-400 ml-0.5" />
          <span>{liveCount} Active Delegates Online</span>
        </div>
      </div>

      {/* Country Flag Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
        {flagVisitors.map((v, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-blue-950/40 px-3 py-1.5 rounded-xl border border-blue-900/40 hover:border-blue-700/60 transition-colors text-xs"
          >
            <div className="flex items-center space-x-2">
              <span className="text-base leading-none">{v.flag}</span>
              <span className="font-semibold text-slate-200 text-[11px] truncate max-w-[80px]">
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
        <span>Real-time IP Geolocation Flag Tracker</span>
        <span>IEEE Photonics AI 2028</span>
      </div>

    </div>
  );
}
