import React from "react";

const PreschoolPage = () => {
    return (
        <div className="b text-gray-900 min-h-screen flex justify-center items-center p-8">
            <div className="max-w-6xl w-full bg-white p-10 rounded-3xl shadow-2xl space-y-10">
                <h1 className="text-4xl font-extrabold text-center text-blue-700">Preschool Bölməsi – Erkən İnkişaf və Təhsil</h1>
                <p className="text-center text-lg max-w-3xl mx-auto">Gələcəyin uğurlu başlanğıcı burada başlayır! Bizim Preschool bölməmiz iki əsas istiqamətdən ibarətdir: Bağça və Preschool (Məktəbəqədər Hazırlıq).</p>

                {/* Bağça Section */}
                <div className="bg-green-100 p-8 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold text-green-700 text-center">Bağça – Sevgiylə öyrən, güvənlə böyü</h2>
                    <p className="mt-4 text-center">Bağçamızda uşaqların fiziki, sosial və emosional inkişafını dəstəkləyən mühit yaradılır.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">Erkən İnkişaf Qrupları – 2 yaşdan etibarən xüsusi tədris proqramları.</div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">İnteqrasiya olunmuş təlim metodları – Oyun, musiqi, incəsənət vasitəsilə öyrənmə.</div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">Psixoloq və Loqoped Xidməti – Fərdi yanaşmalarla dəstək.</div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">Sağlam qidalanma və aktiv həyat tərzi – Balanslı menyu və fiziki fəaliyyətlər.</div>
                    </div>
                </div>

                {/* Preschool Section */}
                <div className="bg-blue-100 p-8 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-700 text-center">Preschool – Məktəbəqədər Hazırlıq</h2>
                    <p className="mt-4 text-center">Uşaqları məktəbə hazırlamaq üçün beynəlxalq və yerli proqramları tətbiq edirik.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">IB/Cambridge Məktəbəqədər Hazırlıq Programı – Beynəlxalq kurikulum.</div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">Azərbaycan və Rus dillərində məktəbəqədər hazırlıq – Dövlət proqramına uyğun.</div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">Şahmat Dərsləri – Məntiqi düşünmə inkişafı.</div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">Rəsm Dərsləri – Yaradıcılığın inkişafı.</div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">Ev Tapşırıqlarına Dəstək – Şagirdlərə dərs köməyi.</div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">Yay Məktəbi – Əyləncəli yay proqramları.</div>
                    </div>
                </div>

                {/* Why Choose Us? */}
                <div className="bg-purple-100 p-8 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold text-purple-700 text-center">Niyə bizi seçməlisiniz?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">Fərdi yanaşma – Uşaqların fərdi ehtiyaclarına uyğun tədris.</div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">Peşəkar komanda – Təcrübəli müəllimlər, psixoloqlar və loqopedlər.</div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">Təhlükəsiz və rahat mühit – Uşaqların təhlükəsizliyi bizim üçün önəmlidir.</div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">Müasir yanaşma və innovativ metodlar – Beynəlxalq standartlara uyğun tədris.</div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PreschoolPage;