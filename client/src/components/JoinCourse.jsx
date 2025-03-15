import { useState } from "react";

export default function JoinCourse() {
    const [isOpen, setIsOpen] = useState(false);
    const initialFormState = {
        name: "",
        course: "",
        phone: "",
        email: "",
        message: "",
    };
    const [formData, setFormData] = useState(initialFormState);

    const courses = ["General English", "IELTS", "Intensive English", "Only Speaking", "Business English"];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setFormData(initialFormState); // ✅ Reset form after submission
        setIsOpen(false);
    };

    const handleClose = () => {
        setIsOpen(false);
        setFormData(initialFormState); // ✅ Reset form when modal closes
    };

    return (
        <div className="flex justify-center items-center min-h-screen ">
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
                        className="bg-blue-600 text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-blue-700 transition"
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
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    required
                                />
                            </div>

                            {/* Improved "Kurs Seçin" Dropdown */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Kurs Seçin</label>
                                <div className="relative">
                                    <select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        className="appearance-none w-full p-3 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer transition"
                                        required
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
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Mesaj</label>
                                <textarea
                                    name="message"
                                    placeholder="İstəyiniz varsa mesajınızı yazın..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none h-24"
                                ></textarea>
                            </div>

                            <div className="flex justify-between mt-6">
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
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
