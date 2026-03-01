const offlineFeatures = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'Small Batch Size',
        desc: 'Limited students per batch to ensure each one receives dedicated time and attention from the faculty.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        title: 'Personal Attention',
        desc: 'Faculty tracks each student individually and provides customized tips for improving speed and accuracy.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: 'Regular Mock Tests',
        desc: 'Conducted under real exam conditions to help students adapt to time pressure and develop exam temperament.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        title: 'Experienced Faculty',
        desc: 'Learn from instructors who have years of experience in shorthand training and competitive exam coaching.',
    },
];

export default function OfflineCoaching() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* Left Content */}
                    <div>
                        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Classroom Training</p>
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-5 leading-tight">
                            Offline Classroom<br />
                            <span className="text-blue-600">Coaching Available</span>
                        </h2>
                        <p className="text-gray-600 text-base leading-relaxed mb-8">
                            Our state-of-the-art classroom at Tagore Town, Prayagraj offers an ideal learning environment. Join our structured offline batches designed for serious stenography aspirants.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {offlineFeatures.map((f, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                                        {f.icon}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm mb-1">{f.title}</p>
                                        <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <button
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                className="btn-primary"
                            >
                                Join a Batch
                            </button>
                            <a href="tel:7080811235" className="btn-outline">
                                📞 Call Now
                            </a>
                        </div>
                    </div>

                    {/* Right — Visual Card */}
                    <div>
                        <div className="blue-gradient rounded-3xl p-10 text-white relative overflow-hidden">
                            {/* Background circles */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative z-10 space-y-6">
                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Institute Address</p>
                                        <p className="text-white/70 text-xs mt-1 leading-relaxed">
                                            98/25/33 LIC Colony Tagore Town,<br />
                                            Prayagraj, Uttar Pradesh - 211002
                                        </p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-white/20"></div>

                                {/* Timings */}
                                <div>
                                    <p className="font-bold text-sm mb-3">Batch Timings</p>
                                    <div className="space-y-2">
                                        {[
                                            { time: 'Morning Batch', hours: '7:00 AM – 9:00 AM' },
                                            { time: 'Evening Batch', hours: '5:00 PM – 7:00 PM' },
                                            { time: 'Weekend Special', hours: 'Sat & Sun — 8:00 AM' },
                                        ].map((t) => (
                                            <div key={t.time} className="flex justify-between items-center bg-white/10 rounded-xl px-4 py-2.5">
                                                <span className="text-xs text-white/80">{t.time}</span>
                                                <span className="text-xs font-semibold text-yellow-300">{t.hours}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-white/20"></div>

                                {/* Contact */}
                                <a href="tel:7080811235" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-5 py-3">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="font-bold text-sm">+91 7080811235</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
