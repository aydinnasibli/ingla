import React from 'react'
import Logo from '../assets/cropped_image.png'
function Footer() {
    return (
        <footer className="w-full" style={{ position: 'relative', left: '0', bottom: '0', width: "100%" }}>
            <div className="mx-auto  px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                    <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                        <a href="https://thexactime.com/" className="flex justify-center lg:justify-start">
                            <img
                                alt=""
                                src={Logo}
                                className="w-16 md:w-28 lg:w-32"
                            />
                        </a>
                        <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">Trusted in more than 100 countries & 5 million customers. Have any query ?</p>

                    </div>
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Pagedone</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Home</a></li>
                            <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">About</a></li>
                            <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Pricing</a></li>
                            <li><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Features</a></li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Figma UI System</a></li>
                            <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Icons Assets</a></li>
                            <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Responsive Blocks</a></li>
                            <li><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Components Library</a></li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Resources</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
                            <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Quick Start</a></li>
                            <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Documentation</a></li>
                            <li><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">User Guide</a></li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">News</a></li>
                            <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Tips & Tricks</a></li>
                            <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">New Updates</a></li>
                            <li><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Events</a></li>
                        </ul>
                    </div>
                </div>
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <span className="text-sm text-gray-500 ">©<a href="https://pagedone.io/">pagedone</a> 2024, All rights reserved.</span>

                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer