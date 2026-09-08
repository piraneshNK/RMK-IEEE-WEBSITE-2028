import React from 'react';
import { Compass, CheckCircle2, Download, Award, FileText } from 'lucide-react';

export default function TravelGrantSection() {
  const eligibilityList = [
    "Students and Research Scholars",
    "Early Career Researchers",
    "IEEE Student Members and Young Professionals",
    "Participants from developing countries",
    "Authors of accepted papers",
    "Women researchers and underrepresented groups in STEM"
  ];

  const coverageList = [
    "Airfare reimbursement (partial/full)",
    "Local accommodation support",
    "Conference registration waiver/reduction",
    "Local transportation assistance"
  ];

  return (
    <section id="travel-grant" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider text-[#2563eb] uppercase bg-blue-100/70 px-3 py-1 rounded-full">
            <Compass className="w-3.5 h-3.5" />
            <span>FINANCIAL SUPPORT & GRANTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Travel Grant Application
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Encouraging global participation from students, early-career researchers, and authors worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Eligibility & Criteria */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#2563eb] bg-blue-50 px-2.5 py-1 rounded-full">
                ELIGIBILITY
              </span>
              <h3 className="text-xl font-bold text-slate-900">Who Can Apply for Travel Grants</h3>
            </div>

            <ul className="space-y-2.5">
              {eligibilityList.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Evaluation & Selection Criteria</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evaluated based on paper quality, research innovation, financial need statement, IEEE membership status, and available sponsorship funding.
              </p>
            </div>

          </div>

          {/* Right Column: Grant Coverage & Direct Download Button */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                COVERAGE & BENEFITS
              </span>
              <h3 className="text-xl font-bold text-slate-900">Grant Coverage & Registration Form</h3>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Grant Support May Include:</h4>
              <ul className="space-y-2">
                {coverageList.map((c, i) => (
                  <li key={i} className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                    <Award className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-[#f0f6ff] rounded-2xl border border-blue-100 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-900">
                <FileText className="w-4 h-4 text-[#2563eb]" />
                <span>Travel Grant Registration Form (.docx)</span>
              </div>
              <p className="text-xs text-slate-600">
                Download the official Travel Grant Registration Form to complete your application.
              </p>
            </div>

            {/* Direct Download Button ONLY */}
            <div className="pt-2">
              <a
                href="/Travel grant registartion form.docx"
                download="Travel grant registartion form.docx"
                className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3.5 px-6 rounded-full shadow-lg shadow-blue-600/25 transition-all text-xs sm:text-sm flex items-center justify-center space-x-2.5 group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Travel Grant Application Form (.docx)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
