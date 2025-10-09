'use client';

import Link from 'next/link';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const PipePage = () => {
  return (
    <>
      <section className="min-h-screen w-full bg-[#0f0f0f] text-white font-[Montserrat] px-6 md:px-12 py-24">
        {/* Hero */}
        <Fade direction="up" triggerOnce>
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-xl">
              Pipes & Pipe Fittings
            </h1>
            <p className="text-[#CCCCCC] text-lg md:text-xl leading-relaxed">
              Engineered for precision. Trusted across oil & gas, petrochemical, and industrial sectors.
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

        {/* Pipe Fittings Section (Image Left) */}
        <Fade direction="up" delay={100} triggerOnce>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="w-full h-64 bg-white/10 rounded-lg shadow-inner flex items-center justify-center overflow-hidden">
              <img
                src="/parts_img/pipefit.jpg"
                alt="Pipe Fittings"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Pipe Fittings</h2>
              <p className="text-[#CCCCCC] leading-relaxed">
                At FlangTex Trading LLC, we supply high-quality piping materials and services designed to meet the strict standards of the oil & gas and industrial sectors. Our solutions are tailored to meet the unique requirements of each sector, ensuring reliable performance and consistent quality.
              </p>
              <ul className="text-sm text-white/70 space-y-1 list-disc pl-5">
                <li>Range: 1/2″ to 96″, Standard & Special Wall Thickness</li>
                <li>Types: Elbow, Tee, Reducer, Cap, Forged Fittings</li>
                <li>End Connections: Buttweld, Socketweld, Plain Ends, Threaded</li>
                <li>Standards: ANSI/ASME, MSS SP/ISO</li>
                <li>Materials: Carbon Steel, Alloys, Stainless Steel, Duplex, Titanium</li>
                <li>Specials: Barrel Flow Tees, Sweep Bends, Stub Ends</li>
              </ul>
            </div>
          </div>
        </Fade>

        {/* Pipes Section (Image Right) */}
        <Fade direction="up" delay={200} triggerOnce>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start mt-24">
            {/* Content First */}
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl font-bold">Pipes</h2>
              <p className="text-[#CCCCCC] leading-relaxed">
                FlangTex provides premium piping solutions at competitive prices, ensuring both quality and reliability. Our expert team helps clients choose the best products for their specific projects.
              </p>
              <ul className="text-sm text-white/70 space-y-1 list-disc pl-5">
                <li>Range: 1/2″ to 96″</li>
                <li>Execution: Seamless, Welded, ERW, SAW, LSAW</li>
                <li>Materials: Carbon Steel, Alloys, Duplex, Titanium</li>
                <li>Coatings: Epoxy, Galvanized, 3LPE, Cement Lining</li>
                <li>Specials: Finned Tubes, Heat Exchangers, Duplex Tubing</li>
              </ul>
            </div>

            {/* Image Second */}
            <div className="w-full h-64 bg-white/10 rounded-lg shadow-inner flex items-center justify-center overflow-hidden order-1 md:order-2">
              <img
                src="/parts_img/pipes.jpg"
                alt="Pipes"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </Fade>

        {/* CTA */}
        <Fade direction="up" delay={300} triggerOnce>
          <div className="max-w-3xl mx-auto text-center mt-32">
            <p className="text-[#AAAAAA] text-lg italic mb-6">
              FlangTex is your trusted partner for pipes—delivering superior quality, expert advice, and reliable service.
            </p>
          </div>
        </Fade>
      </section>
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

export default PipePage;