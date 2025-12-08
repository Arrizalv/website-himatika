import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { Post } from '@/types';

interface NewsCardProps {
    post: Post;
    featured?: boolean;
}

export default function NewsCard({ post, featured = false }: NewsCardProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    if (featured) {
        return (
            <Link
                href={`/news/${post.slug || post.id}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
                {/* Image placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-blue-700 to-slate-900 overflow-hidden">
                    {post.thumbnail_url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={post.thumbnail_url}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white/50 text-6xl font-bold">H</span>
                            </div>
                        </>
                    )}
                    {post.is_featured && (
                        <div className="absolute top-4 left-4">
                            <span className="bg-yellow-500 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full">
                                Featured
                            </span>
                        </div>
                    )}
                </div>

                <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <Calendar size={14} />
                        <span>{formatDate(post.published_at)}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                        {post.title}
                    </h3>

                    <p className="text-gray-600 line-clamp-3 mb-4">
                        {post.excerpt || post.content.substring(0, 150)}...
                    </p>

                    <div className="flex items-center gap-2 text-blue-600 font-medium">
                        <span>Baca selengkapnya</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link
            href={`/news/${post.slug || post.id}`}
            className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
            {/* Image placeholder */}
            <div className="relative h-48 bg-gradient-to-br from-gray-600 to-gray-700 overflow-hidden">
                {post.thumbnail_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={post.thumbnail_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white/30 text-4xl font-bold">H</span>
                        </div>
                    </>
                )}
            </div>

            <div className="p-5">
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
                    <Calendar size={12} />
                    <span>{formatDate(post.published_at)}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {post.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-2">
                    {post.excerpt || post.content.substring(0, 100)}...
                </p>
            </div>
        </Link>
    );
}
