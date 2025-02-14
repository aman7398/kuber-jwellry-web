import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Header from '../Header'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Purity from '../Purity'
import Subscribe from '../Subscribe'
import braceletbg from '../../assets/BrasletImage/braceletbg.png'
import brasletimg from '../../assets/BrasletImage/brasletimg.png'
import brasletimg1 from '../../assets/BrasletImage/brasletimg1.png'
import brasletimg3 from '../../assets/BrasletImage/brasletimg3.png'
import brasletimg4 from '../../assets/BrasletImage/brasletimg4.png'
import brasletimg5 from '../../assets/BrasletImage/brasletimg5.png'
import brasletimg6 from '../../assets/BrasletImage/brasletimg6.png'
import brasletimg7 from '../../assets/BrasletImage/brasletimg7.png'
import brasletimg8 from '../../assets/BrasletImage/brasletimg8.png'
import brasletimg9 from '../../assets/BrasletImage/brasletimg9.png'
import brasletimg10 from '../../assets/BrasletImage/brasletimg10.png'
import brasletimg11 from '../../assets/BrasletImage/brasletimg11.png'
import brasletimg12 from '../../assets/BrasletImage/brasletimg12.png'
import brasletimg13 from '../../assets/BrasletImage/brasletimg13.png'
import brasletimg14 from '../../assets/BrasletImage/brasletimg14.png'
import brasletimg15 from '../../assets/BrasletImage/brasletimg15.png'

// ✅ Images with Dynamic Text
const images = [
    { src: brasletimg, category: "HOPE EARINGS", title: "Gold Bracelet", price: "" },
    { src: brasletimg1, category: "HOPE EARINGS", title: "Diamond Bracelet", price: "" },
    { src: brasletimg3, category: "HOPE EARINGS", title: "Silver Bracelet", price: "" },
    { src: brasletimg4, category: "HOPE EARINGS", title: "Platinum Band", price: "" },
    { src: brasletimg5, category: "HOPE EARINGS", title: "Antique Style", price: "" },
    { src: brasletimg6, category: "HOPE EARINGS", title: "Emerald Charm", price: "" },
    { src: brasletimg7, category: "HOPE EARINGS", title: "Sapphire Design", price: "" },
    { src: brasletimg8, category: "HOPE EARINGS", title: "Fashion Bracelet", price: "" },
    { src: brasletimg9, category: "HOPE EARINGS", title: "Handcrafted", price: "" },
    { src: brasletimg10, category: "HOPE EARINGS", title: "Ruby Bracelet", price: "" },
    { src: brasletimg11, category: "HOPE EARINGS", title: "Platinum Diamond", price: "" },
    { src: brasletimg12, category: "HOPE EARINGS", title: "Heart Bracelet", price: "" },
    { src: brasletimg13, category: "HOPE EARINGS", title: "Classic Gold", price: "" },
    { src: brasletimg14, category: "HOPE EARINGS", title: "Engraved Bracelet", price: "" },
    { src: brasletimg15, category: "HOPE EARINGS", title: "Custom Design", price: "" },
];

// ✅ Accordion Component
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

const Bracelet = () => {
    return (
        <div className='w-full'>
            <Header />
            <Navbar />
            <div className='container mx-auto px-4 md:px-16'>

                {/* Background Image Section */}
                <div className="text-gray-600 body-font w-full shadow-2xl transition-transform  
                bg-cover bg-center">
                    <img src={braceletbg} className="w-full lg:min-[200px] md:min-h-[20vh] h-[350px] bg-contain bg-no-repeat bg-center" alt="" />
                </div>

                {/* ✅ Left Side Accordion + Right Side Bracelets */}
                <section className="text-gray-600 body-font w-full py-12">
                    <div className="px-5 w-full flex flex-col md:flex-row">

                        {/* Left Side Accordion */}
                        <div className="w-full md:w-1/4 p-4">
                            <Accordion />
                        </div>

                        {/* Right Side Bracelets Grid */}
                        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {images.map((item, index) => (
                                <div key={index} className="px-4 py-4 w-full transition-transform duration-500 hover:scale-105  hover:shadow-2xl rounded-lg">
                                    <div className="relative h-48 rounded overflow-hidden">
                                        <img
                                            alt="ecommerce"
                                            className="w-full h-[200px] object-cover block"
                                            src={item.src}
                                        />
                                    </div>
                                    <div className="mt-2 text-left">
                                        <h3 className="text-gray-900 text-lg font-poppins tracking-widest title-font mb-1">{item.category}</h3>
                                        <h2 className="text-gray-500 title-font font-poppins text-xs font-medium">{item.title}</h2>
                                        <p className="mt-1">{item.price}</p>
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
    )
}

export default Bracelet;
