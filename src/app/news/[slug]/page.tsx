import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { mockPosts } from '@/lib/data/mockData';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const post = mockPosts.find(p => p.slug === slug || p.id.toString() === slug);
    if (!post) return { title: 'Berita Tidak Ditemukan' };
    return { title: post.title, description: post.excerpt || post.content.substring(0, 160) };
}

export default async function NewsDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const post = mockPosts.find(p => p.slug === slug || p.id.toString() === slug);
    if (!post) notFound();

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    return (
        <>
            <section className="relative py-32 md:py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-700/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/news" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={18} />Kembali ke Berita
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-2 text-blue-200 text-sm">
                            <Calendar size={14} /><span>{formatDate(post.published_at)}</span>
                        </div>
                        {post.is_featured && (
                            <span className="bg-yellow-500 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
                        )}
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">{post.title}</h1>
                </div>
            </section>

            <section className="py-16 bg-white">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative h-64 md:h-96 -mt-20 mb-12 rounded-2xl bg-gradient-to-br from-blue-700 to-slate-900 overflow-hidden shadow-2xl">
                        {post.thumbnail_url ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={post.thumbnail_url} alt={post.title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white/30 text-8xl font-bold">H</span>
                            </div>
                        )}
                    </div>
                    <div className="prose prose-lg max-w-none">
                        {post.content.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-gray-700 leading-relaxed mb-6">{paragraph}</p>
                        ))}
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-600 font-medium">Bagikan:</span>
                                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors">
                                    <Share2 size={18} />
                                </button>
                            </div>
                            <Link href="/news" className="text-blue-700 hover:text-blue-800 font-medium">← Kembali ke Berita</Link>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
}
