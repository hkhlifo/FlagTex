'use client';

import React from 'react';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

const FlangesPage = () => {
    return (
        <>
            <section className="min-h-screen w-full bg-[#0f0f0f] text-white font-[Montserrat] px-6 md:px-12 py-24">
                {/* Hero */}
                <Fade direction="up" triggerOnce>
                    <div className="max-w-5xl mx-auto text-center mb-20">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-xl">
                            Industrial Flanges
                        </h1>
                        <p className="text-[#CCCCCC] text-lg md:text-xl leading-relaxed">
                            Engineered for strength. Certified for performance.
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

                {/* Image + Content */}
                <Fade direction="up" delay={100} triggerOnce>
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                        {/* Image Placeholder */}
                        <div className="w-full h-64 bg-white/10 rounded-lg shadow-inner flex items-center justify-center">
                            <img
                                src="/parts_img/flanges.jpg"
                                alt="Flanges"
                                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Specifications</h2>
                            <ul className="text-sm text-white/70 space-y-1 list-disc pl-5">
                                <li>Range: 1/2″ to 96″, 150# to 2500#, 3000psi to 10,000psi</li>
                                <li>Types: Weldneck, Socketweld, Blind, Threaded, Slip-on</li>
                                <li>Standards: API, ASTM/ASME, ISO</li>
                                <li>Materials: Carbon Steel, Alloys, Stainless Steel, Duplex, Titanium</li>
                                <li>Grades: A105, LF2/LF3/LF6, F316, F304L, F11–F55, Inconel 625/825</li>
                                <li>Specials: Spectacle Blinds, Drip Rings, Long Weldnecks, Orifice Flanges</li>
                            </ul>
                        </div>
                    </div>
                </Fade>

                {/* Why Choose Section */}
                <Fade direction="up" delay={200} triggerOnce>
                    <div className="max-w-5xl mx-auto mt-24 space-y-6">
                        <h2 className="text-3xl font-bold text-center">Why Choose FlangTex for Flanges?</h2>
                        <p className="text-[#CCCCCC] leading-relaxed text-center">
                            At FlangTex Trading LLC, we supply flanges tailored to the unique requirements of our clients. From semi-finished options to specialty assemblies, our products meet the highest standards of quality and certification.
                        </p>
                        <ul className="text-sm text-white/70 space-y-2 list-disc pl-5">
                            <li>ASME flanges from class 150 to 2,500 and custom flanges up to 20,000</li>
                            <li>Specialized flanges: orifice assemblies, swivel anchors, long weld-necks</li>
                            <li>Reliable alternatives to conventional flanged connections</li>
                            <li>Compliance with ANSI B16.5, ASME VIII, and global codes</li>
                            <li>Certified by reputable international organizations</li>
                        </ul>
                    </div>
                </Fade>

                {/* CTA */}
                <Fade direction="up" delay={300} triggerOnce>
                    <div className="max-w-3xl mx-auto text-center mt-32">
                        <p className="text-[#AAAAAA] text-lg italic mb-6">
                            FlangTex is your trusted swivel flange and specialty flange supplier—delivering precision, flexibility, and reliability.
                        </p>
                    </div>
                </Fade>
            </section>
            {/* Floating Back Button */}
            <Link
                href="/products"
                scroll={false}
                className="fixed bottom-8 left-8 z-50 bg-gradient-to-r from-[#ffcc33] to-[#ffb347] text-[#23272f] font-bold px-6 py-3 rounded-full shadow-2xl border-2 border-[#ffcc33] hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(255,204,51,0.20)] transition-all duration-300 text-lg flex items-center gap-2"
                style={{ boxShadow: '0 4px 24px 0 #ffcc3340' }}
            >
                <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Products
            </Link>
        </>
    );
};

export default FlangesPage;