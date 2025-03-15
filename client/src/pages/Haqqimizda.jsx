import React from "react";
import { useNavigate } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import office from '../assets/office.png'
function Haqqimizda() {
    const navigate = useNavigate()

    return (
        <div>
            <section className="py-24 xl:mr-0 lg:mr-5 mr-0 mb-20">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                        {/* Left Column */}
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                                        Haqqımızda
                                    </h6>
                                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <h2 className="text-gray-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                            Ingla School Baku
                                        </h2>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                            Uğur hekayəmiz komanda işi və səbirin sübutudur. Birlikdə çətinlikləri dəf etmiş, qələbələrimizi qeyd etmiş və irəliləyiş və uğurdan ibarət bir hekayə yaratmışıq.
                                        </p>
                                    </div>
                                </div>
                                {/* 2x2 Grid Boxes */}
                                <div className="w-full flex-col justify-center items-start gap-6 flex">
                                    <div className="w-full justify-start items-center gap-8 grid grid-cols-1 md:grid-cols-2">
                                        {/* Box 1 */}
                                        <div className="w-full h-44 p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300 ease-in-out flex flex-col justify-start items-start gap-2">
                                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                                                İllərlə Formalaşan Təcrübə
                                            </h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">
                                                Sizi uğura aparan bilik və metodlarla zənginləşdiririk.
                                            </p>
                                        </div>
                                        {/* Box 2 */}
                                        <div className="w-full h-44 p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300 ease-in-out flex flex-col justify-start items-start gap-2">
                                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                                                Yüzlərlə Tələbə
                                            </h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">
                                                Məzunlarımız dünya səviyyəsində özlərinə güvənərək irəliləyirlər.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full justify-start items-center gap-8 grid grid-cols-1 md:grid-cols-2">
                                        {/* Box 3 */}
                                        <div className="w-full h-52 p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300 ease-in-out flex flex-col justify-start items-start gap-2">
                                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                                                Genişlənən Tədris Mərkəzimiz
                                            </h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">
                                                Daha çox insana keyfiyyətli dil təhsili təqdim etmək üçün böyüyürük.
                                            </p>
                                        </div>
                                        {/* Box 4 */}
                                        <div className="w-full h-52 p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300 ease-in-out flex flex-col justify-start items-start gap-2">
                                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                                                Tələbələrimizin Rəyləri Bizi İrəli Aparır!
                                            </h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">
                                                Sizin uğurlarınız bizim ilham mənbəyimizdir.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Read More Button */}
                            <button onClick={() => navigate('/kontakt')} className="sm:w-fit w-full group px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg shadow transition-all duration-300 ease-in-out flex justify-center items-center">
                                <span className="text-gray-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-300 ease-in-out">
                                    Əlaqə
                                </span>
                                <svg
                                    className="ml-2 group-hover:translate-x-0.5 transition-all duration-300 ease-in-out"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                >
                                    <path
                                        d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                                        stroke="#4F46E5"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* Right Column */}
                        <div className="w-full lg:justify-start justify-center items-start flex">
                            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200">
                                <img
                                    className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                    src={office}
                                    alt="Our team working together"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AboutUs />
        </div>
    );
}

export default Haqqimizda;
