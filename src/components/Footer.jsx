import React from 'react';
import { Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#040e1f] text-slate-400 border-t border-blue-900/50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Secretariat Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="IEEE Photonics AI 2028 Official Footer Emblem Logo" 
                loading="lazy"
                decoding="async"
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/LOGO.png";
                }}
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              IEEE International Conference on Photonics AI (Photonics AI 2028). An interdisciplinary forum bringing together global researchers, practitioners, and industry leaders.
            </p>
            <div className="text-xs text-slate-400 font-medium space-y-1">
              <p>
                Organised by{' '}
                <a href="https://www.rmkec.ac.in/2023/" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-blue-400 font-bold underline underline-offset-4 decoration-blue-400/40 hover:decoration-blue-400 transition-colors" title="Visit R.M.K. Engineering College Official Website">
                  R.M.K. Engineering College (Autonomous) — www.rmkec.ac.in
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Conference</a></li>
              <li><a href="#tracks" className="hover:text-blue-400 transition-colors">Technical Tracks</a></li>
              <li><a href="#dates" className="hover:text-blue-400 transition-colors">Important Dates</a></li>
              <li><a href="#speakers" className="hover:text-blue-400 transition-colors">Keynote Speakers</a></li>
              <li><a href="#committee" className="hover:text-blue-400 transition-colors">Committee Roster</a></li>
            </ul>
          </div>

          {/* Delegate Resources */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Delegate Resources</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#registration" className="hover:text-blue-400 transition-colors">Registration Categories</a></li>
              <li><a href="#submit" className="hover:text-blue-400 transition-colors">Author Formatting Guidelines</a></li>
              <li><a href="#travel-grant" className="hover:text-blue-400 transition-colors">Travel Support Grants</a></li>
              <li><a href="#travel" className="hover:text-blue-400 transition-colors">Hotel Accommodations</a></li>
              <li><a href="#visa" className="hover:text-blue-400 transition-colors">Indian e-Visa Portal</a></li>
              <li>
                <a 
                  href="https://www.rmkec.ac.in/2023/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors inline-flex items-center space-x-1 text-blue-300 font-semibold"
                >
                  <span>About RMKEC Campus</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Conference Secretariat Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Conference Secretariat</h4>
            
            <div className="space-y-2.5 text-xs">
              <div>
                <span className="text-white font-bold block">Dr. Subash T. D.</span>
                <span className="text-blue-400 text-[11px] font-semibold block">Conference Organizing Chair</span>
                <span className="text-slate-400 text-[11px]">IEEE Photonics Society, USA</span>
              </div>

              <div className="flex items-start space-x-2 pt-1">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="leading-snug">ECE Dept, <a href="https://www.rmkec.ac.in/2023/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 font-semibold underline underline-offset-2 decoration-blue-400/40 hover:decoration-blue-400 transition-colors" title="Visit R.M.K. Engineering College Home Page">R.M.K. Engineering College</a>, Kavaraipettai, Tiruvallur Dist, Tamil Nadu - 601206</span>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-slate-200 font-semibold">+91 9486881397, +91 9447691397</span>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:tdsubash2007@gmail.com" className="hover:text-white text-blue-300 font-semibold">tdsubash2007@gmail.com</a>
              </div>

              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="https://www.rmkec.ac.in/2023/" target="_blank" rel="noopener noreferrer" className="hover:text-white">www.rmkec.ac.in</a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2028 IEEE International Conference on Photonics AI (PHOTONICS AI 2028). All Rights Reserved.
          </div>
          <div>
            <span>
              Organised by{' '}
              <a href="https://www.rmkec.ac.in/2023/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 underline transition-colors" title="Visit R.M.K. Engineering College Official Website">
                R.M.K. Engineering College (www.rmkec.ac.in)
              </a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
