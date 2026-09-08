import React from 'react';
import { ShieldCheck, ExternalLink, AlertTriangle, FileText } from 'lucide-react';

export default function VisaSection() {
  return (
    <section id="visa" className="py-16 lg:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0b1b3d] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-blue-800/60">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-blue-300 uppercase bg-blue-900/60 px-3 py-1 rounded-full border border-blue-700/50">
                <ShieldCheck className="w-4 h-4" />
                <span>FOREIGN PARTICIPANTS GUIDE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Indian Visa Information for Delegates
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://indianvisaonline.gov.in/evisa/tvoa.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs px-5 py-3 rounded-full transition-all shadow-md flex items-center space-x-1.5"
              >
                <span>Official e-Visa Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-xs sm:text-sm">
            
            <div className="lg:col-span-7 space-y-4 text-slate-300 leading-relaxed">
              <p>
                All foreign nationals traveling to India for participation in <strong className="text-white">PHOTONICS AI 2028</strong> are advised to obtain a valid Indian Visa prior to travel. Participants may apply for either an <strong className="text-white">e-Conference Visa</strong> or a regular Conference Visa depending on nationality.
              </p>
              
              <div className="p-4 bg-blue-950/80 rounded-2xl border border-blue-800/60 space-y-2 text-xs">
                <div className="flex items-center space-x-2 text-amber-400 font-bold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Official Government Visa Advisory</span>
                </div>
                <p className="text-slate-300">
                  Participants are strongly advised to use strictly the official Government of India portal (<a href="https://www.indianvisaonline.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline font-bold">indianvisaonline.gov.in</a>) and avoid unauthorized third-party agencies or fraudulent visa sites.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-blue-900/40 p-6 rounded-2xl border border-blue-800/50 space-y-4">
              <h3 className="font-bold text-white text-base">Visa Support & Invitation Letters</h3>
              <p className="text-xs text-slate-300">
                Official conference invitation letters for visa processing will be issued to registered foreign authors upon verification.
              </p>
              
              <div className="pt-2">
                <a
                  href="mailto:tdsubash2007@gmail.com?subject=Visa%20Invitation%20Letter%20Request%20-%20Photonics%20AI%202028"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-blue-300 hover:text-white underline"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Official Invitation Letter</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
