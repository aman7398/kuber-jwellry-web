import React from 'react';
import img2 from '../assets/img2.png';
import Componentimg from '../assets/Home/componentimg.png';
import Componentimg2 from '../assets/Home/componentimg2.png';
import Componentimg1 from '../assets/Home/componentimg1.png';
import image from '../assets/Home/image.png';

const Collection = () => {
    return (
        <div className='w-full px-4 md:px-16'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        {/* Left Side */}
                        <div className="flex flex-col gap-4">
                            <img alt="gallery" className="w-full h-[50vh] object-cover mt-12 shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl" src={img2} />
                            <div className="grid grid-cols-2 gap-4">
                                <img alt="gallery" className="w-full h-[50vh] object-cover shadow-lg  transition-transform duration-500 hover:scale-105 hover:shadow-2xl" src={Componentimg} />
                                <img alt="gallery" className="w-full h-[50vh] object-cover shadow-lg  transition-transform duration-500 hover:scale-105 hover:shadow-2xl" src={Componentimg2} />
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className="grid grid-cols-2 gap-4 mt-12">
                            <img alt="gallery" className="w-full h-[50vh] object-cover shadow-lg  transition-transform duration-500 hover:scale-105 hover:shadow-2xl" src={Componentimg} />
                            <img alt="gallery" className="w-full h-[50vh] object-cover shadow-lg  transition-transform duration-500 hover:scale-105 hover:shadow-2xl" src={Componentimg1} />
                            <img alt="gallery" className="col-span-2 w-full h-[50vh] object-cover shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl" src={image} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Collection;