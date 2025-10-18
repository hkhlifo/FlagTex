"use client";

// ...existing code...

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import { products, productCategories } from './products-data';




// Sidebar navigation sections (only industrial products)
const SIDEBAR_SECTIONS = [
    ...productCategories.map(cat => ({
        id: cat.replace(/[^a-z0-9]/gi, '-'),
        label: cat,
        icon: null,
        isMain: false
    }))
];

// Floating Sidebar (desktop only)
const ProductSidebar = ({ activeId, onNav }) => {
    // Sidebar expands on hover using state
    const [expanded, setExpanded] = React.useState(false);
    return (
        <aside
            className={`hidden lg:flex flex-col fixed top-24 right-0 z-50 h-[70vh] transition-all duration-300 ${expanded ? 'w-72' : 'w-10'}`}
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
            style={{ minWidth: expanded ? '288px' : '40px', maxWidth: '320px' }}
        >
            <div
                className="h-full flex flex-col bg-white/70 backdrop-blur-xl border-l-4 border-[#ffcc33] rounded-l-2xl shadow-xl overflow-hidden relative transition-all duration-300"
                style={{ width: '100%' }}
            >
                {/* Tab for Quick Navigate */}
                {!expanded && (
                    <div className="absolute -left-12 top-1/2 -translate-y-1/2 bg-[#ffcc33] text-[#23272f] font-bold px-3 py-2 rounded-l-xl shadow-lg cursor-pointer select-none text-sm tracking-wide transition-all duration-300" style={{ writingMode: 'vertical-rl', letterSpacing: '0.04em' }}>
                        Quick Navigate
                    </div>
                )}
                <div className={`flex-1 flex flex-col items-center w-full transition-all duration-300 ${expanded ? 'items-stretch' : ''}`}>
                    <div className={`font-bold text-lg text-[#f6d500] mb-2 mt-4 select-none px-6 transition-all duration-300 ${expanded ? 'opacity-100' : 'opacity-0'}`}>Quick Navigate</div>
                    <nav className={`flex-1 overflow-y-auto custom-scrollbar pr-1 px-4 transition-all duration-300 ${expanded ? 'opacity-100' : 'opacity-0'}`}
                        style={{ maxHeight: 'calc(70vh - 3.5rem)', minHeight: 0 }}>
                        {/* Oil and gas piping products heading */}
                        {/* <div className="font-semibold text-base text-[#000] mb-2 mt-2">Oil and gas piping products</div> */}
                        {/* {SIDEBAR_SECTIONS.filter(sec => sec.isMain).map((sec) => (
                            <button
                                key={sec.id}
                                onClick={() => onNav(sec.id)}
                                className={`w-full text-left px-3 py-2 rounded-md font-medium transition-all duration-200 mb-1
                                    ${activeId === sec.id
                                        ? 'bg-[#ffcc33]/20 text-black shadow border-l-4 border-[#ffcc33]'
                                        : 'text-gray-800 hover:bg-[#ffcc33]/10 hover:text-[#ffcc33]'}
                                `}
                                style={{ outline: 'none', fontSize: '1rem' }}
                            >
                                {sec.label}
                            </button>
                        ))} */}
                        {/* Industrial products heading */}
                        <div className="font-semibold text-base text-[#000] mb-2 mt-4">Industrial products</div>
                        {SIDEBAR_SECTIONS.filter(sec => !sec.isMain).map((sec) => (
                            <button
                                key={sec.id}
                                onClick={() => onNav(sec.id)}
                                className={`w-full text-left px-3 py-2 rounded-md font-medium transition-all duration-200 mb-1
                                    ${activeId === sec.id
                                        ? 'bg-[#ffcc33]/20 text-black shadow border-l-4 border-[#ffcc33]'
                                        : 'text-gray-800 hover:bg-[#ffcc33]/10 hover:text-[#ffcc33]'}
                                `}
                                style={{ outline: 'none', fontSize: '1rem' }}
                            >
                                {sec.label}
                            </button>
                        ))}
                    </nav>
                </div>
                <style jsx>{`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 6px;
                        background: transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: #ffcc33aa;
                        border-radius: 6px;
                    }
                `}</style>
            </div>
        </aside>
    );
};


// Mobile Quick Navigate FAB and Bottom Sheet
const MobileQuickNavigate = ({ sections, onNav }) => {
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
        if (!open) return;
        // Prevent background scroll when sheet is open
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, [open]);
    return (
        <>
            {/* FAB button */}
            <button
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#ffcc33] to-[#ffb347] text-[#23272f] shadow-xl rounded-full p-4 flex items-center justify-center md:hidden focus:outline-none hover:scale-105 transition-all duration-300"
                aria-label="Quick Navigate"
                onClick={() => setOpen(true)}
            >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </button>
            {/* Bottom Sheet */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-end md:hidden">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
                    {/* Sheet */}
                    <div className="relative w-full rounded-t-3xl bg-white/90 backdrop-blur-xl border-t-4 border-[#ffcc33] shadow-2xl p-6 pb-10 animate-slideUp">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-lg text-[#ffcc33] tracking-wide">Quick Navigate</span>
                            <button className="text-2xl text-[#23272f] font-bold px-2" onClick={() => setOpen(false)} aria-label="Close">&times;</button>
                        </div>
                        <nav className="flex flex-col gap-2 max-h-[50vh] overflow-y-auto custom-scrollbar">
                            {/* Oil and gas piping products heading */}
                            {/* <div className="font-semibold text-base text-[#000] mb-2 mt-2">Oil and gas piping products</div> */}
                            {/* {sections.filter(sec => sec.isMain).map(sec => (
                                <button
                                    key={sec.id}
                                    onClick={() => {
                                        setOpen(false);
                                        setTimeout(() => onNav(sec.id), 200);
                                    }}
                                    className="w-full text-left px-4 py-4 rounded-xl font-semibold text-base bg-[#23272f]/5 hover:bg-[#ffcc33]/10 text-[#23272f] border border-[#ffcc33]/10 shadow-sm transition-all duration-200"
                                >
                                    {sec.label}
                                </button>
                            ))} */}
                            {/* Industrial products heading */}
                            <div className="font-semibold text-base text-[#000] mb-2 mt-4">Industrial products</div>
                            {sections.filter(sec => !sec.isMain).map(sec => (
                                <button
                                    key={sec.id}
                                    onClick={() => {
                                        setOpen(false);
                                        setTimeout(() => onNav(sec.id), 200);
                                    }}
                                    className="w-full text-left px-4 py-4 rounded-xl font-semibold text-base bg-[#23272f]/5 hover:bg-[#ffcc33]/10 text-[#23272f] border border-[#ffcc33]/10 shadow-sm transition-all duration-200"
                                >
                                    {sec.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <style jsx>{`
                        .animate-slideUp { animation: slideUpSheet 0.32s cubic-bezier(.4,0,.2,1); }
                        @keyframes slideUpSheet {
                            from { transform: translateY(100%); opacity: 0; }
                            to { transform: translateY(0); opacity: 1; }
                        }
                    `}</style>
                </div>
            )}
        </>
    );
};
const ProductCard = ({ product, onViewDetails }) => (
    <Fade triggerOnce cascade damping={0.10}>
        <div className="group bg-white/90 rounded-2xl shadow-lg border border-white/40 p-6 flex flex-col h-full overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#ffcc33] relative">
            {/* ICC Certificate Tag */}
            {/* {(() => {
                const iccProducts = [
                    'Float',
                    'Furring nails',
                    'J-metal',
                    'Roofing nails',
                    'Stucco netting'
                ];
                // Case-insensitive match for product.name
                if (iccProducts.some(name => product.name && product.name.toLowerCase().includes(name.toLowerCase()))) {
                    return (
                        <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-[#ffd700] via-[#ffcc33] to-[#ffb347] text-[#23272f] text-[0.75rem] font-bold shadow-lg border border-[#ffcc33] animate-pulse flex items-center gap-1" style={{ letterSpacing: '0.04em' }}>
                            <svg className="w-4 h-4 mr-1 text-[#b88c00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            ICC Certified
                        </span>
                    );
                }
                return null;
            })()} */}
            <div className="aspect-[4/3] w-full mb-4 rounded-xl overflow-hidden bg-[#f6f6f6] flex items-center justify-center">
                <img
                    src={product.image && !product.image.startsWith('data:image/') ? product.image : '/placeholder.svg'}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#23272f] tracking-tight group-hover:text-[#ffcc33] transition-colors duration-300">{product.name}</h3>
            <p className="text-[#23272f]/80 text-sm mb-4 line-clamp-3 font-medium group-hover:text-[#23272f] transition-colors duration-300">{product.description}</p>
            <div className="mt-auto flex flex-col items-end gap-2">
                <span className="self-start px-3 py-1 rounded-full bg-[#23272f]/5 text-[#b88c00] text-xs font-semibold tracking-wide mb-2 group-hover:bg-[#ffcc33]/10 transition">
                    {product.category}
                </span>
                <button
                    onClick={() => onViewDetails(product)}
                    className="cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-[#1e293b] to-[#23272f] border border-[#ffcc33] text-[#ffcc33] font-semibold py-2 px-6 rounded-full hover:from-[#23272f] hover:to-[#1e293b] hover:bg-[#23272f]/80 hover:text-white transition-all duration-300 tracking-wide shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ffcc33] text-base"
                >
                    <svg className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m6 0l-3-3m3 3l-3 3" /></svg>
                    <span className="uppercase text-sm tracking-widest">View Details</span>
                </button>
            </div>
        </div>
    </Fade>
);

// Premium Modal for Product Details (Glassmorphism, Responsive, Carousel, Iconic)
const icons = {
    features: (
        <svg className="inline w-5 h-5 mr-1 text-[#ffcc33]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
    ),
    applications: (
        <svg className="inline w-5 h-5 mr-1 text-[#6ee7b7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg>
    ),
    related: (
        <svg className="inline w-5 h-5 mr-1 text-[#60a5fa]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /></svg>
    ),
};

const ProductModal = ({ product, onClose }) => {
    const [imgIdx, setImgIdx] = React.useState(0);
    React.useEffect(() => {
        if (!product) return;
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose, product]);
    if (!product) return null;
    const images = (product.images || []).filter(img => img && !img.startsWith('data:image/'));
    const mainImg = images[imgIdx] || (product.image && !product.image.startsWith('data:image/') ? product.image : '/placeholder.svg');

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-[4px] px-0 sm:px-2 md:px-0" onClick={onClose}>
            <div
                className="relative w-full max-w-4xl h-[100dvh] sm:h-auto max-h-[100dvh] flex flex-col md:flex-row bg-gradient-to-br from-[#181818]/90 to-[#23272f]/90 rounded-none sm:rounded-3xl shadow-2xl border border-white/20 overflow-hidden animate-fadeIn"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button (sticky for mobile) */}
                <button
                    onClick={onClose}
                    className="fixed md:absolute cursor-pointer top-4 right-4 z-20 bg-white/10 hover:bg-[#ffcc33]/80 text-white hover:text-[#181818] rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ffcc33] transition backdrop-blur"
                    aria-label="Close"
                    style={{ boxShadow: '0 4px 24px 0 #0008' }}
                >
                    ×
                </button>
                {/* Image Carousel */}
                <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-[#23272f] to-[#181818] p-3 sm:p-6 md:p-10 min-w-[0] max-w-full md:max-w-[420px] max-h-[40vh] sm:max-h-none">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center mb-4 shadow-xl bg-[#181818]">
                        <img
                            src={mainImg}
                            alt={product.name}
                            className="object-contain w-full h-full drop-shadow-xl transition-all duration-300"
                            style={{ maxHeight: '30vh', minHeight: 120 }}
                        />
                        {images.length > 1 && (
                            <>
                                <button
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#ffcc33]/80 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow focus:outline-none"
                                    onClick={() => setImgIdx((imgIdx - 1 + images.length) % images.length)}
                                    aria-label="Previous image"
                                >&#8592;</button>
                                <button
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#ffcc33]/80 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow focus:outline-none"
                                    onClick={() => setImgIdx((imgIdx + 1) % images.length)}
                                    aria-label="Next image"
                                >&#8594;</button>
                            </>
                        )}
                    </div>
                    {images.length > 1 && (
                        <div className="flex gap-2 mt-2 justify-center flex-wrap">
                            {images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt="Gallery"
                                    className={`w-10 h-10 object-cover rounded border-2 ${imgIdx === idx ? 'border-[#ffcc33] scale-110' : 'border-white/20'} bg-[#222] cursor-pointer transition`}
                                    onClick={() => setImgIdx(idx)}
                                />
                            ))}
                        </div>
                    )}
                </div>
                {/* Info Section (scrollable) */}
                <div className="flex-1 flex flex-col p-3 sm:p-6 md:p-10 min-w-[0] max-h-[60vh] sm:max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#ffcc33]/30 scrollbar-track-transparent">
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-1 text-white drop-shadow-lg tracking-tight leading-tight">{product.name}</h2>
                    <p className="text-[#ffcc33] font-semibold mb-3 text-base md:text-lg">{product.category}</p>
                    <p className="text-white/90 mb-4 whitespace-pre-line text-sm md:text-base leading-relaxed" style={{ fontFamily: 'inherit' }}>{product.longDescription || product.description}</p>
                    {product.features && product.features.length > 0 && (
                        <div className="mb-3">
                            <h4 className="font-semibold text-white mb-1 flex items-center">{icons.features} Features</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 text-white/80 text-sm space-y-1 pl-2">
                                {product.features.map((f, i) => <li key={i} className="mb-1 before:content-['•'] before:mr-2 before:text-[#ffcc33]">{f}</li>)}
                            </ul>
                        </div>
                    )}
                    {product.applications && product.applications.length > 0 && (
                        <div className="mb-3">
                            <h4 className="font-semibold text-white mb-1 flex items-center">{icons.applications} Applications</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 text-white/80 text-sm space-y-1 pl-2">
                                {product.applications.map((a, i) => <li key={i} className="mb-1 before:content-['•'] before:mr-2 before:text-[#6ee7b7]">{a}</li>)}
                            </ul>
                        </div>
                    )}
                    {product.relatedProducts && product.relatedProducts.length > 0 && (
                        <div className="mb-3">
                            <h4 className="font-semibold text-white mb-1 flex items-center">{icons.related} Related Products</h4>
                            <div className="flex flex-wrap gap-2">
                                {product.relatedProducts.map((rp, i) => (
                                    <span key={i} className="inline-block bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs font-medium border border-[#60a5fa]/30 hover:bg-[#60a5fa]/20 transition">
                                        {rp.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
const ProductPage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeSection, setActiveSection] = useState('');
    const [lastScroll, setLastScroll] = useState(0);

    // Scroll spy for sidebar
    useEffect(() => {
        const handler = () => {
            let found = '';
            for (const sec of SIDEBAR_SECTIONS) {
                const el = document.getElementById(sec.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight / 2) found = sec.id;
                }
            }
            setActiveSection(found);
        };
        window.addEventListener('scroll', handler, { passive: true });
        handler();
        return () => window.removeEventListener('scroll', handler);
    }, []);

    // Sidebar nav click
    const handleSidebarNav = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // View details with scroll position
    const handleViewDetails = (product) => {
        setLastScroll(window.scrollY);
        setSelectedProduct(product);
    };
    const handleCloseModal = () => setSelectedProduct(null);

    // Floating back button for modal
    const BackToProductsBtn = () => (
        <button
            onClick={() => {
                setSelectedProduct(null);
                setTimeout(() => window.scrollTo({ top: lastScroll, behavior: 'smooth' }), 50);
            }}
            className="fixed bottom-8 right-8 z-[100] bg-gradient-to-r from-[#ffcc33] to-[#ffb347] text-[#23272f] font-bold px-6 py-3 rounded-full shadow-2xl border-2 border-[#ffcc33] hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(255,204,51,0.20)] transition-all duration-300 text-lg flex items-center gap-2"
            style={{ boxShadow: '0 4px 24px 0 #ffcc3340' }}
        >
            <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to Products
        </button>
    );

    return (
        <main className="relative bg-[#0f0f0f] text-white font-[Montserrat] scroll-smooth min-h-screen overflow-x-hidden">
            {/* Floating Sidebar (desktop only) */}
            <ProductSidebar activeId={activeSection} onNav={handleSidebarNav} />
            {/* Mobile Quick Navigate FAB and Sheet */}
            <MobileQuickNavigate sections={SIDEBAR_SECTIONS} onNav={handleSidebarNav} />
            {/* Industrial Products Hero Section */}
            <section className="pt-24 pb-6 px-6 md:px-12 text-center">
                <div className="inline-flex items-center gap-3 mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#ffcc33]/20 via-[#ffb347]/10 to-transparent border border-[#ffcc33]/30 shadow-lg mx-auto mb-4 animate-fadeIn">
                    <span className="text-[#ffcc33] font-bold text-base tracking-widest uppercase">Industrial Products</span>
                    <span className="w-2 h-2 rounded-full bg-[#ffcc33] animate-pulse"></span>
                </div>
                <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-2 drop-shadow-xl text-white">
                    Powering Industry. Elevating Performance.
                </h1>
                <div className="flex justify-center items-center gap-2 m-2">
                    <span className="w-6 h-[1px] bg-white/20"></span>
                    <span className="text-white/40 text-xl font-bold tracking-widest">{'{'}</span>
                    <span className="w-2 h-[1px] bg-white/40"></span>
                    <span className="text-white text-sm font-bold">FLANGTEX</span>
                    <span className="w-2 h-[1px] bg-white/40"></span>
                    <span className="text-white/40 text-xl font-bold tracking-widest">{'}'}</span>
                    <span className="w-6 h-[1px] bg-white/20"></span>
                </div>
                <p className="text-[#CCCCCC] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-center mt-6">
                    Discover our premium range of industrial products—engineered for reliability, safety, and performance in every application.
                </p>
            </section>
            {/* Removed main products carousel section */}

            {/* Product Categories */}
            {productCategories.map((cat) => {
                const catProducts = products.filter((p) => p.category === cat);
                if (!catProducts.length) return null;
                return (
                    <section key={cat} className="px-4 md:px-12 py-10 max-w-7xl mx-auto transition-all duration-300" id={cat.replace(/[^a-z0-9]/gi, '-')}>
                        <Fade triggerOnce direction="up">
                            <div className="flex items-center gap-3 mb-6 mt-2">
                                <div className="w-2 h-8 bg-[#ffcc33] rounded-full" />
                                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow-sm">
                                    {cat}
                                </h2>
                            </div>
                        </Fade>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12 max-w-7xl mx-auto px-2 md:px-0 py-2">
                            {catProducts.map((product) => (
                                <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />
                            ))}
                        </div>
                        <div className="bg-[#0f0f0f] flex justify-center py-6">
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
                        </div>

                    </section>
                );
            })}
            <ProductModal product={selectedProduct} onClose={handleCloseModal} />
            {/* Custom scrollbar styles for modal */}
            <style jsx global>{`
                            .scrollbar-thin::-webkit-scrollbar {
                                width: 8px;
                                background: transparent;
                            }
                            .scrollbar-thin::-webkit-scrollbar-thumb {
                                background: linear-gradient(135deg, #ffcc33 60%, #ffb347 100%);
                                border-radius: 8px;
                                box-shadow: 0 2px 8px #ffcc3340;
                                border: 2px solid #23272f;
                            }
                            .scrollbar-thin::-webkit-scrollbar-track {
                                background: transparent;
                            }
                            .scrollbar-thin {
                                scrollbar-width: thin;
                                scrollbar-color: #ffcc33 #23272f;
                            }
                        `}</style>
        </main>
    );
};

export default ProductPage;