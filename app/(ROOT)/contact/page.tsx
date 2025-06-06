import React from 'react'

export const metadata = {
    title: "Contact Us"
}

const Contact = () => {
    return (
        <>
            <section className='header_container text-center'>
                <h1 className='heading !pb-0 !text-dark'>Get In Touch</h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto pb-4">
                    Have questions about conservation or want to collaborate? We'd love to hear from you.
                </p>
            </section>
            <section className='max-w-screen p-10'>
                <div className="bg-primary p-8 rounded-xl">
                    <h2 className="text-2xl font-bold text-dark mb-6">Send Us a Message</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-dark mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 rounded-lg border border-dark placeholder:text-dark focus:outline-none focus:ring-2 focus:ring-dark"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-dark mb-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-lg border border-dark placeholder:text-dark focus:outline-none focus:ring-2 focus:ring-dark"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-dark mb-2">Subject</label>
                            <select
                                id="subject"
                                className="w-full px-4 py-3 rounded-lg border border-dark placeholder:text-dark focus:outline-none focus:ring-2 focus:ring-dark"
                            >
                                <option value="">Select a topic</option>
                                <option value="partnership">Partnership Inquiry</option>
                                <option value="press">Press Inquiry</option>
                                <option value="volunteer">Volunteer Opportunity</option>
                                <option value="general">General Question</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-dark mb-2">Your Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border border-dark placeholder:text-dark focus:outline-none focus:ring-2 focus:ring-dark"
                                placeholder="How can we help?"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-secondary text-light px-8 py-3 rounded-lg font-bold hover:bg-accent hover:text-dark transition w-full sm:w-auto"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact