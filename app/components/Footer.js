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
    <footer className="glass bg-gradient-to-br from-[#f9f9f9] via-[#eaeaea] to-[#f9f9f9] text-[#23272f] px-6 md:px-12 py-16 font-[Montserrat] z-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-[#e0e0e0] pb-12">
        <div>
          <h3 className="text-xl font-semibold text-[#23272f] mb-4">FLANGTEX</h3>
          <p className="text-sm leading-relaxed text-[#808080]">
            FlangTex Trading LLC is a trusted supplier of high-quality piping products, serving the industrial, oil & gas, and petrochemical sectors globally.
          </p>
          <p className="text-sm italic text-[#e63946] mt-4">
            Built for precision. Trusted for impact.
          </p>

        </div>

        <div>
          <h4 className="text-lg font-medium text-[#23272f] mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#e63946] transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#e63946] transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-[#e63946] transition-colors">Services</Link></li>
            <li><Link href="/products" className="hover:text-[#e63946] transition-colors">Products</Link></li>
            <li><Link href="/contact" className="hover:text-[#e63946] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium text-[#23272f] mb-4">Connect</h4>
          <div className="flex items-center gap-2 mb-2 px-3 py-1 rounded-md bg-gradient-to-r from-[#e63946]/10 to-[#808080]/10 text-[#23272f] shadow-md">
            <img
              src="/icons/gps.png"
              alt="Located"
              width={18}
              height={18}
              className="object-contain"
            />
            <span>USA-Based | Trusted Worldwide</span>
          </div>

          <div className="flex items-center gap-2 text-sm mb-4">
            <img
              src="/icons/gmail.png"
              alt="Email Icon"
              width={18}
              height={18}
              className="object-contain"
            />
            <span className="text-[#23272f]">sales@flangtex.com</span>
          </div>
          <div className="flex gap-4">
            {socialLinks.map(({ icon, label, href }) => (
              <Link key={label} href={href} aria-label={label}>
                <span className="text-[#e63946] text-xl hover:text-[#808080] transition-colors duration-300">
                  {icon}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </div>


  <div className="text-center text-xs text-[#808080] pt-8">
        © {new Date().getFullYear()} FLANGTEX Trading LLC. All rights reserved | Designed By VisionFlow Technologies
      </div>
    </footer>
  );
};

export default Footer;



