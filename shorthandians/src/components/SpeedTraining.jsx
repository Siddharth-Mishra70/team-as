export default function SpeedTraining() {
    const levels = [
        { name: "Level 1", title: "Beginner Speed", speed: "40–60 WPM", bg: "bg-blue-50", text: "text-blue-700" },
        { name: "Level 2", title: "Intermediate Speed", speed: "60–80 WPM", bg: "bg-green-50", text: "text-green-700" },
        { name: "Level 3", title: "Advanced Speed", speed: "80–100 WPM", bg: "bg-orange-50", text: "text-orange-700" },
        { name: "Level 4", title: "Expert Speed", speed: "100+ WPM", bg: "bg-purple-50", text: "text-purple-700" },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 border-b border-gray-200 pb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Speed Building Training
                    </h2>
                    <p className="text-gray-600 text-lg">Structured levels to progressively enhance your shorthand speed.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {levels.map((lvl, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:border-blue-200 hover:shadow-md transition-all">
                            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 ${lvl.bg} ${lvl.text}`}>
                                {lvl.name}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{lvl.title}</h3>
                            <p className="text-2xl font-black text-gray-400 mb-6">{lvl.speed}</p>
                            <button className="w-full btn-outline border-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors py-2.5 rounded-xl font-medium mt-auto">
                                Practice Level
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
