import React from "react";

const AboutUs = () => {
    return (
        <div className="p-8 max-w-6xl mx-auto space-y-16 text-gray-800">
            {/* Vizyonumuz */}
            <section className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-gray-400">
                <h2 className="text-3xl font-semibold">Vizyonumuz</h2>
                <p className="mt-4 leading-relaxed">
                    Biz gələcəyin innovativ və dayanıqlı inkişafına töhfə verən lider şirkət olmaq istəyirik. Texnologiya və təhsili birləşdirərək, müştərilərimizə və cəmiyyətə dəyər qatan həllər təqdim etməyi hədəfləyirik.
                    Qlobal bazarda güclü mövqe tutaraq, beynəlxalq əməkdaşlıqları genişləndirmək, insan kapitalının inkişafına töhfə vermək və rəqabətə davamlı mütəxəssislər yetişdirmək bizim əsas məqsədlərimizdəndir.
                    Daim yeniliklərə açıq, müştərilərimizin ehtiyaclarına uyğun fərdi yanaşma təqdim edən və etik prinsiplərə sadiq qalan bir şirkət olaraq, şəffaflıq, dürüstlük və yüksək keyfiyyəti prioritet tutaraq daha parlaq gələcək üçün çalışırıq
                </p>

            </section>

            {/* Missiyamız */}
            <section className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-gray-400">
                <h2 className="text-3xl font-semibold">Missiyamız</h2>
                <p className="mt-4 leading-relaxed">
                    Biz texnologiya və innovasiyaların gücündən istifadə edərək müştərilərimizə ən yaxşı həlləri təqdim etməyə və onların bizneslərini inkişaf etdirməyə çalışırıq. Yenilikçi yanaşmalarımızla insanlara və müəssisələrə daha səmərəli, keyfiyyətli və dayanıqlı xidmətlər göstərməyi hədəfləyirik.
                    Eyni zamanda, beynəlxalq əməkdaşlıqlar quraraq, müasir və keyfiyyətli təhsil imkanları yaratmaq, fərdlərin akademik və peşəkar inkişafını dəstəkləmək və qlobal miqyasda rəqabətə davamlı mütəxəssislər yetişdirmək üçün çalışırıq. Təhsil sahəsində innovativ həllər və metodlar tətbiq edərək fərdi inkişafı stimullaşdırmaq əsas məqsədlərimizdən biridir.

                </p>
                <p className="mt-4 leading-relaxed">
                    Gələcəkdə qlobal bazarda daha geniş yer tutmaq, yeni tərəfdaşlıqlar qurmaq və cəmiyyət üçün faydalı layihələr həyata keçirməklə, texnologiya və təhsili bir araya gətirərək daha parlaq gələcək üçün çalışırıq.

                </p>
            </section>

            {/* Hədəflərimiz */}
            <section>
                <h2 className="text-3xl font-semibold text-center mb-8">Hədəflərimiz</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: "Qlobal Mövqe və İnkişaf", desc: "Şirkət olaraq qlobal bazarda daha geniş yer tutmağı və beynəlxalq əməkdaşlıqlar qurmağı hədəfləyirik." },
                        { title: "Müştəri Məmnuniyyəti və Keyfiyyət", desc: "Keyfiyyətə verdiyimiz önəm sayəsində, ən effektiv və etibarlı həlləri təqdim etməyə sadiqik." },
                        { title: "İnnovasiya və Fərdi Yanaşma", desc: "Daim yenilənən texnologiyalar vasitəsilə fərdi yanaşmanı əsas götürərək xüsusi həllər hazırlayırıq." },
                        { title: "Dəyər yaratmaq", desc: "Cəmiyyət qarşısında məsuliyyətli yanaşmanı qoruyaraq dayanıqlı inkişafı təmin etməyə çalışırıq." }
                    ].map((item, index) => (
                        <div key={index} className="p-6 border transition-all duration-300 ease-in-out border-gray-200 rounded-2xl shadow-sm hover:border-gray-400 ">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-700">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Dəyərlərimiz */}
            <section>
                <h2 className="text-3xl font-semibold text-center mb-8">Dəyərlərimiz</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Keyfiyyət", desc: "Təhsil və təqdim etdiyimiz xidmətlərdə yüksək standartları qoruyuruq." },
                        { title: "İnnovasiya", desc: "Yenilikçi metodlar və texnologiyalardan istifadə edərək daim inkişaf edirik." },
                        { title: "Fərdi yanaşma", desc: "Hər insanın və müəssisənin ehtiyaclarına uyğun fərdi həllər hazırlayırıq." },
                        { title: "Beynəlxalq əməkdaşlıq", desc: "Akademik və biznes tərəfdaşlıqlar quraraq qlobal rəqabətə davamlı mütəxəssislər yetişdiririk." },
                        { title: "Məsuliyyətlilik", desc: "Cəmiyyət və fərdlər qarşısında etik və sosial məsuliyyətimizi qoruyuruq." },
                        { title: "Şəffaflıq və dürüstlük", desc: "Müştərilərimizlə açıq və etibarlı əməkdaşlıq qururuq." }
                    ].map((value, index) => (
                        <div key={index} className="p-6 border transition-all duration-300 ease-in-out border-gray-200 rounded-2xl shadow-sm hover:border-gray-400 ">
                            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                            <p className="text-gray-700">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;