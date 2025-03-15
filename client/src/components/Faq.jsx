import React from 'react';

const Faq = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-center mb-8">
                Bizə ən çox verilən suallar
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-bold mb-2">
                        İngilis dilini öyrənmək nə qədər vaxt aparır?
                    </h2>
                    <p className="text-gray-600">
                        Bu, sizin öyrənmə tempinizdən və nə qədər məşq etdiyinizdən asılıdır. Düzgün metodlarla qısa müddətdə böyük irəliləyiş əldə edə bilərsiniz.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-2">
                        Dərslər online və ya oflayn keçirilir?
                    </h2>
                    <p className="text-gray-600">
                        Biz həm online, həm də oflayn dərslər təklif edirik. Seçiminizdən asılı olaraq sizə uyğun variantı seçə bilərsiniz.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-2">
                        İngilis dilində danışmağı necə sürətli inkişaf etdirə bilərəm?
                    </h2>
                    <p className="text-gray-600">
                        Gündəlik praktikalar, danışıq klubları və interaktiv dərslərlə qısa müddətdə daha rahat danışmağa başlaya bilərsiniz.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-2">
                        Hansı kurs mənim üçün daha uyğundur?
                    </h2>
                    <p className="text-gray-600">
                        Sizə ən uyğun kursu seçmək üçün bizə müraciət edə və pulsuz konsultasiya ala bilərsiniz. Biz sizin ehtiyaclarınıza uyğun istiqamət veririk.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Faq;
