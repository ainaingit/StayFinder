import React from 'react';

function Contact() {
    return (
        <div className="container mx-auto mt-10 px-4">
            <div className="flex justify-center">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">Contact Us</h1>
                    <p className="text-center text-gray-600 mb-6">We'd love to hear from you! Please send us a message using the form below.</p>

                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your name" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your email" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                                <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Write your message here..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
