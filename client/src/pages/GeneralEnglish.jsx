import React, { useState } from "react";
import CourseJoinSection from "../components/JoinCourse";
import JoinCourse from "../components/JoinCourse";
import photo1 from '../assets/11ratio/IMG_8515.png'
import photo2 from '../assets/11ratio/IMG_8978.png'
import photo3 from '../assets/11ratio/IMG_8981.png'
import photo4 from '../assets/11ratio/IMG_8980.png'
import photo5 from '../assets/11ratio/IMG_8517.png'
import photo6 from '../assets/11ratio/IMG_8516.png'
import { useNavigate } from "react-router-dom";

const englishCourses = [
    {
        title: "Ümumi İngilis dili",
        description: "Özünüzə inamla şəkildə səlis ingiliscə danışın",
        image: photo5,
        duration: "1-9 ay",
        level: "Başlanğıcdan Orta səviyyəyə",
        curriculum: "Qrammatika, Lüğət, Danışıq, Dinləmə, Yazı",
        class: "Maksimum 6, fərdi",
        classTime: "120 dəqiqə",
        calendar: "Həftədə 3 dəfə",
        age: "10",
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
        class: "Maksimum 6, fərdi",
        classTime: "90 dəqiqə",
        calendar: "Həftədə 2 dəfə",
        age: " 4",
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
        class: "Maksimum 6, fərdi",
        classTime: "90 dəqiqə",
        calendar: "Həftədə 2 dəfə",
        age: "18",
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
        class: "Maksimum 4, fərdi",
        classTime: "60 dəqiqə",
        calendar: "Həftədə 2-3 dəfə",
        age: "15",
        features: ["Rollu oyunlar", "Müxtəlif məkanlarda praktika", "Düzgün tələffüz"],
        enrollmentLink: "#"
    },

];

const GeneralEnglish = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const navigate = useNavigate()
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

                        {/* Course Title */}
                        <h2 className="text-3xl font-semibold text-gray-800">{selectedCourse.title}</h2>

                        {/* Course Image */}
                        <img
                            src={selectedCourse.image}
                            alt={selectedCourse.title}
                            className="w-full h-64 object-cover rounded-lg mt-4"
                        />

                        {/* Course Details + Register Button */}
                        <div className="flex justify-between items-start mt-4">
                            <div className="w-2/3">
                                <p className="text-lg text-gray-600">{selectedCourse.description}</p>
                                <p className="text-sm text-gray-500 mt-2"><strong>Müddət:</strong> {selectedCourse.duration}</p>
                                <p className="text-sm text-gray-500 mt-2"><strong>Sinif:</strong> {selectedCourse.class}</p>
                                <p className="text-sm text-gray-500 mt-2"><strong>Dərs Müddəti:</strong> {selectedCourse.classTime}</p>
                                <p className="text-sm text-gray-500 mt-2"><strong>Dərs Cədvəli:</strong> {selectedCourse.calendar}</p>
                                <p className="text-sm text-gray-500 mt-2"><strong>Minimum Yaş:</strong> {selectedCourse.age}</p>
                                <p className="text-sm text-gray-500 mt-4"><strong>Kurikulum:</strong> {selectedCourse.curriculum}</p>

                                {/* Features */}
                                <div className="mt-6">
                                    <p className="text-sm text-gray-500"><strong>Xüsusiyyətlər:</strong></p>
                                    <ul className="list-disc pl-5">
                                        {selectedCourse.features.map((feature, index) => (
                                            <li key={index} className="text-sm text-gray-500">{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right-Aligned Button */}
                            <div className="w-auto flex justify-end ">
                                <button
                                    onClick={() => window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSc62sVg6Y3qm31NRmu6cj1QEC1qxeoPTAhbqQQTG0zBoeDeIQ/viewform?usp=header'}
                                    className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"

                                >
                                    Səviyyəni Yoxla
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            )}
            <JoinCourse />
        </div>
    );
};

export default GeneralEnglish;
