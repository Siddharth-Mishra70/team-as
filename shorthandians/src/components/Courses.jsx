const courses = [
    {
        id: 1,
        name: 'Kailash Chandra Vol. 3',
        level: 'Beginner',
        category: 'Shorthand Foundation',
        desc: 'Comprehensive shorthand and dictation practice designed for competitive exams. Covers fundamental symbols, outlines and speed building exercises.',
        icon: '📖',
        color: 'from-blue-500 to-blue-700',
        badge: 'Most Popular',
        badgeColor: 'bg-blue-100 text-blue-700',
        sessions: '45 Sessions',
        speed: '60–80 WPM',
    },
    {
        id: 2,
        name: 'Kailash Chandra Vol. 20',
        level: 'Advanced',
        category: 'High Speed Dictation',
        desc: 'Comprehensive shorthand and dictation practice designed for competitive exams. Advanced material for high-speed stenography mastery.',
        icon: '⚡',
        color: 'from-indigo-500 to-indigo-700',
        badge: 'Advanced',
        badgeColor: 'bg-indigo-100 text-indigo-700',
        sessions: '50 Sessions',
        speed: '80–100 WPM',
    },
    {
        id: 3,
        name: 'Rajasthan Civil & Highcourt Stenographer',
        level: 'Intermediate',
        category: 'State Court Exam Prep',
        desc: 'Comprehensive shorthand and dictation practice designed for competitive exams. Specially curated for Rajasthan Civil & High Court recruitment.',
        icon: '⚖️',
        color: 'from-purple-500 to-purple-700',
        badge: 'Court Prep',
        badgeColor: 'bg-purple-100 text-purple-700',
        sessions: '40 Sessions',
        speed: '70–90 WPM',
    },
    {
        id: 4,
        name: 'Gujarat HighCourt Steno / PS Exam',
        level: 'Intermediate',
        category: 'High Court Dictations',
        desc: 'Comprehensive shorthand and dictation practice designed for competitive exams. Targeted dictations for Gujarat HC PS & Stenographer posts.',
        icon: '🏛️',
        color: 'from-green-500 to-green-700',
        badge: 'HC Special',
        badgeColor: 'bg-green-100 text-green-700',
        sessions: '38 Sessions',
        speed: '70–90 WPM',
    },
];

export default function Courses() {
    return (
        <section id="courses" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Curriculum</p>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 section-title">
                        Our Courses
                    </h2>
                    <p className="text-gray-500 mt-6 text-base max-w-xl mx-auto">
                        Carefully structured programs covering all major shorthand exams and competition patterns.
                    </p>
                </div>

                {/* Course Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((c) => (
                        <div key={c.id} className="course-card card-hover flex flex-col">
                            {/* Card Top Banner */}
                            <div className={`bg-gradient-to-br ${c.color} p-6 text-white`}>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-3xl">{c.icon}</span>
                                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.badgeColor}`}>
                                        {c.badge}
                                    </span>
                                </div>
                                <h3 className="font-black text-base leading-tight">{c.name}</h3>
                                <p className="text-white/70 text-xs mt-1">{c.category}</p>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex flex-col flex-1">
                                <p className="text-sm text-gray-500 leading-relaxed mb-5">{c.desc}</p>

                                {/* Meta info */}
                                <div className="flex items-center justify-between text-xs text-gray-400 mb-6">
                                    <span className="flex items-center gap-1">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.867v6.266a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                        {c.sessions}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        {c.speed}
                                    </span>
                                </div>

                                {/* Enroll Button */}
                                <button
                                    id={`enroll-btn-${c.id}`}
                                    className="btn-primary w-full justify-center text-sm py-2.5 mt-auto"
                                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Enroll Now
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
