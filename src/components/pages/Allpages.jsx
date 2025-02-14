import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Header from '../Header'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Purity from '../Purity'
import Subscribe from '../Subscribe'
import Allbg from '../../assets/Allphoto/Allbg.png'
import all from '../../assets/Allphoto/all.png'
import all1 from '../../assets/Allphoto/all1.png'
import all2 from '../../assets/Allphoto/all2.png'
import all3 from '../../assets/Allphoto/all3.png'
import all4 from '../../assets/Allphoto/all4.png'
import all5 from '../../assets/Allphoto/all5.png'
import all6 from '../../assets/Allphoto/all6.png'
import all7 from '../../assets/Allphoto/all7.png'
import all8 from '../../assets/Allphoto/all8.png'
import all9 from '../../assets/Allphoto/all9.png'
import all10 from '../../assets/Allphoto/all10.png'
import all11 from '../../assets/Allphoto/all11.png'
import all12 from '../../assets/Allphoto/all12.png'
import all13 from '../../assets/Allphoto/all13.png'
import all14 from '../../assets/Allphoto/all14.png'
import allbging from '../../assets/Allphoto/allbging.png'

// ✅ Images with Dynamic Text
const images = [
    { src: all, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: all1, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: all2, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: all3, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: all4, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: all5, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: all6, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: all7, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: all8, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: all9, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: all10, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: all11, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: all12, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
    { src: all13, category: "HOPE EARINGS", title: "White Gold 14 k ", price: "" },
    { src: all14, category: "HOPE EARINGS", title: "White Gold 14 k", price: "" },
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

const Allpages = () => {
    return (
        <div className='w-full'>
            <Header />
            <Navbar />
            <div className='container mx-auto px-4 md:px-16'>

                {/* Background Image Section */}
                <div className="text-gray-600 body-font w-full shadow-2xl transition-transform  
                bg-cover bg-center">
                    <img src={allbging} className="w-full lg:min-[200px] md:min-h-[20vh] h-[350px] bg-contain bg-no-repeat bg-center" alt="" />
                </div>

                {/* ✅ Left Side Accordion + Right Side Jewelry Grid */}
                <section className="text-gray-600 body-font w-full py-12">
                    <div className="px-5 w-full flex flex-col md:flex-row">

                        {/* Left Side Accordion */}
                        <div className="w-full md:w-1/4 p-4">
                            <Accordion />
                        </div>

                        {/* Right Side Jewelry Grid */}
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
                                        <h3 className="text-gray-900 text-lg font-poppins tracking-widest title-font mb-1">{item.category}</h3>
                                        <h2 className="text-gray-500 title-font text-xs font-poppins font-medium">{item.title}</h2>
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

export default Allpages;
