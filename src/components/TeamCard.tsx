import { User, Instagram, Linkedin } from 'lucide-react';
import { Member } from '@/types';

interface TeamCardProps {
    member: Member;
}

export default function TeamCard({ member }: TeamCardProps) {
    return (
        <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            {/* Photo */}
            <div className="relative w-28 h-28 mx-auto mb-4">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 border-4 border-blue-700 shadow-lg">
                    {member.image_url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={member.image_url}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <User size={40} className="text-blue-400" />
                        </div>
                    )}
                </div>

                {/* Social media overlay - appears on hover */}
                {(member.instagram || member.linkedin) && (
                    <div className="absolute inset-0 rounded-full bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                        {member.instagram && (
                            <a
                                href={`https://instagram.com/${member.instagram}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-700 hover:bg-pink-500 hover:text-white transition-colors"
                                aria-label={`Instagram ${member.name}`}
                            >
                                <Instagram size={16} />
                            </a>
                        )}
                        {member.linkedin && (
                            <a
                                href={`https://linkedin.com/in/${member.linkedin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
                                aria-label={`LinkedIn ${member.name}`}
                            >
                                <Linkedin size={16} />
                            </a>
                        )}
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                    {member.name}
                </h3>
                <p className="text-blue-600 font-medium text-sm">
                    {member.role}
                </p>
            </div>
        </div>
    );
}
