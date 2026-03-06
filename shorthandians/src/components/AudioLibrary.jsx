export default function AudioLibrary() {
    const dictations = [
        { title: "60 WPM Dictation", desc: "Beginner level dictation focused on fundamental outlines." },
        { title: "80 WPM Dictation", desc: "Standard speed practice for state level stenography exams." },
        { title: "100 WPM Dictation", desc: "Advanced level for SSC Grade C and court exams." },
        { title: "120 WPM Dictation", desc: "Expert level dictation for ultimate speed building readiness." }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Audio Dictation Library
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Access our vast repository of high-quality audio dictations strictly categorized by speed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {dictations.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all group flex flex-col">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm mb-6 flex-1">{item.desc}</p>

                            <div className="flex flex-col gap-3">
                                <button className="w-full flex justify-center items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium py-2 rounded-lg transition-colors border border-gray-200">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    Play Dictation
                                </button>
                                <button className="w-full text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white font-medium py-2 rounded-lg transition-colors">
                                    Practice Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
