import React from 'react';
import { Award, ExternalLink, User } from 'lucide-react';

export default function SpeakersSection() {
  const speakers = [
    {
      name: "Dr. Chennupati Jagadish",
      role: "Keynote Speaker",
      institution: "Australian National University, Australia",
      title: "Distinguished Professor",
      honor: "IEEE Photonics Society President 2018 – 2019",
      image: "/dr-manpreet-singh-manna.png"
    },
    {
      name: "Prof. Dr. Leong Wai Yie",
      role: "Keynote Speaker",
      institution: "INTI International University, Malaysia",
      title: "Chair, WFEO Women in Engineering",
      honor: "IEEE Senior Member & Engineering Specialist",
      link: "https://leongwaiyie.com/",
      image: "/brindha-saminathan.jpg"
    },
    {
      name: "Prof. Wladyslaw Grabinski",
      role: "Keynote Speaker",
      institution: "MOS AK Association, Switzerland",
      title: "Geneva Modeling Center",
      honor: "Nanotechnology & Compact Modeling Specialist",
      image: "/dr-chennupati-jagadish.png"
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
      image: "/prof-wladyslaw-grabinski.png"
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
      image: "/prof-leong-wai-yie.jpg"
    }
  ];

  return (
    <section id="speakers" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider text-[#2563eb] uppercase bg-blue-100/70 px-3 py-1 rounded-full">
            <Award className="w-3.5 h-3.5" />
            <span>DISTINGUISHED SPEAKERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Keynote & Plenary Speakers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            World-renowned leaders, former AICTE directors, UN representatives, and IEEE Photonics Society presidents.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-6 space-y-4">
                
                {/* Photo Header & Role Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100 shadow-sm bg-slate-100 flex-shrink-0">
                    {speaker.image ? (
                      <img
                        src={speaker.image}
                        alt={`Portrait of ${speaker.name}, ${speaker.role} at IEEE Photonics AI 2028`}
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

                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#2563eb] bg-blue-50 px-2.5 py-1 rounded-full">
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
