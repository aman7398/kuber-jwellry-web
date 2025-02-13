import React from 'react'
import { Link } from 'react-router'


const Footer = () => {
    return (
        <div>
            <footer className="text-black bg-[#170500] body-font mt-20 h-auto">
                <div className="container mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col  relative top-10 text-white">
                    <div className="max-w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <div className="flex-wrap md:pl-20">
                            <div className="w-full mt-6 font-montserrat">
                                <h2 className="title-font font-medium font-montserrat tracking-widest text-xl mb-8">MY ACCOUNT</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, dolorem provident totam deleniti</p>
                            </div>
                        </div>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start lg:pl-20 md:pl-20 sm:pl-0 pt-10 cursor-pointer">
                            <Link to={'/#'}><a className=" bg-white rounded-full w-12 h-12 inline-flex items-center justify-center text-black hover:bg-yellow-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a></Link>
                            <Link to={'/#'}><a className="ml-3  bg-white rounded-full w-12 h-12 inline-flex items-center justify-center text-black hover:bg-yellow-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a></Link>
                            <Link to={'/#'}><a className="ml-3 bg-white rounded-full w-12 h-12 inline-flex items-center justify-center text-black hover:bg-yellow-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a></Link>
                        </span>

                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-48 md:mt-0 md:text-left text-center text-white">
                        <div className="lg:w-1/4 md:w-1/2 w-full mt-6 text-white">
                            <h2 className="title-font font-medium font-montserrat tracking-widest text-xl mb-8">MENU</h2>
                            <nav className="list-none mb-10 space-y-2 text-md cursor-pointer text-white font-lato">
                                <li><Link to={'/'}><a className="className hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Home</a></Link></li>
                                <li><Link to={'/Nacklece'}><a className=" hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Necklaces</a></Link></li>
                                <li><Link to={'/Bracelet'}><a className=" hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Bracelet</a></Link></li>
                                <li><Link to={'/Ring'}><a className=" hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Rings</a></Link></li>
                                <li><Link to={'/Earrings'}><a className=" hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Pendant</a></Link></li>
                                <li><Link to={'/Ankle'}><a className=" hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Ankhles Bracelet</a></Link></li>
                                <li><Link to={'/Allpages'}><a className=" hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">All</a></Link></li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full mt-6 text-white">
                            <h2 className="title-font font-medium font-montserrat tracking-widest text-xl mb-8">FOLLOW US ON</h2>
                            <nav className="list-none mb-10 space-y-2 text-md cursor-pointer text-white font-lato">
                                <li><Link to={'/#'}><a className=" hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Twitter</a></Link></li>
                                <li><Link to={'/#'}><a className=" hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Facebook</a></Link></li>
                                <li><Link to={'/#'}><a className=" hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Google Plus</a></Link></li>
                                <li><Link to={'/#'}><a className=" hover:text-yellow-500 relative after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">Instagram</a></Link></li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full mt-6 lg:pl-20 md:pl-20 sm:pl-0 text-white">
                            <h2 className="title-font font-medium font-montserrat tracking-widest text-xl mb-8">ABOUT US</h2>
                            <nav className="list-none mb-10 space-y-2 text-md cursor-pointer text-white font-lato">
                                <li><a className="">Email:</a> <span className='hover:text-blue-500 cursor-pointer'>kuber_jewel@gmail.com</span></li>
                                <li><a className=" ">Phone:</a> <span className='hover:text-blue-500 cursor-pointer'>+917015231369</span></li>
                            </nav>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="bg-[#170500] ">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row text-white">
                        <p className=" text-sm text-center sm:text-left"> 2020
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className=" ml-1" target="_blank">@copyright</a>
                        </p>

                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
