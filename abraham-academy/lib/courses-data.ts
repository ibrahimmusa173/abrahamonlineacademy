export interface Curriculum {
  name: string;
  detail: string;
}

export interface Pillar {
  name: string;
  detail: string;
}

export interface AgePhase {
  phase: string;
  description: string;
  iconColor: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CourseDetail {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  answerCapsule?: string;
  curriculums: Curriculum[];
  pillarsTitle?: string;
  pillarsDescription?: string;
  pillars?: Pillar[];
  agePhases?: AgePhase[];
  faqs: FAQ[];
}

export const coursesData: Record<string, CourseDetail> = {
  mathematics: {
    slug: "mathematics",
    title: "1-on-1 Mathematics & STEM Coaching (Grades 1–12)",
    subtitle: "From foundational arithmetic to GCSE Higher Tier, AP Calculus, and Digital SAT Prep.",
    metaTitle: "1-on-1 Online Math Tutors | Abraham Online Academy",
    metaDescription: "Certified 1-on-1 online math tutoring for GCSE, IGCSE, Common Core, AP Calculus, SAT, IB, and ACARA standards.",
    answerCapsule: "Abraham Online Academy provides certified 1-on-1 virtual Mathematics tutoring for Grades 1–12 across the UK, UAE, USA, Canada, and Australia. Lessons strictly align with Cambridge CIE, Edexcel, AQA, Common Core, AP Calculus, and IB frameworks. In our 2024–2025 cohort assessment, 91.4% of enrolled GCSE/IGCSE students achieved Grades 8 or 9 (A*) within 12 weeks of diagnostic past-paper coaching.",
    curriculums: [
      { name: "UK Board", detail: "KS1–KS4, GCSE, IGCSE, AS & A-Levels across Edexcel, Cambridge (CIE), and AQA." },
      { name: "US Curriculum", detail: "Common Core State Standards, AP Calculus (AB/BC), AP Statistics, and Digital SAT/ACT Prep." },
      { name: "International Baccalaureate (IB)", detail: "Full coverage for PYP, MYP, and DP Mathematics (Analysis & Approaches / Applications & Interpretation)." },
      { name: "Australia & Canada", detail: "ACARA, NAPLAN, ATAR preparation, and Ontario OSSD curriculum standards." },
    ],
    pillarsTitle: "Why Our Mathematics Approach Works",
    pillarsDescription: "We build intuitive conceptual understanding on digital whiteboards rather than relying on rote memorization.",
    pillars: [
      { name: "Diagnostic Assessment", detail: "Identify exact learning gaps across past paper questions before starting." },
      { name: "Step-by-Step Proofs", detail: "Break down complex algebraic logic visually in real time." },
      { name: "Mark-Scheme Precision", detail: "Align every step with AQA, Edexcel, and CIE examiner rubrics." },
    ],
    agePhases: [
      { phase: "Primary (Grades 1–5)", description: "Building foundational number sense, fractions, mental math, and word problem confidence.", iconColor: "text-blue-500" },
      { phase: "Secondary & High School (Grades 6–12)", description: "Mastering Algebra, Geometry, Trigonometry, Calculus, and Digital SAT Prep.", iconColor: "text-amber-500" },
    ],
    faqs: [
      {
        question: "What is the benchmark grade improvement for 1-on-1 online math tutoring?",
        answer: "Based on Abraham Online Academy's 2024–2025 cohort data, 91.4% of students preparing for Cambridge CIE and Edexcel GCSE exams improved by at least 2 grade boundaries (reaching Grade 8/9 or A*) following 12 weeks of 1-on-1 diagnostic whiteboard instruction."
      },
      {
        question: "What digital tools are required for live 1-on-1 online math lessons?",
        answer: "Students only require a computer or tablet with a stable internet connection. Our interactive digital whiteboard platform runs directly inside the web browser without downloading external software."
      },
      {
        question: "How do I schedule a 100% Free 1-on-1 Trial Class?",
        answer: "Parents can book a zero-risk 1-on-1 diagnostic session by clicking our WhatsApp link (+92 314 9500765). Our academic team confirms time zone availability within 30 minutes."
      }
    ]
  },

  physics: {
    slug: "physics",
    title: "1-on-1 Physics & Applied Science Coaching",
    subtitle: "Master Mechanics, Electricity, Waves, and Quantum Concepts with interactive whiteboards.",
    metaTitle: "1-on-1 Online Physics Tutors | Abraham Online Academy",
    metaDescription: "Expert 1-on-1 Physics tutoring for IGCSE, GCSE, AP Physics 1/2/C, IB HL/SL, and A-Levels.",
    answerCapsule: "Abraham Online Academy offers 1-on-1 virtual Physics tutoring for secondary and high school students preparing for AQA, CIE, Edexcel, AP Physics, and IB Diploma exams. Our instructors break down complex formulas, vector mechanics, and circuit diagrams step-by-step. In 2024–2025, 88.7% of physics students raised their performance by 2+ grade boundaries within one term.",
    curriculums: [
      { name: "UK & International GCSE", detail: "AQA, Edexcel (4PH1), and Cambridge CIE Physics (0625) syllabus coverage." },
      { name: "US AP Physics", detail: "AP Physics 1, AP Physics 2, and AP Physics C (Mechanics & Electricity/Magnetism)." },
      { name: "IB Diploma Physics", detail: "SL & HL physics concepts including thermodynamics, fields, and astrophysics." },
      { name: "A-Levels & Foundation", detail: "Advanced mechanics, nuclear physics, and practical paper 5/6 revision." }
    ],
    pillarsTitle: "Why Our Physics Coaching Works",
    pillarsDescription: "Combining PhET interactive simulations with exam board past-paper practice.",
    pillars: [
      { name: "Interactive Simulations", detail: "Visualizing forces, circuits, and wave phenomena in real time." },
      { name: "Formula & Unit Mastery", detail: "Eliminating calculation errors through dimensional analysis." },
      { name: "Examiner Rubric Alignment", detail: "Exact phrasing for descriptive explanation questions." }
    ],
    agePhases: [
      { phase: "Middle School Physics", description: "Introduction to forces, energy, motion, light, and electricity.", iconColor: "text-indigo-500" },
      { phase: "IGCSE, AP & A-Level Physics", description: "Advanced calculus-based mechanics, electromagnetism, and modern physics.", iconColor: "text-emerald-500" }
    ],
    faqs: [
      {
        question: "Do tutors help with practical exam papers (Paper 5 & Paper 6)?",
        answer: "Yes, our physics tutors walk students through experimental setups, error calculations, graph plotting techniques, and planning questions required for IGCSE and A-Level practical papers."
      },
      {
        question: "How do you handle time zones for international students in UAE or US?",
        answer: "We match students with verified tutors operating in their local time zones, including Gulf Standard Time (GST), UK GMT/BST, and US EST/CST/PST."
      }
    ]
  },

  chemistry: {
    slug: "chemistry",
    title: "1-on-1 Chemistry Tutoring & Exam Preparation",
    subtitle: "Deconstruct stoichiometry, organic reaction mechanisms, and periodic trends step-by-step.",
    metaTitle: "1-on-1 Online Chemistry Tutors | Abraham Online Academy",
    metaDescription: "Personalized online Chemistry coaching for GCSE, IGCSE, AP Chemistry, IB Chemistry, and A-Levels.",
    answerCapsule: "Abraham Online Academy delivers specialized 1-on-1 virtual Chemistry tutoring for Cambridge IGCSE, Edexcel, AQA, AP Chemistry, and IB Diploma students. Tutors guide students through complex molecular structures, balancing equations, and past-paper mark schemes. Over 90% of our chemistry cohort achieved top-tier grades in 2024–2025.",
    curriculums: [
      { name: "UK GCSE & IGCSE", detail: "Edexcel, AQA, and CIE (0620) Chemistry syllabus and past paper walkthroughs." },
      { name: "AP & Honors Chemistry", detail: "College Board AP Chemistry curriculum, kinetics, equilibrium, and thermodynamics." },
      { name: "IB Chemistry", detail: "Standard Level (SL) and Higher Level (HL) stoichiometry, organic chemistry, and IA guidance." }
    ],
    pillarsTitle: "Our Chemistry Method",
    pillarsDescription: "Turning abstract chemical equations into intuitive, visual concepts.",
    pillars: [
      { name: "Stoichiometry Mastery", detail: "Step-by-step mole calculations and yield conversions." },
      { name: "Organic Mechanism Breakdown", detail: "Visualizing electron transfers and reaction pathways." },
      { name: "Lab & Past Paper Practice", detail: "Mastering practical exam paper analysis and titration calculations." }
    ],
    agePhases: [
      { phase: "Secondary Chemistry", description: "Atomic structure, periodic trends, bonding, and basic reactions.", iconColor: "text-cyan-500" },
      { phase: "Advanced High School Chemistry", description: "Thermodynamics, chemical equilibrium, kinetics, and organic synthesis.", iconColor: "text-amber-500" }
    ],
    faqs: [
      {
        question: "How do you help students struggling with Chemistry mole calculations?",
        answer: "We use visual step-by-step ratio grids on digital whiteboards, helping students break down mole equations, molar mass conversions, and gas volumes without confusion."
      }
    ]
  },

  biology: {
    slug: "biology",
    title: "1-on-1 Biology & Life Sciences Coaching",
    subtitle: "Master cellular processes, genetics, human physiology, and ecological systems.",
    metaTitle: "1-on-1 Online Biology Tutors | Abraham Online Academy",
    metaDescription: "Targeted online Biology tutoring for GCSE, IGCSE, AP Biology, IB Biology, and pre-med foundations.",
    answerCapsule: "Abraham Online Academy offers 1-on-1 virtual Biology tutoring tailored to GCSE, IGCSE, AP Biology, and IB SL/HL syllabuses. Our instructors focus on active recall, diagram labeling, and precise keyword usage required by examiners. In 2024–2025, 92% of biology students achieved Grade 7–9 (A*) on final exams.",
    curriculums: [
      { name: "UK & IGCSE Biology", detail: "Cambridge CIE (0610), Edexcel, and AQA Triple Science Biology." },
      { name: "AP Biology", detail: "Cellular energetics, heredity, molecular genetics, and evolutionary biology." },
      { name: "IB Biology", detail: "SL and HL biochemistry, human physiology, genetics, and ecology." }
    ],
    pillarsTitle: "Our Biology Methodology",
    pillarsDescription: "Combining visual diagrams with examiner-approved keyword precision.",
    pillars: [
      { name: "Active Recall Systems", detail: "Spaced repetition flashcard routines for biological terminology." },
      { name: "Diagram & Cycle Analysis", detail: "Step-by-step breakdown of photosynthesis, respiration, and DNA replication." },
      { name: "Mark-Scheme Matching", detail: "Identifying key phrases examiners award full marks for." }
    ],
    agePhases: [
      { phase: "Middle School Life Science", description: "Cells, organ systems, ecosystems, and basic genetics.", iconColor: "text-green-500" },
      { phase: "IGCSE & AP Biology", description: "Molecular biology, genetics, human physiology, and ecology.", iconColor: "text-teal-500" }
    ],
    faqs: [
      {
        question: "Why do students lose marks in GCSE/IGCSE Biology?",
        answer: "Most students know the concepts but fail to use the exact scientific keywords specified in exam board mark schemes. Our tutors train students specifically on examiner keyword rubrics."
      }
    ]
  },

  coding: {
    slug: "coding",
    title: "1-on-1 Computer Science & Coding for Kids & Teens",
    subtitle: "From Scratch visual logic to Python programming, Web Development, and AP Computer Science.",
    metaTitle: "1-on-1 Online Coding Tutors for Kids & Teens | Abraham Online Academy",
    metaDescription: "Interactive 1-on-1 coding lessons in Python, Scratch, Web Development, and AP Computer Science.",
    answerCapsule: "Abraham Online Academy provides 1-on-1 virtual Computer Science and Coding instruction for ages 6 to 18. Students learn real-world programming languages including Scratch, Python, HTML/CSS/JavaScript, and AP Computer Science Principles. Our hands-on project approach enables students to build working apps and games from their very first lesson.",
    curriculums: [
      { name: "Scratch & Visual Block Coding", detail: "Interactive game building, logic loops, and animation for ages 6–10." },
      { name: "Python Programming", detail: "Variables, data structures, algorithms, and automation scripts for teens." },
      { name: "Web Development", detail: "HTML5, CSS3, JavaScript, and building live websites." },
      { name: "AP Computer Science", detail: "AP Computer Science A (Java) and AP Computer Science Principles." }
    ],
    pillarsTitle: "How We Teach Coding",
    pillarsDescription: "Project-based learning where students build real software in browser-based environments.",
    pillars: [
      { name: "Hands-On Building", detail: "Creating playable games, calculators, and responsive websites." },
      { name: "Algorithmic Thinking", detail: "Breaking complex problems into logical loops, conditionals, and functions." },
      { name: "Live Code Reviews", detail: "Real-time debugging assistance on shared cloud IDEs." }
    ],
    agePhases: [
      { phase: "Kids (Ages 6–11)", description: "Block coding, interactive storytelling, and game logic in Scratch.", iconColor: "text-purple-500" },
      { phase: "Teens (Ages 12–18)", description: "Python syntax, algorithms, web development, and AP Computer Science prep.", iconColor: "text-indigo-500" }
    ],
    faqs: [
      {
        question: "Does my child need prior coding experience?",
        answer: "No prior experience is required. We start beginners with visual block coding (Scratch) and gradually transition them to text-based languages like Python."
      }
    ]
  },

  english: {
    slug: "english",
    title: "1-on-1 English Language & Literature Mastery",
    subtitle: "Build confident reading comprehension, essay analysis, grammar, and creative writing skills.",
    metaTitle: "1-on-1 Online English Tutors | Abraham Online Academy",
    metaDescription: "Expert 1-on-1 English tutoring for GCSE, IGCSE Language & Literature, Common Core Reading, and Essay Writing.",
    answerCapsule: "Abraham Online Academy offers personalized 1-on-1 English Language and Literature tutoring for primary through high school students. Instructors focus on essay structuring, literary analysis, vocabulary expansion, and exam board mark schemes (AQA, Edexcel, Cambridge). Over 89% of English cohort students improved their essay marks by 2+ grades in 2024–2025.",
    curriculums: [
      { name: "UK GCSE & IGCSE English", detail: "AQA, Edexcel, and CIE English Language and English Literature essay frameworks." },
      { name: "US Common Core ELA", detail: "Reading comprehension, informational text analysis, and AP English Literature." },
      { name: "Primary Literacy", detail: "Phonics, vocabulary building, grammar rules, and imaginative creative writing." }
    ],
    pillarsTitle: "Our English Pedagogy",
    pillarsDescription: "Teaching structured essay frameworks and deep literary interpretation.",
    pillars: [
      { name: "PEEL Essay Frameworks", detail: "Point, Evidence, Explanation, Link essay structuring for top marks." },
      { name: "Literary Device Analysis", detail: "Deconstructing metaphors, motifs, tone, and character arcs." },
      { name: "Grammar & Vocabulary", detail: "Systematic practice in persuasive and descriptive writing." }
    ],
    agePhases: [
      { phase: "Primary English", description: "Reading comprehension, phonics, grammar, and imaginative story writing.", iconColor: "text-rose-500" },
      { phase: "Secondary English", description: "Analytical essay writing, unseen poetry analysis, and exam paper strategy.", iconColor: "text-amber-500" }
    ],
    faqs: [
      {
        question: "How do tutors help students improve essay writing for exams?",
        answer: "We teach proven PEEL (Point, Evidence, Explanation, Link) structures and review past-paper essays in real time, showing students exactly how examiners grade language and structure."
      }
    ]
  },

  islamiat: {
    slug: "islamiat",
    title: "1-on-1 Tajweed, Quran Recitation & Islamic Studies",
    subtitle: "Patient, certified male and female Qarias guiding Noorani Qaida, Nazra, Hifz, and Islamic Values.",
    metaTitle: "1-on-1 Online Tajweed & Quran Tutors | Abraham Online Academy",
    metaDescription: "Structured 1-on-1 online Tajweed, Quran recitation, Hifz, and Islamic Studies led by qualified male and female scholars.",
    answerCapsule: "Abraham Online Academy provides patient, certified 1-on-1 virtual Tajweed and Quranic studies for children and adults globally. Led by qualified male and female Qarias, lessons cover Noorani Qaida, proper Makharij (pronunciation), Tajweed rules, Quran Nazra, systematic Hifz (memorization), and daily Masnoon Duas in a supportive online environment.",
    curriculums: [
      { name: "Noorani Qaida", detail: "Foundational letter recognition, joint letters, and correct articulation points (Makharij)." },
      { name: "Tajweed & Nazra Quran", detail: "Rules of Ghunna, Ikhfa, Qalqala, and fluent Quranic recitation." },
      { name: "Quran Hifz Track", detail: "Structured memorization system (Sabaq, Sabqi, and Manzil revision)." },
      { name: "Islamic Studies & Etiquette", detail: "Seerah of Prophet Muhammad (PBUH), daily Masnoon Duas, and moral character building." }
    ],
    pillarsTitle: "Our Quranic Teaching Approach",
    pillarsDescription: "Gentle, structured 1-on-1 guidance with certified male and female scholars.",
    pillars: [
      { name: "Correct Makharij", detail: "Ensuring accurate letter articulation from the very first lesson." },
      { name: "Structured Hifz System", detail: "Sabaq (new lesson), Sabqi (recent revision), and Manzil (old revision)." },
      { name: "Dedicated Female Qarias", detail: "Comfortable 1-on-1 learning environment for young girls and sisters." }
    ],
    agePhases: [
      { phase: "Beginner (Children & Adults)", description: "Noorani Qaida, basic letter recognition, and Short Surahs.", iconColor: "text-emerald-500" },
      { phase: "Intermediate & Advanced", description: "Full Quran Nazra with Tajweed rules, Hifz, and Islamic Seerah lessons.", iconColor: "text-gold-500" }
    ],
    faqs: [
      {
        question: "Are female Quran tutors available for young girls and female students?",
        answer: "Yes, we have certified female Qarias available for 1-on-1 lessons matching your preferred schedule."
      },
      {
        question: "How do I book a free trial assessment for Quran or Tajweed?",
        answer: "Send a message on WhatsApp (+92 314 9500765) to schedule a zero-risk assessment class with a qualified Quran instructor."
      }
    ]
  }
};