import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function CarouselMain() {
    const slides = [
        { url: 'https://i.imghippo.com/files/Ubw5423JaA.png' },
        { url: 'https://i.imghippo.com/files/AhU5881wXg.png' },
        { url: 'https://i.imghippo.com/files/JSe9019as.png' },
        { url: 'https://i.imghippo.com/files/GCF5572jw.png' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    // Automatically change slides every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="xl:max-w-[1400px] xl:h-[780px] lg:h-[600px] md:h-[500px] sm:h-[400px] h-[300px] w-full m-auto py-16 px-4 relative group mt-10 overflow-hidden rounded-3xl">
            {/* Image Container */}
            <div className="w-full h-full relative">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={slide.url}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                ))}

                {/* Dots inside the image */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {slides.map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`cursor-pointer transition-transform duration-300 ${slideIndex === currentIndex
                                ? 'text-3xl scale-125 text-white'
                                : 'text-2xl text-gray-300'
                                }`}
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>

            {/* Left Arrow */}
            <div
                className="hidden group-hover:block absolute top-1/2 left-2 md:left-5 transform -translate-y-1/2 text-xl md:text-2xl rounded-full p-1 md:p-2 bg-black/30 text-white cursor-pointer"
                onClick={prevSlide}
            >
                <BsChevronCompactLeft size={30} />
            </div>

            {/* Right Arrow */}
            <div
                className="hidden group-hover:block absolute top-1/2 right-2 md:right-5 transform -translate-y-1/2 text-xl md:text-2xl rounded-full p-1 md:p-2 bg-black/30 text-white cursor-pointer"
                onClick={nextSlide}
            >
                <BsChevronCompactRight size={30} />
            </div>
        </div>
    );
}

export default CarouselMain;
