const achievements = [
    {
        id: 1,
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        value: '10+',
        label: 'Years Experience',
        desc: 'Decade of expert shorthand coaching',
        color: 'from-blue-500 to-blue-600',
        bg: 'bg-blue-50',
        text: 'text-blue-600',
    },
    {
        id: 2,
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        value: '200+',
        label: 'Selections',
        desc: 'Government placements across courts & SSC',
        color: 'from-green-500 to-green-600',
        bg: 'bg-green-50',
        text: 'text-green-600',
    },
    {
        id: 3,
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        value: '1000+',
        label: 'Students Trained',
        desc: 'Learners shaped into skilled stenographers',
        color: 'from-purple-500 to-purple-600',
        bg: 'bg-purple-50',
        text: 'text-purple-600',
    },
    {
        id: 4,
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        value: '95%',
        label: 'Success Rate',
        desc: 'Among the highest in the region',
        color: 'from-orange-500 to-orange-600',
        bg: 'bg-orange-50',
        text: 'text-orange-600',
    },
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Track Record</p>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 section-title">
                        Proven Results That Speak
                    </h2>
                    <p className="text-gray-500 mt-6 text-base max-w-xl mx-auto">
                        A decade of dedicated training has produced outstanding results across government departments.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((a) => (
                        <div key={a.id} className="stat-card card-hover p-8 text-center">
                            {/* Icon */}
                            <div className={`w-16 h-16 ${a.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 ${a.text}`}>
                                {a.icon}
                            </div>
                            {/* Value */}
                            <p className={`text-5xl font-black ${a.text} mb-1`}>{a.value}</p>
                            {/* Label */}
                            <p className="font-bold text-gray-900 text-base mb-2">{a.label}</p>
                            {/* Desc */}
                            <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
