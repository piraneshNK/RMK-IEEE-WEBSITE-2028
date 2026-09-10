import React, { useState } from 'react';
import { Cpu, Users, GitBranch, Lightbulb, ArrowRight, Shield, Award, CheckCircle2, ExternalLink } from 'lucide-react';

export default function AboutSection() {
  const [showFullAbout, setShowFullAbout] = useState(false);

  const features = [
    {
      icon: Cpu,
      title: "Cutting-edge Research",
      description: "Explore advances in Artificial Intelligence, Photonics, and Silicon Photonics."
    },
    {
      icon: Users,
      title: "Global Experts",
      description: "Network with leading scientists, practitioners, and industry pioneers."
    },
    {
      icon: GitBranch,
      title: "Interdisciplinary Tracks",
      description: "Optical computing, Photonic sensing, Quantum photonics & Intelligent systems."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Impact",
      description: "Bridging fundamental physics, semiconductor devices, and real-world AI."
    }
  ];

  return (
    <section id="about" className="py-14 lg:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Tag */}
            <div className="flex items-center space-x-2">
              <span className="w-6 h-0.5 bg-[#2563eb] rounded"></span>
              <span className="text-xs font-bold tracking-wider text-[#2563eb] uppercase">
                ABOUT THE CONFERENCE
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Photonics AI 2028
            </h2>

            {/* User Paragraph */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Photonics AI 2028 – International Conference on Artificial Intelligence in Photonic Systems is an interdisciplinary global forum that brings together researchers, academicians, and industry experts to explore the convergence of artificial intelligence and photonic technologies. The conference focuses on advancing intelligent photonic systems for next-generation computing, communications, sensing, and imaging, including areas such as optical neural networks, silicon photonics, AI-driven optical communications, and quantum photonics. It aims to foster innovation in energy-efficient, high-speed, and intelligent light-based technologies that will shape future AI-enabled infrastructures and smart systems worldwide.
            </p>

            {/* Badges / IEEE Support */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center space-x-2.5 bg-blue-50/80 p-3 rounded-xl border border-blue-100 text-xs font-bold text-slate-800">
                <Shield className="w-4 h-4 text-[#2563eb] flex-shrink-0" />
                <span>
                  Organised by{' '}
                  <a 
                    href="https://www.rmkec.ac.in/2023/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#2563eb] hover:underline font-bold"
                    title="Visit R.M.K. Engineering College Official Website"
                  >
                    R.M.K. Engineering College
                  </a>
                </span>
              </div>

            </div>

            {/* Expander detail */}
            {showFullAbout && (
              <div className="space-y-3 pt-3 text-xs text-slate-600 border-t border-slate-100 animate-fadeIn">
                <p>
                  Hosted at <a href="https://www.rmkec.ac.in/2023/" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] hover:text-blue-800 font-bold underline underline-offset-2 transition-colors" title="Visit R.M.K. Engineering College Home Page">R.M.K. Engineering College</a> (Autonomous Institution, Kavaraipettai, Chennai), the flagship international symposium fosters global scientific collaboration across semiconductor devices, smart sensing, and quantum technologies.
                </p>
                <div className="flex items-center space-x-2 font-semibold text-[#2563eb]">
                  <CheckCircle2 className="w-4 h-4" />
                  <a href="https://www.rmkec.ac.in/2023/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Learn more about R.M.K. Engineering College Campus →
                  </a>
                </div>
              </div>
            )}

            {/* Action Link */}
            <div className="pt-1">
              <button
                onClick={() => setShowFullAbout(!showFullAbout)}
                className="inline-flex items-center space-x-1.5 text-[#2563eb] hover:text-[#1d4ed8] font-bold text-sm group"
              >
                <span>{showFullAbout ? 'Show Less' : 'Learn More'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: 4 Horizontal Columns divided by 1px vertical borders */}
          <div className="lg:col-span-7 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-0 xl:divide-x xl:divide-slate-200">
              {features.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col space-y-3 xl:px-5 first:pl-0 last:pr-0"
                  >
                    {/* Icon Circle */}
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#2563eb]">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-slate-900 leading-snug">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
