import React, { useState } from "react";
import { FaUserGraduate, FaBuilding, FaProjectDiagram, FaChalkboardTeacher, FaBook, FaUsers } from "react-icons/fa";
import PersonalTraining from "../components/TrainingCenter/PersonalTraining";
import CorporateTraining from "../components/TrainingCenter/CorporativeTraining";
import Projects from "../components/TrainingCenter/ProjectsTraining";
import MentoringTraining from "../components/TrainingCenter/MentoringTraining";
import Courses from "../components/TrainingCenter/Courses";
import InglaClub from "../components/TrainingCenter/InglaClub";

const components = {
    "Fərdi Təlimlər": <PersonalTraining />,
    "Korporatif Təlimlər": <CorporateTraining />,
    "Layihələr": <Projects />,
    "Mentorluq programları": <MentoringTraining />,
    "Kurslar": <Courses />,
    "İngla Club": <InglaClub />,
};

const cardData = [
    { title: "Fərdi Təlimlər", icon: <FaUserGraduate size={50} className="text-blue-500" /> },
    { title: "Korporatif Təlimlər", icon: <FaBuilding size={50} className="text-green-500" /> },
    { title: "Layihələr", icon: <FaProjectDiagram size={50} className="text-purple-500" /> },
    { title: "Mentorluq programları", icon: <FaChalkboardTeacher size={50} className="text-orange-500" /> },
    { title: "Kurslar", icon: <FaBook size={50} className="text-red-500" /> },
    { title: "İngla Club", icon: <FaUsers size={50} className="text-teal-500" /> },
];

const TrainingCenter = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const handleSelectComponent = (title) => {
        setActiveComponent(title);
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
    };

    return (
        <div className="mt-10 flex flex-col items-center justify-center p-6">
            {activeComponent ? (
                <div className="w-full max-w-4xl">
                    {/* Back Button */}
                    <button
                        onClick={() => setActiveComponent(null)}
                        className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                    >
                        ← Back
                    </button>
                    {components[activeComponent]}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    {cardData.map((card) => (
                        <button
                            key={card.title}
                            className="bg-white border border-gray-200 rounded-xl shadow-md p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                            onClick={() => handleSelectComponent(card.title)}
                        >
                            <div className="flex justify-center mb-4">{card.icon}</div>
                            <h3 className="text-2xl font-bold">{card.title}</h3>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TrainingCenter;
