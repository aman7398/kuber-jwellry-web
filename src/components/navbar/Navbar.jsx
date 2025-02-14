import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Home/logo.png';
import { Heart, ShoppingCart, User } from 'lucide-react'; // Icons ke liye import
import wishlist from '../../assets/Home/wishlisr.svg';
import contact from '../../assets/Home/contact.svg';
import shopping from '../../assets/Home/shopping-cart.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='w-full bg-gradient-to-r from-[#5b3526] via-[#d47a54] via-50% to-[#5e3423] to-100% text-white border-gray-200 shadow-xl top-0 left-0 z-50'>
                <nav className="px-4 md:px-16 py-4 flex items-center justify-between">
                    {/* Logo (Visible only in Mobile) */}
                    <Link to="/" className="text-xl font-bold md:hidden">
                        <img src={logo} alt="Logo" className="h-10" />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex lg:space-x-12 text-lg px-56 md:font-montserrat sm:font-montserrat font-montserrat md:w-full md:justify-center md:space-x-6">
                        <li><Link to="/" className="hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Home</Link></li>
                        <li><Link to="/Nacklece" className="hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Necklace</Link></li>
                        <li><Link to="/Bracelet" className="hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Bracelet</Link></li>
                        <li><Link to="/Ring" className="hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Rings</Link></li>
                        <li><Link to="/Earrings" className="hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Pendant</Link></li>
                        <li><Link to="/Ankle" className="hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Ankle Bracelets</Link></li>
                        <li><Link to="/Allpages" className="hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">All</Link></li>
                        <li><Link to="/Contact" className="hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Contact Us</Link></li>
                    </ul>

                    {/* Icons Section */}

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? "✖" : "☰"}
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-transform duration-300 ${isOpen ? "block" : "hidden"} `}>
                    <ul className="flex flex-col items-start sticky top-0 z-50 font-montserrat space-y-4 py-6 pl-4 text-lg bg-gradient-to-r from-[#5b3526] via-[#d47a54] via-50% to-[#5e3423] to-100% w-full">
                        <li><Link to="/" className="hover:text-yellow-500">Home</Link></li> <hr className="border-gray-400 w-full" />
                        <li><Link to="/Nacklece" className="hover:text-yellow-500">Necklace</Link></li> <hr className="border-gray-400 w-full" />
                        <li><Link to="/Bracelet" className="hover:text-yellow-500">Bracelet</Link></li> <hr className="border-gray-400 w-full" />
                        <li><Link to="/Ring" className="hover:text-yellow-500">Rings</Link></li> <hr className="border-gray-400 w-full" />
                        <li><Link to="/Earrings" className="hover:text-yellow-500">Pendant</Link></li> <hr className="border-gray-400 w-full" />
                        <li><Link to="/Ankle" className="hover:text-yellow-500">Ankle Bracelets</Link></li> <hr className="border-gray-400 w-full" />
                        <li><Link to="/Allpages" className="hover:text-yellow-500">All</Link></li> <hr className="border-gray-400 w-full" />
                        <li><Link to="/Contact" className="hover:text-yellow-500">Contact Us</Link></li> <hr className="border-gray-400 w-full" />
                    </ul>

                    {/* Mobile Icons Section */}
                    <div className="flex justify-center space-x-8 py-4 bg-gradient-to-r from-[#5b3526] via-[#d47a54] via-50% to-[#5e3423] to-100%">
                        <Link to="/#" className="hover:text-yellow-500"><img src={wishlist} alt="wishlist-icon" /></Link>
                        <Link to="/#" className="hover:text-yellow-500"><img src={contact} alt="contact-icon" /></Link>
                        <Link to="/#" className="hover:text-yellow-500"><img src={shopping} alt="shopping-icon" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
