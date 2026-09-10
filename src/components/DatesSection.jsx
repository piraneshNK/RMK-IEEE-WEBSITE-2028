import React from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

export default function DatesSection() {
  const milestoneDates = [
    {
      title: "Full Paper Submission Deadline",
      date: "30 MAY 2027",
      status: "Important",
      active: true,
      desc: "Deadline for submitting full-length 4-6 page research papers."
    },
    {
      title: "Acceptance Notification",
      date: "30 JUNE 2027",
      status: "Review",
      active: false,
      desc: "Peer-review decision and evaluation feedback dispatched to corresponding authors."
    },
    {
      title: "Final Submission & Author Registration",
      date: "25 JULY 2027",
      status: "Camera-Ready",
      active: false,
      desc: "Final camera-ready paper upload and mandatory author registration."
    },
    {
      title: "Conference Days",
      date: "27–28 APR 2028",
      status: "Main Event",
      active: false,
      desc: "Flagship international conference at R.M.K. Engineering College Campus, Chennai, India."
    }
  ];

  return (
    <section id="dates" className="py-16 lg:py-20 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider text-[#2563eb] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            <Calendar className="w-3.5 h-3.5" />
            <span>IMPORTANT DATES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Key Conference Deadlines
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Mark your calendar for paper submission deadlines, review notifications, and event dates.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="hidden sm:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-blue-100 transform -translate-x-1/2"></div>

          <div className="space-y-8 relative">
            {milestoneDates.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex flex-col sm:flex-row items-center ${isEven ? 'sm:flex-row-reverse' : ''}`}>

                  {/* Content Card */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pl-8 text-left' : 'sm:pr-8 sm:text-right'} mb-4 sm:mb-0`}>
                    <article className={`p-6 rounded-2xl border transition-all ${item.active ? 'bg-blue-50/60 border-blue-300 shadow-sm ring-2 ring-blue-500/20' : 'bg-white border-slate-200/80 shadow-sm'}`}>

                      <div className={`flex items-center space-x-2 mb-2 ${isEven ? 'sm:justify-start' : 'sm:justify-end'}`}>
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${item.active ? 'bg-[#2563eb] text-white' : 'bg-slate-100 text-slate-700'}`}>
                          {item.status}
                        </span>
                        <span className="text-xs font-extrabold text-[#2563eb] tracking-wide">{item.date}</span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.desc.includes("R.M.K. Engineering College") ? (
                          <>
                            Flagship international conference at{' '}
                            <a
                              href="https://www.rmkec.ac.in/2023/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#2563eb] hover:underline font-semibold"
                              title="Visit R.M.K. Engineering College Home Page"
                            >
                              R.M.K. Engineering College
                            </a>{' '}
                            Campus, Chennai, India.
                          </>
                        ) : (
                          item.desc
                        )}
                      </p>
                    </article>
                  </div>

                  {/* Node Icon */}
                  <div className="z-10 w-10 h-10 rounded-full bg-white border-2 border-[#2563eb] flex items-center justify-center text-[#2563eb] shadow-md my-2 sm:my-0 flex-shrink-0">
                    {item.active ? <Clock className="w-5 h-5 animate-pulse text-[#2563eb]" /> : <CheckCircle className="w-5 h-5 text-blue-500" />}
                  </div>

                  {/* Alignment spacer */}
                  <div className="hidden sm:block w-1/2"></div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
