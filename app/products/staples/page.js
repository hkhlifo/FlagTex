'use client';

import Link from 'next/link';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const StaplesPage = () => {
    return (
        <>
            <section className="min-h-screen w-full bg-[#0f0f0f] text-white font-[Montserrat] px-6 md:px-12 py-24">
                {/* Hero */}
                <Fade direction="up" triggerOnce>
                    <div className="max-w-5xl mx-auto text-center mb-20">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-xl">
                            Staples
                        </h1>
                        <p className="text-[#CCCCCC] text-lg md:text-xl leading-relaxed">
                            Built for strength. Delivered with precision.
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

                {/* Staples Section */}
                <Fade direction="up" delay={100} triggerOnce>
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start mb-24">
                        {/* Image */}
                        <div className="w-full h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-lg shadow-inner flex items-center justify-center">
                            <img
                                src="/parts_img/staples.jpg"
                                alt="Staples"
                                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105 rounded-lg"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-2">
                                Staples
                                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#ffd700] via-[#ffcc33] to-[#ffb347] text-[#23272f] text-xs font-bold shadow-lg border border-[#ffcc33] animate-pulse flex items-center gap-1 ml-2" style={{ letterSpacing: '0.04em' }}>
                                    <svg className="w-4 h-4 mr-1 text-[#b88c00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    ICC Certified
                                </span>
                            </h2>
                            <p className="text-[#CCCCCC] leading-relaxed">
                                FlangTex staples are engineered for heavy-duty joining in roofing, masonry, packaging, and general construction. Built for penetration and reliability across diverse tasks.
                            </p>
                            <ul className="text-sm text-white/70 space-y-1 list-disc pl-5">
                                <li>Sizes: 3/8" × 1/4" to 1" × 2"</li>
                                <li>Applications: Roofing felt, pallet crating, framing</li>
                                <li>Benefits: Durable, jam-free, wide size coverage</li>
                                <li>Use Cases: Site work, packaging, sheathing</li>
                            </ul>
                        </div>
                    </div>
                </Fade>

                {/* CTA */}
                <Fade direction="up" delay={200} triggerOnce>
                    <div className="max-w-3xl mx-auto text-center mt-32 flex flex-col justify-center items-center">
                        <p className="text-[#AAAAAA] text-lg italic mb-6">
                            FlangTex staples—crafted for performance, delivered with precision.
                        </p>
                        <Link href="/contact">
                            <button className="bg-white/10 cursor-pointer border border-white/20 text-white px-6 py-3 rounded-md hover:bg-white/20 hover:border-white/30 transition-all duration-300 tracking-wide backdrop-blur-sm flex items-center justify-center gap-3">
                                <img
                                    src="/icons/monitor.png"
                                    alt="Monitor Icon"
                                    className="w-5 h-5 object-contain"
                                />
                                Request a Quote
                            </button>
                        </Link>
                    </div>
                </Fade>
            </section>
        </>
    );
};

export default StaplesPage;