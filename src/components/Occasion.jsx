import React from 'react';
import jwellryimg from '../assets/Home/jwellryimg.png';
import lookbook from '../assets/Home/lookbook.png';
import sectionlink from '../assets/Home/sectionlink.png';

const Occasion = () => {
    const clickHandler = () => {
        alert('button clicked');
    }
    return (
        <div className='w-full px-4 md:px-16'>
            <div className="flex flex-col md:flex-row w-full min-h-[55vh] items-center">
                {/* Left Section - Jewelry Image with Tag */}
                <div className="relative w-full md:w-1/3 flex justify-center items-center">
                    <img
                        src={lookbook}
                        alt="Jewelry Hand"
                        className="w-full h-96 object-cover rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
                    />
                    <div className="absolute top-1/4 lg:left-1/4 md:left-1/4 bg-white shadow-lg p-2  rounded-lg flex flex-col items-center text-center 
                        transition-transform duration-300 hover:scale-105">
                        <img
                            src={jwellryimg}
                            alt="Gold Stacking Ring"
                            className="w-16 h-16 rounded-md object-cover"
                        />
                        <span className="text-sm font-semibold font-Libre">Gold Stacking Ring</span>
                        <span className="text-sm text-gray-500 font-Libre"></span>
                    </div>
                </div>

                {/* Right Section - Text & Button */}
                <div className="w-full md:w-2/3 bg-black text-white p-8 flex flex-col justify-center text-left h-96 relative">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="flex flex-col justify-center items-center lg:items-start flex-1 text-center md:text-left lg:mt-16">
                            <h2 className="text-xl md:text-3xl font-semibold mb-4 md:ml-6 
                                transition-transform duration-300 hover:scale-105 font-poppins">
                                Jewelry for <br className='hidden md:block' /> Every Occasion
                            </h2>
                            <div className='lg:ml-6 '>
                                <button onClick={clickHandler} className="bg-yellow-500 text-black px-6 py-2 rounded-full text-lg font-semibold shadow-lg 
                                hover:bg-yellow-600 transition-transform duration-300 hover:scale-105">
                                    Shop Now →
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:block mr-0 md:mr-16">
                            <img
                                src={sectionlink}
                                alt="Jewelry"
                                className="w-[200px] md:w-[250px] h-[250px] md:h-[320px] rounded-lg object-cover shadow-lg hover:shadow-2xl transition duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Occasion;