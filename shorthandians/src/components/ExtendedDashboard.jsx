export default function ExtendedDashboard() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ROW 1: Exam Simulation & Speed Goal */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

                    {/* Exam Simulation Mode */}
                    <div className="bg-gray-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
                        <div className="relative z-10">
                            <span className="inline-block bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-red-500/30 uppercase tracking-wider">
                                Simulation Mode
                            </span>
                            <h3 className="text-3xl font-bold mb-3">Real Exam Simulation</h3>
                            <p className="text-gray-400 mb-8 max-w-sm">
                                "Practice dictation in a real exam environment similar to Civil Court and SSC stenographer tests."
                            </p>

                            <div className="flex items-center gap-6 mb-8">
                                <div>
                                    <p className="text-gray-500 text-sm mb-1">Speed</p>
                                    <p className="text-2xl font-semibold text-gray-200">100 WPM</p>
                                </div>
                                <div className="w-px h-10 bg-gray-800"></div>
                                <div>
                                    <p className="text-gray-500 text-sm mb-1">Duration</p>
                                    <p className="text-2xl font-semibold text-gray-200">10 Minutes</p>
                                </div>
                            </div>

                            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-600/20 transition-all">
                                Start Exam Mode
                            </button>
                        </div>
                    </div>

                    {/* Speed Goal & Daily Performance */}
                    <div className="space-y-8">
                        {/* Speed Goal */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Set Your Speed Goal</h3>

                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Current Speed</p>
                                    <p className="text-2xl font-bold text-gray-900">72 WPM</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-blue-600 font-medium mb-1">Target Speed</p>
                                    <p className="text-2xl font-bold text-blue-600">90 WPM</p>
                                </div>
                            </div>

                            <div className="flex gap-3 mb-6">
                                {['70', '80', '90', '100'].map(wpm => (
                                    <button key={wpm} className={`flex-1 py-2 rounded-lg font-medium border ${wpm === '90' ? 'bg-blue-50 border-blue-600 text-blue-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                                        {wpm}
                                    </button>
                                ))}
                            </div>

                            <button className="w-full btn-primary py-3 rounded-xl font-medium">
                                Set Goal
                            </button>
                        </div>

                        {/* Daily Performance */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Today's Performance</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-600 font-medium">Tests Taken: 3</span>
                                        <span className="text-gray-400">Goal: 5</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full w-3/5"></div></div>
                                </div>
                                <div className="flex justify-between items-center py-2 border-t border-gray-50">
                                    <span className="text-gray-600">Average Speed</span>
                                    <span className="font-bold text-gray-900">78 WPM</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-t border-gray-50">
                                    <span className="text-gray-600">Accuracy</span>
                                    <span className="font-bold text-green-500">93%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ROW 2: Additional Widgets */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
                        <p className="text-gray-500 text-sm font-medium mb-1">Total Practice Time</p>
                        <p className="text-3xl font-black text-gray-900">42 <span className="text-base font-medium text-gray-400">Hours</span></p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
                        <p className="text-gray-500 text-sm font-medium mb-1">Dictations Completed</p>
                        <p className="text-3xl font-black text-blue-600">180</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
                        <p className="text-gray-500 text-sm font-medium mb-1">Best Speed Record</p>
                        <p className="text-3xl font-black text-purple-600">104 <span className="text-base font-medium opacity-50">WPM</span></p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
                        <p className="text-gray-500 text-sm font-medium mb-1">Weekly Practice Streak</p>
                        <p className="text-3xl font-black text-orange-500">5 <span className="text-base font-medium opacity-50">Days</span></p>
                    </div>
                </div>

            </div>
        </section>
    );
}
