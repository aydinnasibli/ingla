import React from 'react';
import Logo from '../assets/cropped_image.png';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="w-full bg-transparent text-black py-16">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Logo and Description Section */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                        <a href="https://thexactime.com/" className="flex justify-center sm:justify-start mb-6">
                            <img alt="Logo" src={Logo} className="w-28 lg:w-32" />
                        </a>
                        <p className="text-sm text-gray-700 mb-6">
                            Trusted by over 5 million customers in more than 100 countries. Have any questions? Feel free to contact us!
                        </p>
                    </div>

                    {/* Navigation Links Section */}
                    <div className="text-left">
                        <h4 className="text-xl font-semibold mb-4 text-black">Linklər</h4>
                        <ul className="space-y-3 text-sm">
                            {["Xidmətlər", "Haqqımızda", "Kontakt", "Xaricdə Təhsil", "Preschool"].map((link, idx) => (
                                <li key={idx}>
                                    <a href="#" className="text-black hover:text-gray-700">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products & Services Section */}
                    <div className="text-left">
                        <h4 className="text-xl font-semibold mb-4 text-black">Products & Services</h4>
                        <ul className="space-y-3 text-sm">
                            {["Figma UI System", "Icons Assets", "Responsive Blocks", "Components Library"].map((link, idx) => (
                                <li key={idx}>
                                    <a href="#" className="text-black hover:text-gray-700">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="text-left">
                        <h4 className="text-xl font-semibold mb-4 text-black">Follow Us</h4>
                        <div className="flex space-x-6">
                            <a href="#" className="text-black hover:text-gray-700">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="text-black hover:text-gray-700">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="text-black hover:text-gray-700">
                                <FaYoutube size={24} />
                            </a>
                            <a href="#" className="text-black hover:text-gray-700">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="#" className="text-black hover:text-gray-700">
                                <FaWhatsapp size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Section */}
                <div className="border-t border-gray-300 pt-6 mt-6 text-center">
                    <span className="text-sm text-black">
                        © <a href="https://pagedone.io/" className="text-black hover:text-gray-700">Ingla</a> 2024. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
