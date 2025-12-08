import { Metadata } from 'next';
import { Target, Users, Lightbulb, Heart, History, Sparkles, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Tentang Kami',
    description: 'Kenali lebih dekat Himpunan Mahasiswa Informatika UNU Yogyakarta.',
};

const values = [
    { icon: Target, title: 'Akademik', description: 'Mengutamakan pengembangan ilmu pengetahuan' },
    { icon: Users, title: 'Kekeluargaan', description: 'Membangun ikatan persaudaraan yang kuat' },
    { icon: Lightbulb, title: 'Inovatif', description: 'Mendorong kreativitas dan solusi teknologi' },
    { icon: Heart, title: 'Religius', description: 'Menjunjung nilai-nilai Aswaja' },
];

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="relative py-32 md:py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-700/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block text-blue-200 text-sm font-semibold mb-4">PROFIL ORGANISASI</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Tentang HIMATIKA</h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
                        Kenali lebih dekat Himpunan Mahasiswa Informatika UNU Yogyakarta
                    </p>
                </div>
            </section>

            {/* History Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <History className="text-blue-700" size={24} />
                                </div>
                                <span className="text-blue-700 font-semibold">Sejarah</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Perjalanan HIMATIKA</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                HIMATIKA UNU Yogyakarta didirikan pada tahun 2019 bersamaan dengan dibukanya
                                Program Studi Informatika di Universitas Nahdlatul Ulama Yogyakarta.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Dengan semangat &quot;Ahlussunnah Wal Jamaah&quot; dan teknologi, HIMATIKA berkomitmen
                                untuk mencetak generasi IT yang cerdas dan berakhlak mulia.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/logohima.png"
                                    alt="Logo HIMATIKA"
                                    className="w-48 h-48 object-contain"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400/30 rounded-2xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Visi Misi */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block text-blue-700 text-sm font-semibold mb-2">VISI & MISI</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tujuan Organisasi</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-800 to-slate-900 rounded-2xl p-8 text-white">
                            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                                <Target size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Visi</h3>
                            <p className="text-blue-100 text-lg leading-relaxed">
                                Menjadi wadah pengembangan potensi mahasiswa informatika yang adaptif
                                terhadap teknologi dan berlandaskan nilai-nilai Aswaja.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <CheckCircle size={32} className="text-blue-700" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                                    <span className="text-gray-600">Menyelenggarakan kegiatan akademik dan non-akademik yang berkualitas</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                                    <span className="text-gray-600">Membangun jejaring kerjasama dengan berbagai pihak</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                                    <span className="text-gray-600">Meningkatkan soft skill dan hard skill anggota</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Philosophy */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <Sparkles className="text-blue-700" size={24} />
                                </div>
                                <span className="text-blue-700 font-semibold">Filosofi Logo</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Makna Logo Kami</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-xl">
                                    <h4 className="font-semibold text-gray-900 mb-1">Warna Biru</h4>
                                    <p className="text-gray-600 text-sm">Melambangkan profesionalisme, kepercayaan, dan teknologi.</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl">
                                    <h4 className="font-semibold text-gray-900 mb-1">Bentuk Modern</h4>
                                    <p className="text-gray-600 text-sm">Mencerminkan bidang informatika dan teknologi.</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl">
                                    <h4 className="font-semibold text-gray-900 mb-1">Elemen Tradisional</h4>
                                    <p className="text-gray-600 text-sm">Menjaga nilai-nilai Aswaja dalam modernitas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center shadow-2xl">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/logohima.png"
                                    alt="Logo HIMATIKA"
                                    className="w-48 h-48 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">Nilai-Nilai</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nilai yang Kami Junjung</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value) => (
                            <div key={value.title} className="group bg-white rounded-2xl p-6 text-center hover:bg-blue-50 transition-colors shadow-sm">
                                <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                                    <value.icon size={28} className="text-blue-700" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
