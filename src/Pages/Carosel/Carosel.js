import React from 'react';

const Carosel = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-slate-content">
                    <div className="max-w-md">
                        <h1 className="mb-2 text-4xl font-bold">Learn More Languages</h1>
                        <h2 className="mb-4 text-2xl font-bold">Become Multilingual</h2>
                        <p className="mb-5">Learn a language right here with hundreds of free language-learning lessons, games and activities. Join us and have some fun.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carosel;