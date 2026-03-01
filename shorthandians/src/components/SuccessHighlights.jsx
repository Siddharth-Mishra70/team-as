const successStories = [
    {
        id: 1,
        name: 'Priya Singh',
        rank: 'Rank 5',
        exam: 'UP Civil Court 2023',
        dept: 'Civil Court Stenographer',
        initial: 'PS',
        color: 'from-blue-500 to-blue-700',
        quote: 'The daily dictation sessions and consistent feedback from faculty helped me achieve Rank 5. Shorthandians is the best decision I made.',
    },
    {
        id: 2,
        name: 'Shivam Rai',
        rank: 'AIR 8',
        exam: 'SSC Steno Gr. D',
        dept: 'MEA New Delhi 2023',
        initial: 'SR',
        color: 'from-green-500 to-green-700',
        quote: 'Getting AIR 8 in SSC was a dream. The real exam pattern training here gave me the edge. Grateful to the entire Shorthandians team.',
    },
    {
        id: 3,
        name: 'Piyush Kumar',
        rank: 'Rank 82',
        exam: 'UP Civil Court 2023',
        dept: 'Civil Court Stenographer',
        initial: 'PK',
        color: 'from-purple-500 to-purple-700',
        quote: 'Speed and accuracy tracking helped me fix my weak areas. Cleared UP Civil Court on my first attempt, thanks to regular mock tests.',
    },
    {
        id: 4,
        name: 'Abhishek Verma',
        rank: 'Rank 83',
        exam: 'UP Civil Court 2023',
        dept: 'Civil Court Stenographer',
        initial: 'AV',
        color: 'from-orange-500 to-orange-700',
        quote: 'Small batch size meant I got personal attention from faculty. The structured curriculum at Shorthandians was exactly what I needed.',
    },
    {
        id: 5,
        name: 'Gaurav Patel',
        rank: 'APS Selection',
        exam: 'Allahabad High Court 2022',
        dept: 'Personal Secretary',
        initial: 'GP',
        color: 'from-teal-500 to-teal-700',
        quote: 'The High Court dictation pattern practice was spot-on. Faculty guidance throughout the preparation was invaluable for my success.',
    },
    {
        id: 6,
        name: 'Alok Shrivastava',
        rank: 'PA Selection',
        exam: 'Chhattisgarh High Court 2024',
        dept: 'Personal Assistant',
        initial: 'AS',
        color: 'from-rose-500 to-rose-700',
        quote: 'Moved states but relied on Shorthandians online practice materials. Cleared Chhattisgarh HC 2024 as Personal Assistant. Exceptional institute!',
    },
];

export default function SuccessHighlights() {
    return (
        <section id="success" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Student Stories</p>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 section-title">
                        Success Highlights
                    </h2>
                    <p className="text-gray-500 mt-6 text-base max-w-xl mx-auto">
                        Real students, real results. Our alumni have secured positions across courts and government departments nationwide.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {successStories.map((s) => (
                        <div key={s.id} className="success-card card-hover p-7 flex flex-col">
                            {/* Quote icon */}
                            <div className="text-blue-100 text-5xl font-serif leading-none mb-3 select-none">"</div>

                            {/* Quote Text */}
                            <p className="text-gray-600 text-sm leading-relaxed italic mb-6 flex-1">
                                {s.quote}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                {/* Avatar */}
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center text-white font-black text-base shadow-md shrink-0`}>
                                    {s.initial}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-gray-900 text-sm">{s.name}</p>
                                    <p className="text-xs text-blue-600 font-semibold">{s.dept}</p>
                                </div>
                                {/* Rank Badge */}
                                <div className="text-right shrink-0">
                                    <span className={`inline-block bg-gradient-to-br ${s.color} text-white text-xs font-black px-2.5 py-1 rounded-full`}>
                                        {s.rank}
                                    </span>
                                    <p className="text-xs text-gray-400 mt-1">{s.exam}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
