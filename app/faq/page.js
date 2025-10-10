// Github

"use client";
import React, { useState } from "react";

const generalFaqs = [
  {
    q: "What types of oilfield equipment do you provide?",
    a: "FlangTex offers a comprehensive range of oilfield equipment including flanges, pipes, fittings, valves, gaskets, fasteners, and strainers. We also supply specialized items such as isolation joints, pig launchers & receivers, corrosion coupons, nozzles, and cladding works, ensuring complete solutions for diverse oil & gas project requirements.",
  },
  {
    q: "How can I request a quote or place an order?",
    a: "You can request a quote or place an order by contacting our sales team via website, email, or phone. We'll guide you in choosing the right products and provide detailed pricing.",
  },
  {
    q: "Do you offer customized solutions for unique project requirements?",
    a: "Yes, we specialize in delivering customized solutions designed to meet your unique project requirements. Our team works closely with you to provide the most effective, tailored options.",
  },
  {
    q: "What is your standard lead time for product delivery?",
    a: "Lead time depends on the product type and order quantity. Upon request, we provide an accurate delivery estimate. Expedited shipping options are available for urgent requirements.",
  },
];

const flangesFaqs = [
  {
    q: "What are the common types of flanges?",
    a: (
      <>
        FlangTex provides flanges in several types, including:
        <ul className="list-disc pl-6 mt-2 text-sm text-white/80">
          <li>Weld Neck Flanges</li>
          <li>Slip-On Flanges</li>
          <li>Socket Weld Flanges</li>
          <li>Threaded Flanges</li>
          <li>Blind Flanges</li>
        </ul>
        <div className="mt-2">Usage Guidelines:</div>
        <ul className="list-disc pl-6 text-sm text-white/80">
          <li>Weld Neck, Slip-On, or Socket Weld: Pipes &gt;2 inches or high pressure</li>
          <li>Threaded: Pipes &lt;2 inches, low pressure, minimal mechanical stress; suitable for explosive areas</li>
          <li>Blind: To stop or block fluid flow</li>
        </ul>
        <div className="mt-2">Ensure personnel handling flanged joints are trained and follow TSE-TS EN 1591 Part 1-4 standards.</div>
      </>
    ),
  },
  {
    q: "What are the special types of flanges?",
    a: (
      <>
        Specialized flanges include:
        <ul className="list-disc pl-6 mt-2 text-sm text-white/80">
          <li>Swivel Flanges</li>
          <li>Expander/Reducer Flanges</li>
          <li>Nippo Flanges</li>
          <li>Weldo Flanges</li>
          <li>Orifice Flanges</li>
        </ul>
        <div className="mt-2">These are designed for unique operational or installation requirements.</div>
      </>
    ),
  },
  {
    q: "What are the flange grades and corresponding pipe grades?",
    a: (
      <>
        <div className="overflow-x-auto">
          <table className="min-w-[320px] w-full text-sm text-white/80 border-separate border-spacing-y-1">
            <thead>
              <tr className="text-[#ffcc33]">
                <th className="text-left pr-4">Flange Grade</th>
                <th className="text-left">Compatible Pipe Standards</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ASTM A105N (Carbon Steel, High Temp)</td><td>ASTM A53, A106, API 5L</td></tr>
              <tr><td>ASTM A350 LF1/LF2/LF3 (Carbon Steel, Low Temp)</td><td>ASTM A333</td></tr>
              <tr><td>ASTM A694 F42-F80 (High Yield Carbon Steel)</td><td>API 5L grades</td></tr>
              <tr><td>ASTM A182 F1-F91 (Alloy Steel)</td><td>ASTM A335</td></tr>
              <tr><td>ASTM A182 F304/F316/F321 (Stainless Steel)</td><td>ASTM A312 SS pipes</td></tr>
              <tr><td>ASTM A182 F44/F51/F53/F55 (Duplex/Super Duplex)</td><td>ASTM A790/A928, Inconel, Incoloy, Hastelloy, Monel</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    q: "How do I place an order for flanges?",
    a: (
      <>
        Provide the following details:
        <ul className="list-disc pl-6 mt-2 text-sm text-white/80">
          <li>Type of Flange (e.g., Weld Neck, Slip-On)</li>
          <li>Pipe Size (NPS)</li>
          <li>Pipe Schedule (e.g., Sch 10, Sch 40)</li>
          <li>Rating or Class (ASME 150-2500, DIN, JIS, etc.)</li>
          <li>Flange Face (FF, RF, RTJ)</li>
          <li>Surface Finish (Smooth, Concentric Serrated)</li>
          <li>Material Grade (Carbon Steel, Stainless Steel, Duplex, etc.)</li>
          <li>Specification/Standard (ASME B16.5, EN 1092-1, JIS, DIN, UNI)</li>
        </ul>
      </>
    ),
  },
];

function FaqAccordion({ faqs, group }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="space-y-4">
      {faqs.map((item, idx) => (
        <div
          key={item.q}
          className={`rounded-2xl bg-[#808080]/30 border border-[#808080] shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#8B0000] group/fqcard`}
        >
          <button
            className="w-full flex items-center justify-between px-6 py-6 text-lg font-semibold text-left text-[#FFFFFF] focus:outline-none group cursor-pointer"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            aria-expanded={openIdx === idx}
            aria-controls={`${group}-faq-${idx}`}
          >
            <span>{item.q}</span>
            <span className="ml-4 flex items-center justify-center">
              <svg className={`w-7 h-7 text-[#8B0000] transition-transform duration-400 ${openIdx === idx ? 'rotate-45 scale-110' : 'scale-100'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
            </span>
          </button>
          <div
            id={`${group}-faq-${idx}`}
            className={`px-6 pb-7 text-base text-[#FFFFFF] transition-all duration-400 ${openIdx === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
            style={{ willChange: 'max-height, opacity' }}
          >
            {openIdx === idx && (
              <div className="pt-2 animate-fadeIn">
                {item.a}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="min-h-screen w-full bg-[#000000] text-[#FFFFFF] px-2 sm:px-6 md:px-12 py-10 md:py-20 font-[Montserrat]">
      {/* Hero/Intro */}
      <section className="max-w-3xl mx-auto text-center pt-20 pb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-xl text-[#FFFFFF]">General FAQs</h1>
        <div className="flex justify-center mb-4">
          <span className="block h-1 w-24 rounded-full bg-[#8B0000]" />
        </div>
        <p className="text-lg md:text-xl text-[#FFFFFF]/80 mb-2">At FlangTex Trading LLC, your satisfaction and success are our top priorities. We are dedicated to providing the most reliable products and solutions for your industrial needs.</p>
        <p className="text-base text-[#FFFFFF]/60">Click on a question to reveal the answer. If you don't find what you're looking for, please reach out to us directly—our team is always here to help.</p>
      </section>

      {/* General FAQs */}
  <section className="max-w-2xl mx-auto px-2 sm:px-4 mb-20">
        <FaqAccordion faqs={generalFaqs} group="general" />
      </section>

      {/* Flanges FAQs */}
      <section className="max-w-3xl mx-auto px-2 sm:px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3 text-[#FFFFFF]">
          <span className="inline-block w-2 h-8 bg-[#8B0000] rounded-full" />
          Flanges FAQs
        </h2>
        <FaqAccordion faqs={flangesFaqs} group="flanges" />
      </section>

      <style jsx global>{`
        .animate-fadeIn { animation: fadeInFaq 0.3s cubic-bezier(.4,0,.2,1); }
        @keyframes fadeInFaq {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </main>
  );
}
