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
        description: "Özünüzə inamlə şəkildə səlis ingiliscə danışın",
        image: photo5,
        duration: "1-9 ay",
        level: "Başlanğıcdan Orta səviyyəyə",
        curriculum: "Qrammatika, Lüğət, Danışıq, Dinləmə, Yazı",
        instructor: "John Doe, İngilis dilçiliyində magistr",
        class: "Maksimum 6, fərdi",
        classTime: "120 dəqiqə",
        calendar: "Həftədə 3 dəfə",
        age: "10",
        prerequisites: "Tələb yoxdur",
        features: ["İnteraktiv dərslər", "Unit imtahanları", "Əlavə materiallar"],
        enrollmentLink: "#"
    },
    {
        title: "Uşaqlar üçün İngilis dili",
        description: "Əyləncəli və maraqlı dərslər uşaqlar üçün, əsas sözlər, cümlələr və oyunlara yönəlib.",
        image: photo2,
        duration: "1-9 ay",
        level: "Başlanğıc",
        curriculum: "İnteraktiv Oyunlar, Lüğət, Sadə Cümlələr, Hekayələr",
        instructor: "Jane Smith, Təhsil üzrə bakalavr",
        class: "Maksimum 6, fərdi",
        classTime: "90 dəqiqə",
        calendar: "Həftədə 2 dəfə",
        age: " 4",
        prerequisites: "Tələb yoxdur",
        features: ["Interaktiv dərs", "Unit imtahanları", "Əlavə materiallar", "Həvəsləndirmə tədbirləri"],
        enrollmentLink: "#"
    },
    {
        title: "İntensiv İngilis dili",
        description: "İngilis dil bacarıqlarınızı tez və effektiv şəkildə inkişaf etdirmək üçün sürətli kurs.",
        image: photo3,
        duration: "3 ay",
        level: "Orta səviyyədən Yüksək səviyyəyə",
        curriculum: "İntensiv Danışıq, Yazı, İnkişaf etmiş Qrammatika, Tələffüz",
        class: "Maksimum 4, fərdi",
        classTime: "180 dəqiqə",
        calendar: "Həftədə 5 dəfə",
        age: "10",
        instructor: "Alice Johnson, TESOL Sertifikatlı",
        prerequisites: "Orta səviyyəli İngilis dili",
        features: ["Interaktiv dərs", "Unit imtahanları", "Əlavə materiallar", "Həvəsləndirmə tədbirləri"],
        enrollmentLink: "#"
    },
    {
        title: "Biznes İngilis dili",
        description: "İş mühitində İngilis dili bacarıqlarınızı inkişaf etdirin: danışıqlar, iclaslar və təqdimatlar.",
        image: photo4,
        duration: "1-9 ay",
        level: "Orta səviyyədən Yüksək səviyyəyə",
        curriculum: "Biznes Lüğəti, İclaslar, Təqdimatlar, Danışıqlar Bacarığı",
        instructor: "Michael Brown, MBA, Sertifikatlı Biznes İngilis dili Müəllimi",
        class: "Maksimum 6, fərdi",
        classTime: "90 dəqiqə",
        calendar: "Həftədə 2 dəfə",
        age: "18",
        prerequisites: "Əsas Biznes İngilis dili",
        features: ["Hazır qəliblər əsasında nitq çıxışı", "Sahələr üzrə Əlavə materiallar", "Rəsmi məktubların yazılma forması"],
        enrollmentLink: "#"
    },
    {
        title: "Danışıq Dərsləri",
        description: "Danışıq bacarıqlarınızı gündəlik dialoqlar və tələffüz məşqləri ilə inkişaf etdirin.",
        image: photo1,
        duration: "1-4 ay",
        level: "Orta səviyyə",
        curriculum: "Tələffüz, Gündəlik Danışıqlar, İctimai Danışıq, Müzakirələr",
        instructor: "David Lee, TESOL Sertifikatlı",
        class: "Maksimum 4, fərdi",
        classTime: "60 dəqiqə",
        calendar: "Həftədə 2-3 dəfə",
        age: "15",
        prerequisites: "Orta səviyyəli İngilis dili",
        features: ["Rollu oyunlar", "Müxtəlif məkanlarda praktika", "Düzgün tələffüz"],
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
                        <p className="text-sm text-gray-500 mt-2"><strong>Sinif:</strong> {selectedCourse.class}</p>
                        <p className="text-sm text-gray-500 mt-2"><strong>Dərs Müddəti:</strong> {selectedCourse.classTime}</p>
                        <p className="text-sm text-gray-500 mt-2"><strong>Dərs Cədvəli:</strong> {selectedCourse.calendar}</p>
                        <p className="text-sm text-gray-500 mt-2"><strong>Minimum Yaş:</strong> {selectedCourse.age}</p>
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
