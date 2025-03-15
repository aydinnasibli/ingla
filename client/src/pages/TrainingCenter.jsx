import React, { useState } from 'react';

const TrainingCenter = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const trainingCategories = [
        {
            id: 1,
            title: "Peşəkar Trener (TOT - Training of Trainers) Akademiyası",
            plan: "Trenerlik bacarıqları, auditoriya ilə effektiv əlaqə, tədris metodları və praktiki təlim sessiyaları.",
            about: "Bu proqram yeni və ixtisasını artırmaq istəyən trenerlər üçün düzgün metodologiyaları öyrədir."
        },
        {
            id: 2,
            title: "Karyera Məsləhətçiləri Kursu",
            plan: "Karyera məsləhətçisinin rolu, fərdi inkişaf planları, peşə seçimində psixoloji yanaşmalar, əmək bazarının təhlili.",
            about: "Karyera məsləhətçisi olmaq və bu sahədə peşəkar fəaliyyət göstərmək istəyənlər üçün nəzərdə tutulub."
        },
        {
            id: 3,
            title: "HR Peşəkarı: Resursların Effektiv İdarə Edilməsi",
            plan: "HR strategiyaları, istedad idarəetməsi, performans qiymətləndirilməsi.",
            about: "HR sahəsində işləmək və bu sahədə peşəkar olmaq istəyənlər üçün."
        },
        {
            id: 4,
            title: "Satış Uğurunun Sirləri",
            plan: "Satış strategiyaları, müştəri ehtiyaclarını anlama, effektiv kommunikasiya.",
            about: "Satış menecerləri və sahibkarlar üçün vacib texnikalar."
        },
        {
            id: 5,
            title: "Zamanı İdarə Etmə: Maksimum Effektivlik",
            plan: "Vaxtın idarə olunması texnikaları, prioritetlərin müəyyən edilməsi, planlama bacarıqları.",
            about: "Səmərəli vaxt idarəetməsi öyrədir."
        },
        {
            id: 6,
            title: "Bədən Dili və Ünsiyyət Bacarıqları",
            plan: "Bədən dilinin oxunması, effektiv ünsiyyət qurmaq, inandırıcı olmaq.",
            about: "Müsahibələrdə, ictimai nitqlərdə və biznes görüşlərində vacib bacarıqlardandır."
        },
        {
            id: 7,
            title: "Mindfulness: Zehni Rahatlıq və Fokuslanma",
            plan: "Düşüncə idarəetməsi, stresin azaldılması, fokuslanma texnikaları.",
            about: "Stresi idarə etmək və daha produktiv olmaq istəyənlər üçün."
        },
        {
            id: 8,
            title: "PMP: Layihə İdarəetməsində Peşəkarlıq",
            plan: "Layihə planlaması, risk idarəetməsi, çatdırma strategiyaları.",
            about: "Layihə menecerləri üçün dünya standartlarına uyğun bir proqram."
        },
        {
            id: 9,
            title: "Şəxsi Brendinq və Sosial Media Strategiyaları",
            plan: "Şəxsi imicin formalaşdırılması, sosial mediada effektiv təqdimat.",
            about: "Peşəkar brend yaratmaq və bazarda tanınmaq istəyənlər üçün."
        },
        {
            id: 10,
            title: "Mobiliqrafiya və Vizual Kontent Yaratma",
            plan: "Telefonla keyfiyyətli foto və video çəkmək, montaj bacarıqları, kreativ kontent.",
            about: "YouTube, TikTok, Instagram kimi platformalarda əsas vizual bacarıqları öyrədir."
        },
        {
            id: 11,
            title: "Marketinq və SMM Strategiyaları",
            plan: "Dijital marketinq, SEO, reklam texnikaları, sosial media planlaması.",
            about: "Biznes sahibləri və marketinq menecerləri üçün."
        },
        {
            id: 12,
            title: "Dövlət Satınalmaları və Tenderlər",
            plan: "Dövlət satınalmalarının əsas prinsipləri, tender prosesləri, hüquqi tənzimləmələr, uğurlu tender strategiyaları.",
            about: "Dövlət satınalmaları və tenderlər sahəsində işləmək istəyənlər və sahibkarlar üçün."
        },
        {
            id: 13,
            title: "Karyera Planlama Kursu",
            plan: "Karyera planlamanın əsasları, fərdi inkişaf strategiyaları, gələcək peşə seçimində effektiv yanaşmalar.",
            about: "Peşə seçimində dəqiq qərar vermək və gələcək karyerasını düzgün istiqamətləndirmək istəyənlər üçün."
        },
        {
            id: 14,
            title: "Psixoloqlar üçün Peşə Bacarıqları",
            plan: "Koqnitiv-bihevioral terapiya (CBT) texnikaları, neqativ düşüncələrin idarə olunması, psixoloji dayanıqlılığın artırılması.",
            about: "Psixoloqlar və psixoloji məsləhət xidməti göstərən mütəxəssislər üçün nəzərdə tutulmuş peşəkar inkişaf proqramı."
        }
    ];

    const handleCategoryClick = (id) => {
        setActiveCategory(id === activeCategory ? null : id);
    };

    return (
        <div className="min-h-screen ">
            {/* Header */}
            <header className=" text-black">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center mb-2">Təlim istiqamətləri</h1>
                </div>
            </header>

            {/* Training Categories */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trainingCategories.map((category) => (
                        <div
                            key={category.id}
                            className={`rounded-lg shadow-md overflow-hidden transition-all duration-300 ${activeCategory === category.id ? 'bg-gray-50 border-gray-500 border-2' : 'bg-white hover:shadow-lg cursor-pointer border border-gray-100'
                                }`}
                        >
                            <div
                                className="p-6"
                                onClick={() => handleCategoryClick(category.id)}
                            >
                                <div className="flex items-start justify-between">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{category.title}</h3>
                                    <span className={`text-2xl transition-transform ${activeCategory === category.id ? 'transform rotate-180' : ''}`}>
                                        ↓
                                    </span>
                                </div>
                            </div>

                            {activeCategory === category.id && (
                                <div className="px-6 pb-6 space-y-4">
                                    <div>
                                        <h4 className="font-medium text-gray-400 mb-2">Plan:</h4>
                                        <p className="text-gray-800">{category.plan}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-400 mb-2">Haqqında:</h4>
                                        <p className="text-gray-800">{category.about}</p>
                                    </div>
                                    <button className="mt-4 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition-colors">
                                        Qeydiyyatdan keç
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Conclusion */}
            <section className="border-2 rounded-3xl py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center text-black mb-6">Nəticə</h2>
                    <p className="text-black max-w-3xl mx-auto text-center leading-relaxed">
                        INGLA Training Center fəaliyyətlərini daim yeniləyərək müasir bazar ehtiyaclarına cavab verən ixtisasartırma proqramları təqdim edir.
                        Hər bir təlim peşəkar və sənaye təcrübəsinə malik mütəxəssislər tərəfindən keçirilir.
                    </p>
                </div>
            </section>




        </div>
    );
};

export default TrainingCenter;