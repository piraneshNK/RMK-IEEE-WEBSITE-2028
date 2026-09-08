import React, { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  // Target Conference Date: April 27, 2028
  const targetDate = new Date('2028-04-27T09:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 596,
    hours: 21,
    minutes: 51,
    seconds: 47,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-10 pb-14 lg:pt-16 lg:pb-28 bg-ieee-hero overflow-hidden border-b border-blue-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Text, Timing & Supported By Logos (5 Cols on Desktop) */}
          <div className="lg:col-span-5 space-y-5 text-left z-10">
            
            {/* Category Tag */}
            <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wider text-[#2563eb] uppercase">
              <span>27-28 APRIL 2028</span>
              <span className="text-blue-400 font-bold">·</span>
              <span>IEEE INTERNATIONAL CONFERENCE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              International <br />
              Conference on <br />
              <span className="text-[#2563eb]">Photonics AI</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-medium italic">
              Intelligent photonics meets artificial intelligence
            </p>

            {/* Event Info Strip */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-slate-700 text-sm sm:text-base font-semibold pt-1">
              <div className="inline-flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-[#2563eb]" />
                <span>27–28 Apr 2028</span>
              </div>
              <span className="text-slate-300 font-light hidden sm:inline">|</span>
              <div className="inline-flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#2563eb]" />
                <span>RMK Engineering College, Chennai, India</span>
              </div>
            </div>

            {/* Countdown Timing Boxes */}
            <div className="pt-1">
              <div className="grid grid-cols-4 gap-3 max-w-md">
                
                {/* DAYS */}
                <div className="bg-white rounded-xl p-3.5 text-center border border-blue-200/80 shadow-sm">
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-sans tracking-tight leading-none">
                    {String(timeLeft.days).padStart(3, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mt-2 block">
                    DAYS
                  </span>
                </div>

                {/* HRS */}
                <div className="bg-white rounded-xl p-3.5 text-center border border-blue-200/80 shadow-sm">
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-sans tracking-tight leading-none">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mt-2 block">
                    HRS
                  </span>
                </div>

                {/* MIN */}
                <div className="bg-white rounded-xl p-3.5 text-center border border-blue-200/80 shadow-sm">
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-sans tracking-tight leading-none">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mt-2 block">
                    MIN
                  </span>
                </div>

                {/* SEC */}
                <div className="bg-white rounded-xl p-3.5 text-center border border-blue-200/80 shadow-sm">
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-sans tracking-tight leading-none text-[#2563eb]">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mt-2 block">
                    SEC
                  </span>
                </div>

              </div>
            </div>

            {/* Supported By Logos Strip (Placed directly below title and timing) */}
            <div className="pt-4 space-y-2 border-t border-blue-200/60">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                Supported By & Technical Co-Sponsors
              </span>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                {/* Logo 1: IEEE */}
                <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center hover:border-blue-300 transition-colors">
                  <img
                    src="/ieee-logo.jpg"
                    alt="IEEE Logo"
                    className="h-7 sm:h-8 w-auto object-contain mix-blend-multiply"
                  />
                </div>

                {/* Logo 2: IEEE Photonics Society */}
                <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center hover:border-blue-300 transition-colors">
                  <img
                    src="/ieee-photonics-logo.png"
                    alt="IEEE Photonics Society Logo"
                    className="h-7 sm:h-8 w-auto object-contain mix-blend-multiply"
                  />
                </div>

                {/* Logo 3: AI at IEEE */}
                <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center hover:border-blue-300 transition-colors">
                  <img
                    src="/ai-at-ieee-logo.png"
                    alt="AI at IEEE Logo"
                    className="h-7 sm:h-8 w-auto object-contain mix-blend-multiply"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Transparent MAIN-PAGE Image */}
          <div className="lg:col-span-7 relative mt-6 lg:mt-0 flex items-center justify-center lg:justify-end pointer-events-none">
            <div className="w-full lg:w-[130%] lg:-mr-20 xl:-mr-28 transform lg:scale-115 xl:scale-125 origin-right transition-transform duration-500">
              <img
                src="/main-page.png"
                alt="IEEE Photonics AI 2028 Transparent Graphic"
                className="w-full h-auto max-h-[660px] object-contain drop-shadow-sm"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/main-page-nobg.png";
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
