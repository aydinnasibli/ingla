import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function CarouselMain() {
    const slides = [





        {
            url: 'https://i.imghippo.com/files/Ubw5423JaA.png'
        },
        {
            url: 'https://i.imghippo.com/files/AhU5881wXg.png',
        },
        {
            url: 'https://i.imghippo.com/files/JSe9019as.png',
        },
        {
            url: 'https://i.imghippo.com/files/GCF5572jw.png',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    // Automatically change slides every 3000ms
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, [currentIndex]);

    return (
        <div className="xl:max-w-[1400px] xl:h-[780px] lg:h-[600px] md:h-[500px] sm:h-[400px] h-[300px] w-full m-auto py-16 px-4 relative group mt-10">
            {/* Container for the image slides */}
            <div className="w-full h-full absolute inset-0 overflow-hidden rounded-3xl">
                <div className="relative h-full">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex
                                ? 'opacity-100'
                                : 'opacity-0'
                                }`}
                            style={{
                                backgroundImage: `url(${slide.url})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',

                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-1/2 left-2 md:left-5 transform -translate-y-1/2 text-xl md:text-2xl rounded-full p-1 md:p-2 bg-black/30 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>

            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-1/2 right-2 md:right-5 transform -translate-y-1/2 text-xl md:text-2xl rounded-full p-1 md:p-2 bg-black/30 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            {/* Dots for Navigation - Positioned at the bottom of the container */}
            <div className="absolute bottom-3 md:bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`cursor-pointer ${slideIndex === currentIndex
                            ? 'text-xl md:text-3xl scale-110 md:scale-125' // Larger and highlighted for active slide
                            : 'text-lg md:text-2xl'
                            } text-white transition-transform duration-300`}
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarouselMain;
