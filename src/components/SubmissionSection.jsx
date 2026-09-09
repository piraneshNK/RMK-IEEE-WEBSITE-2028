import React from 'react';
import { FileText, Download, CheckCircle, Shield, Info, ArrowUpRight } from 'lucide-react';

export default function SubmissionSection() {
  return (
    <section id="submit" className="py-16 lg:py-24 bg-slate-50 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider text-[#2563eb] uppercase bg-blue-100/70 px-3 py-1 rounded-full">
              <FileText className="w-3.5 h-3.5" />
              <span>CALL FOR PAPERS & GUIDELINES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Paper Guidelines & Publication Standards
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              PHOTONICS AI 2028 invites original research papers, review articles, industrial case studies, and innovative technological contributions from researchers, academicians, industry professionals, scientists, and students worldwide.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#2563eb] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Format Standard</h4>
                  <p className="text-xs text-slate-600">Standard two-column manuscript format (4 to 6 pages including figures and references in English).</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#2563eb] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Peer Review & Plagiarism Policy</h4>
                  <p className="text-xs text-slate-600">Submissions undergo rigorous peer-review process and must adhere strictly to plagiarism limits.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#2563eb] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">PDF eXpress Compliance</h4>
                  <p className="text-xs text-slate-600">Camera-ready papers must comply with PDF formatting and eCopyright requirements.</p>
                </div>
              </div>
            </div>

            {/* Template Download Button */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="https://www.ieee.org/conferences/publishing/templates.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-100 text-slate-700 font-bold px-6 py-3 rounded-full border border-slate-300 shadow-sm transition-all flex items-center space-x-2 text-sm"
              >
                <Download className="w-4 h-4 text-[#2563eb]" />
                <span>MS Word / LaTeX Template</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-50 text-[#2563eb] rounded-2xl border border-blue-100">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg">Digital Library Publication</h3>
                    <p className="text-xs text-slate-500 font-medium">Subject to Approval & Quality Review</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  Official Proceedings
                </span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                All accepted and presented papers will be submitted for inclusion in the Digital Library, subject to approval, quality review, and compliance with publication requirements.
              </p>

              <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 space-y-2">
                <div className="flex items-center space-x-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
                  <Info className="w-4 h-4 text-[#2563eb]" />
                  <span>Journal Recommendation Pathway</span>
                </div>
                <p className="text-xs text-blue-950 leading-relaxed">
                  Selected high-quality papers may also be recommended for extended versions in reputed SCI/Scopus-indexed journals after substantial extension and additional peer review.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
