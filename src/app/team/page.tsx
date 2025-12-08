'use client';

import { useState, useMemo } from 'react';
import TeamCard from '@/components/TeamCard';
import { mockMembers, mockDivisions } from '@/lib/data/mockData';
import { Division, Member } from '@/types';

function groupMembersByDivision(members: Member[], divisions: Division[]) {
    const groups: { division: Division; members: Member[] }[] = [];
    const sortedDivisions = [...divisions].sort((a, b) => (a.order || 0) - (b.order || 0));

    for (const division of sortedDivisions) {
        const divisionMembers = members.filter(m => m.division_id === division.id);
        if (divisionMembers.length > 0) {
            groups.push({ division, members: divisionMembers });
        }
    }
    return groups;
}

export default function TeamPage() {
    const [activeFilter, setActiveFilter] = useState<string>('all');

    const filteredMembers = useMemo(() => {
        if (activeFilter === 'all') return mockMembers;
        return mockMembers.filter(m => m.division?.slug === activeFilter);
    }, [activeFilter]);

    const memberGroups = useMemo(() => {
        return groupMembersByDivision(filteredMembers, mockDivisions);
    }, [filteredMembers]);

    return (
        <>
            {/* Page Header */}
            <section className="relative py-32 md:py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-700/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block text-blue-200 text-sm font-semibold mb-4">STRUKTUR ORGANISASI</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">TIM KAMI</h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
                        Kenali pengurus HIMATIKA UNU Yogyakarta yang berdedikasi
                    </p>
                </div>
            </section>

            {/* Division Filter */}
            <section className="py-6 bg-white border-b border-gray-100 sticky top-16 md:top-20 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${activeFilter === 'all' ? 'bg-blue-800 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Semua Divisi
                        </button>
                        {mockDivisions.map((division) => (
                            <button
                                key={division.id}
                                onClick={() => setActiveFilter(division.slug)}
                                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${activeFilter === division.slug ? 'bg-blue-800 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {division.name.replace('Divisi ', '').replace('Badan Pengurus Harian (', '').replace(')', '')}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {memberGroups.map((group, groupIndex) => (
                        <div key={group.division.id} className={groupIndex > 0 ? 'mt-16' : ''}>
                            <div className="text-center mb-10">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{group.division.name}</h3>
                                {group.division.description && (
                                    <p className="text-gray-600 max-w-xl mx-auto text-sm">{group.division.description}</p>
                                )}
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {group.members.map((member) => (
                                    <TeamCard key={member.id} member={member} />
                                ))}
                            </div>
                        </div>
                    ))}

                    {memberGroups.length === 0 && (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-gray-400 text-4xl">👥</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak Ada Anggota</h3>
                            <p className="text-gray-600">Tidak ada anggota di divisi yang dipilih.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
