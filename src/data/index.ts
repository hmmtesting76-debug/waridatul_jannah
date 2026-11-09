// ============================================================
// DATA STORE — edit all portfolio content here
// ============================================================

export const bioData = {
  name: "Waridatul Jannah",
  tagline: "desainer",
  bio: "Fullstack Developer dengan pengalaman membangun website end-to-end, mulai dari perancangan sistem, pengembangan frontend dan backend, hingga deployment ke server. Berpengalaman mengintegrasikan Artificial Intelligence ke dalam aplikasi, termasuk pengembangan chatbot berbasis Retrieval Augmented Generation (RAG) dan pemanfaatan LLM untuk mempermudah interaksi pengguna dengan sistem. Terbiasa bekerja mandiri maupun dalam tim, serta antusias mempelajari teknologi baru.",
    skills: [
    "Laravel",
    "CodeIgniter",
    "FastAPI",
    "ReactJS",
    "TypeScript",
    "NextJS",
    "TailwindCSS",
    "Docker",
    "PostgreSQL",
    "MySQL",
    "Git",
    "Figma",
    "Github",
    "Docker"
  ],
  cvUrl: "/cv-waridatul-jannah.pdf",
};

export const educationData = [
  {
    id: "edu-1",
    institution: "Politeknik Elektronika Negeri Surabaya",
    major: "D4 Teknik Informatika",
    year: "2025 - 2026",
    description: "IPK 3.64 / 4.00 · Lulus dengan predikat Cum Laude",
  },
  {
    id: "edu-2",
    institution: "Politeknik Elektronika Negeri Surabaya",
    major: "D3 Teknik Informatika",
    year: "2022 – 2025",
    description: "IPK 3.87 / 4.00 · Lulus dengan predikat Cum Laude",
  },
];

export const experienceData = [
  {
    id: "exp-1",
    position: "Web Developer",
    company: "PT Aguna Teknologi Indonesia",
    period: "Oktober 2026",
    color: "sage" as const,
    achievements: [
      "Membangun template website toko fashion untuk bisnis toko pakaian",
      "Mengembangkan antarmuka responsif dengan Tailwind CSS dan memanfaatkan fitur Next.js agar website cepat dimuat dan ramah SEO.",
    ],
  },
  {
    id: "exp-2",
    position: "Front-end Web Developer",
    company: "Nura Store",
    period: "Juni 2026",
    color: "lavender" as const,
    achievements: [
      "Melakukan redesign UI/UX website Nura Store untuk meningkatkan daya tarik visual brand",
      "Mengimplementasikan Tailwind CSS untuk membangun antarmuka yang responsif di berbagai perangkat, serta memanfaatkan Next.js untuk menghasilkan website yang ringan dan SEO friendly, sehingga meningkatkan pengalaman pengguna secara signifikan."
    ],
  },
  {
    id: "exp-3",
    position: "Full-Stack Web Developer",
    company: "PT. Multi Spunindo Jaya, Tbk",
    period: "Januari 2025 - Juni 2025",
    color: "lavender" as const,
    achievements: [
    "Merancang dan mengembangkan web Career Portal internal perusahaan, mencakup implementasi UI/UX yang responsif untuk halaman lowongan kerja, agenda, berita acara, artikel, dan profil perusahaan.",
    "Membangun dashboard admin internal terpusat untuk mengelola konten perusahaan (lowongan kerja, agenda, berita, artikel) serta memantau data pelamar guna meningkatkan efisiensi proses rekrutmen dan penyebaran informasi."  
    ],
  },
  {
    id: "exp-4",
    position: "Full-Stack Web Developer",
    company: "CV. Purnama Kreatifa",
    period: "Juli 2024 - Desember 2024",
    color: "lavender" as const,
    achievements: [
    "Mengembangkan website company profile yang dilengkapi dashboard admin untuk kemudahan pengelolaan konten perusahaan, menggunakan Filament dan MySQL.",
    "Berkolaborasi dengan tim pengembang magang dalam membangun platform tryout online berbasis CodeIgniter dan PostgreSQL untuk memfasilitasi kebutuhan berbagai sekolah",
    "Pengembangan sistem keuangan internal perusahaan menggunakan CodeIgniter dan PostgreSQL, untuk mendukung proses pemantauan dan pengambilan keputusan manajemen."
    ],
  },
];

export const portfolioData = [
  {
    id: "proj-1",
    title: "",
    projectTitle: "",
    role: "",
    year: "November 2026",
    description:
      "",
    caseStudy: {
      points: [
        "",
        "",
        "",
        "",
      ],
    },
    image: "/images/projects/template-website.png",
    caseStudyUrl: "#",
    projectUrl: "https://toko-retail-fashion-template-2.vercel.app/",
    tools: [
      { name: "NextJs", icon: "/images/tools/nextjs.png" },
      { name: "TailwindCSS", icon: "/images/tools/tailwind.png" },
    ],
  },
  {
    id: "proj-2",
    title: "",
    projectTitle: "",
    role: "",
    year: "",
    description:
      "",
    caseStudy: {
      points: [
        "",
        "",
        "",
        "",
      ],
    },
    image: "/images/projects/nurastore.png",
    caseStudyUrl: "#",
    projectUrl: "https://nurastore-five.vercel.app/",
    tools: [
      { name: "NextJs", icon: "/images/tools/nextjs.png" },
      { name: "TailwindCSS", icon: "/images/tools/tailwind.png" },
    ],
  },
  {
    id: "proj-3",
    title: "",
    projectTitle: "",
    role: "",
    year: "",
    description:
      "",
    caseStudy: {
      points: [
        "",
        "",
        "",
        "",
      ],
    },
    image: "/images/projects/spunindo.png",
    caseStudyUrl: "#",
    projectUrl: "https://karir.spunindo.com/homepage",
    tools: [
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
    ],
  },
  {
    id: "proj-4",
    title: "",
    projectTitle: "",
    role: "",
    year: "",
    description:
      "",
    caseStudy: {
      points: [
        "",
        "",
        "",
        "",
      ],
    },
    image: "/images/projects/rag.png",
    caseStudyUrl: "#",
    projectUrl: "",
    tools: [
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
    ],
  },
  {
    id: "proj-5",
    title: "",
    projectTitle: "",
    role: "",
    year: "",
    description:
      "",
    caseStudy: {
      points: [
        "",
        "",
        "",
        "",
      ],
    },
    image: "/images/projects/otobook.jpeg",
    caseStudyUrl: "#",
    projectUrl: "https://play.google.com/store/apps/details?id=com.otobook.perpustakaan",
    tools: [
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
    ],
  },
  {
    id: "proj-6",
    title: "",
    projectTitle: "",
    role: "",
    year: "",
    description:
      "",
    caseStudy: {
      points: [
        "",
        "",
        "",
        "",
      ],
    },
    image: "/images/projects/skinsync.png",
    caseStudyUrl: "#",
    projectUrl: "https://skinsync-production-7e35.up.railway.app/",
    tools: [
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
    ],
  },
  {
    id: "proj-7",
    title: "",
    projectTitle: "",
    role: "",
    year: "",
    description:
      "",
    caseStudy: {
      points: [
        "",
        "",
        "",
        "",
      ],
    },
    image: "/images/projects/kos.png",
    caseStudyUrl: "#",
    projectUrl: "https://kos-chi.vercel.app/",
    tools: [
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
    ],
  },
  {
    id: "proj-8",
    title: "",
    projectTitle: "",
    role: "",
    year: "",
    description:
      "",
    caseStudy: {
      points: [
        "",
        "",
        "",
        "",
      ],
    },
    image: "/images/projects/room_reserve.png",
    caseStudyUrl: "#",
    projectUrl: "https://reservation-room.vercel.app/",
    tools: [
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
    ],
  },
  {
    id: "proj-9",
    title: "",
    projectTitle: "",
    role: "",
    year: "",
    description:
      "",
    caseStudy: {
      points: [
        "",
        "",
        "",
        "",
      ],
    },
    image: "/images/projects/company_profile.png",
    caseStudyUrl: "#",
    projectUrl: "https://kreatifa.com/about",
    tools: [
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
    ],
  },
  {
    id: "proj-10",
    title: "",
    projectTitle: "",
    role: "",
    year: "",
    description:
      "",
    caseStudy: {
      points: [
        "",
        "",
        "",
        "",
      ],
    },
    image: "/images/projects/tryout.png",
    caseStudyUrl: "#",
    projectUrl: "https://tryout.global-inovasi.com/",
    tools: [
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
    ],
  },
  {
    id: "proj-11",
    title: "",
    projectTitle: "",
    role: "",
    year: "",
    description:
      "",
    caseStudy: {
      points: [
        "",
        "",
        "",
        "",
      ],
    },
    image: "/images/projects/keuangan.png",
    caseStudyUrl: "#",
    projectUrl: "https://koeangan.kreatifa.com/",
    tools: [
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
      { name: "", icon: "/images/tools/" },
    ],
  },
];

export const certificatesData = [
  {
    id: "cert-1",
    year: "2024",
    name: "Google UX Design Professional Certificate",
    issuer: "Google / Coursera",
    image: "/images/certificates/google-ux.jpg",
  },
  {
    id: "cert-2",
    year: "2023",
    name: "UI Design Bootcamp",
    issuer: "Dicoding Indonesia",
    image: "/images/certificates/dicoding-ui.jpg",
  },
  {
    id: "cert-3",
    year: "2023",
    name: "Figma Advanced: Design Systems",
    issuer: "Figma Academy",
    image: "/images/certificates/figma-ds.jpg",
  },
  {
    id: "cert-4",
    year: "2022",
    name: "Adobe Certified Professional",
    issuer: "Adobe",
    image: "/images/certificates/adobe-cert.jpg",
  },
  {
    id: "cert-5",
    year: "2022",
    name: "Human-Computer Interaction",
    issuer: "Interaction Design Foundation",
    image: "/images/certificates/hci-cert.jpg",
  },
];

export const socialLinks = {
  behance: "https://behance.net/",
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/in/",
  email: "waridatul@example.com",
};
