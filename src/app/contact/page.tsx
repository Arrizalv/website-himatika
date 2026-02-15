'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
    { icon: MapPin, title: 'Alamat', content: 'Jl. Ringroad Barat, Dowangan, Banyuraden, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55293' },
    { icon: Mail, title: 'Email', content: 'himatika@unu-jogja.ac.id' },
    { icon: Phone, title: 'Telepon', content: '(0274) 123456' },
    { icon: Clock, title: 'Jam Operasional', content: 'Senin - Jumat, 08:00 - 16:00 WIB' },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <>
            {/* Page Header */}
            <section className="relative py-32 md:py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-700/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block text-blue-200 text-sm font-semibold mb-4">HUBUNGI KAMI</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Kontak</h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
                        Punya pertanyaan? Jangan ragu untuk menghubungi kami
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
                            <p className="text-gray-600 mb-8">Kunjungi sekretariat kami atau hubungi melalui email dan telepon.</p>

                            <div className="space-y-6 mb-10">
                                {contactInfo.map((info) => (
                                    <div key={info.title} className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <info.icon className="text-blue-700" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{info.title}</h3>
                                            <p className="text-gray-600">{info.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-2xl overflow-hidden shadow-lg">
                               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4709.651730008888!2d110.3279240757667!3d-7.787780877283962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57a0ec18d8fd%3A0xa0bf1c41dca2b146!2sUniversitas%20Nahdlatul%20Ulama%20Yogyakarta!5e1!3m2!1sen!2sid!4v1768147108781!5m2!1sen!2sid" width="600" height="300" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>

                        <div>
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Kirim Pesan</h2>
                                <p className="text-gray-600 mb-8">Isi form di bawah ini dan kami akan segera merespons</p>

                                {isSubmitted ? (
                                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                                        <CheckCircle className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Pesan Terkirim!</h3>
                                        <p className="text-gray-600">Terima kasih telah menghubungi kami.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                                            <input type="text" id="name" required value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                placeholder="Masukkan nama lengkap" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                            <input type="email" id="email" required value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                placeholder="nama@email.com" />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                                            <textarea id="message" required rows={5} value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                                                placeholder="Tulis pesan Anda..." />
                                        </div>
                                        <button type="submit" disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-blue-800 to-slate-900 text-white font-semibold py-4 rounded-xl hover:from-blue-900 hover:to-slate-950 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                                            {isSubmitting ? (
                                                <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Mengirim...</>
                                            ) : (
                                                <><Send size={20} />Kirim Pesan</>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
