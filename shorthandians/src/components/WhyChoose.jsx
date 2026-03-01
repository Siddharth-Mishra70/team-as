const features = [
    {
        id: 1,
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 0112.728 0" />
            </svg>
        ),
        title: 'Daily Dictation Practice',
        desc: 'Structured daily dictation sessions at multiple speeds (60, 80, 100+ WPM) to build consistent shorthand fluency for competitive exams.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-100',
    },
    {
        id: 2,
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: 'Real Exam Pattern Training',
        desc: 'Practice with actual question patterns from UP Civil Court, Allahabad High Court, SSC Stenographer and other government recruitment exams.',
        color: 'text-green-600',
        bg: 'bg-green-50',
        border: 'border-green-100',
    },
    {
        id: 3,
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: 'Speed & Accuracy Tracking',
        desc: 'Individual performance tracking with regular assessments to monitor WPM growth and accuracy improvements through the course duration.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
        border: 'border-purple-100',
    },
    {
        id: 4,
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: 'Offline + Online Support',
        desc: 'Classroom coaching with small batches for personal attention, supplemented by online practice materials and dictation resources.',
        color: 'text-orange-600',
        bg: 'bg-orange-50',
        border: 'border-orange-100',
    },
];

export default function WhyChoose() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Advantage</p>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 section-title">
                        Why Choose Shorthandians?
                    </h2>
                    <p className="text-gray-500 mt-6 text-base max-w-xl mx-auto">
                        Every feature is designed to maximize your chances of clearing government stenographer exams.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f) => (
                        <div key={f.id} className={`feature-card card-hover p-7 border ${f.border}`}>
                            {/* Icon */}
                            <div className={`w-14 h-14 ${f.bg} rounded-2xl flex items-center justify-center mb-5 ${f.color}`}>
                                {f.icon}
                            </div>
                            {/* Title */}
                            <h3 className="font-bold text-gray-900 text-base mb-3">{f.title}</h3>
                            {/* Desc */}
                            <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
