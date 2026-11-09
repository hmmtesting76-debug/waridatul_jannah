// ============================================================
// DATA STORE — edit all portfolio content here
// ============================================================

export const bioData = {
  name: "Waridatul Jannah",
  tagline: "desainer",
  bio: "Fullstack Developer dengan pengalaman membangun website end-to-end, mulai dari perancangan sistem, pengembangan frontend dan backend, hingga deployment ke server. Berpengalaman mengintegrasikan Artificial Intelligence ke dalam aplikasi, termasuk pengembangan chatbot berbasis Retrieval Augmented Generation (RAG) dan pemanfaatan LLM untuk mempermudah interaksi pengguna dengan sistem. Terbiasa bekerja mandiri maupun dalam tim, serta antusias mempelajari teknologi baru.",
    skills: [
    "UI/UX Design",
    "Figma",
    "Prototyping",
    "User Research",
    "Design System",
    "Illustrator",
    "Branding",
    "Motion Design",
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
    position: "UI/UX Designer",
    company: "PT Aguna ",
    period: "Jan 2024 – Sekarang",
    color: "sage" as const,
    achievements: [
      "Merancang ulang aplikasi mobile utama, meningkatkan retensi pengguna sebesar 32%.",
      "Membangun design system dari nol dengan 200+ komponen yang konsisten.",
      "Memimpin sesi user research dengan 50+ partisipan di 3 kota.",
    ],
  },
  {
    id: "exp-2",
    position: "Graphic Designer (Magang)",
    company: "Studio Kreatif Nusantara",
    period: "Jul – Des 2023",
    color: "lavender" as const,
    achievements: [
      "Mendesain materi kampanye digital untuk 10+ klien UMKM.",
      "Mengembangkan identitas visual baru yang meningkatkan engagement media sosial 45%.",
    ],
  },
];

export const portfolioData = [
  {
    id: "proj-1",
    title: "Mengubah *ide* menjadi *pengalaman*",
    projectTitle: "FinPal – Aplikasi Keuangan Pribadi",
    role: "Lead UI/UX Designer",
    year: "2024",
    description:
      "Merancang pengalaman pengguna yang menyederhanakan manajemen keuangan harian untuk generasi muda Indonesia.",
    caseStudy: {
      points: [
        "Menyederhanakan pencatatan pemasukan dan pengeluaran harian.",
        "Melakukan riset kebiasaan finansial generasi muda Indonesia.",
        "Membuat alur budgeting, insight keuangan, dan pengingat yang mudah dipahami.",
        "Menguji prototype secara iteratif untuk memastikan pengalaman yang praktis.",
      ],
    },
    image: "/images/projects/template-website.png",
    caseStudyUrl: "#",
    projectUrl: "https://toko-retail-fashion-template-2.vercel.app/",
    tools: [
      { name: "Figma", icon: "/images/tools/nextjs.png" },
      { name: "Illustrator", icon: "/images/tools/illustrator.svg" },
      { name: "Maze", icon: "/images/tools/maze.svg" },
      { name: "Notion", icon: "/images/tools/notion.svg" },
    ],
  },
  {
    id: "proj-2",
    title: "Desain yang *bercerita* dan *bernapas*",
    projectTitle: "Warung Kita – Platform UMKM",
    role: "Product Designer",
    year: "2024",
    description:
      "Membangun ekosistem digital end-to-end untuk membantu UMKM Indonesia go-digital dengan mudah.",
    caseStudy: {
      points: [
        "Memetakan kebutuhan pemilik warung yang baru mulai menggunakan teknologi digital.",
        "Merancang katalog produk, pencatatan pesanan, dan dashboard usaha dalam satu alur.",
        "Membuat sistem desain yang sederhana agar mudah digunakan di berbagai ukuran layar.",
        "Mengoptimalkan proses onboarding supaya pelaku UMKM dapat mulai berjualan dengan cepat.",
      ],
    },
    image: "/images/projects/nurastore.png",
    caseStudyUrl: "#",
    projectUrl: "https://nurastore-five.vercel.app/",
    tools: [
      { name: "Figma", icon: "/images/tools/figma.svg" },
      { name: "Photoshop", icon: "/images/tools/photoshop.svg" },
      { name: "FigJam", icon: "/images/tools/figjam.svg" },
      { name: "Zeplin", icon: "/images/tools/zeplin.svg" },
      { name: "Miro", icon: "/images/tools/miro.svg" },
    ],
  },
  {
    id: "proj-3",
    title: "Merajut *identitas* lewat *visual*",
    projectTitle: "Bumi Brand Identity",
    role: "Brand Designer",
    year: "2023",
    description:
      "Membangun identitas merek dari nol untuk startup eco-lifestyle, dari logo hingga panduan merek lengkap.",
    caseStudy: {
      points: [
        "Menerjemahkan nilai keberlanjutan Bumi ke dalam identitas visual yang hangat dan modern.",
        "Mengembangkan konsep logo, palet warna, tipografi, dan elemen grafis pendukung.",
        "Menyusun brand guideline agar identitas tetap konsisten di seluruh touchpoint.",
        "Menyiapkan aset visual untuk kebutuhan digital, kemasan, dan media sosial.",
      ],
    },
    image: "/images/projects/spunindo.png",
    caseStudyUrl: "#",
    projectUrl: "https://karir.spunindo.com/homepage",
    tools: [
      { name: "Illustrator", icon: "/images/tools/illustrator.svg" },
      { name: "Photoshop", icon: "/images/tools/photoshop.svg" },
      { name: "InDesign", icon: "/images/tools/indesign.svg" },
      { name: "Figma", icon: "/images/tools/figma.svg" },
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
