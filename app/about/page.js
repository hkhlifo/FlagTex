'use client';

import React from 'react';
import Image from 'next/image';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const About = () => {
    return (
        <main className="w-full text-[#FFFFFF] font-[Montserrat]">
            {/* Intro */}
            <section className="relative w-full pt-32 pb-16 px-6 md:px-12 bg-[#0f0f0f]">
                <Fade direction="up" triggerOnce>
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white drop-shadow-xl mb-6">
                            <span className="bg-gradient-to-r from-white via-[#D8CBB3] to-white bg-clip-text text-transparent">
                                About FlangTex Trading LLC
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#CCCCCC] leading-relaxed mb-10">
                            Precision-driven supply partner for the world's most demanding industries.
                        </p>

                        {/* Unique Underline */}
                        <div className="flex justify-center items-center gap-2">
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
            </section>

            <section className="w-full py-20 px-6 md:px-12 bg-[#0f0f0f]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        {
                            image: '/about_img/who.png',
                            title: 'Who We Are',
                            description:
                                'FlangTex Trading LLC is a supplier of premium industrial products. We guide clients on standards, specs, and performance—ensuring reliable, tailored solutions.',
                            tags: ['Pipes', 'Flanges', 'Valves'],
                        },
                        {
                            image: '/about_img/what.png',
                            title: 'What We Do',
                            description:
                                'We offer a continuous supply of high-quality, competitively priced piping products. Timely, efficient delivery to oil & gas, petrochemical, power, and industrial sectors.',
                            tags: ['Global Supply', 'Industrial Standards', 'Efficiency'],
                        },
                    ].map((section, i) => (
                        <div
                            key={i}
                            className="relative rounded-xl overflow-hidden shadow-xl group border border-white/20 ring-1 ring-white/10 hover:ring-[#D8CBB3]/30 transition-all duration-300"
                        >
                            <Image
                                src={section.image}
                                alt={section.title}
                                width={800}
                                height={500}
                                className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-500"
                                priority
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                <h3 className="md:text-xl text-lg font-bold mb-3">{section.title}</h3>
                                <p className="text-[#E0E0E0] text-sm mb-3 drop-shadow-sm">{section.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {section.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full border border-white/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Divider OR Break */}
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

            <section className="w-full py-20 px-6 md:px-12 bg-[#0f0f0f]">
                <div className="max-w-4xl mx-auto relative rounded-xl overflow-hidden shadow-xl border border-white/20 ring-1 ring-white/10">
                    <Image
                        src="/about_img/values.png"
                        alt="Our Values"
                        width={1200}
                        height={600}
                        className="object-cover w-full h-auto"
                        priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="md:text-2xl text-xl font-bold mb-4">Our Values</h3>
                        <ul className="list-disc list-inside text-[#E0E0E0] space-y-2 text-sm leading-relaxed">
                            <li>Integrity, fairness, and professionalism in every interaction</li>
                            <li>Personal responsibility for reputation and relationships</li>
                            <li>Commitment to quality and timely delivery</li>
                            <li>Excellence in service and client satisfaction</li>
                        </ul>
                    </div>
                </div>
            </section>

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

            {/* Mission & Vision */}
            <section className="relative w-full py-12 px-6 md:px-12 bg-[#0f0f0f]">
                <Zoom delay={300} triggerOnce>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: '/icons/vision.png',
                                title: 'Vision',
                                content:
                                    'To be recognized as the most trusted and reliable partner in the piping industry, providing top-quality products and dependable solutions.',
                            },
                            {
                                icon: '/icons/mission.png',
                                title: 'Mission',
                                content:
                                    'To deliver superior products and tailored solutions while continuously enhancing our expertise to meet evolving client needs.',
                            },
                        ].map(({ icon, title, content }) => (
                            <div
                                key={title}
                                className="group relative bg-[#1a1a1a]/80 border border-[#333333] p-8 rounded-xl shadow-[0_0_20px_#8B0000]/10 backdrop-blur-md flex flex-col items-center text-center transition-all duration-500 hover:scale-[1.03] hover:border-[#8B0000] hover:shadow-[0_0_30px_#8B0000]/30 hover:bg-[#1a1a1a]/90"
                            >
                                {/* Glowing ring effect */}
                                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#8B0000] transition-all duration-500 pointer-events-none"></div>

                                {/* Icon */}
                                <img
                                    src={icon}
                                    alt={title}
                                    className="w-12 h-12 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:animate-pulse"
                                />

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-[#FFFFFF] mb-3">{title}</h3>

                                {/* Content */}
                                <p className="text-[#CCCCCC] text-md leading-relaxed tracking-wide">{content}</p>
                            </div>
                        ))}
                    </div>
                </Zoom>
            </section>

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

            {/* USP Grid */}
            <section className="relative w-full py-12 px-6 md:px-12 bg-[#0f0f0f]">
                <Fade delay={400} triggerOnce>
                    <div>
                        <h2 className="text-3xl font-bold text-[#F5F5F5] mb-6 text-center pb-2">
                            Our Unique Strengths
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {[
                                { icon: '/icons/knowledge.png', title: 'Knowledge', desc: 'Expertise in sourcing and seamless delivery.' },
                                { icon: '/icons/skill.png', title: 'Skill', desc: 'Specialized guidance and accurate solutions.' },
                                { icon: '/icons/excellence.png', title: 'Excellence', desc: 'Right materials, right time, every time.' },
                                { icon: '/icons/solution.png', title: 'Solution-Oriented', desc: 'Effective responses to client challenges.' },
                                { icon: '/icons/quality.png', title: 'Quality', desc: 'Uncompromising standards in products and service.' },
                            ].map(({ icon, title, desc }) => (
                                <div
                                    key={title}
                                    className="group bg-[#1a1a1a]/80 border border-[#333333] p-6 rounded-xl shadow-[0_0_20px_#8B0000]/10 backdrop-blur-md transition-all duration-300
                             hover:scale-[1.02] hover:border-[#8B0000] hover:shadow-[0_0_20px_#8B0000]/30 hover:bg-[#1a1a1a]/90"
                                >
                                    <img
                                        src={icon}
                                        alt={title}
                                        className="w-12 h-12 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <h4 className="text-lg font-semibold text-[#FFFFFF] mb-2 text-center">{title}</h4>
                                    <p className="text-sm text-[#CCCCCC] text-center leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Fade>
            </section>
        </main>
    );
};

export default About;
