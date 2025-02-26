import React from "react";

const AboutUs = () => {
    const timeline = [
        { year: "2020", title: "Şirkətimizin təməli qoyuldu", desc: "Biznes fəaliyyətinə başladıq və ilk müştərilərimizi qazandıq." },
        { year: "2021", title: "İlk Böyük Layihəmiz", desc: "Böyük müştəri bazası ilə uğurlu əməkdaşlıq qurduq." },
        { year: "2022", title: "Genişlənmə", desc: "Yeni xidmətlər əlavə etdik və komandamızı böyütdük." },
        { year: "2023", title: "Beynəlxalq Tərəfdaşlıqlar", desc: "Beynəlxalq bazara çıxdıq və qlobal müştərilər əldə etdik." },
        { year: "2024", title: "İnnovativ Layihələr", desc: "Yeni texnologiyalar tətbiq edərək daha güclü həllər yaratdıq." },
    ];

    const values = [
        { title: "Müştəri Üstünlüyü", desc: "Müştərilərimizin ehtiyaclarına uyğun həllər təqdim edirik.", image: "https://via.placeholder.com/200" },
        { title: "İnnovasiya", desc: "Yeni texnologiyalar və yanaşmalarla daim inkişaf edirik.", image: "https://via.placeholder.com/200" },
        { title: "Etibarlılıq", desc: "Şəffaf və dürüst əməkdaşlıq bizim əsas dəyərlərimizdəndir.", image: "https://via.placeholder.com/200" },
        { title: "Keyfiyyət", desc: "Təqdim etdiyimiz xidmətlərdə ən yüksək standartlara riayət edirik.", image: "https://via.placeholder.com/200" },
    ];

    const partners = [
        { name: "Google", logo: "https://via.placeholder.com/100" },
        { name: "Microsoft", logo: "https://via.placeholder.com/100" },
        { name: "Amazon", logo: "https://via.placeholder.com/100" },
        { name: "Tesla", logo: "https://via.placeholder.com/100" },
    ];

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-16">
            {/* Missiyamız */}
            <section className="text-center space-y-6 max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold">Missiyamız</h2>
                <p className="text-gray-600 text-lg">Biz müştərilərimiz üçün ən yaxşı həlləri yaratmaq və texnologiya vasitəsilə bizneslərini inkişaf etdirmək üçün çalışırıq.
                    Biznes dünyasında yenilikləri tətbiq edərək, insanlara və müəssisələrə daha səmərəli və keyfiyyətli xidmətlər təqdim etməyi hədəfləyirik.
                    Texnologiyanın gücündən istifadə edərək, innovasiyaları həyatımıza gətirir və dayanıqlı inkişaf üçün çalışırıq.</p>
                <p className="text-gray-600 text-lg">Gələcəkdə qlobal bazarda daha geniş yer tutmaq, yeni tərəfdaşlıqlar qurmaq və cəmiyyət üçün faydalı layihələr yaratmaq bizim əsas məqsədlərimizdən biridir.</p>
            </section>

            {/* Hədəflərimiz - New Section Design */}
            <section>
                <h2 className="text-4xl font-bold text-center mb-12">Hədəflərimiz</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {timeline.map((item, index) => (
                        <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
                            <div className="text-3xl font-bold text-blue-600 mb-2">{item.year}</div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Dəyərlərimiz - New Approach with Images */}
            <section>
                <h2 className="text-4xl font-bold text-center mb-12">Dəyərlərimiz</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="flex flex-col items-center p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
                            <img src={value.image} alt={value.title} className="w-32 h-32 object-cover rounded-full mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">{value.title}</h3>
                            <p className="text-gray-600 text-center">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tərəfdaşlarımız */}
            <section>
                <h2 className="text-4xl font-bold text-center mb-12">Tərəfdaşlarımız</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex flex-col items-center border rounded-lg p-4 hover:shadow-lg transition w-40">
                            <img src={partner.logo} alt={partner.name} className="w-20 h-20 rounded-full mb-2" />
                            <p className="text-lg font-semibold">{partner.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
