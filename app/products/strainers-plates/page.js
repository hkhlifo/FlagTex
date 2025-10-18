'use client';

import Link from 'next/link';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const StrainersPlatesPage = () => {
    return (
        <>
            <section className="min-h-screen w-full bg-[#0f0f0f] text-white font-[Montserrat] px-6 md:px-12 py-24">
                {/* Hero */}
                <Fade direction="up" triggerOnce>
                    <div className="max-w-5xl mx-auto text-center mb-20">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-xl">
                            Strainers & Plates
                        </h1>
                        <p className="text-[#CCCCCC] text-lg md:text-xl leading-relaxed">
                            Engineered for filtration. Trusted for structure.
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

                {/* Strainers Section */}
                <Fade direction="up" delay={100} triggerOnce>
                    <div id="strainers" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start mb-24">
                        {/* Image Placeholder */}
                        <div className="w-full h-64 bg-white/10 rounded-lg shadow-inner flex items-center justify-center">
                            <img
                                src="/parts_img/strainers.jpg"
                                alt="Strainers"
                                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Strainers</h2>
                            <p className="text-[#CCCCCC] leading-relaxed">
                                FlangTex offers a wide range of industrial strainers for Oil & Gas, Petrochemical, Offshore, Power, and Manufacturing sectors. Every product undergoes rigorous testing to meet industry standards and ensure operational safety.
                            </p>
                            <ul className="text-sm text-white/70 space-y-1 list-disc pl-5">
                                <li>Stringent quality checks and additional testing</li>
                                <li>Reliable, high-performance filtration solutions</li>
                                <li>Timely delivery and technical support</li>
                                <li>Competitive pricing and dependable service</li>
                            </ul>
                        </div>
                    </div>
                </Fade>

                {/* Plates Section */}
                <Fade direction="up" delay={200} triggerOnce>
                    <div id="plates" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                        {/* Image Placeholder */}
                        <div className="w-full h-64 bg-white/10 rounded-lg shadow-inner flex items-center justify-center">
                            <img
                                src="/parts_img/plates.jpg"
                                alt="Plates"
                                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Plates</h2>
                            <p className="text-[#CCCCCC] leading-relaxed">
                                FlangTex supplies high-quality plates and sheets for oil & gas, construction, chemical, and engineering industries. Our stainless steel grades offer strength, corrosion resistance, and high-temperature performance.
                            </p>
                            <ul className="text-sm text-white/70 space-y-1 list-disc pl-5">
                                <li>SS304 / SS304L - General purpose</li>
                                <li>SS316 / SS316L - Coastal & outdoor environments</li>
                                <li>SS31803 / 2205 - Duplex corrosion resistance</li>
                                <li>SS32750 - Super Duplex with PREN 40-45</li>
                                <li>SS310S - High-temp up to 1050°C</li>
                                <li>SS253MA - Heat-resistant up to 1100°C</li>
                                <li>SS904L - Acid-resistant, low carbon, high alloy</li>
                            </ul>
                        </div>
                    </div>
                </Fade>

                {/* CTA */}
                <Fade direction="up" delay={300} triggerOnce>
                    <div className="max-w-3xl mx-auto text-center mt-32">
                        <p className="text-[#AAAAAA] text-lg italic mb-6">
                            FlangTex strainers and plates—built for performance, trusted for durability.
                        </p>
                    </div>
                </Fade>
            </section>
        </>
    );
};

export default StrainersPlatesPage;