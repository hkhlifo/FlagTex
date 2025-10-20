'use client';

import { FaWhatsapp } from 'react-icons/fa';

const Whats = () => {
    return (
        <a
            href="https://wa.me/14694512724"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-105 hover:shadow-[0_0_20px_#25D366] transition-all duration-300 animate-bounce group"
        >
            {/* Tooltip */}
            <span className="absolute left-full mr-3 top-1/2 -translate-y-1/2 bg-[#23272f] text-white text-xs px-3 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Chat with FlangTex
            </span>

            {/* WhatsApp Icon */}
            <FaWhatsapp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </a>
    );
};

export default Whats;