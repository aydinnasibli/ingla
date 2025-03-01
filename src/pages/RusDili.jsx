import React from 'react';

function RusDili() {
    return (
        <div>
            <p className='text-center text-4xl mt-10'>Rus Dili</p>

            <section className="py-14 lg:py-24 relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                        <div className="img-box">
                            <img src="https://pagedone.io/asset/uploads/1702034769.png" alt="Rus Dili"
                                className="max-lg:mx-auto object-cover" />
                        </div>
                        <div className="lg:pl-[100px] flex items-center">
                            <div className="data w-full">
                                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                                    Rus Dilini Öyrənmək
                                </h2>
                                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                                    Rus dilini öyrənmək istəyənlər üçün xüsusi proqramlarımız həm uşaqlar, həm də böyüklər üçün nəzərdə tutulub. Dərslər səviyyəyə və yaş qruplarına uyğun şəkildə təşkil olunur, praktiki yanaşma və interaktiv metodlarla keçirilir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 lg:py-24 relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
                        <div className="lg:pr-24 flex items-center">
                            <div className="data w-full">
                                <h3 className="font-bold text-3xl mb-6 max-lg:text-center">📌 Uşaqlar Üçün Rus Dili</h3>
                                <p className="text-lg text-gray-500">
                                    Uşaqlar üçün rus dili dərsləri 6-14 yaş aralığında olan şagirdlərə yönəlib. Dərslər oyunlar, mahnılar və vizual materiallar vasitəsilə keçirilir, uşaqların söz ehtiyatını artırır və düzgün tələffüz formalaşdırır. Dinləmə, danışıq, oxu və yazı bacarıqları kompleks şəkildə inkişaf etdirilir.
                                </p>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://pagedone.io/asset/uploads/1702034785.png" alt="Kids Russian learning" className="hidden lg:block object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 lg:py-24 relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
                        <div className="img-box">
                            <img src="https://pagedone.io/asset/uploads/1702034785.png" alt="Adults Russian learning" className="max-lg:mx-auto object-cover" />
                        </div>
                        <div className="lg:pl-24 flex items-center">
                            <div className="data w-full">
                                <h3 className="font-bold text-3xl mb-6 max-lg:text-center">📌 Böyüklər Üçün Rus Dili</h3>
                                <p className="text-lg text-gray-500">
                                    Böyüklər üçün rus dili dərsləri isə başlanğıc, orta və yüksək səviyyələri əhatə edir. Kurslar gündəlik ünsiyyət, işgüzar rus dili və akademik məqsədlər üçün xüsusi proqramlarla tədris olunur. Qrammatika, söz ehtiyatı və düzgün danışıq texnikalarına xüsusi diqqət yetirilir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">📅 Dərslər Necə Keçirilir?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4 mx-auto">
                                <span className="text-indigo-600 text-xl">✔️</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">Onlayn və Əyani Dərslər</h3>
                            <p className="text-gray-600 text-center">Uşaqların rahatlığına uyğun olaraq dərslər keçirilir.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4 mx-auto">
                                <span className="text-indigo-600 text-xl">✔️</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">Həftədə 2-3 dəfə, 60 dəqiqəlik dərslər</h3>
                            <p className="text-gray-600 text-center">Uşaqların diqqətini cəlb edəcək müddətdə intensiv dərslər.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4 mx-auto">
                                <span className="text-indigo-600 text-xl">✔️</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">Davamlı Rəy və İzləmə</h3>
                            <p className="text-gray-600 text-center">Uşaqların inkişafını izləyirik və müntəzəm olaraq geri dönürük.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RusDili;
