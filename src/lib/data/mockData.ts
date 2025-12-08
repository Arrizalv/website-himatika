// Mock data for development without Supabase
// Updated for HIMATIKA UNU Jogja (Himpunan Mahasiswa Informatika)

import { Division, Member, Post } from '@/types';

export const mockDivisions: Division[] = [
    { id: 1, name: 'Badan Pengurus Harian (BPH)', slug: 'bph', description: 'Kepengurusan inti himpunan', icon_name: 'Crown', order: 1 },
    { id: 2, name: 'Divisi Kominfo', slug: 'kominfo', description: 'Komunikasi dan Informasi', icon_name: 'Monitor', order: 2 },
    { id: 3, name: 'Divisi PSDM', slug: 'psdm', description: 'Pengembangan Sumber Daya Manusia', icon_name: 'Users', order: 3 },
    { id: 4, name: 'Divisi Humas', slug: 'humas', description: 'Hubungan Masyarakat', icon_name: 'Megaphone', order: 4 },
    { id: 5, name: 'Divisi Kewirausahaan', slug: 'kewirausahaan', description: 'Pengembangan jiwa wirausaha', icon_name: 'TrendingUp', order: 5 },
];

export const mockMembers: Member[] = [
    // BPH
    {
        id: 1,
        name: 'Ahmad Fauzi',
        role: 'Ketua',
        image_url: null,
        division_id: 1,
        instagram: 'ahmadfauzi_',
        linkedin: 'ahmad-fauzi',
        division: mockDivisions[0],
    },
    {
        id: 2,
        name: 'Siti Nurhaliza',
        role: 'Wakil Ketua',
        image_url: null,
        division_id: 1,
        instagram: 'sitinurhaliza',
        linkedin: 'siti-nurhaliza',
        division: mockDivisions[0],
    },
    {
        id: 3,
        name: 'Muhammad Rizki',
        role: 'Sekretaris',
        image_url: null,
        division_id: 1,
        instagram: 'mrizki_',
        division: mockDivisions[0],
    },
    {
        id: 4,
        name: 'Dewi Anggraini',
        role: 'Bendahara',
        image_url: null,
        division_id: 1,
        instagram: 'dewianggraini',
        division: mockDivisions[0],
    },
    // Divisi Kominfo
    {
        id: 5,
        name: 'Budi Santoso',
        role: 'Koordinator',
        image_url: null,
        division_id: 2,
        instagram: 'budisantoso',
        linkedin: 'budi-santoso',
        division: mockDivisions[1],
    },
    {
        id: 6,
        name: 'Rina Wati',
        role: 'Anggota',
        image_url: null,
        division_id: 2,
        instagram: 'rinawati',
        division: mockDivisions[1],
    },
    // Divisi PSDM
    {
        id: 7,
        name: 'Dian Pratama',
        role: 'Koordinator',
        image_url: null,
        division_id: 3,
        instagram: 'dianpratama',
        division: mockDivisions[2],
    },
    {
        id: 8,
        name: 'Agus Hermawan',
        role: 'Anggota',
        image_url: null,
        division_id: 3,
        instagram: 'agushermawan',
        division: mockDivisions[2],
    },
    // Divisi Humas
    {
        id: 9,
        name: 'Putri Handayani',
        role: 'Koordinator',
        image_url: null,
        division_id: 4,
        instagram: 'putrihandayani',
        linkedin: 'putri-handayani',
        division: mockDivisions[3],
    },
    // Divisi Kewirausahaan
    {
        id: 10,
        name: 'Yoga Pratama',
        role: 'Koordinator',
        image_url: null,
        division_id: 5,
        instagram: 'yogapratama',
        division: mockDivisions[4],
    },
];

export const mockPosts: Post[] = [
    {
        id: 1,
        title: 'Workshop Web Development: Membangun Portfolio dengan Next.js',
        slug: 'workshop-web-development-nextjs',
        content: `HIMATIKA UNU Jogja berhasil menggelar Workshop Web Development dengan tema "Membangun Portfolio Profesional dengan Next.js". Acara yang diselenggarakan di Lab Komputer kampus ini dihadiri oleh lebih dari 50 mahasiswa dari berbagai angkatan.

Narasumber utama Budi Santoso selaku Koordinator Divisi Kominfo memandu peserta dari dasar hingga berhasil deploy portfolio mereka ke Vercel.

"Skill web development sangat dibutuhkan di era digital. Portfolio online adalah CV modern yang wajib dimiliki mahasiswa IT," ujar Budi.

Peserta sangat antusias mengikuti workshop yang berlangsung selama 6 jam ini. Banyak yang berhasil menyelesaikan portfolio mereka dan langsung bisa diakses online.`,
        excerpt: 'HIMATIKA menggelar workshop pembuatan portfolio website profesional dengan Next.js.',
        thumbnail_url: null,
        published_at: '2024-12-01T10:00:00Z',
        is_featured: true,
    },
    {
        id: 2,
        title: 'Tim HIMATIKA Juara 2 Hackathon Nasional 2024',
        slug: 'juara-hackathon-nasional-2024',
        content: `Tim HIMATIKA UNU Jogja berhasil meraih juara 2 dalam Hackathon Nasional "Tech for Good" 2024 yang diselenggarakan di Jakarta. Tim yang beranggotakan Muhammad Rizki, Dewi Anggraini, dan Budi Santoso berhasil mengembangkan aplikasi untuk membantu UMKM lokal.

Prestasi gemilang ini diraih setelah bersaing ketat dengan lebih dari 100 tim dari berbagai universitas terkemuka di Indonesia.

"Kami sangat bersyukur. Ide untuk membantu UMKM dengan teknologi ternyata mendapat apresiasi tinggi dari juri," kata Muhammad Rizki selaku ketua tim.

Aplikasi yang mereka kembangkan bernama "UMKMku" yang membantu pelaku UMKM mengelola stok, arus kas, dan pemasaran digital secara terintegrasi.`,
        excerpt: 'Tim HIMATIKA meraih juara 2 dalam Hackathon Nasional "Tech for Good" 2024.',
        thumbnail_url: null,
        published_at: '2024-11-15T14:30:00Z',
        is_featured: true,
    },
    {
        id: 3,
        title: 'Bakti Sosial: Mengajar Coding di Desa Binaan',
        slug: 'bakti-sosial-coding-desa-binaan',
        content: `Dalam rangka Dies Natalis ke-5, HIMATIKA UNU Jogja mengadakan kegiatan bakti sosial berupa pengajaran coding dasar untuk siswa SMP di Desa Sumbermulyo, Bantul.

Kegiatan yang berlangsung selama 2 hari ini melibatkan 20 mahasiswa sebagai tutor dan diikuti oleh 40 siswa. Materi yang diajarkan meliputi dasar-dasar Scratch programming dan pengenalan computational thinking.

"Kami ingin menunjukkan bahwa coding itu menyenangkan dan bisa dipelajari sejak dini," ujar Siti Nurhaliza, koordinator acara.

Para siswa sangat antusias, terutama saat membuat game sederhana dengan Scratch. HIMATIKA juga menyumbangkan 5 unit komputer bekas layak pakai untuk lab sekolah.`,
        excerpt: 'HIMATIKA mengajarkan coding dasar untuk siswa SMP di desa binaan.',
        thumbnail_url: null,
        published_at: '2024-11-01T09:00:00Z',
        is_featured: false,
    },
];

// Statistics for homepage
export const mockStats = {
    members: 120,
    divisions: 5,
    events_per_year: 50,
    founded_year: 2019,
};
