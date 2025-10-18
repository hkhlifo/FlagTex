'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Slide } from 'react-awesome-reveal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Multi-level products menu for dropdowns
    const productsMenu = [
        {
            label: 'Oil & Gas Products',
            type: 'dropdown',
            items: [
                { label: 'Pipe & Pipe Fitting', path: '/products/pipes' },
                { label: 'Flanges', path: '/products/flanges' },
                { label: 'Valves', path: '/products/valves' },
                { label: 'Strainers & Plates', path: '/products/strainers-plates' },
                { label: 'Special Items', path: '/products/special' },
            ],
        },
        {
            label: 'ICC ES Certified Products',
            type: 'dropdown',
            items: [
                { label: 'Roofing & Furring Nails', path: '/products/nails' },
                { label: 'Stucco & poultry Netting', path: '/products/netting' },
                { label: 'Float & J-Metal', path: '/products/float-trim' },
                { label: 'Staples', path: '/products/staples' },
            ],
        },
    ];

    const staticNav = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Services', path: '/services' },
        // Products will be rendered as dropdown after Services
        { label: 'FAQ', path: '/faq' },
        { label: 'Contact', path: '/contact' },
    ];

    const [openDropdown, setOpenDropdown] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    return (
        <header className="fixed top-0 left-0 w-full z-50 font-[Montserrat] backdrop-blur-xl bg-gradient-to-br from-white via-[#f9f9f9]/80 to-[#eaeaea]/90 border-b border-[#e0e0e0]/40 shadow-[0_8px_32px_0_rgba(139,0,0,0.06)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" aria-label="FlangTex Home" className="group flex items-center gap-3">
                    <div className="flex items-center justify-center ">
                        <img
                            src="/final.svg"
                            alt="FlangTex Logo"
                            className="h-10 lg:h-14 lg:w-70 w-60 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </div>
                </Link>
                {/* Desktop Nav with multi-level dropdowns */}
                <nav className="hidden lg:flex space-x-6 items-center">
                    {/* Home */}
                    <Link
                        href={staticNav[0].path}
                        className={`font-semibold text-[#23272f] hover:text-[#e63946] text-[15px] px-4 py-2 transition-all duration-300 ${pathname === staticNav[0].path ? 'text-[#e63946]' : ''}`}
                    >
                        {staticNav[0].label}
                    </Link>
                    {/* About Us */}
                    <Link
                        href={staticNav[1].path}
                        className={`font-semibold text-[#23272f] hover:text-[#e63946] text-[15px] px-4 py-2 transition-all duration-300 ${pathname === staticNav[1].path ? 'text-[#e63946]' : ''}`}
                    >
                        {staticNav[1].label}
                    </Link>
                    {/* Services dropdown (desktop only) */}
                    <div className="relative"
                        onMouseEnter={() => setOpenDropdown('services')}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <button
                            className={`font-semibold text-[#23272f] hover:text-[#e63946] text-[15px] px-4 py-2 transition-all duration-300 flex items-center gap-1 ${pathname === staticNav[2].path ? 'text-[#e63946]' : ''}`}
                            aria-haspopup="true"
                            aria-expanded={openDropdown === 'services'}
                        >
                            {staticNav[2].label}
                            <svg
                                className={`ml-1 w-3 h-3 transition-transform duration-300 ${openDropdown === 'services' ? 'rotate-180 text-[#e63946]' : 'rotate-0 text-[#23272f]'}`}
                                fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2"
                                style={{ display: 'inline', verticalAlign: 'middle' }}
                            >
                                <polyline points="4 10 8 6 12 10" />
                            </svg>
                        </button>
                        {openDropdown === 'services' && (
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg z-50 flex flex-col min-h-[60px]"
                                style={{ minWidth: '180px' }}
                            >
                                <Link href="/services/#inspection" className="px-6 py-4 font-semibold text-[#23272f] hover:text-[#e63946] text-[15px]">Inspection</Link>
                                <Link href="/services/#testing" className="px-6 py-4 font-semibold text-[#23272f] hover:text-[#e63946] text-[15px]">Testing</Link>
                                <Link href="/services/#cladding" className="px-6 py-4 font-semibold text-[#23272f] hover:text-[#e63946] text-[15px]">Cladding</Link>
                            </div>
                        )}
                    </div>
                    {/* Products dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => { setDropdownVisible(true); setOpenDropdown(null); }}
                        onMouseLeave={() => { setDropdownVisible(false); setOpenDropdown(null); }}
                    >
                        <button
                            className="font-semibold text-[#23272f] hover:text-[#e63946] text-[15px] px-4 py-2 transition-all duration-300"
                            onClick={() => setDropdownVisible((v) => !v)}
                            aria-haspopup="true"
                            aria-expanded={dropdownVisible}
                        >
                            Products
                            <svg
                                className={`ml-1 w-3 h-3 transition-transform duration-300 ${dropdownVisible ? 'rotate-180 text-[#e63946]' : 'rotate-0 text-[#23272f]'}`}
                                fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2"
                                style={{ display: 'inline', verticalAlign: 'middle' }}
                            >
                                <polyline points="4 10 8 6 12 10" />
                            </svg>
                        </button>
                        {dropdownVisible && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-50 flex flex-col min-h-[100px]"
                                style={{ minWidth: '220px' }}
                            >
                                {productsMenu.map((item, idx) => (
                                    <div
                                        key={item.label}
                                        className={`relative px-6 py-4 cursor-pointer hover:bg-gray-100 transition flex flex-col ${openDropdown === idx ? 'bg-gray-50' : ''}`}
                                        onMouseEnter={() => setOpenDropdown(idx)}
                                        onMouseLeave={() => setOpenDropdown(null)}
                                    >
                                        <span className="font-semibold text-gray-800">{item.label}</span>
                                        {/* Flyout submenu to the right */}
                                        {openDropdown === idx && (
                                            <div className="absolute top-0 right-full mr-2 w-56 bg-white shadow-xl rounded-lg border border-[#e0e0e0]/40 z-50 flex flex-col"
                                                style={{ minWidth: '200px' }}
                                                onMouseEnter={() => setOpenDropdown(idx)}
                                                onMouseLeave={() => setOpenDropdown(null)}
                                            >
                                                {item.items.map((subItem) => (
                                                    <Link
                                                        key={subItem.label}
                                                        href={subItem.path}
                                                        className="text-gray-700 hover:text-red-600 px-4 py-2 rounded transition"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <Link href="/products" className="block px-6 py-4 font-semibold text-[#23272f] hover:text-[#e63946] text-[15px]">Industrial Products</Link>
                            </div>
                        )}
                    </div>
                    {/* FAQ, Contact */}
                    {staticNav.slice(3).map(({ label, path }) => (
                        <Link
                            key={label}
                            href={path}
                            className={`font-semibold text-[#23272f] hover:text-[#e63946] text-[15px] px-4 py-2 transition-all duration-300 ${pathname === path ? 'text-[#e63946]' : ''}`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-[#23272f] focus:outline-none transition-transform duration-300"
                    aria-label="Toggle Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>
            {/* Mobile Nav with dropdowns */}
            {isOpen && (
                <Slide direction="down" triggerOnce>
                    <div className="lg:hidden px-4 py-6 flex flex-col items-center space-y-2
                        backdrop-blur-xl bg-gradient-to-br from-white via-[#f9f9f9]/80 to-[#eaeaea]/90
                        border-t border-[#e0e0e0]/40 shadow-inner shadow-[#e63946]/10 rounded-b-xl">
                        {/* Home, About Us, Services */}
                        {staticNav.slice(0, 3).map(({ label, path }) => (
                            <Link
                                key={label}
                                href={path}
                                onClick={() => setIsOpen(false)}
                                className={`relative text-center font-semibold tracking-wide px-4 py-3 text-lg transition-all duration-300 ease-in-out
                                    text-[#23272f] hover:text-[#e63946] focus:text-[#e63946] focus:outline-none
                                    ${pathname === path
                                        ? 'text-[#e63946] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[3px] after:w-8 after:bg-gradient-to-r after:from-[#e63946] after:to-[#808080] after:rounded-full after:shadow-lg'
                                        : 'after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-8 hover:after:bg-[#e63946]/70 hover:after:rounded-full hover:after:shadow-lg after:transition-all after:duration-300'}
                                `}
                            >
                                {label}
                            </Link>
                        ))}
                        {/* Mobile Products Dropdown (single item) */}
                        <MobileProductsMenu productsMenu={productsMenu} />
                        {/* FAQ, Contact */}
                        {staticNav.slice(3).map(({ label, path }) => (
                            <Link
                                key={label}
                                href={path}
                                onClick={() => setIsOpen(false)}
                                className={`relative text-center font-semibold tracking-wide px-4 py-3 text-lg transition-all duration-300 ease-in-out
                                    text-[#23272f] hover:text-[#e63946] focus:text-[#e63946] focus:outline-none
                                    ${pathname === path
                                        ? 'text-[#e63946] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[3px] after:w-8 after:bg-gradient-to-r after:from-[#e63946] after:to-[#808080] after:rounded-full after:shadow-lg'
                                        : 'after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-8 hover:after:bg-[#e63946]/70 hover:after:rounded-full hover:after:shadow-lg after:transition-all after:duration-300'}
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

// Desktop dropdown for Oil & Gas and ICC Certified
function DropdownDesktop({ label, items, openOnHover }) {
    const [open, setOpen] = React.useState(false);
    let closeTimeout = null;
    // Handlers to keep dropdown open when mouse is over button or dropdown
    const handleMouseEnter = () => {
        if (closeTimeout) clearTimeout(closeTimeout);
        setOpen(true);
    };
    const handleMouseLeave = () => {
        closeTimeout = setTimeout(() => setOpen(false), 120);
    };
    return (
        <div className="relative"
            onMouseEnter={openOnHover ? handleMouseEnter : undefined}
            onMouseLeave={openOnHover ? handleMouseLeave : undefined}
        >
            <button
                className="w-full text-left px-4 py-2 font-semibold text-[#23272f] hover:text-[#e63946] focus:text-[#e63946] focus:outline-none transition-all duration-300"
                onClick={!openOnHover ? () => setOpen((v) => !v) : undefined}
                aria-haspopup="true"
                aria-expanded={open}
            >
                {label}
            </button>
            {open && (
                <div className="absolute left-0 top-full min-w-[220px] max-w-[90vw] bg-white shadow-xl rounded-xl border border-[#e0e0e0]/40 transition-all duration-300 z-40">
                    <ul className="py-2">
                        {items.map((sub) => (
                            <li key={sub.label}>
                                <Link href={sub.path} className="block px-4 py-2 text-[#23272f] hover:text-[#e63946] text-[15px]">{sub.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

// Mobile dropdown for products
function MobileProductsMenu({ productsMenu }) {
    const [productsOpen, setProductsOpen] = React.useState(false);
    const [openIdx, setOpenIdx] = React.useState(null);
    return (
        <div className="w-full">
            <button
                className={`w-full text-left font-semibold px-4 py-3 text-lg rounded-xl bg-gradient-to-r from-[#f9f9f9] to-[#eaeaea] shadow hover:bg-[#ffcc33]/10 text-[#23272f] focus:outline-none transition-all duration-300 mb-2 flex items-center justify-center gap-2 ${productsOpen ? 'border-l-4 border-[#e63946] bg-[#fff6f6]' : ''}`}
                onClick={() => setProductsOpen((v) => !v)}
                aria-expanded={productsOpen}
            >
                Products
                <span className={`transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {productsOpen && (
                <ul className="pl-2 py-2 animate-fadeIn">
                    {productsMenu.map((item, idx) => (
                        <li key={item.label} className="mb-1">
                            <button
                                className={`w-full text-left font-semibold px-3 py-2 text-[16px] rounded bg-gradient-to-r from-[#f9f9f9] to-[#eaeaea] hover:bg-[#ffcc33]/10 text-[#23272f] focus:outline-none transition-all duration-300 flex items-center justify-between ${openIdx === idx ? 'border-l-4 border-[#e63946] bg-[#fff6f6]' : ''}`}
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                aria-expanded={openIdx === idx}
                            >
                                {item.label}
                                <span className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}>▼</span>
                            </button>
                            {openIdx === idx && (
                                <ul className="ml-4 py-1 animate-fadeIn">
                                    {item.items.map((sub) => (
                                        <li key={sub.label}>
                                            <Link href={sub.path} className="block py-1 text-[#23272f] hover:text-[#e63946] text-[15px]">{sub.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <li className="mt-2">
                        <Link href="/products" className="block font-semibold px-3 py-2 text-[#23272f] hover:text-[#e63946] text-[16px] rounded bg-gradient-to-r from-[#f9f9f9] to-[#eaeaea]">Industrial Products</Link>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Navbar;