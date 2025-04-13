import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
export default function JoinCoursePreschool() {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        course: "",
    })

    const courses = ["Azərbaycan bölməsi məktəbəqədər qrupu", "Rus bölməsi məktəbəqədər qrupu", "IB/Cambridge məktəbəqədər", "Erkən inkişaf qrupları", "Tam gün bağça"];



    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, course, phone, email, message } = data;
        try {
            const { data } = await axios.post('/joincoursepreschool', { name, course, phone, email, message })
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
        setData({}); // ✅ Reset form after submission
        setIsOpen(false);
    };

    const handleClose = () => {
        setIsOpen(false);
        setData({}); // ✅ Reset form when modal closes
    };

    return (
        <div className="flex justify-center items-center py-20 ">
            {/* Course Card */}
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full transition-all hover:scale-105 hover:shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Asan Qeydiyyat</h2>
                <div className="mt-6 space-y-4 text-gray-700 text-lg">
                    <p><span className="font-semibold">👨‍🏫 Müəllim:</span> +3 il təcrübə</p>
                    <p><span className="font-semibold">⏳ Müddət:</span> 2-2.5 ay / 1 səviyyə</p>
                    <p><span className="font-semibold">📚 Səviyyə:</span> A1, A2, B1, B2, C1, C2</p>
                    <p><span className="font-semibold">👥 Növ:</span> Qrup / Fərdi</p>
                    <p><span className="font-semibold">💻 Format:</span> Əyani / Onlayn</p>
                </div>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-[#ffde2b] text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-[#f3d11d] transition"
                    >
                        Kursa qoşul
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl transform transition-all scale-100">
                        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Kursa qoşul</h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Ad Soyad</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Adınızı daxil edin"
                                    value={data.name}
                                    onChange={(e) => setData({ ...data, name: e.target.value })}
                                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>

                            {/* Improved "Kurs Seçin" Dropdown */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Kurs Seçin</label>
                                <div className="relative">
                                    <select
                                        name="course"
                                        value={data.course}
                                        onChange={(e) => setData({ ...data, course: e.target.value })}
                                        className="appearance-none w-full p-3 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer transition"
                                    >
                                        <option value="">Seçin</option>
                                        {courses.map((course, index) => (
                                            <option key={index} value={course}>{course}</option>
                                        ))}
                                    </select>

                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Mobil nömrə</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+994 50 123 45 67"
                                    value={data.phone}
                                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    value={data.email}
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Mesaj</label>
                                <textarea
                                    name="message"
                                    placeholder="İstəyiniz varsa mesajınızı yazın..."
                                    value={data.message}
                                    onChange={(e) => setData({ ...data, message: e.target.value })}

                                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none h-24"
                                ></textarea>
                            </div>

                            <div className="flex justify-between mt-6">
                                <button
                                    type="submit"
                                    className="bg-[#ffde2b] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#f3d11d] transition"
                                >
                                    Göndər
                                </button>
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="bg-gray-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-500 transition"
                                >
                                    Bağla
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
