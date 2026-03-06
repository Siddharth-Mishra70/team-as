export default function GoogleReviews() {
    const reviews = [
        {
            name: "Ravi Sharma",
            initial: "R",
            time: "1 month ago",
            rating: 5,
            text: "Shorthandians is simply the best institute for SSC Stenographer preparation. The live dictation practice software helped me clear my 100 WPM skill test on my first attempt! Highly recommended.",
        },
        {
            name: "Pooja Yadav",
            initial: "P",
            time: "2 months ago",
            rating: 5,
            text: "I joined the Civil Court batch and the offline coaching environment is excellent. The teachers pay individual attention to every student's outlines. The mock tests are exactly like the real exam.",
        },
        {
            name: "Vikram Singh",
            initial: "V",
            time: "3 weeks ago",
            rating: 5,
            text: "The speed building training module on their portal changed the game for me. I went from 60 WPM to 90 WPM in just a few months. Thank you for the amazing guidance and daily practice dictations.",
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 border-b border-gray-100 pb-8">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Student Success Stories
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Don't just take our word for it. Read what our successful candidates have shared on Google about their journey.
                        </p>
                    </div>

                    {/* Google Overview Badge */}
                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="bg-white p-2 rounded-full shadow-sm">
                            {/* Simplified Google 'G' icon using SVG */}
                            <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                                    <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                                    <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.369 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                                    <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                                    <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.109 -17.884 43.989 -14.754 43.989 Z" />
                                </g>
                            </svg>
                        </div>
                        <div>
                            <div className="flex items-center gap-1 mb-1">
                                <span className="text-xl font-bold text-gray-900">4.9</span>
                                <div className="flex text-yellow-500 text-lg">
                                    ★★★★★
                                </div>
                            </div>
                            <p className="text-sm font-medium text-gray-500">Based on 120+ reviews</p>
                        </div>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow relative">

                            {/* Google Icon little corner indicator */}
                            <div className="absolute top-6 right-6 opacity-30">
                                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                                        <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                                        <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.369 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                                        <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                                        <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.109 -17.884 43.989 -14.754 43.989 Z" />
                                    </g>
                                </svg>
                            </div>

                            {/* User Info */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl flex items-center justify-center flex-shrink-0">
                                    {review.initial}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                    <p className="text-gray-500 text-xs">{review.time}</p>
                                </div>
                            </div>

                            {/* Star Rating */}
                            <div className="flex text-yellow-500 text-lg mb-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>

                            {/* Review Content */}
                            <p className="text-gray-700 leading-relaxed">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-bold py-3 px-8 rounded-lg shadow-sm transition-colors cursor-pointer">
                        Read all Google Reviews
                    </button>
                </div>
            </div>
        </section>
    );
}
