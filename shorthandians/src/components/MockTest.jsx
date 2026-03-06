export default function MockTest() {
    const tests = [
        {
            title: "Civil Court Mock Test",
            duration: "10 minutes",
            target: "80 WPM",
            tag: "Popular"
        },
        {
            title: "SSC Steno Mock Test",
            duration: "10 minutes",
            target: "100 WPM",
            tag: "Grade C"
        },
        {
            title: "High Court Mock Test",
            duration: "10 minutes",
            target: "100 WPM",
            tag: "Advanced"
        }
    ];

    return (
        <section id="mock-tests" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Full Length Mock Tests
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Test your skills in exam-like conditions. Prepare with dictations matching the difficulty level of actual government exams.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tests.map((test, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl transition-all relative overflow-hidden group">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                {test.tag}
                            </div>
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{test.title}</h3>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Duration: <span className="font-semibold ml-1">{test.duration}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    Target Speed: <span className="font-semibold ml-1">{test.target}</span>
                                </div>
                            </div>

                            <button className="w-full btn-outline group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                Start Test
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
