import React from 'react';
import aboutus from '../assets/Home/aboutus.png';


const Aboutsection = () => {
    const clickHandler = () => {
        alert('bahot dukh bhari kahani hai bhai aage mat ja yahi pe drop kar de...');
    }
    return (
        <div className='w-full px-4 md:px-16'>
            <div className="w-full min-h-[80vh] bg-[#170500] flex flex-col md:flex-row items-center justify-center">
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
                    <img
                        src={aboutus}
                        alt="About Us"
                        className="w-3/4 h-64 md:h-96 object-cover transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                    />
                </div>

                {/* Right Side - Text */}
                <div className="w-full md:w-1/2 text-white p-6 md:p-8 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">About Us</h2>
                    <p className="text-lg text-gray-300 max-w-lg font-poppins">
                        We are a dedicated team committed to providing high-quality services and
                        exceptional products to our valued customers. Our mission is to bring
                        innovation and excellence in everything we do.
                    </p>
                    <div className='mt-4'>
                        <button onClick={clickHandler} className="bg-yellow-500 px-8 py-2 rounded-full text-white text-lg font-serif shadow-2xl hover:shadow-lg hover:bg-yellow-600 transition">
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutsection;