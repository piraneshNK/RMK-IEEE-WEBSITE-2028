import React from 'react';
import { UserCheck, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function RegistrationSection() {
  const categories = [
    { title: "Society Members", desc: "Discounted rates for active Photonics Society members." },
    { title: "Non-Member Participants", desc: "Full access delegate tier for academic & non-member authors." },
    { title: "Students & Scholars", desc: "Subsidized tier for undergraduate, postgraduate & PhD scholars." },
    { title: "Authors (Indian)", desc: "National presenter registration for accepted papers." },
    { title: "Authors (International)", desc: "Global author registration with proceedings index." },
    { title: "Industry Participants", desc: "Corporate delegates & technology partners." },
    { title: "Attendees / Listeners", desc: "Non-presenting delegates & session participants." }
  ];

  const benefits = [
    "Access to all keynote talks and technical sessions",
    "Conference kit and participation materials",
    "Presentation opportunities for accepted papers",
    "Conference proceedings access",
    "Participation certificate",
    "Networking and collaboration opportunities",
    "Access to workshops, tutorials, and special sessions"
  ];

  return (
    <section id="registration" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider text-[#2563eb] uppercase bg-blue-100/70 px-3 py-1 rounded-full">
            <UserCheck className="w-3.5 h-3.5" />
            <span>DELEGATE CATEGORIES & BENEFITS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Conference Registration Overview
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Warmly inviting researchers, academicians, industry professionals, startups, and students worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Categories Grid */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              Registration Categories
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categories.map((cat, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm">{cat.title}</h4>
                  <p className="text-xs text-slate-500">{cat.desc}</p>
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-[#2563eb]">
                Registration Steps Overview
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="space-y-1">
                  <span className="text-xs font-extrabold text-[#2563eb] bg-blue-50 px-2 py-0.5 rounded">STEP 1</span>
                  <p className="text-xs font-bold text-slate-800">Online Form Submission</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-extrabold text-[#2563eb] bg-blue-50 px-2 py-0.5 rounded">STEP 2</span>
                  <p className="text-xs font-bold text-slate-800">Payment Document Verification</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-extrabold text-[#2563eb] bg-blue-50 px-2 py-0.5 rounded">STEP 3</span>
                  <p className="text-xs font-bold text-slate-800">Confirmation Dispatch</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-extrabold text-[#2563eb] bg-blue-50 px-2 py-0.5 rounded">STEP 4</span>
                  <p className="text-xs font-bold text-slate-800">Final Verification</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Benefits & Notes */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563eb] bg-blue-50 px-3 py-1 rounded-full">
                DELEGATE BENEFITS
              </span>
              <h3 className="text-xl font-bold text-slate-900">What Registered Delegates Receive</h3>
            </div>

            <ul className="space-y-2.5">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start space-x-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/80 space-y-1.5 text-xs text-amber-950">
              <div className="flex items-center space-x-2 font-bold text-amber-900">
                <ShieldAlert className="w-4 h-4 text-amber-700" />
                <span>Important Author Guidelines</span>
              </div>
              <p className="leading-relaxed">
                At least one author of each accepted paper must complete registration for inclusion in the proceedings. Registration fees are non-transferable. Valid student ID required for student rate.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
