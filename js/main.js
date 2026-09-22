/**
 * IEEE Photonics AI 2028 - Standalone Pure JavaScript
 * Handles Countdown Timer, Modals, Tabs, Filters, Mobile Menu, and UI interactivity.
 */

// Target Conference Date: March 22, 2028 09:00 IST
const TARGET_DATE = Date.parse('2028-03-22T09:00:00+05:30');

// 12 Technical Research Tracks Data
const TRACKS_DATA = [
  {
    title: "AI/ML for Photonic Design and Optimization",
    topics: [
      "AI/ML-assisted photonic device design",
      "Inverse design and topology optimization",
      "Neural-network-based photonic simulation",
      "Generative AI for photonic structures",
      "Surrogate modelling and reduced-order models",
      "Evolutionary and swarm optimization",
      "AI-assisted PIC design and optimization",
      "Automated photonic design workflows"
    ],
    chairs: "To be announced"
  },
  {
    title: "Photonic Computing and AI Hardware",
    topics: [
      "Optical computing architectures",
      "Photonic AI accelerators",
      "Optical neural networks",
      "Neuromorphic photonics",
      "Photonic tensor processors",
      "Analog optical computing",
      "Reservoir computing",
      "In-memory photonic computing",
      "Energy-efficient AI hardware"
    ],
    chairs: "To be announced"
  },
  {
    title: "AI-Enabled Optical Communications and Networks",
    topics: [
      "Machine learning for optical communications",
      "Intelligent optical networks",
      "AI-assisted modulation and detection",
      "Nonlinearity compensation",
      "Equalization and channel estimation",
      "Autonomous optical networks",
      "Optical network optimization",
      "AI for 5G/6G and beyond",
      "Data-center optical interconnects",
      "Photonics for AI infrastructure"
    ],
    chairs: "To be announced"
  },
  {
    title: "Intelligent Photonic Sensing and Imaging",
    topics: [
      "AI-enabled optical sensors",
      "Machine learning for fiber-optic sensing",
      "Intelligent LiDAR",
      "Computational imaging",
      "AI-assisted microscopy",
      "Hyperspectral imaging",
      "Remote sensing",
      "Spectroscopy and AI",
      "Multimodal photonic sensing",
      "Edge AI for sensing"
    ],
    chairs: "To be announced"
  },
  {
    title: "AI for Integrated Photonics and Silicon Photonics",
    topics: [
      "AI-assisted photonic integrated circuit design",
      "Silicon photonics",
      "Hybrid and heterogeneous integration",
      "Photonic-electronic co-design",
      "AI-assisted PDKs and design automation",
      "Reconfigurable photonic circuits",
      "Integrated lasers, modulators and detectors",
      "Co-packaged optics",
      "AI-enabled photonic systems"
    ],
    chairs: "To be announced"
  },
  {
    title: "Generative AI, Foundation Models and Agentic Photonics",
    topics: [
      "Generative AI for photonic design",
      "Large language models for photonics",
      "AI agents for scientific discovery",
      "Autonomous photonic experimentation",
      "AI-assisted simulation and modelling",
      "Digital twins for photonic systems",
      "Multimodal foundation models",
      "Physics-informed generative AI",
      "AI-assisted fabrication and process optimization"
    ],
    chairs: "To be announced"
  },
  {
    title: "Quantum Photonics and AI",
    topics: [
      "Quantum machine learning",
      "Photonic quantum computing",
      "Quantum neural networks",
      "AI-assisted quantum photonic design",
      "Quantum communication",
      "Quantum sensing",
      "Quantum photonic integrated circuits",
      "AI for quantum error mitigation",
      "Hybrid quantum-classical photonic systems"
    ],
    chairs: "To be announced"
  },
  {
    title: "AI for Lasers, Nonlinear and Ultrafast Photonics",
    topics: [
      "ML-assisted laser design",
      "Intelligent laser control",
      "Ultrafast optical systems",
      "Nonlinear photonics and AI",
      "AI-assisted pulse shaping",
      "Supercontinuum generation",
      "Data-driven nonlinear optics",
      "AI-assisted optical frequency combs",
      "Adaptive and autonomous optical systems"
    ],
    chairs: "To be announced"
  },
  {
    title: "AI-Enabled Biomedical and Biophotonics",
    topics: [
      "AI for biomedical imaging",
      "Optical diagnostics",
      "Photonic biosensors",
      "AI-assisted spectroscopy",
      "Computational pathology",
      "Optical coherence tomography",
      "Wearable photonic sensors",
      "Photonics for healthcare",
      "AI-enabled point-of-care systems"
    ],
    chairs: "To be announced"
  },
  {
    title: "Emerging Materials, Metasurfaces and Nanophotonics",
    topics: [
      "AI-designed metasurfaces",
      "Nanophotonics",
      "Photonic crystals",
      "Plasmonics",
      "2D materials and photonics",
      "AI-assisted material discovery",
      "Inverse-designed nanophotonic devices",
      "Reconfigurable metasurfaces",
      "Nonlinear and topological photonics"
    ],
    chairs: "To be announced"
  },
  {
    title: "Optical Wireless, LiDAR, Radar and Intelligent Perception",
    topics: [
      "AI-enabled LiDAR",
      "Optical wireless communications",
      "Free-space optical communications",
      "Integrated photonic radar",
      "Photonic-assisted radar",
      "AI-based target detection",
      "Autonomous perception",
      "Sensor fusion",
      "Intelligent transportation systems",
      "Photonics for aerospace and defense"
    ],
    chairs: "To be announced"
  },
  {
    title: "AI, Photonics and Next-Generation Applications",
    topics: [
      "AI-enabled smart cities",
      "Autonomous systems and robotics",
      "Photonics for Industry 5.0",
      "Edge AI and IoT",
      "AI-enabled environmental monitoring",
      "Smart agriculture",
      "Energy-efficient AI systems",
      "Photonics for high-performance computing",
      "AI-enabled cybersecurity and optical security",
      "Emerging commercial and societal applications"
    ],
    chairs: "To be announced"
  }
];

// Hotels Data
const HOTELS_DATA = {
  premium: [
    { name: "Taj Coromandel, Chennai", link: "https://www.tajhotels.com/en-in/hotels/taj-coromandel-chennai", distance: "40 km", tariff: "₹15,000 – ₹22,000" },
    { name: "Hyatt Regency Chennai", link: "https://www.hyatt.com/search/hotels/en-US/Chennai%2C%20India?src=sem_aspac_corp_none_google_iprospectin_na_md_en_exact-phrase-india-Chennai_h1_22430235765_Corporate_Search_Google_INDIA_None_IN_BR_AO_IN_ALL_Rooms_Chennai-Feeder-India_Exact_174801607661_the+hyatt+chennai&gclsrc=aw.ds&gad_source=1&gad_campaignid=22430235765&gbraid=0AAAAA-jHPGWqj3ugXjevxFWntX8HRwTil&gclid=Cj0KCQjwh4TVBhCWARIsAG0czmpXlAZnVLcG4pNaf1aEtNEgFdeddWgKggRppPGTyGagJA_vrdGU4HQaAujVEALw_wcB", distance: "42 km", tariff: "₹12,000 – ₹18,000" },
    { name: "The Residency Towers Chennai", link: "https://www.theresidency.com/towers-chennai/", distance: "42 km", tariff: "₹10,000 – ₹15,000" },
    { name: "Courtyard by Marriott Chennai", link: "https://www.marriott.com/en-us/hotels/maacy-courtyard-chennai/overview/?nst=paid&cid=PAI_GLB0004YFY_GLE000BHOR_GLF000OCGE&nst=paid&gclsrc=aw.ds&gad_source=1&gad_campaignid=22178146794&gbraid=0AAAAADilnicHqEnnVd_E3KHMAL96WJ8s0&gclid=Cj0KCQjwh4TVBhCWARIsAG0czmq-5t4wch8ubvZZUsL2UcGUMkX1-AtJlhpH4JDO_1_Zf3mPMCCyMQMaAto4EALw_wcB", distance: "40 km", tariff: "₹10,000 – ₹16,000" }
  ],
  business: [
    { name: "Green Park Chennai", link: "https://hotelgreenpark.com/hotel-greenpark-chennai/", distance: "35 km", tariff: "₹6,500 – ₹10,000" },
    { name: "Radha Regent Chennai", link: "https://www.booking.com/searchresults.html?ss=Radha%20Regent%20Chennai%20Chennai", distance: "33 km", tariff: "₹6,000 – ₹9,000" },
    { name: "JP Hotel Chennai", link: "https://www.hoteljpchennai.com/", distance: "34 km", tariff: "₹5,500 – ₹8,500" },
    { name: "Ambica Empire Chennai", link: "https://www.ambicaempire.com/", distance: "38 km", tariff: "₹5,000 – ₹8,000" }
  ],
  budget: [
    { name: "Comfort Park Inn, Koyambedu", link: "https://www.booking.com/searchresults.html?ss=Comfort%20Park%20Inn%2C%20Koyambedu%20Chennai", distance: "32 km", tariff: "₹2,000 – ₹3,500" },
    { name: "Naksha Tree Hotels, Koyambedu", link: "https://www.nakshatreehotels.com/", distance: "32 km", tariff: "₹2,000 – ₹3,800" },
    { name: "MMs Chennai Gateway", link: "https://www.hotelmmschennaigateway.com/", distance: "33 km", tariff: "₹2,000 – ₹3,500" },
    { name: "Hotel Simsan", link: "https://www.booking.com/searchresults.html?ss=Hotel%20Simsan%20Chennai", distance: "34 km", tariff: "₹1,800 – ₹3,000" }
  ]
};

// Committee Data for Dynamic Rendering & Instant Search
const COMMITTEE_DATA = {
  patrons: [
    { name: "Thiru. R.S. Munirathinam", role: "Chief Patron", designation: "Founder & Chairman", affiliation: "R.M.K Group of Institutions", isRMK: true },
    { name: "Smt. Manjula Munirathinam", role: "Patron", designation: "Chairperson", affiliation: "R.M.K Group of Institutions", isRMK: true },
    { name: "Shri. R. Jothi Naidu", role: "Patron", designation: "Director", affiliation: "R.M.K Group of Institutions", isRMK: true },
    { name: "Shri. R.M. Kishore", role: "Patron", designation: "Vice-Chairman", affiliation: "R.M.K Group of Institutions", isRMK: true },
    { name: "Shri. Yalamanchi Pradeep", role: "Patron", designation: "Secretary", affiliation: "R.M.K Group of Institutions", isRMK: true },
    { name: "Dr. Durgadevi Pradeep", role: "Patron", designation: "Vice-Chairperson", affiliation: "R.M.K Group of Institutions", isRMK: true },
    { name: "Smt. Sowmya Kishore", role: "Patron", designation: "Management Trustee", affiliation: "R.M.K Group of Institutions", isRMK: true }
  ],
  coPatrons: [
    { name: "Dr. M.S. Palanichamy", role: "Co-Patron", designation: "Advisor", affiliation: "" },
    { name: "Shri. T. Pitchandi I.A.S", role: "Co-Patron", designation: "Advisor", affiliation: "" },
    { name: "Shri. V. Manoharan", role: "Co-Patron", designation: "Advisor", affiliation: "" },
    { name: "Dr. K. K. Sivagnana Prabhu", role: "Co-Patron", designation: "Dean-CDC", affiliation: "" },
    { name: "Dr. K. Manivannan", role: "Co-Patron", designation: "Dean-External Affairs", affiliation: "" },
    { name: "Dr. S. Pavai Madheshwari", role: "Co-Patron", designation: "Dean-Academics", affiliation: "" }
  ],
  organizing: [
    { name: "Dr. K.A. Mohamed Junaid", role: "Conference Convener", designation: "Principal", affiliation: "R.M.K. Engineering College", isRMK: true },
    { name: "Dr. T.Suresh", role: "Conference General Chair", designation: "HoD / ECE", affiliation: "R.M.K. Engineering College", isRMK: true },
    { name: "Dr. Y. Sukhi", role: "Conference General Chair", designation: "HoD / EEE", affiliation: "R.M.K. Engineering College", isRMK: true },
    { name: "Dr. A. Swarnalatha", role: "Conference General Chair", designation: "HoD / ECE(VLSI)", affiliation: "R.M.K. Engineering College", isRMK: true },
    { name: "Dr. J. Jasmine Hephzipah", role: "Conference General Chair", designation: "HoD / ECE(ACT)", affiliation: "R.M.K. Engineering College", isRMK: true },
    { name: "Dr. K. R. Senthil", role: "Conference General Chair", designation: "HoD / MECH", affiliation: "R.M.K. Engineering College", isRMK: true },
    { name: "Dr. L. Andal", role: "Conference General Chair", designation: "HoD / CIVIL", affiliation: "R.M.K. Engineering College", isRMK: true },
    { name: "Dr. T.D.Subash", role: "Conference Organizing Chair", designation: "Photonics Society, USA", affiliation: "" },
    { name: "Dr. S. Koteeswaran", role: "Conference Co-Chair", designation: "HoD / Research", affiliation: "R.M.K. Engineering College", isRMK: true },
    { name: "Dr. Subha T. D.", role: "Conference Publication Chair", designation: "Faculty Lead", affiliation: "Publication Committee" },
    { name: "Dr. Gnanasekaran T", role: "Conference Travel Grant Chair", designation: "Faculty Lead", affiliation: "Travel Grant Committee" },
    { name: "Dr. P.G. Gopinath", role: "Conference Keynote Chair", designation: "Faculty Lead", affiliation: "Keynote & Session Committee" },
    { name: "Dr.S.Vijayalakshmi", role: "Conference Publicity Chair", designation: "Faculty Lead", affiliation: "Dissemination & Publicity" },
    { name: "Dr.T.Blesslin Sheeba", role: "Conference Finance Chair", designation: "Faculty Lead", affiliation: "Finance & Accounts" },
    { name: "Dr.V.Balaji", role: "Conference Local Arrangements Chair", designation: "Faculty Lead", affiliation: "Campus Logistics & Arrangements" },
    { name: "Dr.A.Merline", role: "Conference Award Chair", designation: "Faculty Lead", affiliation: "Awards & Recognition" },
    { name: "Dr.B.Sarala", role: "Conference Registration Chair", designation: "Faculty Lead", affiliation: "Registration Desk" },
    { name: "Dr.N.Kalaiarasi", role: "Conference Web & Social Media Chair", designation: "Faculty Lead", affiliation: "Web & Media Portal" },
    { name: "Dr.A.Darwin NesaKumar", role: "Conference Sponsorship Chair", designation: "Faculty Lead", affiliation: "Sponsorship & Partnership" },
    { name: "Dr.D.Deepa", role: "Conference Workshops Chair", designation: "Faculty Lead", affiliation: "Workshops & Tutorials" }
  ],
  liaison: [
    { name: "Prof. Perry Shum", role: "Keynote Speaker", designation: "Chair Professor & Fellow", affiliation: "Southern University of Science and Technology, China", honor: "Optical Fiber Sensors & Fiber Photonics Pioneer", image: "ieee img/Prof Perry Shum.jpeg" },
    { name: "Prof. Christina Lim", role: "Keynote Speaker", designation: "Professor, Electrical & Electronic Engineering", affiliation: "University of Melbourne, Australia", honor: "Microwave Photonics & Optical Communications Specialist", image: "ieee img/Prof Christina Lim.jpeg" },
    { name: "Prof. Peter Delfyett", role: "Keynote Speaker", designation: "Pegasus Professor & Trustee Chair Professor", affiliation: "CREOL, University of Central Florida, USA", honor: "Ultrafast Photonics & Semiconductor Mode-Locked Lasers Expert", image: "ieee img/Prof. Peter Delfyett.jpeg" },
    { name: "Dr. Chennupati Jagadish", role: "Keynote Speaker", designation: "Distinguished Professor", affiliation: "Australian National University, Australia", honor: "Photonics Society President 2018 – 2019", image: "ieee img/Dr. Chennupati Jagadish.jpeg" },
    { name: "Prof. Chris Miyachi", role: "AI Coalition Liaison", designation: "AI Coalition Liaison", affiliation: "Cambridge, MA, USA", honor: "Artificial Intelligence & Technical Standardization Specialist", image: "ieee img/Prof Chris Miyachi.jpeg" },
    { name: "Prof. Gabriella Bosco", role: "Photonics Society Liaison", designation: "Photonics Society Liaison", affiliation: "Politecnico di Torino, Italy", honor: "Optical Communication Systems & Photonics Leader", image: "ieee img/Prof Gabriella Bosco.jpeg" }
  ],
  technicalCoSponsorship: [
    { name: "Dr. P. Sakthivel", role: "Chair", affiliation: "IEEE Madras Section" },
    { name: "Dr. T. Shanmuganantham", role: "Vice Chairman (Academics)", affiliation: "IEEE Madras Section" },
    { name: "Dr. Ramalatha Marimuthu", role: "Vice Chairman (Industry)", affiliation: "IEEE Madras Section" },
    { name: "Dr. S. Radha", role: "Secretary", affiliation: "IEEE Madras Section" },
    { name: "Dr. S. Brindha", role: "Treasurer", affiliation: "IEEE Madras Section" },
    { name: "Dr. V. Nagarajan", role: "Vice Chair, Conferences", affiliation: "IEEE Madras Section" }
  ],
  advisory: [
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
  ],
  tpc: [
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
  ],
  womenInPhotonics: [
    { name: "Anupma Thakur", affiliation: "Indian Institute of Science (IISc), Bangalore, India" },
    { name: "Rajeevan Chandel", affiliation: "National Institute of Technology (NIT), Hamirpur, India" },
    { name: "Nelsa Abraham", affiliation: "Government Engineering College, Trivandrum, India" },
    { name: "Avni Khatkar", affiliation: "Scientist, CSIR - National Physical Laboratory, New Delhi, India" },
    { name: "Veena Raj", affiliation: "Universiti Brunei Darussalam, Brunei" }
  ]
};

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initNavbar();
  initAboutExpander();
  initTracks();
  initSpeakersFilter();
  initCommittee();
  initHotels();
  initModals();
  initTeamCredits();
});

/* 1. Countdown Timer */
function initCountdown() {
  const daysEl = document.getElementById('count-days');
  const hoursEl = document.getElementById('count-hours');
  const minutesEl = document.getElementById('count-mins');
  const secondsEl = document.getElementById('count-secs');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  function update() {
    const now = Date.now();
    const diff = TARGET_DATE - now;

    if (diff > 0) {
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      daysEl.textContent = String(d).padStart(3, '0');
      hoursEl.textContent = String(h).padStart(2, '0');
      minutesEl.textContent = String(m).padStart(2, '0');
      secondsEl.textContent = String(s).padStart(2, '0');
    } else {
      daysEl.textContent = '000';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
    }
  }

  update();
  setInterval(update, 1000);
}

/* 2. Navbar & Dropdown & Mobile Menu */
function initNavbar() {
  const moreDropdown = document.getElementById('more-dropdown');
  const moreTrigger = document.getElementById('more-trigger');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  // MORE dropdown
  if (moreTrigger && moreDropdown) {
    moreTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      moreDropdown.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!moreDropdown.contains(e.target)) {
        moreDropdown.classList.remove('open');
      }
    });
  }

  // Mobile menu drawer
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const isOpen = mobileDrawer.classList.contains('open');
      mobileToggle.innerHTML = isOpen
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    // Close mobile menu on link click
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });
  }
}

/* 3. About Section Expander */
function initAboutExpander() {
  const expandBtn = document.getElementById('about-expand-btn');
  const expandContent = document.getElementById('about-expander');

  if (expandBtn && expandContent) {
    expandBtn.addEventListener('click', () => {
      expandContent.classList.toggle('open');
      const isOpen = expandContent.classList.contains('open');
      expandBtn.querySelector('span').textContent = isOpen ? 'Show Less' : 'Learn More';
    });
  }
}

/* 4. Tracks Section Tab Switching */
function initTracks() {
  const navContainer = document.getElementById('tracks-nav');
  const badgeEl = document.getElementById('track-badge');
  const titleEl = document.getElementById('track-detail-title');
  const topicsCountEl = document.getElementById('track-topics-count');
  const topicsGrid = document.getElementById('track-topics-grid');
  const chairsEl = document.getElementById('track-chairs');

  if (!navContainer || !titleEl || !topicsGrid) return;

  function renderTrackDetail(idx) {
    const track = TRACKS_DATA[idx];
    if (!track) return;

    badgeEl.textContent = `TRACK ${idx + 1 < 10 ? `0${idx + 1}` : idx + 1}`;
    titleEl.textContent = `Track ${idx + 1}: ${track.title}`;
    topicsCountEl.textContent = `Topic Scope (${track.topics.length} Areas)`;
    chairsEl.textContent = track.chairs;

    topicsGrid.innerHTML = track.topics.map(topic => `
      <div class="topic-card">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span class="topic-text">${topic}</span>
      </div>
    `).join('');

    // Update active button state
    navContainer.querySelectorAll('.track-nav-btn').forEach((btn, i) => {
      btn.classList.toggle('active', i === idx);
    });
  }

  // Bind click events on nav buttons
  navContainer.querySelectorAll('.track-nav-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => renderTrackDetail(i));
  });

  // Render initial track (Track 1)
  renderTrackDetail(0);
}

/* 5. Speakers Category Filter */
function initSpeakersFilter() {
  const filterBtns = document.querySelectorAll('.speaker-filter-btn');
  const speakerCards = document.querySelectorAll('.speaker-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      speakerCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'keynote') {
          card.style.display = (category === 'keynote' || category === 'liaison') ? 'flex' : 'none';
        } else if (filter === 'invited') {
          card.style.display = (category === 'invited') ? 'flex' : 'none';
        } else {
          card.style.display = 'flex';
        }
      });
    });
  });

  // Default to keynote
  const keynoteBtn = document.querySelector('.speaker-filter-btn[data-filter="keynote"]');
  if (keynoteBtn) keynoteBtn.click();
}

/* 6. Committee Tabs & Instant Search */
function initCommittee() {
  const tabsContainer = document.getElementById('committee-tabs');
  const searchInput = document.getElementById('committee-search');
  const contentContainer = document.getElementById('committee-content');

  if (!tabsContainer || !contentContainer) return;

  let currentTab = 'patrons';
  let searchQuery = '';

  function renderCommittee() {
    const list = COMMITTEE_DATA[currentTab] || [];
    const query = searchQuery.toLowerCase().trim();

    const filtered = list.filter(item => {
      if (!query) return true;
      const nameMatch = item.name && item.name.toLowerCase().includes(query);
      const affilMatch = item.affiliation && item.affiliation.toLowerCase().includes(query);
      const desigMatch = item.designation && item.designation.toLowerCase().includes(query);
      return nameMatch || affilMatch || desigMatch;
    });

    if (filtered.length === 0) {
      contentContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: #64748b; font-size: 0.875rem;">
          No committee members found matching "<strong>${searchQuery}</strong>".
        </div>
      `;
      return;
    }

    if (currentTab === 'liaison') {
      contentContainer.innerHTML = `
        <div class="speakers-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));">
          ${filtered.map(item => `
            <article class="speaker-card" style="border-color: #ede9fe;">
              <div class="speaker-body">
                <div class="speaker-top">
                  <div class="speaker-avatar" style="border-color: #ede9fe;">
                    <img src="${item.image}" alt="Portrait of ${item.name}" loading="lazy">
                  </div>
                  <span class="speaker-role-pill purple">${item.role}</span>
                </div>
                <div>
                  <h3 class="speaker-name">${item.name}</h3>
                  <p class="speaker-title">${item.designation}</p>
                  <p class="speaker-inst">${item.affiliation}</p>
                </div>
                <div class="speaker-honor-box">${item.honor || ''}</div>
              </div>
            </article>
          `).join('')}
        </div>
      `;
    } else if (currentTab === 'advisory' || currentTab === 'tpc') {
      contentContainer.innerHTML = `
        <div class="committee-grid-compact">
          ${filtered.map(item => `
            <article class="committee-card-compact">
              <h4 class="comm-name-compact">${item.name}</h4>
              <p class="comm-affil">${item.affiliation}</p>
            </article>
          `).join('')}
        </div>
      `;
    } else if (currentTab === 'womenInPhotonics') {
      contentContainer.innerHTML = `
        <div class="committee-grid" style="grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));">
          ${filtered.map(item => `
            <article class="committee-card" style="background-color: #fdf2f8; border-color: #fce7f3;">
              <span class="comm-pill pink">Women in Photonics</span>
              <h3 class="comm-name">${item.name}</h3>
              <p class="comm-affil">${item.affiliation}</p>
            </article>
          `).join('')}
        </div>
      `;
    } else {
      contentContainer.innerHTML = `
        <div class="committee-grid">
          ${filtered.map(item => {
            const isPurple = currentTab === 'patrons' || currentTab === 'coPatrons';
            const pillClass = isPurple ? 'purple' : 'blue';
            const affilHtml = item.isRMK
              ? `<a href="https://www.rmkec.ac.in/2023/" target="_blank" rel="noopener noreferrer" title="Visit R.M.K. Engineering College">${item.affiliation}</a>`
              : (item.affiliation || '');

            return `
              <article class="committee-card">
                <span class="comm-pill ${pillClass}">${item.role}</span>
                <h3 class="comm-name">${item.name}</h3>
                ${item.designation ? `<p class="comm-desig">${item.designation}</p>` : ''}
                ${affilHtml ? `<p class="comm-affil">${affilHtml}</p>` : ''}
              </article>
            `;
          }).join('')}
        </div>
      `;
    }
  }

  // Tab click handlers
  tabsContainer.querySelectorAll('.committee-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      tabsContainer.querySelectorAll('.committee-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTab = btn.getAttribute('data-tab');
      renderCommittee();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderCommittee();
    });
  }

  // Initial render
  renderCommittee();
}

/* 7. Hotel Stay Category Switcher */
function initHotels() {
  const hotelTabs = document.querySelectorAll('.hotel-tab-btn');
  const tbody = document.getElementById('hotel-table-body');

  if (!tbody) return;

  function renderHotels(category) {
    const list = HOTELS_DATA[category] || HOTELS_DATA.premium;
    tbody.innerHTML = list.map(h => `
      <tr>
        <td class="hotel-name">${h.name}</td>
        <td class="hotel-dist">${h.distance}</td>
        <td class="hotel-tariff">${h.tariff}</td>
        <td style="text-align: right;">
          <a href="${h.link}" target="_blank" rel="noopener noreferrer" class="btn-check-rates">
            <span>Check Rates</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </td>
      </tr>
    `).join('');
  }

  hotelTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      hotelTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderHotels(btn.getAttribute('data-category'));
    });
  });

  renderHotels('premium');
}

/* 8. Modals (Registration & Paper Submission) */
function initModals() {
  // Registration Modal Elements
  const regModal = document.getElementById('registration-modal');
  const regCloseBtn = document.getElementById('reg-close-btn');
  const regForm = document.getElementById('reg-form');
  const regSuccess = document.getElementById('reg-success');
  const regDoneBtn = document.getElementById('reg-done-btn');
  const regSubmittedName = document.getElementById('reg-submitted-name');
  const regSubmittedEmail = document.getElementById('reg-submitted-email');

  // Submission Modal Elements
  const subModal = document.getElementById('submission-modal');
  const subCloseBtn = document.getElementById('sub-close-btn');
  const subForm = document.getElementById('sub-form');
  const subSuccess = document.getElementById('sub-success');
  const subDoneBtn = document.getElementById('sub-done-btn');
  const subSubmittedTitle = document.getElementById('sub-submitted-title');

  // Trigger elements (e.g. from buttons)
  document.querySelectorAll('[data-open-modal="registration"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (regModal) {
        regModal.classList.add('open');
        if (regForm) regForm.style.display = 'block';
        if (regSuccess) regSuccess.style.display = 'none';
      }
    });
  });

  document.querySelectorAll('[data-open-modal="submission"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (subModal) {
        subModal.classList.add('open');
        if (subForm) subForm.style.display = 'block';
        if (subSuccess) subSuccess.style.display = 'none';
      }
    });
  });

  // Close Registration Modal
  function closeRegModal() {
    if (regModal) regModal.classList.remove('open');
  }
  if (regCloseBtn) regCloseBtn.addEventListener('click', closeRegModal);
  if (regDoneBtn) regDoneBtn.addEventListener('click', closeRegModal);
  if (regModal) {
    regModal.addEventListener('click', (e) => {
      if (e.target === regModal) closeRegModal();
    });
  }

  // Tier select inside Registration Modal
  const tierBtns = document.querySelectorAll('.tier-btn');
  tierBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tierBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Submit Registration Form
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-input-name')?.value || 'Delegate';
      const email = document.getElementById('reg-input-email')?.value || 'your email';

      if (regSubmittedName) regSubmittedName.textContent = name;
      if (regSubmittedEmail) regSubmittedEmail.textContent = email;

      regForm.style.display = 'none';
      if (regSuccess) regSuccess.style.display = 'block';
    });
  }

  // Close Submission Modal
  function closeSubModal() {
    if (subModal) subModal.classList.remove('open');
  }
  if (subCloseBtn) subCloseBtn.addEventListener('click', closeSubModal);
  if (subDoneBtn) subDoneBtn.addEventListener('click', closeSubModal);
  if (subModal) {
    subModal.addEventListener('click', (e) => {
      if (e.target === subModal) closeSubModal();
    });
  }

  // Submit Submission Form
  if (subForm) {
    subForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('sub-input-title')?.value || 'Untitled Manuscript';
      if (subSubmittedTitle) subSubmittedTitle.textContent = `"${title}"`;

      subForm.style.display = 'none';
      if (subSuccess) subSuccess.style.display = 'block';
    });
  }
}

/* 9. Team Apollo Credits Popup */
function initTeamCredits() {
  const teamBtn = document.getElementById('team-credits-btn');
  const teamPopup = document.getElementById('team-popup');
  const teamBackdrop = document.getElementById('team-backdrop');
  const teamCloseBtn = document.getElementById('team-close-btn');

  if (!teamBtn || !teamPopup) return;

  function toggleTeam(open) {
    if (open) {
      teamPopup.classList.add('open');
      if (teamBackdrop) teamBackdrop.classList.add('open');
    } else {
      teamPopup.classList.remove('open');
      if (teamBackdrop) teamBackdrop.classList.remove('open');
    }
  }

  teamBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = teamPopup.classList.contains('open');
    toggleTeam(!isOpen);
  });

  if (teamBackdrop) {
    teamBackdrop.addEventListener('click', () => toggleTeam(false));
  }

  if (teamCloseBtn) {
    teamCloseBtn.addEventListener('click', () => toggleTeam(false));
  }
}
