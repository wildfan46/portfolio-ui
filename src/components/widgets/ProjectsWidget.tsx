import React from 'react';
import { Code2 } from 'lucide-react';
import { projects } from '../../data/project';

const ProjectsWidget: React.FC = () => {
    return (
        <section className="bg-[#161b22] border border-slate-800 rounded-3xl p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">
                    Featured Projects
                </h3>
                <Code2 size={16} className="text-slate-600" />
            </div>

            <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group p-4 bg-[#0d1117] border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors hover:underline"
                            >
                                {project.title}
                            </a>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                {project.type}
              </span>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[9px] font-mono bg-blue-500/5 text-blue-400/80 border border-blue-500/10 px-2 py-0.5 rounded"
                                >
                  {tag}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsWidget;