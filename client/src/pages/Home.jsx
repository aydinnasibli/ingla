import React from 'react'
import CarouselMain from '../components/CarouselMain'
import Faq from '../components/Faq'
import Testimonials from '../components/Testimontials'
import logo from '../assets/ingla-logo.png'
import { useNavigate } from 'react-router-dom'
import CertificateSection from '../components/CheckCertificate'
function Home() {
    const navigate = useNavigate()
    return (
        <>
            <div >
                <CarouselMain />
                <section className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:px-8">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  shadow-xl shadow-gray-400 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                    <div className=" mx-auto max-w-2xl lg:max-w-4xl">
                        <img
                            alt=""
                            src={logo}
                            className="mx-auto h-32"
                        />
                        <figure className="mt-10">
                            <blockquote className="text-center  text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                                <p>
                                    Təhsil Günəşdir!<br />
                                    O sizin gələcək həyatınızı daha da işıqlı edəcək!<br />
                                    Günəşli sabahlara bizimlə addımla.
                                </p>
                            </blockquote>

                        </figure>
                    </div>
                </section>
                <section class="py-24 rounded-3xl border-2">
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div class="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
                            <div class="relative  w-full text-center lg:text-left lg:w-2/4">
                                <h2 class="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">Üstünlüklərimiz</h2>
                            </div>

                        </div>
                        <div class="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                            <div class="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-gray-400">
                                <div class="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z" stroke="#4F46E5" stroke-width="2"></path>
                                    </svg>

                                </div>
                                <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Peşəkar Müəllimlər</h4>
                                <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                                    Beynəlxalq sertifikatlı və təcrübəli müəllimlərlə keyfiyyətli təhsil alın. Hər bir tələbəyə fərdi yanaşma və dəstək göstərilir.



                                </p>
                            </div>
                            <div class="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-gray-400">
                                <div class="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>

                                </div>
                                <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Təhlükəsiz Mühit</h4>
                                <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                                    Təhsiliniz üçün təhlükəsiz və rahat mühit təmin edirik. Əyani və onlayn dərslərdə yüksək təhlükəsizlik standartlarına əməl olunur.



                                </p>
                            </div>
                            <div class="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-gray-400">
                                <div class="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.0067 10V15.6652C15.0067 16.0358 15.1712 16.3873 15.4556 16.6248L18.75 19.375M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>

                                </div>
                                <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Fərdi Cədvəl</h4>
                                <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                                    Dərs cədvəlinizi öz vaxtınıza uyğun seçə bilərsiniz. Sizin üçün əlverişli vaxtları təyin edərək rahat öyrənməyə imkan yaradırıq.


                                </p>
                            </div>
                            <div class="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-gray-400">
                                <div class="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>

                                </div>
                                <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Sürətli Öyrənmə</h4>
                                <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                                    Effektiv metodlarla biliyinizi tez inkişaf etdirin. Müasir tədris yanaşmaları ilə qısa müddətdə böyük irəliləyiş əldə edin.


                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="py-24 ">
                    <CertificateSection />

                </section>
                <Testimonials />

                <Faq />
            </div>
        </>

    )
}

export default Home