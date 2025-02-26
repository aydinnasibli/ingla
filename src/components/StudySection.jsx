import React, { useState } from "react";
import Professionals from "./Professionals";

function StudyAbroad() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const countries = [
        {
            name: "Türkiyə",
            flag: "🇹🇷",
            universities: [
                {
                    name: "Boğaziçi Universiteti",
                    departments: ["Mühəndislik", "Biznes", "Sosial Elmlər"],
                    description: "Boğaziçi Universiteti Türkiyənin ən nüfuzlu universitetlərindən biridir, sərt akademik proqramları və beynəlxalq əməkdaşlıqları ilə tanınır."
                },
                {
                    name: "Orta Doğu Texniki Universiteti (ODTÜ)",
                    departments: ["Texnologiya", "Elm", "Memarlıq"],
                    description: "ODTÜ mühəndislik və tətbiqi elmlər sahəsində ixtisaslaşmış, beynəlxalq səviyyədə tanınmış aparıcı tədqiqat universitetidir."
                },
                {
                    name: "İstanbul Universiteti",
                    departments: ["Tibb", "Hüquq", "İncəsənət"],
                    description: "İstanbul Universiteti Türkiyənin ən qədim universitetlərindən biridir və tibb, hüquq və humanitar elmlər sahəsində geniş təhsil imkanları təklif edir."
                },
            ],
        },
        {
            name: "Özbəkistan",
            flag: "🇺🇿",
            universities: [
                {
                    name: "Daşkənd Dövlət Texniki Universiteti",
                    departments: ["Mühəndislik", "Energetika", "Texnologiya"],
                    description: "Daşkənd Dövlət Texniki Universiteti Özbəkistanın aparıcı mühəndislik universitetlərindən biridir və texniki sahələrdə innovativ tədqiqat aparır."
                },
                {
                    name: "Özbəkistan Milli Universiteti",
                    departments: ["Elm", "Riyaziyyat", "Humanitar Elmlər"],
                    description: "1918-ci ildə təsis edilmiş Özbəkistan Milli Universiteti ölkənin ən böyük və ən qədim universitetidir, fundamental elmlər və humanitar sahələr üzrə güclü akademik proqramlara malikdir."
                },
                {
                    name: "Daşkənddəki Vestminster Beynəlxalq Universiteti",
                    departments: ["Biznes", "İqtisadiyyat", "Maliyyə"],
                    description: "Bu universitet Özbəkistanda Qərb tərzində biznes və maliyyə təhsili təqdim edən ən yaxşı özəl universitetlərdən biridir."
                },
            ],
        },
        {
            name: "Böyük Britaniya",
            flag: "🇬🇧",
            universities: [
                {
                    name: "Oksford Universiteti",
                    departments: ["Hüquq", "Tibb", "Biznes"],
                    description: "Oksford Universiteti dünyanın ən qədim və ən nüfuzlu universitetlərindən biridir, elmi araşdırma və akademik mükəmməlliyi ilə seçilir."
                },
                {
                    name: "Kembric Universiteti",
                    departments: ["Mühəndislik", "İncəsənət", "Sosial Elmlər"],
                    description: "Kembric Universiteti ciddi akademik proqramları və qlobal elmi nailiyyətləri ilə tanınır."
                },
                {
                    name: "İmperial Kollec London",
                    departments: ["Elm", "Mühəndislik", "Tibb"],
                    description: "İmperial Kollec London elm, texnologiya və tibbi tədqiqat sahələrində dünyanın aparıcı universitetlərindən biridir."
                },
            ],
        },
        {
            name: "Amerika Birləşmiş Ştatları",
            flag: "🇺🇸",
            universities: [
                {
                    name: "Harvard Universiteti",
                    departments: ["Hüquq", "Biznes", "Tibb"],
                    description: "Harvard Universiteti dünyanın ən nüfuzlu ali təhsil müəssisələrindən biridir və siyasət, biznes və elm sahələrində liderlər yetişdirir."
                },
                {
                    name: "Massaçusets Texnologiya İnstitutu (MIT)",
                    departments: ["Mühəndislik", "Texnologiya", "Elm"],
                    description: "MIT texnologiya və sahibkarlıq sahəsində innovasiyalar üzrə aparıcı tədqiqat mərkəzidir."
                },
                {
                    name: "Stenford Universiteti",
                    departments: ["Mühəndislik", "Humanitar Elmlər", "Hüquq"],
                    description: "Stenford Universiteti texnologiya, hüquq və humanitar elmlər sahələrində güclü akademik proqramlara sahibdir və Silikon Vadisi ilə sıx əlaqədədir."
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

    return (
        <>
            <section className="py-24">
                <div className="max-w-7xl px-6 md:px-12 lg:px-16 mx-auto">
                    {/* Başlıq Bölməsi */}
                    <div className="text-center">
                        <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-snug">
                            Harada Təhsil Almaq Mümkündür?
                        </h2>
                        <p className="text-gray-500 text-lg mt-3">
                            Aşağıdakı ölkələrdə və universitetlərdə təhsil almaq üçün biz sizə kömək edirik.
                        </p>
                    </div>

                    {/* Ölkələr və Universitetlər Bölməsi */}
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

                    {/* Modal Bölməsi */}
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
