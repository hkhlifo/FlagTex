'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;

        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=sales@flangtex.com&su=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        window.open(gmailLink, '_blank');
    };

    return (
        <section className="min-h-screen w-full bg-[#0f0f0f] text-white font-[Montserrat] px-6 md:px-12 py-24">
            <Fade direction="up" triggerOnce>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-xl">
                        Let's Connect
                    </h1>
                    <p className="text-[#CCCCCC] text-lg md:text-xl leading-relaxed">
                        Whether you have a project in mind or just want to say hello, we're here to listen.
                    </p>

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

            {/* Contact Form */}
            <Fade direction="up" delay={200} triggerOnce>
                <form
                    onSubmit={handleSubmit}
                    className="max-w-3xl mx-auto bg-[#1a1a1a]/80 border border-[#333333] rounded-xl p-8 shadow-[0_0_20px_#8B0000]/10 backdrop-blur-md space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="bg-[#0f0f0f] border border-white/20 text-white px-4 py-3 rounded-md placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                            required
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            className="bg-[#0f0f0f] border border-white/20 text-white px-4 py-3 rounded-md placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                            required
                        />
                    </div>
                    <input
                        name="subject"
                        type="text"
                        placeholder="Subject"
                        className="w-full bg-[#0f0f0f] border border-white/20 text-white px-4 py-3 rounded-md placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                    <textarea
                        name="message"
                        rows={6}
                        placeholder="Your Message"
                        className="w-full bg-[#0f0f0f] border border-white/20 text-white px-4 py-3 rounded-md placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                        required
                    />
                    <button
                        type="submit"
                        className="cursor-pointer w-full flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white font-semibold py-3 rounded-md hover:bg-white/20 hover:border-white/30 transition-all duration-300 tracking-wide backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                        <img
                            src="/icons/message.png"
                            alt="Message"
                            className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <span className="uppercase text-sm tracking-widest">Send Message</span>
                    </button>
                </form>
            </Fade>
        </section>
    );
};

export default Contact;
