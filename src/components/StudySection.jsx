import React, { useState } from "react";
import { FaGlobeAmericas, FaUniversity, FaClipboardCheck } from "react-icons/fa";
import Professionals from "./Professionals";

// Dummy Data for Countries & Universities
function StudyAbroad() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const countries = [
        {
            name: "United States",
            flag: "🇺🇸",
            universities: [
                {
                    name: "Harvard University",
                    departments: ["Engineering", "Business", "Medicine"],
                    description: "Harvard University is one of the most prestigious institutions globally, known for its world-class education, cutting-edge research, and global influence. It has a rich legacy of producing leaders in various industries."
                },
                {
                    name: "MIT",
                    departments: ["Technology", "Science", "Business"],
                    description: "MIT is renowned for its focus on innovation, technology, and entrepreneurship. It consistently leads in technological advancements and is a hub for aspiring engineers and scientists."
                },
                {
                    name: "Stanford University",
                    departments: ["Engineering", "Humanities", "Law"],
                    description: "Stanford is a leading research university, offering a wide range of programs from engineering to humanities. Its close proximity to Silicon Valley makes it an excellent place for tech entrepreneurs."
                },
            ],
        },
        {
            name: "United Kingdom",
            flag: "🇬🇧",
            universities: [
                {
                    name: "University of Oxford",
                    departments: ["Law", "Medicine", "Business"],
                    description: "Oxford is one of the oldest universities in the world, offering a rigorous academic environment with a strong focus on research and global policy-making. Its alumni include world leaders and Nobel laureates."
                },
                {
                    name: "University of Cambridge",
                    departments: ["Engineering", "Arts", "Social Sciences"],
                    description: "Cambridge is renowned for its academic excellence and rich history, with programs in engineering, arts, and social sciences. It's a hub for groundbreaking research and innovation."
                },
                {
                    name: "Imperial College London",
                    departments: ["Science", "Engineering", "Medicine"],
                    description: "Imperial College London is a leading global university, excelling in science, engineering, and medical fields. It has a strong emphasis on solving global challenges through cutting-edge research."
                },
            ],
        },
        {
            name: "Germany",
            flag: "🇩🇪",
            universities: [
                {
                    name: "LMU Munich",
                    departments: ["Business", "Medicine", "Physics"],
                    description: "LMU Munich is a top research university in Germany, recognized for its strengths in the sciences and humanities. It offers a vibrant academic atmosphere and outstanding facilities."
                },
                {
                    name: "University of Heidelberg",
                    departments: ["Law", "Biology", "Philosophy"],
                    description: "Heidelberg University is Germany’s oldest university, known for its research excellence in biology, law, and philosophy. It has a long tradition of academic rigor and innovation."
                },
                {
                    name: "Technical University of Munich",
                    departments: ["Engineering", "Technology", "Architecture"],
                    description: "TUM is one of Europe’s top technical universities, specializing in engineering, architecture, and technology. It fosters a strong entrepreneurial spirit among its students and researchers."
                },
            ],
        },
    ];

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCountry(null);
    };

    return (<>
        <section className="py-24">
            <div className="max-w-7xl px-6 md:px-12 lg:px-16 mx-auto">
                {/* Title Section */}
                <div className="text-center">
                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-snug">
                        Harada Təhsil Almaq Mümkündür?
                    </h2>
                    <p className="text-gray-500 text-lg mt-3">
                        Aşağıdakı ölkələrdə və universitetlərdə təhsil almaq üçün biz sizə kömək edirik.
                    </p>
                </div>

                {/* Countries & Universities Section */}
                <div className="mt-12 grid md:grid-cols-3 gap-10">
                    {countries.map((country, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 shadow-md rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
                            onClick={() => handleCountryClick(country)}
                        >
                            <span className="text-5xl">{country.flag}</span>
                            <h3 className="text-gray-900 text-2xl font-semibold mt-4">{country.name}</h3>
                            <ul className="text-gray-500 text-base mt-2">
                                {country.universities.map((uni, i) => (
                                    <li key={i} className="mt-1">
                                        {uni.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Modal Section */}
                {isModalOpen && selectedCountry && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white rounded-xl p-8 max-w-5xl w-full">
                            <h2 className="text-3xl text-gray-900 mb-4">{selectedCountry.name} Universitetləri</h2>
                            <p className="text-gray-500 mb-6">{selectedCountry.name} üzrə təhsil imkanları və universitetlər haqqında məlumat.</p>

                            {selectedCountry.universities.map((university, index) => (
                                <div key={index} className="mb-6">
                                    <h3 className="text-xl font-semibold text-gray-800">{university.name}</h3>
                                    <p className="text-gray-600 text-base mt-2">{university.description}</p>
                                    <ul className="mt-4 text-gray-500">
                                        {university.departments.map((department, i) => (
                                            <li key={i} className="mt-1">🔹 {department}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <button
                                onClick={closeModal}
                                className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
                            >
                                Bağla
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Professionals />
        </section>

    </>
    );
}

export default StudyAbroad;
