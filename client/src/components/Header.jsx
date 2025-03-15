import { useEffect, useState, useRef } from 'react'
import Logo from '../assets/ingla-logo.png'
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import ContactUsButton from './ContactUsButton'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)
    const navigate = useNavigate()

    const navigateTo = (path) => {
        setMobileMenuOpen(false); // Close mobile menu after navigation
        setIsDropdownOpen(false); // Close the dropdown after navigation
        navigate(path);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className='bg-white shadow-lg rounded-xl top-0 z-10 select-none '>
            <nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Ingla</span>
                        <img onClick={() => navigateTo('/')} className="h-16 lg:h-20 " alt="Logo" src={Logo} />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    {/* Custom Dropdown Button */}
                    <div
                        ref={dropdownRef}
                        className="relative"
                    >
                        <button
                            className="font-semibold leading-6 text-base text-gray-900 cursor-pointer flex items-center"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default behavior
                                setIsDropdownOpen((prevState) => !prevState);
                            }}
                        >
                            Tədris İstiqamətlərimiz
                            <svg
                                className="ml-2 w-4 h-4 transform transition-transform duration-200"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5" />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow absolute mt-2">
                                <li onClick={() => navigateTo('/generalenglish')}><a>İngilis Dili</a></li>
                                <li onClick={() => navigateTo('/ielts')}><a>IELTS</a></li>
                                <li onClick={() => navigateTo('/duolingo')}><a>Duolingo</a></li>
                                <li onClick={() => navigateTo('/sat')}><a>SAT </a></li>
                                <li onClick={() => navigateTo('/yos')}><a>Yös</a></li>
                                <li onClick={() => navigateTo('/allmath')}><a>Calculus</a></li>
                                <li onClick={() => navigateTo('/ibvecambridgemath')}><a>IB və Cambdridge </a></li>

                                <li onClick={() => navigateTo('/almandili')}><a>Alman dili</a></li>
                                <li onClick={() => navigateTo('/rusdili')}><a>Rus Dili</a></li>
                                <li onClick={() => navigateTo('/adaschool')}><a>Ada School</a></li>



                            </ul>
                        )}
                    </div>
                    <button onClick={() => navigateTo('/haqqimizda')} className='text-base font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4'>Haqqımızda</button>


                    <button onClick={() => navigateTo('/xaricdetehsil')} className='text-base font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4'>Xaricdə Təhsil</button>
                    <button onClick={() => navigateTo('/preschool')} className='text-base font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4'>Preschool</button>
                    <button onClick={() => navigateTo('/training')} className='text-base font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4'>Təlim Mərkəzi</button>


                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <ContactUsButton onClick={() => navigateTo('/')} >Contact Us</ContactUsButton>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
                <div className="fixed inset-0 z-10 bg-black opacity-30" />
                <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img alt="" src={Logo} className="h-8 w-auto" />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-4">
                                <details className="dropdown">
                                    <summary className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer flex items-center">
                                        Tədris İstiqamətlərimiz
                                        <svg
                                            className="ml-2 w-4 h-4 transform transition-transform duration-200"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M7 10l5 5 5-5"
                                            />
                                        </svg>
                                    </summary>
                                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        <li onClick={() => navigateTo('/generalenglish')}><a>İngilis Dili</a></li>
                                        <li onClick={() => navigateTo('/ielts')}><a>IELTS</a></li>
                                        <li onClick={() => navigateTo('/duolingo')}><a>Duolingo</a></li>
                                        <li onClick={() => navigateTo('/sat')}><a>SAT</a></li>
                                        <li onClick={() => navigateTo('/yos')}><a>Yös</a></li>
                                        <li onClick={() => navigateTo('/allmath')}><a>Calculus</a></li>
                                        <li onClick={() => navigateTo('/ibvecambridgemath')}><a>IB və Cambdridge </a></li>

                                        <li onClick={() => navigateTo('/almandili')}><a>Alman dili</a></li>
                                        <li onClick={() => navigateTo('/rusdili')}><a>Rus Dili</a></li>
                                        <li onClick={() => navigateTo('/adaschool')}><a>Ada School</a></li>

                                    </ul>
                                </details>
                                <button onClick={() => navigateTo('/haqqimizda')} className='-mx-3 block rounded-lg px-3 py-2'>Haqqımızda</button>


                                <button onClick={() => navigateTo('/xaricdetehsil')} className='-mx-3 block rounded-lg px-3 py-2'>Xaricdə Təhsil</button>
                                <button onClick={() => navigateTo('/preschool')} className='-mx-3 block rounded-lg px-3 py-2'>Preschool</button>
                                <button onClick={() => navigateTo('/training')} className='-mx-3 block rounded-lg px-3 py-2'>Təlim Mərkəzi</button>


                            </div>
                            <div className="py-6">
                                <ContactUsButton onClick={() => navigateTo('/')} >Contact Us</ContactUsButton>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
