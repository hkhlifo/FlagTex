'use client';

import Link from 'next/link';
import React from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const Home = () => {
  return (
    <div className="relative font-[Montserrat]">
      {/* Video Background */}
      <div className="fixed inset-0 z-[-1]">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover">
          <source src="/main-bg/flangtex.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* First Section */}
        <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
          <div className="max-w-4xl text-center text-[#FFFFFF] backdrop-blur-sm bg-[#000000]/60 p-6 md:p-12 rounded-xl shadow-xl">
            <Fade direction="down" triggerOnce>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-4">
                Welcome to <span className="text-[#8B0000]">FLANGTEX</span>
              </h1>
            </Fade>

            <Slide direction="up" triggerOnce>
              <p className="text-lg md:text-xl text-[#808080] mb-6">
                Precision-engineered digital experiences for industrial excellence.
                Where bold design meets seamless functionality.
              </p>
            </Slide>

            <Zoom delay={300} triggerOnce>
              <Link
                href="/about"
                className="inline-block relative font-medium tracking-wide px-6 py-3 rounded-full text-[#FFFFFF] bg-[#000000] overflow-hidden transition-all duration-300 group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#808080] to-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-[#FFFFFF] transition-all duration-300">
                  Learn More
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">&gt;</span>
                </span>
              </Link>
            </Zoom>
          </div>
        </section>

        {/* Second Section */}
        <section className="min-h-screen w-full bg-gradient-to-br from-[#1c1c1c] via-[#222222] to-[#1c1c1c] text-[#FFFFFF] px-6 md:px-12 py-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="text-left max-w-xl md:max-w-2xl">
              <Fade direction="up" triggerOnce>
                <p className="text-sm uppercase tracking-wide text-[#808080] mb-2">
                  Industrial Excellence
                </p>
              </Fade>

              <Fade direction="up" delay={100} triggerOnce>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-[#F5F5F5] drop-shadow-md">
                  Leading Supplier of Quality Piping Products
                </h2>

              </Fade>

              <Slide direction="up" delay={200} triggerOnce>
                <p className="text-lg md:text-xl text-[#CCCCCC] mb-6 border-l-4 border-[#8B0000] pl-4">
                  FlangTex Trading LLC delivers high-performance flanges, pipes, valves, fittings, fasteners, gaskets, and specialty items—trusted by oil and gas industries worldwide.
                </p>
              </Slide>
            </div>

            {/* Right */}
            <Zoom delay={200} triggerOnce>
              <div className="space-y-6 text-[#CCCCCC] text-md md:text-lg">
                <div className="bg-[#000000]/30 p-6 rounded-xl shadow-md hover:shadow-[#8B0000]/30 transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-[#FFFFFF] mb-2">Uncompromising Quality</h3>
                  <p>
                    Our products meet the strict operational and safety standards of modern industrial applications, ensuring reliability in every environment.
                  </p>
                </div>

                <div className="bg-[#000000]/30 p-6 rounded-xl shadow-md hover:shadow-[#8B0000]/30 transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-[#FFFFFF] mb-2">Built for Performance</h3>
                  <p>
                    Designed for durability and efficiency, our range helps clients maintain safety and productivity—even in the harshest conditions.
                  </p>
                </div>

                <div className="bg-[#000000]/30 p-6 rounded-xl shadow-md hover:shadow-[#8B0000]/30 transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-[#FFFFFF] mb-2">Tailored Solutions</h3>
                  <p>
                    We go beyond supply—offering expert guidance and full support to meet your project’s unique needs with precision and care.
                  </p>
                </div>
              </div>
            </Zoom>
          </div>
        </section>

        <div className="flex justify-center items-center gap-2">
          <span className="w-6 h-[1px] bg-white"></span>
          <span className="text-white/20 text-xl font-bold tracking-widest">{'{'}</span>
          <span className="w-2 h-[1px] bg-white/90"></span>
          <span className="text-white text-sm font-bold">FLANGTEX</span>
          <span className="w-2 h-[1px] bg-white/90"></span>
          <span className="text-white/20 text-xl font-bold tracking-widest">{'}'}</span>
          <span className="w-6 h-[1px] bg-white"></span>
        </div>

        {/* Third Section */}
        <section className="min-h-screen w-full bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-[#FFFFFF] px-6 md:px-12 py-24 font-[Montserrat]">
          <div className="max-w-7xl mx-auto text-center">
            {/* Heading */}
            <Fade direction="up" triggerOnce>
              <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-[#F5F5F5] drop-shadow-md">
                Serving Communities and Industries Worldwide
              </h2>

            </Fade>

            {/* Subheading */}
            <Slide direction="up" triggerOnce>
              <p className="text-lg md:text-xl text-[#808080] max-w-4xl mx-auto mb-12">
                Whether you're a seasoned professional or just starting out, FlangTex is your trusted partner—delivering tailored solutions that drive efficiency, performance, and trust across industries.
              </p>
            </Slide>

            {/* Stat Cards */}
            <Fade delay={200} triggerOnce>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  { icon: '/icons/oil.png', label: '385+ Oil & Gas Projects' },
                  { icon: '/icons/power.png', label: '125+ Power & Marine Projects' },
                  { icon: '/icons/industry.png', label: '30+ Industrial Projects' },
                ].map(({ icon, label }) => (
                  <div
                    key={label}
                    className="group bg-[#000000]/30 p-6 rounded-xl shadow-md border border-[#808080]/30 transition-all duration-300
               hover:scale-[1.02] hover:border-[#8B0000] hover:shadow-[0_0_20px_#8B0000]/30 hover:bg-[#1a1a1a]/50"
                  >
                    <img
                      src={icon}
                      alt={label}
                      className="w-12 h-12 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                    />
                    <p className="text-lg font-medium text-[#FFFFFF]">{label}</p>
                  </div>
                ))}

              </div>
            </Fade>

            {/* Quote Highlight */}
            <Fade delay={300} triggerOnce>
              <blockquote className="max-w-3xl mx-auto text-[#CCCCCC] italic border-l-4 border-[#8B0000] pl-4 mb-12">
                “Excellence, trust, and performance—every time. That’s the FlangTex promise.”
              </blockquote>
            </Fade>

            {/* CTA */}
            <Fade delay={400} triggerOnce>
              <p className="text-md md:text-lg text-[#CCCCCC] max-w-4xl mx-auto mb-6">
                We're committed to helping clients stay ahead in the oil and gas industry—no matter the challenge.
              </p>

              <p className="text-md md:text-lg text-[#CCCCCC] max-w-4xl mx-auto mb-8">
                📩 Get in touch today to discuss your specific requirements and discover the value of working with a trusted global partner.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-[#8B0000] to-[#a30000] text-[#FFFFFF] px-6 py-3 rounded-full font-medium tracking-wide hover:opacity-90 transition-all duration-300"
              >
                Contact FlangTex Experts
              </Link>
            </Fade>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;

