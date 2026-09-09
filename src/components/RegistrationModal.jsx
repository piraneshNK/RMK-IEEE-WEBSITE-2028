import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, User, Mail, Building, Phone } from 'lucide-react';

export default function RegistrationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [tier, setTier] = useState('ieee-member');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    phone: '',
    paperId: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#061329] text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Photonics AI 2028 Official Conference Registration Logo" 
              loading="lazy"
              decoding="async"
              className="h-8 w-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/LOGO.png";
              }}
            />
            <div>
              <h3 className="font-extrabold text-lg leading-tight">Conference Registration</h3>
              <p className="text-xs text-blue-300">Photonics AI 2028 · April 27-28, 2028</p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900">Registration Submitted!</h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you, <span className="font-bold text-slate-900">{formData.name || 'Delegate'}</span>. We have sent a confirmation email to <span className="font-bold text-blue-600">{formData.email || 'your address'}</span> with payment receipt instructions.
              </p>
              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all text-sm"
                >
                  Done & Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Category Select */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Select Registration Category
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTier('ieee-member')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      tier === 'ieee-member'
                        ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold ring-2 ring-blue-500/20'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-semibold">Society Member</div>
                    <div className="text-sm font-extrabold text-blue-600">$350 / ₹12,000</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTier('non-member')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      tier === 'non-member'
                        ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold ring-2 ring-blue-500/20'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-semibold">Non-Member Author</div>
                    <div className="text-sm font-extrabold text-blue-600">$450 / ₹15,000</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTier('student')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      tier === 'student'
                        ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold ring-2 ring-blue-500/20'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-semibold">Student Delegate</div>
                    <div className="text-sm font-extrabold text-blue-600">$200 / ₹6,000</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTier('industry')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      tier === 'industry'
                        ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold ring-2 ring-blue-500/20'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-semibold">Industry Participant</div>
                    <div className="text-sm font-extrabold text-blue-600">$550 / ₹18,000</div>
                  </button>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Dr. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="john.doe@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Institution / Organization</label>
                    <input
                      type="text"
                      required
                      placeholder="R.M.K. Engineering College / MIT / Industry"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Accepted Paper ID (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. #PAI-2028-104"
                      value={formData.paperId}
                      onChange={(e) => setFormData({ ...formData, paperId: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-600/30 transition-all text-sm flex items-center justify-center space-x-2"
                >
                  <span>Proceed to Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
