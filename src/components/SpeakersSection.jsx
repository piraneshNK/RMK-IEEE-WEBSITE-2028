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
      image: "/ieee img/Prof Chris Miyachi.jpeg"
    },
    {
      name: "Prof. Gabriella Bosco",
      role: "Photonics Society Liaison",
      institution: "Politecnico di Torino, Italy",
      title: "Photonics Society Liaison",
      honor: "Optical Communication Systems & Photonics Leader",
      image: "/ieee img/Prof Gabriella Bosco.jpeg"
    },
    {
      name: "Prof. Dr. Leong Wai Yie",
      role: "Keynote Speaker",
      institution: "INTI International University, Malaysia",
      title: "Chair, WFEO Women in Engineering",
      honor: "Senior Member & Engineering Specialist",
      link: "https://leongwaiyie.com/",
      image: "/ieee img/Prof. Dr Leong Wai Yie.jpeg"
    },
    {
      name: "Prof. Wladyslaw Grabinski",
      role: "Keynote Speaker",
      institution: "MOS AK Association, Switzerland",
      title: "Geneva Modeling Center",
      honor: "Nanotechnology & Compact Modeling Specialist",
      image: "/ieee img/Prof. Wladyslaw Grabinski.jpeg"
    },
    {
      name: "Prof. Bikash Nakarmi",
      role: "Keynote Speaker",
      institution: "Nanjing University of Aeronautics and Astronautics, China",
      title: "Director, Bnakarmi Lab",
      honor: "Photonic Signal Processing Pioneer",
      link: "https://www.bnakarmilab.com/",
      image: "/ieee img/Prof. Bikash Nakarmi.jpeg"
    },
    {
      name: "Dr. Manpreet Singh Manna",
      role: "Distinguished Speaker",
      institution: "Sant Longowal Institute of Engineering & Technology, Punjab",
      title: "Former Director, AICTE, Govt. of India",
      honor: "Member, United Nations Organization SDG4",
      image: "/ieee img/Dr. Manpreet Singh Manna.jpeg"
    },
    {
      name: "Dr. Shrishail Kamble",
      role: "Invited Speaker",
      institution: "Institutional Development Cell, AICTE",
      title: "Assistant Director",
      honor: "Ministry of Education, New Delhi",
      image: "/ieee img/Dr. Shrishail Kamble.jpeg"
    },
    {
      name: "Dr. Sangeetha R. G.",
      role: "Invited Speaker",
      institution: "Sri Sai Ram Engineering College, Chennai",
      title: "Professor, School of Electronics Engineering",
      honor: "Optical Communications & Photonics Expert",
      link: "https://directorycc.vit.ac.in/faculty/50604-sangeetha-r-g",
      image: "/ieee img/Dr. Sangeetha R G.jpeg"
    },
    {
      name: "Brindha Saminathan",
      role: "Invited Speaker",
      institution: "Sri Sai Ram Engineering College, Chennai",
      title: "Academic & Research Specialist",
      honor: "Intelligent Sensing Systems Leader",
      image: "/ieee img/Brindha Saminathan.jpeg"
    }
  ];

  const [filter, setFilter] = React.useState('keynote');

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
            { id: 'keynote', label: 'Keynote Speakers' },
            { id: 'invited', label: 'Invited Speakers' }
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
                
                {/* Photo & Role Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-100 shadow-sm bg-slate-100 flex-shrink-0">
                    {speaker.image ? (
                      <img
                        src={speaker.image}
                        alt={`Portrait of ${speaker.name}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
