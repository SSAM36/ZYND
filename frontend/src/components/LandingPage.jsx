import React, { useState } from 'react';
import { Shield, Activity, Globe, Zap, Users, BarChart3, AlertTriangle, CheckCircle, Radio, ArrowRight, Server, Database, Layers } from 'lucide-react';

const LandingPage = ({ onSystemInitialize }) => {
    return (
        <div className="w-full text-white font-sans selection:bg-cyan-500/30">
            {/* Hero Spacer - Strictly Left Aligned */}
            <div className="min-h-screen w-full flex pointer-events-none relative z-10">
                {/* Left Content Zone - 55% Width with Gradient backing */}
                <div className="w-full md:w-[60%] h-full flex flex-col justify-center px-6 md:px-24 bg-gradient-to-r from-black via-black/95 to-transparent pointer-events-auto py-20 mt-10 md:mt-0">

                    <div className="inline-flex items-center gap-3 px-4 py-1.5 w-fit border border-cyan-500/20 bg-cyan-950/10 rounded-full text-cyan-400 text-xs font-mono mb-8 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        SYSTEM ONLINE // ZYND.AI
                    </div>

                    <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tight mb-6 text-white leading-[0.95] uppercase">
                        Planetary <br />
                        <span className="text-cyan-400">Resilience</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-white font-medium mb-6 tracking-wide">
                        AI-powered global flood prediction and emergency coordination system
                    </h2>

                    <p className="text-base md:text-lg text-gray-400 max-w-xl font-normal mb-10 leading-relaxed border-l-2 border-cyan-500/20 pl-6">
                        Advanced crisis coordination and real-time planetary monitoring for next-generation disaster response. Predict floods early, deploy resources intelligently, and protect lives with verified AI agents.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <button
                            onClick={onSystemInitialize}
                            className="group px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold tracking-widest uppercase text-sm rounded-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] flex items-center justify-center gap-3"
                        >
                            Initialize System
                            <Zap size={18} className="fill-current" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="relative z-20 bg-[#050505] border-t border-white/5 shadow-[0_-50px_100px_rgba(0,0,0,1)]">

                {/* 1. AGENT WORKFLOW (Replacing Floating Labels) */}
                <section className="py-24 px-6 md:px-20 max-w-[1400px] mx-auto border-b border-white/5">
                    <div className="mb-16">
                        <h3 className="text-cyan-500 font-mono text-xs tracking-[0.2em] uppercase mb-4">System Architecture</h3>
                        <h2 className="font-display text-4xl font-bold text-white mb-2">Autonomous Agent Workflow</h2>
                        <p className="text-gray-400 max-w-2xl">Distributed intelligence pipeline for verified decision making.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-900/0 via-cyan-900/50 to-cyan-900/0 z-0"></div>

                        {[
                            {
                                title: "Prediction Agent",
                                subtitle: "Flood forecasting & anomaly detection",
                                icon: Activity,
                                color: "text-cyan-400"
                            },
                            {
                                title: "Verification Agent",
                                subtitle: "Cross-checks data, reduces false alarms",
                                icon: Shield,
                                color: "text-purple-400"
                            },
                            {
                                title: "Coordination Agent",
                                subtitle: "Connects authorities, NGOs, responders",
                                icon: Users,
                                color: "text-indigo-400"
                            },
                            {
                                title: "Resource Agent",
                                subtitle: "Deploys teams, shelters, aid",
                                icon: Layers,
                                color: "text-blue-400"
                            },
                            {
                                title: "Community Agent",
                                subtitle: "Sends trusted, location-based warnings",
                                icon: Radio,
                                color: "text-amber-400"
                            },
                        ].map((agent, i) => (
                            <div key={i} className="relative z-10 group">
                                <div className="h-24 flex items-end mb-6 pl-4 pb-2">
                                    <div className={`p-3 rounded-lg bg-[#0a0a0a] border border-white/10 group-hover:border-cyan-500/50 transition-colors shadow-lg`}>
                                        <agent.icon className={agent.color} size={24} />
                                    </div>
                                </div>
                                <div className="px-4 border-l border-white/10 group-hover:border-white/30 transition-colors h-full">
                                    <h4 className="font-bold text-lg mb-2 text-gray-100">{agent.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">{agent.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2. CORE FEATURE CARDS (6 Layout) */}
                <section className="py-24 px-6 md:px-20 max-w-[1400px] mx-auto">
                    <div className="mb-16 text-center">
                        <h3 className="text-cyan-500 font-mono text-xs tracking-[0.2em] uppercase mb-4">Capabilities</h3>
                        <h2 className="font-display text-4xl font-bold text-white">Core System Modules</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Flood Prediction Engine",
                                desc: "Predicts potential flood events before they occur.",
                                detail: "Continuously processes real-time weather data, rainfall intensity, river levels, and satellite imagery to detect early flood patterns.",
                                icon: BarChart3,
                                color: "border-l-4 border-l-blue-500"
                            },
                            {
                                title: "Risk Verification Layer",
                                desc: "Validates flood predictions to ensure accuracy.",
                                detail: "Cross-checks predictions using historical flood data, terrain maps, and multiple AI agents before confirming risk levels.",
                                icon: Shield,
                                color: "border-l-4 border-l-yellow-500"
                            },
                            {
                                title: "Emergency Coordination Hub",
                                desc: "Synchronizes response efforts across agencies.",
                                detail: "Creates a shared, real-time operational view for emergency services, local authorities, and relief organizations.",
                                icon: Users,
                                color: "border-l-4 border-l-red-500"
                            },
                            {
                                title: "Intelligent Resource Deployment",
                                desc: "Optimizes the allocation of emergency resources.",
                                detail: "AI agents prioritize regions based on population vulnerability and infrastructure risk, then recommend deployment of rescue teams, shelters, and medical aid.",
                                icon: TruckIcon,
                                color: "border-l-4 border-l-emerald-500"
                            },
                            {
                                title: "Community Alert System",
                                desc: "Delivers verified, location-specific alerts to citizens.",
                                detail: "Uses confirmed risk data to send targeted warnings and evacuation guidance through trusted communication channels.",
                                icon: Radio,
                                color: "border-l-4 border-l-orange-500"
                            },
                            {
                                title: "Decision Transparency Module",
                                desc: "Provides visibility into system decisions.",
                                detail: "Logs predictions, alerts, and resource decisions with confidence levels and reasoning summaries for public accountability.",
                                icon: Server,
                                color: "border-l-4 border-l-cyan-500"
                            },
                            {
                                title: "Continuous Learning Engine",
                                desc: "Improves system performance over time.",
                                detail: "Analyzes post-incident outcomes to refine prediction accuracy and response strategies effectively.",
                                icon: Database,
                                color: "border-l-4 border-l-purple-500"
                            },
                        ].map((card, i) => (
                            <div key={i} className={`bg-[#080808] border border-white/5 p-8 hover:bg-[#0a0a0a] transition-all group ${card.color}`}>
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="font-display font-bold text-xl text-gray-100 max-w-[80%]">{card.title}</h3>
                                    <card.icon className="text-gray-600 group-hover:text-white transition-colors" size={20} />
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-xs font-mono text-cyan-500 mb-1 uppercase tracking-wide">Function</div>
                                        <p className="text-sm text-gray-400 leading-relaxed font-normal">{card.desc}</p>
                                    </div>
                                    <div className="pt-4 border-t border-white/5">
                                        <div className="text-xs font-mono text-gray-600 mb-1 uppercase tracking-wide group-hover:text-gray-500 transition-colors">Mechanism</div>
                                        <p className="text-xs text-gray-500 leading-relaxed font-normal">{card.detail}</p>
                                    </div>
                                </div>

                                {/* Trust Signal */}
                                <div className="mt-6 flex items-center gap-2">
                                    <div className="h-1 w-24 bg-gray-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-cyan-500/50 w-[85%]"></div>
                                    </div>
                                    <span className="text-[10px] text-gray-600 font-mono">CONFIDENCE 98%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-white/10 bg-black py-12 px-6 text-center">
                    <div className="flex justify-center items-center gap-2 mb-4 opacity-50">
                        <Shield size={14} />
                        <span className="text-xs font-mono tracking-widest text-gray-400">VERIFIED BY ZYND.AI AGENTS</span>
                    </div>
                    <p className="text-xs text-gray-600">&copy; 2026 Flood Resilience Network. Mission Critical Interface.</p>
                </footer>
            </div>
        </div>
    );
};

// Icon adjustment for generic Truck usage
const TruckIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M10 17h4V5H2v12h3" />
        <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
        <path d="M14 17h1" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
);

export default LandingPage;
