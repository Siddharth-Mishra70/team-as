import { useState } from 'react';

const metrics = [
    { label: 'Speed', value: 72, unit: 'WPM', icon: '⚡', max: 120, color: '#2563eb', bg: 'rgba(37,99,235,0.15)' },
    { label: 'Accuracy', value: 94, unit: '%', icon: '🎯', max: 100, color: '#16a34a', bg: 'rgba(22,163,74,0.15)' },
    { label: 'Duration', value: 10, unit: 'Min', icon: '⏱', max: 30, color: '#9333ea', bg: 'rgba(147,51,234,0.15)' },
];

function RadialProgress({ value, max, color, size = 100, strokeWidth = 10 }) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = (value / max) * circumference;
    const center = size / 2;

    return (
        <svg width={size} height={size} className="-rotate-90">
            <circle cx={center} cy={center} r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={strokeWidth} />
            <circle
                cx={center} cy={center} r={radius}
                fill="none" stroke={color} strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={circumference - progress}
                strokeLinecap="round"
            />
        </svg>
    );
}

export default function PracticePreview() {
    const [started, setStarted] = useState(false);

    return (
        <section id="practice" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Performance Tracker</p>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 section-title">
                        Typing Practice Preview
                    </h2>
                    <p className="text-gray-500 mt-6 text-base max-w-xl mx-auto">
                        See how our student performance dashboard tracks your progress in real time.
                    </p>
                </div>

                {/* Dashboard Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="practice-dashboard p-8 sm:p-12">
                        {/* Top bar */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
                                    <span className="text-green-400 text-sm font-semibold">Session Active</span>
                                </div>
                                <h3 className="text-white font-black text-xl">Student Performance Dashboard</h3>
                                <p className="text-white/60 text-sm mt-0.5">Real-time result preview — Shorthandians Institute</p>
                            </div>
                            <div className="floating-card px-5 py-3 text-center">
                                <p className="text-white/60 text-xs mb-0.5">Test Mode</p>
                                <p className="text-white font-bold text-sm">Dictation Practice</p>
                            </div>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                            {metrics.map((m) => (
                                <div key={m.label} className="floating-card p-6 text-center flex flex-col items-center">
                                    {/* Radial */}
                                    <div className="relative mb-4">
                                        <RadialProgress value={m.value} max={m.max} color={m.color} size={100} strokeWidth={8} />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-xl">{m.icon}</span>
                                        </div>
                                    </div>
                                    <p className="text-3xl font-black text-white">
                                        {m.value}<span className="text-xl font-semibold text-white/60 ml-1">{m.unit}</span>
                                    </p>
                                    <p className="text-white/60 text-sm mt-1 font-medium">{m.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Progress bars */}
                        <div className="floating-card p-6 mb-8">
                            <p className="text-white/80 text-sm font-semibold mb-4">Weekly Progress</p>
                            <div className="space-y-3">
                                {[
                                    { day: 'Monday', wpm: 65 },
                                    { day: 'Tuesday', wpm: 68 },
                                    { day: 'Wednesday', wpm: 70 },
                                    { day: 'Thursday', wpm: 69 },
                                    { day: 'Friday', wpm: 72 },
                                ].map((d) => (
                                    <div key={d.day} className="flex items-center gap-3">
                                        <span className="text-white/60 text-xs w-24 shrink-0">{d.day}</span>
                                        <div className="flex-1 bg-white/10 rounded-full h-2.5">
                                            <div
                                                className="h-2.5 rounded-full"
                                                style={{
                                                    width: `${(d.wpm / 120) * 100}%`,
                                                    background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                                                }}
                                            />
                                        </div>
                                        <span className="text-white/80 text-xs font-bold w-16 text-right">{d.wpm} WPM</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Start Practice Button */}
                        <div className="text-center">
                            {!started ? (
                                <button
                                    id="start-practice-btn"
                                    onClick={() => setStarted(true)}
                                    className="btn-white text-base px-10 py-3.5 mx-auto"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Start Practice
                                </button>
                            ) : (
                                <div className="floating-card inline-block px-8 py-4">
                                    <p className="text-white font-semibold text-sm">
                                        🎉 Practice session would start here. Enroll to access full platform!
                                    </p>
                                    <button
                                        className="btn-white text-sm px-6 py-2 mt-3 mx-auto"
                                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        Enroll Now
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
