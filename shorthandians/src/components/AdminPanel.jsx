import { useState } from 'react';

export default function AdminPanel() {
    const [activeTab, setActiveTab] = useState('Overview');

    const menuItems = [
        'Overview',
        'Students',
        'Dictations',
        'Courses',
        'Results',
        'Leaderboard',
        'Content Manager',
        'Settings'
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans flex text-left">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 fixed h-full z-10 flex flex-col">
                <div className="p-6 border-b border-gray-100 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-md">
                        <span className="text-white font-black text-sm">S</span>
                    </div>
                    <span className="text-xl font-black text-gray-900">
                        Admin<span className="text-blue-600">Panel</span>
                    </span>
                </div>
                <nav className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto">
                    {menuItems.map(item => (
                        <button
                            key={item}
                            onClick={() => setActiveTab(item)}
                            className={`text-left px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === item
                                    ? 'bg-blue-50 text-blue-700'
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </nav>
                <div className="p-4 border-t border-gray-100">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-500 hover:text-red-600 font-medium transition-colors">
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 ml-64 p-8">
                <header className="mb-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">{activeTab}</h1>
                    <div className="flex items-center gap-4">
                        <button className="bg-white border border-gray-200 p-2 rounded-full text-gray-500 hover:text-blue-600 shadow-sm">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold border border-blue-200">
                            AD
                        </div>
                    </div>
                </header>

                <div className="max-w-6xl">
                    {activeTab === 'Overview' && <OverviewTab />}
                    {activeTab === 'Students' && <StudentsTab />}
                    {activeTab === 'Dictations' && <DictationsTab />}
                    {activeTab === 'Courses' && <CoursesTab />}
                    {activeTab === 'Results' && <ResultsTab />}
                    {activeTab === 'Leaderboard' && <LeaderboardTab />}
                    {activeTab === 'Content Manager' && <ContentManagerTab />}
                    {activeTab === 'Settings' && <SettingsTab />}
                </div>
            </main>
        </div>
    );
}

// Sub-components for Tabs

function OverviewTab() {
    const stats = [
        { label: 'Total Students', value: '1,240', color: 'text-blue-600' },
        { label: 'Active Students', value: '870', color: 'text-green-600' },
        { label: 'Total Dictations', value: '320', color: 'text-purple-600' },
        { label: 'Tests Taken Today', value: '96', color: 'text-orange-600' }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-center">
                    <p className="text-gray-500 font-medium mb-1">{stat.label}</p>
                    <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
            ))}
        </div>
    );
}

function StudentsTab() {
    const students = [
        { name: 'Rahul Verma', email: 'rahul@email.com', course: 'Civil Court Course', speed: '80 WPM', status: 'Active' },
        { name: 'Anjali Singh', email: 'anjali@email.com', course: 'SSC Steno Course', speed: '100 WPM', status: 'Active' },
        { name: 'Aman Mishra', email: 'aman@email.com', course: 'High Court Course', speed: '90 WPM', status: 'Active' }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <h2 className="text-lg font-bold text-gray-900">Manage Students</h2>
                <input
                    type="text"
                    placeholder="Search Students..."
                    className="border border-gray-200 rounded-lg px-4 py-2 text-sm w-64 focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                            <th className="p-4 font-semibold border-b border-gray-100">Student Name</th>
                            <th className="p-4 font-semibold border-b border-gray-100">Email</th>
                            <th className="p-4 font-semibold border-b border-gray-100">Course</th>
                            <th className="p-4 font-semibold border-b border-gray-100">Speed Level</th>
                            <th className="p-4 font-semibold border-b border-gray-100">Status</th>
                            <th className="p-4 font-semibold border-b border-gray-100 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {students.map((s, idx) => (
                            <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                <td className="p-4 font-medium text-gray-900">{s.name}</td>
                                <td className="p-4 text-blue-600 text-sm">{s.email}</td>
                                <td className="p-4 text-gray-600 text-sm">{s.course}</td>
                                <td className="p-4 text-gray-900 font-semibold">{s.speed}</td>
                                <td className="p-4">
                                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full uppercase">{s.status}</span>
                                </td>
                                <td className="p-4 text-right flex justify-end gap-2">
                                    <button className="text-gray-500 hover:text-blue-600 text-sm font-medium">View</button>
                                    <button className="text-gray-500 hover:text-blue-600 text-sm font-medium">Edit</button>
                                    <button className="text-gray-500 hover:text-red-600 text-sm font-medium">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function DictationsTab() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-2xl">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-xl font-bold mb-6">Upload New Dictation</h2>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dictation Title</label>
                    <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:border-blue-500 focus:ring-0 outline-none transition-colors" placeholder="e.g. Civil Court Practice Set 1" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Dictation Speed (WPM)</label>
                        <input type="number" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:border-blue-500 outline-none" placeholder="80" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                        <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:border-blue-500 outline-none bg-white">
                            <option>Court</option>
                            <option>SSC</option>
                            <option>High Court</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Audio File</label>
                    <button className="w-full border-2 border-dashed border-gray-300 rounded-xl px-4 py-8 text-gray-500 hover:bg-gray-50 hover:border-blue-400 transition-colors flex flex-col items-center justify-center gap-2">
                        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                        <span className="font-medium">Upload Audio File</span>
                    </button>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dictation Text (Transcription)</label>
                    <textarea className="w-full border border-gray-200 rounded-lg px-4 py-3 h-32 focus:border-blue-500 outline-none resize-none font-mono text-sm shadow-inner" placeholder="Enter the exact transcription text here..."></textarea>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors w-full">
                    Add Dictation
                </button>
            </div>
        </div>
    );
}

function CoursesTab() {
    const courses = [
        { title: 'Civil Court Stenographer Course', students: 450 },
        { title: 'SSC Steno Preparation', students: 520 },
        { title: 'High Court Dictation Training', students: 270 }
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Manage Courses</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex items-center gap-2">
                    <span>+</span> Add New Course
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses.map((c, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{c.title}</h3>
                        <p className="text-blue-600 bg-blue-50 self-start px-3 py-1 rounded-full text-xs font-bold mb-6">{c.students} Enrolled</p>

                        <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-gray-50">
                            <button className="text-sm font-medium text-gray-600 hover:text-blue-600 text-left py-1">Edit Course</button>
                            <button className="text-sm font-medium text-gray-600 hover:text-blue-600 text-left py-1">View Students</button>
                            <button className="text-sm font-medium text-red-500 hover:text-red-700 text-left py-1">Delete Course</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ResultsTab() {
    const results = [
        { name: 'Rahul Verma', speed: '82 WPM', acc: '95%', mistakes: '4', date: '12 Feb 2026' },
        { name: 'Priya Singh', speed: '90 WPM', acc: '97%', mistakes: '2', date: '13 Feb 2026' },
        { name: 'Aman Mishra', speed: '78 WPM', acc: '93%', mistakes: '6', date: '14 Feb 2026' }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-lg font-bold text-gray-900">Test Results Monitoring</h2>
            </div>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                        <th className="p-4 font-semibold border-b border-gray-100">Student Name</th>
                        <th className="p-4 font-semibold border-b border-gray-100">Test Speed</th>
                        <th className="p-4 font-semibold border-b border-gray-100">Accuracy</th>
                        <th className="p-4 font-semibold border-b border-gray-100">Mistakes</th>
                        <th className="p-4 font-semibold border-b border-gray-100">Date</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {results.map((r, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 p-4">
                            <td className="p-4 font-medium text-gray-900">{r.name}</td>
                            <td className="p-4 font-bold text-blue-600">{r.speed}</td>
                            <td className="p-4 font-bold text-green-500">{r.acc}</td>
                            <td className="p-4 text-red-500 font-medium">{r.mistakes}</td>
                            <td className="p-4 text-gray-500 text-sm">{r.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function LeaderboardTab() {
    const leaders = [
        { rank: 1, name: 'Rahul Verma', speed: '102 WPM', acc: '97%' },
        { rank: 2, name: 'Anjali Singh', speed: '98 WPM', acc: '96%' },
        { rank: 3, name: 'Aman Mishra', speed: '95 WPM', acc: '95%' }
    ];

    return (
        <div className="max-w-4xl">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Leaderboard Management</h2>
                <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold py-2 px-6 rounded-lg transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    Refresh Leaderboard
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 text-sm uppercase tracking-wider">
                            <th className="p-4 font-semibold border-b border-gray-100 w-24 text-center">Rank</th>
                            <th className="p-4 font-semibold border-b border-gray-100">Student</th>
                            <th className="p-4 font-semibold border-b border-gray-100 text-center">Speed</th>
                            <th className="p-4 font-semibold border-b border-gray-100 text-center">Accuracy</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {leaders.map((l, idx) => (
                            <tr key={idx} className="hover:bg-gray-50/50">
                                <td className="p-4 text-center">
                                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${l.rank === 1 ? 'bg-yellow-100 text-yellow-700' : l.rank === 2 ? 'bg-gray-200 text-gray-700' : 'bg-orange-100 text-orange-700'}`}>
                                        {l.rank}
                                    </span>
                                </td>
                                <td className="p-4 font-medium text-gray-900 text-lg">{l.name}</td>
                                <td className="p-4 text-center"><span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold text-sm">{l.speed}</span></td>
                                <td className="p-4 text-center"><span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-bold text-sm">{l.acc}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function ContentManagerTab() {
    const sections = ['Homepage Hero Text', 'Success Stories', 'Course Descriptions', 'Testimonials'];

    return (
        <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Content Management</h2>
            <div className="grid grid-cols-1 gap-4">
                {sections.map((sec, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow cursor-pointer group">
                        <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">{sec}</span>
                        <button className="bg-gray-50 text-gray-600 border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Edit Section
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SettingsTab() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-2xl">
            <div className="mb-6 border-b border-gray-100 pb-4">
                <h2 className="text-xl font-bold text-gray-900">Platform Settings</h2>
                <p className="text-sm text-gray-500">Update your institute's public details.</p>
            </div>

            <div className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Institute Name</label>
                    <input type="text" defaultValue="Shorthandians" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:border-blue-500 outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
                        <input type="text" defaultValue="+91 9876543210" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:border-blue-500 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                        <input type="text" defaultValue="+91 9876543210" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:border-blue-500 outline-none" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" defaultValue="contact@shorthandians.com" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:border-blue-500 outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">YouTube Link</label>
                    <input type="url" defaultValue="https://youtube.com/@shorthandians" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:border-blue-500 outline-none text-blue-600" />
                </div>

                <div className="pt-4 border-t border-gray-50 mt-6">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors">
                        Save Settings
                    </button>
                </div>
            </div>
        </div>
    );
}
