import React, { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  // Target Conference Date: April 27, 2028 09:00 IST
  const targetDate = Date.parse('2028-04-27T09:00:00+05:30');

  const [timeLeft, setTimeLeft] = useState(() => {
    const now = Date.now();
    const difference = targetDate - now;
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section id="hero" className="relative pt-10 pb-14 lg:pt-16 lg:pb-28 bg-ieee-hero overflow-hidden border-b border-blue-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Text & Timing (5 Cols on Desktop) */}
          <div className="lg:col-span-5 space-y-5 text-left z-10">
            
            {/* Category Tag */}
            <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wider text-[#2563eb] uppercase">
              <span>27TH – 28TH APRIL, 2028</span>
              <span className="text-blue-400 font-bold">·</span>
              <span>INTERNATIONAL CONFERENCE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              International <br />
              Conference on <br />
              <span className="text-[#2563eb]">Artificial Intelligence</span> <br />
              in Photonic Systems
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-medium italic">
              – intelligent photonics meets AI
            </p>

            {/* Event Info Strip */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-slate-700 text-sm sm:text-base font-semibold pt-1">
              <div className="inline-flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-[#2563eb]" />
                <span>27th – 28th April, 2028</span>
              </div>
              <span className="text-slate-300 font-light hidden sm:inline">|</span>
              <div className="inline-flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#2563eb]" />
                <span>
                  <a 
                    href="https://www.rmkec.ac.in/2023/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-800 hover:text-[#2563eb] font-bold underline underline-offset-4 decoration-blue-400/50 hover:decoration-blue-600 transition-colors"
                    title="Visit R.M.K. Engineering College Home Page"
                  >
                    R.M.K. Engineering College
                  </a>, Chennai, India
                </span>
              </div>
            </div>

            {/* Countdown Timing Boxes */}
            <div className="pt-1">
              <div className="grid grid-cols-4 gap-3 max-w-md" aria-label="Conference Event Countdown Timer">
                
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



          </div>

          {/* Right Column: Transparent MAIN-PAGE Image */}
          <div className="lg:col-span-7 relative mt-6 lg:mt-0 flex items-center justify-center lg:justify-end pointer-events-none">
            <figure className="w-full lg:w-[130%] lg:-mr-20 xl:-mr-28 transform lg:scale-115 xl:scale-125 origin-right transition-transform duration-500">
              <img
                src="/main-page.png"
                alt="Photonics AI 2028 Conference Keynote Banner Graphic"
                loading="eager"
                decoding="async"
                width="800"
                height="660"
                className="w-full h-auto max-h-[660px] object-contain drop-shadow-sm"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/main-page-nobg.png";
                }}
              />
            </figure>
          </div>

        </div>
      </div>
    </section>
  );
}
