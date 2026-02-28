import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, ListTodo, Activity } from 'lucide-react';

const TaskWidget: React.FC = () => {
    const [stats, setStats] = useState({ completed: 0, open: 0 });
    const [isLoading, setIsLoading] = useState(true);

    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const API_URL = "https://api.austinluing.com";

    const refreshStats = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setStats({ completed: data.completed, open: data.open });
        } catch (err) {
            console.error("Refresh failed:", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        refreshStats();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email }),
            });

            if (response.ok) {
                setIsSuccess(true);
                setTimeout(() => refreshStats(), 500);

                setEmail('');
                setTimeout(() => setIsSuccess(false), 3000);
            }
        } catch (err) {
            console.error("Post failed:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-[#161b22] border border-slate-800 rounded-3xl p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">
                    Live System Status
                </h3>
                <Activity size={16} className={`text-blue-400 ${isLoading ? 'animate-spin' : 'animate-pulse'}`} />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#0d1117] border border-slate-800 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-emerald-500 mb-1">
                        <CheckCircle2 size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-tight">Completed</span>
                    </div>
                    <div className="text-2xl font-bold text-white font-mono">
                        {isLoading ? "--" : stats.completed}
                    </div>
                </div>
                <div className="bg-[#0d1117] border border-slate-800 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-amber-500 mb-1">
                        <ListTodo size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-tight">Remaining</span>
                    </div>
                    <div className="text-2xl font-bold text-white font-mono">
                        {isLoading ? "--" : stats.open}
                    </div>
                </div>
            </div>

            <div className="mt-auto">
                <p className="text-[11px] text-slate-500 mb-3 italic">
                    Inject a follow-up task into my Todoist via AWS Lambda:
                </p>
                <form onSubmit={handleSubmit} className="relative">
                    <input
                        type="email"
                        required
                        disabled={isSubmitting || isSuccess}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full bg-[#0d1117] border border-slate-800 rounded-xl py-3 px-4 pr-12 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting || isSuccess}
                        className="absolute right-2 top-1.5 p-1.5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white rounded-lg transition-all"
                    >
                        {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <Send size={18} />
                        )}
                    </button>
                </form>

                {isSuccess && (
                    <p className="text-[10px] text-emerald-500 mt-2 font-mono text-center">
                        ✔ Task successfully queued in Todoist
                    </p>
                )}
            </div>
        </section>
    );
};

export default TaskWidget;