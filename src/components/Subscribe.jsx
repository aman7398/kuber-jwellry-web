import React, { useState } from 'react';

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const handleSubscribe = () => {
        if (email.trim() === "") {
            alert("Bina email Id ke aage nahi jane dunga samjh me ayi.");
        } else {
            alert(`Subscribed successfully with: ${email}`);
            setEmail("");
        }
    };

    return (
        <div className='w-full px-4 md:px-16 text-center'>
            <h2 className='text-3xl md:text-6xl font-bold font-anton mt-6'>Newsletter</h2>
            <p className='text-gray-500 text-lg mt-6 font-poppins'>
                Sign up to receive 10% off your next purchase. <br /> Plus hear about new arrivals and offers.
            </p>
            <div className='flex flex-col md:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-4'>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full md:w-96 p-3 border border-yellow-600 text-center rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-md"
                />
                <button
                    onClick={handleSubscribe}
                    className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-transform duration-300 hover:scale-105 shadow-lg">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Subscribe;