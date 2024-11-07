import React from 'react'

function Duolingo() {
    return (
        <div >
            <p className='text-center  text-4xl mt-10'>Duolingo</p>
            <p></p>
            <section class="py-14 lg:py-24 relative">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
                        <div class="img-box">
                            <img src="https://pagedone.io/asset/uploads/1702034769.png" alt="About Us tailwind page"
                                class="max-lg:mx-auto object-cover" />
                        </div>
                        <div class="lg:pl-[100px] flex items-center">
                            <div class="data w-full">
                                <h2
                                    class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                                    General English </h2>
                                <p class="font-normal  text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                                    General English İngilis dilinin gündəlik istifadəsini əhatə edən dil öyrənmə proqramıdır. Bu proqram, dilin əsas qrammatikasını, lüğətini və danışıq bacarıqlarını inkişaf etdirməyə yönəlib.
                                    General English-in önəmi beynəlxalq kommunikasiya, iş imkanları və akademik müvəffəqiyyət üçün zəruri olmasıdır. İngilis dili dünya üzrə ən çox danışılan ikinci dildir və BMT-nin rəsmi dillərindən biridir.    Bu səbəbdən, General English bilikləri, fərdlərin qlobal mühitdə daha effektiv əlaqə qurmasına kömək edir.
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
                                <img src="https://pagedone.io/asset/uploads/1702034785.png" alt="About Us tailwind page"
                                    class="block lg:hidden mb-9 mx-auto object-cover" />

                                <p class="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                                    Bu dərslərdə siz danışıq, dinləmə, oxu və yazı bacarıqlarınızı artıracaqsınız.
                                    Mərkəzimizdə ingilis dili dərsləri Böyük Britaniyalı mütəxəssislər tərəfindən hazırlanmış xüsusi proqram əsasında beynalxalq sertifikatlı müəllimlər tərəfindən tədris edilir. Bu metodika ilə həm ümumi praktika həm də individual danışıq proqramı tədris edilərək digər metodlardan 4 dəfə daha sürətli və effektiv nəticə əldə edilir. 2 aya danışığınızın inkişafına zəmanət veririk. Dərslər beynəlxalq CEFR (Common European Framework of Reference for Languages – A1, A2, B1, B2, C1, C2 ) standarlarına uyğun təşkil edilir.Qrafikinizə uyğun dərs saatları sizi gözləyir!
                                </p>
                            </div>
                        </div>
                        <div class="img-box ">
                            <img src="https://pagedone.io/asset/uploads/1702034785.png" alt="About Us tailwind page"
                                class="hidden lg:block object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Duolingo