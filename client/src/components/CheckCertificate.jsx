import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Toaster, toast } from "react-hot-toast";
import { FaGlobe, FaBriefcase, FaGraduationCap, FaCheckCircle } from "react-icons/fa"; // Importing icons

const CertificateSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [certNumber, setCertNumber] = useState("");
    const [certData, setCertData] = useState(null);

    const validCertificates = {
        "123456": {
            id: "AZ-2025-001",
            name: "Eldar Məmmədov",
            course: "İngilis dili",
            date: "10 Mart 2025",
            level: "Əla",
            issuedBy: "Oxford Language Center",
            validity: "Ömürlük keçərlidir",
            type: "Akademik Sertifikat",
        },
        "987654": {
            id: "AZ-2025-002",
            name: "Leyla Əliyeva",
            course: "IELTS Hazırlıq",
            date: "15 Fevral 2025",
            level: "Yüksək",
            issuedBy: "British Academy",
            validity: "Ömürlük keçərlidir",
            type: "Peşəkar Sertifikat",
        },
    };

    const checkCertificate = () => {
        if (validCertificates[certNumber]) {
            setCertData(validCertificates[certNumber]);
            toast.success("Sertifikat tapıldı!", { position: "bottom-left" });
        } else {
            setCertData(null);
            toast.error("Sertifikat tapılmadı!", { position: "bottom-left" });
        }
    };

    return (
        <div className="py-16 px-6 sm:px-12">
            <Toaster />
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900">Sertifikatların Önəmi</h2>
                <p className="text-gray-600 mt-4">
                    Təhsil və peşə inkişafınızı təsdiqləyən sertifikatlar karyeranızda mühüm rol oynayır.
                </p>
            </div>

            {/* Four Cards Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        icon: <FaGlobe className="text-gray-600 text-4xl mx-auto mb-3" />,
                        title: "Beynəlxalq Dəyər",
                        desc: "Sertifikatlarımız dünyanın bir çox universitet və iş yerlərində qəbul edilir.",
                    },
                    {
                        icon: <FaBriefcase className="text-gray-600 text-4xl mx-auto mb-3" />,
                        title: "Karyera İmkanları",
                        desc: "Peşəkar sertifikatlarımız sizi daha üstün mövqeyə gətirə bilər.",
                    },
                    {
                        icon: <FaGraduationCap className="text-gray-600 text-4xl mx-auto mb-3" />,
                        title: "Bilik və Bacarıq",
                        desc: "Hər bir sertifikat sizin əldə etdiyiniz real bilik və bacarıqları təsdiq edir.",
                    },
                    {
                        icon: <FaCheckCircle className="text-gray-600 text-4xl mx-auto mb-3" />,
                        title: "Etibarlılıq və Keyfiyyət",
                        desc: "Sertifikatlarımız nüfuzlu müəllimlər və təsdiqlənmiş proqramlar əsasında verilir.",
                    },
                ].map((card, index) => (
                    <div
                        key={index}
                        className="p-6 border rounded-lg shadow-md text-center transition transform hover:shadow-xl hover:-translate-y-2"
                    >
                        {card.icon}
                        <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                        <p className="text-gray-600 mt-2">{card.desc}</p>
                    </div>
                ))}
            </div>

            {/* Button to Open Pop-up */}
            <div className="text-center mt-10">
                <button
                    onClick={() => setIsOpen(true)}
                    className="py-2 px-6 rounded-lg font-semibold  text-gray-900
                        bg-[#ffde2b] hover:bg-[#f3d11d] transition-all duration-300 
                        hover:shadow-xl  hover:scale-105"
                >
                    Sertifikatı Yoxla
                </button>
            </div>

            {/* Popup Dialog */}
            <Dialog
                open={isOpen}
                onClose={() => {
                    setIsOpen(false);
                    setCertNumber("");
                    setCertData(null);
                }}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 px-4"
            >
                <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg md:max-w-2xl">
                    <div className="text-right mb-2">
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                setCertNumber("");
                                setCertData(null);
                            }}
                            className="text-gray-600 hover:text-red-500 transition"
                        >
                            Bağla ✖
                        </button>
                    </div>
                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
                        Sertifikat Yoxlama
                    </h3>

                    {/* Input Field */}
                    <input
                        type="text"
                        value={certNumber}
                        onChange={(e) => setCertNumber(e.target.value)}
                        placeholder="Sertifikat nömrəsini daxil edin"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />

                    {/* Verify Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={checkCertificate}
                            className="py-2 px-6 rounded-lg font-semibold   text-gray-900
            bg-[#ffde2b] transition-all duration-300 
                hover:shadow-xl hover:bg-[#f3d11d] hover:scale-105"
                        >
                            Yoxla
                        </button>
                    </div>

                    {/* Certificate Information */}
                    {certData && (
                        <div className="mt-6 p-4 border rounded-lg bg-gray-50">
                            <p><strong> Sertifikat İD:</strong> {certData.id}</p>
                            <p><strong> Sertifikat sahibi:</strong> {certData.name}</p>
                            <p><strong> Kurs:</strong> {certData.course}</p>
                            <p><strong> Tarix:</strong> {certData.date}</p>
                            <p><strong> Verən Qurum:</strong> {certData.issuedBy}</p>
                            <p><strong> Keçərlilik Müddəti:</strong> {certData.validity}</p>
                            <p><strong> Sertifikat tipi:</strong> {certData.type}</p>
                            <p><strong> Dərəcə:</strong> {certData.level}</p>
                        </div>
                    )}

                    {/* Close Button */}

                </div>
            </Dialog>
        </div>
    );
};

export default CertificateSection;
