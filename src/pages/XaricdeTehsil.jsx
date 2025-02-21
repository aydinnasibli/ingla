import React from "react";
import { FaUniversity, FaFileAlt, FaPassport } from "react-icons/fa";
import StudyAbroad from "../components/StudySection";

function XaricdeTehsil() {
    const steps = [
        {
            id: 1,
            title: "Universitet Seçimi və Məsləhətçilik",
            description:
                "Xaricdə təhsil almaq istəyən tələbələr üçün ən önəmli qərarlardan biri, təhsil alacağı universitetin və proqramın seçilməsidir. Bizim təcrübəli məsləhətçilərimiz tələbənin maraqlarına uyğun seçim etməsinə kömək edir.",
            icon: <FaUniversity className="text-indigo-600 text-4xl" />,
        },
        {
            id: 2,
            title: "Qəbul Prosesi və Sənəd Yardımı",
            description:
                "Xaricdə təhsil almağa qərar verən tələbələr üçün qəbul prosesi bəzən mürəkkəb ola bilər. Biz sənədlərin düzgün hazırlanması, test imtahanlarına və müsahibələrə hazırlıq mövzusunda dəstək veririk.",
            icon: <FaFileAlt className="text-indigo-600 text-4xl" />,
        },
        {
            id: 3,
            title: "Viza Hazırlığı",
            description:
                "Xaricdə təhsil almaq istəyən tələbələrin qarşısına çıxan ən böyük maneələrdən biri viza müraciətləridir. Biz tələbələrə vizaların alınması üçün ətraflı məlumat və dəstək veririk.",
            icon: <FaPassport className="text-indigo-600 text-4xl" />,
        },
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl px-6 md:px-12 lg:px-16 mx-auto">
                {/* Title Section */}
                <div className="text-center">
                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-snug">
                        Bizim Missiyamız
                    </h2>
                    <p className="text-gray-500 text-lg mt-3">
                        Proseslərin asan və başa düşüləcək şəkildə izahı
                    </p>
                </div>

                {/* Steps Section */}
                <div className="mt-12 grid md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
                        >
                            <div className="p-4 bg-indigo-100 rounded-full">{step.icon}</div>
                            <h3 className="text-gray-900 text-2xl font-semibold mt-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 text-base mt-2">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <StudyAbroad />
        </section>
    );
}

export default XaricdeTehsil;
