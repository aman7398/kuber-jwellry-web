import React from 'react';
import Rectangle62 from '../assets/Rectangle62.png';
import Rectangle63 from '../assets/Rectangle63.png';
import Rectangle64 from '../assets/Rectangle64.png';
import Rectangle65 from '../assets/Rectangle65.png';
import Rectangle67 from '../assets/Rectangle67.png';

const images = [
    { src: Rectangle62, text: "" },
    { src: Rectangle63, text: "" },
    { src: Rectangle64, text: "" },
    { src: Rectangle65, text: "" },
    { src: Rectangle67, text: "" }
];

const Purity = () => {
    return (
        <div className='w-full px-4 md:px-16'>
            <h1 className='text-center text-3xl md:text-6xl font-bold font-anton mt-8 md:mt-16'>Purity on Instagram</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
                        {images.map((item, index) => (
                            <div key={index} className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 text-center">
                                <img className="h-48 md:h-36 w-full object-cover object-center" src={item.src} alt="Instagram Post" />
                                <p className="mt-2 text-gray-800 font-medium">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Purity;