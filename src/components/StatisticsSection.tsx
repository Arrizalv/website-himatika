'use client';

import { useEffect, useState, useRef } from 'react';
import { Users, Layers, Calendar, Award } from 'lucide-react';

interface Stat {
    icon: React.ElementType;
    value: number;
    label: string;
    suffix?: string;
}

const stats: Stat[] = [
    { icon: Users, value: 120, label: 'Mahasiswa Aktif', suffix: '+' },
    { icon: Layers, value: 5, label: 'Divisi' },
    { icon: Calendar, value: 50, label: 'Kegiatan/Tahun', suffix: '+' },
    { icon: Award, value: 2019, label: 'Tahun Berdiri' },
];

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const duration = 2000;
                    const steps = 60;
                    const increment = value / steps;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= value) {
                            setCount(value);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [value, hasAnimated]);

    return (
        <div ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800">
            {count.toLocaleString()}{suffix}
        </div>
    );
}

export default function StatisticsSection() {
    return (
        <section className="py-16 md:py-20 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50 rounded-full blur-2xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 group-hover:bg-blue-200 rounded-2xl flex items-center justify-center transition-colors">
                                <stat.icon className="w-8 h-8 text-blue-700" />
                            </div>
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            <div className="text-gray-600 mt-2">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
