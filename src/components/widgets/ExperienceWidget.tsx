import React from 'react';
import { BriefcaseIcon } from 'lucide-react';
import { experiences } from '../../data/experience';

const ExperienceWidget: React.FC = () => {
    return (
        <div className="bg-[#161b22] border border-slate-800 rounded-3xl p-8 flex flex-col h-full max-h-[800px]">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">
                    Work History
                </h3>
                <BriefcaseIcon size={16} className="text-slate-600" />
            </div>

            <div className="flex-1 overflow-y-auto pr-4 space-y-6 custom-scrollbar">
                {experiences.map((group, i) => (
                    <div key={i} className="mb-10 last:mb-0">
                        <div className="flex items-center justify-between mb-4 px-1">
                            <h4 className="text-white font-extrabold tracking-tight">{group.company}</h4>
                            <p className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">{group.location}</p>
                        </div>

                        <div className="space-y-4">
                            {group.roles.map((role, ri) => (
                                <div key={ri} className="bg-[#1b2330] border border-slate-800/60 rounded-2xl p-6 hover:border-blue-500/30 transition-all group">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{role.title}</h4>
                                        <span className="text-[10px] font-mono bg-[#0b0f1a] text-slate-400 border border-slate-800 px-2 py-1 rounded-md">
                                          {role.date}
                                        </span>
                                    </div>
                                    <p className="text-blue-400 font-semibold text-sm mb-4 uppercase tracking-wide">{role.team}</p>

                                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                                        {role.impact}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {role.tags?.filter(Boolean).map(tag => (
                                            <span key={tag} className="text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded">
                                              {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceWidget;