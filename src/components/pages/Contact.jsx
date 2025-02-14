import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        alert("Thank you for reaching out!");
    };

    return (
        <div>
            <Header />
            <Navbar />
            <div className="max-w-5xl mx-auto p-8 bg-white shadow-xl rounded-2xl top-10 relative overflow-hidden flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/2 order-2 md:order-1 relative z-10 flex flex-col justify-center p-6">
                    <h1 className="text-4xl font-bold mb-6 text-yellow-600">Contact Us</h1>

                    <div className="mb-6 space-y-4 text-gray-800">
                        <p className="flex items-center gap-3 text-lg"><FaPhone className="text-yellow-500" /> +91 98765 43210</p>
                        <p className="flex items-center gap-3 text-lg"><FaEnvelope className="text-yellow-500" /> support@jewelshop.com</p>
                        <p className="flex items-center gap-3 text-lg"><FaMapMarkerAlt className="text-yellow-500" /> 123, Gold Street, Mumbai, India</p>
                    </div>

                    <hr className="border-t-2 border-yellow-500 my-4" />
                </div>

                <div className="w-full md:w-1/2 order-1 md:order-2 relative z-10 p-6 bg-gray-100 rounded-xl shadow-md">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                        <textarea name="message" placeholder="Your Message" rows="4" onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
                        <button type="submit" className="w-full p-3 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600 transition">Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
