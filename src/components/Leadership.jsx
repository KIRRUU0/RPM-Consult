import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, X, Briefcase, GraduationCap, UserCheck } from 'lucide-react';

export default function Leadership() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'directors', name: 'Direksi' },
    { id: 'advisors', name: 'Penasihat & Manajer' },
    { id: 'seniors', name: 'Konsultan Senior' },
    { id: 'juniors', name: 'Konsultan Junior' },
    { id: 'support', name: 'Dukungan Operasional' },
  ];

  const team = [
    {
      id: 1,
      name: 'Agus Priyatna, S.E., M.M., CFRM',
      role: 'Direktur Pajak (Tax Director)',
      category: 'directors',
      degree: 'STAN Jakarta (Diploma Perpajakan), S.E., Magister Manajemen (M.M.)',
      credentials: ['CFRM', 'Mantan DJP (16 Thn)', 'Eks Tax Partner WiN Partners'],
      bio: 'Lulus dari Diploma Perpajakan-STAN Jakarta dan meraih gelar Magister Manajemen, Agus memiliki lebih dari 28 tahun pengalaman di bidang perpajakan dan akuntansi. Setelah 16 tahun berkarier di Direktorat Jenderal Pajak (DJP), Agus melanjutkan karier profesionalnya sebagai Manajer Pajak di RSM Indonesia (salah satu kantor akuntan besar di Indonesia), kemudian menjadi Tax Partner di Enforce Tax Advisory, Deputy Director di Center for Indonesia Taxation Analysis (CITA), serta pendiri dan Tax Partner di WiN Partners.\n\nSebagai pendiri dan Direktur Pajak di PT Raka Pradipta Mahawira (RPM Consult), ia berfokus memberikan layanan terbaik di bidang Kepatuhan Pajak, Pemeriksaan Pajak, Konsultasi Pajak, Perencanaan Pajak, Audit Pajak, Keberatan Pajak, Banding Pajak, dan Peninjauan Kembali di Pengadilan Pajak.',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 2,
      name: 'Jason Lathianza, S.H., M.Kn.',
      role: 'Direktur Hukum (Legal Director)',
      category: 'directors',
      degree: 'Universitas Pelita Harapan (S.H., M.Kn.)',
      credentials: ['Investasi Asing (PMA)', 'Strategi Regulasi', 'Corporate Law'],
      bio: 'Direktur Hukum di PT Raka Pradipta Mahawira yang dikenal luas karena ketajaman bisnis dan keahlian hukumnya yang kuat, serta pengalamannya yang luas dalam memberikan konsultasi hukum dan regulasi untuk urusan bisnis nasional maupun internasional.\n\nIa juga berspesialisasi dalam strategi investasi asing (PMA), memastikan perlindungan komprehensif bagi kepentingan klien dan melindungi mereka dari kerugian aset finansial maupun fisik. Dengan latar belakang yang solid dan hubungan jangka panjang yang terjalin baik dengan aparat penegak hukum, otoritas keamanan, dan tokoh masyarakat, ia mampu menganalisis situasi dan potensi risiko secara sangat spesifik dan rinci.',
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 3,
      name: 'Indriyanto Widhi Nugroho, S.E., Ak., CA, Asean CPA, MM, BKP',
      role: 'Penasihat Pajak Senior (Senior Tax Advisor)',
      category: 'advisors',
      degree: 'STAN Jakarta, Universitas Indonesia (S.E. Ak.), Prasetiya Mulya (M.M.)',
      credentials: ['Asean CPA', 'Aust. CPA', 'BKP', 'Managing Partner Bejana Consulting'],
      bio: 'Lulus dari Diploma Akuntansi-STAN Jakarta, meraih gelar Sarjana Akuntansi dari Universitas Indonesia, dan menyandang gelar Magister Manajemen dalam Manajemen Strategis dari Prasetiya Mulya Business School. Indriyanto memiliki lebih dari 29 tahun pengalaman di bidang perpajakan dan akuntansi.\n\nSetelah 4 tahun berkarier di Kementerian Keuangan, Indriyanto melanjutkan karier profesionalnya di beberapa perusahaan multinasional di bidang akuntansi dan perpajakan (semikonduktor, farmasi, pertambangan, F&B, pupuk). Ia mendirikan Kantor Akuntan Bejana Meniti Artha (Bejana Consulting) pada 2022. Di RPM Consult, ia fokus pada Kepatuhan Pajak, Pemeriksaan Pajak, Perencanaan Pajak, Keberatan/Banding, Peninjauan Kembali, Layanan Akuntansi, dan AUP.',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 4,
      name: 'Tri Sulistyawaty, S.H., M.H.',
      role: 'Advokat Senior & Penasihat Hukum (Senior Legal Advisor)',
      category: 'advisors',
      degree: 'Universitas Trisakti (Magister Hukum Bisnis)',
      credentials: ['PERADI (Sejak 2007)', 'Eks RSM Indonesia', 'Spesialis Hukum Perusahaan'],
      bio: 'Lulus dari Magister Hukum Bisnis Universitas Trisakti, Tri telah memiliki izin advokat dari Perhimpunan Advokat Indonesia (PERADI) sejak tahun 2007. Tri memiliki lebih dari 21 tahun pengalaman di bidang Hukum Perdata, Hukum Privat, dan berspesialisasi dalam Hukum Perusahaan (Corporate Law).\n\nSetelah berkarier di ANR Law Firm, PT Fuji Staff Indonesia (Perusahaan Jepang) di bidang Manajemen dan Konsultasi Bisnis, serta layanan sekretariat perusahaan di RSM Indonesia, ia mendirikan Kantor Hukumnya sendiri pada 2019. Sekarang, Tri membagikan keahliannya di RPM Consult sebagai Penasihat Senior Hukum & Sekretariat Perusahaan, berfokus sebagai Pengacara Perusahaan.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 5,
      name: 'Rodo Parasian Hutagalung, S.E., M.M',
      role: 'Penasihat Manajemen Pajak (Tax Management Advisor)',
      category: 'advisors',
      degree: 'STAN Jakarta, Universitas Lampung (S.E.), Universitas Tarumanagara (M.M.)',
      credentials: ['Mantan DJP (25 Thn)', 'Spesialis Transfer Pricing', 'Eks Manajer Pajak WiN Partners'],
      bio: 'Lulus dari STAN Jakarta dan meraih gelar Magister Manajemen, Rodo memulai kariernya di KPP Bandar Lampung pada tahun 1997. Ia kemudian menjabat sebagai Objection Reviewer (Penelaah Keberatan) di Kanwil DJP Riau & Kepri (dikenal karena keahlian Transfer Pricing), Account Representative (AR) di KPP Pratama Cengkareng, Cikupa, dan Cilegon.\n\nDengan 25 tahun pengalaman di DJP, ia bergabung sebagai Manajer Pajak di WiN Partners setelah pensiun. Pada tahun 2025, Rodo bergabung dengan RPM Consult sebagai Penasihat Manajemen Pajak, berfokus pada Kepatuhan Pajak, Peninjauan Pajak, Konsultasi Pajak, Perencanaan Pajak, Pemeriksaan Pajak, Keberatan Pajak, Banding Pajak, dan Peninjauan Kembali di Pengadilan Pajak.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 6,
      name: 'Steven Andrian Candy, S.E, BKP',
      role: 'Manajer Pajak (Tax Manager)',
      category: 'advisors',
      degree: 'Universitas Tarumanagara (S.E.)',
      credentials: ['BKP (Konsultan Pajak)', 'Pendiri Mitra Consulting', 'Eks Supervisor WiN Partners'],
      bio: 'Lulusan Manajemen dari Universitas Tarumanagara, Steven adalah profesional perpajakan berpengalaman dengan lebih dari enam tahun pengalaman terbukti dalam memberikan solusi perpajakan berkualitas tinggi.\n\nMemulai karier di WiN Partners hingga berkembang menjadi Supervisor Consultant, ia melayani perusahaan penanaman modal asing, UKM, hingga wajib pajak orang pribadi. Pada Februari 2023, ia mendirikan Mitra Consulting. Kini ia juga membagikan keahliannya di RPM Consult, mencakup Kepatuhan Pajak, Peninjauan Pajak, Konsultasi Pajak, Perencanaan Pajak, Audit Pajak, Keberatan Pajak, Banding Pajak hingga Peninjauan Kembali di Pengadilan Pajak.',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 7,
      name: 'Stela Halim, S.Ak.',
      role: 'Konsultan Senior (Senior Consultant)',
      category: 'seniors',
      degree: 'Universitas Bina Nusantara (S.Ak.)',
      credentials: ['Brevet A, B, C', 'Eks Senior Tax WiN Partners', 'Eks Supervisor FAT Titan Group'],
      bio: 'Lulusan Universitas Bina Nusantara jurusan Akuntansi, Stela merupakan profesional berpengalaman dengan lebih dari tujuh tahun pengalaman di bidang keuangan, pembukuan, dan perpajakan di berbagai industri. Ia memegang sertifikasi Brevet Pajak A, B, dan C.\n\nIa memulai kariernya di bidang keuangan dan akuntansi sebelum berkembang sebagai Senior Tax Consultant di WiN Partners. Ia kemudian memperluas keahliannya sebagai Supervisor FAT di Titan Group, memimpin pelaporan keuangan konsolidasian, penganggaran, dan kepatuhan regulasi. Ia telah menangani berbagai macam klien dari konstruksi, manufaktur, pertambangan, migas, ritel, F&B, dll.',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 8,
      name: 'Elieta Vranciska, S.Ak.',
      role: 'Konsultan Senior (Senior Consultant)',
      category: 'seniors',
      degree: 'Universitas Buddhi Dharma (S.Ak.)',
      credentials: ['Brevet C', 'Spesialis Sawit & IT', 'Eks Senior Tax WiN Partners'],
      bio: 'Lulus dari Universitas Buddhi Dharma dengan gelar Sarjana Akuntansi. Elieta memiliki lebih dari enam tahun pengalaman dan telah membangun keahlian yang luas dalam berbagai aspek perpajakan, termasuk kepatuhan pajak, peninjauan pajak, konsultasi pajak, penetapan harga transfer (transfer pricing), pendampingan audit pajak, keberatan pajak, banding pajak, dan peninjauan kembali di pengadilan pajak. Elieta memegang sertifikasi Brevet Pajak tingkat C.\n\nIa memulai kariernya di WiN Partners pada November 2019 dan berkembang menjadi Senior Tax Consultant, melayani berbagai portofolio klien, khususnya di industri perkebunan kelapa sawit dan teknologi informasi.',
      img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 9,
      name: 'Husnul Fadhil, SST.Pa, BKP',
      role: 'Konsultan Senior (Senior Consultant)',
      category: 'seniors',
      degree: 'Sekolah Tinggi Perpajakan Indonesia (SST.Pa)',
      credentials: ['BKP (Konsultan Pajak)', 'Eks Triputra Group', 'Eks Saratoga Group', 'Eks Djarum & Wings Group'],
      bio: 'Lulus dari Sekolah Tinggi Perpajakan Indonesia (STPI) Jakarta dan memiliki Sertifikasi Konsultan Pajak (BKP) dari Kementerian Keuangan, Fadhil memiliki lebih dari 8 tahun pengalaman di bidang perpajakan.\n\nFadhil mengejar karier profesionalnya sebagai Tax Supervisor di beberapa perusahaan terkemuka seperti PT Autopedia Sukses Lestari Tbk (Triputra Group), PT Agro Maju Raya (Saratoga Group), dan PT Pratama Nusantara Sakti (Djarum & Wings Group). Bidang keahliannya meliputi Kepatuhan Pajak, Peninjauan Pajak, Konsultasi Pajak, Perencanaan Pajak, Audit Pajak, Banding Pajak, dan Peninjauan Kembali di Pengadilan Pajak.',
      img: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 10,
      name: 'Firman',
      role: 'Konsultan Senior (Senior Consultant)',
      category: 'seniors',
      degree: 'Akuntansi & Perpajakan',
      credentials: ['Brevet C', 'Spesialis Sengketa & Audit', 'Eks Junior to Senior WiN Partners'],
      bio: 'Firman adalah seorang profesional perpajakan yang berdedikasi dan detail-oriented dengan lebih dari enam tahun pengalaman praktis yang terbukti dalam sengketa pajak seperti: pendampingan audit pajak, keberatan pajak, banding pajak, dan peninjauan kembali. Ia juga memiliki pengalaman di bidang peninjauan pajak dan penetapan harga transfer (transfer pricing).\n\nMemulai kariernya di WiN Partners pada Juni 2019, ia melayani portofolio klien yang beragam dengan komitmen kuat dalam memberikan solusi pajak yang akurat, termasuk PMA kelapa sawit. Firman memegang sertifikasi Brevet Pajak tingkat C.',
      img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 11,
      name: 'Muhammad Basri Sangadji, SST.Pa',
      role: 'Konsultan Senior (Senior Consultant)',
      category: 'seniors',
      degree: 'Sekolah Tinggi Perpajakan Indonesia (SST.Pa)',
      credentials: ['Eks PT Indo Straits Tbk', 'Eks PT Fajar Baizuri & Brothers', '8+ Tahun Pengalaman'],
      bio: 'Lulus dari Sekolah Tinggi Perpajakan Indonesia (STPI) di Jakarta, Basri memiliki lebih dari 8 tahun pengalaman di bidang perpajakan.\n\nBasri mengejar karier profesionalnya sebagai Senior Finance Accounting and Tax di PT Indo Straits Tbk, Tax Supervisor di PT Fajar Baizuri & Brothers, serta mendampingi berbagai wajib pajak korporasi dan perorangan. Keahlian utamanya meliputi Pelaporan Keuangan, Kepatuhan Pajak, Peninjauan Pajak, Konsultasi Pajak, Perencanaan Pajak, Audit Pajak, Banding Pajak, dan Peninjauan Kembali di Pengadilan Pajak.',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 12,
      name: 'Dhimas Andrean Sukoco, S.Ak., BKP',
      role: 'Konsultan Senior (Senior Consultant)',
      category: 'seniors',
      degree: 'Universitas Diponegoro (S.Ak.)',
      credentials: ['BKP (Konsultan Pajak)', 'Brevet A, B, C', 'Eks Toyota Astra Financial', 'Eks Adi Sarana Armada'],
      bio: 'Lulus dari Universitas Diponegoro dengan gelar Sarjana Akuntansi. Dhimas adalah Konsultan Pajak Bersertifikasi (BKP) dengan keahlian di bidang akuntansi dan perpajakan, didukung oleh sertifikasi Brevet Pajak A, B, dan C.\n\nIa berpengalaman sebagai Analis Akuntansi & Pajak di PT Autopedia Sukses Lestari Tbk., PT Toyota Astra Financial Services, dan PT Adi Sarana Armada Tbk. Dhimas mahir mengelola sistem akuntansi enterprise seperti SAP, Microsoft Dynamics AX, dan Oracle Netsuite untuk memastikan kepatuhan regulasi klien.',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 13,
      name: 'Amila Hasya Sabrina, S.M.',
      role: 'Konsultan Junior (Junior Consultant)',
      category: 'juniors',
      degree: 'Universitas Pembangunan Nasional "Veteran" Jakarta (S.M.)',
      credentials: ['Brevet A & B', 'Aplikasi e-SPT / e-Faktur / DJP Online', 'Sistem Coretax Indonesia'],
      bio: 'Lulus dari UPN "Veteran" Jakarta dengan gelar Sarjana Manajemen. Ia memulai kariernya di bidang konsultasi pajak pada Januari 2024. Amila mahir dalam mengelola tugas administratif rutin, yang meliputi pengorganisasian dokumen pajak klien, pemeliharaan catatan data, dan membantu dalam proses penyusunan serta penyampaian laporan pajak.\n\nIa sangat terbiasa menggunakan aplikasi perpajakan utama Indonesia seperti e-SPT, e-Faktur, DJP Online, dan sistem baru Coretax untuk memberikan dukungan kepatuhan terbaik kepada klien.',
      img: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 14,
      name: 'Putri Salsa Nabila, S.H.',
      role: 'Konsultan Junior (Junior Consultant)',
      category: 'juniors',
      degree: 'Universitas Serang Raya (S.H.)',
      credentials: ['Legal Drafting', 'Kepatuhan Regulasi', 'Eks Magang Instansi Pemerintah'],
      bio: 'Lulusan Hukum dari Universitas Serang Raya yang antusias untuk membangun karier di bidang hukum korporasi dan kepatuhan regulasi.\n\nMemiliki pengalaman magang di lembaga pemerintah dengan keterampilan kuat dalam menyusun, memeriksa, dan mengelola dokumen hukum perusahaan. Dikenal sebagai pribadi yang teliti, cepat belajar, serta termotivasi untuk mendukung kelancaran operasional legal bisnis klien.',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 15,
      name: 'Tiara Putrian Setiawan, S.H.',
      role: 'Konsultan Junior (Junior Consultant)',
      category: 'juniors',
      degree: 'Universitas Bina Nusantara (S.H. Hukum Bisnis)',
      credentials: ['Mahasiswa Berprestasi BINUS 2024', 'WIPO Academy Certified', 'Eks Junior Legal ESDM'],
      bio: 'Tiara adalah lulusan hukum dari Universitas Bina Nusantara, jurusan Hukum Bisnis. Ia memiliki pengalaman profesional di bidang hukum komersial, regulasi, dan kekayaan intelektual.\n\nIa pernah bekerja bersama dengan Kementerian Energi dan Sumber Daya Mineral, AGRA Advocate & Legal Counsel, dan saat ini menjabat sebagai Junior Legal Officer di PT Raka Pradipta Mahawira (RPM Consult). Tersertifikasi oleh WIPO Academy & diakui sebagai Mahasiswa Hukum Bisnis Paling Berprestasi di Universitas BINUS pada tahun 2024.',
      img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 16,
      name: 'Melva Juliana Nainggolan',
      role: 'Administrasi (Administration)',
      category: 'support',
      degree: 'Universitas Mercu Buana (S.I.Kom.)',
      credentials: ['15+ Tahun Pengalaman', 'Spesialis General Affairs', 'Manajemen Operasional'],
      bio: 'Melva adalah profesional General Affairs (GA) yang sangat berdedikasi dan detail-oriented dengan lebih dari 15 tahun pengalaman komprehensif dalam mendukung operasional perusahaan multinasional.\n\nIa memiliki rekam jejak terbukti dalam menjaga integritas kerja yang tinggi, fokus luar biasa, dan pengelolaan aktivitas operasional yang kompleks. Merupakan lulusan Ilmu Komunikasi dari Universitas Mercu Buana, Melva memiliki keterampilan organisasi yang kuat dan komitmen untuk memastikan seluruh operasional kantor RPM Consult berjalan lancar dan efisien.',
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 17,
      name: 'Wahyuri',
      role: 'Dukungan Teknis (Technical Support)',
      category: 'support',
      degree: 'Teknologi Informasi & Sistem Operasional',
      credentials: ['Pemeliharaan Infrastruktur IT', 'Troubleshooting Sistem', 'Optimasi Alur Kerja'],
      bio: 'Sebagai profesional Technical Support, Wahyuri menyediakan bantuan teknis yang luas di berbagai bidang untuk memastikan operasional kantor dan klien berjalan lancar, efisien, dan andal.\n\nPekerjaannya melampaui sekadar memecahkan masalah perangkat keras atau perangkat lunak — ini tentang memahami sistem, proses, dan orang-orang di baliknya. Wahyuri memiliki pengalaman luas dalam penanganan troubleshooting infrastruktur, pemeliharaan sistem rutin, serta perancangan lingkungan kerja IT yang minim downtime.',
      img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
  ];

  const filteredTeam = activeTab === 'all'
    ? team
    : team.filter(person => person.category === activeTab);

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden" id="leadership">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest">
            Profesional Kami
          </span>
          <h2 className="font-extrabold text-primary text-3xl md:text-4xl lg:text-5xl">
            Our Key Person
          </h2>
          <div className="h-1.5 w-24 bg-secondary rounded-full mx-auto" />
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base pt-2">
            Didukung oleh para ahli tepercaya yang memiliki integritas tinggi serta pengalaman panjang di bidang hukum, perpajakan, akuntansi, dan konsultasi bisnis.
          </p>
        </div>

        {/* Categories Tabs Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 max-w-5xl mx-auto px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105'
                  : 'bg-white text-primary border border-primary/10 hover:bg-primary/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredTeam.map((person) => (
              <motion.div
                key={person.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedPerson(person)}
                className="bg-white rounded-xl overflow-hidden border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group h-full"
              >
                {/* Photo Area */}
                <div className="relative pt-[100%] w-full bg-gray-100 overflow-hidden border-b border-primary/5">
                  <img
                    alt={person.name}
                    src={person.img}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback based on category gender profiles
                      const male = [1, 2, 3, 5, 6, 9, 10, 12, 17];
                      if (male.includes(person.id)) {
                        e.target.src = `https://images.unsplash.com/photo-${person.id % 2 === 0 ? '1500648767791-00dcc994a43e' : '1506794778202-cad84cf45f1d'}?q=80&w=400&auto=format&fit=crop`;
                      } else {
                        e.target.src = `https://images.unsplash.com/photo-${person.id % 2 === 0 ? '1580489944761-15a19d654956' : '1544005313-94ddf0286df2'}?q=80&w=400&auto=format&fit=crop`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-bold bg-primary px-3 py-1 rounded-full shadow">Lihat Biodata</span>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-base md:text-lg text-primary leading-tight group-hover:text-secondary transition-colors duration-300">
                      {person.name.split(',')[0]}
                      {person.name.includes(',') && (
                        <span className="text-xs md:text-sm font-semibold text-gray-500 block sm:inline">
                          , {person.name.substring(person.name.indexOf(',') + 1)}
                        </span>
                      )}
                    </h3>
                    <p className="text-secondary font-bold text-xs uppercase tracking-wider">
                      {person.role.split(' (')[0]}
                    </p>
                  </div>
                  
                  {/* Credentials Preview */}
                  <div className="flex flex-wrap gap-1 mt-4 pt-4 border-t border-gray-100">
                    {person.credentials.slice(0, 2).map((cred, i) => (
                      <span key={i} className="text-[10px] bg-primary/5 text-primary border border-primary/10 px-2 py-0.5 rounded font-medium">
                        {cred}
                      </span>
                    ))}
                    {person.credentials.length > 2 && (
                      <span className="text-[10px] bg-gray-50 text-gray-400 border border-gray-100 px-2 py-0.5 rounded font-medium">
                        +{person.credentials.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Biography Modal Popup */}
        <AnimatePresence>
          {selectedPerson && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPerson(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl border border-primary/10 relative max-h-[90vh] flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPerson(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-primary transition-all duration-200 shadow border border-gray-100"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Side: Avatar/Photo */}
                <div className="w-full md:w-2/5 relative min-h-[260px] md:min-h-full bg-gray-100 shrink-0">
                  <img
                    alt={selectedPerson.name}
                    src={selectedPerson.img}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const male = [1, 2, 3, 5, 6, 9, 10, 12, 17];
                      if (male.includes(selectedPerson.id)) {
                        e.target.src = `https://images.unsplash.com/photo-${selectedPerson.id % 2 === 0 ? '1500648767791-00dcc994a43e' : '1506794778202-cad84cf45f1d'}?q=80&w=400&auto=format&fit=crop`;
                      } else {
                        e.target.src = `https://images.unsplash.com/photo-${selectedPerson.id % 2 === 0 ? '1580489944761-15a19d654956' : '1544005313-94ddf0286df2'}?q=80&w=400&auto=format&fit=crop`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10" />
                </div>

                {/* Right Side: Biodata Text */}
                <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto max-h-[60vh] md:max-h-[85vh] space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] bg-secondary/15 text-secondary px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                        {categories.find(c => c.id === selectedPerson.category)?.name}
                      </span>
                      <h3 className="font-extrabold text-2xl text-primary mt-2 leading-tight">
                        {selectedPerson.name}
                      </h3>
                      <p className="text-secondary font-bold text-sm uppercase tracking-wider mt-1">
                        {selectedPerson.role}
                      </p>
                    </div>

                    <div className="space-y-2 border-t border-b border-gray-100 py-4">
                      {selectedPerson.degree && (
                        <div className="flex items-start gap-2.5 text-xs text-gray-600">
                          <GraduationCap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span><strong>Pendidikan:</strong> {selectedPerson.degree}</span>
                        </div>
                      )}
                      <div className="flex items-start gap-2.5 text-xs text-gray-600">
                        <Briefcase className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>
                          <strong>Sertifikasi & Kredensial:</strong>{' '}
                          {selectedPerson.credentials.join(', ')}
                        </span>
                      </div>
                    </div>

                    <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line font-normal">
                      {selectedPerson.bio}
                    </div>
                  </div>

                  {/* Footer Modal Info */}
                  <div className="flex gap-4 pt-6 border-t border-gray-100 mt-6 w-full justify-start items-center">
                    <span className="text-xs text-gray-400">Hubungi langsung:</span>
                    <a
                      href={`mailto:${selectedPerson.email}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{selectedPerson.email}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
