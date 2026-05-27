import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, X, Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { translations } from '../utils/translations';
import agusImg from '../assets/leadership/Agus Priyatna, S.E., M.M., CFRM.jpg';
import jasonImg from '../assets/leadership/Jason Lathianza S.H., M.Kn..jpg';

export default function Leadership() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [expanded, setExpanded] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (selectedPerson) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPerson]);

  const categories = [
    { id: 'all', name: t.leadership.tabs.all },
    { id: 'directors', name: t.leadership.tabs.directors },
    { id: 'advisors', name: t.leadership.tabs.advisors },
    { id: 'seniors', name: t.leadership.tabs.seniors },
    { id: 'juniors', name: t.leadership.tabs.juniors },
    { id: 'support', name: t.leadership.tabs.support },
  ];

  const team = [
    {
      id: 1,
      name: 'Agus Priyatna, S.E., M.M., CFRM',
      role: {
        id: 'Direktur Pajak',
        en: 'Tax Director'
      },
      category: 'directors',
      degree: {
        id: 'STAN Jakarta (Diploma Perpajakan), S.E., Magister Manajemen (M.M.)',
        en: 'STAN Jakarta (Taxation Diploma), S.E., Master of Management (M.M.)'
      },
      credentials: {
        id: ['CFRM', 'Mantan DJP (16 Thn)', 'Eks Tax Partner WiN Partners'],
        en: ['CFRM', 'Former DJP (16 Yrs)', 'Ex Tax Partner WiN Partners']
      },
      bio: {
        id: 'Lulus dari Diploma Perpajakan-STAN Jakarta dan meraih gelar Magister Manajemen, Agus memiliki lebih dari 28 tahun pengalaman di bidang perpajakan dan akuntansi. Setelah 16 tahun berkarier di Direktorat Jenderal Pajak (DJP), Agus melanjutkan karier profesionalnya sebagai Manajer Pajak di RSM Indonesia (salah satu kantor akuntan besar di Indonesia), kemudian menjadi Tax Partner di Enforce Tax Advisory, Deputy Director di Center for Indonesia Taxation Analysis (CITA), serta pendiri dan Tax Partner di WiN Partners.\n\nSebagai pendiri dan Direktur Pajak di PT Raka Pradipta Mahawira (RPM Consult), ia berfokus memberikan layanan terbaik di bidang Kepatuhan Pajak, Pemeriksaan Pajak, Konsultasi Pajak, Perencanaan Pajak, Audit Pajak, Keberatan Pajak, Banding Pajak, dan Peninjauan Kembali di Pengadilan Pajak.',
        en: 'Graduated from Taxation Diploma-STAN Jakarta and earned a Master of Management degree, Agus has over 28 years of experience in taxation and accounting. After 16 years of career at the Directorate General of Taxes (DJP), Agus continued his professional career as a Tax Manager at RSM Indonesia, then became a Tax Partner at Enforce Tax Advisory, Deputy Director at CITA, and founder & Tax Partner at WiN Partners.\n\nAs the founder and Tax Director at RPM Consult, he focuses on delivering the best services in Tax Compliance, Tax Audit, Tax Advisory, Tax Planning, Tax Litigation, Tax Objections, Tax Appeals, and Judicial Reviews at the Tax Court.'
      },
      img: agusImg,
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 2,
      name: 'Jason Lathianza, S.H., M.Kn.',
      role: {
        id: 'Direktur Hukum',
        en: 'Legal Director'
      },
      category: 'directors',
      degree: {
        id: 'Universitas Pelita Harapan (S.H., M.Kn.)',
        en: 'Universitas Pelita Harapan (S.H., M.Kn.)'
      },
      credentials: {
        id: ['Investasi Asing (PMA)', 'Strategi Regulasi', 'Corporate Law'],
        en: ['Foreign Investment (PMA)', 'Regulatory Strategy', 'Corporate Law']
      },
      bio: {
        id: 'Direktur Hukum di PT Raka Pradipta Mahawira yang dikenal luas karena ketajaman bisnis dan keahlian hukumnya yang kuat, serta pengalamannya yang luas dalam memberikan konsultasi hukum dan regulasi untuk urusan bisnis nasional maupun internasional.\n\nIa juga berspesialisasi dalam strategi investasi asing (PMA), memastikan perlindungan komprehensif bagi kepentingan klien dan melindungi mereka dari kerugian aset finansial maupun fisik. Dengan latar belakang yang solid dan hubungan jangka panjang yang terjalin baik dengan aparat penegak hukum, otoritas keamanan, dan tokoh masyarakat, ia mampu menganalisis situasi dan potensi risiko secara sangat spesifik dan rinci.',
        en: 'Legal Director at PT Raka Pradipta Mahawira, widely known for his business acumen and strong legal expertise, as well as his extensive experience in providing legal and regulatory consultation for both national and international business affairs.\n\nHe also specializes in foreign investment strategy (PMA), ensuring comprehensive protection for client interests and shielding them from losses of financial or physical assets. With a solid background and well-established long-term relations with law enforcement, security authorities, and community leaders, he is capable of analyzing situations and potential risks in a highly specific and detailed manner.'
      },
      img: jasonImg,
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 3,
      name: 'Indriyanto Widhi Nugroho, S.E., Ak., CA, Asean CPA, MM, BKP',
      role: {
        id: 'Penasihat Pajak Senior',
        en: 'Senior Tax Advisor'
      },
      category: 'advisors',
      degree: {
        id: 'STAN Jakarta, Universitas Indonesia (S.E. Ak.), Prasetiya Mulya (M.M.)',
        en: 'STAN Jakarta, Universitas Indonesia (S.E. Ak.), Prasetiya Mulya Business School (M.M.)'
      },
      credentials: {
        id: ['Asean CPA', 'Aust. CPA', 'BKP', 'Managing Partner Bejana Consulting'],
        en: ['Asean CPA', 'Aust. CPA', 'BKP', 'Managing Partner Bejana Consulting']
      },
      bio: {
        id: 'Lulus dari Diploma Akuntansi-STAN Jakarta, meraih gelar Sarjana Akuntansi dari Universitas Indonesia, dan menyandang gelar Magister Manajemen dalam Manajemen Strategis dari Prasetiya Mulya Business School. Indriyanto memiliki lebih dari 29 tahun pengalaman di bidang perpajakan dan akuntansi.\n\nSetelah 4 tahun berkarier di Kementerian Keuangan, Indriyanto melanjutkan karier profesionalnya di beberapa perusahaan multinasional di bidang akuntansi dan perpajakan (semikonduktor, farmasi, pertambangan, F&B, pupuk). Ia mendirikan Kantor Akuntan Bejana Meniti Artha (Bejana Consulting) pada 2022. Di RPM Consult, ia fokus pada Kepatuhan Pajak, Pemeriksaan Pajak, Perencanaan Pajak, Keberatan/Banding, Peninjauan Kembali, Layanan Akuntansi, dan AUP.',
        en: 'Graduated from Accountancy Diploma-STAN Jakarta, UI (B.S. in Accounting), and Master of Management from Prasetiya Mulya. Indriyanto has over 29 years of experience in taxation and accounting.\n\nAfter 4 years of career at the Ministry of Finance, he continued his professional career at several MNCs (semiconductors, pharmaceuticals, mining, food industry, fertilizers). He established Bejana Consulting accounting firm in 2022. At RPM Consult, he shares his expertise in Tax Compliance, Tax Audit, Tax Advisory, Tax Planning, Objections/Appeals, Judicial Review, Accounting Services, and Agreed-Upon Procedures (AUP).'
      },
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 4,
      name: 'Tri Sulistyawaty, S.H., M.H.',
      role: {
        id: 'Advokat Senior & Penasihat Hukum',
        en: 'Senior Advocate & Legal Advisor'
      },
      category: 'advisors',
      degree: {
        id: 'Universitas Trisakti (Magister Hukum Bisnis)',
        en: 'Trisakti University (Master of Business Law)'
      },
      credentials: {
        id: ['PERADI (Sejak 2007)', 'Eks RSM Indonesia', 'Spesialis Hukum Perusahaan'],
        en: ['PERADI (Since 2007)', 'Ex RSM Indonesia', 'Corporate Law Specialist']
      },
      bio: {
        id: 'Lulus dari Magister Hukum Bisnis Universitas Trisakti, Tri telah memiliki izin advokat dari Perhimpunan Advokat Indonesia (PERADI) sejak tahun 2007. Tri memiliki lebih dari 21 tahun pengalaman di bidang Hukum Perdata, Hukum Privat, dan berspesialisasi dalam Hukum Perusahaan (Corporate Law).\n\nSetelah berkarier di ANR Law Firm, PT Fuji Staff Indonesia (Perusahaan Jepang) di bidang Manajemen dan Konsultasi Bisnis, serta layanan sekretariat perusahaan di RSM Indonesia, ia mendirikan Kantor Hukumnya sendiri pada 2019. Sekarang, Tri membagikan keahliannya di RPM Consult sebagai Penasihat Senior Hukum & Sekretariat Perusahaan, berfokus sebagai Pengacara Perusahaan.',
        en: 'Graduated with a Master of Business Law from Trisakti University, Tri has held an advocate license from PERADI since 2007. Tri has over 21 years of experience in Civil Law, Private Law, and specializes in Corporate Law.\n\nAfter working at ANR Law Firm, PT Fuji Staff Indonesia (Business Consulting), and corporate secretariat services at RSM Indonesia, she founded her own law office in 2019. Now, Tri shares her professional expertise as a Senior Legal & Corporate Secretary Advisor at RPM Consult, focusing as a Corporate Lawyer.'
      },
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 5,
      name: 'Rodo Parasian Hutagalung, S.E., M.M',
      role: {
        id: 'Penasihat Manajemen Pajak',
        en: 'Tax Management Advisor'
      },
      category: 'advisors',
      degree: {
        id: 'STAN Jakarta, Universitas Lampung (S.E.), Universitas Tarumanagara (M.M.)',
        en: 'STAN Jakarta, Universitas Lampung (S.E.), Universitas Tarumanagara (M.M.)'
      },
      credentials: {
        id: ['Mantan DJP (25 Thn)', 'Spesialis Transfer Pricing', 'Eks Manajer Pajak WiN Partners'],
        en: ['Former DJP (25 Yrs)', 'Transfer Pricing Specialist', 'Ex Tax Manager WiN Partners']
      },
      bio: {
        id: 'Lulus dari STAN Jakarta dan meraih gelar Magister Manajemen, Rodo memulai kariernya di KPP Bandar Lampung pada tahun 1997. Ia kemudian menjabat sebagai Objection Reviewer (Penelaah Keberatan) di Kanwil DJP Riau & Kepri (dikenal karena keahlian Transfer Pricing), Account Representative (AR) di KPP Pratama Cengkareng, Cikupa, dan Cilegon.\n\nDengan 25 tahun pengalaman di DJP, ia bergabung menjadi Manajer Pajak di WiN Partners setelah pensiun. Pada tahun 2025, Rodo bergabung dengan RPM Consult sebagai Penasihat Manajemen Pajak, berfokus pada Kepatuhan Pajak, Peninjauan Pajak, Konsultasi Pajak, Perencanaan Pajak, Pemeriksaan Pajak, Keberatan Pajak, Banding Pajak, dan Peninjauan Kembali di Pengadilan Pajak.',
        en: 'Graduated from STAN Jakarta and earned a Master of Management, Rodo began his career at KPP Bandar Lampung in 1997. In 2006, he served as an Objection Reviewer at Kanwil DJP Riau & Kepri (known for Transfer Pricing), Account Representative (AR) at KPP Pratama Cengkareng, Cikupa, and Cilegon.\n\nWith 25 years of experience at DJP, he joined WiN Partners as Tax Manager after retiring. In 2025, Rodo shared his professional expertise as a Tax Management Advisor at RPM Consult, focusing on Tax Compliance, Tax Review, Tax Advisory, Tax Planning, Tax Audits, Objections, Appeals, and Judicial Reviews.'
      },
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 6,
      name: 'Steven Andrian Candy, S.E, BKP',
      role: {
        id: 'Manajer Pajak',
        en: 'Tax Manager'
      },
      category: 'advisors',
      degree: {
        id: 'Universitas Tarumanagara (S.E.)',
        en: 'Tarumanagara University (S.E.)'
      },
      credentials: {
        id: ['BKP (Konsultan Pajak)', 'Pendiri Mitra Consulting', 'Eks Supervisor WiN Partners'],
        en: ['BKP (Tax Consultant)', 'Founder Mitra Consulting', 'Ex Supervisor WiN Partners']
      },
      bio: {
        id: 'Lulusan Manajemen dari Universitas Tarumanagara, Steven adalah profesional perpajakan berpengalaman dengan lebih dari enam tahun pengalaman terbukti dalam memberikan solusi perpajakan berkualitas tinggi.\n\nMemulai karier di WiN Partners hingga berkembang menjadi Supervisor Consultant, ia melayani perusahaan penanaman modal asing, UKM, hingga wajib pajak orang pribadi. Pada Februari 2023, ia mendirikan Mitra Consulting. Kini ia juga membagikan keahliannya di RPM Consult, mencakup Kepatuhan Pajak, Peninjauan Pajak, Konsultasi Pajak, Perencanaan Pajak, Audit Pajak, Keberatan Pajak, Banding Pajak hingga Peninjauan Kembali di Pengadilan Pajak.',
        en: 'A Management graduate from Tarumanagara University, Steven is an experienced tax professional with over six years of proven experience in delivering high-quality taxation solutions.\n\nBeginning his career at WiN Partners and progressing to Supervisor Consultant, he served foreign investment companies, SMEs, and individual taxpayers. In February 2023, Steven founded Mitra Consulting. In 2024, he shared his expertise at RPM Consult, spanning Tax Compliance, Tax Review, Tax Advisory, Tax Planning, Tax Audits, Objections, Appeals, and Judicial Reviews.'
      },
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 7,
      name: 'Stela Halim, S.Ak.',
      role: {
        id: 'Konsultan Senior',
        en: 'Senior Consultant'
      },
      category: 'seniors',
      degree: {
        id: 'Universitas Bina Nusantara (S.Ak.)',
        en: 'Bina Nusantara University (S.Ak.)'
      },
      credentials: {
        id: ['Brevet A, B, C', 'Eks Senior Tax WiN Partners', 'Eks Supervisor FAT Titan Group'],
        en: ['Brevet A, B, C', 'Ex Senior Tax WiN Partners', 'Ex FAT Supervisor Titan Group']
      },
      bio: {
        id: 'Lulusan Universitas Bina Nusantara jurusan Akuntansi, Stela merupakan profesional berpengalaman dengan lebih dari tujuh tahun pengalaman di bidang keuangan, pembukuan, dan perpajakan di berbagai industri. Ia memegang sertifikasi Brevet Pajak A, B, dan C.\n\nIa memulai kariernya di bidang keuangan dan akuntansi sebelum berkembang sebagai Senior Tax Consultant di WiN Partners. Ia kemudian memperluas keahliannya sebagai Supervisor FAT di Titan Group, memimpin pelaporan keuangan konsolidasian, penganggaran, dan kepatuhan regulasi. Ia telah menangani berbagai macam klien dari konstruksi, manufaktur, pertambangan, migas, ritel, F&B, dll.',
        en: 'Graduated from Bina Nusantara University majoring in Accounting, Stela is a seasoned professional with over seven years of experience in finance, bookkeeping, and taxation across various industries. She holds Tax Brevet A, B, and C certifications.\n\nShe began her career in finance and accounting roles before advancing as a Senior Tax Consultant at WiN Partners. She later broadened her expertise as a FAT Supervisor at Titan Group, leading consolidated financial reporting, budgeting, and regulatory compliance. She has handled clients from construction, manufacturing, mining, oil & gas, retail, F&B, etc.'
      },
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 8,
      name: 'Elieta Vranciska, S.Ak.',
      role: {
        id: 'Konsultan Senior',
        en: 'Senior Consultant'
      },
      category: 'seniors',
      degree: {
        id: 'Universitas Buddhi Dharma (S.Ak.)',
        en: 'Buddhi Dharma University (S.Ak.)'
      },
      credentials: {
        id: ['Brevet C', 'Spesialis Sawit & IT', 'Eks Senior Tax WiN Partners'],
        en: ['Brevet C', 'Palm Oil & IT Specialist', 'Ex Senior Tax WiN Partners']
      },
      bio: {
        id: 'Lulus dari Universitas Buddhi Dharma dengan gelar Sarjana Akuntansi. Elieta memiliki lebih dari enam tahun pengalaman dan telah membangun keahlian yang luas dalam berbagai aspek perpajakan, termasuk kepatuhan pajak, peninjauan pajak, konsultasi pajak, penetapan harga transfer (transfer pricing), pendampingan audit pajak, keberatan pajak, banding pajak, dan peninjauan kembali di pengadilan pajak. Elieta memegang sertifikasi Brevet Pajak tingkat C.\n\nIa memulai kariernya di WiN Partners pada November 2019 dan berkembang menjadi Senior Tax Consultant, melayani berbagai portofolio klien, khususnya di industri perkebunan kelapa sawit dan teknologi informasi.',
        en: 'Graduated from University of Buddhi Dharma with a bachelor degree in Accounting, Elieta has over six years of experience. She has built extensive expertise in taxation, including compliance, review, advisory, transfer pricing, audit assistance, objections, appeals, and judicial reviews. Elieta holds a C-level Tax Brevet certification.\n\nShe began her career at WiN Partners in November 2019 and progressed from Junior to Senior Tax Consultant, serving a diverse portfolio of clients, especially in the palm oil plantation and IT sectors.'
      },
      img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 9,
      name: 'Husnul Fadhil, SST.Pa, BKP',
      role: {
        id: 'Konsultan Senior',
        en: 'Senior Consultant'
      },
      category: 'seniors',
      degree: {
        id: 'Sekolah Tinggi Perpajakan Indonesia (SST.Pa)',
        en: 'Indonesian Taxation College (SST.Pa)'
      },
      credentials: {
        id: ['BKP (Konsultan Pajak)', 'Eks Triputra Group', 'Eks Saratoga Group', 'Eks Djarum & Wings Group'],
        en: ['BKP (Tax Consultant)', 'Ex Triputra Group', 'Ex Saratoga Group', 'Ex Djarum & Wings Group']
      },
      bio: {
        id: 'Lulus dari Sekolah Tinggi Perpajakan Indonesia (STPI) Jakarta dan memiliki Sertifikasi Konsultan Pajak (BKP) dari Kementerian Keuangan, Fadhil memiliki lebih dari 8 tahun pengalaman di bidang perpajakan.\n\nFadhil mengejar karier profesionalnya sebagai Tax Supervisor di beberapa perusahaan terkemuka seperti PT Autopedia Sukses Lestari Tbk (Triputra Group), PT Agro Maju Raya (Saratoga Group), dan PT Pratama Nusantara Sakti (Djarum & Wings Group). Bidang keahliannya meliputi Kepatuhan Pajak, Peninjauan Pajak, Konsultasi Pajak, Perencanaan Pajak, Audit Pajak, Banding Pajak, dan Peninjauan Kembali di Pengadilan Pajak.',
        en: 'Graduated from STPI Jakarta and holds a Tax Consultant Certification (BKP) from the Ministry of Finance. Fadhil has over 8 years of experience in taxation.\n\nHe pursued his professional career as a Tax Supervisor at PT Autopedia Sukses Lestari Tbk (Triputra Group), PT Agro Maju Raya (Saratoga Group), and PT Pratama Nusantara Sakti (Djarum & Wings Group). His expertise spans Tax Compliance, Tax Review, Tax Advisory, Tax Planning, Audits, Appeals, and Judicial Reviews.'
      },
      img: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 10,
      name: 'Firman',
      role: {
        id: 'Konsultan Senior',
        en: 'Senior Consultant'
      },
      category: 'seniors',
      degree: {
        id: 'Akuntansi & Perpajakan',
        en: 'Accounting & Taxation'
      },
      credentials: {
        id: ['Brevet C', 'Spesialis Sengketa & Audit', 'Eks Junior to Senior WiN Partners'],
        en: ['Brevet C', 'Disputes & Audit Specialist', 'Ex Junior to Senior WiN Partners']
      },
      bio: {
        id: 'Firman adalah seorang profesional perpajakan yang berdedikasi dan detail-oriented dengan lebih dari sengketa pajak seperti: pendampingan audit pajak, keberatan pajak, banding pajak, dan peninjauan kembali. Ia juga memiliki pengalaman di bidang peninjauan pajak dan penetapan harga transfer (transfer pricing).\n\nMemulai kariernya di WiN Partners pada Juni 2019, ia melayani portofolio klien yang beragam dengan komitmen kuat dalam memberikan solusi pajak yang akurat, termasuk PMA kelapa sawit. Firman memegang sertifikasi Brevet Pajak tingkat C.',
        en: 'Firman is a dedicated and detail-oriented tax professional with over six years of proven practical experience in tax disputes such as audit assistance, objections, appeals, and judicial reviews. He also has experience in tax review and transfer pricing.\n\nBeginning his career at WiN Partners in June 2019, he progressed to Senior Consultant, serving a diverse portfolio of clients with a strong commitment to delivering accurate tax solutions, including foreign investment companies in the palm oil sector. Firman holds a C-level Tax Brevet certification.'
      },
      img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 11,
      name: 'Muhammad Basri Sangadji, SST.Pa',
      role: {
        id: 'Konsultan Senior',
        en: 'Senior Consultant'
      },
      category: 'seniors',
      degree: {
        id: 'Sekolah Tinggi Perpajakan Indonesia (SST.Pa)',
        en: 'Indonesian Taxation College (SST.Pa)'
      },
      credentials: {
        id: ['Eks PT Indo Straits Tbk', 'Eks PT Fajar Baizuri & Brothers', '8+ Tahun Pengalaman'],
        en: ['Ex PT Indo Straits Tbk', 'Ex PT Fajar Baizuri & Brothers', '8+ Years of Experience']
      },
      bio: {
        id: 'Lulus dari Sekolah Tinggi Perpajakan Indonesia (STPI) di Jakarta, Basri memiliki lebih dari 8 tahun pengalaman di bidang perpajakan.\n\nBasri mengejar karier profesionalnya sebagai Senior Finance Accounting and Tax di PT Indo Straits Tbk, Tax Supervisor di PT Fajar Baizuri & Brothers, serta mendampingi berbagai wajib pajak korporasi dan perorangan. Keahlian utamanya meliputi Pelaporan Keuangan, Kepatuhan Pajak, Peninjauan Pajak, Konsultasi Pajak, Perencanaan Pajak, Audit Pajak, Banding Pajak, dan Peninjauan Kembali di Pengadilan Pajak.',
        en: 'Graduated from STPI Jakarta, Basri has over 8 years of experience in taxation.\n\nHe pursued his professional career as Senior Finance Accounting and Tax at PT Indo Straits Tbk, Tax Supervisor at PT Fajar Baizuri & Brothers, and assisted several corporate and individual taxpayers. His core focus is Financial Reporting, Tax Compliance, Tax Review, Tax Advisory, Planning, Audits, Appeals, and Judicial Reviews.'
      },
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 12,
      name: 'Dhimas Andrean Sukoco, S.Ak., BKP',
      role: {
        id: 'Konsultan Senior',
        en: 'Senior Consultant'
      },
      category: 'seniors',
      degree: {
        id: 'Universitas Diponegoro (S.Ak.)',
        en: 'Diponegoro University (S.Ak.)'
      },
      credentials: {
        id: ['BKP (Konsultan Pajak)', 'Brevet A, B, C', 'Eks Toyota Astra Financial', 'Eks Adi Sarana Armada'],
        en: ['BKP (Tax Consultant)', 'Brevet A, B, C', 'Ex Toyota Astra Financial', 'Ex Adi Sarana Armada']
      },
      bio: {
        id: 'Lulus dari Universitas Diponegoro dengan gelar Sarjana Akuntansi. Dhimas adalah Konsultan Pajak Bersertifikasi (BKP) dengan keahlian di bidang akuntansi dan perpajakan, didukung oleh sertifikasi Brevet Pajak A, B, dan C.\n\nIa berpengalaman sebagai Analis Akuntansi & Pajak di PT Autopedia Sukses Lestari Tbk., PT Toyota Astra Financial Services, dan PT Adi Sarana Armada Tbk. Dhimas mahir mengelola sistem akuntansi enterprise seperti SAP, Microsoft Dynamics AX, dan Oracle Netsuite untuk memastikan kepatuhan regulasi klien.',
        en: 'Graduated from Diponegoro University with a Bachelor\'s degree in Accounting, Dhimas is a Certified Tax Consultant (BKP) with expertise in accounting and taxation, supported by Tax Brevet A, B, and C. He gained experience as an Accounting & Tax Analyst at PT Autopedia Sukses Lestari Tbk, PT Toyota Astra Financial Services, and PT Adi Sarana Armada Tbk.\n\nHe focuses on providing tax advisory, tax dispute assistance, and compliance services. He is skilled in managing accounting processes using systems like SAP, Microsoft Dynamics AX, and Oracle Netsuite.'
      },
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 13,
      name: 'Amila Hasya Sabrina, S.M.',
      role: {
        id: 'Konsultan Junior',
        en: 'Junior Consultant'
      },
      category: 'juniors',
      degree: {
        id: 'Universitas Pembangunan Nasional "Veteran" Jakarta (S.M.)',
        en: 'UPN "Veteran" Jakarta (S.M. in Management)'
      },
      credentials: {
        id: ['Brevet A & B', 'Aplikasi e-SPT / e-Faktur / DJP Online', 'Sistem Coretax Indonesia'],
        en: ['Brevet A & B', 'e-SPT / e-Faktur / DJP Online', 'Coretax Indonesia System']
      },
      bio: {
        id: 'Lulus dari UPN "Veteran" Jakarta dengan gelar Sarjana Manajemen. Ia memulai kariernya di bidang konsultasi pajak pada Januari 2024. Amila mahir dalam mengelola tugas administratif rutin, yang meliputi pengorganisasian dokumen pajak klien, pemeliharaan catatan data, dan membantu dalam proses penyusunan serta penyampaian laporan pajak.\n\nIa sangat terbiasa menggunakan aplikasi perpajakan utama Indonesia seperti e-SPT, e-Faktur, DJP Online, dan sistem baru Coretax untuk memberikan dukungan kepatuhan terbaik kepada klien.',
        en: 'Graduated from UPN "Veteran" Jakarta with a Bachelor\'s degree in Management. She started her career in tax consulting in January 2024. Amila is proficient in managing routine administrative tasks, organizing client tax documents, maintaining data records, and assisting in tax returns filing.\n\nShe is familiar with using key Indonesian tax applications like e-SPT, e-Faktur, DJP Online, and Coretax, allowing her to provide competent administrative support for compliance procedures.'
      },
      img: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 14,
      name: 'Putri Salsa Nabila, S.H.',
      role: {
        id: 'Konsultan Junior',
        en: 'Junior Consultant'
      },
      category: 'juniors',
      degree: {
        id: 'Universitas Serang Raya (S.H.)',
        en: 'Serang Raya University (S.H.)'
      },
      credentials: {
        id: ['Legal Drafting', 'Kepatuhan Regulasi', 'Eks Magang Instansi Pemerintah'],
        en: ['Legal Drafting', 'Regulatory Compliance', 'Ex Government Intern']
      },
      bio: {
        id: 'Lulusan Hukum dari Universitas Serang Raya yang antusias untuk membangun karier di bidang hukum korporasi dan kepatuhan regulasi.\n\nMemiliki pengalaman magang di lembaga pemerintah dengan keterampilan kuat dalam menyusun, memeriksa, dan mengelola dokumen hukum perusahaan. Dikenal sebagai pribadi yang teliti, cepat belajar, serta termotivasi untuk mendukung kelancaran operasional legal bisnis klien.',
        en: 'A Law graduate from Universitas Serang Raya, enthusiastic about starting a career in the legal and compliance field. She has internship experience in a government institution with skills in drafting and managing legal documents.\n\nKnown as a detail-oriented, fast learner, and highly motivated individual to grow in a dynamic professional environment, helping minimize legal risk, improve efficiency, and build long-term trust.'
      },
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 15,
      name: 'Tiara Putrian Setiawan, S.H.',
      role: {
        id: 'Konsultan Junior',
        en: 'Junior Consultant'
      },
      category: 'juniors',
      degree: {
        id: 'Universitas Bina Nusantara (S.H. Hukum Bisnis)',
        en: 'Bina Nusantara University (S.H. Business Law)'
      },
      credentials: {
        id: ['Mahasiswa Berprestasi BINUS 2024', 'WIPO Academy Certified', 'Eks Junior Legal ESDM'],
        en: ['BINUS Outstanding Student 2024', 'WIPO Academy Certified', 'Ex ESDM Ministry Junior Legal']
      },
      bio: {
        id: 'Tiara adalah lulusan hukum dari Universitas Bina Nusantara, jurusan Hukum Bisnis. Ia memiliki pengalaman profesional di bidang hukum komersial, regulasi, dan kekayaan intelektual.\n\nIa pernah bekerja bersama dengan Kementerian Energi dan Sumber Daya Mineral, AGRA Advocate & Legal Counsel, dan saat ini menjabat sebagai Junior Legal Officer di PT Raka Pradipta Mahawira (RPM Consult). Tersertifikasi oleh WIPO Academy & diakui sebagai Mahasiswa Hukum Bisnis Paling Berprestasi di Universitas BINUS pada tahun 2024.',
        en: 'Tiara is a law graduate from Bina Nusantara University, majoring in Business Law. She has professional experience in commercial, regulatory, and intellectual property law, having worked with the Ministry of Energy and Mineral Resources, AGRA Advocate & Legal Counsel, and currently serves as Junior Legal Officer at RPM Consult.\n\nCertified by the WIPO Academy and recognized as the Most Outstanding Student of Business Law at BINUS University in 2024.'
      },
      img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 16,
      name: 'Melva Juliana Nainggolan',
      role: {
        id: 'Administrasi',
        en: 'Administration'
      },
      category: 'support',
      degree: {
        id: 'Universitas Mercu Buana (S.I.Kom.)',
        en: 'Mercu Buana University (S.I.Kom. in Communication)'
      },
      credentials: {
        id: ['15+ Tahun Pengalaman', 'Spesialis General Affairs', 'Manajemen Operasional'],
        en: ['15+ Years Experience', 'General Affairs Specialist', 'Operations Management']
      },
      bio: {
        id: 'Melva adalah profesional General Affairs (GA) yang sangat berdedikasi dan detail-oriented dengan lebih dari 15 tahun pengalaman komprehensif dalam mendukung operasional perusahaan multinasional.\n\nIa memiliki rekam jejak terbukti dalam menjaga integritas kerja yang tinggi, fokus luar biasa, dan pengelolaan aktivitas operasional yang kompleks. Merupakan lulusan Ilmu Komunikasi dari Universitas Mercu Buana, Melva memiliki keterampilan organisasi yang kuat dan komitmen untuk memastikan seluruh operasional kantor RPM Consult berjalan lancar dan efisien.',
        en: 'Melva is a highly dedicated and detail-oriented General Affairs (GA) professional with over 15 years of comprehensive experience supporting multinational companies.\n\nShe has a proven track record of high integrity, exceptional focus, and managing complex operational activities. A graduate in Communication from Universitas Mercu Buana, Melva possesses strong organizational skills and a commitment to ensuring smooth and efficient company operations.'
      },
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      id: 17,
      name: 'Wahyuri',
      role: {
        id: 'Dukungan Teknis',
        en: 'Technical Support'
      },
      category: 'support',
      degree: {
        id: 'Teknologi Informasi & Sistem Operasional',
        en: 'Information Technology & Systems Operations'
      },
      credentials: {
        id: ['Pemeliharaan Infrastruktur IT', 'Troubleshooting Sistem', 'Optimasi Alur Kerja'],
        en: ['IT Infrastructure Maintenance', 'System Troubleshooting', 'Workflow Optimization']
      },
      bio: {
        id: 'Sebagai profesional Technical Support, Wahyuri menyediakan bantuan teknis yang luas di berbagai bidang untuk memastikan operasional kantor dan klien berjalan lancar, efisien, dan andal.\n\nPekerjaannya melampaui sekadar memecahkan masalah perangkat keras atau perangkat lunak — ini tentang memahami sistem, proses, dan orang-orang di baliknya. Wahyuri memiliki pengalaman luas dalam penanganan troubleshooting infrastruktur, pemeliharaan sistem rutin, serta perancangan lingkungan kerja IT yang minim downtime.',
        en: 'As a Technical Support professional, Wahyuri provides broad technical assistance across various fields to ensure smooth, efficient, and reliable operations.\n\nHis work goes beyond just solving technical problems — it\'s about understanding the systems, processes, and people behind them. He supports both clients and internal teams by identifying challenges, offering practical solutions, and ensuring all tools, equipment, and workflows function optimally.'
      },
      img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop',
      email: 'raka_pm@rpm-consult.com',
    },
  ];

  const filteredTeam = activeTab === 'all'
    ? team
    : team.filter(person => person.category === activeTab);

  const displayLimit = 8;
  const displayedTeam = (activeTab === 'all' && !expanded)
    ? filteredTeam.slice(0, displayLimit)
    : filteredTeam;

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden scroll-mt-20" id="leadership">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-extrabold text-primary text-3xl md:text-4xl lg:text-5xl">
            {t.leadership.title}
          </h2>
          <div className="h-1.5 w-24 bg-secondary rounded-full mx-auto" />
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base pt-2">
            {t.leadership.desc}
          </p>
        </div>

        {/* Categories Tabs Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 max-w-5xl mx-auto px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setExpanded(false);
              }}
              className={`px-4 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {displayedTeam.map((person) => (
              <motion.div
                key={person.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.25, layout: { type: 'tween', ease: 'easeOut', duration: 0.25 } }}
                onClick={() => setSelectedPerson(person)}
                className="bg-white rounded-xl overflow-hidden border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group h-full"
              >
                {/* Photo Area */}
                <div className="relative pt-[100%] w-full bg-gray-100 overflow-hidden border-b border-primary/5">
                  <img
                    alt={person.name}
                    src={person.img}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const male = [1, 2, 3, 5, 6, 9, 10, 12, 17];
                      if (male.includes(person.id)) {
                        e.target.src = `https://images.unsplash.com/photo-${person.id % 2 === 0 ? '1500648767791-00dcc994a43e' : '1506794778202-cad84cf45f1d'}?q=80&w=400&auto=format&fit=crop`;
                      } else {
                        e.target.src = `https://images.unsplash.com/photo-${person.id % 2 === 0 ? '1580489944761-15a19d654956' : '1544005313-94ddf0286df2'}?q=80&w=400&auto=format&fit=crop`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-bold bg-primary px-3 py-1 rounded-full shadow">{t.leadership.seeBio}</span>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-base md:text-lg text-primary leading-tight group-hover:text-secondary transition-colors duration-300 min-h-[4.5rem] md:min-h-[5rem]">
                      {person.name.split(',')[0]}
                      {person.name.includes(',') && (
                        <span className="text-xs md:text-sm font-semibold text-gray-500 block sm:inline">
                          , {person.name.substring(person.name.indexOf(',') + 1)}
                        </span>
                      )}
                    </h3>
                    <p className="text-secondary font-bold text-xs uppercase tracking-wider">
                      {person.role[language]}
                    </p>
                  </div>
                  
                  {/* Credentials Preview */}
                  <div className="flex flex-wrap gap-1 mt-4 pt-4 border-t border-gray-100">
                    {person.credentials[language].slice(0, 2).map((cred, i) => (
                      <span key={i} className="text-[10px] bg-primary/5 text-primary border border-primary/10 px-2 py-0.5 rounded font-medium">
                        {cred}
                      </span>
                    ))}
                    {person.credentials[language].length > 2 && (
                      <span className="text-[10px] bg-gray-50 text-gray-400 border border-gray-100 px-2 py-0.5 rounded font-medium">
                        +{person.credentials[language].length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Button */}
        {activeTab === 'all' && filteredTeam.length > displayLimit && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-6 py-3 rounded-lg font-bold text-xs md:text-sm bg-primary hover:bg-primary-container text-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {expanded 
                ? (language === 'id' ? 'Tampilkan Lebih Sedikit' : 'Show Less') 
                : (language === 'id' ? 'Lihat Semua Profesional' : 'View All Professionals')}
            </button>
          </div>
        )}

        {/* Detailed Biography Modal Popup */}
        <AnimatePresence>
          {selectedPerson && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              data-lenis-prevent
              className="fixed inset-0 bg-black/70 backdrop-blur-none md:backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPerson(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl border border-primary/10 relative max-h-[90vh] flex flex-col md:flex-row transform-gpu"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPerson(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-primary transition-all duration-200 shadow border border-gray-100 cursor-pointer"
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
                        {selectedPerson.role[language]}
                      </p>
                    </div>

                    <div className="space-y-2 border-t border-b border-gray-100 py-4">
                      {selectedPerson.degree[language] && (
                        <div className="flex items-start gap-2.5 text-xs text-gray-600">
                          <GraduationCap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span><strong>{t.leadership.modalEducation}:</strong> {selectedPerson.degree[language]}</span>
                        </div>
                      )}
                      <div className="flex items-start gap-2.5 text-xs text-gray-600">
                        <Briefcase className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>
                          <strong>{t.leadership.modalCredentials}:</strong>{' '}
                          {selectedPerson.credentials[language].join(', ')}
                        </span>
                      </div>
                    </div>

                    <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line font-normal">
                      {selectedPerson.bio[language]}
                    </div>
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
