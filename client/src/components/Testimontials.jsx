import React, { useState, useEffect } from "react";

const testimonials = [
    {
        rating: "5.0",
        feedback:
            "Bu kurs mənim ingilis dili səviyyəmi qısa müddətdə xeyli yaxşılaşdırdı. Müəllimlər çox peşəkar və qayğıkeşdirlər!",
        name: "Elvin M.",
        position: "Tələbə",
        // imgSrc: "https://pagedone.io/asset/uploads/1696229969.png",
    },
    {
        rating: "4.7",
        feedback:
            "Dərslər interaktiv və maraqlıdır. Hər mövzu real həyat nümunələri ilə izah edilir. Burada öyrənmək çox rahatdır!",
        name: "Leyla A.",
        position: "Marketinq Mütəxəssisi",
        // imgSrc: "https://pagedone.io/asset/uploads/1696229994.png",
    },
    {
        rating: "4.9",
        feedback:
            "İş həyatım üçün ingilis dili öyrənirdim və nəticələr gözlədiyimdən daha yaxşı oldu! Müəllimlər çox dəstəkçidirlər.",
        name: "Ramin S.",
        position: "İT Mütəxəssisi",
        // imgSrc: "https://pagedone.io/asset/uploads/1696230027.png",
    },
    {
        rating: "4.9",
        feedback:
            "Online dərslər sayəsində zamanımı rahat idarə edə bilirəm. Keyfiyyətli təhsil üçün ən doğru seçim etdiyimi düşünürəm!",
        name: "Aytən H.",
        position: "Biznes Sahibi",
        // imgSrc: "https://pagedone.io/asset/uploads/1696230027.png",
    },


];

const TestimonialSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex(
            (prevIndex) =>
                (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 border-2 rounded-3xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <span className="text-sm text-gray-500 font-medium block mb-2">
                        Rəylər
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900">
                        Müştərilərimizin bildirdiyi rəylər
                    </h2>
                </div>
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500"
                            style={{
                                transform: `translateX(-${activeIndex * 100}%)`,
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="min-w-full px-4 flex justify-center"
                                >
                                    <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 hover:border-indigo-600 hover:shadow-sm">
                                        <div className="mb-7 text-amber-500 flex items-center gap-2">
                                            <svg
                                                className="w-5 h-5"
                                                viewBox="0 0 18 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span className="text-base font-semibold text-indigo-600">
                                                {testimonial.rating}
                                            </span>
                                        </div>
                                        <p className="text-base text-gray-600 leading-6 group-hover:text-gray-800 mb-8">
                                            {testimonial.feedback}
                                        </p>
                                        <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                                            <img
                                                className="rounded-full h-10 w-10 object-cover"
                                                src={testimonial.imgSrc}
                                                alt="avatar"
                                            />
                                            <div>
                                                <h5 className="text-gray-900 font-medium mb-1">
                                                    {testimonial.name}
                                                </h5>
                                                <span className="text-sm leading-4 text-gray-500">
                                                    {testimonial.position}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
                    >
                        &larr;
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
                    >
                        &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;
