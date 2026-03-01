export default function CTA() {
    return (
        <section className="py-20 blue-gradient">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-5 py-2 text-sm font-semibold text-white mb-6">
                        <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                        Admissions Open — 2026 Batches
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
                        Ready to Start Your<br />
                        Stenographer Career?
                    </h2>

                    <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        Join Shorthandians today and take the first step toward securing your government career. Expert guidance, daily practice, and a proven track record of 200+ selections await you.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            id="cta-join-btn"
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="btn-white text-base px-10 py-3.5"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                            Join Now
                        </button>
                        <button
                            id="cta-contact-btn"
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="btn-white-outline text-base px-10 py-3.5"
                        >
                            Contact Us
                        </button>
                    </div>

                    {/* Trust row */}
                    <div className="flex flex-wrap justify-center gap-8 mt-12">
                        {[
                            { label: '10+ Years', sub: 'Trusted Experience' },
                            { label: '200+ Jobs', sub: 'Government Placements' },
                            { label: '1000+', sub: 'Students Trained' },
                        ].map((t) => (
                            <div key={t.label} className="text-center">
                                <p className="text-2xl font-black text-white">{t.label}</p>
                                <p className="text-sm text-white/60 font-medium">{t.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
