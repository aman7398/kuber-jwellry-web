import React from 'react';
import { Truck, RotateCw, ShieldCheck } from 'lucide-react'; // Icons import kiye

const Service = () => {
    return (
        <div className='w-full px-4 md:px-16'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center justify-center md:justify-between">

                        {/* Shipping Worldwide */}
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4 rounded-lg transition duration-300 group">
                            <div className="h-full">
                                <Truck className="w-20 h-20 mb-4 mx-auto text-yellow-500" /> {/* Icon */}
                                <h2 className="text-gray-900 font-bold font-poppins title-font tracking-wider text-lg">Shipping Worldwide</h2>
                                <span className="inline-block h-1 w-10 rounded bg-yellow-400 mt-4 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-16"></span>
                                <p className="leading-relaxed px-4">We deliver your orders globally with fast & secure shipping.</p>
                            </div>
                        </div>

                        {/* 14 Days Return */}
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4 rounded-lg transition duration-300 group">
                            <div className="h-full">
                                <RotateCw className="w-20 h-20 mb-4 mx-auto text-yellow-500" /> {/* Icon */}
                                <h2 className="text-gray-900 font-bold font-poppins title-font tracking-wider text-lg">14 Days Return</h2>
                                <span className="inline-block h-1 w-10 rounded bg-yellow-400 mt-4 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-16"></span>
                                <p className="leading-relaxed px-4">Easy and hassle-free returns within 14 days of purchase.</p>
                            </div>
                        </div>

                        {/* Secure Payment */}
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4 rounded-lg transition duration-300 group">
                            <div className="h-full">
                                <ShieldCheck className="w-20 h-20 mb-4 mx-auto text-yellow-500" /> {/* Icon */}
                                <h2 className="text-gray-900 font-bold font-poppins title-font tracking-wider text-lg">Secure Payment</h2>
                                <span className="inline-block h-1 w-10 rounded bg-yellow-400 mt-4 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-16"></span>
                                <p className="leading-relaxed px-4">100% secure payment with multiple payment options.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Service;
