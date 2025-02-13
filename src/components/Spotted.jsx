import React from 'react';
import Rectangle67 from '../assets/Home/Rectangle67.png';
import Rectangle68 from '../assets/Home/Rectangle68.png';
import Rectangle69 from '../assets/Home/Rectangle69.png';

const spottedData = [
    { src: Rectangle67, text: "" },
    { src: Rectangle68, text: "" },
    { src: Rectangle69, text: "" }
];

const Spotted = () => {
    return (
        <div className='w-full px-4 md:px-16'>
            <h1 className='text-center text-3xl md:text-6xl font-bold font-anton mt-8 md:mt-16'>Spotted on</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {spottedData.map((item, index) => (
                            <div key={index} className="p-4 flex flex-col items-center">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
                                    <img className="h-72 md:h-96 w-full object-cover object-center" src={item.src} alt="blog" />
                                </div>
                                <p className="mt-4 text-base text-center font-medium text-gray-800">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Spotted;