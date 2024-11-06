import React from 'react';
import Logo from '../assets/cropped_image.png';

function Footer() {
    return (
        <footer className="w-full bg-white" style={{ position: 'relative', left: '0', bottom: '0', }}>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 gap-y-8">
                    <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                        <a href="https://thexactime.com/" className="flex justify-center lg:justify-start">
                            <img alt="" src={Logo} className="w-16 md:w-28 lg:w-32" />
                        </a>
                        <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
                            Trusted in more than 100 countries & 5 million customers. Have any query?
                        </p>
                    </div>
                    {/** Footer Links */}
                    {['Pagedone', 'Products', 'Resources', 'Blogs'].map((section, idx) => (
                        <FooterColumn key={idx} title={section} />
                    ))}
                </div>
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <span className="text-sm text-gray-500">© <a href="https://pagedone.io/">pagedone</a> 2024, All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title }) {
    const links = {
        Pagedone: ["Home", "About", "Pricing", "Features"],
        Products: ["Figma UI System", "Icons Assets", "Responsive Blocks", "Components Library"],
        Resources: ["FAQs", "Quick Start", "Documentation", "User Guide"],
        Blogs: ["News", "Tips & Tricks", "New Updates", "Events"]
    };

    return (
        <div className="text-left lg:mx-auto">
            <h4 className="text-lg text-gray-900 font-medium mb-7">{title}</h4>
            <ul className="text-sm transition-all duration-500">
                {links[title].map((link, idx) => (
                    <li key={idx} className="mb-6">
                        <a href="#" className="text-gray-600 hover:text-gray-900">{link}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Footer;
