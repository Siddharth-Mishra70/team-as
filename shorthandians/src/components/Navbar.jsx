import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Home', 'About', 'Courses', 'Practice', 'Success', 'Contact'];

    const scrollTo = (id) => {
        const el = document.getElementById(id.toLowerCase());
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg shadow-blue-50' : 'bg-white/95 backdrop-blur-md'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-18">
                    {/* Logo */}
                    <button onClick={() => scrollTo('home')} className="flex items-center gap-2 cursor-pointer">
                        <div className="w-9 h-9 rounded-lg blue-gradient flex items-center justify-center shadow-md">
                            <span className="text-white font-black text-sm">S</span>
                        </div>
                        <span className="text-xl font-black text-gray-900">
                            Shorthand<span className="text-blue-600">ians</span>
                        </span>
                    </button>

                    {/* Desktop Nav Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link}
                                onClick={() => scrollTo(link)}
                                className="nav-link text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200 cursor-pointer"
                            >
                                {link}
                            </button>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button className="btn-outline text-sm py-2 px-5">
                            Login
                        </button>
                        <button onClick={() => scrollTo('contact')} className="btn-primary text-sm py-2 px-5">
                            Join Now
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-blue-50 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
                    <div className="px-4 pt-2 pb-4 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link}
                                onClick={() => scrollTo(link)}
                                className="text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors"
                            >
                                {link}
                            </button>
                        ))}
                        <div className="flex gap-3 mt-3 pt-3 border-t border-gray-100">
                            <button className="btn-outline flex-1 text-sm py-2 justify-center">Login</button>
                            <button onClick={() => scrollTo('contact')} className="btn-primary flex-1 text-sm py-2 justify-center">Join Now</button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
