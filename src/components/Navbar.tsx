'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/about', label: 'Tentang Kami' },
    { href: '/team', label: 'Struktur' },
    { href: '/news', label: 'Berita' },
    { href: '/contact', label: 'Kontak' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/logohima.png"
                                alt="HIMATIKA Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="font-bold text-lg md:text-xl text-slate-800">
                                HIMATIKA UNU JOGJA
                            </span>
                            <span className="block text-xs text-gray-600">
                                Himpunan Mahasiswa Informatika
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="ml-2 px-5 py-2.5 bg-gradient-to-r from-blue-800 to-slate-900 text-white font-semibold rounded-lg hover:from-blue-900 hover:to-slate-950 transition-all shadow-lg"
                        >
                            Kenalan Yuk
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'
                        }`}
                >
                    <div className="bg-white rounded-2xl shadow-xl p-4 space-y-1 border border-gray-100">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-blue-50 hover:text-blue-800 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 mt-2 bg-gradient-to-r from-blue-800 to-slate-900 text-white font-semibold rounded-xl text-center"
                        >
                            Kenalan Yuk
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
