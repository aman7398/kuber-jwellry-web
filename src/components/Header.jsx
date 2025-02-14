import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { Heart, ShoppingCart, User, Mic, Search } from 'lucide-react'; // Icons import kiye
import logo from '../assets/logo.png'; // Logo image rehne diya
import shopping from '../assets/Home/shopping-cart.svg';
import wishlist from '../assets/Home/wishlisr.svg';
import contact from '../assets/Home/contact.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [SearchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        // console.log("searching for:", event.target.value);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setSearchResults(true);

        }
    };
    return (
        <header className="bg-black text-white p-4 w-full top-0 left-0 shadow-lg hidden md:block">
            <div className="flex items-center justify-between px-4 md:px-16">

                {/* Logo */}
                <Link to="/">
                    <img src={logo} alt="Logo" className="h-20 w-22 top-0 object-contain cursor-pointer" />
                </Link>

                {/* Search Bar */}
                <div className="relative flex-1 max-w-lg mx-auto hidden md:flex items-center space-x-2">
                    <Mic className="absolute right-10 w-5 h-5 cursor-pointer text-black hover:text-gray-500" />
                    <Search className="absolute right-3 w-5 h-5 text-black hover:text-gray-500  " />
                    <input
                        type="text"
                        value={SearchQuery}
                        onChange={handleSearch}
                        onKeyDown={handleKeyDown}
                        placeholder="Search for Gold Jewellery, Diamond Jewellery and more.."
                        className="w-full p-2 pr-10 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-md"
                    />
                </div>

                {/* Right Side Icons */}
                <div className="hidden md:flex items-center space-x-2">
                    <Link to="/#" className="hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">
                        <img src={wishlist} className='w-6 h-6' alt="wishlist-icon" />
                    </Link>
                    <div className="w-[3px] h-6 bg-gray-300"></div>
                    <Link to="/#" className="hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">
                        <img src={contact} alt="cart-icon" className='w-6 h-6' />
                    </Link>
                    <div className="w-[3px] h-6 bg-gray-300"></div>
                    <Link to="/#" className="hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">
                        <img src={shopping} alt="contact-icon" className='w-6 h-6' />
                    </Link>
                </div>


                {/* Mobile Menu Toggle */}
                {/* <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button> */}
            </div>

            {/* Mobile Menu */}
            {/* {isOpen && (
                    <div className="md:hidden bg-black text-white p-4 absolute top-full left-0 w-full flex flex-col items-center space-y-4 shadow-md">
                        <Link to="/wishlist" className="block hover:text-yellow-500"></Link>
                        <Link to="/cart" className="block hover:text-yellow-500"></Link>
                        <Link to="/contact" className="block hover:text-yellow-500"> </Link>
                    </div>
                )} */}
        </header>
    );
};

export default Navbar;
