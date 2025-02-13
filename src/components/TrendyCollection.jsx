import React from 'react';
import slider from '../assets/Home/slider.png';
import slider1 from '../assets/Home/slider1.png';
import sliderimg from '../assets/Home/sliderimg.png';
import slider3 from '../assets/Home/slider3.png';

const imageData = [
    { src: slider, text: "Latest trendy ring collection for elegant looks." },
    { src: slider1, text: "Premium bracelets to match your fashion style." },
    { src: sliderimg, text: "Stylish necklaces designed for every occasion." },
    { src: slider3, text: "Exclusive earring sets with unique craftsmanship." }
];

const TrendyCollection = () => {
    return (
        <div className='w-full px-4 md:px-16'>
            <div className="text-center mb-8">
                <h1 className='text-3xl md:text-6xl font-bold font-anton'>Trendy Collection</h1>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {imageData.map((image, index) => (
                            <div key={index} className="p-4 flex flex-col items-center">
                                <img
                                    className="h-72 md:h-96 rounded w-full object-cover object-center shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
                                    src={image.src}
                                    alt="content"
                                />
                                <p className="mt-4 text-base text-center font-semibold  font-poppins text-gray-800">{image.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TrendyCollection;