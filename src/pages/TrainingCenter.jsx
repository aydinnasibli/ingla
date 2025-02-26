import React from "react";

const TrainingCenter = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Fərdi Təlimlərimiz */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-blue-50">
                <h2 className="text-3xl font-bold mb-4">Fərdi Təlimlərimiz</h2>
                <p className="text-gray-600 text-center max-w-md">
                    Fərdi təlimlərimiz, şəxsi inkişafınızı dəstəkləmək üçün hazırlanmışdır.
                    Təcrübəli mütəxəssislər tərəfindən fərdi yanaşma ilə keçirilən bu təlimlər sizə
                    istədiyiniz sahədə bacarıqlarınızı artırmağa kömək edəcək.
                </p>
                <img
                    src="https://source.unsplash.com/500x300/?education,learning"
                    alt="Fərdi Təlimlər"
                    className="mt-4 rounded-lg shadow-lg"
                />
            </div>

            {/* Korporativ Təlimlərimiz */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-gray-100">
                <h2 className="text-3xl font-bold mb-4">Korporativ Təlimlərimiz</h2>
                <p className="text-gray-600 text-center max-w-md">
                    Korporativ təlimlərimiz şirkətinizin inkişafına dəstək olmaq üçün hazırlanmışdır.
                    İşçilərinizin bilik və bacarıqlarını artırmaq üçün praktiki və nəzəri təlimlər təklif edirik.
                </p>
                <img
                    src="https://source.unsplash.com/500x300/?corporate,training"
                    alt="Korporativ Təlimlər"
                    className="mt-4 rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default TrainingCenter;
