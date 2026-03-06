export default function AdvancedDictation() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Live Dictation Practice
                    </h2>
                    <p className="text-lg text-gray-600">
                        Listen to the audio and transcribe accurately.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col lg:flex-row">

                    {/* Main Area */}
                    <div className="flex-1 p-8">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
                            <div className="flex gap-4">
                                <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full font-semibold text-sm">Target Speed: 80 WPM</span>
                                <span className="bg-gray-50 text-gray-700 px-4 py-1.5 rounded-full font-semibold text-sm">Duration: 10 Minutes</span>
                                <span className="bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full font-semibold text-sm">Difficulty: Medium</span>
                            </div>

                            {/* Audio Controls */}
                            <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                                <button className="text-gray-600 hover:text-blue-600 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </button>
                                <button className="text-gray-600 hover:text-blue-600 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                                </button>
                                <div className="w-32 h-1.5 bg-gray-300 rounded-full overflow-hidden">
                                    <div className="bg-blue-600 w-1/3 h-full"></div>
                                </div>
                                <button className="text-gray-600 hover:text-blue-600 transition-colors">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                </button>
                            </div>
                        </div>

                        <div className="mb-6 p-6 bg-blue-50/50 rounded-xl border border-blue-100 font-mono text-gray-700 leading-relaxed text-lg min-h-[100px]">
                            "The honorable court observed that the petitioner had submitted the necessary documents before the deadline and requested the authorities to consider the application."
                        </div>

                        <textarea
                            className="w-full h-48 p-6 bg-white border-2 border-gray-200 rounded-xl font-mono text-gray-800 text-lg focus:border-blue-500 focus:ring-0 outline-none resize-none transition-colors shadow-inner"
                            placeholder="Begin typing transcription here..."
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

                    {/* Right Sidebar */}
                    <div className="lg:w-80 bg-gray-50 p-8 border-t lg:border-t-0 lg:border-l border-gray-200 flex flex-col">
                        <h3 className="font-bold text-gray-900 mb-6 text-xl">Live Metrics</h3>

                        <div className="space-y-6 flex-1">
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <span className="text-gray-500 font-medium">Speed (Live)</span>
                                <span className="text-2xl font-bold text-blue-600">72 <span className="text-sm font-normal text-gray-400">WPM</span></span>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <span className="text-gray-500 font-medium">Accuracy</span>
                                <span className="text-2xl font-bold text-green-500">94%</span>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <span className="text-gray-500 font-medium">Mistakes</span>
                                <span className="text-2xl font-bold text-red-500">3</span>
                            </div>

                            <div className="bg-blue-600 p-5 rounded-xl shadow-md text-white mt-8 text-center">
                                <p className="text-blue-100 mb-1 font-medium text-sm">Time Remaining</p>
                                <p className="text-4xl font-mono font-bold tracking-wider">08:12</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
