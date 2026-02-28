import React from 'react';
import { Code2, Cpu, Globe, Box } from 'lucide-react';

const ProficiencyWidget: React.FC = () => {
    const categories = [
        {
            label: "Backend & Data",
            icon: <Cpu size={12} />,
            skills: ["Python", "Lambdas", "Go", "Java", "REST APIs", "SQL"]
        },
        {
            label: "Frontend & Design",
            icon: <Globe size={12} />,
            skills: ["React", "TypeScript", "Angular", "Tailwind CSS", "Vite"]
        },
        {
            label: "Cloud & DevOps",
            icon: <Box size={12} />,
            skills: ["AWS", "Lambda", "Docker", "Fargate", "CI/CD", "Agile"]
        }
    ];

    return (
        <section className="bg-[#161b22] border border-slate-800 rounded-3xl p-5 h-full flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">
                    Technical Skills
                </h3>
                <Code2 size={16} className="text-slate-600" />
            </div>

            {/* Cloud / Word Cluster Area */}
            <div className="flex-grow flex flex-col gap-6">
                {categories.map((cat, i) => (
                    <div key={i} className="space-y-3">
                        <div className="flex items-center gap-2 opacity-50">
                            {cat.icon}
                            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{cat.label}</span>
                        </div>

                        <div className="flex flex-wrap gap-x-3 gap-y-2 pl-2">
                            {cat.skills.map((skill, idx) => (
                                <span
                                    key={skill}
                                    className={`
                    font-mono tracking-tight transition-all cursor-default
                    ${idx === 0 ? 'text-sm font-bold text-white' :
                                        idx < 3 ? 'text-xs text-slate-300' : 'text-[10px] text-slate-500'}
                    hover:text-blue-400
                  `}
                                >
                  {skill}{idx !== cat.skills.length - 1 && <span className="ml-3 opacity-20 text-slate-600">•</span>}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProficiencyWidget;