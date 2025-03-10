import React, { useState } from "react";

const englishCourses = [
    {
        title: "General English",
        description: "Master the fundamentals of English, including grammar, vocabulary, and pronunciation.",
        image: "https://via.placeholder.com/400x250?text=General+English",
        duration: "12 weeks",
        level: "Beginner to Intermediate",
        curriculum: "Grammar, Vocabulary, Speaking, Listening, Writing",
        instructor: "John Doe, MA in English Linguistics",
        prerequisites: "None",
        features: ["Interactive lessons", "Weekly quizzes", "Grammar and vocabulary exercises"],
        enrollmentLink: "#"
    },
    {
        title: "Kids",
        description: "Fun and engaging English lessons designed for children, focusing on basic words, sentences, and games.",
        image: "https://via.placeholder.com/400x250?text=Kids+English",
        duration: "8 weeks",
        level: "Beginner",
        curriculum: "Interactive Games, Vocabulary, Simple Sentences, Stories",
        instructor: "Jane Smith, BA in Education",
        prerequisites: "None",
        features: ["Engaging activities", "Story-based learning", "Colorful visuals"],
        enrollmentLink: "#"
    },
    {
        title: "Intensive English",
        description: "An accelerated course for those who want to improve their English skills quickly and effectively.",
        image: "https://via.placeholder.com/400x250?text=Intensive+English",
        duration: "6 weeks",
        level: "Intermediate to Advanced",
        curriculum: "Intensive Speaking, Writing, Advanced Grammar, Pronunciation",
        instructor: "Alice Johnson, TESOL Certified",
        prerequisites: "Intermediate English",
        features: ["High-intensity lessons", "1-on-1 speaking practice", "Advanced grammar focus"],
        enrollmentLink: "#"
    },
    {
        title: "Business English",
        description: "Improve your English for professional settings, focusing on business communication, meetings, and presentations.",
        image: "https://via.placeholder.com/400x250?text=Business+English",
        duration: "10 weeks",
        level: "Intermediate to Advanced",
        curriculum: "Business Vocabulary, Meetings, Presentations, Negotiation Skills",
        instructor: "Michael Brown, MBA, Certified Business English Teacher",
        prerequisites: "Basic Business English",
        features: ["Professional tone training", "Negotiation skills", "Business writing improvement"],
        enrollmentLink: "#"
    },
    {
        title: "Only Speaking",
        description: "Focus purely on speaking skills with real-world conversation practice and pronunciation improvement.",
        image: "https://via.placeholder.com/400x250?text=Only+Speaking",
        duration: "8 weeks",
        level: "Intermediate",
        curriculum: "Pronunciation, Daily Conversations, Public Speaking, Debates",
        instructor: "David Lee, TESOL Certified",
        prerequisites: "Intermediate English",
        features: ["Daily conversations", "Debate practice", "Pronunciation correction"],
        enrollmentLink: "#"
    }
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
            {/* Header Section */}
            <div className="text-center mb-12 px-4 sm:px-6 lg:px-12">
                <h1 className="text-4xl font-bold text-gray-800">Explore Our English Courses</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Choose from a variety of courses designed to meet your learning needs. Whether you're starting from scratch or advancing your skills, we've got you covered.
                </p>
            </div>

            {/* Course Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-12">
                {englishCourses.map((course, index) => (
                    <div
                        key={index}
                        className="relative group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform group-hover:scale-110 group-hover:shadow-xl"
                        onClick={() => handleCourseClick(course)}
                    >
                        {/* Image */}
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 ease-in-out"
                        />

                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <h3 className="text-2xl font-semibold text-gray-800">{course.title}</h3>
                            <p className="text-lg text-gray-600">{course.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal - Course Details */}
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
                        <p className="text-sm text-gray-500 mt-2"><strong>Duration:</strong> {selectedCourse.duration}</p>
                        <p className="text-sm text-gray-500"><strong>Level:</strong> {selectedCourse.level}</p>
                        <p className="text-sm text-gray-500 mt-4"><strong>Course Curriculum:</strong> {selectedCourse.curriculum}</p>

                        {/* Additional Course Info */}
                        <div className="mt-6">
                            <p className="text-sm text-gray-500"><strong>Instructor:</strong> {selectedCourse.instructor}</p>
                            <p className="text-sm text-gray-500"><strong>Prerequisites:</strong> {selectedCourse.prerequisites}</p>
                            <p className="text-sm text-gray-500 mt-4"><strong>Features:</strong></p>
                            <ul className="list-disc pl-5">
                                {selectedCourse.features.map((feature, index) => (
                                    <li key={index} className="text-sm text-gray-500">{feature}</li>
                                ))}
                            </ul>
                        </div>


                    </div>
                </div>
            )}


        </div>
    );
};

export default GeneralEnglish;
