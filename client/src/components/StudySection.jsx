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

    // Italian universities data based on the original data
    const italianUniversities = [
        {
            name: "University of Bologna",
            image: "/api/placeholder/200/150",
            ixtisas: "Mühəndislik",
            təhsilSəviyyəsi: "BAKALAVRIAT",
            qəbulŞərtləri: "",
            təhsilHaqqı: "10000€ - 50000€",
            təhsilNövü: "Dövlət"
        },
        {
            name: "University of Brescia",
            image: "/api/placeholder/200/150",
            ixtisas: "Memarlıq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "IELTS min 6.0",
            təhsilHaqqı: "10000€ - 50000€",
            təhsilNövü: ""
        },
        {
            name: "The University of Pavia",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes və İqtisadiyyat",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "12 İLLİK ATESTAT",
            təhsilHaqqı: "",
            təhsilNövü: ""
        },
        {
            name: "Sapienza University of Rome",
            image: "/api/placeholder/200/150",
            ixtisas: "Moda və Dizayn",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Özəl"
        },
        {
            name: "University of Florence",
            image: "/api/placeholder/200/150",
            ixtisas: "Turizm və Qonaqpərvərlik İdarəetməsi",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "6000€ - 20000€",
            təhsilNövü: ""
        },
        {
            name: "University of Rome \"Tor Vergata\"",
            image: "/api/placeholder/200/150",
            ixtisas: "Tibb və Səhiyyə",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: ""
        },
        {
            name: "University of Turin",
            image: "/api/placeholder/200/150",
            ixtisas: "Art and Humanities - İncəsənət və Humanitar Elmlər",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "Bakalavr diplomu",
            təhsilHaqqı: "",
            təhsilNövü: ""
        },
        {
            name: "University of Milan",
            image: "/api/placeholder/200/150",
            ixtisas: "Law - Hüquq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "IELTS 6.0",
            təhsilHaqqı: "",
            təhsilNövü: ""
        },
        {
            name: "The Polytechnic University of Milan",
            image: "/api/placeholder/200/150",
            ixtisas: "İnformasiya Texnologiyaları və Kompüter Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "GPA MIN 2.5/4 = 60/100",
            təhsilHaqqı: "",
            təhsilNövü: ""
        },
        {
            name: "University of Pisa",
            image: "/api/placeholder/200/150",
            ixtisas: "",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: ""
        },
        {
            name: "University of Siena",
            image: "/api/placeholder/200/150",
            ixtisas: "",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: ""
        }
    ];

    // Uzbekistan Universities (from Image 1)
    const ozbekistanUniversities = [
        {
            name: "Səmərqənd Dövlət Xarici dillər Universiteti",
            image: "/api/placeholder/200/150",
            ixtisas: "Xarici dillər",
            təhsilSəviyyəsi: "BAKALAVRIAT",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Buxara Dövlət Universiteti",
            image: "/api/placeholder/200/150",
            ixtisas: "Müxtəlif",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Buxara Dövlət Tibb İnstitutu",
            image: "/api/placeholder/200/150",
            ixtisas: "Tibb",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Daşkənd Dövlət Texniki Universiteti",
            image: "/api/placeholder/200/150",
            ixtisas: "Texniki",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Daşkən Tibb Akademiyası",
            image: "/api/placeholder/200/150",
            ixtisas: "Tibb",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Milli Tadqiqatlar Universiteti",
            image: "/api/placeholder/200/150",
            ixtisas: "Tədqiqat",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Stars Beynalxalq Universiteti",
            image: "/api/placeholder/200/150",
            ixtisas: "Beynəlxalq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Özəl"
        },
        {
            name: "Özbəkistan-Finlandiya Pedagogika İnstitutu",
            image: "/api/placeholder/200/150",
            ixtisas: "Pedaqoji",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Vebster Universiteti",
            image: "/api/placeholder/200/150",
            ixtisas: "Müxtəlif",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Özəl"
        },
        {
            name: "Turin Politexnik Universiteti Daşkənd",
            image: "/api/placeholder/200/150",
            ixtisas: "Politexnik",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Kokand Pedaqoji Universiteti",
            image: "/api/placeholder/200/150",
            ixtisas: "Pedaqoji",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Daşkənd Farmasvetika Universiteti",
            image: "/api/placeholder/200/150",
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

    // Poland Universities (from Image 2)
    const polsaUniversities = [
        {
            name: "Vistula University",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, İqtisadiyyat, Beynəlxalq Münasibətlər, Marketing",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€3,000 - €7,000",
            təhsilNövü: "Özəl"
        },
        {
            name: "University of Warsaw",
            image: "/api/placeholder/200/150",
            ixtisas: "Hüquq, Biznes və İdarəetmə, Kompüter Elmləri, Siyasi Elmlər",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "TOEFL/IELTS 6.0 + Bakalavr diploma",
            təhsilHaqqı: "€2,000 - €4,500",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Warsaw School of Economics (SGH)",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, İqtisadiyyat, Maliyyə, Beynəlxalq Biznes",
            təhsilSəviyyəsi: "MASTER",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€3,500 - €8,000",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Warsaw University of Technology",
            image: "/api/placeholder/200/150",
            ixtisas: "Kompüter Elmləri, Mühəndislik, Memarlıq, IT, Mexanika Mühəndisliyi",
            təhsilSəviyyəsi: "BAKALAVRIAT",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€3,000 - €6,500",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Medical University of Warsaw",
            image: "/api/placeholder/200/150",
            ixtisas: "Tibb, Diş Həkimliyi, Farmasiya, İctimai Sağlamlıq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "TOEFL/IELTS 6.0 + ATESTAT diploma",
            təhsilHaqqı: "€10,000 - €12,000",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Lazarski University",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Hüquq, Beynəlxalq Münasibətlər, İdarəetmə",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€3,500 - €6,000",
            təhsilNövü: "Özəl"
        },
        {
            name: "Cracow University of Economics",
            image: "/api/placeholder/200/150",
            ixtisas: "İqtisadiyyat, İdarəetmə, Beynəlxalq Biznes, Maliyyə",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€2,500 - €5,000",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Cracow University of Technology",
            image: "/api/placeholder/200/150",
            ixtisas: "Mühəndislik, Memarlıq, Mexanika Mühəndisliyi, Kompüter Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€3,000 - €6,000",
            təhsilNövü: "Dövlət"
        },
        {
            name: "SWPS University",
            image: "/api/placeholder/200/150",
            ixtisas: "Psixologiya, Sosial Elmlər, Hüquq, Media və Kommunikasiya",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€3,500 - €6,000",
            təhsilNövü: "Özəl"
        },
        {
            name: "The University of Wroclaw",
            image: "/api/placeholder/200/150",
            ixtisas: "Psixologiya, Siyasi Elmlər, Biznes, Hüquq, Tarix",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€2,000 - €5,500",
            təhsilNövü: "Dövlət"
        }
    ];

    // Turkey State Universities (based on Images 3 & 4)
    const turkiyeDovletUniversities = [
        {
            name: "Ankara Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Tibb, Mühəndislik, Sosial Elmlər",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "İstanbul Teknik Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Mühəndislik, Memarlıq, Kompüter Elmlər, Fizika",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Boğaziçi Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Mühəndislik, Kompüter Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Hacettepe Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Tibb, Mühəndislik, Sosial Elmlər",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Orta Doğu Teknik Üniversitesi (ODTÜ)",
            image: "/api/placeholder/200/150",
            ixtisas: "Mühəndislik, Kompüter Elmləri, Fizika",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Gazi Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Tibb, Mühəndislik, Sosial Elmlər",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Koç Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, Hüquq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€12,000 - €20,000",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Atatürk Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Tibb, Mühəndislik, Kənd Təsərrüfatı, Sosial Elmlər",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Yıldız Teknik Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Mühəndislik, Biznes İdarəetməsi, İqtisadiyyat",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        },
        {
            name: "Marmara Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "İqtisadiyyat, Biznes İdarəetməsi",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "",
            təhsilNövü: "Dövlət"
        }
    ];

    // Turkey Private Universities (based on Images 3 & 4)
    const turkiyeOzelUniversities = [
        {
            name: "İstanbul Bilgi Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Hüquq, Biznes İdarəetməsi, Hüquq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€4,500 - €8,000",
            təhsilNövü: "Özəl"
        },
        {
            name: "Sabancı Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Mühəndislik, Biznes İdarəetməsi, İqtisadiyyat",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€15,000 - €25,000",
            təhsilNövü: "Özəl"
        },
        {
            name: "Bilkent Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Mühəndislik, Kompüter Elmləri, Biznes",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€10,000 - €20,000",
            təhsilNövü: "Özəl"
        },
        {
            name: "Bahçeşehir Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Mühəndislik, Biznes İdarəetməsi, Hüquq, Memarlıq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€8,000 - €15,000",
            təhsilNövü: "Özəl"
        },
        {
            name: "Özyeğin Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Memarlıq, Kompüter Elmləri",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€8,000 - €16,000",
            təhsilNövü: "Özəl"
        },
        {
            name: "İstanbul Medipol Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Tibb, Diş Həkimliyi, Sağlamlıq",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€10,000 - €20,000",
            təhsilNövü: "Özəl"
        },
        {
            name: "Maltepe Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Kompüter Elmləri, İqtisadiyyat",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€6,000 - €12,000",
            təhsilNövü: "Özəl"
        },
        {
            name: "Beykent Üniversitesi",
            image: "/api/placeholder/200/150",
            ixtisas: "Biznes İdarəetməsi, Memarlıq, Dizayn",
            təhsilSəviyyəsi: "",
            qəbulŞərtləri: "",
            təhsilHaqqı: "€5,000 - €10,000",
            təhsilNövü: "Özəl"
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