import React from 'react'

const Home = () => {
    return (
        <>
            <section className='primary_container min-h-screen'>
                    <h1 className='heading'>Biosfera</h1>
            </section>
            <div className="top-0 left-0 w-full overflow-hidden leading-none">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="w-screen" height="100" preserveAspectRatio="none" viewBox="0 0 1440 100">
                    <g mask="url(&quot;#SvgjsMask1033&quot;)" fill="none">
                        <rect width="1440" height="100" x="0" y="0" fill="var(--primary)"></rect>
                        <path d="M 0,3 C 48,15.4 144,62.2 240,65 C 336,67.8 384,14.4 480,17 C 576,19.6 624,80.4 720,78 C 816,75.6 864,7.6 960,5 C 1056,2.4 1104,59.4 1200,65 C 1296,70.6 1392,39.4 1440,33L1440 100L0 100z" fill="var(--secondary)"></path>
                    </g>
                </svg>
            </div>
            <section className='secodary_container'>
                <h1 className='heading'>Section 2</h1>
            </section>
            <div className="top-0 left-0 w-full overflow-hidden leading-none">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="w-screen" height="100" preserveAspectRatio="none" viewBox="0 0 1440 100">
                    <g mask="url(&quot;#SvgjsMask1033&quot;)" fill="none">
                        <rect width="1440" height="100" x="0" y="0" fill="var(--secondary)"></rect>
                        <path d="M 0,3 C 48,15.4 144,62.2 240,65 C 336,67.8 384,14.4 480,17 C 576,19.6 624,80.4 720,78 C 816,75.6 864,7.6 960,5 C 1056,2.4 1104,59.4 1200,65 C 1296,70.6 1392,39.4 1440,33L1440 100L0 100z" fill="var(--accent)"></path>
                    </g>
                </svg>
            </div>
            <section className='accent_container'>
                <h1 className='heading'>Section 3</h1>
            </section>
        </>
    )
}

export default Home