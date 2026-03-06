export default function PracticeDashboard() {
    const cards = [
        {
            title: "Today's Practice",
            value: "Court Practice 80 WPM",
            subtitle: "Pending Task",
            icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Last Result",
            value: "74 WPM",
            subtitle: "Accuracy: 93%",
            icon: (
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Weekly Progress",
            value: "8 Tests",
            subtitle: "Target: 10 Tests",
            progress: 80,
            icon: (
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            title: "Improvement",
            value: "+6 WPM",
            subtitle: "This Week",
            icon: (
                <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        }
    ];

    return (
        <section id="practice" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Online Practice Dashboard
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Track your daily stenography practice, monitor your typing speed, and stay on top of your learning goals.
                        </p>
                    </div>
                    <button className="mt-6 md:mt-0 btn-primary px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        Start New Practice
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center">
                                    {card.icon}
                                </div>
                            </div>
                            <h3 className="text-gray-500 text-sm font-medium mb-1">{card.title}</h3>
                            <p className="text-2xl font-bold text-gray-900 mb-2">{card.value}</p>

                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-600">{card.subtitle}</p>
                            </div>

                            {card.progress && (
                                <div className="w-full bg-gray-100 rounded-full h-1.5 mt-4">
                                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${card.progress}%` }}></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
