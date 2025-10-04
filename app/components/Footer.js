import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {

  const socialLinks = [
    { icon: <FaFacebookF />, label: 'Facebook', href: '#' },
    { icon: <FaLinkedinIn />, label: 'LinkedIn', href: '#' },
    { icon: <FaInstagram />, label: 'Instagram', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-[#CCCCCC] px-6 md:px-12 py-16 font-[Montserrat] z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-[#333333] pb-12">
        <div>
          <h3 className="text-xl font-semibold text-[#FFFFFF] mb-4">FLANGTEX</h3>
          <p className="text-sm leading-relaxed text-[#AAAAAA]">
            Precision-engineered digital experiences for industrial excellence. We deliver bold design, seamless functionality, and trusted performance across global markets.
          </p>
          <p className="text-sm italic text-[#CCCCCC] mt-4">
            Built for precision. Trusted for impact.
          </p>

        </div>

        <div>
          <h4 className="text-lg font-medium text-[#FFFFFF] mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#8B0000] transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#8B0000] transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-[#8B0000] transition-colors">Services</Link></li>
            <li><Link href="/products" className="hover:text-[#8B0000] transition-colors">Products</Link></li>
            <li><Link href="/contact" className="hover:text-[#8B0000] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium text-[#FFFFFF] mb-4">Connect</h4>
          <p className="text-sm mb-2">📍UAE-Based | Trusted Worldwide</p>
          <p className="text-sm mb-4">📧 support@flangtex.com</p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon, label, href }) => (
              <Link key={label} href={href} aria-label={label}>
                <span className="text-white text-xl hover:text-[#454545] transition-colors duration-300">
                  {icon}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </div>


      <div className="text-center text-xs text-[#666666] pt-8">
        © {new Date().getFullYear()} FLANGTEX Trading LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;



