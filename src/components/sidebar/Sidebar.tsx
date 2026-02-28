import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Sidebar: React.FC = () => {
    return (
        <aside className="lg:col-span-3 h-full">
            <div className="bg-[#161b22] border border-slate-800 rounded-3xl p-8 h-full flex flex-col items-center lg:items-start text-center lg:text-left">

                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 mb-6 p-1">
                    <div className="w-full h-full bg-[#0b0f1a] rounded-xl flex items-center justify-center overflow-hidden">
                        <img src="/wedding-pic.jpg" />
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-white tracking-tight">Austin Luing</h1>
                <p className="text-blue-400 font-mono text-sm mt-1">Senior Software Engineer</p>

                <div className="flex items-center gap-2 text-slate-500 mt-4 text-xs font-mono">
                    <MapPin size={14} />
                    <span>Minnesota, US</span>
                </div>

                <p className="text-sm leading-relaxed text-slate-400 mt-6 border-t border-slate-800/50 pt-6">
                    Architecting robust backend systems and full-stack solutions since 2018.
                    Focused on automation, scalability, and building tools that improve daily workflows.
                </p>

                <div className="flex gap-4 mt-8 w-full justify-center lg:justify-start">
                    <a href="https://github.com/wildfan46" className="p-2 bg-[#0d1117] border border-slate-800 rounded-lg text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/austin-luing-15136614a/" className="p-2 bg-[#0d1117] border border-slate-800 rounded-lg text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:wildfan46@gmail.com" className="p-2 bg-[#0d1117] border border-slate-800 rounded-lg text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all">
                        <Mail size={20} />
                    </a>
                </div>

                <div className="mt-auto pt-8 w-full">
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Available for new roles</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;