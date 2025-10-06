'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';

const ValvesPage = () => {
    return (
        <section className="min-h-screen w-full bg-[#0f0f0f] text-white font-[Montserrat] px-6 md:px-12 py-24">
            {/* Hero */}
            <Fade direction="up" triggerOnce>
                <div className="max-w-5xl mx-auto text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-xl">
                        Industrial Valves
                    </h1>
                    <p className="text-[#CCCCCC] text-lg md:text-xl leading-relaxed">
                        Precision control for demanding environments—engineered to perform.
                    </p>

                    {/* Bracket-style underline */}
                    <div className="flex justify-center items-center gap-2 mt-6">
                        <span className="w-6 h-[1px] bg-white/20"></span>
                        <span className="text-white/40 text-xl font-bold tracking-widest">{'{'}</span>
                        <span className="w-2 h-[1px] bg-white/40"></span>
                        <span className="text-white text-sm font-bold">VALVES</span>
                        <span className="w-2 h-[1px] bg-white/40"></span>
                        <span className="text-white/40 text-xl font-bold tracking-widest">{'}'}</span>
                        <span className="w-6 h-[1px] bg-white/20"></span>
                    </div>
                </div>
            </Fade>

            {/* Image + Specs */}
            <Fade direction="up" delay={100} triggerOnce>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                    {/* Image Placeholder */}
                    <div className="w-full h-64 bg-white/10 rounded-lg shadow-inner flex items-center justify-center">
                        <img
                            src="/parts_img/valves.jpg"
                            alt="Valves"
                            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Specs */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Specifications</h2>
                        <ul className="text-sm text-white/70 space-y-1 list-disc pl-5">
                            <li>Range: 1/2″ to 48″, #150 to #2500 lbs</li>
                            <li>Connections: Flanged, Threaded, Socketweld, Buttweld</li>
                            <li>Types: Ball (Floating/Trunnion), Gate, Globe, Check, Butterfly</li>
                            <li>Construction: Wafer, Semi-Lug, Single/Double Flanged</li>
                            <li>Standards: API 6A/6D, BS5351, ISO, ASTM</li>
                            <li>Materials: A105N, WCB, F316L, F304L, CF8, Alloy 625/825</li>
                            <li>Specials: Cryogenic, Metal Seated, Actuated, Exotic Alloys</li>
                            <li>Coatings: Epoxy, Cement Lined, Polythene</li>
                            <li>Operation: Lever, Gear, Hydraulic, Electric, Motor</li>
                        </ul>
                    </div>
                </div>
            </Fade>

            {/* Why Choose Section */}
            <Fade direction="up" delay={200} triggerOnce>
                <div className="max-w-5xl mx-auto mt-24 space-y-6">
                    <h2 className="text-3xl font-bold text-center">Why Choose FlangTex for Valves?</h2>
                    <p className="text-[#CCCCCC] leading-relaxed text-center">
                        In the oil & gas, petrochemical, and industrial sectors, reliable valves are critical for safe and efficient operations. FlangTex delivers certified, high-performance valve systems backed by expert support.
                    </p>
                    <ul className="text-sm text-white/70 space-y-2 list-disc pl-5">
                        <li>API 6A and 6D valves for drilling, refining, and transport</li>
                        <li>Strict quality control for durability and safety</li>
                        <li>Expert guidance for selection, sizing, and installation</li>
                        <li>Tailored valve solutions for unique project needs</li>
                        <li>Prompt delivery and responsive customer service</li>
                    </ul>
                </div>
            </Fade>

            {/* CTA */}
            <Fade direction="up" delay={300} triggerOnce>
                <div className="max-w-3xl mx-auto text-center mt-32">
                    <p className="text-[#AAAAAA] text-lg italic mb-6">
                        FlangTex valves—where precision meets performance.
                    </p>
                </div>
            </Fade>
        </section>
    );
};

export default ValvesPage;