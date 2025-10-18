'use client';

import Link from 'next/link';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const SpecialItemsPage = () => {
    return (
        <>
            <section className="min-h-screen w-full bg-[#0f0f0f] text-white font-[Montserrat] px-6 md:px-12 py-24">
                {/* Hero */}
                <Fade direction="up" triggerOnce>
                    <div className="max-w-5xl mx-auto text-center mb-20">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-xl">
                            Special Items
                        </h1>
                        <p className="text-[#CCCCCC] text-lg md:text-xl leading-relaxed">
                            Precision-engineered solutions for unique industrial needs.
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

                {/* Special Items Section */}
                <Fade direction="up" delay={100} triggerOnce>
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                        {/* Content First */}
                        <div className="space-y-6 order-2 md:order-1">
                            <h2 className="text-3xl font-bold">Special Items</h2>
                            <p className="text-[#CCCCCC] leading-relaxed">
                                FlangTex offers a curated range of specialty products tailored to unique industrial needs. From pressure vessels to corrosion monitoring tools, we deliver precision-engineered solutions on demand.
                            </p>
                            <ul className="text-sm text-white/70 space-y-1 list-disc pl-5">
                                <li>Isolation Joints, Injection Quills, Nozzles</li>
                                <li>Pressure Vessels, Pig Launchers, End Closures</li>
                                <li>Cladding Works, Dish Ends, Welding Consumables</li>
                                <li>Test Rings, Spectacle Blinds, Spades & Spacers</li>
                                <li>Custom sourcing for project-specific requirements</li>
                            </ul>
                        </div>

                        {/* Image */}
                        <div className="w-full h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-lg shadow-inner flex items-center justify-center order-1 md:order-2">
                            <img
                                src="/parts_img/special.jpg"
                                alt="Special Product"
                                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105 rounded-lg"
                            />
                        </div>
                    </div>
                </Fade>

                {/* CTA */}
                <Fade direction="up" delay={200} triggerOnce>
                    <div className="max-w-3xl mx-auto text-center mt-32 flex flex-col justify-center items-center">
                        <p className="text-[#AAAAAA] text-lg italic mb-6">
                            FlangTex specialty items—engineered for precision, built for impact.
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

export default SpecialItemsPage;