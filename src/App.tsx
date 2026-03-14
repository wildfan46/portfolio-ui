import React, { useState } from 'react';

import Sidebar from './components/sidebar/Sidebar';
import ProjectsWidget from './components/widgets/ProjectsWidget';
import ExperienceWidget from "./components/widgets/ExperienceWidget.tsx";
import PrinciplesWidget from "./components/widgets/PrinciplesWidget.tsx";
import ProficiencyWidget from "./components/widgets/ProficiencyWidget.tsx";
import TodoistModal from "./components/modals/TodoistModal.tsx";

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        /* Main Background Wrapper */
        <div className="min-h-screen p-4 lg:p-12">

            {/* 12-COLUMN MASTER GRID */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* LEFT COLUMN (Sidebar)
            Occupies 3 columns out of 12 on desktop */}
                <Sidebar onOpenModal={() => setIsModalOpen(true)} />

                {/* RIGHT AREA (Dashboard)
            Occupies 9 columns out of 12 on desktop */}
                <main className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Top Middle Widget */}
                    <section className="h-[300px] bg-[#161b22] border border-slate-800 rounded-3xl">
                        <ProficiencyWidget />
                    </section>

                    {/* Top Right Widget */}
                    <section className="h-[300px] bg-[#161b22] border border-slate-800 rounded-3xl">
                        <PrinciplesWidget />
                    </section>

                    {/* Bottom Middle Widget */}
                    <section className="h-[400px] bg-[#161b22] border border-slate-800 rounded-3xl">
                        <ProjectsWidget />
                    </section>

                    {/* Bottom Right Widget */}
                    <section className="h-[400px] bg-[#161b22] border border-slate-800 rounded-3xl">
                        <ExperienceWidget />
                    </section>

                </main>

                {isModalOpen && <TodoistModal onClose={() => setIsModalOpen(false)} />}
            </div>
        </div>
    );
};

export default App;