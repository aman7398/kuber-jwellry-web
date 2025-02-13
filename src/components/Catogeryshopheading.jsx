import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Catogeryshopheading = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const navigate = useNavigate(); // for Navigation

    const handleCategoryChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue) {
            navigate(selectedValue); // Page redirect
        }
    };

    return (

        <div className='w-full px-4 md:px-16 mt-20 md:mt-20'>
            <hr className='w-full h-[1px] bg-black mt-6 lg:hidden md:hidden' />
            <div className="text-center text-3xl md:text-6xl  mt-4">
                <h1 className='font-anton'>Shop By Categories</h1>
            </div>

            {/* Mobile View Dropdown */}
            <div className="md:hidden w-full flex justify-center p-6 font-poppins">
                <select
                    className="w-full p-2 border rounded text-lg"
                    value={selectedCategory}
                    onChange={handleCategoryChange} // Call event Handler
                >
                    <option value="">Select Category</option>
                    <option value="/Earrings">Earrings</option>
                    <option value="/Nacklece">Necklace</option>
                    <option value="/Bracelet">Bracelet</option>
                    <option value="/Ring">Rings</option>
                </select>
            </div>

            {/* Large Screen View - Normal List */}
            <div className="hidden md:flex w-full justify-center p-6 md:p-10 font-poppins">
                <ul className="flex flex-col md:flex-row text-lg md:text-[22px] space-y-6 md:space-y-0 md:space-x-12 cursor-pointer text-center">
                    <li><Link to="/Earrings" className="block py-2 px-4 text-black rounded hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Earrings</Link></li>
                    <li><Link to="/Nacklece" className="block py-2 px-4 text-black rounded hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Necklace</Link></li>
                    <li><Link to="/Bracelet" className="block py-2 px-4 text-black rounded hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Bracelet</Link></li>
                    <li><Link to="/Ring" className="block py-2 px-4 text-black rounded hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Rings</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Catogeryshopheading;
