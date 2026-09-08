import React, { useState } from 'react';
import { MapPin, Navigation, Hotel, Plane, Train, Bus, ExternalLink, Calendar } from 'lucide-react';

export default function TravelSection() {
  const [hotelCategory, setHotelCategory] = useState('premium');

  const premiumHotels = [
    {
      name: "Taj Coromandel, Chennai",
      link: "https://www.booking.com/searchresults.html?ss=Taj%20Coromandel%2C%20Chennai%20Chennai",
      distance: "40 km",
      tariff: "₹15,000 – ₹22,000"
    },
    {
      name: "Hyatt Regency Chennai",
      link: "https://www.booking.com/searchresults.html?ss=Hyatt%20Regency%20Chennai%20Chennai",
      distance: "42 km",
      tariff: "₹12,000 – ₹18,000"
    },
    {
      name: "The Residency Towers Chennai",
      link: "https://www.booking.com/searchresults.html?ss=The%20Residency%20Towers%20Chennai%20Chennai",
      distance: "42 km",
      tariff: "₹10,000 – ₹15,000"
    },
    {
      name: "Courtyard by Marriott Chennai",
      link: "https://www.booking.com/searchresults.html?ss=Courtyard%20by%20Marriott%20Chennai%20Chennai",
      distance: "40 km",
      tariff: "₹10,000 – ₹16,000"
    }
  ];

  const businessHotels = [
    {
      name: "Green Park Chennai",
      link: "https://www.booking.com/searchresults.html?ss=Green%20Park%20Chennai%20Chennai",
      distance: "35 km",
      tariff: "₹6,500 – ₹10,000"
    },
    {
      name: "Radha Regent Chennai",
      link: "https://www.booking.com/searchresults.html?ss=Radha%20Regent%20Chennai%20Chennai",
      distance: "33 km",
      tariff: "₹6,000 – ₹9,000"
    },
    {
      name: "JP Hotel Chennai",
      link: "https://www.booking.com/searchresults.html?ss=JP%20Hotel%20Chennai%20Chennai",
      distance: "34 km",
      tariff: "₹5,500 – ₹8,500"
    },
    {
      name: "Ambica Empire Chennai",
      link: "https://www.booking.com/searchresults.html?ss=Ambica%20Empire%20Chennai%20Chennai",
      distance: "38 km",
      tariff: "₹5,000 – ₹8,000"
    }
  ];

  const budgetHotels = [
    {
      name: "Comfort Park Inn, Koyambedu",
      link: "https://www.booking.com/searchresults.html?ss=Comfort%20Park%20Inn%2C%20Koyambedu%20Chennai",
      distance: "32 km",
      tariff: "₹2,000 – ₹3,500"
    },
    {
      name: "Naksha Tree Hotels, Koyambedu",
      link: "https://www.booking.com/searchresults.html?ss=Naksha%20Tree%20Hotels%2C%20Koyambedu%20Chennai",
      distance: "32 km",
      tariff: "₹2,000 – ₹3,800"
    },
    {
      name: "MMs Chennai Gateway",
      link: "https://www.booking.com/searchresults.html?ss=MMs%20Chennai%20Gateway%20Chennai",
      distance: "33 km",
      tariff: "₹2,000 – ₹3,500"
    },
    {
      name: "Hotel Simsan",
      link: "https://www.booking.com/searchresults.html?ss=Hotel%20Simsan%20Chennai",
      distance: "34 km",
      tariff: "₹1,800 – ₹3,000"
    }
  ];

  const getHotelList = () => {
    if (hotelCategory === 'premium') return premiumHotels;
    if (hotelCategory === 'business') return businessHotels;
    return budgetHotels;
  };

  return (
    <section id="travel" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider text-[#2563eb] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            <Hotel className="w-3.5 h-3.5" />
            <span>STAY & TRANSPORTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hotel Accommodation Options Near RMKEC
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Click the live booking buttons to check current rates and availability on Booking.com.
          </p>
        </div>

        {/* Accommodation Matrix & Transit Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hotels & Stays */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Hotel Accommodation Options</h3>
                <p className="text-xs text-slate-500">Live Booking.com search buttons for each property</p>
              </div>

              {/* Selector Tabs */}
              <div className="flex items-center bg-slate-200/80 p-1 rounded-full text-xs font-bold">
                <button
                  onClick={() => setHotelCategory('premium')}
                  className={`px-3 py-1 rounded-full transition-all ${hotelCategory === 'premium' ? 'bg-[#2563eb] text-white' : 'text-slate-700'}`}
                >
                  Premium
                </button>
                <button
                  onClick={() => setHotelCategory('business')}
                  className={`px-3 py-1 rounded-full transition-all ${hotelCategory === 'business' ? 'bg-[#2563eb] text-white' : 'text-slate-700'}`}
                >
                  Business
                </button>
                <button
                  onClick={() => setHotelCategory('budget')}
                  className={`px-3 py-1 rounded-full transition-all ${hotelCategory === 'budget' ? 'bg-[#2563eb] text-white' : 'text-slate-700'}`}
                >
                  Budget
                </button>
              </div>
            </div>

            {/* Hotel Table with Action Buttons */}
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100/80 text-slate-700 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Hotel Name</th>
                    <th className="p-3.5">Distance from RMK EC</th>
                    <th className="p-3.5">Approx Tariff (INR/Night)</th>
                    <th className="p-3.5 text-right">Check Availability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {getHotelList().map((h, i) => (
                    <tr key={i} className="hover:bg-blue-50/40">
                      <td className="p-3.5 font-bold text-slate-900">{h.name}</td>
                      <td className="p-3.5 text-slate-600">{h.distance}</td>
                      <td className="p-3.5 font-semibold text-[#2563eb]">{h.tariff}</td>
                      <td className="p-3.5 text-right">
                        <a
                          href={h.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full transition-all shadow-sm hover:shadow active:scale-95"
                        >
                          <span>Check Rates</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* On-Campus Student Hostel */}
            <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 space-y-1 text-xs text-blue-950">
              <span className="font-bold text-[#2563eb] block">Student Hostel Accommodation:</span>
              <p>
                Limited on-campus hostel accommodation may be available for students and research scholars on a first-come, first-served basis. Details and booking procedures will be announced closer to the conference.
              </p>
            </div>

          </div>

          {/* Right Column: Transit & Directions */}
          <div className="lg:col-span-5 bg-[#0b1b3d] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
            
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-300 bg-blue-900/60 px-3 py-1 rounded-full">
                TRANSIT DISTANCES
              </span>
              <h3 className="text-xl font-bold text-white mt-2">Transportation to Campus</h3>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-3 p-3 bg-blue-900/30 rounded-xl border border-blue-800/40">
                <Plane className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Chennai International Airport (MAA)</h4>
                  <p className="text-slate-300">~45–50 km (~1.5 hours by taxi/cab depending on traffic)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-blue-900/30 rounded-xl border border-blue-800/40">
                <Train className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Railway Stations</h4>
                  <p className="text-slate-300">Chennai Central ~38 km | Egmore ~40 km | Kavaraipettai Railway Station ~2-5 km (EMU suburban train stop)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-blue-900/30 rounded-xl border border-blue-800/40">
                <Bus className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Bus Termini</h4>
                  <p className="text-slate-300">CMBT Koyambedu ~32 km | Red Hills Bus Terminus ~20 km</p>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-blue-950/80 rounded-xl border border-blue-800/60 text-xs text-blue-200">
              <span className="font-bold text-white block mb-0.5">Conference Shuttle Service:</span>
              <span>Shuttle buses may be arranged between selected hotels and RMK Engineering College during conference days.</span>
            </div>

            <a
              href="https://maps.google.com/?q=RMK+Engineering+College"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3 rounded-full transition-all text-xs flex items-center justify-center space-x-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Open Campus Location in Google Maps</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
