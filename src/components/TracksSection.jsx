import React, { useState } from 'react';
import { Cpu, Binary, Waves, Network, Layers, Zap, ArrowRight, Check } from 'lucide-react';

export default function TracksSection() {
  const [activeTrack, setActiveTrack] = useState(0);

  const tracks = [
    {
      title: "Optical Computing & AI Accelerators",
      icon: Cpu,
      summary: "Silicon photonics hardware architectures for matrix multiplication, ultra-fast tensor acceleration, and low-latency optical computing.",
      topics: [
        "Silicon Photonic Tensor Cores & Accelerators",
        "Free-space & Waveguide Optical Matrix Multipliers",
        "Low-energy Electro-optic Modulators",
        "Hybrid CMOS-Photonic Co-packaged Systems"
      ],
      chairs: "Dr. A. R. Ramanathan & Dr. Sarah Jenkins"
    },
    {
      title: "Photonic Neural Networks",
      icon: Binary,
      summary: "Deep learning algorithms mapped to optical domains, coherent optical neural networks, and non-linear optical activation layers.",
      topics: [
        "Coherent & Incoherent Optical Neural Architectures",
        "Optical Activation Functions & Non-linear Materials",
        "On-chip Training & Inference Algorithms",
        "Diffractive Optical Neural Networks (DONN)"
      ],
      chairs: "Prof. Michael Zhang & Dr. K. Priya"
    },
    {
      title: "Quantum Photonics & Sensing",
      icon: Waves,
      summary: "Quantum light sources, single-photon detectors, quantum AI algorithms, and optical sensing powered by machine learning.",
      topics: [
        "On-chip Single Photon & Entangled State Sources",
        "Quantum Neural Networks & Machine Learning",
        "Photonic Quantum Key Distribution (QKD)",
        "AI-enhanced Precision Quantum Sensing"
      ],
      chairs: "Dr. Elena Rostova & Prof. V. Sundaram"
    },
    {
      title: "Neuromorphic Photonics",
      icon: Network,
      summary: "Brain-inspired photonic computing systems, spiking optical neurons, and ultra-high bandwidth neuromorphic architectures.",
      topics: [
        "Photonic Spiking Neurons & Synaptic Devices",
        "Laser-based Reservoir Computing Systems",
        "Phase-Change Material (PCM) Optical Memory",
        "Ultrafast Event-based Optical Information Processing"
      ],
      chairs: "Prof. David Miller & Dr. N. Anand"
    },
    {
      title: "Integrated Nanophotonics",
      icon: Layers,
      summary: "Metamaterials, nanophotonic structures, plasmonic waveguides, and novel 2D materials for optical processing.",
      topics: [
        "Metasurfaces for Beam Steering & Wavefront Shaping",
        "Plasmonic & Graphene Electro-optic Devices",
        "Heterogeneous Integration of III-V on Silicon",
        "Sub-wavelength Photonic Crystal Logic Gates"
      ],
      chairs: "Dr. Claire Dubois & Dr. S. Balaji"
    },
    {
      title: "AI for Optical Communications",
      icon: Zap,
      summary: "Machine learning applications in optical fiber networks, signal equalization, autonomous network management, and spatial division multiplexing.",
      topics: [
        "Deep Learning for Optical Fiber Nonlinearity Compensation",
        "Autonomous Photonic Network Management & Routing",
        "AI-driven Spatial Division Multiplexing (SDM)",
        "Optical Performance Monitoring using Neural Nets"
      ],
      chairs: "Prof. Kenji Takahashi & Dr. R. Lakshmi"
    }
  ];

  return (
    <section id="tracks" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-[#2563eb] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold tracking-wider text-[#2563eb] uppercase">
            CONFERENCE TRACKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Research Tracks
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Detailed research scope spanning six core technical tracks at the intersection of photonics and AI.
          </p>
        </div>

        {/* Tracks selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Track Navigation */}
          <div className="lg:col-span-5 space-y-2">
            {tracks.map((track, index) => {
              const Icon = track.icon;
              const isSelected = activeTrack === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTrack(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-150 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-white border-[#2563eb] shadow-sm text-slate-900 font-bold'
                      : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#2563eb] text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold">
                      Track 0{index + 1}: {track.title}
                    </span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#2563eb] translate-x-1' : 'text-slate-300'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Track Details */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb] bg-blue-50 px-3 py-1 rounded-full">
                TRACK 0{activeTrack + 1}
              </span>
              <span className="text-xs text-slate-400 font-medium">IEEE Photonics AI 2028</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900">
              {tracks[activeTrack].title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              {tracks[activeTrack].summary}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Topic Scope
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tracks[activeTrack].topics.map((topic, i) => (
                  <div key={i} className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <Check className="w-3.5 h-3.5 text-[#2563eb] mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-medium text-slate-700 leading-snug">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                <strong className="text-slate-700">Track Chairs:</strong> {tracks[activeTrack].chairs}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
