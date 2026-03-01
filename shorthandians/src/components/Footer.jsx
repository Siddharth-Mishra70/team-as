export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Courses', id: 'courses' },
        { label: 'Practice', id: 'practice' },
        { label: 'Success Stories', id: 'success' },
        { label: 'Contact', id: 'contact' },
    ];

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-lg blue-gradient flex items-center justify-center shadow-md">
                                <span className="text-white font-black text-sm">S</span>
                            </div>
                            <span className="text-xl font-black text-white">
                                Shorthand<span className="text-blue-400">ians</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400 mb-5">
                            Master Shorthand. Secure Your Government Career. Prayagraj's most trusted shorthand coaching institute for 10+ years.
                        </p>
                        {/* Social */}
                        <div className="flex gap-3">
                            <a
                                href="https://www.youtube.com/@shorthandiansgotit1007"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="YouTube"
                            >
                                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/917080811235"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="WhatsApp"
                            >
                                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </a>
                            <a
                                href="mailto:ayushpandey3666@gmail.com"
                                className="w-9 h-9 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Email"
                            >
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((l) => (
                                <li key={l.id}>
                                    <button
                                        onClick={() => scrollTo(l.id)}
                                        className="text-gray-400 hover:text-blue-400 text-sm transition-colors text-left cursor-pointer flex items-center gap-2"
                                    >
                                        <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                        {l.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Courses</h4>
                        <ul className="space-y-3">
                            {[
                                'Kailash Chandra Vol. 3',
                                'Kailash Chandra Vol. 20',
                                'Rajasthan Civil Court',
                                'Gujarat HighCourt Steno',
                                'UP Civil Court Prep',
                                'SSC Stenographer',
                            ].map((c) => (
                                <li key={c}>
                                    <button
                                        onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
                                        className="text-gray-400 hover:text-blue-400 text-sm transition-colors text-left cursor-pointer flex items-center gap-2"
                                    >
                                        <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                        {c}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Contact Info</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    98/25/33 LIC Colony Tagore Town,<br />
                                    Prayagraj, UP - 211002
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:7080811235" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">+91 7080811235</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:ayushpandey3666@gmail.com" className="text-gray-400 hover:text-blue-400 text-sm transition-colors break-all">ayushpandey3666@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-4 h-4 text-red-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                <a
                                    href="https://www.youtube.com/@shorthandiansgotit1007"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-400 hover:text-red-400 text-sm transition-colors"
                                >
                                    @shorthandiansgotit1007
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-gray-500 text-sm text-center">
                        © {currentYear} <span className="text-white font-semibold">Shorthandians</span>. All Rights Reserved.
                    </p>
                    <p className="text-gray-600 text-xs text-center">
                        Master Shorthand. Secure Your Government Career.
                    </p>
                </div>
            </div>
        </footer>
    );
}
