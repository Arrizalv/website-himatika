'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
            {/* Background Image */}
            <div className="absolute inset-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/gedungunu.png"
                    alt="Kegiatan Mahasiswa HIMATIKA"
                    className="w-full h-full object-cover"
                />
                {/* Dark Blue Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/85 to-slate-900/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                <div className="max-w-3xl">
                 

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        HIMPUNAN MAHASISWA{' '}
                        <span className="text-yellow-400">INFORMATIKA</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
                        Mewujudkan Mahasiswa Informatika yang Unggul, Kreatif, dan Berintegritas dengan semangat Aswaja.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/about"
                            className="group inline-flex items-center justify-center gap-2 bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg"
                        >
                            Kenalan Yuk
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/team"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
                        >
                            Lihat Struktur
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}
