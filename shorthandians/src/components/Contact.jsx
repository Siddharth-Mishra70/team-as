import { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const contactItems = [
        {
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: 'Address',
            value: '98/25/33 LIC Colony Tagore Town,\nPrayagraj, Uttar Pradesh - 211002',
            link: null,
            multiline: true,
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            label: 'Phone',
            value: '+91 7080811235',
            link: 'tel:7080811235',
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            label: 'WhatsApp',
            value: '+91 7080811235',
            link: 'https://wa.me/917080811235',
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: 'Email',
            value: 'ayushpandey3666@gmail.com',
            link: 'mailto:ayushpandey3666@gmail.com',
        },
    ];

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 section-title">
                        Contact Us
                    </h2>
                    <p className="text-gray-500 mt-6 text-base max-w-xl mx-auto">
                        Have questions about our courses or batches? Reach out to us and we'll get back to you promptly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Left — Form + Info */}
                    <div className="space-y-6">
                        {/* Contact Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactItems.map((c, i) => (
                                <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                                            {c.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{c.label}</p>
                                            {c.link ? (
                                                <a
                                                    href={c.link}
                                                    target={c.link.startsWith('http') ? '_blank' : undefined}
                                                    rel="noreferrer"
                                                    className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                                                >
                                                    {c.value}
                                                </a>
                                            ) : (
                                                <p className="text-sm font-semibold text-gray-800 whitespace-pre-line">{c.value}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Google Maps Placeholder */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                            <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-16 h-16 blue-gradient rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <p className="font-bold text-gray-800 text-base">Shorthandians Institute</p>
                                    <p className="text-sm text-gray-500 mt-1">98/25/33 LIC Colony, Tagore Town</p>
                                    <p className="text-sm text-gray-500">Prayagraj, UP - 211002</p>
                                    <a
                                        href="https://maps.google.com/?q=Tagore+Town+Prayagraj"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-block mt-4 text-sm font-semibold text-blue-600 hover:underline"
                                    >
                                        Open in Google Maps →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — Contact Form */}
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                        <h3 className="text-xl font-black text-gray-900 mb-2">Send Us a Message</h3>
                        <p className="text-gray-500 text-sm mb-6">Fill the form below and we'll contact you within 24 hours.</p>

                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="name">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="phone">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Your WhatsApp / mobile number"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Which course are you interested in? Any questions?"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 resize-none"
                                    />
                                </div>

                                <button
                                    id="contact-submit-btn"
                                    type="submit"
                                    className="btn-primary w-full justify-center py-3.5 text-base"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    Send Message
                                </button>

                                <p className="text-center text-xs text-gray-400 mt-2">
                                    Or WhatsApp us directly at{' '}
                                    <a href="https://wa.me/917080811235" target="_blank" rel="noreferrer" className="text-green-600 font-semibold hover:underline">
                                        +91 7080811235
                                    </a>
                                </p>
                            </form>
                        ) : (
                            <div className="text-center py-10">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-black text-gray-900 mb-2">Message Sent!</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Thank you, <strong>{form.name}</strong>! We'll contact you at <strong>{form.phone}</strong> within 24 hours.
                                </p>
                                <button
                                    className="btn-outline mt-6 mx-auto"
                                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', message: '' }); }}
                                >
                                    Send Another
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
