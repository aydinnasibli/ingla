import React, { useState } from "react";
import {
    FaTimes, FaChalkboardTeacher, FaBriefcase, FaUserTie, FaShoppingCart, FaClock,
    FaComments, FaBrain, FaProjectDiagram, FaStar, FaCamera, FaBullhorn,
    FaFileInvoiceDollar, FaChartBar, FaUserMd
} from "react-icons/fa";
import { toast } from 'react-hot-toast'
import axios from "axios";
const trainings = [
    {
        title: "Peşəkar Trener Akademiyası",
        plan: "Trenerlik bacarıqları, auditoriya ilə effektiv əlaqə, tədris metodları və praktiki təlim sessiyaları.",
        about: "Bu proqram yeni və ixtisasını artırmaq istəyən trenerlər üçün düzgün metodologiyaları öyrədir.",
        icon: <FaChalkboardTeacher className="text-blue-600 text-4xl" />
    },

    {
        title: "HR Peşəkarı",
        plan: "HR strategiyaları, istedad idarəetməsi, performans qiymətləndirilməsi.",
        about: "HR sahəsində işləmək və peşəkar olmaq istəyənlər üçün.",
        icon: <FaUserTie className="text-purple-600 text-4xl" />
    },
    {
        title: "Satış Uğurunun Sirləri",
        plan: "Satış strategiyaları, müştəri ehtiyaclarını anlama, effektiv kommunikasiya.",
        about: "Satış menecerləri və sahibkarlar üçün.",
        icon: <FaShoppingCart className="text-red-600 text-4xl" />
    },
    {
        title: "Zamanı İdarə Etmə",
        plan: "Vaxtın idarə olunması texnikaları, prioritetlərin müəyyən edilməsi, planlama bacarıqları.",
        about: "Səmərəli vaxt idarəetməsi öyrədir.",
        icon: <FaClock className="text-yellow-600 text-4xl" />
    },
    {
        title: "Bədən Dili və Ünsiyyət Bacarıqları",
        plan: "Bədən dilinin oxunması, effektiv ünsiyyət qurmaq, inandırıcı olmaq.",
        about: "Müsahibələrdə və biznes görüşlərində vacib bacarıqlardandır.",
        icon: <FaComments className="text-indigo-600 text-4xl" />
    },
    {
        title: "Mindfulness: Zehni Rahatlıq və Fokuslanma",
        plan: "Düşüncə idarəetməsi, stresin azaldılması, fokuslanma texnikaları.",
        about: "Stresi idarə etmək və daha produktiv olmaq istəyənlər üçün.",
        icon: <FaBrain className="text-teal-600 text-4xl" />
    },
    {
        title: "PMP: Layihə İdarəetməsində Peşəkarlıq",
        plan: "Layihə planlaması, risk idarəetməsi, çatdırma strategiyaları.",
        about: "Layihə menecerləri üçün dünya standartlarına uyğun bir proqram.",
        icon: <FaProjectDiagram className="text-orange-600 text-4xl" />
    },
    {
        title: "Şəxsi Brendinq və Sosial Media Strategiyaları",
        plan: "Şəxsi imicin formalaşdırılması, sosial mediada effektiv təqdimat.",
        about: "Peşəkar brend yaratmaq və bazarda tanınmaq istəyənlər üçün.",
        icon: <FaStar className="text-pink-600 text-4xl" />
    },
    {
        title: "Mobiliqrafiya və Vizual Kontent Yaratma",
        plan: "Telefonla keyfiyyətli foto və video çəkmək, montaj bacarıqları, kreativ kontent.",
        about: "YouTube, TikTok, Instagram kimi platformalarda əsas vizual bacarıqları öyrədir.",
        icon: <FaCamera className="text-gray-600 text-4xl" />
    },

];

const PersonalTraining = () => {
    const [selectedTraining, setSelectedTraining] = useState(null);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        course: "",
    })


    const handleOpenRegister = () => {
        setData(prev => ({
            ...prev,
            course: selectedTraining?.title || ""
        }));
        setIsRegisterOpen(true);
    };

    const handleCloseModals = () => {
        setSelectedTraining(null);
        setIsRegisterOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, course, phone, email, message } = data;
        try {
            const { data } = await axios.post('/trainingcenter', { name, course, phone, email, message })
            if (data.error) {
                toast.error(data.error);
                return; // Stop execution if there's an error
            } else {
                setData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    course: ""
                })
                toast.success("Mesajınız göndərildi")
            }
        } catch (error) {
            console.log(error)
        }
        console.log("Form Data Submitted:", data);

        // TODO: Send data to backend using fetch or axios
        handleCloseModals();
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-6 bg-gray-50">
            <h2 className="text-3xl font-bold mb-6">Fərdi Təlimlər</h2>

            {/* Grid of Training Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
                {trainings.map((training, index) => (
                    <button
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center gap-4"
                        onClick={() => setSelectedTraining(training)}
                    >
                        {training.icon}
                        <h3 className="text-xl font-semibold">{training.title}</h3>
                    </button>
                ))}
            </div>

            {/* Training Details Modal */}
            {selectedTraining && !isRegisterOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative animate-fade-in">
                        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition" onClick={handleCloseModals}>
                            <FaTimes size={20} />
                        </button>

                        <h3 className="text-2xl font-bold mb-3 text-gray-900">{selectedTraining.title}</h3>
                        <p className="text-gray-700 mb-2"><strong>Plan:</strong> {selectedTraining.plan}</p>
                        <p className="text-gray-700 mb-4"><strong>Haqqında:</strong> {selectedTraining.about}</p>

                        <button className="w-full bg-[#ffde2b] hover:bg-[#f3d11d] text-white px-4 py-2 rounded-lg transition" onClick={handleOpenRegister}>
                            Qeydiyyatdan keç
                        </button>
                    </div>
                </div>
            )}

            {/* Registration Form Modal */}
            {isRegisterOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg relative animate-fade-in transform translate-y-10">

                        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition" onClick={handleCloseModals}>
                            <FaTimes size={20} />
                        </button>

                        <h3 className="text-2xl font-bold mb-3 text-gray-900">Qeydiyyat Formu</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Ad</label>
                                <input type="text" name="name" value={data.name} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input type="email" name="email" value={data.email} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Telefon</label>
                                <input type="tel" name="phone" value={data.phone} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Mesaj</label>
                                <textarea name="message" value={data.message} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 h-24" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Kurs</label>
                                <input type="text" value={data.course} readOnly className="w-full border bg-gray-100 rounded-lg px-3 py-2" />
                            </div>

                            <button type="submit" className="w-full   text-white px-4 py-2 rounded-lg bg-[#ffde2b] hover:bg-[#f3d11d] transition">
                                Göndər
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PersonalTraining;
