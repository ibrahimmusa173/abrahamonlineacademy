export interface CourseDetail {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  curriculums: { name: string; detail: string }[];
  pillarsTitle: string;
  pillarsDescription: string;
  pillars: { name: string; detail: string }[];
  agePhases: {
    phase: string;
    description: string;
    iconColor: string; // Tailwind color classes
  }[];
  faqs: { question: string; answer: string }[];
}

export const coursesData: Record<string, CourseDetail> = {
  /* =========================================================
     1. MATHEMATICS (/courses/mathematics)
     ========================================================= */
  mathematics: {
    slug: "mathematics",
    title: "Master Mathematics with 1-on-1 Expert Online Tutors",
    subtitle:
      "Whether your child is building foundational number sense or preparing for high-stakes university entrance exams, mathematics does not have to be a struggle. Our certified global tutors transform math anxiety into mathematical confidence through personalized live sessions aligned with your regional curriculum.",
    metaTitle: "Master Mathematics Online | 1-on-1 Tutors (Grades 1–12)",
    metaDescription:
      "Transform math anxiety into confidence! Certified 1-on-1 online math tutoring for GCSE, IGCSE, Common Core, AP Calculus, SAT, IB, and ACARA standards across all time zones.",
    curriculums: [
      {
        name: "UK Board",
        detail:
          "KS1–KS3, GCSE, IGCSE, AS & A-Levels across Edexcel, Cambridge (CIE), and AQA.",
      },
      {
        name: "US Curriculum",
        detail:
          "Common Core State Standards, AP Calculus (AB/BC), AP Statistics, and Digital SAT/ACT Prep.",
      },
      {
        name: "International Baccalaureate (IB)",
        detail:
          "Full coverage for PYP, MYP, and DP Mathematics (Analysis & Approaches / Applications & Interpretation).",
      },
      {
        name: "Australia & Canada",
        detail:
          "State and provincial standards including ACARA, NAPLAN, ATAR preparation, and Ontario OS&E standards.",
      },
      {
        name: "Middle East International Schools",
        detail:
          "Tailored dual-curriculum support for private international school students across Dubai, Abu Dhabi, Riyadh, and Jeddah.",
      },
    ],
    pillarsTitle: "The Core Mathematical Pillars We Cover",
    pillarsDescription:
      'We focus on universal principles so students understand the "why" behind formulas instead of relying on temporary memorization.',
    pillars: [
      {
        name: "Foundational Arithmetic",
        detail:
          "Fractions, decimals, percentages, ratios, and mental math shortcuts.",
      },
      {
        name: "Algebra & Functions",
        detail:
          "Linear equations, polynomials, quadratic formulas, and advanced matrices.",
      },
      {
        name: "Geometry & Trigonometry",
        detail:
          "Spatial reasoning, 2D/3D shapes, geometric proofs, and trigonometric identities.",
      },
      {
        name: "Calculus",
        detail: "Limits, derivatives, integrals, and differential equations.",
      },
      {
        name: "Data & Statistics",
        detail:
          "Probability models, measures of central tendency, frequency distributions, and data analysis.",
      },
    ],
    agePhases: [
      {
        phase: "Primary & Elementary (Grades 1–5): Building the Foundation",
        description:
          "We introduce math through engaging, highly visual lessons. We focus on basic operations, spatial awareness, and word problems so young learners build a positive, confident relationship with numbers early on.",
        iconColor: "bg-amber-100 text-amber-600",
      },
      {
        phase:
          "Middle & Lower Secondary (Grades 6–8): Connecting the Dots",
        description:
          "This critical phase introduces abstract thinking. We guide students smoothly into Pre-Algebra and basic Geometry, closing learning gaps and building strong problem-solving skills before high school pressure starts.",
        iconColor: "bg-blue-100 text-blue-600",
      },
      {
        phase:
          "High School & Exam Prep (Grades 9–12): Achieving Top Grades",
        description:
          "Rigorous, exam-focused preparation. We dissect past papers, teach time-management strategies, and help students navigate specific board marking rubrics (Cambridge IGCSE, AP, SAT, IB) to secure top grades for university entry.",
        iconColor: "bg-emerald-100 text-emerald-600",
      },
    ],
    faqs: [
      {
        question:
          "What digital tools do students need for online math classes?",
        answer:
          "All your child needs is a computer or tablet with a stable internet connection. Our digital whiteboard platform runs directly inside the web browser with no heavy downloads needed.",
      },
      {
        question:
          "Can we request a tutor specialized in a specific curriculum (like AP Calculus or Cambridge IGCSE)?",
        answer:
          "Yes, absolutely! We match your child with a tutor who has documented experience and formal training in your exact school board and textbook standards.",
      },
      {
        question:
          "What if my child needs help with school homework or upcoming tests?",
        answer:
          "Our 1-on-1 tutors adapt directly to your child's weekly school assignments. Students can bring their textbook exercises or test review sheets to class for direct step-by-step guidance.",
      },
    ],
  },

  /* =========================================================
     2. PHYSICS (/courses/physics)
     ========================================================= */
  physics: {
    slug: "physics",
    title: "Master Physics with 1-on-1 Expert Online Tutors",
    subtitle:
      "From mechanics and electricity to waves and atomic structure, physics does not have to be overwhelming. At Abraham Online Academy, our expert tutors turn complex physical laws and abstract formulas into clear, intuitive step-by-step logic.",
    metaTitle: "1-on-1 Online Physics Tutoring | GCSE, IGCSE, AP & IB Physics",
    metaDescription:
      "Ace your physics exams! Personalized 1-on-1 online physics tutoring for Cambridge IGCSE, Edexcel, AP Physics, IB DP, and Australian standards.",
    curriculums: [
      {
        name: "UK Board Physics",
        detail:
          "KS3 Science, GCSE, and IGCSE Physics (Edexcel, Cambridge CIE, AQA), plus A-Level Physics.",
      },
      {
        name: "US Curriculum Physics",
        detail:
          "High School Physics, AP Physics 1, AP Physics 2, and AP Physics C (Mechanics & Electricity).",
      },
      {
        name: "International Baccalaureate (IB)",
        detail:
          "Complete coverage for IB MYP Sciences and IB DP Physics at Standard Level (SL) and Higher Level (HL).",
      },
      {
        name: "Australia & Canada",
        detail:
          "State standards including Senior Secondary Physics (ACARA), NAPLAN science literacy, and Canadian provincial standards.",
      },
      {
        name: "Middle East International Schools",
        detail:
          "Specialized exam revision for private international school students in the UAE and Saudi Arabia.",
      },
    ],
    pillarsTitle: "The Core Physics Pillars We Cover",
    pillarsDescription:
      "We teach students how to analyze physical systems, rearrange multi-step equations, and satisfy exact marking rubrics in board exams.",
    pillars: [
      {
        name: "Kinematics & Dynamics",
        detail:
          "Forces, Newton's laws, motion equations, momentum, work, energy, and power calculations.",
      },
      {
        name: "Electricity & Magnetism",
        detail:
          "Circuit analysis (series/parallel), Ohm's law, electromagnetic induction, and motor effects.",
      },
      {
        name: "Waves & Optics",
        detail:
          "Wave behavior, reflection, refraction, diffraction, Snell's law, and the electromagnetic spectrum.",
      },
      {
        name: "Thermal Physics & Thermodynamics",
        detail:
          "Heat capacity, latent heat, gas laws, molecular kinetic theory, and energy transfer mechanisms.",
      },
      {
        name: "Atomic, Nuclear & Space Physics",
        detail:
          "Radioactivity, nuclear decay equations, half-life problems, quantum phenomena, and astrophysics.",
      },
    ],
    agePhases: [
      {
        phase: "Middle Secondary (Grades 6–8): Intro to Physical Laws",
        description:
          "Building curiosity and foundational logic through real-world examples—explaining forces, simple circuits, light, and sound using interactive visual aids.",
        iconColor: "bg-blue-100 text-blue-600",
      },
      {
        phase: "Upper Secondary (Grades 9–10): IGCSE & GCSE Focus",
        description:
          "Developing formula manipulation and unit conversion skills. We train students to dissect multi-mark exam questions and apply theory accurately.",
        iconColor: "bg-amber-100 text-amber-600",
      },
      {
        phase: "High School & Pre-University (Grades 11–12): AP & IB Success",
        description:
          "Advanced problem-solving for AP Physics, IB HL, and A-Levels. Intensive past paper practice, vector calculus support, and lab report guidance.",
        iconColor: "bg-emerald-100 text-emerald-600",
      },
    ],
    faqs: [
      {
        question: "How do online tutors demonstrate physics concepts and experiments?",
        answer:
          "We utilize interactive digital simulations (PhET simulations, vector modeling tools, and digital whiteboards) where students can manipulate variables and visualize physical phenomena in real time.",
      },
      {
        question: "Does the tutor help with physics formula memorization?",
        answer:
          "Instead of rote memorization, we teach students how units derive equations and how to utilize provided exam data formula sheets effectively during test conditions.",
      },
      {
        question: "Can my child get help with IB or A-Level practical lab reports?",
        answer:
          "Yes! Tutors provide guidance on error analysis, uncertainty calculations, graphing techniques, and structuring practical write-ups.",
      },
    ],
  },

  /* =========================================================
     3. CHEMISTRY (/courses/chemistry)
     ========================================================= */
  chemistry: {
    slug: "chemistry",
    title: "Master Chemistry with 1-on-1 Expert Online Tutors",
    subtitle:
      "Demystify chemical equations, reaction mechanisms, and stoichiometry calculations. Our interactive 1-on-1 sessions guide students through chemical theory, atomic models, and lab analysis with total clarity.",
    metaTitle: "1-on-1 Online Chemistry Tutoring | GCSE, IGCSE, AP & IB Chemistry",
    metaDescription:
      "Master chemistry formulas and reaction mechanisms with certified 1-on-1 online tutors. Tailored for GCSE, IGCSE, AP Chemistry, IB DP, and global standards.",
    curriculums: [
      {
        name: "UK Board Chemistry",
        detail:
          "KS3 Science, GCSE, and IGCSE Chemistry (Cambridge CIE, Edexcel, AQA), plus AS & A-Level Chemistry.",
      },
      {
        name: "US Curriculum Chemistry",
        detail:
          "High School Chemistry, Honors Chemistry, and AP Chemistry exam preparation.",
      },
      {
        name: "International Baccalaureate (IB)",
        detail:
          "Full coaching for IB MYP Science and IB DP Chemistry (Standard & Higher Level).",
      },
      {
        name: "Australia & Canada",
        detail:
          "Senior secondary chemistry frameworks across ACARA (Australia) and Canadian provincial diploma requirements.",
      },
      {
        name: "Middle East International Schools",
        detail:
          "Curriculum-matched support for expat students attending top international schools in Dubai, Abu Dhabi, and Saudi Arabia.",
      },
    ],
    pillarsTitle: "The Core Chemistry Pillars We Cover",
    pillarsDescription:
      "We break down abstract molecular concepts into clear visual models, giving students mastery over theory and calculations alike.",
    pillars: [
      {
        name: "Stoichiometry & The Mole Concept",
        detail:
          "Mole-mass conversions, reacting mass calculations, gas volumes, concentration, and titration calculations.",
      },
      {
        name: "Atomic Structure & Periodic Trends",
        detail:
          "Electron configurations, bonding (ionic, covalent, metallic), intermolecular forces, and periodic table trends.",
      },
      {
        name: "Physical & Energetic Chemistry",
        detail:
          "Enthalpy changes, Hess's law, reaction kinetics, collision theory, and chemical equilibria (Le Chatelier's principle).",
      },
      {
        name: "Organic Chemistry",
        detail:
          "Nomenclature, functional groups, reaction mechanisms (alkanes, alkenes, alcohols, polymers), and synthesis pathways.",
      },
      {
        name: "Electrochemistry & Analysis",
        detail:
          "Redox reactions, electrolysis calculations, galvanic cells, and spectroscopic identification methods.",
      },
    ],
    agePhases: [
      {
        phase: "Middle Secondary (Grades 6–8): Matter & Simple Reactions",
        description:
          "Building confidence with states of matter, elements, compounds, mixtures, and the basic periodic table layout.",
        iconColor: "bg-emerald-100 text-emerald-600",
      },
      {
        phase: "Upper Secondary (Grades 9–10): IGCSE & GCSE Mastery",
        description:
          "Focusing heavily on balancing chemical equations, mastering mole calculations, and understanding qualitative analysis tests.",
        iconColor: "bg-blue-100 text-blue-600",
      },
      {
        phase: "High School & Exam Prep (Grades 11–12): AP & IB Distinction",
        description:
          "Deep dive into organic synthesis, thermodynamics, equilibrium calculations ($K_c$, $K_p$, $K_a$), and past exam mark scheme breakdowns.",
        iconColor: "bg-amber-100 text-amber-600",
      },
    ],
    faqs: [
      {
        question: "Why do so many students struggle with chemistry stoichiometry?",
        answer:
          "Stoichiometry requires bridging abstract math with chemical ratios. Our tutors use a proven 3-step ratio framework that makes mole calculations logical and simple.",
      },
      {
        question: "Can tutors help with organic chemistry reaction pathways?",
        answer:
          "Yes! We use dynamic digital whiteboards to draw functional groups, reaction arrows, and mechanisms step-by-step until the student masters them.",
      },
      {
        question: "Are classes customized to my child's specific exam board?",
        answer:
          "Always. We align specifically with Edexcel, Cambridge CIE, AQA, AP, or IB syllabus points so your child studies only what is on their exam.",
      },
    ],
  },

  /* =========================================================
     4. CODING & COMPUTER SCIENCE (/courses/coding)
     ========================================================= */
  coding: {
    slug: "coding",
    title: "Learn Coding & Computer Science 1-on-1 (Grades 1–12)",
    subtitle:
      "Empower your child with real-world programming skills. From visual logic in Scratch to Python, Web Development, and GCSE/AP Computer Science, we turn students from passive tech users into confident digital creators.",
    metaTitle: "1-on-1 Online Coding & Computer Science Classes for Kids",
    metaDescription:
      "Interactive 1-on-1 coding lessons for kids and teens. Learn Scratch, Python, Web Development, and AP/GCSE Computer Science from expert instructors.",
    curriculums: [
      {
        name: "Young Creators Track (Grades 1–5)",
        detail:
          "Block-based logic using Scratch and Blockly to build games, animations, and interactive stories.",
      },
      {
        name: "Text-Based Python Track (Grades 6–8)",
        detail:
          "Transitioning to real text code with Python—variables, loops, functions, lists, and game development.",
      },
      {
        name: "GCSE & IGCSE Computer Science",
        detail:
          "Cambridge CIE (0478) and Edexcel Computer Science curriculum—theory, algorithms, and pseudocode.",
      },
      {
        name: "US AP Computer Science",
        detail:
          "AP Computer Science Principles (CSP) and AP Computer Science A (Java programming & OOP).",
      },
      {
        name: "Web Development & STEM",
        detail:
          "Building real websites using HTML5, CSS3, and JavaScript, paired with algorithmic logic.",
      },
    ],
    pillarsTitle: "The Core Programming Pillars We Teach",
    pillarsDescription:
      "We combine hands-on software projects with fundamental computational thinking so students learn principles that apply to any technology.",
    pillars: [
      {
        name: "Computational Thinking & Logic",
        detail:
          "Decomposition, pattern recognition, abstraction, and step-by-step algorithm design.",
      },
      {
        name: "Core Programming Structures",
        detail:
          "Variables, data types, conditional branching (if/else), loops (for/while), and functions.",
      },
      {
        name: "Data Structures & File Handling",
        detail:
          "Arrays, lists, dictionaries, tuples, and reading/writing external text and CSV files.",
      },
      {
        name: "Object-Oriented Programming (OOP)",
        detail:
          "Classes, objects, inheritance, encapsulation, and modular software architecture.",
      },
      {
        name: "Hardware, Networks & Security",
        detail:
          "Binary logic, CPU architecture, network protocols, cybersecurity basics, and boolean algebra for exams.",
      },
    ],
    agePhases: [
      {
        phase: "Elementary (Grades 1–5): Visual Logic & Game Building",
        description:
          "Kids learn how computers think through drag-and-drop block coding. They build custom games, animations, and stories while learning sequence and loops.",
        iconColor: "bg-amber-100 text-amber-600",
      },
      {
        phase: "Middle School (Grades 6–8): Real Python Programming",
        description:
          "Students graduate to typing real code in Python. They build text-based games, calculators, and logic projects while reinforcing school math skills.",
        iconColor: "bg-blue-100 text-blue-600",
      },
      {
        phase: "High School (Grades 9–12): Web Dev & Computer Science Exams",
        description:
          "Rigorous academic coding for AP CS, GCSE, or building portfolio-worthy websites and applications using Python, Java, or Web stacks.",
        iconColor: "bg-emerald-100 text-emerald-600",
      },
    ],
    faqs: [
      {
        question: "Does my child need prior coding experience to start?",
        answer:
          "Not at all! We start completely from scratch for beginners and adjust the pace according to your child's age and experience.",
      },
      {
        question: "What software or computer specifications are required?",
        answer:
          "Any standard Windows PC, Mac, or Chromebook with a web browser works. We use browser-based coding environments so parents don't need to install complex software.",
      },
      {
        question: "How does coding help with regular school subjects?",
        answer:
          "Coding directly strengthens math logic, algebraic thinking, problem decomposition, and attention to detail—helping students excel across STEM subjects.",
      },
    ],
  },

    /* =========================================================
     5. ENGLISH LANGUAGE & LITERATURE (/courses/english)
     ========================================================= */
  english: {
    slug: "english",
    title: "Master English Language & Literature 1-on-1 (Grades 1–12)",
    subtitle:
      "From early reading fluency and creative writing to high school essay analysis, grammar mastery, and IGCSE/SAT English preparation. Our certified tutors help students communicate with clarity, precision, and confidence.",
    metaTitle: "1-on-1 Online English Language & Literature Tutoring",
    metaDescription:
      "Boost reading comprehension, essay writing, grammar, and exam performance. Personalized 1-on-1 online English tutoring for GCSE, IGCSE, SAT, and IB.",
    curriculums: [
      {
        name: "UK Board English",
        detail:
          "KS1–KS3 English, GCSE & IGCSE English Language & Literature (Cambridge CIE, Edexcel, AQA).",
      },
      {
        name: "US Common Core ELA",
        detail:
          "Elementary to High School English Language Arts (ELA), AP English Language & Composition, and Digital SAT Reading & Writing.",
      },
      {
        name: "International Baccalaureate (IB)",
        detail:
          "Full support for IB MYP Language & Literature and IB DP English A: Language and Literature (SL & HL).",
      },
      {
        name: "Australia & Canada",
        detail:
          "ACARA English standards, NAPLAN literacy preparation, and Canadian provincial high school diploma English.",
      },
      {
        name: "Global ESL & Test Prep",
        detail:
          "Targeted coaching for IELTS Academic/General, TOEFL, and conversational English fluency for non-native speakers.",
      },
    ],
    pillarsTitle: "The Core English Pillars We Teach",
    pillarsDescription:
      "We combine structural grammar rules with expressive writing techniques and critical textual analysis.",
    pillars: [
      {
        name: "Reading Comprehension & Critical Analysis",
        detail:
          "Extracting implicit meaning, analyzing tone, authorial intent, and figurative language across fiction and non-fiction.",
      },
      {
        name: "Creative & Persuasive Essay Writing",
        detail:
          "Structuring narrative essays, argumentative pieces, analytical thesis statements, and using the P.E.E.L. paragraph model.",
      },
      {
        name: "Grammar, Punctuation & Vocabulary",
        detail:
          "Mastering complex sentence structures, active/passive voice, punctuation rules, and expanding advanced academic vocabulary.",
      },
      {
        name: "Literary Analysis & Poetry",
        detail:
          "Dissecting classic and modern novels, plays (Shakespeare), and poetry for board examinations.",
      },
      {
        name: "Verbal Communication & Public Speaking",
        detail:
          "Building verbal confidence, speech structure, pronunciation, and presentation skills for school assessments.",
      },
    ],
    agePhases: [
      {
        phase: "Primary & Elementary (Grades 1–5): Phonics & Early Literacy",
        description:
          "Building phonics, sight words, reading fluency, spelling patterns, and simple paragraph structure through engaging visual storytelling.",
        iconColor: "bg-amber-100 text-amber-600",
      },
      {
        phase: "Middle School (Grades 6–8): Expressive Writing & Grammar",
        description:
          "Developing structured essay mechanics, vocabulary expansion, reading comprehension strategies, and analytical thinking.",
        iconColor: "bg-blue-100 text-blue-600",
      },
      {
        phase: "High School & Exam Prep (Grades 9–12): Board & SAT Mastery",
        description:
          "Rigorous preparation for IGCSE, GCSE, AP English, and SAT Verbal sections. Dissecting marking criteria and writing top-tier timed essays.",
        iconColor: "bg-emerald-100 text-emerald-600",
      },
    ],
    faqs: [
      {
        question: "How do tutors help students who struggle with essay structuring?",
        answer:
          "We use proven frameworks like P.E.E.L. (Point, Evidence, Explanation, Link) and paragraph outlines so students can organize their thoughts clearly before writing.",
      },
      {
        question: "Is this course suitable for non-native English speakers living abroad?",
        answer:
          "Yes! Our tutors tailor the pace to help ESL students build vocabulary, correct pronunciation errors, and reach grade-level fluency quickly.",
      },
      {
        question: "Do you prepare students for the Digital SAT Reading & Writing section?",
        answer:
          "Absolutely. We cover inference questions, vocabulary in context, grammar conventions, and time-management strategies specific to the Digital SAT format.",
      },
    ],
  },

  /* =========================================================
     6. URDU LANGUAGE (/courses/urdu)
     ========================================================= */
  urdu: {
    slug: "urdu",
    title: "Learn Urdu Online: Speaking, Reading & Writing for Overseas Families",
    subtitle:
      "Help your children stay connected to their heritage language. Our patient 1-on-1 tutors guide young learners living in the UK, USA, UAE, Canada, and Australia through conversational fluency, script reading, and school Urdu syllabus support.",
    metaTitle: "1-on-1 Online Urdu Language Classes for Kids & Teens",
    metaDescription:
      "Help your child speak, read, and write Urdu with confidence. Personalized 1-on-1 online Urdu lessons for overseas families and school exam prep.",
    curriculums: [
      {
        name: "Overseas Heritage Language Track",
        detail:
          "Designed for kids raised abroad—focusing on conversational speaking, vocabulary, and basic script recognition.",
      },
      {
        name: "O-Level / IGCSE Urdu",
        detail:
          "Cambridge O-Level Urdu First Language (3247) and Second Language (3248) exam preparation.",
      },
      {
        name: "Federal Board (FBISE) & Provincial Boards",
        detail:
          "Complete curriculum support for Pakistani school syllabus requirements from Grade 1 through Matric/FSc.",
      },
      {
        name: "Adult Conversational Urdu",
        detail:
          "Tailored functional speaking and reading modules for adults wanting to connect with family and culture.",
      },
    ],
    pillarsTitle: "The Core Urdu Language Pillars We Cover",
    pillarsDescription:
      "A structured step-by-step approach to master the Urdu script, vocabulary, grammar, and literature.",
    pillars: [
      {
        name: "Script Recognition & Handwriting (Haroof-e-Tahajji)",
        detail:
          "Learning the Arabic-based Urdu script, letter joining rules, phonics, and proper handwriting techniques.",
      },
      {
        name: "Conversational Fluency & Listening",
        detail:
          "Building natural speaking confidence for daily conversations with family, relatives, and community members.",
      },
      {
        name: "Grammar & Sentence Construction (Qawaid)",
        detail:
          "Nouns, verbs, tenses, gender rules (Tazfeer-o-Tanees), singular/plural (Wahid/Muta'addad), and idiomatic phrases.",
      },
      {
        name: "Creative & Formal Writing (Insha-Pardazi)",
        detail:
          "Essay writing (Mazmoon), letter writing (Khatut), application drafting, and story completion.",
      },
      {
        name: "Literature & Poetry (Ghazal & Nazm)",
        detail:
          "Understanding classical and modern Urdu poetry, prose explanation (Tashreeh), and literary heritage.",
      },
    ],
    agePhases: [
      {
        phase: "Beginners (Grades 1–4): Phonics, Letters & Vocabulary",
        description:
          "Fun, interactive introduction to Urdu alphabets, basic object names, common greetings, and simple two-letter word reading.",
        iconColor: "bg-emerald-100 text-emerald-600",
      },
      {
        phase: "Intermediate (Grades 5–8): Sentence Building & Reading",
        description:
          "Graduating to reading short stories, writing full sentences, expanding daily vocabulary, and mastering essential grammar.",
        iconColor: "bg-blue-100 text-blue-600",
      },
      {
        phase: "Advanced & O-Level (Grades 9–12): Exam Writing & Literature",
        description:
          "Focusing on Cambridge O-Level past papers, translation exercises (English to Urdu), summary writing, and poetry analysis.",
        iconColor: "bg-amber-100 text-amber-600",
      },
    ],
    faqs: [
      {
        question: "My child speaks no Urdu at all. Can they still join?",
        answer:
          "Yes! We start with absolute basics using English as a bridge language, introducing everyday vocabulary and simple conversational phrases gently.",
      },
      {
        question: "Do you offer female Urdu tutors for young children?",
        answer:
          "Yes, we have experienced male and female instructors, allowing parents to choose the preferred tutor for their child.",
      },
      {
        question: "Can the tutor follow our school textbook syllabus?",
        answer:
          "Definitely. If your child attends a school that requires Urdu, the tutor will work directly from their prescribed textbook and weekly homework.",
      },
    ],
  },

  /* =========================================================
     7. ISLAMIAT & HIFZ-UL-QURAN (/courses/islamiat)
     ========================================================= */
  islamiat: {
    slug: "islamiat",
    title: "Online Islamiat, Tajweed & Quran Hifz Program",
    subtitle:
      "Nurture strong Islamic values and authentic Quranic recitation from home. Guided by certified male and female scholars, our 1-on-1 sessions cover Qaida, Tajweed rules, Quran memorization (Hifz), and O-Level/School Islamiat curriculum.",
    metaTitle: "Online Islamiat, Tajweed & Quran Hifz Classes | 1-on-1 Female & Male Tutors",
    metaDescription:
      "Learn Quran with Tajweed, Hifz, and Islamiat online from home. Certified 1-on-1 female and male tutors for kids and teens across US, UK, UAE, and global time zones.",
    curriculums: [
      {
        name: "Qaida & Nazra with Tajweed",
        detail:
          "Step-by-step recitation foundation starting from Noorani Qaida to full Quran Nazra with proper Makharij.",
      },
      {
        name: "Hifz-ul-Quran (Memorization Track)",
        detail:
          "Systematic 1-on-1 memorization plans (Short Surahs, Juz Amma, or full Quran Hifz) with daily revision.",
      },
      {
        name: "O-Level / IGCSE Islamiat",
        detail:
          "Cambridge O-Level Islamiat (2058 / 0493)—covering Quranic passages, Hadith, Seerah, Caliphate, and Articles of Faith.",
      },
      {
        name: "Essential Islamic Studies & Duas",
        detail:
          "Teaching daily Masnoon Duas, Salah steps, Wudu, Islamic etiquette, Akhlaq, and stories of the Prophets.",
      },
    ],
    pillarsTitle: "The Core Islamic & Quranic Pillars We Cover",
    pillarsDescription:
      "Combining correct pronunciation (Makharij) with spiritual understanding, moral character, and academic board prep.",
    pillars: [
      {
        name: "Makharij & Correct Pronunciation",
        detail:
          "Articulating every Arabic letter accurately from its point of origin to preserve the sacred meaning of Quranic verses.",
      },
      {
        name: "Tajweed Rules (Rules of Recitation)",
        detail:
          "Mastering Ghunnah, Ikhfa, Idgham, Qalqalah, Madd, and stopping rules (Waqf) through structured practice.",
      },
      {
        name: "Structured Memorization (Sabaq, Sabqi, Manzil)",
        detail:
          "A proven 3-tier memorization method ensuring new lessons, recent lessons, and older Juz are revised daily.",
      },
      {
        name: "Seerah & Islamic History",
        detail:
          "Studying the life of Prophet Muhammad (PBUH), the Rightly Guided Caliphs, and key historical milestones.",
      },
      {
        name: "Practical Fiqh & Character (Akhlaq)",
        detail:
          "Instilling honesty, respect for parents, daily prayers (Salah), and moral values for children living in modern societies.",
      },
    ],
    agePhases: [
      {
        phase: "Young Learners (Grades 1–4): Qaida, Short Surahs & Duas",
        description:
          "Gentle, patient guidance focusing on Noorani Qaida letters, basic Tajweed, memorizing daily Duas, and learning Salah steps.",
        iconColor: "bg-amber-100 text-amber-600",
      },
      {
        phase: "Growing Youth (Grades 5–8): Quran Fluency & Islamic Studies",
        description:
          "Fluent Quran recitation, expanding Surah memorization, learning Islamic rules, and building strong moral identity.",
        iconColor: "bg-blue-100 text-blue-600",
      },
      {
        phase: "High School & Board Prep (Grades 9–12): O-Level Islamiat",
        description:
          "Rigorous preparation for Cambridge O-Level Islamiat exams. Structuring 10-mark and 4-mark answers using Quranic references.",
        iconColor: "bg-emerald-100 text-emerald-600",
      },
    ],
    faqs: [
      {
        question: "Are female Quran and Tajweed teachers available for young girls and sisters?",
        answer:
          "Yes, we have certified female Qarias available for female students and young children.",
      },
      {
        question: "How does the tutor ensure my child doesn't forget past memorized Surahs during Hifz?",
        answer:
          "We strictly follow the classical Sabaq (New Lesson), Sabqi (Recent Memory), and Manzil (Old Memory) revision system every single class.",
      },
      {
        question: "Can we combine Tajweed recitation with basic Islamic Studies in the same class?",
        answer:
          "Yes! Tutors can divide the session so part of the class is dedicated to Quran recitation and part to learning daily Duas and Islamic values.",
      },
    ],
  },

  /* =========================================================
     8. BIOLOGY (/courses/biology)
     ========================================================= */
  biology: {
    slug: "biology",
    title: "Master Biology & Life Sciences with 1-on-1 Online Tutors",
    subtitle:
      "Explore the science of life—from cellular mechanics and genetics to human physiology, enzymes, and ecosystems. Our expert tutors turn dense biology textbooks into clear visual diagrams and exam-winning answers.",
    metaTitle: "1-on-1 Online Biology Tutoring | GCSE, IGCSE, AP & IB Biology",
    metaDescription:
      "Ace your biology exams! Certified 1-on-1 online biology tutoring for Cambridge IGCSE, Edexcel, AP Biology, IB DP, and high school pre-med preparation.",
    curriculums: [
      {
        name: "UK Board Biology",
        detail:
          "KS3 Science, GCSE, and IGCSE Biology (Cambridge CIE, Edexcel, AQA), plus AS & A-Level Biology.",
      },
      {
        name: "US Curriculum Biology",
        detail:
          "High School Biology, Honors Biology, and AP Biology exam preparation for pre-med aspiring students.",
      },
      {
        name: "International Baccalaureate (IB)",
        detail:
          "Full coaching for IB MYP Sciences and IB DP Biology (Standard Level & Higher Level).",
      },
      {
        name: "Australia & Canada",
        detail:
          "Senior secondary life sciences frameworks across ACARA (Australia) and Canadian provincial diploma standards.",
      },
      {
        name: "Middle East International Schools",
        detail:
          "Targeted support for expat students attending private international schools in Dubai, Abu Dhabi, Riyadh, and Jeddah.",
      },
    ],
    pillarsTitle: "The Core Biological Sciences Pillars We Cover",
    pillarsDescription:
      "We teach students how to master biological terminology, interpret experimental data, and satisfy strict exam mark schemes.",
    pillars: [
      {
        name: "Cell Biology & Molecular Genetics",
        detail:
          "Cell structure, organelle functions, DNA replication, protein synthesis, mitosis, meiosis, and inheritance patterns.",
      },
      {
        name: "Human Anatomy & Physiology",
        detail:
          "Circulatory, respiratory, nervous, digestive, immune, and endocrine systems, alongside homeostasis mechanisms.",
      },
      {
        name: "Plant Physiology & Photosynthesis",
        detail:
          "Xylem/phloem transport, leaf structure, light-dependent/independent reactions, and transpiration factors.",
      },
      {
        name: "Ecology, Evolution & Biodiversity",
        detail:
          "Ecosystem dynamics, energy flow, food webs, natural selection, speciation, and human impact on biodiversity.",
      },
      {
        name: "Biotechnology & Enzyme Kinetics",
        detail:
          "Enzyme action models, factors affecting reaction rates, genetic engineering, PCR, and gel electrophoresis.",
      },
    ],
    agePhases: [
      {
        phase: "Middle Secondary (Grades 6–8): Living Organisms & Systems",
        description:
          "Building scientific curiosity through visual diagrams of plant and animal cells, human body organ systems, and food chains.",
        iconColor: "bg-emerald-100 text-emerald-600",
      },
      {
        phase: "Upper Secondary (Grades 9–10): IGCSE & GCSE Biology",
        description:
          "Mastering key biological terminology, genetic cross diagrams (Punnett squares), enzyme graphs, and experimental data interpretation.",
        iconColor: "bg-blue-100 text-blue-600",
      },
      {
        phase: "High School & Pre-Med (Grades 11–12): AP & IB Biology Distinction",
        description:
          "Advanced biochemical pathways, gene expression analysis, statistical tests ($\chi^2$), and past paper essay mark schemes.",
        iconColor: "bg-amber-100 text-amber-600",
      },
    ],
    faqs: [
      {
        question: "How do tutors help students memorize complex biological vocabulary?",
        answer:
          "We use visual mind maps, root word breakdowns (Greek/Latin roots), and interactive diagrams so students understand the structure rather than just memorizing long words.",
      },
      {
        question: "Can tutors help with IB Biology Internal Assessments (IA) or lab write-ups?",
        answer:
          "Yes! Tutors provide guidance on hypothesis formulation, variable control, data presentation, and evaluating experimental limitations.",
      },
      {
        question: "How do you prepare students for 6-mark extended writing questions in GCSE/A-Level?",
        answer:
          "We break down official examiner mark schemes, teaching students how to include mandatory keywords and logical bullet points to secure maximum marks.",
      },
    ],
  },
};

