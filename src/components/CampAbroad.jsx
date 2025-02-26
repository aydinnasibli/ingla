import React from "react";

function CampAbroad() {
    const educationCamps = [
        {
            name: "STEM Yay Düşərgəsi",
            location: "İstanbul, Türkiyə",
            date: "15 İyul - 30 İyul 2025",
            description: "Mühəndislik, elm və texnologiya sahələrində praktiki biliklər əldə etmək üçün əla fürsət.",
        },
        {
            name: "Beynəlxalq Dil və Mədəniyyət Düşərgəsi",
            location: "London, Böyük Britaniya",
            date: "5 Avqust - 20 Avqust 2025",
            description: "İngilis dilində danışıq bacarıqlarınızı inkişaf etdirin və beynəlxalq tələbələrlə əlaqələr qurun.",
        },
        {
            name: "Gələcəyin Liderləri Düşərgəsi",
            location: "Boston, ABŞ",
            date: "10 İyun - 25 İyun 2025",
            description: "Liderlik, biznes və ictimai danışıq üzrə təlimlər ilə gələcəyin liderlərini yetişdirmək məqsədi daşıyan unikal proqram.",
        },
    ];

    const educationFairs = [
        {
            name: "Qlobal Təhsil Sərgisi 2025",
            location: "Bakı, Azərbaycan",
            date: "10 Mart 2025",
            description: "Dünyanın aparıcı universitetləri və təhsil təşkilatlarının iştirak etdiyi ən böyük təhsil sərgilərindən biri.",
        },
        {
            name: "Avropa Təhsil Günü",
            location: "Berlin, Almaniya",
            date: "25 Aprel 2025",
            description: "Avropanın ən prestijli universitetləri və proqramları haqqında məlumat əldə etmək imkanı.",
        },
        {
            name: "Amerikada Təhsil Sərgisi",
            location: "New York, ABŞ",
            date: "5 May 2025",
            description: "ABŞ universitetlərinin qəbul şərtləri, təqaüdlər və proqramları haqqında canlı məlumat sessiyaları.",
        },
    ];

    return (
        <section className="py-24">
            <div className="max-w-7xl px-6 md:px-12 lg:px-16 mx-auto">
                {/* Başlıq */}
                <div className="text-center">
                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-snug">
                        Təhsil Düşərgələri və Sərgiləri
                    </h2>
                    <p className="text-gray-500 text-lg mt-3">
                        Təhsil imkanlarınızı genişləndirmək üçün iştirak edə biləcəyiniz düşərgələr və sərgilər.
                    </p>
                </div>

                {/* Təhsil Düşərgələri */}
                <div className="mt-12">
                    <h3 className="text-gray-900 text-3xl font-semibold text-center">Təhsil Düşərgələri</h3>
                    <div className="mt-6 grid md:grid-cols-3 gap-8">
                        {educationCamps.map((camp, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 shadow-md rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                            >
                                <h4 className="text-gray-900 text-2xl font-semibold">{camp.name}</h4>
                                <p className="text-gray-600 mt-2">{camp.location}</p>
                                <p className="text-gray-500 text-sm mt-1">{camp.date}</p>
                                <p className="text-gray-500 mt-3">{camp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Təhsil Sərgiləri */}
                <div className="mt-16">
                    <h3 className="text-gray-900 text-3xl font-semibold text-center">Təhsil Sərgiləri</h3>
                    <div className="mt-6 grid md:grid-cols-3 gap-8">
                        {educationFairs.map((fair, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 shadow-md rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                            >
                                <h4 className="text-gray-900 text-2xl font-semibold">{fair.name}</h4>
                                <p className="text-gray-600 mt-2">{fair.location}</p>
                                <p className="text-gray-500 text-sm mt-1">{fair.date}</p>
                                <p className="text-gray-500 mt-3">{fair.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CampAbroad;
