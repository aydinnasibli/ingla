import React, { useState } from "react";

function StudyAbroad() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const countries = [
        {
            name: "Özbəkistan",
            flag: "https://flagcdn.com/w320/uz.png",
            details: {
                tuition: "1,000 - 4,000 USD",
                scholarships: "Dövlət və universitet təqaüdləri",
                livingCosts: "300 - 600 USD (aylıq)",
                accommodation: "80 - 200 USD (yataqxana) | 250 - 600 USD (kirayə mənzil)",
                workOpportunities: "Tələbələr üçün məhdud iş imkanları var",
                description: "Özbəkistanda təhsil sərfəli qiymətlərlə və inkişaf edən universitetlərlə diqqət çəkir."
            }
        },
        {
            name: "Türkiyə",
            flag: "https://flagcdn.com/w320/tr.png",
            details: {
                tuition: "500 - 3,000 USD (Dövlət) | 5,000 - 20,000 USD (Özəl)",
                scholarships: "Türkiye Bursları, TÜBİTAK və YTB təqaüdləri",
                livingCosts: "400 - 800 USD (aylıq)",
                accommodation: "100 - 300 USD (yataqxana) | 300 - 800 USD (kirayə mənzil)",
                workOpportunities: "Magistr və doktorantura tələbələri işləyə bilər",
                description: "Türkiyədə akademik keyfiyyət və münasib yaşam xərcləri xarici tələbələr üçün cəlbedici seçim yaradır."
            }
        },
        {
            name: "Böyük Britaniya",
            flag: "https://flagcdn.com/w320/gb.png",
            details: {
                tuition: "12,000 - 30,000 GBP (Dövlət) | 25,000 - 50,000 GBP (Özəl)",
                scholarships: "Chevening, Dövlət Proqramı, Erasmus+",
                livingCosts: "1,500 - 2,500 GBP (London) | 900 - 1,500 GBP (digər şəhərlər)",
                accommodation: "400 - 1,200 GBP (yataqxana) | 600 - 2,000 GBP (kirayə mənzil)",
                workOpportunities: "Tələbələr həftədə 20 saat işləyə bilər",
                description: "Böyük Britaniyada təhsil prestijli universitetlər və geniş karyera imkanları təklif edir."
            }
        },
        {
            name: "İtaliya",
            flag: "https://flagcdn.com/w320/it.png",
            details: {
                tuition: "1,500 - 4,000 EUR (Dövlət) | 5,000 - 20,000 EUR (Özəl)",
                scholarships: "Erasmus+, DSU, və universitet təqaüdləri",
                livingCosts: "700 - 1,500 EUR (aylıq)",
                accommodation: "200 - 500 EUR (yataqxana) | 500 - 1,200 EUR (kirayə mənzil)",
                workOpportunities: "Tələbələr həftədə 20 saat işləyə bilər",
                description: "İtaliya mədəniyyəti, incəsənəti və dünya səviyyəli təhsili ilə seçilir."
            }
        },
        {
            name: "Polşa",
            flag: "https://flagcdn.com/w320/pl.png",
            details: {
                tuition: "2,000 - 6,000 EUR (Dövlət) | 5,000 - 15,000 EUR (Özəl)",
                scholarships: "NAWA, Erasmus+ və universitet təqaüdləri",
                livingCosts: "600 - 1,200 EUR (aylıq)",
                accommodation: "100 - 400 EUR (yataqxana) | 400 - 1,000 EUR (kirayə mənzil)",
                workOpportunities: "Tələbələr həftədə 20 saat işləyə bilər",
                description: "Polşada təhsil həm sərfəli, həm də Avropa bazarına çıxış üçün ideal seçimdir."
            }
        },



        {
            name: "Amerika",
            flag: "https://flagcdn.com/w320/us.png",
            details: {
                tuition: "10,000 - 50,000 USD",
                scholarships: "Fulbright, DAAD, və universitet təqaüdləri",
                livingCosts: "1,200 - 3,000 USD (aylıq)",
                accommodation: "500 - 1,500 USD (yataqxana) | 1,000 - 3,000 USD (kirayə mənzil)",
                workOpportunities: "Tələbələr kampus daxilində işləyə bilər",
                description: "Amerikada təhsil prestijli universitetlər, elmi araşdırmalar və karyera imkanları ilə tanınır."
            }
        }
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
        <section>
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
                            <img src={country.flag} alt={`${country.name} flag`} className="w-28 h-20 object-cover rounded-lg" />
                            <h3 className="text-gray-900 text-2xl font-semibold mt-4">{country.name}</h3>
                        </div>
                    ))}
                </div>

                {/* Modal Bölməsi */}
                {isModalOpen && selectedCountry && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white rounded-xl p-8 max-w-5xl w-full">
                            <h2 className="text-3xl text-gray-900 mb-4">{selectedCountry.name} Universitetləri</h2>
                            <p className="text-gray-500 mb-4">{selectedCountry.details.description}</p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <p className="font-semibold">🎓 Təhsil Xərcləri:</p>
                                    <p className="text-gray-600">{selectedCountry.details.tuition}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">💰 Təqaüd İmkanları:</p>
                                    <p className="text-gray-600">{selectedCountry.details.scholarships}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">🏡 Yaşam Xərcləri:</p>
                                    <p className="text-gray-600">{selectedCountry.details.livingCosts}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">🏠 Yataqxana və Alternativlər:</p>
                                    <p className="text-gray-600">{selectedCountry.details.accommodation}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">🌟 İş İmkanları:</p>
                                    <p className="text-gray-600">{selectedCountry.details.workOpportunities}</p>
                                </div>
                            </div>

                            <button
                                onClick={closeModal}
                                className="mt-6 px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700"
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

export default StudyAbroad;
