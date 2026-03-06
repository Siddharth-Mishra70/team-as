export default function DictationLibrary() {
    const dictations = [
        {
            title: "Court Dictations",
            speed: "60-100 WPM",
            desc: "Legal matters, judgments, and court proceedings tailored for District and Civil Court exams."
        },
        {
            title: "SSC Steno Dictations",
            speed: "70-110 WPM",
            desc: "Parliamentary debates, presidential speeches, and general matters for SSC Skill Tests."
        },
        {
            title: "High Court Dictations",
            speed: "80-120 WPM",
            desc: "Advanced legal dictations focusing on complex vocabulary and High Court standards."
        },
        {
            title: "Daily Practice Dictations",
            speed: "50-90 WPM",
            desc: "Editorial pieces and current affairs for regular speed building and stamina."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Shorthand Dictation Library
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Access hundreds of audio dictations categorized by exam type and speed levels.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {dictations.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
                            <div className="mb-4">
                                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                                    Speed: {item.speed}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="mt-auto">
                                <button className="w-full text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white font-medium py-2.5 rounded-lg transition-colors duration-200">
                                    Start Dictation
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
