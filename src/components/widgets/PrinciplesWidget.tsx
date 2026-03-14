import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { principles } from '../../data/principles';

const PrinciplesWidget: React.FC = () => {
    return (
        <section className="bg-[#161b22] border border-slate-800 rounded-3xl p-5 h-full flex flex-col overflow-hidden">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono flex items-center gap-2">
                    <ShieldCheck size={14} /> Engineering Philosophy
                </h3>
            </div>

            <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                {principles.map((p, i) => (
                    <div key={i} className="flex gap-4 group">
                        <div className="mt-1 p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors">
                            {p.icon}
                        </div>
                        <div>
                            <h4 className="text-[11px] font-bold text-slate-200 uppercase tracking-tight mb-1">{p.title}</h4>
                            <p className="text-[10px] text-slate-500 leading-normal font-medium">
                                {p.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PrinciplesWidget;