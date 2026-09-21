import React, { useState } from 'react';
import {
  Sliders,
  Cpu,
  Network,
  Eye,
  Layers,
  Sparkles,
  Atom,
  Flame,
  HeartPulse,
  Grid,
  Radio,
  Globe,
  ArrowRight,
  Check
} from 'lucide-react';

export default function TracksSection() {
  const [activeTrack, setActiveTrack] = useState(0);

  const tracks = [
    {
      title: "AI/ML for Photonic Design and Optimization",
      icon: Sliders,
      topics: [
        "AI/ML-assisted photonic device design",
        "Inverse design and topology optimization",
        "Neural-network-based photonic simulation",
        "Generative AI for photonic structures",
        "Surrogate modelling and reduced-order models",
        "Evolutionary and swarm optimization",
        "AI-assisted PIC design and optimization",
        "Automated photonic design workflows"
      ],
      chairs: "To be announced"
    },
    {
      title: "Photonic Computing and AI Hardware",
      icon: Cpu,
      topics: [
        "Optical computing architectures",
        "Photonic AI accelerators",
        "Optical neural networks",
        "Neuromorphic photonics",
        "Photonic tensor processors",
        "Analog optical computing",
        "Reservoir computing",
        "In-memory photonic computing",
        "Energy-efficient AI hardware"
      ],
      chairs: "To be announced"
    },
    {
      title: "AI-Enabled Optical Communications and Networks",
      icon: Network,
      topics: [
        "Machine learning for optical communications",
        "Intelligent optical networks",
        "AI-assisted modulation and detection",
        "Nonlinearity compensation",
        "Equalization and channel estimation",
        "Autonomous optical networks",
        "Optical network optimization",
        "AI for 5G/6G and beyond",
        "Data-center optical interconnects",
        "Photonics for AI infrastructure"
      ],
      chairs: "To be announced"
    },
    {
      title: "Intelligent Photonic Sensing and Imaging",
      icon: Eye,
      topics: [
        "AI-enabled optical sensors",
        "Machine learning for fiber-optic sensing",
        "Intelligent LiDAR",
        "Computational imaging",
        "AI-assisted microscopy",
        "Hyperspectral imaging",
        "Remote sensing",
        "Spectroscopy and AI",
        "Multimodal photonic sensing",
        "Edge AI for sensing"
      ],
      chairs: "To be announced"
    },
    {
      title: "AI for Integrated Photonics and Silicon Photonics",
      icon: Layers,
      topics: [
        "AI-assisted photonic integrated circuit design",
        "Silicon photonics",
        "Hybrid and heterogeneous integration",
        "Photonic-electronic co-design",
        "AI-assisted PDKs and design automation",
        "Reconfigurable photonic circuits",
        "Integrated lasers, modulators and detectors",
        "Co-packaged optics",
        "AI-enabled photonic systems"
      ],
      chairs: "To be announced"
    },
    {
      title: "Generative AI, Foundation Models and Agentic Photonics",
      icon: Sparkles,
      topics: [
        "Generative AI for photonic design",
        "Large language models for photonics",
        "AI agents for scientific discovery",
        "Autonomous photonic experimentation",
        "AI-assisted simulation and modelling",
        "Digital twins for photonic systems",
        "Multimodal foundation models",
        "Physics-informed generative AI",
        "AI-assisted fabrication and process optimization"
      ],
      chairs: "To be announced"
    },
    {
      title: "Quantum Photonics and AI",
      icon: Atom,
      topics: [
        "Quantum machine learning",
        "Photonic quantum computing",
        "Quantum neural networks",
        "AI-assisted quantum photonic design",
        "Quantum communication",
        "Quantum sensing",
        "Quantum photonic integrated circuits",
        "AI for quantum error mitigation",
        "Hybrid quantum-classical photonic systems"
      ],
      chairs: "To be announced"
    },
    {
      title: "AI for Lasers, Nonlinear and Ultrafast Photonics",
      icon: Flame,
      topics: [
        "ML-assisted laser design",
        "Intelligent laser control",
        "Ultrafast optical systems",
        "Nonlinear photonics and AI",
        "AI-assisted pulse shaping",
        "Supercontinuum generation",
        "Data-driven nonlinear optics",
        "AI-assisted optical frequency combs",
        "Adaptive and autonomous optical systems"
      ],
      chairs: "To be announced"
    },
    {
      title: "AI-Enabled Biomedical and Biophotonics",
      icon: HeartPulse,
      topics: [
        "AI for biomedical imaging",
        "Optical diagnostics",
        "Photonic biosensors",
        "AI-assisted spectroscopy",
        "Computational pathology",
        "Optical coherence tomography",
        "Wearable photonic sensors",
        "Photonics for healthcare",
        "AI-enabled point-of-care systems"
      ],
      chairs: "To be announced"
    },
    {
      title: "Emerging Materials, Metasurfaces and Nanophotonics",
      icon: Grid,
      topics: [
        "AI-designed metasurfaces",
        "Nanophotonics",
        "Photonic crystals",
        "Plasmonics",
        "2D materials and photonics",
        "AI-assisted material discovery",
        "Inverse-designed nanophotonic devices",
        "Reconfigurable metasurfaces",
        "Nonlinear and topological photonics"
      ],
      chairs: "To be announced"
    },
    {
      title: "Optical Wireless, LiDAR, Radar and Intelligent Perception",
      icon: Radio,
      topics: [
        "AI-enabled LiDAR",
        "Optical wireless communications",
        "Free-space optical communications",
        "Integrated photonic radar",
        "Photonic-assisted radar",
        "AI-based target detection",
        "Autonomous perception",
        "Sensor fusion",
        "Intelligent transportation systems",
        "Photonics for aerospace and defense"
      ],
      chairs: "To be announced"
    },
    {
      title: "AI, Photonics and Next-Generation Applications",
      icon: Globe,
      topics: [
        "AI-enabled smart cities",
        "Autonomous systems and robotics",
        "Photonics for Industry 5.0",
        "Edge AI and IoT",
        "AI-enabled environmental monitoring",
        "Smart agriculture",
        "Energy-efficient AI systems",
        "Photonics for high-performance computing",
        "AI-enabled cybersecurity and optical security",
        "Emerging commercial and societal applications"
      ],
      chairs: "To be announced"
    }
  ];

  return (
    <section id="tracks" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold tracking-wider text-[#2563eb] uppercase">
            CONFERENCE TRACKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Research Tracks
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Detailed research scope spanning 12 specialized technical tracks at the intersection of photonics and AI.
          </p>
        </div>

        {/* Tracks selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Track Navigation */}
          <div className="lg:col-span-5 space-y-2 max-h-[640px] overflow-y-auto pr-1">
            {tracks.map((track, index) => {
              const Icon = track.icon;
              const isSelected = activeTrack === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTrack(index)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl transition-all duration-150 flex items-center justify-between border ${isSelected
                      ? 'bg-white border-[#2563eb] shadow-sm text-slate-900 font-bold'
                      : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white'
                    }`}
                >
                  <div className="flex items-center space-x-3 min-w-0 pr-2">
                    <div className={`p-2 rounded-lg flex-shrink-0 ${isSelected ? 'bg-[#2563eb] text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold truncate">
                      Track {index + 1}: {track.title}
                    </span>
                  </div>
                  <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-transform ${isSelected ? 'text-[#2563eb] translate-x-1' : 'text-slate-300'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Track Details */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 sticky top-24">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb] bg-blue-50 px-3 py-1 rounded-full">
                TRACK {activeTrack + 1 < 10 ? `0${activeTrack + 1}` : activeTrack + 1}
              </span>
              <span className="text-xs text-slate-400 font-medium">Photonics AI 2028</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900">
              Track {activeTrack + 1}: {tracks[activeTrack].title}
            </h3>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Topic Scope ({tracks[activeTrack].topics.length} Areas)
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
