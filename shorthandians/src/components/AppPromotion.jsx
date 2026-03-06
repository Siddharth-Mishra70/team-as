export default function AppPromotion() {
    return (
        <section className="py-20 bg-blue-600 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2 text-white">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Practice Anytime, Anywhere
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-lg">
                            Students can practice shorthand dictation and typing tests from any device. Our platform supports mobile, tablet, and desktop learning for seamless preparation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3.5 rounded-lg font-bold shadow-lg transition-colors flex items-center justify-center gap-2">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 7.05 7.05c1.23.08 2.37.81 3.12.81.76 0 2.1-.88 3.55-.75 2.58.17 3.99 1.74 3.99 1.74-2.81 1.6-2.21 4.75-.43 5.86-1.04 1.55-2.18 3.51-3.23 4.57zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                Download App
                            </button>
                            <button className="bg-blue-700 text-white border border-blue-500 hover:bg-blue-800 px-8 py-3.5 rounded-lg font-bold shadow-lg transition-colors">
                                Start Online Practice
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-72 h-[500px] bg-white rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-100 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                            <div className="absolute top-0 left-1/2 w-32 h-6 bg-gray-100 rounded-b-xl -translate-x-1/2 z-20"></div>
                            <div className="w-full h-full bg-gray-50 rounded-[2rem] overflow-hidden relative border border-gray-200">
                                {/* Mockup Screen UI */}
                                <div className="bg-blue-600 p-6 pt-10 text-white">
                                    <h4 className="font-bold text-lg mb-1">Shorthandians</h4>
                                    <p className="text-blue-100 text-sm">Dashboard</p>
                                </div>
                                <div className="p-4 space-y-4">
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <p className="text-xs text-gray-500 mb-1">Current Speed</p>
                                        <p className="text-2xl font-bold text-gray-900">82 WPM</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <p className="text-xs text-gray-500 mb-1">Accuracy</p>
                                        <p className="text-2xl font-bold text-green-500">95%</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center text-blue-600 font-semibold cursor-pointer">
                                        Start Test
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
