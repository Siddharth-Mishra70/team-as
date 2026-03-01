export default function About() {
    return (
        <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* Left — Visual */}
                    <div className="relative">
                        <div className="bg-white rounded-3xl shadow-xl shadow-blue-100 p-8 border border-blue-50">
                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { label: 'Founded', value: '2014', icon: '🏫', color: 'text-blue-600 bg-blue-50' },
                                    { label: 'Students', value: '1000+', icon: '👥', color: 'text-green-600 bg-green-50' },
                                    { label: 'Govt. Jobs', value: '200+', icon: '🏛️', color: 'text-purple-600 bg-purple-50' },
                                    { label: 'Success Rate', value: '95%', icon: '🎯', color: 'text-orange-600 bg-orange-50' },
                                ].map((s) => (
                                    <div key={s.label} className={`rounded-2xl p-5 ${s.color.split(' ')[1]}`}>
                                        <p className="text-2xl mb-1">{s.icon}</p>
                                        <p className={`text-2xl font-black ${s.color.split(' ')[0]}`}>{s.value}</p>
                                        <p className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                            {/* Banner */}
                            <div className="blue-gradient rounded-2xl p-5 text-white text-center">
                                <p className="font-black text-lg">Shorthandians Institute</p>
                                <p className="text-white/70 text-sm mt-1">Prayagraj, Uttar Pradesh</p>
                                <p className="text-yellow-300 font-semibold text-sm mt-2">⭐ Master Shorthand. Secure Your Career.</p>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                            <p className="text-2xl text-center">🏆</p>
                            <p className="text-xs font-black text-gray-800 text-center">Top Institute</p>
                            <p className="text-xs text-gray-500 text-center">Prayagraj</p>
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div>
                        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                            About <span className="text-blue-600">Shorthandians</span>
                        </h2>

                        <p className="text-gray-600 text-base leading-relaxed mb-6">
                            Shorthandians is a leading shorthand coaching institute in Prayagraj with over <strong>10 years of experience</strong> in training stenographers for Civil Courts, High Courts, SSC and government departments. We provide structured classroom training along with online practice support.
                        </p>

                        <p className="text-gray-600 text-base leading-relaxed mb-8">
                            Our mission is to equip every student with the speed, accuracy, and confidence needed to succeed in the most competitive government stenographer examinations in India. With <strong>200+ successful selections</strong>, we have established ourselves as a trusted institution for aspiring stenographers.
                        </p>

                        {/* Key Points */}
                        <div className="space-y-3">
                            {[
                                'Experienced faculty with years of competitive exam knowledge',
                                'Structured curriculum aligned with exam syllabi',
                                'Regular mock tests and performance tracking',
                                'Personal attention in small batch classroom settings',
                            ].map((point, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
