import React, { useState } from "react";

// Dummy Data for Professionals
const professionals = [
    {
        name: "Elvin Qasımov",
        photo: "https://i.imghippo.com/files/ue5120no.jpg", // Placeholder photo
        contact: {
            email: "elvin@example.com",
            phone: "+994 50 123 45 67",
            linkedin: "https://www.linkedin.com/in/elvin-qasimov",
        },
        bio: "Elvin is an experienced consultant with over 10 years of expertise in helping students with study abroad opportunities. He specializes in admissions, visa processes, and scholarship applications."
    },
    {
        name: "Nigar Məmmədova",
        photo: "https://i.imghippo.com/files/ue5120no.jpg", // Placeholder photo
        contact: {
            email: "nigar@example.com",
            phone: "+994 50 234 56 78",
            linkedin: "https://www.linkedin.com/in/nigar-mammadova",
        },
        bio: "Nigar has a deep knowledge of university programs around the world and has successfully guided hundreds of students in their study abroad journey. She focuses on academic advising and document preparation."
    },
    {
        name: "Ramin Hüseynov",
        photo: "https://i.imghippo.com/files/ue5120no.jpg", // Placeholder photo
        contact: {
            email: "ramin@example.com",
            phone: "+994 50 345 67 89",
            linkedin: "https://www.linkedin.com/in/ramin-huseynov",
        },
        bio: "Ramin is a skilled consultant specializing in visa application processes and student adaptation to life abroad. He has been working in the field for over 8 years, assisting students in various stages of their education abroad."
    },
];

function Professionals() {
    const [selectedProfessional, setSelectedProfessional] = useState(null);

    const handleCardClick = (professional) => {
        setSelectedProfessional(professional);
    };

    const closeModal = () => {
        setSelectedProfessional(null);
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl px-6 md:px-12 lg:px-16 mx-auto">
                {/* Title Section */}
                <div className="text-center">
                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-snug">
                        Müəllimlərimiz
                    </h2>
                    <p className="text-gray-500 text-lg mt-3">
                        Təhsil almaq üçün xaricə getməkdə sizə kömək edəcək mütəxəssislərimizlə tanış olun.
                    </p>
                </div>

                {/* Cards Section */}
                <div className="mt-12 grid md:grid-cols-3 gap-10">
                    {professionals.map((professional, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer relative"
                            onClick={() => handleCardClick(professional)}
                        >
                            <img
                                src={professional.photo}
                                alt={professional.name}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <h3 className="text-gray-900 text-xl font-semibold mt-4">{professional.name}</h3>
                            <p className="text-gray-500 text-base mt-2">Study Abroad Consultant</p>
                        </div>
                    ))}
                </div>

                {/* Modal Section */}
                {selectedProfessional && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white rounded-xl p-8 max-w-lg w-full">
                            <h2 className="text-3xl text-gray-900 mb-4">{selectedProfessional.name}</h2>
                            <p className="text-gray-500 mb-6">{selectedProfessional.bio}</p>

                            <div className="mb-4">
                                <h3 className="text-lg text-gray-800 font-semibold">Əlaqə məlumatları:</h3>
                                <ul className="text-gray-500 mt-2">
                                    <li>Email: <a href={`mailto:${selectedProfessional.contact.email}`} className="text-indigo-600">{selectedProfessional.contact.email}</a></li>
                                    <li>Phone: <a href={`tel:${selectedProfessional.contact.phone}`} className="text-indigo-600">{selectedProfessional.contact.phone}</a></li>
                                    <li>LinkedIn: <a href={selectedProfessional.contact.linkedin} className="text-indigo-600" target="_blank" rel="noopener noreferrer">{selectedProfessional.contact.linkedin}</a></li>
                                </ul>
                            </div>

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
        </section>
    );
}

export default Professionals;
