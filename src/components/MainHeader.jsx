import React from 'react';
import manbgimg from '../assets/Home/manbgimg.png';
import sideimage from '../assets/Home/sideimage.png';
import { motion } from 'framer-motion';

const MainHeader = () => {
    const clickHandler = () => {
        alert('button clicked');
    }

    return (
        <div className='w-full lg:px-16 pt-28 md:pt-0 md:px-10'>
            {/* Background Image Container - Hidden on Small Screens */}
            <div className="hidden md:block absolute w-[100%] left-0  h-[74vh] custom-bg bg-no-repeat"
                style={{ backgroundImage: `url(${manbgimg})` }}>
            </div>

            <div className="relative text-gray-600 body-font h-[74vh] w-full flex items-center justify-center">
                <section className="w-full text-gray-600 body-font">
                    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-5 md:px-10 lg:px-16 md:gap-4 lg:gap-0">

                        {/* Left Content with Animation */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="md:w-1/2 w-full text-center flex flex-col items-center md:items-start mb-10 md:mb-0 md:text-left"
                        >
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-anticSlab">
                                IMPECCABLE CRAFTSMANSHIP
                                <br className="hidden lg:inline-block" />AND FINESSE
                            </h1>
                            <p className="mb-8 leading-relaxed max-w-md text-[#787054]">
                                An example of intricate workmanship and details, elegant necklaces and long and short chains form a part of our desirable collection.
                            </p>

                            {/* Animated Button */}
                            <motion.button
                                onClick={clickHandler}
                                whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 183, 0, 0.7)" }}
                                whileTap={{ scale: 0.9 }}
                                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none 
                hover:bg-indigo-600 rounded-full text-lg bg-gradient-to-r from-[#FFB700] to-[#dba51c] shadow-lg 
                shadow-yellow-500/50"
                            >
                                Explore Now
                            </motion.button>
                        </motion.div>

                        {/* Right Image with Animation */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="md:w-1/2 w-full flex justify-center md:justify-end"
                        >
                            <motion.img
                                className="object-cover object-center rounded h-[50vh] md:h-[45vh] lg:h-[65vh]"
                                alt="hero"
                                src={sideimage}
                                whileHover={{ scale: 1.05 }}
                            />
                        </motion.div>

                    </div>
                </section>
            </div>
        </div>
    );
}

export default MainHeader;
