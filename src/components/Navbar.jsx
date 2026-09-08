import React, { useState } from 'react';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const mainLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Dates', href: '#dates' },
    { name: 'Committee', href: '#committee' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Submission', href: '#submit' },
    { name: 'Contact', href: '#contact' },
  ];

  const moreLinks = [
    { name: 'Travel Grant', href: '#travel-grant' },
    { name: 'Stay & Travel', href: '#travel' },
    { name: 'Visa Info', href: '#visa' },
    { name: 'About RMKEC', href: 'https://www.rmkec.ac.in/2023/', external: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0b1b3d] shadow-md border-b border-blue-900/40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <img 
              src="/logo.png" 
              alt="IEEE Photonics AI 2028 Logo" 
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/LOGO.png";
              }}
            />
            <div className="flex flex-col justify-center">
              <span className="text-white font-bold text-lg tracking-tight leading-tight group-hover:text-blue-300 transition-colors">
                Photonics AI 2028
              </span>
              <span className="text-[10px] tracking-wider text-slate-300 font-medium uppercase">
                Intelligent Photonics Meets AI
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {mainLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-200 hover:text-white text-xs font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* MORE Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                onBlur={() => setTimeout(() => setMoreDropdownOpen(false), 200)}
                className="flex items-center space-x-1 text-slate-200 hover:text-white text-xs font-semibold focus:outline-none py-2"
              >
                <span>MORE</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-[#0b1b3d] border border-blue-900/60 rounded-xl shadow-xl py-2 z-50 animate-fadeIn">
                  {moreLinks.map((item) => (
                    item.external ? (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:bg-blue-900/40"
                      >
                        <span>{item.name}</span>
                        <ExternalLink className="w-3 h-3 text-blue-400" />
                      </a>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:bg-blue-900/40"
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0b1b3d] border-t border-blue-900/40 px-4 pt-3 pb-6 space-y-2">
            {mainLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-200 hover:text-white font-medium py-2 px-3 rounded-md hover:bg-blue-900/30 text-sm"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 border-t border-blue-900/40">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block px-3 mb-1">
                More Resources
              </span>
              {moreLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : ""}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-slate-300 hover:text-white font-medium py-1.5 px-3 rounded-md text-xs"
                >
                  <span>{item.name}</span>
                  {item.external && <ExternalLink className="w-3 h-3 text-blue-400" />}
                </a>
              ))}
            </div>
          </div>
        )}

      </nav>
    </header>
  );
}
