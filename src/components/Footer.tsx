import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Youtube, Linkedin } from 'lucide-react';

const quickLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/about', label: 'Tentang Kami' },
    { href: '/team', label: 'Struktur Organisasi' },
    { href: '/news', label: 'Berita & Kegiatan' },
    { href: '/contact', label: 'Kontak' },
];

const socialLinks = [
    { href: 'https://www.instagram.com/himatikaunujogja', icon: Instagram, label: 'Instagram' },
    { href: 'https://youtube.com/@himatikaunujogja', icon: Youtube, label: 'YouTube' },
    { href: 'https://linkedin.com/company/himatikaunujogja', icon: Linkedin, label: 'LinkedIn' },
];

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/5 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Organization Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm p-1">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/logohima.png"
                                    alt="HIMATIKA Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">HIMATIKA</h3>
                                <p className="text-slate-400 text-sm">UNU Yogyakarta</p>
                            </div>
                        </div>
                        <p className="text-slate-400 mb-6 max-w-md">
                            Himpunan Mahasiswa Informatika Universitas Nahdlatul Ulama Yogyakarta.
                            Mewujudkan Mahasiswa Informatika yang Unggul, Kreatif, dan Berintegritas.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 text-slate-400">
                                <MapPin size={18} className="mt-0.5 text-yellow-400 flex-shrink-0" />
                                <span className="text-sm">Jl. Ringroad Barat, Dowangan, Banyuraden, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55293</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                                <Phone size={18} className="text-yellow-400 flex-shrink-0" />
                                <span className="text-sm">(0274) 123456</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                                <Mail size={18} className="text-yellow-400 flex-shrink-0" />
                                <span className="text-sm">himatika@unu-jogja.ac.id</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Tautan Cepat</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Ikuti Kami</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white hover:bg-cyan-500 hover:text-white transition-all"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                        <p className="text-slate-400 text-sm mt-6">
                            Ikuti media sosial kami untuk informasi terbaru.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-slate-500 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} HIMATIKA UNU Yogyakarta. All rights reserved.
                        </p>
                        <p className="text-slate-500 text-sm">
                            Made with 💙 by Divisi Kominfo HIMATIKA
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
