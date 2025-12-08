import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';
import NewsCard from '@/components/NewsCard';
import { Quote, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { mockPosts } from '@/lib/data/mockData';

export default function Home() {
  const latestPosts = mockPosts.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Welcome Section - Sambutan Ketua */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/HUDAMULIYA.JPG"
                  alt="Ketua HIMATIKA"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400/30 rounded-full -z-10" />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Quote className="text-blue-700" size={24} />
                </div>
                <span className="text-blue-700 font-semibold">Sambutan Ketua</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Membangun Generasi IT yang Unggul dan Berakhlak
              </h2>

              <blockquote className="text-gray-600 text-lg leading-relaxed mb-6 border-l-4 border-blue-700 pl-6">
                &quot;Assalamualaikum Warahmatullahi Wabarakatuh. Selamat datang di keluarga besar HIMATIKA UNU Yogyakarta.
                Kami hadir sebagai wadah bagi mahasiswa informatika untuk mengembangkan
                skill teknologi, soft skill, dan jiwa kepemimpinan dengan semangat Aswaja.&quot;
              </blockquote>

              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-bold text-gray-900">Huda Muliya</h4>
                  <p className="text-blue-700 text-sm">Ketua HIMATIKA 2025/2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Berita & Kegiatan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Berita Terbaru
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ikuti perkembangan terbaru kegiatan dan program kerja HIMATIKA UNU Yogyakarta
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <NewsCard key={post.id} post={post} featured={index === 0} />
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-12">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:text-white transition-all"
            >
              Lihat Semua Berita
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Siap Bergabung dengan Kami?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Jadilah bagian dari keluarga besar HIMATIKA UNU Yogyakarta dan kembangkan potensimu
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-all shadow-xl"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-all"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
