'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';

const NailsPage = () => {
    return (
        <section className="min-h-screen w-full bg-[#0f0f0f] text-white font-[Montserrat] px-6 md:px-12 py-24">
            {/* Hero */}
            <Fade direction="up" triggerOnce>
                <div className="max-w-5xl mx-auto text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-xl">
                        Roofing & Furring Nails
                    </h1>
                    <p className="text-[#CCCCCC] text-lg md:text-xl leading-relaxed">
                        Engineered for grip. Trusted for durability.
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

            {/* Roofing Nails Section */}
            <Fade direction="up" delay={100} triggerOnce>
                <div id="roofing" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start mb-24">
                    {/* Image Placeholder */}
                    <div className="w-full h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-lg shadow-inner flex items-center justify-center">
                        <img
                            src="/parts_img/roofing.jpg"
                            alt="Roofing Nails"
                            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Roofing Nails</h2>
                        <p className="text-[#CCCCCC] leading-relaxed">
                            FlangTex roofing nails are built for high pull-out strength and corrosion resistance. Available in smooth, ring, or screw shank designs, they’re ideal for asphalt shingles and metal roofing panels.
                        </p>
                        <ul className="text-sm text-white/70 space-y-1 list-disc pl-5">
                            <li>Material: Carbon steel / galvanized steel</li>
                            <li>Sizes: 7/8" to 6", 11GA to 6GA</li>
                            <li>Head: 3/8" galvanized</li>
                            <li>Applications: Shingles, felt, metal panels</li>
                            <li>Benefits: Superior grip, broad size range, rust resistance</li>
                        </ul>
                    </div>
                </div>
            </Fade>

            {/* Furring Nails Section */}
            <Fade direction="up" delay={200} triggerOnce>
                <div id="furring" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                    {/* Content First (Reversed Layout) */}
                    <div className="space-y-6 order-2 md:order-1">
                        <h2 className="text-3xl font-bold">Furring Nails</h2>
                        <p className="text-[#CCCCCC] leading-relaxed">
                            Designed for stucco wire attachment, FlangTex furring nails come pre-assembled with a ¼″ wad for proper embedment spacing. Electro-galvanized for corrosion resistance and built for high holding power.
                        </p>
                        <ul className="text-sm text-white/70 space-y-1 list-disc pl-5">
                            <li>Material: Steel, electro-galvanized</li>
                            <li>Sizes: 1-1/2" to 2-1/2", 0.116" shank</li>
                            <li>Features: Diamond point, barbed shank, ¼″ wad</li>
                            <li>Applications: Stucco/lath wire, masonry systems</li>
                            <li>Benefits: Easy driving, strong grip, consistent quality</li>
                        </ul>
                    </div>

                    {/* Image Placeholder */}
                    <div className="w-full h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-lg shadow-inner flex items-center justify-center order-1 md:order-2">
                        <img
                            src="/parts_img/furring.jpg"
                            alt="Furring Nails"
                            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </Fade>

            {/* CTA */}
            <Fade direction="up" delay={300} triggerOnce>
                <div className="max-w-3xl mx-auto text-center mt-32">
                    <p className="text-[#AAAAAA] text-lg italic mb-6">
                        FlangTex nails—engineered for precision, built to last.
                    </p>
                </div>
            </Fade>
        </section>
    );
};

export default NailsPage;