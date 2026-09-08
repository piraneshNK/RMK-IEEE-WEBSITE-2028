import React, { useState } from 'react';
import { X, Upload, CheckCircle, FileText, ArrowRight } from 'lucide-react';

export default function SubmissionModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [paperTitle, setPaperTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [track, setTrack] = useState('Track 1');

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
      <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Upload className="w-6 h-6 text-blue-200" />
            <div>
              <h3 className="font-extrabold text-lg leading-tight">Submit Research Paper</h3>
              <p className="text-xs text-blue-100">IEEE Photonics AI 2028</p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">Paper Submitted Successfully!</h4>
              <p className="text-slate-600 text-sm">
                Your paper titled <span className="font-bold text-slate-900">"{paperTitle || 'Untitled Paper'}"</span> has been logged under ID <span className="font-bold text-blue-600">#PAI-2028-{(Math.floor(Math.random() * 900) + 100)}</span> for double-blind peer review.
              </p>
              <div className="pt-2">
                <button
                  onClick={resetAndClose}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-full text-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Paper Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Coherent Silicon Photonic Matrix Multipliers for AI Acceleration"
                  value={paperTitle}
                  onChange={(e) => setPaperTitle(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Corresponding Author Name</label>
                <input
                  type="text"
                  required
                  placeholder="Dr. Jane Smith"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Target Track</label>
                <select
                  value={track}
                  onChange={(e) => setTrack(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm bg-white"
                >
                  <option value="Track 1">Track 1: Optical Computing & AI Accelerators</option>
                  <option value="Track 2">Track 2: Photonic Neural Networks</option>
                  <option value="Track 3">Track 3: Quantum Photonics & Sensing</option>
                  <option value="Track 4">Track 4: Neuromorphic Photonics</option>
                  <option value="Track 5">Track 5: Integrated Nanophotonics</option>
                  <option value="Track 6">Track 6: AI for Optical Communications</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Upload Manuscript (PDF format, max 10MB)</label>
                <div className="border-2 border-dashed border-blue-200 rounded-2xl p-6 text-center hover:bg-blue-50/50 transition-colors cursor-pointer">
                  <FileText className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <span className="text-xs font-bold text-slate-700 block">Click to select PDF or drag & drop</span>
                  <span className="text-[11px] text-slate-400">Must conform to IEEE 2-column format</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center space-x-2"
                >
                  <span>Submit Manuscript</span>
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
