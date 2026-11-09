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
    "Docker",
    "Ollama",
    "LangChain",
    "pgvector",
    "Filament",
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
    title: "Template Website Toko Fashion",
    projectTitle: "Template Website Toko Fashion",
    role: "",
    year: "November 2026",
    description:
      "Proyek ini membangun template website toko pakaian yang modern, responsif, dan siap pakai untuk bisnis fashion pada Oktober 2026. Antarmuka dikembangkan dengan Tailwind CSS agar tampilan konsisten di semua perangkat, sementara fitur Next.js dimanfaatkan untuk menghasilkan website yang cepat dimuat dan ramah SEO sehingga mudah ditemukan calon pelanggan.",
    caseStudy: {
      points: [
        "Mengembangkan tata letak katalog produk, halaman detail, dan keranjang belanja yang tampil optimal di ponsel, tablet, dan desktop, dengan desain yang bersih dan mudah dikustomisasi sesuai identitas brand.",
        "Memanfaatkan Server-Side Rendering/Static Generation, optimasi gambar (next/image), dan pengelolaan metadata agar waktu muat singkat serta peringkat di mesin",
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
    title: "Redesain Website Nura Store",
    projectTitle: "",
    role: "",
    year: "Juni 2026",
    description:
      "Proyek ini merupakan redesign UI/UX website Nura Store untuk memperkuat daya tarik visual brand dan menghadirkan pengalaman belanja yang lebih nyaman. Antarmuka dibangun dengan Tailwind CSS agar tampil responsif di berbagai perangkat, sementara Next.js dimanfaatkan untuk menghasilkan website yang ringan, cepat dimuat, dan ramah SEO sehingga pengalaman pengguna meningkat secara signifikan.",
    caseStudy: {
      points: [
        "Menyegarkan tampilan brand melalui palet warna, tipografi, dan layout baru, lalu mengimplementasikannya dengan Tailwind CSS agar konsisten dan optimal di ponsel, tablet, maupun desktop.",
        "Memanfaatkan Static Generation/SSR, optimasi gambar (next/image), dan pengelolaan metadata agar website lebih ringan, waktu muat lebih singkat, dan lebih mudah ditemukan di mesin pencari.",
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
    title: "Pengembangan Career Portal PT. Multi Spunindo Jaya, Tbk",
    projectTitle: "",
    role: "",
    year: "2025",
    description:
      "Proyek ini merancang dan mengembangkan web Career Portal internal perusahaan dengan UI/UX responsif yang mencakup halaman lowongan kerja, agenda, berita acara, artikel, dan profil perusahaan. Dilengkapi dashboard admin terpusat untuk mengelola seluruh konten serta memantau data pelamar, dengan Laravel sebagai backend dan MySQL sebagai basis data agar informasi lowongan kerja tampil secara dinamis, sehingga proses rekrutmen dan penyebaran informasi menjadi lebih efisien.",
    caseStudy: {
      points: [
        "Merancang dan membangun halaman lowongan kerja, agenda, berita acara, artikel, dan profil perusahaan dengan tampilan yang konsisten, mudah dinavigasi, dan optimal di berbagai perangkat.",
        "Membangun dashboard internal terpusat untuk mengelola konten (lowongan, agenda, berita, artikel) dan memantau data pelamar, ditenagai Laravel dan MySQL agar data lowongan kerja dikelola serta ditampilkan secara dinamis dan",
      ],
    },
    image: "/images/projects/spunindo.png",
    caseStudyUrl: "#",
    projectUrl: "https://karir.spunindo.com/homepage",
    tools: [
      { name: "Laravel", icon: "/images/tools/laravel.png" },
      { name: "MySQL", icon: "/images/tools/mysql.png" },
      { name: "Figma", icon: "/images/tools/figma.webp" },
      { name: "TailwindCSS", icon: "/images/tools/tailwind.png" },
      { name: "Boostrap", icon: "/images/tools/boostrap.webp" },
    ],
  },
  {
    id: "proj-4",
    title: "Chatbot Berbasis RAG untuk Notulensi Rapat",
    projectTitle: "",
    role: "",
    year: "2025",
    description:
      "Proyek ini mengembangkan platform berbasis web yang mengintegrasikan metode Retrieval-Augmented Generation (RAG) untuk mengelola dan memproses notulensi rapat secara otomatis. Pengguna dapat mengunggah dokumen notulensi dan berinteraksi dengan chatbot untuk bertanya langsung terkait isi rapat, dengan jawaban yang akurat, relevan, dan berbasis bukti dari dokumen tersimpan, sehingga waktu penelusuran hasil keputusan rapat dapat dihemat secara signifikan.",
    caseStudy: {
      points: [
        "Membangun fitur unggah dokumen notulensi serta antarmuka chatbot interaktif untuk tanya jawab seputar isi rapat. Pendekatan RAG menggabungkan kemampuan LLM dengan pencarian bukti faktual langsung dari dokumen, sehingga jawaban akurat, relevan, dan bebas dari halusinasi AI.",
        "Membangun backend dengan FastAPI dan frontend dengan React Router (framework mode), menggunakan PostgreSQL dengan ekstensi pgvector sebagai vector database. LangChain berperan sebagai orchestration framework, Ollama menjalankan model LLM dan embedding secara lokal, dan FlashRank (Hugging Face) melakukan reranking untuk meningkatkan relevansi hasil pencarian.",
      ],
    },
    image: "/images/projects/rag.png",
    caseStudyUrl: "#",
    projectUrl: "",
    tools: [
      { name: "FastApi", icon: "/images/tools/fastapi.webp" },
      { name: "Ollama", icon: "/images/tools/ollama.webp" },
      { name: "Langchain", icon: "/images/tools/langchain.webp" },
      { name: "PostgreSQL", icon: "/images/tools/postgresql.webp" },
    ],
  },
  {
    id: "proj-5",
    title: "OTOBOOK: Pembaca Otomatis Metadata Buku untuk Koleksi Buku di Perpustakaan",
    projectTitle: "",
    role: "",
    year: "2024",
    description:
      "Berhasil meraih pendanaan Program Kreativitas Mahasiswa - Karsa Cipta (PKM-KC) bersama tim untuk proyek “OTOBOOK: Pembaca Otomatis Metadata Buku untuk Koleksi Buku di Perpustakaan”. Aplikasi mobile berbasis Flutter ini memanfaatkan Tesseract OCR untuk membaca teks dari sampul dan halaman informasi buku, serta OpenAI untuk mengolah hasilnya menjadi metadata yang terstruktur, sehingga proses pendataan koleksi perpustakaan menjadi lebih cepat dan minim input manual.",
    caseStudy: {
      points: [
        "Mengembangkan aplikasi Flutter yang memungkinkan pengguna memindai sampul atau halaman hak cipta buku, lalu mengekstrak teks secara otomatis menggunakan Tesseract OCR sebagai dasar pengambilan data buku.",
        "Mengintegrasikan OpenAI untuk membersihkan dan menyusun hasil OCR menjadi metadata yang rapi, seperti judul, penulis, penerbit, tahun terbit, dan ISBN, sehingga data koleksi perpustakaan lebih akurat dan siap disimpan.",
      ],
    },
    image: "/images/projects/otobook.jpeg",
    caseStudyUrl: "#",
    projectUrl: "https://play.google.com/store/apps/details?id=com.otobook.perpustakaan",
    tools: [
      { name: "Flutter", icon: "/images/tools/flutter.png" },
    ],
  },
  {
    id: "proj-6",
    title: "skinSync: Platform E-commerce Produk Skincare",
    projectTitle: "",
    role: "",
    year: "2026",
    description:
      "Proyek ini mengembangkan platform jual beli produk skincare SkinSync, brand skincare Indonesia, dalam bentuk website e-commerce yang lengkap. Platform menampilkan katalog produk per kategori (pembersih wajah, serum, pelembap, tabir surya, dan lainnya), dilengkapi pembayaran online melalui Midtrans serta broadcast notifikasi melalui Fonnte. Sistem dibangun dengan Next.js dan PostgreSQL agar cepat, ramah SEO, dan data produk serta transaksi terkelola dengan baik.",
    caseStudy: {
      points: [
        "Membangun halaman katalog, kategori, dan detail produk yang responsif dan ramah SEO, serta alur belanja dari login hingga checkout. Data produk, pengguna, dan pesanan dikelola di PostgreSQL.",
        "Mengintegrasikan Midtrans untuk pembayaran online (QRIS, virtual account, kartu kredit) dan Fonnte untuk mengirim pesan WhatsApp otomatis, seperti notifikasi pesanan, resi pengiriman, dan broadcast promo, sehingga proses transaksi dan komunikasi dengan pelanggan berjalan lebih cepat.",
      ],
    },
    image: "/images/projects/skinsync.png",
    caseStudyUrl: "#",
    projectUrl: "https://skinsync-production-7e35.up.railway.app/",
    tools: [
      { name: "NextJS", icon: "/images/tools/nextjs.png" },
      { name: "TailwindCSS", icon: "/images/tools/tailwind.png" },
      { name: "Fonnte", icon: "/images/tools/fonnte.png" },
      { name: "Midtrans", icon: "/images/tools/midtrans.png" },
    ],
  },
  {
    id: "proj-7",
    title: "KosKita: Platform Pengelolaan Hunian Kos",
    projectTitle: "",
    role: "",
    year: "2025",
    description:
      "Proyek ini mengembangkan KosKita, platform berbasis web untuk memudahkan pencarian, pengelolaan, dan pembayaran hunian kos. Sistem dibangun dengan Laravel sebagai backend dan React sebagai frontend, dilengkapi integrasi Midtrans untuk pembayaran online dan Fonnte untuk pengiriman notifikasi WhatsApp, sehingga proses transaksi dan komunikasi antara pemilik kos dan penghuni berjalan lebih cepat dan terstruktur.",
    caseStudy: {
      points: [
        "Membangun antarmuka responsif dengan React untuk pencarian kos, detail kamar, dan pengelolaan data kos, yang terhubung dengan backend Laravel sebagai pengelola data kamar, penghuni, dan transaksi secara terpusat.",
        "Mengintegrasikan Midtrans untuk pembayaran sewa kos secara online, serta Fonnte untuk mengirim pesan WhatsApp otomatis seperti konfirmasi pembayaran, pengingat jatuh tempo, dan pengumuman, sehingga pengelolaan sewa lebih efisien dan minim input manual.",
      ],
    },
    image: "/images/projects/kos.png",
    caseStudyUrl: "#",
    projectUrl: "https://kos-chi.vercel.app/",
    tools: [
      { name: "TailwindCSS", icon: "/images/tools/tailwind.png" },
      { name: "React", icon: "/images/tools/react.webp" },
      { name: "TailwindCSS", icon: "/images/tools/tailwind.png" },
      { name: "Fonnte", icon: "/images/tools/fonnte.png" },
      { name: "Midtrans", icon: "/images/tools/midtrans.png" },
    ],
  },
  {
    id: "proj-8",
    title: "reservation-room: Platform Reservasi Ruangan",
    projectTitle: "",
    role: "",
    year: "2026",
    description:
      "Proyek ini mengembangkan RoomReserve, sistem reservasi ruangan dan kelas berbasis web untuk kebutuhan kampus. Sistem dibangun dengan Laravel, dashboard admin berbasis TailAdmin, dan PostgreSQL sebagai basis data, sehingga pengelolaan gedung, ruangan, dan jadwal pemakaian dapat dilakukan secara terpusat, real-time, dan terhindar dari bentrok jadwal.",
    caseStudy: {
      points: [
        "Membangun halaman daftar gedung, ruangan beserta kapasitas dan fasilitasnya, informasi ketersediaan ruangan hari ini, dan jadwal tiap ruangan. Pengguna dapat mendaftar, login, dan melakukan reservasi dengan mudah di berbagai perangkat.",
        "Menyediakan dashboard admin berbasis TailAdmin untuk mengelola data gedung, ruangan, dan reservasi, dengan backend Laravel dan data tersimpan di PostgreSQL agar pengelolaan jadwal lebih efisien, akurat, dan terstruktur.",
      ],
    },
    image: "/images/projects/room_reserve.png",
    caseStudyUrl: "#",
    projectUrl: "https://reservation-room.vercel.app/",
    tools: [
      { name: "TailwindCSS", icon: "/images/tools/tailwind.png" },
      { name: "laravel", icon: "/images/tools/laravel.png" },
    ],
  },
  {
    id: "proj-9",
    title: "",
    projectTitle: "Company Profile Website dengan Dashboard Admin",
    role: "",
    year: "2024",
    description:
      "Proyek ini mengembangkan website company profile yang dilengkapi dashboard admin untuk memudahkan pengelolaan konten perusahaan. Website dibangun menggunakan Filament dan MySQL sehingga informasi perusahaan dapat diperbarui secara mandiri, cepat, dan terstruktur tanpa perlu campur tangan developer.",
    caseStudy: {
      points: [
        "Membangun halaman profil perusahaan, layanan, dan informasi pendukung lainnya dengan tampilan yang profesional, responsif, dan mudah diakses di berbagai perangkat.",
        "Menyediakan panel admin untuk mengelola konten perusahaan secara terpusat, dengan data tersimpan di MySQL agar pembaruan informasi berjalan efisien dan terorganisir",
      ],
    },
    image: "/images/projects/company_profile.png",
    caseStudyUrl: "#",
    projectUrl: "https://kreatifa.com/about",
    tools: [
      { name: "Laravel", icon: "/images/tools/laravel.png" },
      { name: "TailwindCSS", icon: "/images/tools/tailwind.png" },
      { name: "PostgreSQL", icon: "/images/tools/postgresql.webp" },
    ],
  },
  {
    id: "proj-10",
    title: "Tryout Online Platform untuk Sekolah",
    projectTitle: "",
    role: "",
    year: "2024",
    description:
      "Proyek ini berkolaborasi dengan tim pengembang magang dalam membangun platform tryout online berbasis CodeIgniter dan PostgreSQL. Platform dirancang untuk memenuhi kebutuhan berbagai sekolah dalam menyelenggarakan ujian tryout secara digital, terstruktur, dan mudah dikelola.",
    caseStudy: {
      points: [
        "Bekerja sama dengan tim pengembang magang dalam merancang fitur, membagi tugas, dan mengintegrasikan modul platform agar pengembangan berjalan terkoordinasi dan sesuai target.",
        "Membangun sistem pengelolaan soal, peserta, dan hasil tryout yang andal dengan CodeIgniter dan PostgreSQL, sehingga dapat melayani kebutuhan berbagai sekolah secara fleksibel.",
      ],
    },
    image: "/images/projects/tryout.png",
    caseStudyUrl: "#",
    projectUrl: "https://tryout.global-inovasi.com/",
    tools: [
      { name: "Codeigniter", icon: "/images/tools/codeigniter.png" },
      { name: "PostgreSQL", icon: "/images/tools/postgresql.webp" },
      { name: "TailwindCSS", icon: "/images/tools/tailwind.png" },
    ],
  },
  {
    id: "proj-11",
    title: "Sistem Keuangan Internal Perusahaan",
    projectTitle: "",
    role: "",
    year: "2024",
    description:
      "Proyek ini mengembangkan sistem keuangan internal perusahaan menggunakan CodeIgniter dan PostgreSQL. Sistem ini dibuat untuk mendukung proses pemantauan keuangan secara akurat serta membantu manajemen dalam mengambil keputusan berbasis data.",
    caseStudy: {
      points: [
        "Mengembangkan fitur pengelolaan data transaksi dan laporan keuangan yang terstruktur sehingga kondisi keuangan perusahaan dapat dipantau dengan mudah dan transparan.",
        "Memanfaatkan CodeIgniter dan PostgreSQL untuk menyajikan data yang akurat dan terintegrasi, sehingga manajemen dapat membuat keputusan yang lebih cepat dan tepat.",
      ],
    },
    image: "/images/projects/keuangan.png",
    caseStudyUrl: "#",
    projectUrl: "https://koeangan.kreatifa.com/",
    tools: [
      { name: "Codeigniter", icon: "/images/tools/codeigniter.png" },
      { name: "PostgreSQL", icon: "/images/tools/postgresql.webp" },
      { name: "TailwindCSS", icon: "/images/tools/tailwind.png" },
    ],
  },
];

export const certificatesData = [
  {
    id: "cert-1",
    year: "Mei 2025 - Mei 2027",
    name: "TOEFL(450)",
    issuer: "PENS ENGLISH PROFICIENCY TEST(PEPT)",
    image: "/images/certificates/toefl.png",
  },
  {
    id: "cert-2",
    year: "Desember 2025 - Maret 2026",
    name: "Web Programming",
    issuer: "Yayasan Plan International Indonesia (plan Indonesia)",
    image: "/images/certificates/web_plan.png",
  },
  {
    id: "cert-3",
    year: "Mei 2025 - Mei 2027",
    name: "Junior Web Developer",
    issuer: "BNSP",
    image: "/images/certificates/bnsp.png",
  },
  {
    id: "cert-4",
    year: "Maret 2026 - Juli 2026",
    name: "Belajar Dasar AI",
    issuer: "Dicoding",
    image: "/images/certificates/ai.png",
  },
  {
    id: "cert-5",
    year: "Maret 2026 - Juli 2026",
    name: "Prompt Engineering untuk Software Developer",
    issuer: "Dicoding",
    image: "/images/certificates/prompt.png",
  },
];

export const socialLinks = {
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/in/waridatuljannah00",
  email: "waridatuljannah00@gmail.com",
};
