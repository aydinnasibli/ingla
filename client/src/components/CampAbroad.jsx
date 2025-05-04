import React, { useState } from "react";
import { FaSun, FaBook, FaGlobe, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaClock, FaPhoneAlt, FaTimes } from "react-icons/fa";

function CampAbroad() {
    const [selectedCamp, setSelectedCamp] = useState(null);

    const educationCamps = [
        {
            name: "Ingla Summer Camp",
            location: "Ramada by Wyndham Baku, Azərbaycan",
            date: "İyul - Avqust 2025",
            description: "6-8 və 9-15 yaş arası uşaqlar üçün həm öyrədici, həm də əyləncəli təcrübə təqdim edən yay düşərgəsi. İngilis dili, Math, Social Science dərsləri, hovuz saatları və ekskursiyalar.",
            image: "https://i.imghippo.com/files/MY2848LA.png",
            ageRange: "6-15 yaş",
            time: "10:00-18:00",
            contact: "+994 10 310 71 17",
            icon: "summer",
            fullDetails: {
                meetupPoint: "Grand Hayat yaşayış kompleksi, Elmlər Akademiyası metrosu",
                program: [
                    "Gündəlik İngilis dili danışıq dərsləri",
                    "Peşəkar müəllimlərlə Math və Social Science dərsləri",
                    "Gündə 3 dəfə sağlam qidalanma",
                    "Hovuz saatları, açıq hava oyunları və ekskursiyalar",
                    "Maraqlı master-klasslar və hədiyyəli yarışlar",
                    "İngiliscə film saatları və hər gün fotoçəkilişlər",
                    "Təhlükəsizlik, nəqliyyat və tibbi xidmətlə təmin olunmuş mühit",
                    "Tam İngilis və Rus dilli mühit"
                ],
                fullDescription: "6-8 və 9-15 yaş arası uşaqlar üçün nəzərdə tutulmuş Ingla Summer Camp hər yay uşaqlarınıza həm öyrədici, həm də əyləncəli təcrübə təqdim edir!"
            }
        },
        {
            name: "Praqa Yay Məktəbi",
            location: "MSM Academy, Praqa, Çexiya",
            date: "İyul - Avqust 2025",
            description: "12-25 yaş arası gənclər üçün akademik biliklərini artırmaq və Avropanın tarixi və mədəniyyəti ilə tanış olmaq imkanı. Ekskursiyalar, idman və sosial fəaliyyətlər.",
            image: "https://i.imghippo.com/files/NnH9684wnw.png",
            ageRange: "12-25 yaş",
            contact: "+994 10 310 61 16",
            icon: "europe",
            fullDetails: {
                program: [
                    "Xarici müəllimlərlə İngilis dili dərsləri və beynəlxalq sertifikat",
                    "Praqada mədəni ekskursiyalar",
                    "Almaniya (Dresden) və Avstriya (Vyana) səfərləri",
                    "Rahat və təhlükəsiz yaşayış",
                    "Gündə 3 dəfə yemək",
                    "Transfer və nəqliyyat xərcləri daxil",
                    "Futbol, üzgüçülük, tennis və digər idman fəaliyyətləri",
                    "Sosial proqramlar: film gecəsi, karaoke, party, mini olimpiya, talent show",
                    "Hər iştirakçıya yerli nömrə və internet təminatı"
                ],
                paymentInfo: "Ödəniş: Hissəli şəkildə mümkündür.",
                fullDescription: "12-25 yaş arası gənclər üçün nəzərdə tutulmuş bu yay proqramı Çexiyanın tanınmış MSM Academy-sində keçirilir. Proqram çərçivəsində iştirakçılar həm akademik biliklərini artırır, həm də Avropanın tarixi və mədəniyyəti ilə tanış olurlar."
            }
        }
    ];

    const educationFairs = [
        {
            name: "Özbəkistan Universitetləri Sərgisi",
            location: "AMEA Mərkəzi Elmi Kitabxanası, Bakı",
            date: "3 may 2025",
            description: "Özbəkistanın 15-dən çox nüfuzlu universitetinin iştirakı ilə azərbaycanlı tələbələr üçün təhsil imkanları təqdim edən sərgi.",
            image: "/api/placeholder/600/400",
            contact: "+994 10 310 71 17",
            icon: "education",
            ageRange: "Abituriyentlər", // Added ageRange
            time: "10:00-18:00", // Added time
            fullDetails: {
                program: [
                    "Özbəkistan universitetlərinin nümayəndələri ilə birbaşa ünsiyyət",
                    "Tibb, mühəndislik, informasiya texnologiyaları və digər ixtisaslar üzrə tədris proqramları haqqında məlumat",
                    "Təqaüd və müraciət imkanları haqqında geniş məlumat",
                    "Özbəkistanda təhsil və yaşayış şəraiti haqqında praktiki məsləhətlər",
                    "İki ölkə arasında təhsil sahəsində əməkdaşlıq imkanları"
                ],
                organizer: "Ingla School Baku",
                fullDescription: "Özbəkistanın STARS Beynəlxalq Universiteti, Jurnalistika və Kütləvi kommunikasiya Universiteti, Daşkənd İrreqasiya və Aqrotexnika Avtomatlaşdırma İnstitutu, Özbəkistan-Finlandiya Pedaqogika Universiteti və digər 15-ə qədər nüfuzlu universitetlərin təmsil olunduğu bu sərgi, azərbaycanlı tələbələrə alternativ və keyfiyyətli təhsil imkanları təqdim etmək məqsədi daşıyır. Sərgidə 40-dan çox universitet nümayəndəsi iştirak edir və gənclərə xaricdə təhsil almaq üçün ətraflı məlumat verir."
            }
        },
    ];

    const renderIcon = (iconName) => {
        switch (iconName) {
            case "science":
                return <FaBook className="text-yellow-600 text-xl" />;
            case "language":
                return <FaGlobe className="text-yellow-600 text-xl" />;
            case "leadership":
                return <FaUsers className="text-yellow-600 text-xl" />;
            case "summer":
                return <FaSun className="text-yellow-600 text-xl" />;
            case "europe":
                return <FaGlobe className="text-yellow-600 text-xl" />;
            case "education":
                return <FaBook className="text-yellow-600 text-xl" />;
            default:
                return <FaGlobe className="text-yellow-600 text-xl" />;
        }
    };

    // Improved Modal for detailed information
    const Modal = ({ camp, onClose }) => {
        if (!camp) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 overflow-y-auto">
                <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                    {/* Modal Header with Image */}
                    <div className="relative">
                        <div className="h-64 overflow-hidden">
                            <img
                                src={camp.image}
                                alt={camp.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        </div>

                        {/* Modal Title */}
                        <div className="absolute bottom-0 left-0 w-full p-6 pb-5">
                            <h2 className="text-white text-3xl font-bold mb-2">{camp.name}</h2>
                            {camp.ageRange && (
                                <div className="bg-yellow-500 py-1 px-4 rounded-full inline-block">
                                    <span className="text-sm font-medium text-white">{camp.ageRange}</span>
                                </div>
                            )}
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-gray-200 transition-all duration-200 shadow-lg"
                        >
                            <FaTimes className="text-gray-800" />
                        </button>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6">
                        {/* Description */}
                        {camp.fullDetails?.fullDescription && (
                            <div className="mb-6">
                                <p className="text-gray-700 text-lg leading-relaxed">{camp.fullDetails.fullDescription}</p>
                            </div>
                        )}

                        {/* Key Information */}
                        <div className="bg-gray-50 rounded-xl p-5 mb-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex items-center text-gray-700">
                                    <div className="p-2 bg-yellow-100 rounded-full mr-3">
                                        <FaMapMarkerAlt className="text-yellow-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Məkan</p>
                                        <p className="text-sm font-medium">{camp.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <div className="p-2 bg-yellow-100 rounded-full mr-3">
                                        <FaCalendarAlt className="text-yellow-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Tarix</p>
                                        <p className="text-sm font-medium">{camp.date}</p>
                                    </div>
                                </div>
                                {camp.time && (
                                    <div className="flex items-center text-gray-700">
                                        <div className="p-2 bg-yellow-100 rounded-full mr-3">
                                            <FaClock className="text-yellow-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium">Vaxt</p>
                                            <p className="text-sm font-medium">{camp.time}</p>
                                        </div>
                                    </div>
                                )}
                                {camp.contact && (
                                    <div className="flex items-center text-gray-700">
                                        <div className="p-2 bg-yellow-100 rounded-full mr-3">
                                            <FaPhoneAlt className="text-yellow-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium">Əlaqə</p>
                                            <p className="text-sm font-medium">{camp.contact}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {camp.fullDetails?.meetupPoint && (
                                <div className="flex items-start mt-5 pt-5 border-t border-gray-200">
                                    <div className="p-2 bg-yellow-100 rounded-full mr-3 mt-1">
                                        <FaMapMarkerAlt className="text-yellow-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Toplanma nöqtəsi</p>
                                        <p className="text-sm font-medium">{camp.fullDetails.meetupPoint}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Program Details */}
                        {(camp.fullDetails?.program && camp.fullDetails.program.length > 0) && (
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                                    <div className="p-2 bg-yellow-100 rounded-full mr-2">
                                        <FaGlobe className="text-yellow-600" />
                                    </div>
                                    Proqramda yer alan imkanlar
                                </h3>
                                <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
                                    <ul className="divide-y divide-gray-100">
                                        {camp.fullDetails.program.map((item, index) => (
                                            <li key={index} className="p-4 flex items-start">
                                                <div className="bg-yellow-100 rounded-full p-1 text-yellow-600 mr-3 mt-0.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* Payment Info */}
                        {camp.fullDetails?.paymentInfo && (
                            <div className="mb-6 font-medium text-gray-700 p-5 bg-yellow-50 rounded-xl border border-yellow-100 flex items-start">
                                <div className="bg-yellow-200 p-2 rounded-full mr-3 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>{camp.fullDetails.paymentInfo}</div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={onClose}
                                className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                            >
                                Bağla
                            </button>
                            <a
                                href={`tel:${camp.contact?.replace(/\s/g, '')}`}
                                className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white py-3 px-4 rounded-lg transition-colors font-medium shadow-md text-center"
                            >
                                Əlaqə saxla
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="py-24">
            <div className="max-w-7xl px-4 sm:px-6 md:px-12 lg:px-16 mx-auto">
                {/* Başlıq */}
                <div className="text-center mb-16">
                    <h3 className="text-yellow-600 font-semibold text-lg mb-2">XARİCDƏ TƏHSİL İMKANLARI</h3>
                    <h2 className="text-gray-900 text-3xl md:text-4xl font-bold font-manrope leading-snug mt-2">
                        Təhsil Düşərgələri və Sərgiləri
                    </h2>
                    <p className="text-gray-500 text-lg mt-4 max-w-3xl mx-auto">
                        Təhsil imkanlarınızı genişləndirmək üçün iştirak edə biləcəyiniz düşərgələr və sərgilər.
                        Yay aylarında və il ərzində düzənlənən bu proqramlar vasitəsilə bilik və təcrübənizi artırın.
                    </p>
                </div>

                {/* Təhsil Düşərgələri */}
                <div className="mt-16">
                    <div className="flex items-center justify-center mb-10">
                        <div className="p-3 bg-yellow-100 rounded-full mr-3">
                            <FaSun className="text-yellow-600 text-xl" />
                        </div>
                        <h3 className="text-gray-900 text-2xl md:text-3xl font-semibold">Təhsil Düşərgələri</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {educationCamps.map((camp, index) => (
                            <div
                                key={index}
                                className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group border border-gray-100"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={camp.image}
                                        alt={camp.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-yellow-500 py-1 px-3 rounded-full shadow-md">
                                        <span className="text-sm font-medium text-white">{camp.ageRange}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start mb-4">
                                        <div className="p-3 bg-yellow-100 rounded-full mr-3 mt-1">
                                            {renderIcon(camp.icon)}
                                        </div>
                                        <h4 className="text-gray-900 text-xl font-semibold">{camp.name}</h4>
                                    </div>

                                    <div className="grid grid-cols-1 gap-3 mt-4">
                                        <div className="flex items-center text-gray-600">
                                            <FaMapMarkerAlt className="text-yellow-600 mr-3 flex-shrink-0" />
                                            <span>{camp.location}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <FaCalendarAlt className="text-yellow-600 mr-3 flex-shrink-0" />
                                            <span>{camp.date}</span>
                                        </div>
                                        {camp.time && (
                                            <div className="flex items-center text-gray-600">
                                                <FaClock className="text-yellow-600 mr-3 flex-shrink-0" />
                                                <span>{camp.time}</span>
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-gray-500 mt-4 text-sm border-t border-gray-100 pt-4 mb-4 line-clamp-3">
                                        {camp.description}
                                    </p>

                                    {camp.contact && (
                                        <div className="mt-4 pt-3 border-t border-gray-100">
                                            <p className="text-sm font-medium text-yellow-600">Əlaqə: {camp.contact}</p>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => setSelectedCamp(camp)}
                                        className="mt-6 w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white py-3 px-4 rounded-lg transition-colors font-medium shadow-md flex justify-center items-center"
                                    >
                                        Ətraflı Məlumat
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Təhsil Sərgiləri */}
                <div className="mt-24">
                    <div className="flex items-center justify-center mb-10">
                        <div className="p-3 bg-yellow-100 rounded-full mr-3">
                            <FaGlobe className="text-yellow-600 text-xl" />
                        </div>
                        <h3 className="text-gray-900 text-2xl md:text-3xl font-semibold">Təhsil Sərgiləri</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {educationFairs.map((fair, index) => (
                            <div
                                key={index}
                                className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group border border-gray-100"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={fair.image}
                                        alt={fair.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-yellow-500 py-1 px-3 rounded-full shadow-md">
                                        <span className="text-sm font-medium text-white">{fair.ageRange}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start mb-4">
                                        <div className="p-3 bg-yellow-100 rounded-full mr-3 mt-1">
                                            {renderIcon(fair.icon)}
                                        </div>
                                        <h4 className="text-gray-900 text-xl font-semibold">{fair.name}</h4>
                                    </div>

                                    <div className="grid grid-cols-1 gap-3 mt-4">
                                        <div className="flex items-center text-gray-600">
                                            <FaMapMarkerAlt className="text-yellow-600 mr-3 flex-shrink-0" />
                                            <span>{fair.location}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <FaCalendarAlt className="text-yellow-600 mr-3 flex-shrink-0" />
                                            <span>{fair.date}</span>
                                        </div>
                                        {fair.time && (
                                            <div className="flex items-center text-gray-600">
                                                <FaClock className="text-yellow-600 mr-3 flex-shrink-0" />
                                                <span>{fair.time}</span>
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-gray-500 mt-4 text-sm border-t border-gray-100 pt-4 mb-4 line-clamp-3">
                                        {fair.description}
                                    </p>

                                    {fair.contact && (
                                        <div className="mt-4 pt-3 border-t border-gray-100">
                                            <p className="text-sm font-medium text-yellow-600">Əlaqə: {fair.contact}</p>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => setSelectedCamp(fair)}
                                        className="mt-6 w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white py-3 px-4 rounded-lg transition-colors font-medium shadow-md flex justify-center items-center"
                                    >
                                        Ətraflı Məlumat
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Modal Component */}
            {selectedCamp && <Modal camp={selectedCamp} onClose={() => setSelectedCamp(null)} />}
        </section>
    );
}

export default CampAbroad;