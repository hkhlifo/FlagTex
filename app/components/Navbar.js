'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Fade, Slide } from 'react-awesome-reveal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Products', path: '/products' },
        { label: 'Contact', path: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 font-[Montserrat] backdrop-blur-md bg-[#000000]/60 border-b border-[#808080]/30 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" aria-label="FlangTex Home" className="group flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <img
                            src="/Logo5.png"
                            alt="FlangTex Icon"
                            className="h-8 md:h-12 w-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                        <img
                            src="/Logo7.png"
                            alt="FlangTex Text"
                            className="h-8 md:h-12 w-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map(({ label, path }) => (
                        <Link
                            key={label}
                            href={path}
                            className={`relative font-medium tracking-wide px-3 py-2 transition-all duration-300 ease-in-out
    ${pathname === path
                                    ? 'text-[#FFFFFF] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#FFFFFF]'
                                    : 'text-[#808080] hover:text-[#FFFFFF] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#FFFFFF]/70 after:transition-all after:duration-300'}
  `}
                        >
                            {label}
                        </Link>

                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-[#FFFFFF] focus:outline-none transition-transform duration-300"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <Slide direction="down" triggerOnce>
                    <div className="md:hidden px-6 py-6 flex flex-col items-center space-y-4
      backdrop-blur-xl bg-gradient-to-br from-[#000000]/60 via-[#1a1a1a]/50 to-[#000000]/60
      border-t border-[#808080]/30 shadow-inner shadow-[#8B0000]/10 rounded-b-xl">
                        {navItems.map(({ label, path }) => (
                            <Link
                                key={label}
                                href={path}
                                className={`relative text-center font-medium tracking-wide px-4 py-2 transition-all duration-300 ease-in-out
            ${pathname === path
                                        ? 'text-[#FFFFFF] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-6 after:bg-[#FFFFFF]'
                                        : 'text-[#808080] hover:text-[#FFFFFF] hover:after:absolute hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:bottom-0 hover:after:h-[2px] hover:after:w-6 hover:after:bg-[#FFFFFF]/70'}
          `}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </Slide>
            )}


        </header>
    );
};

export default Navbar;
