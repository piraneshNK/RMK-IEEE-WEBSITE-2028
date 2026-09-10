import React, { useState } from 'react';
import { ShieldCheck, User, Building, Heart, Globe, Search } from 'lucide-react';

export default function CommitteeSection() {
  const [activeTab, setActiveTab] = useState('patrons');
  const [searchQuery, setSearchQuery] = useState('');

  const patronsList = [
    { name: "Thiru. R.S. Munirathinam", role: "Chief Patron", designation: "Founder & Chairman", affiliation: "R.M.K Group of Institutions" },
    { name: "Smt. Manjula Munirathinam", role: "Patron", designation: "Chairperson", affiliation: "R.M.K Group of Institutions" },
    { name: "Shri. R. Jothi Naidu", role: "Patron", designation: "Director", affiliation: "R.M.K Group of Institutions" },
    { name: "Shri. R.M. Kishore", role: "Patron", designation: "Vice-Chairman", affiliation: "R.M.K Group of Institutions" },
    { name: "Shri. Yalamanchi Pradeep", role: "Patron", designation: "Secretary", affiliation: "R.M.K Group of Institutions" },
    { name: "Dr. Durgadevi Pradeep", role: "Patron", designation: "Vice-Chairperson", affiliation: "R.M.K Group of Institutions" },
    { name: "Smt. Sowmya Kishore", role: "Patron", designation: "Management Trustee", affiliation: "R.M.K Group of Institutions" }
  ];

  const organizingChairs = [
    { name: "Dr. K.A. Mohamed Junaid", role: "Conference Chair", designation: "Principal", affiliation: "R.M.K. Engineering College" },
    { name: "Dr. T. Suresh", role: "Conference Chair", designation: "HoD / ECE", affiliation: "R.M.K. Engineering College" },
    { name: "Dr. T.D. Subash", role: "Conference Chair", designation: "Photonics Society, USA", affiliation: "Conference Organizing Chair" },
    { name: "Dr. S. Koteeswaran", role: "Co-Chair", designation: "HoD / Research", affiliation: "R.M.K. Engineering College" },
    { name: "Dr. Subha T. D.", role: "Conference Publication Chair", designation: "Faculty Lead", affiliation: "Publication Committee" },
    { name: "Dr. Vidya Lakshmi V", role: "Conference Travel Grant Chair", designation: "Faculty Lead", affiliation: "Travel Grant Committee" },
    { name: "Dr. P.G. Gopinath", role: "Conference Keynote Chair", designation: "Faculty Lead", affiliation: "Keynote & Session Committee" },
    { name: "Dr. Darwin Nesakumar", role: "Conference Publicity Chair", designation: "Faculty Lead", affiliation: "Dissemination & Publicity" },
    { name: "Dr. V. Balaji", role: "Conference Finance Chair", designation: "Faculty Lead", affiliation: "Finance & Accounts" },
    { name: "Mr. Babuji R", role: "Conference Local Arrangements Chair", designation: "Faculty Lead", affiliation: "Campus Logistics & Arrangements" },
    { name: "Dr. Deepa D", role: "Conference Award Chair", designation: "Faculty Lead", affiliation: "Awards & Recognition" },
    { name: "Ms. G. BHAVANI", role: "Conference Registration Chair", designation: "Faculty Lead", affiliation: "Registration Desk" },
    { name: "Ms. Priyadharshini S", role: "Conference Web & Social Media Chair", designation: "Faculty Lead", affiliation: "Web & Media Portal" },
    { name: "Mr. Karthikeyan C", role: "Conference Sponsorship Chair", designation: "Faculty Lead", affiliation: "Sponsorship & Partnership" },
    { name: "Ms. Samudha Prathima", role: "Conference Workshops Chair", designation: "Faculty Lead", affiliation: "Workshops & Tutorials" }
  ];

  const advisoryMembers = [
    { name: "Abdel-badeeh M. Salem", affiliation: "Ain Shams University, Cairo, Egypt" },
    { name: "Deepa Venkitesh", affiliation: "Indian Institute of Technology (IIT), Madras, India" },
    { name: "Er Meng Joo", affiliation: "Nanyang Technological University, Singapore" },
    { name: "Gopikrishna Saramekala", affiliation: "National Institute of Technology (NIT), Calicut, India" },
    { name: "James E Morris", affiliation: "Portland State University, USA" },
    { name: "K. Chandrasekaran", affiliation: "National Institute of Technology (NIT), Raipur, India" },
    { name: "K. Navin Sam", affiliation: "National Institute of Technology (NIT), Puducherry, India" },
    { name: "K. Senthil Kumar", affiliation: "National Institute of Technology (NIT), Meghalaya, India" },
    { name: "Llyods Raja", affiliation: "National Institute of Technology (NIT), Patna, India" },
    { name: "Manpreet Singh Manna", affiliation: "Sant Longowal Institute of Engg & Tech, Punjab / Former Director AICTE, India" },
    { name: "Magdy A. Bayoumi", affiliation: "University of Louisiana at Lafayette, USA" },
    { name: "Mamun Bin Ibne Reaz", affiliation: "University of Kebangsaan, Malaysia" },
    { name: "Marcin Paprzycki", affiliation: "Polish Academy of Sciences, Poland" },
    { name: "Muhammad Sarfraz", affiliation: "Kuwait University, Kuwait" },
    { name: "Pankaj Sharma", affiliation: "IIITDM Jabalpur, India" },
    { name: "R. Balasubramanian", affiliation: "Indian Institute of Technology (IIT), Roorkee, India" },
    { name: "Rajesh Joseph Abraham", affiliation: "Indian Institute of Space Science & Tech (IIST), Trivandrum, India" },
    { name: "Rajib Kar", affiliation: "National Institute of Technology (NIT), Durgapur, India" },
    { name: "Revathy Padmanabhan", affiliation: "Indian Institute of Technology (IIT), Palakkad, India" },
    { name: "Rudra Sankar", affiliation: "National Institute of Technology (NIT), Mizoram, India" },
    { name: "Sandeep Raj", affiliation: "Indian Institute of Technology (IIT), Bhagalpur, India" },
    { name: "S. Moorthi", affiliation: "National Institute of Technology (NIT), Trichy, India" },
    { name: "Srinivas Talabattula", affiliation: "Indian Institute of Science (IISc), Karnataka, India" },
    { name: "Sreejith S", affiliation: "National Institute of Technology (NIT), Silchar, India" },
    { name: "Satyabrata Jit", affiliation: "Indian Institute of Technology (IIT), Bhubaneswar, India" },
    { name: "Sheikh Mohamed", affiliation: "Toyo University, Japan" },
    { name: "Shuai Li", affiliation: "Hong Kong Polytechnic University, Hong Kong" },
    { name: "Sisil Kumarawadu", affiliation: "University of Moratuwa, Sri Lanka" },
    { name: "Takashi Hikihara", affiliation: "Kyoto Institute of Technology, Japan" },
    { name: "Vishal Kumar", affiliation: "Indian Institute of Technology (IIT), Roorkee, India" },
    { name: "Walid Tawfik", affiliation: "Cairo University, Egypt" },
    { name: "Wladyslaw Grabinski", affiliation: "Geneva Modeling Center, Commugny, Switzerland" },
    { name: "Xavier Fernando", affiliation: "Ryerson University, Canada" }
  ];

  const tpcMembers = [
    { name: "Aref Chowdhury", affiliation: "Lightwave Logic, Inc., USA" },
    { name: "Aviru Kumar Basu", affiliation: "Indian Institute of Technology (IIT), Kharagpur, India" },
    { name: "Bikash Nakarmi", affiliation: "Nanjing University of Aeronautics and Astronautics, China" },
    { name: "Christina Lim", affiliation: "University of Melbourne, Australia" },
    { name: "Cristian Antonelli", affiliation: "University of L'Aquila, Italy" },
    { name: "Fatima Garcia-Gunning", affiliation: "Tyndall Institute, Ireland" },
    { name: "Frederic Grillot", affiliation: "Institute Polytechnique de Paris, France" },
    { name: "Fotini Karinou", affiliation: "Microsoft, UK" },
    { name: "Niloy K. Dutta", affiliation: "University of Connecticut, Storrs, USA" },
    { name: "Jorg-Peter Elbers", affiliation: "Adtran Networks SE, Germany" },
    { name: "Juerg Leuthold", affiliation: "ETH, Switzerland" },
    { name: "Haisheng Rong", affiliation: "AMD San Jose, USA" },
    { name: "Pat Iannone", affiliation: "Nokia Bell Labs, USA" },
    { name: "Paul Crump", affiliation: "Ferdinand‐Braun‐Institut GmbH, Germany" },
    { name: "Perry Shum", affiliation: "Southern University of Science and Technology, China" },
    { name: "Peter Delfyett", affiliation: "CREOL, USA" },
    { name: "Srinivas Talabattula", affiliation: "Indian Institute of Science (IISc), Bengaluru, India" },
    { name: "Takuo Tanemura", affiliation: "University of Tokyo, Japan" },
    { name: "Takeshi Hoshida", affiliation: "1Finity Inc., Japan" },
    { name: "Gabriella Cincotti", affiliation: "University Roma Tre, Rome, Italy" },
    { name: "Ray-Hua Horng", affiliation: "National Chiao Tung University, Taiwan" },
    { name: "Laurent Schares", affiliation: "IBM, USA" },
    { name: "Winnie Ye", affiliation: "Carleton University, Canada" }
  ];

  const womenInPhotonicsMembers = [
    { name: "Anupma Thakur", affiliation: "Indian Institute of Science (IISc), Bangalore, India" },
    { name: "Rajeevan Chandel", affiliation: "National Institute of Technology (NIT), Hamirpur, India" },
    { name: "Nelsa Abraham", affiliation: "Government Engineering College, Trivandrum, India" },
    { name: "Avni Khatkar", affiliation: "Scientist, CSIR - National Physical Laboratory, New Delhi, India" },
    { name: "Veena Raj", affiliation: "Universiti Brunei Darussalam, Brunei" }
  ];

  // Helper to filter items based on search query
  const filterBySearch = (list) => {
    if (!searchQuery) return list;
    return list.filter(
      item => item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              (item.affiliation && item.affiliation.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };

  return (
    <section id="committee" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider text-[#2563eb] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ORGANIZING BOARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Conference Leadership & Committees
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Patrons, Conference Chairs, Advisory Committee, Technical Program Committee, and Women in Photonics TPC.
          </p>
        </div>

        {/* Tab Buttons & Search input */}
        <div className="space-y-6 mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveTab('patrons')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'patrons'
                  ? 'bg-[#2563eb] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Patrons ({patronsList.length})
            </button>

            <button
              onClick={() => setActiveTab('organizing')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'organizing'
                  ? 'bg-[#2563eb] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Organizing Chairs ({organizingChairs.length})
            </button>

            <button
              onClick={() => setActiveTab('advisory')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'advisory'
                  ? 'bg-[#2563eb] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Advisory Board ({advisoryMembers.length})
            </button>

            <button
              onClick={() => setActiveTab('tpc')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'tpc'
                  ? 'bg-[#2563eb] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              TPC ({tpcMembers.length})
            </button>

            <button
              onClick={() => setActiveTab('womenInPhotonics')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'womenInPhotonics'
                  ? 'bg-[#2563eb] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Women in Photonics TPC ({womenInPhotonicsMembers.length})
            </button>
          </div>

          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search committee by name or institution..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:border-blue-500 text-xs bg-slate-50/50"
            />
          </div>
        </div>

        {/* Tab 1: Patrons */}
        {activeTab === 'patrons' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-fadeIn">
            {filterBySearch(patronsList).map((item, idx) => (
              <article key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-700 bg-purple-100/60 px-2.5 py-0.5 rounded-full inline-block">
                  {item.role}
                </span>
                <h3 className="font-bold text-slate-900 text-base leading-snug">{item.name}</h3>
                <p className="text-xs font-medium text-slate-700">{item.designation}</p>
                <p className="text-[11px] text-slate-500">
                  {item.affiliation.includes("R.M.K") ? (
                    <a href="https://www.rmkec.ac.in/2023/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb] hover:underline transition-colors" title="Visit R.M.K. Engineering College Home Page">
                      {item.affiliation}
                    </a>
                  ) : (
                    item.affiliation
                  )}
                </p>
              </article>
            ))}
          </div>
        )}

        {/* Tab 2: Organizing Chairs */}
        {activeTab === 'organizing' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-fadeIn">
            {filterBySearch(organizingChairs).map((item, idx) => (
              <article key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#2563eb] bg-blue-100/60 px-2.5 py-0.5 rounded-full inline-block">
                  {item.role}
                </span>
                <h3 className="font-bold text-slate-900 text-base leading-snug">{item.name}</h3>
                <p className="text-xs font-medium text-slate-700">{item.designation}</p>
                <p className="text-[11px] text-slate-500">
                  {item.affiliation.includes("R.M.K") ? (
                    <a href="https://www.rmkec.ac.in/2023/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb] hover:underline transition-colors" title="Visit R.M.K. Engineering College Home Page">
                      {item.affiliation}
                    </a>
                  ) : (
                    item.affiliation
                  )}
                </p>
              </article>
            ))}
          </div>
        )}

        {/* Tab 3: Advisory Board */}
        {activeTab === 'advisory' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 animate-fadeIn">
            {filterBySearch(advisoryMembers).map((item, idx) => (
              <article key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 space-y-1">
                <h4 className="font-bold text-slate-900 text-xs leading-snug">{item.name}</h4>
                <p className="text-[11px] text-slate-500">{item.affiliation}</p>
              </article>
            ))}
          </div>
        )}

        {/* Tab 4: TPC */}
        {activeTab === 'tpc' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 animate-fadeIn">
            {filterBySearch(tpcMembers).map((item, idx) => (
              <article key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 space-y-1">
                <h4 className="font-bold text-slate-900 text-xs leading-snug">{item.name}</h4>
                <p className="text-[11px] text-slate-500">{item.affiliation}</p>
              </article>
            ))}
          </div>
        )}

        {/* Tab 5: Women in Photonics TPC */}
        {activeTab === 'womenInPhotonics' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-fadeIn max-w-4xl mx-auto">
            {filterBySearch(womenInPhotonicsMembers).map((item, idx) => (
              <article key={idx} className="bg-pink-50/50 p-4 rounded-xl border border-pink-100 space-y-1">
                <span className="text-[10px] font-bold text-pink-700 uppercase tracking-wider block">Women in Photonics</span>
                <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                <p className="text-xs text-slate-600">{item.affiliation}</p>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
