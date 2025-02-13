import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../Header';
import Navbar from '../navbar/Navbar';
import Purity from '../Purity';
import Subscribe from '../Subscribe';
import Footer from '../footer/Footer';
import righthalfimage from '../../assets/Home/righthalfimage.png';
import jwelry from '../../assets/Jwellry/jwelry.png';
import jwelry1 from '../../assets/Jwellry/jwelry1.png';
import jwelry2 from '../../assets/Jwellry/jwelry2.png';
import jwelry3 from '../../assets/Jwellry/jwelry3.png';
import jwelry4 from '../../assets/Jwellry/jwelry4.png';
import jwelry5 from '../../assets/Jwellry/jwelry5.png';
import jwelry6 from '../../assets/Jwellry/jwelry6.png';
import jwelry7 from '../../assets/Jwellry/jwelry7.png';
import jwelry8 from '../../assets/Jwellry/jwelry8.png';
import jwelry9 from '../../assets/Jwellry/jwelry9.png';
import jwelry10 from '../../assets/Jwellry/jwelry10.png';
import jwelry11 from '../../assets/Jwellry/jwelry11.png';
import jwelry12 from '../../assets/Jwellry/jwelry12.png';
import jwelry13 from '../../assets/Jwellry/jwelry13.png';
import jwelry14 from '../../assets/Jwellry/jwelry14.png';

const images = [
    { src: jwelry, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: jwelry1, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: jwelry2, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: jwelry3, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: jwelry4, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: jwelry5, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: jwelry6, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: jwelry7, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: jwelry8, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: jwelry9, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: jwelry10, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: jwelry11, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: jwelry12, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: jwelry13, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: jwelry14, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },

];

const dropdowns = [
    { id: 1, title: "Availability", content: "This is the content of dropdown 1." },
    // { id: 2, title: "Price", content: "This is the content of dropdown 2." },
    { id: 3, title: "Metal Color", content: "This is the content of dropdown 3." },
    { id: 4, title: "Metal Type", content: "This is the content of dropdown 4." }
];


function Accordion() {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    return (
        <div className="mx-auto space-y-2">
            {dropdowns.map((dropdown) => (
                <div key={dropdown.id} className='border-t-2 border-black'>
                    <button
                        onClick={() => toggleDropdown(dropdown.id)}
                        className="flex justify-between items-center w-full p-2 font-montserrat text-black rounded-lg transition"
                    >
                        <span>{dropdown.title}</span>
                        {openDropdown === dropdown.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {openDropdown === dropdown.id && (
                        <div className="mt-2 p-2 bg-gray-100">
                            <p className="text-gray-700 ">{dropdown.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

const Necklace = () => {
    return (
        <div className="w-full">
            <Header />
            <Navbar />
            <div className='container mx-auto px-4 md:px-16'>

                {/* Background Image Section */}
                <div className="text-gray-600 body-font w-full shadow-2xl transition-transform  
                bg-cover bg-no-repeat bg-center min-h-[300px] md:min-h-[356px] lg:h-80 bg-Background">
                    <section className="text-gray-600 body-font px-4 sm:px-4 md:px-10 lg:px-0">
                        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-end">
                            {/* Right Image */}
                            <div className="w-full flex justify-center md:justify-end h-96 lg:h-[456px] relative">
                                <img
                                    className="object-cover object-center w-full max-w-xs md:max-w-md lg:max-w-lg  rounded pb-[50px] md:pb-[100px]"
                                    alt="hero"
                                    src={righthalfimage}
                                />
                            </div>
                        </div>
                    </section>
                </div>

                <section className="text-gray-600 body-font w-full">
                    <div className="px-5 py-16 w-full flex flex-col md:flex-row">
                        <div className="w-full md:w-1/4 p-4">
                            <Accordion />
                        </div>
                        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {images.map((image, index) => (
                                <div key={index} className="px-4 py-4 w-full transition-transform duration-500 hover:scale-105   hover:shadow-2xl rounded-lg ease-in-out">
                                    <div className="relative h-48 rounded overflow-hidden">
                                        <img
                                            alt="ecommerce"
                                            className="w-full h-[200px] object-cover block"
                                            src={image.src}
                                        />
                                    </div>
                                    <div className="mt-2 text-left">

                                        <h2 className="text-gray-900 text-lg tracking-widest font-poppins title-font mb-1"> {image.title}</h2>
                                        <h3 className="text-gray-500 title-font text-xs font-medium font-poppins">{image.category}</h3>

                                        <p className="mt-1"></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <Purity />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default Necklace;

