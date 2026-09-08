import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import TracksSection from './components/TracksSection';
import DatesSection from './components/DatesSection';
import RegistrationSection from './components/RegistrationSection';
import SpeakersSection from './components/SpeakersSection';
import CommitteeSection from './components/CommitteeSection';
import SubmissionSection from './components/SubmissionSection';
import TravelSection from './components/TravelSection';
import TravelGrantSection from './components/TravelGrantSection';
import VisaSection from './components/VisaSection';
import LiveViewersFlag from './components/LiveViewersFlag';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col justify-between selection:bg-[#2563eb] selection:text-white font-sans antialiased">
      
      {/* Header Navigation */}
      <Navbar />

      {/* Main App Content */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero />

        {/* About Conference */}
        <AboutSection />

        {/* Technical Tracks */}
        <TracksSection />

        {/* Key Milestone Dates */}
        <DatesSection />

        {/* Registration Categories & Benefits Overview */}
        <RegistrationSection />

        {/* Keynote & Plenary Speakers */}
        <SpeakersSection />

        {/* Committee Roster */}
        <CommitteeSection />

        {/* Paper Guidelines & IEEE Formatting */}
        <SubmissionSection />

        {/* Accommodation & Transportation */}
        <TravelSection />

        {/* Travel Grant Support (Direct Form Download) */}
        <TravelGrantSection />

        {/* Indian Visa Guide for Foreign Participants */}
        <VisaSection />

        {/* Global Live Visitor Flag Counter Section - Above Footer */}
        <div className="bg-[#040e1f] py-8 px-4 sm:px-6 lg:px-8 border-t border-blue-900/40">
          <div className="max-w-7xl mx-auto">
            <LiveViewersFlag />
          </div>
        </div>

      </main>

      {/* Footer Secretariat Contact */}
      <Footer />

    </div>
  );
}
