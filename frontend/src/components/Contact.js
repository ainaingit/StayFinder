import React from 'react';

function Contact() {
    return (
        <div className="container mx-auto mt-16 px-4 lg:px-0">
            <div className="flex justify-center">
                <div className="w-full max-w-2xl">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Get in Touch</h1>
                        <p className="text-lg text-gray-600">Feel free to drop us a line. We’re here to help!</p>
                    </div>

                    <div className="bg-white shadow-xl rounded-lg p-8">
                        <form>
                            <div className="mb-6">
                                <label
                                    htmlFor="name"
                                    className="block text-lg font-medium text-gray-700 mb-2"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-medium text-gray-700 mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-lg font-medium text-gray-700 mb-2"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-gray-500">
                            Or email us directly at{' '}
                            <a
                                href="mailto:support@yourwebsite.com"
                                className="text-indigo-600 font-medium hover:underline"
                            >
                                support@yourwebsite.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
