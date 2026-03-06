export default function PracticeNotebook() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-end justify-between border-b border-gray-100 pb-6">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Personal Practice Pad
                        </h2>
                        <p className="text-gray-600 italic">
                            "Practice your shorthand writing here after listening to dictation."
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-red-50 text-red-600 hover:bg-red-100 px-5 py-2 rounded-lg font-medium text-sm transition-colors">
                            Clear Text
                        </button>
                        <button className="btn-primary px-5 py-2 rounded-lg font-medium text-sm">
                            Save Practice
                        </button>
                    </div>
                </div>

                <div className="bg-[#fdfbf7] p-8 rounded-2xl shadow-inner border border-gray-200 min-h-[500px] relative">
                    <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #94a3b8 31px, #94a3b8 32px)', backgroundPositionY: '8px' }}></div>
                    <textarea
                        className="w-full h-[450px] bg-transparent border-none focus:ring-0 outline-none resize-none text-xl leading-[32px] text-gray-800 font-serif relative z-10"
                        placeholder="Start typing your transcription here..."
                        style={{ lineHeight: '32px' }}
                    ></textarea>
                </div>
            </div>
        </section>
    );
}
