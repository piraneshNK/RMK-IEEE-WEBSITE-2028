import React from 'react';
import { Award, ExternalLink, User } from 'lucide-react';

export default function SpeakersSection() {
  const speakers = [
    {
      name: "Prof. Chris Miyachi",
      role: "AI Coalition Liaison",
      institution: "Cambridge, MA, USA",
      title: "AI Coalition Liaison",
      honor: "Artificial Intelligence & Technical Standardization Specialist",
      image: "/prof-chris-miyachi.jpg"
    },
    {
      name: "Prof. Gabriella Bosco",
      role: "Photonics Society Liaison",
      institution: "Politecnico di Torino, Italy",
      title: "Photonics Society Liaison",
      honor: "Optical Communication Systems & Photonics Leader",
      image: "/prof-gabriella-bosco.jpg"
    },
    {
      name: "Prof. Perry Shum",
      role: "Keynote Speaker",
      institution: "Southern University of Science and Technology, China",
      title: "Chair Professor & Fellow",
      honor: "Optical Fiber Sensors & Fiber Photonics Pioneer",
      image: "/prof-perry-shum.jpg"
    },
    {
      name: "Prof. Christina Lim",
      role: "Keynote Speaker",
      institution: "University of Melbourne, Australia",
      title: "Professor, Electrical & Electronic Engineering",
      honor: "Microwave Photonics & Optical Communications Specialist",
      image: "/prof-christina-lim.jpg"
    },
    {
      name: "Prof. Peter Delfyett",
      role: "Keynote Speaker",
      institution: "CREOL, University of Central Florida, USA",
      title: "Pegasus Professor & Trustee Chair Professor",
      honor: "Ultrafast Photonics & Semiconductor Mode-Locked Lasers Expert",
      image: "/peter-delfyett.jpg"
    },
    {
      name: "Dr. Chennupati Jagadish",
      role: "Keynote Speaker",
      institution: "Australian National University, Australia",
      title: "Distinguished Professor",
      honor: "Photonics Society President 2018 – 2019",
      image: "/dr-chennupati-jagadish.png"
    },
    {
      name: "Prof. Dr. Leong Wai Yie",
      role: "Keynote Speaker",
      institution: "INTI International University, Malaysia",
      title: "Chair, WFEO Women in Engineering",
      honor: "Senior Member & Engineering Specialist",
      link: "https://leongwaiyie.com/",
      image: "/prof-leong-wai-yie.jpg"
    },
    {
      name: "Prof. Wladyslaw Grabinski",
      role: "Keynote Speaker",
      institution: "MOS AK Association, Switzerland",
      title: "Geneva Modeling Center",
      honor: "Nanotechnology & Compact Modeling Specialist",
      image: "/prof-wladyslaw-grabinski.png"
    },
    {
      name: "Prof. Bikash Nakarmi",
      role: "Keynote Speaker",
      institution: "Nanjing University of Aeronautics and Astronautics, China",
      title: "Director, Bnakarmi Lab",
      honor: "Photonic Signal Processing Pioneer",
      link: "https://www.bnakarmilab.com/",
      image: "/prof-bikash-nakarmi.jpg"
    },
    {
      name: "Dr. Manpreet Singh Manna",
      role: "Distinguished Speaker",
      institution: "Sant Longowal Institute of Engineering & Technology, Punjab",
      title: "Former Director, AICTE, Govt. of India",
      honor: "Member, United Nations Organization SDG4",
      image: "/dr-manpreet-singh-manna.png"
    },
    {
      name: "Dr. Shrishail Kamble",
      role: "Invited Speaker",
      institution: "Institutional Development Cell, AICTE",
      title: "Assistant Director",
      honor: "Ministry of Education, New Delhi",
      image: "/dr-shrishail-kamble.png"
    },
    {
      name: "Dr. Sangeetha R. G.",
      role: "Invited Speaker",
      institution: "VIT Chennai, India",
      title: "Professor, School of Electronics Engineering",
      honor: "Optical Communications & Photonics Expert",
      link: "https://directorycc.vit.ac.in/faculty/50604-sangeetha-r-g",
      image: "/dr-sangeetha.jpg"
    },
    {
      name: "Brindha Saminathan",
      role: "Invited Speaker",
      institution: "Sri Sairam Engineering College, Chennai",
      title: "Academic & Research Specialist",
      honor: "Intelligent Sensing Systems Leader",
      image: "/brindha-saminathan.jpg"
    }
  ];

  const [filter, setFilter] = React.useState('all');

  const getBadgeStyle = (role) => {
    if (role.includes('Liaison')) {
      return 'text-purple-700 bg-purple-50 border border-purple-200';
    }
    if (role.includes('Keynote')) {
      return 'text-blue-700 bg-blue-50 border border-blue-200';
    }
    if (role.includes('Distinguished')) {
      return 'text-emerald-700 bg-emerald-50 border border-emerald-200';
    }
    return 'text-slate-700 bg-slate-100 border border-slate-200';
  };

  const filteredSpeakers = speakers.filter(s => {
    if (filter === 'keynote') return s.role.includes('Keynote');
    if (filter === 'liaison') return s.role.includes('Liaison');
    if (filter === 'invited') return s.role.includes('Invited') || s.role.includes('Distinguished');
    return true;
  });

  return (
    <section id="speakers" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider text-[#2563eb] uppercase bg-blue-100/70 px-3 py-1 rounded-full">
            <Award className="w-3.5 h-3.5" />
            <span>DISTINGUISHED SPEAKERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Keynote & Plenary Speakers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            World-renowned leaders, Keynote Liaisons, former AICTE directors, UN representatives, and Photonics leaders.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: `All Speakers (${speakers.length})` },
            { id: 'keynote', label: 'Keynote Speakers' },
            { id: 'liaison', label: 'Keynote Liaisons' },
            { id: 'invited', label: 'Distinguished & Invited' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                filter === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSpeakers.map((speaker, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-6 space-y-4">
                
                {/* Photo Header & Role Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-100 shadow-sm bg-slate-100 flex-shrink-0">
                    {speaker.image ? (
                      <img
                        src={speaker.image}
                        alt={`Portrait of ${speaker.name}, ${speaker.role} at Photonics AI 2028`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#2563eb]">
                        <User className="w-8 h-8" />
                      </div>
                    )}
                  </div>

                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full text-center leading-tight max-w-[120px] ${getBadgeStyle(speaker.role)}`}>
                    {speaker.role}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {speaker.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#2563eb] mt-0.5">
                    {speaker.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    {speaker.institution}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-medium text-slate-600 leading-tight block">
                    {speaker.honor}
                  </span>
                </div>

              </div>

              {speaker.link && (
                <div className="p-3 bg-slate-50 border-t border-slate-100 text-right">
                  <a
                    href={speaker.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#2563eb] hover:underline inline-flex items-center space-x-1"
                  >
                    <span>Profile Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
