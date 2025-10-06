'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Lazy load each product section
const PipePage = dynamic(() => import('./pipes/page'));
const ValvesPage = dynamic(() => import('./valves/page'));
const FlangesPage = dynamic(() => import('./flanges/page'));
const StrainersPlatesPage = dynamic(() => import('./strainers-plates/page'));
const NettingPage = dynamic(() => import('./netting/page'));
const FloatTrimPage = dynamic(() => import('./float-trim/page'));
const NailsPage = dynamic(() => import('./nails/page'));
const StaplesSpecialsPage = dynamic(() => import('./staples-specials/page'));

const sections = [
    { id: 'pipes', label: 'Pipes' },
    { id: 'valves', label: 'Valves' },
    { id: 'flanges', label: 'Flanges' },
    { id: 'strainers-plates', label: 'Strainers & Plates' },
    { id: 'netting', label: 'Netting' },
    { id: 'float-trim', label: 'Float & Trim' },
    { id: 'nails', label: 'Nails' },
    { id: 'staples-specials', label: 'Staples & Specials' },
];

const Divider = () => (
    <div className="flex justify-center py-2">
        <svg width="120" height="24" viewBox="0 0 120 24" fill="none" className="opacity-20">
            <path d="M0 12h40M80 12h40M60 0v24" stroke="white" strokeWidth="1" />
        </svg>
    </div>
);

const ProductPage = () => {
    return (
        <main className="bg-[#0f0f0f] text-white font-[Montserrat] scroll-smooth">
            {/* Hero Section */}
            <section className="pt-24 pb-6 px-6 md:px-12 text-center">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-xl">
                    Our Products
                </h1>
                <p className="text-[#CCCCCC] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    Precision-engineered components for industrial excellence. Explore our full range of piping systems, fittings, reinforcements, and specialty solutions.
                </p>

                {/* Decorative underline */}
                <div className="flex justify-center items-center gap-2 m-2">
                    <span className="w-6 h-[1px] bg-white/20"></span>
                    <span className="text-white/40 text-xl font-bold tracking-widest">{'{'}</span>
                    <span className="w-2 h-[1px] bg-white/40"></span>
                    <span className="text-white text-sm font-bold">FLANGTEX</span>
                    <span className="w-2 h-[1px] bg-white/40"></span>
                    <span className="text-white/40 text-xl font-bold tracking-widest">{'}'}</span>
                    <span className="w-6 h-[1px] bg-white/20"></span>
                </div>
            </section>

            {/* Mobile Sticky Navbar */}
            <nav className="lg:hidden sticky top-0 z-50 bg-[#0f0f0f] border-b border-white/10 px-4 py-3">
                <div className="relative">
                    {/* Scrollable Menu */}
                    <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory text-sm font-medium text-white/70 pr-6">
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="snap-start px-4 py-2 whitespace-nowrap rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
                            >
                                {section.label}
                            </a>
                        ))}
                    </div>

                    {/* Gradient Scroll Hint */}
                    <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#0f0f0f] to-transparent pointer-events-none" />
                </div>
            </nav>

            {/* Desktop Scroll Menu */}
            <aside className="hidden lg:block fixed top-32 right-8 z-50">
                <div className="flex flex-col gap-3 bg-white/5 backdrop-blur-md rounded-2xl px-5 py-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] border border-white/10">
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm font-semibold text-white/80 hover:text-white transition-all duration-300 tracking-wide"
                        >
                            {section.label}
                        </a>
                    ))}
                </div>
            </aside>

            {/* Section Anchors */}
            <section id="pipes"><PipePage /></section>
            <Divider />
            <section id="valves"><ValvesPage /></section>
            <Divider />
            <section id="flanges"><FlangesPage /></section>
            <Divider />
            <section id="strainers-plates"><StrainersPlatesPage /></section>
            <Divider />
            <section id="netting"><NettingPage /></section>
            <Divider />
            <section id="float-trim"><FloatTrimPage /></section>
            <Divider />
            <section id="nails"><NailsPage /></section>
            <Divider />
            <section id="staples-specials"><StaplesSpecialsPage /></section>
        </main>
    );
};

export default ProductPage;