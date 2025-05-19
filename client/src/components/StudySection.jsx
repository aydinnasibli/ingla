import React, { useState } from "react";

function StudyAbroad() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [showUniversities, setShowUniversities] = useState(false);
    const [selectedUniversity, setSelectedUniversity] = useState(null);
    const [showUniversityDetails, setShowUniversityDetails] = useState(false);

    const countries = [
        {
            name: "Özbəkistan",
            flag: "https://flagcdn.com/w320/uz.png",

        },
        {
            name: "Türkiyə Dövlət",
            flag: "https://flagcdn.com/w320/tr.png",

        },
        {
            name: "Türkiyə Özəl",
            flag: "https://flagcdn.com/w320/tr.png",

        },
        {
            name: "Almaniya",
            flag: "https://flagcdn.com/w320/de.png",

        },
        {
            name: "İtaliya",
            flag: "https://flagcdn.com/w320/it.png",
        },
        {
            name: "Polşa",
            flag: "https://flagcdn.com/w320/pl.png",

        }
    ];

    // Uzbekistan Universities (from Image 1)
    const ozbekistanUniversities = [
        {
            name: "Səmərqənd Dövlət Xarici dillər Universiteti",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksz05yu-61vgNawEhwt9Z7DhMXwUNryH-mw&s",
            ixtisas: "Xarici dillər",
            təhsilSəviyyəsi: "BAKALAVRIAT",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Buxara Dövlət Universiteti",
            image: "https://auca.kg/uploads/TALENT%20Program/pics/partners/bukhara.png",
            ixtisas: "Müxtəlif",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Buxara Dövlət Tibb İnstitutu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJARO6_S0X4iTBcWvs0eOGffC0Nr6aQQZmPA&s",
            ixtisas: "Tibb",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Daşkənd Dövlət Texniki Universiteti",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Tashkent_State_Technical_University_Logo.svg/250px-Tashkent_State_Technical_University_Logo.svg.png",
            ixtisas: "Texniki",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Daşkən Tibb Akademiyası",
            image: "https://tma.uz/wp-content/uploads/2018/12/1-3.png",
            ixtisas: "Tibb",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Milli Tadqiqatlar Universiteti",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/National_University_of_Uzbekistan_Logo.png",
            ixtisas: "Tədqiqat",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Stars Beynalxalq Universiteti",
            image: "https://www.nccedu.com/wp-content/uploads/2022/01/Doc1-STA001.png",
            ixtisas: "Beynəlxalq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Özəl"
        },
        {
            name: "Özbəkistan-Finlandiya Pedagogika İnstitutu",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Uzbek-Finnish_Pedagogical_Institute_logo.png",
            ixtisas: "Pedaqoji",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Vebster Universiteti",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQ4P9beBjIKqfe0WL5n6DFqm4jNDTyUISXQ&s",
            ixtisas: "Müxtəlif",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Özəl"
        },
        {
            name: "Turin Politexnik Universiteti Daşkənd",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/04/TTPU_LOGO_copy.jpg",
            ixtisas: "Politexnik",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Kokand Pedaqoji Universiteti",
            image: "https://studyin-uzbekistan.uz/media/cache/31/a6/31a6936c19f6ca680bb3f709cacc7e47.jpg",
            ixtisas: "Pedaqoji",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Daşkənd Farmasvetika Universiteti",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67vjsOFJOoHmVXWYsWSaHdkdg7yI7IQVBDg&s",
            ixtisas: "Farmasevtika",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Özbəkistan Jurnalistika və Kütləvi Kommunikasiyalar Universiteti",
            image: "/api/placeholder/200/150",
            ixtisas: "Jurnalistika, Kommunikasiya",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Daşkənd Dövlət İqtisadiyyat Universiteti",
            image: "/api/placeholder/200/150",
            ixtisas: "İqtisadiyyat",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        }
    ];

    const italianUniversities = [
        {
            name: "University of Bologna",
            image: "https://www.unibo.it/en/university/who-we-are/image-identity-brand/university-seal/logo-unibo.png",
            ixtisas: "Mühəndislik",
            təhsilSəviyyəsi: "BAKALAVRIAT",
            qəbulŞərtləri: "",
            təhsilHaqqı: "10000€ - 50000€",
            təhsilNövü: "Dövlət"
        },
        {
            name: "University of Brescia",
            image: "https://www.uni-med.net/wp-content/uploads/2024/07/UniBrescia_Logo-1024x517.jpg",
            ixtisas: "Memarlıq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "IELTS min 6.0",
            təhsilHaqqı: "10000€ - 50000€",
            təhsilNövü: ""
        },
        {
            name: "The University of Pavia",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhXUJzzH0LOhmcAW4oR3hffuvo9q2RTDENQ&s",
            ixtisas: "Biznes və İqtisadiyyat",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "12 İLLİK ATESTAT",
            təhsilHaqqı: "",
            təhsilNövü: ""
        },
        {
            name: "Sapienza University of Rome",
            image: "https://www.shorttermprograms.com/images/cache/600_by_314/uploads/institution-logos/sapienza-university-of-rome.png",
            ixtisas: "Moda və Dizayn",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Özəl"
        },
        {
            name: "University of Florence",
            image: "https://study-eu.s3.eu-west-1.amazonaws.com/uploads/university/university-of-florence-logo.png",
            ixtisas: "Turizm və Qonaqpərvərlik İdarəetməsi",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "6000€ - 20000€",
            təhsilNövü: ""
        },
        {
            name: "University of Rome \"Tor Vergata\"",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Logo-Universita-Roma-Tor-Vergata.png/1200px-Logo-Universita-Roma-Tor-Vergata.png",
            ixtisas: "Tibb və Səhiyyə",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: ""
        },
        {
            name: "University of Turin",
            image: "https://us.simplerousercontent.net/uploads/asset/file/9973525/TOrino-logo.svg",
            ixtisas: "Art and Humanities - İncəsənət və Humanitar Elmlər",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Bakalavr diplomu",
            təhsilHaqqı: "",
            təhsilNövü: ""
        },
        {
            name: "University of Milan",
            image: "https://4euplus.eu/cuni_new_web/dist/images/4eu/logo_detail_milano_2x.png?v=1.1.1",
            ixtisas: "Law - Hüquq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "IELTS 6.0",
            təhsilHaqqı: "",
            təhsilNövü: ""
        },
        {
            name: "The Polytechnic University of Milan",
            image: "https://logowik.com/content/uploads/images/polytechnic-university-of-milan5432.jpg",
            ixtisas: "İnformasiya Texnologiyaları və Kompüter Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "GPA MIN 2.5/4 = 60/100",
            təhsilHaqqı: "",
            təhsilNövü: ""
        },
        {
            name: "University of Pisa",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Logo_UNIPI.pdf/page1-772px-Logo_UNIPI.pdf.jpg",
            ixtisas: "",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: ""
        },
        {
            name: "University of Siena",
            image: "https://bestr.it/filemanager/show/63a41ab7-6687-42f9-9e9c-06c025803ecc.png",
            ixtisas: "",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: ""
        }
    ];

    // Poland Universities (from Image 2)
    // Complete List of Poland Universities
    const polsaUniversities = [
        {
            name: "Vistula University",
            image: "https://yadros.net/storage/universities/logos/vistula-university_logo.jpg",
            ixtisas: "Biznes İdarəetməsi, İqtisadiyyat, Beynəlxalq Münasibətlər, Marketing",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€3,000 - €7,000",
            təhsilNövü: "Özəl"
        },
        {
            name: "University of Warsaw",
            image: "https://en.uw.edu.pl/wp-content/uploads/2018/09/logo-pi.png",
            ixtisas: "Hüquq, Biznes və İdarəetmə, Kompüter Elmləri, Siyasi Elmlər",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "TOEFL/IELTS 6.0 + Bakalavr diploma",
            təhsilHaqqı: "€2,000 - €4,500",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Warsaw School of Economics (SGH)",
            image: "https://upload.wikimedia.org/wikipedia/en/8/83/Szkoła_Główna_Handlowa_%28logo%29.png",
            ixtisas: "Biznes İdarəetməsi, İqtisadiyyat, Maliyyə, Beynəlxalq Biznes",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€3,500 - €8,000",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Warsaw University of Technology",
            image: "https://upload.wikimedia.org/wikipedia/en/c/c9/Warsaw_University_of_Technology.png",
            ixtisas: "Kompüter Elmləri, Mühəndislik, Memarlıq, IT, Mexanika Mühəndisliyi",
            təhsilSəviyyəsi: "BAKALAVRIAT",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€3,000 - €6,500",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Medical University of Warsaw",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Medical_University_of_Warsaw_emblem_%28ceremonial_brand_identity%29.svg/1200px-Medical_University_of_Warsaw_emblem_%28ceremonial_brand_identity%29.svg.png",
            ixtisas: "Tibb, Diş Həkimliyi, Farmasiya, İctimai Sağlamlıq",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "TOEFL/IELTS 6.0 + ATESTAT diploma",
            təhsilHaqqı: "€10,000 - €12,000",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Lazarski University",
            image: "https://upoland.com.tr/storage/schools/February2024/YbeFXbiZed2sRLcoignK.png",
            ixtisas: "Biznes İdarəetməsi, Hüquq, Beynəlxalq Münasibətlər, İdarəetmə",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€3,500 - €6,000",
            təhsilNövü: "Özəl"
        },
        {
            name: "Cracow University of Economics",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhThACBY_vWtbNvodAGtHSlQx3fAzFAkGt7w&s",
            ixtisas: "İqtisadiyyat, İqtisadiyyat, Beynəlxalq Biznes, Maliyyə",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€2,500 - €5,000",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Cracow University of Technology",
            image: "https://www.eduopinions.com/wp-content/uploads/2018/01/Cracow-University-of-Technology-logo.png",
            ixtisas: "Mühəndislik, Memarlıq, Mexanika Mühəndisliyi, Kompüter Elmləri",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€3,000 - €6,000",
            təhsilNövü: "Dövlət"
        },
        {
            name: "SWPS University",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/SWPS_University.svg/1200px-SWPS_University.svg.png",
            ixtisas: "Psixologiya, Sosial Elmlər, Hüquq, Media və Kommunikasiya",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€3,500 - €6,000",
            təhsilNövü: "Özəl"
        },
        {
            name: "The University of Wroclaw",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_4EOPZRcnhBYTKzZGD87CrUzx7iB6WncMA&s",
            ixtisas: "Psixologiya, Siyasi Elmlər, Biznes, Hüquq, Tarix",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€2,000 - €5,500",
            təhsilNövü: "Dövlət"
        },
        {
            name: "The Wroclaw University of Economics and Business",
            image: "",
            ixtisas: "İqtisadiyyat, İdarəetmə, Biznes İdarəetməsi, Maliyyə",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€2,500 - €6,500",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Maria Curie-Sklodowska University of Lublin",
            image: "",
            ixtisas: "Kimyagəri, Fizikasi, Hüquq, Biznes İdarəetməsi",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€2,000 - €5,000",
            təhsilNövü: "Dövlət"
        },
        {
            name: "The Adam Mickiewicz University",
            image: "",
            ixtisas: "Filologiya, Sosial Elmlər, Psixologiya, Siyasi Elmlər, İctimai",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€2,500 - €4,500",
            təhsilNövü: "Dövlət"
        },
        {
            name: "The University of Lodz",
            image: "",
            ixtisas: "Hüquq, İqtisadiyyat, Biznes, Sosial Elmlər, İdarəetmə",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€2,000 - €4,500",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Poznan University of Technology",
            image: "",
            ixtisas: "Mühəndislik, Kompüter Elmləri, Memarlıq, Mexanika Mühəndisliyi",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€3,000 - €6,500",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Poznan University of Medical Sciences",
            image: "",
            ixtisas: "Tibb, Diş Həkimliyi, İctimai Sağlamlıq",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€9,000 - €12,000",
            təhsilNövü: "Dövlət"
        },
        {
            name: "The Poznan University of Economics",
            image: "",
            ixtisas: "Biznes İdarəetməsi, İqtisadiyyat, Beynəlxalq Biznes, Marketing",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€3,000 - €6,000",
            təhsilNövü: "Dövlət"
        },
        {
            name: "WSB Akademia",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Maliyyə, Marketing, İdarəetmə",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€2,500 - €5,500",
            təhsilNövü: "Özəl"
        },
        {
            name: "AGH University of Science and Technology",
            image: "",
            ixtisas: "Kompüter Elmləri, Mədən Mühəndisliyi, Elektrik Mühəndisliyi, Robotexnika",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€3,000 - €6,000",
            təhsilNövü: "Dövlət"
        },
        {
            name: "University of Economics and Human Sciences in Warsaw",
            image: "",
            ixtisas: "Biznes İdarəetməsi, İqtisadiyyat, Marketing, Maliyyə",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€2,500 - €5,000",
            təhsilNövü: "Dövlət"
        }
    ];

    // Turkey State Universities (based on Images 3 & 4)
    const turkiyeDovletUniversities = [
        {
            name: "Ankara Üniversitesi",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ankara_University_logo.png",
            ixtisas: "Tibb, Mühəndislik, Sosial Elmlər",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "İstanbul Teknik Üniversitesi",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Istanbul_Technical_University_logo.png",
            ixtisas: "Mühəndislik, Memarlıq, Kompüter Elmlər, Fizika",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Boğaziçi Üniversitesi",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Bogazici_University_logo.svg",
            ixtisas: "Biznes İdarəetməsi, Mühəndislik, Kompüter Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Hacettepe Üniversitesi",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Hacettepe_University_logo.svg",
            ixtisas: "Tibb, Mühəndislik, Sosial Elmlər",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Orta Doğu Teknik Üniversitesi (ODTÜ)",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Odtu-metu-logo.svg",
            ixtisas: "Mühəndislik, Kompüter Elmləri, Fizika",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Gazi Üniversitesi",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gazi_University_logo.svg",
            ixtisas: "Tibb, Mühəndislik, Sosial Elmlər",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Koç Üniversitesi",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Koc_University_logo.svg",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Hüquq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€12,000 - €20,000",
            təhsilNövü: "Özəl"
        },
        {
            name: "Atatürk Üniversitesi",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Ataturk_University_logo.svg",
            ixtisas: "Tibb, Mühəndislik, Kənd Təsərrüfatı, Sosial Elmlər",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Yıldız Teknik Üniversitesi",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Yildiz_Technical_University_logo.svg",
            ixtisas: "Mühəndislik, Biznes İdarəetməsi, İqtisadiyyat",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Marmara Üniversitesi",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Marmara_University_logo.svg",
            ixtisas: "İqtisadiyyat, Biznes İdarəetməsi",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        // Additional universities from the image
        {
            name: "Ankara Medipol",
            image: "",
            ixtisas: "Tibb, Diş Həkimliyi, Tibb Bacısı, Sağlamlıq Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Tibb, Sağlamlıq İdarəetməsi, İddiali Sağlamlıq",
            təhsilHaqqı: "lira 64,500 - €12,000",
            təhsilNövü: "Özəl - Attestat+SAT+TYYÖS"
        },
        {
            name: "Çankaya Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Memarlıq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Biznes İdarəetməsi, Beynəlxalq Münasibətlər, Hüquq",
            təhsilHaqqı: "lira 62,500 - 68,500",
            təhsilNövü: "Ankara"
        },
        {
            name: "Başkent Üniversitesi",
            image: "",
            ixtisas: "Tibb, Hüquq, Biznes İdarəetməsi, Mühəndislik",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Biznes İdarəetməsi, Hüquq, Tibb",
            təhsilHaqqı: "lira 63,000 - 69,000",
            təhsilNövü: "Ankara"
        },
        {
            name: "Bilkent Üniversitesi",
            image: "",
            ixtisas: "Mühəndislik, Kompüter Elmləri, Biznes İdarəetməsi",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Beynəlxalq Münasibətlər, Kompüter Elmləri, Menecment",
            təhsilHaqqı: "lira 67,000 - €20,000",
            təhsilNövü: "Ankara"
        },
        {
            name: "Yüksek İhtisas Üniversitesi",
            image: "",
            ixtisas: "Tibb, Sağlamlıq Elmləri, Tibb Bacısı, Fizioterapiya",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Sağlamlıq Elmləri, Tibb",
            təhsilHaqqı: "lira 65,000 - 69,000",
            təhsilNövü: "Ankara"
        },
        {
            name: "TED Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Mühəndislik",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "MBA, Beynəlxalq Biznes, Mühəndislik",
            təhsilHaqqı: "lira 63,500 - 68,000",
            təhsilNövü: "Ankara"
        },
        {
            name: "TOBB Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Mühəndislik, Beynəlxalq Münasibətlər",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "MBA, Beynəlxalq Münasibətlər, Biznes İdarəetməsi",
            təhsilHaqqı: "lira 63,000 - 67,700",
            təhsilNövü: "Ankara"
        },
        {
            name: "Ostim Teknik Üniversitesi",
            image: "",
            ixtisas: "Fizika, Rəqəmsal Mühəndislik, Kompüter Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Mühəndislik, Biznes İdarəetməsi",
            təhsilHaqqı: "lira 62,500 - 65,500",
            təhsilNövü: "Ankara"
        },
        {
            name: "Atılım Teknik Üniversitesi",
            image: "",
            ixtisas: "Tibb, Diş Həkimliyi, Tibb Bacısı, Sağlamlıq Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Tibb, Diş Həkimliyi, Elmləri Sağlamlıq",
            təhsilHaqqı: "lira 65,000 - €12,000",
            təhsilNövü: "Ankara"
        },
        {
            name: "Yaşar Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Memarlıq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Biznes İdarəetməsi, Memarlıq, Beynəlxalq Biznes",
            təhsilHaqqı: "lira 64,000 - 68,000",
            təhsilNövü: "İzmir"
        },
        {
            name: "İzmir Ekonomi Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Beynəlxalq Münasibətlər",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Biznes İdarəetməsi, Beynəlxalq Biznes, MBA",
            təhsilHaqqı: "lira 63,500 - 67,500",
            təhsilNövü: "İzmir"
        },
        {
            name: "İzmir Tınaztepe Üniversitesi",
            image: "",
            ixtisas: "Mühəndislik, Biznes İdarəetməsi, Kompüter Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Biznes İdarəetməsi, MBA",
            təhsilHaqqı: "lira 63,000 - 66,500",
            təhsilNövü: "İzmir"
        },
        {
            name: "Koç Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Hüquq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Biznes İdarəetməsi, Hüquq, Beynəlxalq Münasibətlər",
            təhsilHaqqı: "lira €10,000 - €20,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "Sabancı Üniversitesi",
            image: "",
            ixtisas: "Mühəndislik, Biznes İdarəetməsi, Kompüter Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Biznes İdarəetməsi, Kompüter Elmləri, Beynəlxalq Münasibətlər",
            təhsilHaqqı: "lira 67,000 - €15,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "Özyeğin Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Memarlıq, Kompüter Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "MBA, Biznes İdarəetməsi, Beynəlxalq Beynəlxalq Münasibətlər",
            təhsilHaqqı: "lira 66,500 - €12,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "Yeditepe Üniversitesi",
            image: "",
            ixtisas: "Hüquq, Biznes İdarəetməsi, Memarlıq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "MBA, Beynəlxalq Münasibətlər, Biznes İdarəetməsi",
            təhsilHaqqı: "lira 64,500 - €10,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "Bahçeşehir Üniversitesi",
            image: "",
            ixtisas: "Memarlıq, Biznes İdarəetməsi, Hüquq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Biznes İdarəetməsi, Memarlıq, Beynəlxalq İdarəetməsi",
            təhsilHaqqı: "lira 64,500 - 69,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "Piri Reis Üniversitesi",
            image: "",
            ixtisas: "Dəniz Mühəndisliyi, Biznes İdarəetməsi, Mühəndislik",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Mühəndislik, Biznes İdarəetməsi",
            təhsilHaqqı: "lira 63,000 - 66,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "Nişantaşı Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Hüquq, Dizayn",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Biznes İdarəetməsi, Beynəlxalq Münasibətlər",
            təhsilHaqqı: "lira 63,000 - 66,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "Mef Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Dizayn, Hüquq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Biznes İdarəetməsi, Dizayn, Beynəlxalq Münasibətlər",
            təhsilHaqqı: "lira 65,000 - 68,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "Maltepe Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Sağlamlıq Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "MBA, Beynəlxalq Biznes, Sağlamlıq İdarəetməsi",
            təhsilHaqqı: "lira 63,500 - 68,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "Kadir Has Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Hüquq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Biznes İdarəetməsi, Beynəlxalq Münasibətlər, Hüquq",
            təhsilHaqqı: "lira 64,000 - 68,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "İstinye Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Tibb, Memarlıq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Tibb, MBA, Beynəlxalq Biznes",
            təhsilHaqqı: "lira 64,000 - 69,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "İstanbul Yeni Yüzyıl Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Hüquq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "MBA, Hüquq, Biznes İdarəetməsi",
            təhsilHaqqı: "lira 63,000 - 67,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "İstanbul Topkapı Üniversitesi",
            image: "",
            ixtisas: "Hüquq, Biznes İdarəetməsi, Memarlıq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Hüquq, Biznes İdarəetməsi",
            təhsilHaqqı: "lira 62,500 - 66,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "İstanbul Kent Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, İqtisadiyyat, Mühəndislik",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Biznes İdarəetməsi, Beynəlxalq Münasibətlər, Hüquq",
            təhsilHaqqı: "lira 63,000 - 65,500",
            təhsilNövü: "İstanbul"
        },
        {
            name: "İstanbul Kültür Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Memarlıq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "MBA, Beynəlxalq Münasibətlər, Biznes İdarəetməsi",
            təhsilHaqqı: "lira 63,500 - 67,500",
            təhsilNövü: "İstanbul"
        },
        {
            name: "İstanbul Medipol Üniversitesi",
            image: "",
            ixtisas: "Tibb, Diş Həkimliyi, Sağlamlıq Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Tibb, Diş Həkimliyi, Sağlamlıq İdarəetməsi",
            təhsilHaqqı: "lira 65,500 - €12,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "İstanbul Okan Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Mühəndislik",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Biznes İdarəetməsi, Beynəlxalq Münasibətlər, MBA",
            təhsilHaqqı: "lira 64,000 - 68,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "İstanbul Sabahattin Zaim Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Beynəlxalq Münasibətlər, Mühəndislik",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "MBA, Beynəlxalq Münasibətlər, Biznes İdarəetməsi",
            təhsilHaqqı: "lira 63,500 - 65,500",
            təhsilNövü: "İstanbul"
        },
        {
            name: "İstanbul Gedik Üniversitesi",
            image: "",
            ixtisas: "Mühəndislik, Biznes İdarəetməsi, Dizayn",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Biznes İdarəetməsi, Mühəndislik",
            təhsilHaqqı: "lira 63,000 - 65,500",
            təhsilNövü: "İstanbul"
        },
        {
            name: "İstanbul Aydın Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Memarlıq, Kompüter Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "MBA, Biznes İdarəetməsi, Beynəlxalq Münasibətlər",
            təhsilHaqqı: "lira 63,500 - 67,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "Beykent Üniversitesi",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Memarlıq, Dizayn",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Biznes İdarəetməsi, Beynəlxalq Münasibətlər",
            təhsilHaqqı: "lira 63,000 - 65,500",
            təhsilNövü: "İstanbul"
        },
        {
            name: "Çukurova Üniversitesi",
            image: "",
            ixtisas: "Psixologiya, Tibb, Sağlamlıq Elmləri, Tibb Bacısı",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Psixologiya, Sağlamlıq Elmləri, Tibb",
            təhsilHaqqı: "lira 63,000 - 67,500",
            təhsilNövü: "İstanbul"
        },
        {
            name: "Lokman Hekim Ali Çetinkaya Üniversitesi",
            image: "",
            ixtisas: "Tibb, Diş Həkimliyi, Sağlamlıq Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Tibb, Sağlamlıq İdarəetməsi",
            təhsilHaqqı: "lira 65,500 - €12,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "Altınbaş Üniversiteti",
            image: "",
            ixtisas: "Biznes İdarəetməsi, Mühəndislik, Kompüter Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Biznes İdarəetməsi, Kompüter Elmləri, Beynəlxalq Münasibətlər",
            təhsilHaqqı: "lira 63,500 - 67,000",
            təhsilNövü: "İstanbul"
        },
        {
            name: "Antalya Bilim Üniversitesi",
            image: "",
            ixtisas: "Mühəndislik, Biznes İdarəetməsi, Kompüter Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Mühəndislik, Biznes İdarəetməsi",
            təhsilHaqqı: "lira 63,000 - 66,500",
            təhsilNövü: "Antalya"
        }
    ];


    // Turkey Private Universities (based on Images 3 & 4)
    const turkiyeOzelUniversities = [
        {
            name: "Ankara Medipol",
            image: "/api/placeholder/200/150",
            ixtisas: "Tibb, Diş Həkimliyi, Tibb Bacısı, Sağlamlıq Elmləri",
            təhsilSəviyyəsi: "Tibb, Sağlamlıq İdarəetməsi, İddialı Sağlamlıq",
            qəbulŞərtləri: "Oral – Attestat+SAT+TIPYÖ",
            təhsilHaqqı: "lira 64,500 - €12,000",
            təhsilNövü: "Özəl",
            şəhər: "Ankara"
        },
        {
            name: "Çankaya Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Memarlıq",
            təhsilSəviyyəsi: "Biznes İdarəetməsi, Beynəlxalq Münasibətlər, Hüquq",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 62,500 - 68,500",
            təhsilNövü: "Özəl",
            şəhər: "Ankara"
        },
        {
            name: "Başkent Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Tibb, Hüquq, Biznes İdarəetməsi, Mühəndislik",
            təhsilSəviyyəsi: "Biznes İdarəetməsi, Hüquq, Tibb",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 63,000 - 69,000",
            təhsilNövü: "Özəl",
            şəhər: "Ankara"
        },
        {
            name: "Bilkent Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Mühəndislik, Kompüter Elmləri, Biznes İdarəetməsi",
            təhsilSəviyyəsi: "Beynəlxalq Münasibətlər, Kompüter Elmləri, Biznes İdarəetməsi",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 67,000 - €20,000",
            təhsilNövü: "Özəl",
            şəhər: "Ankara"
        },
        {
            name: "Yüksek İhtisas Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Tibb, Sağlamlıq Elmləri, Tibb Bacısı, Fizioterapiya",
            təhsilSəviyyəsi: "Sağlamlıq Elmləri, Tibb",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 65,000 - 69,000",
            təhsilNövü: "Özəl",
            şəhər: "Ankara"
        },
        {
            name: "TED Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Mühəndislik",
            təhsilSəviyyəsi: "MBA, Beynəlxalq Biznes, Mühəndislik",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 63,500 - 68,000",
            təhsilNövü: "Özəl",
            şəhər: "Ankara"
        },
        {
            name: "TOBB Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Mühəndislik, Beynəlxalq Münasibətlər",
            təhsilSəviyyəsi: "MBA, Beynəlxalq Münasibətlər, Biznes İdarəetməsi",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 63,000 - 67,500",
            təhsilNövü: "Özəl",
            şəhər: "Ankara"
        },
        {
            name: "Ostim Teknik Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Meğavika Mühəndislik, Kompüter Elmləri",
            təhsilSəviyyəsi: "Mühəndislik, Biznes İdarəetməsi",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 62,500 - 65,500",
            təhsilNövü: "Özəl",
            şəhər: "Ankara"
        },
        {
            name: "Lokman Hekim Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Tibb, Diş Həkimliyi, Tibb Bacısı, Sağlamlıq Elmləri",
            təhsilSəviyyəsi: "Tibb, Diş Həkimliyi, Elmləri Sağlamlıq",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 65,000 - €12,000",
            təhsilNövü: "Özəl",
            şəhər: "Ankara"
        },
        {
            name: "Yaşar Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Memarlıq",
            təhsilSəviyyəsi: "Biznes İdarəetməsi, Memarlıq, Beynəlxalq Biznes",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 64,000 - 68,000",
            təhsilNövü: "Özəl",
            şəhər: "İzmir"
        },
        {
            name: "İzmir Ekonomi Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Beynəlxalq Münasibətlər",
            təhsilSəviyyəsi: "Biznes İdarəetməsi, Beynəlxalq Biznes, MBA",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 63,500 - 67,500",
            təhsilNövü: "Özəl",
            şəhər: "İzmir"
        },
        {
            name: "İzmir Tınaztepe Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Mühəndislik, Biznes İdarəetməsi, Kompüter Elmləri",
            təhsilSəviyyəsi: "Biznes İdarəetməsi, MBA",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 63,000 - 66,500",
            təhsilNövü: "Özəl",
            şəhər: "İzmir"
        },
        {
            name: "Koç Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Hüquq",
            təhsilSəviyyəsi: "Biznes İdarəetməsi, Hüquq, Beynəlxalq İqtisad",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira €10,000 - €20,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "Sabancı Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Mühəndislik, Biznes İdarəetməsi, Kompüter Elmləri",
            təhsilSəviyyəsi: "Biznes İdarəetməsi, Kompüter Elmləri, Beynəlxalq Münasibətlər",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 67,000 - €15,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "Özyeğin Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Memarlıq, Kompüter Elmləri",
            təhsilSəviyyəsi: "MBA, Biznes İdarəetməsi, Beynəlxalq İqtisadiyyat",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 66,000 - €12,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "Yeditepe Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Hüquq, Biznes İdarəetməsi, Memarlıq",
            təhsilSəviyyəsi: "MBA, Beynəlxalq Münasibətlər, Biznes İdarəetməsi",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 64,500 - €10,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "Bahçeşehir Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Memarlıq, Biznes İdarəetməsi, Hüquq",
            təhsilSəviyyəsi: "Biznes İdarəetməsi, Memarlıq, Beynəlxalq İdarəetməsi",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 64,500 - 69,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "Piri Reis Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Dəniz Mühəndisliyi, Biznes İdarəetməsi, Mühəndislik",
            təhsilSəviyyəsi: "Mühəndislik, Biznes İdarəetməsi",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 63,000 - 66,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "Nişantaşı Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Hüquq, Dizayn",
            təhsilSəviyyəsi: "Biznes İdarəetməsi, Beynəlxalq Münasibətlər",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 65,000 - 66,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "Mef Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Dizayn, Hüquq",
            təhsilSəviyyəsi: "Biznes İdarəetməsi, Dizayn, Beynəlxalq Münasibətlər",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 65,000 - 68,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "Maltepe Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Sağlamlıq Elmləri",
            təhsilSəviyyəsi: "MBA, Beynəlxalq Biznes, Sağlamlıq İdarəetməsi",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 63,500 - 68,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "Kadir Has Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Hüquq",
            təhsilSəviyyəsi: "Biznes İdarəetməsi, Beynəlxalq Münasibətlər, Hüquq",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 64,000 - 68,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "İstinye Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Tibb, Memarlıq",
            təhsilSəviyyəsi: "Tibb, MBA, Beynəlxalq Biznes",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 64,000 - 69,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "İstanbul Yeni Yüzyıl Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Hüquq",
            təhsilSəviyyəsi: "MBA, Hüquq, Biznes İdarəetməsi",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 63,000 - 67,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "İstanbul Topkapı Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Hüquq, Biznes İdarəetməsi, Memarlıq",
            təhsilSəviyyəsi: "Hüquq, Biznes İdarəetməsi",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 62,000 - 66,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "İstanbul Kent Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, İqtisadiyyat, Mühəndislik",
            təhsilSəviyyəsi: "Biznes İdarəetməsi, Beynəlxalq Münasibətlər, Hüquq",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 63,000 - 65,500",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "İstanbul Kültür Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Memarlıq",
            təhsilSəviyyəsi: "MBA, Beynəlxalq Münasibətlər, Biznes İdarəetməsi",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 63,500 - 67,500",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "İstanbul Medipol Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Tibb, Diş Həkimliyi, Sağlamlıq Elmləri",
            təhsilSəviyyəsi: "Tibb, Diş Həkimliyi, Sağlamlıq İdarəetməsi",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 65,500 - €12,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "İstanbul Okan Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Mühəndislik",
            təhsilSəviyyəsi: "Biznes İdarəetməsi, Beynəlxalq Münasibətlər, MBA",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 64,000 - 68,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "İstanbul Rumeli Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Beynəlxalq Münasibətlər, Biznes Mühəndislik",
            təhsilSəviyyəsi: "MBA, Beynəlxalq Münasibətlər, Biznes İdarəetməsi",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 63,500 - 65,500",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "İstanbul Gedik Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Mühəndislik, Biznes İdarəetməsi, Dizayn",
            təhsilSəviyyəsi: "Biznes İdarəetməsi, Mühəndislik",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 63,000 - 65,500",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "İstanbul Aydın Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Memarlıq, Kompüter Elmləri",
            təhsilSəviyyəsi: "MBA, Biznes İdarəetməsi, Beynəlxalq Münasibətlər",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 63,500 - 67,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "Beykent Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Memarlıq, Dizayn",
            təhsilSəviyyəsi: "Biznes İdarəetməsi, Beynəlxalq Münasibətlər",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 63,000 - 65,500",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "Çukurova Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Psixologiya, Tibb, Sağlamlıq Elmləri, Tibb Bacısı",
            təhsilSəviyyəsi: "Psixologiya, Sağlamlıq Elmləri, Tibb",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 63,000 - 67,500",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "Acıbadem Mehmet Ali Aydınlar Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Tibb, Diş Həkimliyi, Sağlamlıq Elmləri",
            təhsilSəviyyəsi: "Tibb, Sağlamlıq İdarəetməsi",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 65,500 - €12,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "Altınbaş Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Mühəndislik, Kompüter Elmləri",
            təhsilSəviyyəsi: "Biznes İdarəetməsi, Kompüter Elmləri, Beynəlxalq Münasibətlər",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 63,500 - 67,000",
            təhsilNövü: "Özəl",
            şəhər: "İstanbul"
        },
        {
            name: "Antalya Bilim Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Mühəndislik, Biznes İdarəetməsi, Kompüter Elmləri",
            təhsilSəviyyəsi: "Mühəndislik, Biznes İdarəetməsi",
            qəbulŞərtləri: "",
            təhsilHaqqı: "lira 63,000 - 66,500",
            təhsilNövü: "Özəl",
            şəhər: "Antalya"
        }
    ];

    // German Universities (based on Image 5)
    const almaniyaUniversities = [
        {
            name: "University of Heidelberg",
            image: "/api/placeholder/200/150",
            ixtisas: "Mühəndislik, Tibb, Biznes",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "500€ - 1500€ (semester)",
            təhsilNövü: "Dövlət"
        },
        {
            name: "University of Stuttgart",
            image: "/api/placeholder/200/150",
            ixtisas: "Mühəndislik (Mexanika)",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "1500€ - 3000€ (il)",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Humboldt University of Berlin",
            image: "/api/placeholder/200/150",
            ixtisas: "Kompüter Elmləri",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "DSH/TestDaF",
            təhsilHaqqı: "300€ - 500€ (semester)",
            təhsilNövü: "Dövlət"
        },
        {
            name: "University of Mannheim",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes və İqtisadiyyat",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "1500€ - 3000€ (il)",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Technical University of Munich (TUM)",
            image: "/api/placeholder/200/150",
            ixtisas: "Tibb və Səhiyyə",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "500€ - 1000€ (semester)",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Free University of Berlin (Freie Universität Berlin)",
            image: "/api/placeholder/200/150",
            ixtisas: "Müxtəlif",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "300€ - 500€ (semester)",
            təhsilNövü: "Dövlət"
        },
        {
            name: "University of Leipzig",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "500€ - 1000€ (semester)",
            təhsilNövü: "Dövlət"
        },
        {
            name: "University of Freiburg",
            image: "/api/placeholder/200/150",
            ixtisas: "Təbii Elmlər",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "1500€ - 3000€ (il)",
            təhsilNövü: "Dövlət"
        },
        {
            name: "RWTH Aachen University",
            image: "/api/placeholder/200/150",
            ixtisas: "Mühəndislik, Texnologiya",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "500€ - 1500€ (semester)",
            təhsilNövü: "Dövlət"
        }
    ];

    // Function to get the appropriate university list based on country
    const getUniversitiesForCountry = (countryName) => {
        switch (countryName) {
            case "Özbəkistan":
                return ozbekistanUniversities;
            case "Türkiyə Dövlət":
                return turkiyeDovletUniversities;
            case "Türkiyə Özəl":
                return turkiyeOzelUniversities;
            case "Almaniya":
                return almaniyaUniversities;
            case "İtaliya":
                return italianUniversities;
            case "Polşa":
                return polsaUniversities;
            default:
                return [];
        }
    };

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
        const universities = getUniversitiesForCountry(country.name);
        if (universities.length > 0) {
            setShowUniversities(true);
        } else {
            setIsModalOpen(true);
        }
    };

    const handleUniversityClick = (university) => {
        setSelectedUniversity(university);
        setShowUniversityDetails(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCountry(null);
    };

    const closeUniversityDetails = () => {
        setShowUniversityDetails(false);
        setSelectedUniversity(null);
    };

    const goBackToCountries = () => {
        setShowUniversities(false);
        setSelectedCountry(null);
    };

    return (
        <section>
            <div className="max-w-7xl px-6 md:px-12 lg:px-16 mx-auto">
                {/* Başlıq Bölməsi */}
                <div className="text-center">
                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-snug">
                        Harada Təhsil Almaq Mümkündür?
                    </h2>
                    <p className="text-gray-500 text-lg mt-3">
                        Aşağıdakı ölkələrdə və universitetlərdə təhsil almaq üçün biz sizə kömək edirik.
                    </p>
                </div>

                {/* Ölkələr Bölməsi */}
                {!showUniversities && (
                    <div className="mt-12 grid md:grid-cols-3 gap-10">
                        {countries.map((country, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 shadow-md rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
                                onClick={() => handleCountryClick(country)}
                            >
                                <img src={country.flag} alt={`${country.name} flag`} className="w-28 h-20 object-cover rounded-lg" />
                                <h3 className="text-gray-900 text-2xl font-semibold mt-4">{country.name}</h3>
                            </div>
                        ))}
                    </div>
                )}

                {/* Universitetlər Bölməsi */}
                {showUniversities && selectedCountry && (
                    <div className="mt-8">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl text-gray-900 font-bold">{selectedCountry.name} Universitetləri</h2>
                            <button
                                onClick={goBackToCountries}
                                className="px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700"
                            >
                                Geri qayıt
                            </button>
                        </div>

                        <div className="mt-8 grid md:grid-cols-3 gap-8">
                            {getUniversitiesForCountry(selectedCountry.name).map((university, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-md rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
                                    onClick={() => handleUniversityClick(university)}
                                >
                                    <img
                                        src={university.image}
                                        alt={university.name}
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-gray-900 text-xl font-semibold">{university.name}</h3>
                                        {university.ixtisas && (
                                            <p className="text-gray-600 mt-2 text-sm">{university.ixtisas}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-4">
                            <p className="text-red-700 text-sm">
                                <strong>QEYD:</strong> 1) Tələbənin göstəricilərindən asılı olaraq təqaüdlərə müraciət mümkündür<br />
                                2) Bəzi ixtisaslar və universitetlər daxili imtahan və ya intervü götürə bilərlər
                            </p>
                        </div>
                    </div>
                )}


                {/* Universitet Detalları Modal Bölməsi */}
                {showUniversityDetails && selectedUniversity && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white rounded-xl p-8 max-w-5xl w-full">
                            <div className="flex justify-between mb-4">
                                <h2 className="text-3xl text-gray-900">{selectedUniversity.name}</h2>
                                <button
                                    onClick={closeUniversityDetails}
                                    className="text-gray-500 hover:text-gray-700 text-2xl"
                                >
                                    &times;
                                </button>
                            </div>

                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/3">
                                    <img
                                        src={selectedUniversity.image}
                                        alt={selectedUniversity.name}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                                <div className="md:w-2/3">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {selectedUniversity.ixtisas && (
                                            <div>
                                                <p className="font-semibold text-gray-700">İxtisaslar:</p>
                                                <p className="text-gray-600">{selectedUniversity.ixtisas}</p>
                                            </div>
                                        )}
                                        {selectedUniversity.təhsilSəviyyəsi && (
                                            <div>
                                                <p className="font-semibold text-gray-700">Təhsil Səviyyəsi:</p>
                                                <p className="text-gray-600">{selectedUniversity.təhsilSəviyyəsi}</p>
                                            </div>
                                        )}
                                        {selectedUniversity.qəbulŞərtləri && (
                                            <div>
                                                <p className="font-semibold text-gray-700">Qəbul Şərtləri:</p>
                                                <p className="text-gray-600">{selectedUniversity.qəbulŞərtləri}</p>
                                            </div>
                                        )}
                                        {selectedUniversity.təhsilHaqqı && (
                                            <div>
                                                <p className="font-semibold text-gray-700">Təhsil Haqqı:</p>
                                                <p className="text-gray-600">{selectedUniversity.təhsilHaqqı}</p>
                                            </div>
                                        )}
                                        {selectedUniversity.təhsilNövü && (
                                            <div>
                                                <p className="font-semibold text-gray-700">Təhsil Növü:</p>
                                                <p className="text-gray-600">{selectedUniversity.təhsilNövü}</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-6">
                                        <p className="font-semibold text-gray-700 mb-2">Əlavə Məlumat:</p>
                                        <p className="text-gray-600">
                                            Bu universitet haqqında daha ətraflı məlumat üçün bizimlə əlaqə saxlaya bilərsiniz.
                                            Təhsil məsləhətçilərimiz sizə qəbul prosesi və təhsil imkanları haqqında ətraflı məlumat verəcəklər.
                                        </p>
                                    </div>

                                    <button
                                        className="mt-6 px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700"
                                    >
                                        Ətraflı Məlumat Üçün Müraciət Et
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default StudyAbroad;