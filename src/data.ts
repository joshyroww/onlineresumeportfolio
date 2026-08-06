export const PROFILE = {
  name: "JOSHUA ORO",
  title: "SYSTEM DEVELOPER",
  level: "4TH YEAR · BS INFORMATION TECHNOLOGY",
  school: "HOLY CROSS OF DAVAO COLLEGE",
  location: "DAVAO CITY, PH",
  tagline:
    "IT student focused on system development, web technologies and building things that ship. Currently finishing 4th year and hunting for an internship that turns coursework into production code.",
};

export const CONTACT = {
  email: "orojoshua44@gmail.com",
  phone: "+63 921 981 6129",
  location: "Davao City, Philippines",
  github: "https://github.com/joshyroww",
  facebook: "https://www.facebook.com/Joshy.Roro",
};

export const EDUCATION = [
  { label: "DEGREE", value: "BS Information Technology" },
  { label: "SCHOOL", value: "Holy Cross of Davao College" },
  { label: "LEVEL", value: "4th Year (on track)" },
  { label: "SPECIALIZATION", value: "System Development" },
  { label: "STATUS", value: "Seeking OJT / Internship" },
];

export const SKILLS = [
  {
    cat: "PROGRAMMING",
    items: [
      { n: "JavaScript", s: 4 },
      { n: "TypeScript", s: 3 },
      { n: "Python", s: 3 },
      { n: "Java", s: 3 },
      { n: "PHP", s: 3 },
      { n: "Kotlin", s: 3 },
    ],
  },
  {
    cat: "WEB DEV",
    items: [
      { n: "HTML5", s: 5 },
      { n: "CSS3", s: 4 },
      { n: "React", s: 4 },
      { n: "Tailwind CSS", s: 4 },
      { n: "Node.js", s: 3 },
      { n: "Next.js", s: 3 },
    ],
  },
  {
    cat: "DATABASES",
    items: [
      { n: "MySQL", s: 4 },
      { n: "PostgreSQL", s: 3 },
      { n: "MongoDB", s: 3 },
      { n: "Firebase", s: 3 },
    ],
  },
  {
    cat: "UI / UX",
    items: [
      { n: "Figma", s: 3 },
      { n: "Responsive Design", s: 4 },
      { n: "User Research", s: 3 },
    ],
  },
  {
    cat: "TOOLS",
    items: [
      { n: "Git", s: 4 },
      { n: "VS Code", s: 4 },
      { n: "npm", s: 4 },
      { n: "Vite", s: 4 },
    ],
  },
  {
    cat: "SYSTEMS",
    items: [
      { n: "System Analysis", s: 4 },
      { n: "Software Design", s: 3 },
      { n: "Testing", s: 3 },
    ],
  },
];

export const COMPANIES = [
  {
    name: "WorldTech Information Solutions, Inc.",
    focus: "IT consultancy · cybersecurity · certification training",
    day: 1,
  },
  {
    name: "CodeChum",
    focus: "EdTech · making programming education accessible",
    day: 2,
  },
  {
    name: "RIVAN IT CEBU",
    focus: "Networking & IT certification courses",
    day: 2,
  },
  {
    name: "MATA Technologies, Inc.",
    focus: "VR tours · 3D mapping for real estate & tourism",
    day: 3,
  },
  {
    name: "TARSIER 117",
    focus: "Integrated emergency response & disaster management",
    day: 4,
  },
];

export const PROJECTS = [
  {
    id: "PJT-001",
    name: "Lexora",
    type: "AI Thesis · Reading App",
    stack: ["Next.js 16", "TypeScript", "Prisma", "Supabase", "Whisper ASR", "Tailwind"],
    desc: "AI-assisted reading & progress-tracking web app for dyslexic learners: Filipino (Marungko) word exercises, pre-trained Whisper oral-reading scoring, adaptive levels, analytics and CSV export. My undergrad thesis project.",
    link: "https://github.com/joshuaoro/lexora",
    featured: true,
  },
  {
    id: "PJT-002",
    name: "Plant Exchange",
    type: "Full-Stack Web App",
    stack: ["Next.js 14", "MySQL", "Tailwind", "Auth"],
    desc: "Community marketplace where plant lovers list, exchange, message and review. 6+ relational tables, image uploads, secure hashing.",
    link: "https://github.com/joshyroww/plant-exchange",
  },
  {
    id: "PJT-003",
    name: "SocialApp",
    type: "Android + REST API",
    stack: ["Kotlin", "Android", "PHP", "MySQL", "Retrofit"],
    desc: "Mobile social feed — login, posts and comments — wired to a PHP REST backend over a shared MySQL schema.",
    link: "https://github.com/joshyroww/IPT102",
  },
  {
    id: "PJT-004",
    name: "Cebu–Bohol Digital Chronicle",
    type: "Interactive Story",
    stack: ["React", "Vite", "TS", "Tailwind", "Framer Motion"],
    desc: "Animated documentation of a 4-day educational tour: timeline, company profiles, gallery and certificates.",
    link: "https://github.com/joshyroww/cebu-bohol-digital-chronicle",
  },
  {
    id: "PJT-005",
    name: "Thermal Receipt Resume",
    type: "Portfolio / This Site",
    stack: ["React", "Vite", "Tailwind", "qrcode.react"],
    desc: "A resume printed as a shipping manifest. Built to be skimmed in 30s, scanned, or sent straight to the printer.",
    link: "https://github.com/joshyroww",
  },
];

export const CERTS = [
  {
    name: "WATT Tour Certificate",
    issuer: "World of Adventures Travel & Tours",
    date: "Nov 2025",
    note: "Cebu–Bohol Educational Tour participation",
  },
  {
    name: "JavaScript Tutorial Certificate",
    issuer: "Learnoverse",
    date: "Dec 03 2023",
    note: "“Learn JavaScript Just in 1 Hour”",
  },
];

export const NOW: { label: string; value: string; href?: string }[] = [
  { label: "PURSUING", value: "4th year BSIT @ HCDC — thesis & OJT season" },
  {
    label: "BUILDING",
    value: "Lexora — AI-assisted reading & progress tracking for dyslexic learners",
    href: "https://github.com/joshuaoro/lexora",
  },
  { label: "LEARNING", value: "Cybersecurity" },
  { label: "OPEN TO", value: "Internship · freelance · thesis collab" },
];

export const SECTIONS = [
  { id: "about", no: 1, name: "ABOUT" },
  { id: "education", no: 2, name: "EDUCATION" },
  { id: "skills", no: 3, name: "SKILLS" },
  { id: "exposure", no: 4, name: "EXPOSURE" },
  { id: "projects", no: 5, name: "PROJECTS" },
  { id: "certs", no: 6, name: "CERTS" },
  { id: "now", no: 7, name: "NOW" },
  { id: "contact", no: 8, name: "CONTACT" },
];
