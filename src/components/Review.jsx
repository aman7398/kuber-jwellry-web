import React from 'react';
import ladaki from '../assets/ladaki.png';
import ladika from '../assets/ladika.png';
import ladki from '../assets/ladki.png';

const reviews = [
    { img: ladaki, name: "ANN SMITH", role: "CEO & Founder", text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk." },
    { img: ladika, name: "EDISON", role: "Designer", text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk." },
    { img: ladki, name: "ANN SMITH", role: "CEO & Founder", text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk." }
];

const Review = () => {
    return (
        <div className='w-full px-4 md:px-16'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <div key={index} className="p-4 flex flex-col items-center text-center hover:shadow-2xl rounded-lg transition duration-300">
                                <img alt="testimonial" className="w-20 h-20 mb-4 object-cover object-center rounded-full border-2 border-gray-200 bg-gray-100" src={review.img} />
                                <h2 className="text-gray-900 font-medium font-poppins title-font tracking-wider text-sm">{review.name}</h2>
                                <p className="text-gray-500 font-lato">{review.role}</p>
                                <p className="leading-relaxed pt-4 text-center font-poppins text-gray-700 px-4">{review.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Review;