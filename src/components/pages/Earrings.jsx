import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Header from '../Header'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Purity from '../Purity'
import Subscribe from '../Subscribe'
import pendant from '../../assets/PendantImg/pendant.png'
import pendant1 from '../../assets/PendantImg/pendant1.png'
import pendant2 from '../../assets/PendantImg/pendant2.png'
import pendant3 from '../../assets/PendantImg/pendant3.png'
import pendant4 from '../../assets/PendantImg/pendant4.png'
import pendant5 from '../../assets/PendantImg/pendant5.png'
import pendant6 from '../../assets/PendantImg/pendant6.png'
import pendant7 from '../../assets/PendantImg/pendant7.png'
import pendant8 from '../../assets/PendantImg/pendant8.png'
import pendant9 from '../../assets/PendantImg/pendant9.png'
import pendant10 from '../../assets/PendantImg/pendant10.png'
import pendant11 from '../../assets/PendantImg/pendant11.png'
import pendant12 from '../../assets/PendantImg/pendant12.png'
import pendant13 from '../../assets/PendantImg/pendant13.png'
import pendant14 from '../../assets/PendantImg/pendant14.png'
import pendantbging from '../../assets/PendantImg/pendantbging.png'

// ✅ Images with Dynamic Text
const images = [
    { src: pendant, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: pendant1, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: pendant2, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: pendant3, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: pendant4, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: pendant5, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: pendant6, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: pendant7, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: pendant8, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: pendant9, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: pendant10, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: pendant11, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: pendant12, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: pendant13, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: pendant14, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
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

const Earrings = () => {
    return (
        <div className='w-full'>
            <Header />
            <Navbar />
            <div className='container mx-auto px-4 md:px-16'>

                {/* Background Image Section */}
                <div className="text-gray-600 body-font w-full shadow-2xl transition-transform  
                bg-cover bg-center">
                    <img src={pendantbging} className='w-full lg:min-[200px] md:min-h-[20vh] h-[350px] bg-contain bg-no-repeat bg-center' alt="" />
                </div>

                {/* ✅ Left Side Accordion + Right Side Pendants */}
                <section className="text-gray-600 body-font w-full py-12">
                    <div className="px-5 w-full flex flex-col md:flex-row">

                        {/* Left Side Accordion */}
                        <div className="w-full md:w-1/4 p-4">
                            <Accordion />
                        </div>

                        {/* Right Side Pendants Grid */}
                        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {images.map((item, index) => (
                                <div key={index} className="px-4 py-4 w-full transition-transform duration-500 hover:scale-105 hover:shadow-2xl rounded-lg">
                                    <div className="relative h-48 rounded overflow-hidden">
                                        <img
                                            alt="ecommerce"
                                            className="w-full h-[200px] object-cover block"
                                            src={item.src}
                                        />
                                    </div>
                                    <div className="mt-2 text-left">
                                        <h3 className="text-gray-500 text-lg tracking-widest font-poppins title-font mb-1">{item.category}</h3>
                                        <h2 className="text-gray-900 title-font text-xs font-poppins font-medium">{item.title}</h2>
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

export default Earrings;
