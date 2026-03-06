export default function ProgressAnalytics() {
    const stats = [
        { label: "Average Speed", value: "82 WPM", color: "text-blue-600" },
        { label: "Accuracy Rate", value: "95%", color: "text-green-500" },
        { label: "Tests Completed", value: "124", color: "text-purple-600" },
        { label: "Best Speed", value: "102 WPM", color: "text-indigo-600" }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Track Your Progress
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Detailed analytics to monitor your journey from a beginner to an advanced stenographer.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                            <p className="text-gray-500 font-medium mb-2">{stat.label}</p>
                            <p className={`text-3xl md:text-4xl font-bold ${stat.color}`}>{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Graph Placeholder */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-bold text-gray-900">Monthly Speed Progress</h3>
                        <select className="bg-gray-50 border border-gray-200 text-gray-700 rounded-lg px-4 py-2 text-sm outline-none">
                            <option>Last 6 Months</option>
                            <option>Last Year</option>
                        </select>
                    </div>

                    <div className="relative h-64 w-full flex items-end justify-between px-4 pb-8">
                        {/* Y Axis Guides */}
                        <div className="absolute inset-0 flex flex-col justify-between pb-8 z-0">
                            {[120, 100, 80, 60, 40].map((val) => (
                                <div key={val} className="w-full border-t border-dashed border-gray-200 text-xs text-gray-400 pl-1">{val}</div>
                            ))}
                        </div>

                        {/* Simple Line Chart UI */}
                        <div className="relative z-10 w-full h-full flex items-end justify-between pt-8">
                            {/* Abstract line representation using SVG */}
                            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                <path d="M0,80 L20,70 L40,65 L60,40 L80,30 L100,20" fill="none" stroke="#2563eb" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                                <path d="M0,80 L20,70 L40,65 L60,40 L80,30 L100,20 L100,100 L0,100 Z" fill="url(#blue-gradient)" opacity="0.1" />
                                <defs>
                                    <linearGradient id="blue-gradient" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#2563eb" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Data points */}
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, idx) => {
                                const heights = ['h-1/5', 'h-1/4', 'h-1/3', 'h-3/5', 'h-2/3', 'h-4/5'];
                                return (
                                    <div key={month} className="flex flex-col items-center justify-end h-full">
                                        <div className={`w-3 ${heights[idx]} flex items-start justify-center`}>
                                            <div className="w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow-md relative -top-1.5 z-20"></div>
                                        </div>
                                        <span className="text-sm font-medium text-gray-500 mt-4">{month}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
