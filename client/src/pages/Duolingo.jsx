import React from 'react'
import JoinCourse from '../components/JoinCourse'
import photo1 from '../assets/11ratio/IMG_8514.png'
import photo2 from '../assets/11ratio/IMG_8515.png'
function Duolingo() {
    return (
        <div >
            <p className='text-center  text-4xl mt-10'>Duolingo</p>
            <p></p>
            <section class="py-14 lg:py-24 relative">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
                        <div class="img-box">
                            <img src={photo1} alt="About Us tailwind page"
                                class="max-lg:mx-auto object-cover rounded-xl" />
                        </div>
                        <div class="lg:pl-[100px] flex items-center">
                            <div class="data w-full">
                                <h2
                                    class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                                    Duolingo</h2>
                                <p class="font-normal  text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                                    Duolingo İngilis dili Sertifikatı (Duolingo English Test) beynəlxalq səviyyədə tanınan və sürətli, rahat şəkildə əldə edilə bilən bir dil sertifikatıdır. Onlayn formada təqdim olunan bu imtahan, dinləmə, oxuma, yazma və danışıq bacarıqlarını qiymətləndirərək namizədlərin ingilis dili səviyyəsini müəyyən edir. Dünyanın bir çox universiteti və işəgötürəni tərəfindən qəbul edilən bu sertifikat, ənənəvi dil imtahanlarına alternativ olaraq daha sərfəli və əlçatan seçim təklif edir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-14 lg:py-24 relative">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
                        <div class="lg:pr-24 flex items-center">
                            <div class="data w-full">
                                <img src={photo2} alt="About Us tailwind page"
                                    class="block lg:hidden mb-9 mx-auto object-cover rounded-xl" />
                                <ul className="list-disc space-y-6  pl-6 text-xl text-gray-500 max-w-2xl mx-auto">
                                    <li>Duolingo İngilis dili Sertifikatı rəsmi olaraq bir çox universitet və şirkət tərəfindən qəbul edilir.</li>
                                    <li>İmtahan tamamilə onlayn keçirilir və nəticələr sürətli şəkildə təqdim olunur.</li>
                                    <li>Namizədlərin dinləmə, oxuma, yazma və danışıq bacarıqları obyektiv olaraq qiymətləndirilir.</li>
                                    <li>TOEFL və IELTS kimi ənənəvi imtahanlara nisbətən daha sərfəli və rahat seçimdir.</li>
                                    <li>Sertifikatın etibarlılığı və dəqiq qiymətləndirmə sistemi onu beynəlxalq səviyyədə etibarlı edir.</li>


                                </ul>
                            </div>
                        </div>
                        <div class="img-box ">
                            <img src={photo2} alt="About Us tailwind page"
                                class="hidden lg:block object-cover rounded-xl" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-14 text-center">
                        <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600 text-center">
                            Xüsusiyyətlər
                        </span>
                        <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
                            Hazırlıq Metodumuz
                        </h2>
                        <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
                            Müasir və innovativ metodlarla uşaqların ingilis dilini rahat, əyləncəli və effektiv şəkildə öyrənməsini təmin edirik.
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                        <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/5">
                            <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                                <svg
                                    className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white"
                                    width={30}
                                    height={30}
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                                        stroke=""
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900 mb-3">
                                Adaptiv Tədris Metodu
                            </h4>
                            <p className="text-base text-gray-500">Tələbənin hazırkı səviyyəsinə uyğun fərdi yanaşma.</p>
                        </div>
                        <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/5">
                            <div className="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                                <svg
                                    className="stroke-pink-600 transition-all duration-500 group-hover:stroke-white"
                                    width={30}
                                    height={30}
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                                        stroke=""
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                                        stroke=""
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                                        stroke=""
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                                        stroke=""
                                        strokeWidth={2}
                                    />
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900 mb-3">
                                Rəsmi Duolingo Test Materialları
                            </h4>
                            <p className="text-base text-gray-500">İmtahana uyğun praktiki tapşırıqlar və nümunə cavablar.</p>
                        </div>
                        <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/5">
                            <div className="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
                                <svg
                                    className="stroke-teal-600 transition-all duration-500 group-hover:stroke-white"
                                    width={30}
                                    height={30}
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.75 26.25H26.25M6.25 22.875C4.86929 22.875 3.75 21.8676 3.75 20.625V12.75C3.75 11.5074 4.86929 10.5 6.25 10.5C7.63071 10.5 8.75 11.5074 8.75 12.75V20.625C8.75 21.8676 7.63071 22.875 6.25 22.875ZM15 22.875C13.6193 22.875 12.5 21.8676 12.5 20.625V9.375C12.5 8.13236 13.6193 7.125 15 7.125C16.3807 7.125 17.5 8.13236 17.5 9.375V20.625C17.5 21.8676 16.3807 22.875 15 22.875ZM23.75 22.875C22.3693 22.875 21.25 21.8676 21.25 20.625V6C21.25 4.75736 22.3693 3.75 23.75 3.75C25.1307 3.75 26.25 4.75736 26.25 6V20.625C26.25 21.8676 25.1307 22.875 23.75 22.875Z"
                                        stroke=""
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900 mb-3">
                                Vaxtın Effektiv İdarə Edilməsi
                            </h4>
                            <p className="text-base text-gray-500">Sürətli və düzgün cavab vermə texnikaları</p>
                        </div>
                        <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/5">
                            <div className="bg-amber-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-amber-600">
                                <svg
                                    className="stroke-amber-600 transition-all duration-500 group-hover:stroke-white"
                                    width={30}
                                    height={30}
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.5 15H17.5M12.5 20H17.5M22.5 27.5H7.5C6.11929 27.5 5 26.3807 5 25V5C5 3.61929 6.11929 2.5 7.5 2.5H16.7172C17.2475 2.5 17.7566 2.71071 18.1316 3.08579L24.9142 9.86843C25.2893 10.2434 25.5 10.7525 25.5 11.2828V25C25.5 26.3807 24.3807 27.5 22.5 27.5Z"
                                        stroke=""
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900 mb-3">
                                Tələffüz və Səlis Danışıq
                            </h4>
                            <p className="text-base text-gray-500">İngilis dilində inamlı danışmaq üçün interaktiv məşqlər.</p>
                        </div>
                        <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/5">
                            <div className="bg-purple-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-purple-600">
                                <svg
                                    className="stroke-purple-600 transition-all duration-500 group-hover:stroke-white"
                                    width={30}
                                    height={30}
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 5H20M10 5C8.11438 5 7.17157 5 6.58579 5.58579C6 6.17157 6 7.11438 6 9V23C6 24.8856 6 25.8284 6.58579 26.4142C7.17157 27 8.11438 27 10 27H20C21.8856 27 22.8284 27 23.4142 26.4142C24 25.8284 24 24.8856 24 23V9C24 7.11438 24 6.17157 23.4142 5.58579C22.8284 5 21.8856 5 20 5M10 5V7C10 8.10457 10.8954 9 12 9H18C19.1046 9 20 8.10457 20 7V5M13.75 16.25L15 17.5L18.75 13.75"
                                        stroke=""
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900 mb-3">
                                Sınaq İmtahanları və Rəy
                            </h4>
                            <p className="text-base text-gray-500">Tələbələrin irəliləyişini qiymətləndirmək üçün real test simulyasiyaları.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">📅 Dərslər Necə Keçirilir?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4 mx-auto">
                                <span className="text-indigo-600 text-xl">✔️</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">Onlayn və Əyani Dərslər</h3>
                            <p className="text-gray-600 text-center">Uşaqların rahatlığına uyğun olaraq dərslər keçirilir.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4 mx-auto">
                                <span className="text-indigo-600 text-xl">✔️</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">Həftədə 2 dəfə, 90 dəqiqəlik dərslər</h3>
                            <p className="text-gray-600 text-center">Uşaqların inkişafını izləyirik və müntəzəm olaraq rəy veririk.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4 mx-auto">
                                <span className="text-indigo-600 text-xl">✔️</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">Davamlı Rəy və İzləmə</h3>
                            <p className="text-gray-600 text-center">Uşaqların inkişafını izləyirik və müntəzəm olaraq geri dönürük.</p>
                        </div>
                    </div>
                </div>
            </section>
            <JoinCourse />

        </div>
    )
}

export default Duolingo