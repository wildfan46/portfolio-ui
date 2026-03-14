import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

const TodoistModal = ({ onClose }: { onClose: () => void }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const API_URL = "https://api.austinluing.com";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    description: message
                }),
            });

            if (response.ok) {
                onClose();
            }
        } catch (err) {
            console.error("Post failed:", err);
        } finally {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="bg-[#161b22] border border-slate-800 w-full max-w-md p-6 rounded-3xl shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">Send me a Message</h3>
                    <button onClick={onClose} className="text-slate-500 hover:text-white"><X size={20}/></button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full bg-[#0b0f1a] border border-slate-800 p-3 rounded-xl text-sm outline-none focus:border-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Task description (max 150 chars)"
                        maxLength={150}
                        className="w-full bg-[#0b0f1a] border border-slate-800 p-3 rounded-xl text-sm h-32 resize-none outline-none focus:border-blue-500"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold uppercase flex items-center justify-center gap-2">
                        <Send size={14} /> Sync to Austin's Todoist
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TodoistModal;