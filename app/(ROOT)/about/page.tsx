import TeamCard from '@/app/components/TeamCard'
import React from 'react'

const About = () => {
    return (
        <main>
            <section className='header_container'>
                <div className='flex flex-col text-center p-4'>
                    <h1 className='heading !text-dark'>Protecting Nature <br /> One Story at a Time</h1>
                    <p className="text-xl text-dark max-w-3xl mx-auto">
                        BIOSFERA is a platform dedicated to environmental education, wildlife conservation,
                        and inspiring sustainable action.
                    </p>
                </div>
                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-12 m-10">
                    <div className="bg-secondary p-8 rounded-xl">
                        <h2 className="text-2xl font-bold text-light mb-4 flex items-center gap-2">
                            <span>🌿</span> Our Mission
                        </h2>
                        <p className="text-light">
                            To empower communities with knowledge about biodiversity and climate change
                            through accessible, science-backed content.
                        </p>
                    </div>
                    <div className="bg-secondary p-8 rounded-xl">
                        <h2 className="text-2xl font-bold text-light mb-4 flex items-center gap-2">
                            <span>🔭</span> Our Vision
                        </h2>
                        <p className="text-light">
                            A world where humans and nature thrive together, fueled by awareness
                            and actionable solutions.
                        </p>
                    </div>
                </div>
            </section>


            <div className="top-0 left-0 w-full overflow-hidden leading-none">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="w-screen" height="100" preserveAspectRatio="none" viewBox="0 0 1440 100">
                    <g mask="url(&quot;#SvgjsMask1033&quot;)" fill="none">
                        <rect width="1440" height="100" x="0" y="0" fill="var(--primary)"></rect>
                        <path d="M 0,3 C 48,15.4 144,62.2 240,65 C 336,67.8 384,14.4 480,17 C 576,19.6 624,80.4 720,78 C 816,75.6 864,7.6 960,5 C 1056,2.4 1104,59.4 1200,65 C 1296,70.6 1392,39.4 1440,33L1440 100L0 100z" fill="var(--secondary)"></path>
                    </g>
                </svg>
            </div>

            <section className='bg-secondary'>
                <div className='flex flex-col text-center secondary_container p-4'>
                    <h1 className='heading !text-light'>Meet Our Team</h1>
                    <div className='grid sm:grid-cols-3 pb-20 gap-8'>
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />
                    </div>
                </div>
            </section>

            <div className="top-0 left-0 w-full overflow-hidden leading-none">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="w-screen" height="100" preserveAspectRatio="none" viewBox="0 0 1440 100">
                    <g mask="url(&quot;#SvgjsMask1033&quot;)" fill="none">
                        <rect width="1440" height="100" x="0" y="0" fill="var(--secondary)"></rect>
                        <path d="M 0,3 C 48,15.4 144,62.2 240,65 C 336,67.8 384,14.4 480,17 C 576,19.6 624,80.4 720,78 C 816,75.6 864,7.6 960,5 C 1056,2.4 1104,59.4 1200,65 C 1296,70.6 1392,39.4 1440,33L1440 100L0 100z" fill="var(--primary)"></path>
                    </g>
                </svg>
            </div>

            <section className='bg-primary'>
                <div className="bg-dark-green text-dark p-12 rounded-2xl text-center">
                    <h2 className="text-3xl font-bold mb-6">Join Our Movement</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter for the latest articles, events, and conservation tips.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-6 py-3 rounded-lg text-dark w-full border-2 border-dark placeholder:text-dark sm:w-96 focus:outline-none focus:ring-2 focus:ring-light-green"
                        />
                        <button className="bg-secondary text-light px-8 py-3 rounded-lg font-bold hover:bg-accent hover:text-dark transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

        </main >
    )
}

export default About