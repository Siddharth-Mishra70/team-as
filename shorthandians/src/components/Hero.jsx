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

                        {/* Google Review Badge */}
                        <div onClick={() => scrollTo('reviews')} className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm mt-4 w-max cursor-pointer hover:shadow-md transition-shadow relative top-2">
                            <div className="bg-gray-50 p-1.5 rounded-full">
                                <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                                        <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                                        <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.369 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                                        <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                                        <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.109 -17.884 43.989 -14.754 43.989 Z" />
                                    </g>
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1.5 leading-none">
                                    <span className="font-extrabold text-gray-900 text-lg">4.9</span>
                                    <div className="text-yellow-500 text-[16px] tracking-widest pt-0.5">★★★★★</div>
                                </div>
                                <span className="text-sm text-gray-500 font-medium">Based on 120+ reviews</span>
                            </div>
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
