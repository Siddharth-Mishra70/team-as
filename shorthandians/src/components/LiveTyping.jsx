export default function LiveTyping() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Live Typing Practice Interface
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Experience our exam-simulated typing software designed to build your speed and accuracy.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col lg:flex-row">

                    {/* Main Typing Area */}
                    <div className="flex-1 p-8">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                                <span className="font-semibold text-gray-700">Timer: 10:00</span>
                            </div>
                            <div className="font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">
                                Target: 80 WPM
                            </div>
                        </div>

                        <div className="mb-6 p-6 bg-gray-50 rounded-xl border border-gray-100 font-mono text-gray-700 leading-relaxed text-lg min-h-[120px]">
                            "The matter was placed before the honorable court and the learned counsel submitted the argument in support of the petition."
                        </div>

                        <textarea
                            className="w-full h-40 p-6 bg-white border-2 border-blue-100 rounded-xl font-mono text-gray-800 text-lg focus:border-blue-500 focus:ring-0 outline-none resize-none transition-colors shadow-inner"
                            placeholder="Start typing here..."
                            defaultValue="The matter was placed before the hono"
                        ></textarea>

                        <div className="mt-8 flex items-center gap-4">
                            <button className="btn-primary px-8 py-3 rounded-lg font-medium">
                                Submit
                            </button>
                            <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-8 py-3 rounded-lg font-medium transition-colors">
                                Start Test
                            </button>
                            <button className="bg-red-50 text-red-600 hover:bg-red-100 px-8 py-3 rounded-lg font-medium transition-colors ml-auto">
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* Right Sidebar Stats */}
                    <div className="lg:w-80 bg-gray-50 p-8 border-t lg:border-t-0 lg:border-l border-gray-200 flex flex-col">
                        <h3 className="font-bold text-gray-900 mb-6 text-lg">Live Statistics</h3>

                        <div className="space-y-6 flex-1">
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                <p className="text-sm text-gray-500 mb-1 font-medium">Speed</p>
                                <p className="text-3xl font-bold text-blue-600">72 <span className="text-base font-medium text-gray-400">WPM</span></p>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                <p className="text-sm text-gray-500 mb-1 font-medium">Accuracy</p>
                                <p className="text-3xl font-bold text-green-500">94<span className="text-xl">%</span></p>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                <p className="text-sm text-gray-500 mb-1 font-medium">Errors</p>
                                <p className="text-3xl font-bold text-red-500">3</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
