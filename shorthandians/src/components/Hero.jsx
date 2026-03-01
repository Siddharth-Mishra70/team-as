import { useState, useEffect } from 'react';

const words = ['Stenographers', 'Professionals', 'Leaders'];

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [typing, setTyping] = useState(true);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout;
        if (typing) {
            if (charIndex < currentWord.length) {
                timeout = setTimeout(() => {
                    setDisplayed(currentWord.slice(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                }, 80);
            } else {
                timeout = setTimeout(() => setTyping(false), 1800);
            }
        } else {
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    setDisplayed(currentWord.slice(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                }, 45);
            } else {
                setWordIndex((wordIndex + 1) % words.length);
                setTyping(true);
            }
        }
        return () => clearTimeout(timeout);
    }, [charIndex, typing, wordIndex]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero-gradient min-h-screen flex items-center pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 text-sm font-semibold text-blue-700">
                            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                            10+ Years of Excellence
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                            Best Shorthand<br />
                            <span className="text-blue-600">Coaching</span> in<br />
                            Prayagraj
                        </h1>

                        <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
                            Shaping future{' '}
                            <span className="text-blue-600 font-bold typing-cursor">{displayed}</span>
                            <br />
                            10+ years of excellence in preparing stenographers for Civil Courts, High Courts, SSC and various government departments.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <button id="hero-practice-btn" onClick={() => scrollTo('practice')} className="btn-primary text-base px-8 py-3">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Start Practice
                            </button>
                            <button id="hero-courses-btn" onClick={() => scrollTo('courses')} className="btn-outline text-base px-8 py-3">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                View Courses
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            {['Govt. Certified', 'Offline Classes', 'Daily Practice'].map((b) => (
                                <div key={b} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {b}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg">
                            {/* Main card */}
                            <div className="bg-white rounded-3xl shadow-2xl shadow-blue-100 p-8 border border-blue-50">
                                {/* Classroom Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm">Live Classroom Session</p>
                                        <p className="text-xs text-gray-500">Shorthandians Institute</p>
                                    </div>
                                    <div className="ml-auto flex items-center gap-1.5">
                                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                                        <span className="text-xs font-semibold text-red-500">LIVE</span>
                                    </div>
                                </div>

                                {/* Shorthand symbols display */}
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 text-center">
                                    <p className="text-5xl font-black text-blue-700 tracking-wider mb-2" style={{ fontFamily: 'serif' }}>
                                        ∫∑∂π≈
                                    </p>
                                    <p className="text-xs text-gray-500 font-medium">Shorthand Practice — Speed Building</p>
                                </div>

                                {/* Stats row */}
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { label: 'Speed', value: '72 WPM', icon: '⚡', color: 'text-blue-600' },
                                        { label: 'Accuracy', value: '94%', icon: '🎯', color: 'text-green-600' },
                                        { label: 'Duration', value: '10 Min', icon: '⏱', color: 'text-purple-600' },
                                    ].map((s) => (
                                        <div key={s.label} className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
                                            <p className="text-lg mb-0.5">{s.icon}</p>
                                            <p className={`font-bold text-sm ${s.color}`}>{s.value}</p>
                                            <p className="text-xs text-gray-400">{s.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 text-xs font-black px-3 py-1.5 rounded-full shadow-lg">
                                🏆 200+ Selections
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                                ✓ Batch Available
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
