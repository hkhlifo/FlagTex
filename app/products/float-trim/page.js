'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';

const FloatTrimPage = () => {
    return (
        <section className="min-h-screen w-full bg-[#0f0f0f] text-white font-[Montserrat] px-6 md:px-12 py-24">
            {/* Hero */}
            <Fade direction="up" triggerOnce>
                <div className="max-w-5xl mx-auto text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-xl">
                        Finishing Tools & Trim
                    </h1>
                    <p className="text-[#CCCCCC] text-lg md:text-xl leading-relaxed">
                        Precision-crafted for smooth finishes and clean terminations.
                    </p>

                    {/* Bracket-style underline */}
                    <div className="flex justify-center items-center gap-2 mt-6">
                        <span className="w-6 h-[1px] bg-white/20"></span>
                        <span className="text-white/40 text-xl font-bold tracking-widest">{'{'}</span>
                        <span className="w-2 h-[1px] bg-white/40"></span>
                        <span className="text-white text-sm font-bold">DETAILING</span>
                        <span className="w-2 h-[1px] bg-white/40"></span>
                        <span className="text-white/40 text-xl font-bold tracking-widest">{'}'}</span>
                        <span className="w-6 h-[1px] bg-white/20"></span>
                    </div>
                </div>
            </Fade>

            {/* Float Section */}
            <Fade direction="up" delay={100} triggerOnce>
                <div id="float" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start mb-24">
                    {/* Image Placeholder */}
                    <div className="w-full h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-lg shadow-inner flex items-center justify-center">
                        <img
                            src="/parts_img/float.jpg"
                            alt="Float"
                            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Finishing Floats</h2>
                        <p className="text-[#CCCCCC] leading-relaxed">
                            Built for smooth, even finishes across plaster, stucco, grout, and concrete. FlangTex floats feature ergonomic pine handles and fine-texture sponge pads for superior surface results.
                        </p>
                        <ul className="text-sm text-white/70 space-y-1 list-disc pl-5">
                            <li>Handle: Pine</li>
                            <li>Plate: Aluminum alloy</li>
                            <li>Pad: EVA foam / rubber</li>
                            <li>Sizes: 305×100×19 mm, 305×125×19 mm, 305×100×12 mm</li>
                            <li>Applications: Masonry, drywall, touch-ups, edge smoothing</li>
                            <li>Benefits: Lightweight, durable, fatigue-reducing grip</li>
                        </ul>
                    </div>
                </div>
            </Fade>

            {/* J-Metal / J-Weep Section */}
            <Fade direction="up" delay={200} triggerOnce>
                <div id="trim" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                    {/* Content First (Reversed Layout) */}
                    <div className="space-y-6 order-2 md:order-1">
                        <h2 className="text-3xl font-bold">J-Metal / J-Weep Trim</h2>
                        <p className="text-[#CCCCCC] leading-relaxed">
                            FlangTex J-Metal trim ensures clean terminations and effective moisture drainage for stucco, EIFS, and thin stone applications. Built from galvanized steel for long-term durability and code compliance.
                        </p>
                        <ul className="text-sm text-white/70 space-y-1 list-disc pl-5">
                            <li>Straight edge stops with integrated weep holes</li>
                            <li>High-back flange acts as rear flashing</li>
                            <li>Sizes: 1-7/8″, 3-1/2″, 1-1/2″, 1-7/16″ flanges</li>
                            <li>Custom face heights available on request</li>
                            <li>Applications: Doors, windows, soffits, transitions</li>
                            <li>Benefits: Precise edges, moisture control, corrosion resistance</li>
                        </ul>
                    </div>

                    {/* Image Placeholder */}
                    <div className="w-full h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-lg shadow-inner flex items-center justify-center order-1 md:order-2">
                        <img
                            src="/parts_img/jmetal.png"
                            alt="J-Metal"
                            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </Fade>

            {/* CTA */}
            <Fade direction="up" delay={300} triggerOnce>
                <div className="max-w-3xl mx-auto text-center mt-32">
                    <p className="text-[#AAAAAA] text-lg italic mb-6">
                        FlangTex finishing tools—crafted for control, built for perfection.
                    </p>
                </div>
            </Fade>
        </section>
    );
};

export default FloatTrimPage;