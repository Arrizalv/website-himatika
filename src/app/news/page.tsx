import { Metadata } from 'next';
import NewsCard from '@/components/NewsCard';
import { mockPosts } from '@/lib/data/mockData';

export const metadata: Metadata = {
    title: 'Berita & Kegiatan',
    description: 'Ikuti perkembangan terbaru dari kegiatan dan program kerja HIMATIKA UNU Yogyakarta.',
};

export default function NewsPage() {
    const posts = mockPosts;

    return (
        <>
            {/* Page Header */}
            <section className="relative py-32 md:py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-700/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block text-blue-200 text-sm font-semibold mb-4">INFO & UPDATE</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Berita & Kegiatan</h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
                        Ikuti perkembangan terbaru dari HIMATIKA UNU Yogyakarta
                    </p>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-20 md:py-28 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {posts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <NewsCard key={post.id} post={post} featured={index === 0} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-gray-400 text-4xl">📰</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Belum Ada Berita</h3>
                            <p className="text-gray-600">Berita belum tersedia saat ini.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
