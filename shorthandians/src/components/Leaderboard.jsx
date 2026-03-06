export default function Leaderboard() {
    const students = [
        { rank: 1, name: "Rahul Verma", speed: "102 WPM", accuracy: "97%" },
        { rank: 2, name: "Anjali Singh", speed: "98 WPM", accuracy: "96%" },
        { rank: 3, name: "Aman Tripathi", speed: "95 WPM", accuracy: "95%" },
        { rank: 4, name: "Priya Gupta", speed: "93 WPM", accuracy: "94%" },
        { rank: 5, name: "Rohit Mishra", speed: "90 WPM", accuracy: "93%" }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Top Performing Students
                    </h2>
                    <p className="text-lg text-gray-600">
                        Compete with the best and see where you stand among top aspirants.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 text-gray-600 text-sm uppercase tracking-wider">
                                    <th className="p-4 font-semibold border-b border-gray-200 text-center w-24">Rank</th>
                                    <th className="p-4 font-semibold border-b border-gray-200">Student Name</th>
                                    <th className="p-4 font-semibold border-b border-gray-200 text-center">Speed</th>
                                    <th className="p-4 font-semibold border-b border-gray-200 text-center">Accuracy</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {students.map((student, idx) => (
                                    <tr
                                        key={idx}
                                        className={`transition-colors hover:bg-gray-50 ${student.rank <= 3 ? 'bg-blue-50/30' : ''
                                            }`}
                                    >
                                        <td className="p-4 text-center">
                                            {student.rank === 1 && <span className="text-2xl" title="Gold">🥇</span>}
                                            {student.rank === 2 && <span className="text-2xl" title="Silver">🥈</span>}
                                            {student.rank === 3 && <span className="text-2xl" title="Bronze">🥉</span>}
                                            {student.rank > 3 && <span className="font-bold text-gray-500">{student.rank}</span>}
                                        </td>
                                        <td className="p-4 font-medium text-gray-900">{student.name}</td>
                                        <td className="p-4 text-center">
                                            <span className="font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                                                {student.speed}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className="font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm">
                                                {student.accuracy}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
