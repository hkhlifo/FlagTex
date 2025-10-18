'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

const InspectionSection = () => {

  const Divider = () => (
    <div className="bg-[#0f0f0f] flex justify-center ">
      <div className="flex items-center gap-2">
        <span className="w-6 h-[1px] bg-white/20"></span>
        <span className="w-4 h-[1px] bg-white/30"></span>
        <span className="w-2 h-[1px] bg-white/40"></span>

        <span className="w-2 h-2 rotate-45 bg-white/40"></span>

        <div className="relative w-3 h-3 rotate-45 bg-white">
          <span className="absolute inset-0 m-auto w-1 h-1 rounded-full bg-[#0f0f0f]"></span>
        </div>

        <span className="w-2 h-2 rotate-45 bg-white/40"></span>

        <span className="w-2 h-[1px] bg-white/40"></span>
        <span className="w-4 h-[1px] bg-white/30"></span>
        <span className="w-6 h-[1px] bg-white/20"></span>
      </div>
    </div>
  );

  return (
    <div>
      {/* Desktop Navbar */}
      {/* <nav className="hidden lg:flex fixed top-[100px] left-1/2 -translate-x-1/2 z-40 bg-[#0f0f0f]/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 shadow-lg">
        <ul className="flex gap-4 text-sm font-medium text-white/70">
          {['inspection', 'testing', 'cladding'].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="px-4 py-2 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav> */}

      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed top-[80px] left-1/2 -translate-x-1/2 z-40 bg-[#0f0f0f]/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 shadow-lg">
        <ul className="flex gap-3 text-sm font-medium text-white/70">
          {['inspection', 'testing', 'cladding'].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="px-4 py-2 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="inspection" className="bg-[#0f0f0f] text-white font-[Montserrat] px-6 md:px-12 pt-40 pb-24">
        <Fade direction="up" triggerOnce>
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-xl">
              Our Services
            </h1>
            <p className="text-[#CCCCCC] text-lg md:text-xl leading-relaxed">
              Precision-driven solutions for inspection, testing, and cladding—engineered to elevate industrial performance.
            </p>
            <div className="flex justify-center items-center gap-2 mt-6">
              <span className="w-6 h-[1px] bg-white/20"></span>
              <span className="text-white/40 text-xl font-bold tracking-widest">{'{'}</span>
              <span className="w-2 h-[1px] bg-white/40"></span>
              <span className="text-white text-sm font-bold">FLANGTEX</span>
              <span className="w-2 h-[1px] bg-white/40"></span>
              <span className="text-white/40 text-xl font-bold tracking-widest">{'}'}</span>
              <span className="w-6 h-[1px] bg-white/20"></span>
            </div>
          </div>
        </Fade>


        <Fade direction="up" triggerOnce>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="group relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)] border border-white/10 transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.1)] hover:scale-[1.01]">
              <Image
                src="/service_img/inspection.jpg"
                alt="Inspection process"
                fill
                quality={100}
                sizes="(min-width: 768px) 500px, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 to-transparent group-hover:from-[#0f0f0f]/40 transition-all duration-500" />
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-xl">Inspection</h2>
              <p className="text-white/70 text-base leading-relaxed">
                At FlangTex Trading LLC, we understand the critical importance of inspection and quality verification.
                With extensive industry experience, we ensure every product meets customer and industry standards—
                including third-party inspections on request.
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
                <div>
                  <p><strong>Visual Inspection</strong></p>
                  <p>Surface defects, dimensional accuracy, and overall product quality.</p>
                </div>
                <div>
                  <p><strong>Dimensional Inspection</strong></p>
                  <p>Precision tools verify specs and tolerances.</p>
                </div>
                <div>
                  <p><strong>Material Verification</strong></p>
                  <p>Confirm correct materials meet project standards.</p>
                </div>
                <div>
                  <p><strong>Third-Party Inspection</strong></p>
                  <p>Independent verification for unbiased compliance.</p>
                </div>
                <div>
                  <p><strong>Pre-Shipment Inspection</strong></p>
                  <p>Final checks before dispatch and packaging.</p>
                </div>
                <div>
                  <p><strong>Documentation Review</strong></p>
                  <p>Ensure all paperwork meets industry and client specs.</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        {/* Process Section */}
        <Fade direction="up" delay={200} triggerOnce>
          <div className="max-w-4xl mx-auto mt-24 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">Our Inspection Process</h3>
            <div className="grid md:grid-cols-5 gap-6 text-sm text-white/80">
              <div className="bg-white/5 p-4 rounded-xl backdrop-blur-md border border-white/10 shadow-inner">
                <p className="font-bold mb-2">Step 1</p>
                <p>Initial Assessment</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl backdrop-blur-md border border-white/10 shadow-inner">
                <p className="font-bold mb-2">Step 2</p>
                <p>Inspection Planning</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl backdrop-blur-md border border-white/10 shadow-inner">
                <p className="font-bold mb-2">Step 3</p>
                <p>Execution</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl backdrop-blur-md border border-white/10 shadow-inner">
                <p className="font-bold mb-2">Step 4</p>
                <p>Documentation</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl backdrop-blur-md border border-white/10 shadow-inner">
                <p className="font-bold mb-2">Step 5</p>
                <p>Review & Certification</p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <Divider />
      <section id="testing" className="bg-[#0f0f0f] text-white font-[Montserrat] px-6 md:px-12 pt-36 py-24">
        {/* Header */}
        <Fade direction="up" triggerOnce>
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-xl">Testing</h2>
            <p className="text-[#CCCCCC] text-lg md:text-xl leading-relaxed">
              Rigorous testing for reliability, safety, and compliance. FlangTex delivers precision across every material and method.
            </p>
          </div>
        </Fade>

        {/* Image + Intro */}
        <Fade direction="up" delay={100} triggerOnce>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-24">
            {/* Image */}
            <div className="group relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)] border border-white/10 transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.1)] hover:scale-[1.01]">
              <Image
                src="/service_img/testing.jpg"
                alt="Testing process"
                fill
                quality={100}
                sizes="(min-width: 768px) 500px, 100vw"
                placeholder="empty"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 to-transparent group-hover:from-[#0f0f0f]/40 transition-all duration-500" />
            </div>

            {/* Intro */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Our Testing Capabilities</h3>
              <p className="text-white/70 text-base leading-relaxed">
                We offer a comprehensive range of testing services to ensure that all materials and products meet the highest standards of quality, safety, and performance. Third-party testing available on request.
              </p>
            </div>
          </div>
        </Fade>

        {/* Testing Cards */}
        <Fade direction="up" delay={200} triggerOnce>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
            {/* Mechanical */}
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10 shadow-inner hover:scale-[1.02] transition-all duration-300">
              <h4 className="text-lg font-semibold mb-2">⚙️ Mechanical Testing</h4>
              <ul className="list-disc pl-5 text-white/80 text-sm space-y-1">
                <li>Tensile Testing</li>
                <li>Hardness Testing</li>
                <li>Impact Testing</li>
                <li>Bend Testing</li>
                <li>Flattening Testing</li>
              </ul>
            </div>

            {/* Corrosion */}
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10 shadow-inner hover:scale-[1.02] transition-all duration-300">
              <h4 className="text-lg font-semibold mb-2">🧪 Corrosion Testing</h4>
              <ul className="list-disc pl-5 text-white/80 text-sm space-y-1">
                <li>SSCC Testing</li>
                <li>HIC Testing</li>
                <li>Pitting Corrosion</li>
                <li>Intergranular Corrosion</li>
                <li>Stress Corrosion</li>
              </ul>
            </div>

            {/* NDT */}
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10 shadow-inner hover:scale-[1.02] transition-all duration-300">
              <h4 className="text-lg font-semibold mb-2">🔍 Non-Destructive Testing</h4>
              <ul className="list-disc pl-5 text-white/80 text-sm space-y-1">
                <li>Ultrasonic Testing (UT)</li>
                <li>Radiographic Testing (RT)</li>
                <li>Magnetic Particle Testing (MPI)</li>
                <li>Liquid Penetrant Testing (LPE)</li>
                <li>Visual Inspection</li>
              </ul>
            </div>
          </div>
        </Fade>

        {/* Why Choose Us */}
        <Fade direction="up" delay={300} triggerOnce>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">Why Choose FlangTex Testing?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-white/80">
              <div className="bg-white/5 p-5 rounded-xl backdrop-blur-md border border-white/10 shadow-inner">
                <p className="font-bold mb-2">Expertise & Experience</p>
                <p>Accurate and reliable testing across diverse materials and industries.</p>
              </div>
              <div className="bg-white/5 p-5 rounded-xl backdrop-blur-md border border-white/10 shadow-inner">
                <p className="font-bold mb-2">Comprehensive Capabilities</p>
                <p>Mechanical, corrosion, and advanced NDT—all under one roof.</p>
              </div>
              <div className="bg-white/5 p-5 rounded-xl backdrop-blur-md border border-white/10 shadow-inner">
                <p className="font-bold mb-2">Quality Assurance</p>
                <p>Every product meets the highest standards of safety and performance.</p>
              </div>
              <div className="bg-white/5 p-5 rounded-xl backdrop-blur-md border border-white/10 shadow-inner">
                <p className="font-bold mb-2">Customer-Centric Approach</p>
                <p>Tailored testing solutions based on your project’s unique needs.</p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <Divider />
      <section id="cladding" className="bg-[#0f0f0f] text-white font-[Montserrat] px-6 md:px-12 pt-36 py-24">
        {/* Header */}
        <Fade direction="up" triggerOnce>
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-xl">Cladding</h2>
            <p className="text-[#CCCCCC] text-lg md:text-xl leading-relaxed">
              Economical corrosion resistance meets mechanical strength. FlangTex cladding solutions deliver durability without compromise.
            </p>
          </div>
        </Fade>

        {/* Image + Intro */}
        <Fade direction="up" delay={100} triggerOnce>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-24">
            {/* Image */}
            <div className="group relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)] border border-white/10 transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.1)] hover:scale-[1.01]">
              <Image
                src="/service_img/cladding.jpg"
                alt="Cladding process"
                fill
                quality={100}
                sizes="(min-width: 768px) 500px, 100vw"
                placeholder="empty"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 to-transparent group-hover:from-[#0f0f0f]/40 transition-all duration-500" />
            </div>

            {/* Intro */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">What is Cladding?</h3>
              <p className="text-white/70 text-base leading-relaxed">
                Cladding bonds a corrosion-resistant alloy onto carbon steel surfaces—internally, externally, or both—delivering CRA-level protection with structural integrity. It’s versatile, economical, and engineered for harsh environments.
              </p>
            </div>
          </div>
        </Fade>

        {/* Types of Cladding */}
        <Fade direction="up" delay={200} triggerOnce>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10 shadow-inner hover:scale-[1.02] transition-all duration-300">
              <h4 className="text-lg font-semibold mb-2">🔄 Internal Cladding</h4>
              <p className="text-white/80 text-sm">Applied to the inside of pipes—ideal for transporting corrosive fluids.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10 shadow-inner hover:scale-[1.02] transition-all duration-300">
              <h4 className="text-lg font-semibold mb-2">🛡️ External Cladding</h4>
              <p className="text-white/80 text-sm">Protects outer surfaces from corrosive environments and exposure.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10 shadow-inner hover:scale-[1.02] transition-all duration-300">
              <h4 className="text-lg font-semibold mb-2">⚡ Weld Overlay Cladding</h4>
              <p className="text-white/80 text-sm">CRA alloy is welded onto carbon steel—creating a metallurgical bond for durability.</p>
            </div>
          </div>
        </Fade>

        {/* Benefits */}
        <Fade direction="up" delay={300} triggerOnce>
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">Benefits of Cladding</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-white/80">
              {[
                'Cost Efficiency',
                'Corrosion Resistance',
                'Mechanical Strength',
                'Versatility',
                'Longevity',
                'Customization',
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="bg-white/5 p-5 rounded-xl backdrop-blur-md border border-white/10 shadow-inner hover:scale-[1.02] transition-all duration-300"
                >
                  <p className="font-bold mb-1">{benefit}</p>
                  <p>
                    {benefit === 'Cost Efficiency'
                      ? 'CRA-level protection at a fraction of the cost.'
                      : benefit === 'Corrosion Resistance'
                        ? 'Extended service life in harsh environments.'
                        : benefit === 'Mechanical Strength'
                          ? 'Carbon steel base ensures structural integrity.'
                          : benefit === 'Versatility'
                            ? 'Applicable to pipes, valves, fittings, and vessels.'
                            : benefit === 'Longevity'
                              ? 'Longer lifespan than standard carbon steel.'
                              : 'Choose cladding material to match corrosion needs.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        {/* Process */}
        <Fade direction="up" delay={400} triggerOnce>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">Our Cladding Process</h3>
            <div className="grid md:grid-cols-5 gap-6 text-sm text-white/80">
              {[
                'Material Selection',
                'Surface Preparation',
                'Cladding Application',
                'Quality Control',
                'Final Processing',
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-white/5 p-4 rounded-xl backdrop-blur-md border border-white/10 shadow-inner hover:scale-[1.02] transition-all duration-300"
                >
                  <p className="font-bold mb-2">Step {i + 1}</p>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default InspectionSection;
