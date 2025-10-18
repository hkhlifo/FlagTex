'use client';

import Link from 'next/link';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const NettingPage = () => {
    return (
        <>
            <section className="min-h-screen w-full bg-[#0f0f0f] text-white font-[Montserrat] px-6 md:px-12 py-24">
                {/* Hero */}
                <Fade direction="up" triggerOnce>
                    <div className="max-w-5xl mx-auto text-center mb-20">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-xl">
                            Netting Solutions
                        </h1>
                        <p className="text-[#CCCCCC] text-lg md:text-xl leading-relaxed">
                            Reinforcement and protection for construction, agriculture, and industrial needs.
                        </p>

                        {/* Decorative underline */}
                        <div className="flex justify-center items-center gap-2 mt-6">
                            <span className="w-6 h-[1px] bg-white/20"></span>
                            <span className="w-4 h-[1px] bg-white/30"></span>
                            <span className="w-2 h-[1px] bg-white/40"></span>
                            <span className="w-2 h-2 rotate-45 bg-white/30"></span>
                            <div className="relative w-3 h-3 rotate-45 bg-white">
                                <span className="absolute inset-0 m-auto w-1 h-1 rounded-full bg-[#0f0f0f]"></span>
                            </div>
                            <span className="w-2 h-2 rotate-45 bg-white/30"></span>
                            <span className="w-2 h-[1px] bg-white/40"></span>
                            <span className="w-4 h-[1px] bg-white/30"></span>
                            <span className="w-6 h-[1px] bg-white/20"></span>
                        </div>
                    </div>
                </Fade>

                {/* Stucco Netting Section */}
                <Fade direction="up" delay={100} triggerOnce>
                    <div id="stucco" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start mb-24 relative">
                        {/* Image Placeholder */}
                        <div className="w-full h-64 bg-white/10 rounded-lg shadow-inner flex items-center justify-center">
                            <img
                                src="/parts_img/stucco.jpg"
                                alt="Stucco Netting"
                                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-2">
                                Stucco Netting
                                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#ffd700] via-[#ffcc33] to-[#ffb347] text-[#23272f] text-xs font-bold shadow-lg border border-[#ffcc33] animate-pulse flex items-center gap-1 ml-2" style={{ letterSpacing: '0.04em' }}>
                                    <svg className="w-4 h-4 mr-1 text-[#b88c00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    ICC Certified
                                </span>
                            </h2>
                            <p className="text-[#CCCCCC] leading-relaxed">
                                FlangTex supplies high-quality stucco mesh for structural reinforcement. Made from hot-dip galvanized iron wire, it enhances adhesion, prevents cracking, and ensures long-term durability.
                            </p>
                            <ul className="text-sm text-white/70 space-y-1 list-disc pl-5">
                                <li>Range: 1" × 36" × 150' to 1.5" × 39" × 150'</li>
                                <li>Types: Furred and Non-Furred</li>
                                <li>Markings: Red every 6 inches (17/20 gauge)</li>
                                <li>Material: Hot-dip galvanized iron wire</li>
                                <li>Applications: Plaster, stucco, masonry, cultured stone</li>
                                <li>Customization: Sizes, branding, packaging</li>
                            </ul>
                        </div>
                    </div>
                </Fade>

                {/* Poultry Netting Section */}
                <Fade direction="up" delay={200} triggerOnce>
                    <div id="poultry" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                        {/* Image Placeholder */}
                        <div className="w-full h-64 bg-white/10 rounded-lg shadow-inner flex items-center justify-center">
                            <img
                                src="/parts_img/poultry.jpg"
                                alt="Poultry Netting"
                                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold flex flex-col items-start gap-2">
                                Poultry Netting (Chicken Wire)
                                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#ffd700] via-[#ffcc33] to-[#ffb347] text-[#23272f] text-xs font-bold shadow-lg border border-[#ffcc33] animate-pulse flex whitespace-nowrap items-center gap-1 ml-2" style={{ letterSpacing: '0.04em' }}>
                                    <svg className="w-4 h-4 mr-1 text-[#b88c00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    ICC Certified
                                </span>
                            </h2>
                            <p className="text-[#CCCCCC] leading-relaxed">
                                FlangTex poultry netting is built for protection, isolation, and support across farming, fencing, and horticulture. Durable galvanized wire ensures long service life and flexible application.
                            </p>
                            <ul className="text-sm text-white/70 space-y-1 list-disc pl-5">
                                <li>Range: 20-gauge, 1″×3′×100′ to 2″×72″×150′</li>
                                <li>Material: Hot-dip galvanized iron wire</li>
                                <li>Applications: Poultry fencing, crop protection, plant support</li>
                                <li>Packaging: Supplied in rolls for easy handling</li>
                                <li>Customization: Sizes available on request</li>
                            </ul>
                        </div>
                    </div>
                </Fade>

                {/* CTA */}
                <Fade direction="up" delay={300} triggerOnce>
                    <div className="max-w-3xl mx-auto text-center mt-32">
                        <p className="text-[#AAAAAA] text-lg italic mb-6">
                            FlangTex netting—reinforcing safety, structure, and sustainability.
                        </p>
                    </div>
                </Fade>
            </section>
        </>
    );
};

export default NettingPage;