import React, { useState } from "react";
import CourseJoinSection from "../components/JoinCourse";
import JoinCourse from "../components/JoinCourse";
import photo1 from '../assets/11ratio/IMG_8515.png'
import photo2 from '../assets/11ratio/IMG_8978.png'
import photo3 from '../assets/11ratio/IMG_8981.png'
import photo4 from '../assets/11ratio/IMG_8980.png'
import photo5 from '../assets/11ratio/IMG_8517.png'
import photo6 from '../assets/11ratio/IMG_8516.png'

const englishCourses = [
    {
        title: "Ümumi İngilis dili",
        description: "Qrammatika, lüğət və tələffüzü əhatə edən əsas İngilis dili biliklərini mənimsəyin.",
        image: photo5,
        duration: "12 həftə",
        level: "Başlanğıcdan Orta səviyyəyə",
        curriculum: "Qrammatika, Lüğət, Danışıq, Dinləmə, Yazı",
        instructor: "John Doe, İngilis dilçiliyində magistr",
        prerequisites: "Tələb yoxdur",
        features: ["İnteraktiv dərslər", "Həftəlik testlər", "Qrammatika və lüğət tapşırıqları"],
        enrollmentLink: "#"
    },
    {
        title: "Uşaqlar üçün İngilis dili",
        description: "Əyləncəli və maraqlı dərslər uşaqlar üçün, əsas sözlər, cümlələr və oyunlara yönəlib.",
        image: photo2,
        duration: "8 həftə",
        level: "Başlanğıc",
        curriculum: "İnteraktiv Oyunlar, Lüğət, Sadə Cümlələr, Hekayələr",
        instructor: "Jane Smith, Təhsil üzrə bakalavr",
        prerequisites: "Tələb yoxdur",
        features: ["Maraqlı fəaliyyətlər", "Hekayə əsaslı tədris", "Rəngarəng vizuallar"],
        enrollmentLink: "#"
    },
    {
        title: "İntensiv İngilis dili",
        description: "İngilis dil bacarıqlarınızı tez və effektiv şəkildə inkişaf etdirmək üçün sürətli kurs.",
        image: photo3,
        duration: "6 həftə",
        level: "Orta səviyyədən Yüksək səviyyəyə",
        curriculum: "İntensiv Danışıq, Yazı, İnkişaf etmiş Qrammatika, Tələffüz",
        instructor: "Alice Johnson, TESOL Sertifikatlı",
        prerequisites: "Orta səviyyəli İngilis dili",
        features: ["Yüksək intensivlikli dərslər", "Fərdi danışıq məşqləri", "İnkişaf etmiş qrammatika"],
        enrollmentLink: "#"
    },
    {
        title: "Biznes İngilis dili",
        description: "İş mühitində İngilis dili bacarıqlarınızı inkişaf etdirin: danışıqlar, iclaslar və təqdimatlar.",
        image: photo4,
        duration: "10 həftə",
        level: "Orta səviyyədən Yüksək səviyyəyə",
        curriculum: "Biznes Lüğəti, İclaslar, Təqdimatlar, Danışıqlar Bacarığı",
        instructor: "Michael Brown, MBA, Sertifikatlı Biznes İngilis dili Müəllimi",
        prerequisites: "Əsas Biznes İngilis dili",
        features: ["Rəsmi üslubda danışıq", "Danışıqlar bacarıqları", "Biznes yazışmalarının inkişafı"],
        enrollmentLink: "#"
    },
    {
        title: "Yalnız Danışıq",
        description: "Danışıq bacarıqlarınızı gündəlik dialoqlar və tələffüz məşqləri ilə inkişaf etdirin.",
        image: photo1,
        duration: "8 həftə",
        level: "Orta səviyyə",
        curriculum: "Tələffüz, Gündəlik Danışıqlar, İctimai Danışıq, Müzakirələr",
        instructor: "David Lee, TESOL Sertifikatlı",
        prerequisites: "Orta səviyyəli İngilis dili",
        features: ["Gündəlik dialoqlar", "Müzakirə təcrübələri", "Tələffüz düzəlişləri"],
        enrollmentLink: "#"
    },
    {
        title: "Peşə Sahələri üçün İngilis dili",
        description: "Xüsusi peşələr üçün İngilis dili kursu: tibb, mühəndislik, hüquq və digər sahələr üçün terminlər və danışıq bacarıqları.",
        image: photo6,
        duration: "10 həftə",
        level: "Orta səviyyədən Yüksək səviyyəyə",
        curriculum: "Peşəyə uyğun terminlər, rəsmi yazışmalar, təqdimatlar, ünsiyyət bacarıqları",
        instructor: "Emily White, Peşəkar İngilis dili Təlimçisi",
        prerequisites: "Əsas İngilis dili bilikləri",
        features: ["Sektora uyğun materiallar", "Rəsmi yazışmalar", "Sahəyə aid danışıq məşqləri"],
        enrollmentLink: "#"
    },
];

const GeneralEnglish = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
    };

    const closeModal = () => {
        setSelectedCourse(null);
    };

    return (
        <div className="min-h-screen py-12">
            {/* Başlıq Bölməsi */}
            <div className="text-center mb-12 px-4 sm:px-6 lg:px-12">
                <h1 className="text-4xl font-bold text-gray-800">İngilis dili kurslarımızı kəşf edin</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Sizin üçün uyğun kursu seçin. İstər sıfırdan başlayın, istərsə də biliklərinizi inkişaf etdirin – biz sizə kömək edirik!
                </p>
            </div>

            {/* Kurs Kartları Bölməsi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-12">
                {englishCourses.map((course, index) => (
                    <div
                        key={index}
                        className="relative group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform group-hover:scale-110 group-hover:shadow-xl"
                        onClick={() => handleCourseClick(course)}
                    >
                        {/* Şəkil */}
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 ease-in-out"
                        />

                        {/* Məzmun */}
                        <div className="p-6 space-y-4">
                            <h3 className="text-2xl font-semibold text-gray-800">{course.title}</h3>
                            <p className="text-lg text-gray-600">{course.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal - Kurs Detalları */}
            {selectedCourse && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full relative transform scale-95 transition-all duration-300">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-600 hover:text-black"
                        >
                            &times;
                        </button>
                        <h2 className="text-3xl font-semibold text-gray-800">{selectedCourse.title}</h2>
                        <img
                            src={selectedCourse.image}
                            alt={selectedCourse.title}
                            className="w-full h-64 object-cover rounded-lg mt-4"
                        />
                        <p className="text-lg text-gray-600 mt-4">{selectedCourse.description}</p>
                        <p className="text-sm text-gray-500 mt-2"><strong>Müddət:</strong> {selectedCourse.duration}</p>
                        <p className="text-sm text-gray-500"><strong>Səviyyə:</strong> {selectedCourse.level}</p>
                        <p className="text-sm text-gray-500 mt-4"><strong>Kurikulum:</strong> {selectedCourse.curriculum}</p>

                        {/* Əlavə Kurs Məlumatı */}
                        <div className="mt-6">
                            <p className="text-sm text-gray-500"><strong>Müəllim:</strong> {selectedCourse.instructor}</p>
                            <p className="text-sm text-gray-500"><strong>Tələblər:</strong> {selectedCourse.prerequisites}</p>
                            <p className="text-sm text-gray-500 mt-4"><strong>Xüsusiyyətlər:</strong></p>
                            <ul className="list-disc pl-5">
                                {selectedCourse.features.map((feature, index) => (
                                    <li key={index} className="text-sm text-gray-500">{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            <JoinCourse />
        </div>
    );
};

export default GeneralEnglish;
