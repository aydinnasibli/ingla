// Modified version of client/src/data/blogData.js
const blogData = [
  {
    id: "2", // Converting IDs to strings for consistency
    title: 'Azərbaycan Mətbəxinin Ən Dadlı Yeməkləri',
    slug: 'azerbaycan-metbexinin-en-dadli-yemekleri',
    date: '2025-04-22',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Yemək',
    excerpt: 'Azərbaycan milli mətbəxinin ən məşhur və dadlı yeməklərinin reseptləri və hazırlanma qaydaları.',
    content: `
      <p>Azərbaycan mətbəxi dünyada özünəməxsus ləzzəti ilə tanınır. Əsrlər boyu formalaşan qida ənənələrimiz zəngin və müxtəlifdir.</p>
      <h2>Plov</h2>
      <p>Azərbaycan mətbəxinin şahı sayılan plov ölkəmizdə 40-dan çox növdə hazırlanır. İstənilən bayram süfrəsinin əsas yeməyi sayılır.</p>
      <h2>Dolma</h2>
      <p>Üzüm yarpağında, bibər və pomidorda hazırlanan dolma Azərbaycan mətbəxinin ən sevilən yeməklərindən biridir. Qiyməli dolma ət, düyü və müxtəlif ədviyyatlarla hazırlanır.</p>
      <h2>Qutab</h2>
      <p>Qutab nazik yayılmış xəmirdən hazırlanır və içinə müxtəlif içliklər qoyulur - göyərti, ət, balqabaq və s. Adətən qatıqla birlikdə süfrəyə verilir.</p>
      <h2>Lüləkabab</h2>
      <p>Xüsusi şişlərdə hazırlanan lüləkabab, ətin xüsusi üsulla çəkilməsi və ədviyyatlarla qarışdırılması nəticəsində hazırlanır. Sumaq və lavaşla süfrəyə verilir.</p>
    `,
    tags: ['Azərbaycan Mətbəxi', 'Yemək Reseptləri', 'Milli Yeməklər']
  },
  {
    id: "3",
    title: 'Bakının Tarixi Məkanları',
    slug: 'bakinin-tarixi-mekanlari',
    date: '2025-05-01',
    image: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Bakı şəhərinin mədəni və tarixi əhəmiyyətə malik olan məkanları haqqında geniş məlumat.',
    content: `
      <p>Bakı şəhəri zəngin tarixi ilə məşhurdur və əsrlər boyu müxtəlif mədəniyyətlərin qovşağında yerləşmişdir.</p>
      <h2>İçərişəhər</h2>
      <p>İçərişəhər və ya Qala Bakının qədim hissəsidir. Burada XII əsrə aid Qız Qalası, Şirvanşahlar Sarayı kompleksi və digər tarixi abidələr yerləşir. İçərişəhər UNESCO-nun Dünya İrsi Siyahısına daxil edilmişdir.</p>
      <h2>Şirvanşahlar Sarayı</h2>
      <p>XV əsrdə tikilmiş bu saray kompleksi Şirvanşahlar dövlətinin əzəmətini əks etdirir. Saraya divanxana, türbə, məscid və hamam daxildir.</p>
      <h2>Atəşgah Məbədi</h2>
      <p>Bakının Suraxanı rayonunda yerləşən Atəşgah məbədi XVII-XVIII əsrlərdə zərdüştlük dininin məbədi kimi istifadə olunub. Ərazidə təbii qaz çıxışları səbəbindən daim yanan odlar mövcud olub.</p>
      <h2>Bayıl Qalası</h2>
      <p>XIII əsrdə Xəzər dənizinin sahilində inşa edilən bu qala hazırda suyun altında qalıb. Arxeoloji qazıntılar zamanı əldə edilən artefaktlar Bakı şəhər tarixini öyrənmək üçün əvəzsiz mənbədir.</p>
    `,
    tags: ['Bakı', 'Tarix', 'Mədəniyyət', 'Turizm']
  },
  {
    id: "4",
    title: 'Süni İntellekt və Onun Gələcək Perspektivləri',
    slug: 'suni-intellekt-ve-onun-gelecek-perspektivleri',
    date: '2025-05-10',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Süni intellektin müasir inkişafı və onun gələcəkdə cəmiyyətə təsiri haqqında analiz.',
    content: `
      <p>Süni intellekt (Sİ) texnologiyası son illərdə sürətlə inkişaf edib və cəmiyyətin müxtəlif sahələrinə inteqrasiya olunub.</p>
      <h2>Süni İntellektin Növləri</h2>
      <p>Süni intellekt texnologiyaları dar Sİ və ümumi Sİ olmaqla iki əsas kateqoriyaya bölünür. Dar Sİ konkret bir vəzifəni yerinə yetirmək üçün hazırlanmışdır, ümumi Sİ isə insana bənzər düşüncə qabiliyyətinə malik olacaq.</p>
      <h2>Maşın Öyrənməsi</h2>
      <p>Maşın öyrənməsi Sİ-nin əsas hissəsidir. Alqoritmlər təcrübədən öyrənərək özlərini təkmilləşdirir və yeni şəraitə uyğunlaşırlar.</p>
      <h2>Dərin Öyrənmə</h2>
      <p>Dərin öyrənmə süni neyron şəbəkələrindən istifadə edərək mürəkkəb modellər yaradır. Bu texnologiya təsvir tanıma, təbii dil emalı və səs tanıma kimi sahələrdə geniş tətbiq olunur.</p>
      <h2>Sİ-nin Etik Aspektləri</h2>
      <p>Süni intellektin inkişafı bir sıra etik suallar doğurur. Məxfilik, təhlükəsizlik, şəffaflıq və məsuliyyət kimi məsələlər süni intellekt sistemlərinin yaradılması və istifadəsi zamanı nəzərə alınmalıdır.</p>
    `,
    tags: ['Süni İntellekt', 'Texnologiya', 'Maşın Öyrənməsi', 'Rəqəmsal Transformasiya']
  },
  {
    id: "5",
    title: 'Azərbaycan Muğamı: Dünya Mədəni İrsinin İncisi',
    slug: 'azerbaycan-mugami-dunya-medeni-irsinin-incisi',
    date: '2025-05-18',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Azərbaycan muğam sənəti, onun tarixi kökləri və dünya mədəniyyətinə töhfəsi haqqında.',
    content: `
      <p>Azərbaycan muğamı qədim və zəngin musiqi ənənəsidir. 2008-ci ildə UNESCO tərəfindən bəşəriyyətin qeyri-maddi mədəni irsi siyahısına daxil edilmişdir.</p>
      <h2>Muğamın Tarixi</h2>
      <p>Muğamın tarixi kökləri qədim dövrə gedib çıxır. Bu sənət forması əsrlər boyu inkişaf etmiş və təkmilləşmişdir. Orta əsr Azərbaycan filosofu və musiqişünası Səfiəddin Urməvi muğam nəzəriyyəsinin inkişafına böyük töhfə vermişdir.</p>
      <h2>Muğam Üçlüyü</h2>
      <p>Klassik muğam ifası adətən üç musiqiçidən ibarət ansambl tərəfindən həyata keçirilir: tar, kamança və qaval ifaçıları. Vokal ifa da muğamın mühüm tərkib hissəsidir.</p>
      <h2>Muğam Dəstgahları</h2>
      <p>Azərbaycan muğamında yeddi əsas dəstgah var: Rast, Şur, Segah, Çahargah, Bayatı-Şiraz, Humayun və Şüştər. Hər bir dəstgahın özünəməxsus emosional məzmunu və ifadə tərzi var.</p>
      <h2>Muğam İfaçıları</h2>
      <p>Azərbaycanın görkəmli muğam ifaçıları arasında Cabbar Qaryağdıoğlu, Xan Şuşinski, Seyid Şuşinski, Zülfü Adıgözəlov, Əlibaba Məmmədov, Alim Qasımov və digərləri var.</p>
    `,
    tags: ['Muğam', 'Musiqi', 'Mədəni İrs', 'Azərbaycan Mədəniyyəti']
  },
  {
    id: "6",
    title: 'Ekoloji Kənd Təsərrüfatı Üsulları',
    slug: 'ekoloji-kend-teserrufati-usullari',
    date: '2025-06-01',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Davamlı və ekoloji kənd təsərrüfatı metodları, orqanik əkinçilik və onun faydaları.',
    content: `
      <p>Ekoloji kənd təsərrüfatı ətraf mühitə minimal təsir göstərən və təbii ekosistemlərlə harmoniyada olan kənd təsərrüfatı metodlarını əhatə edir.</p>
      <h2>Orqanik Əkinçilik</h2>
      <p>Orqanik əkinçilik kimyəvi gübrələr və pestisidlərdən istifadə etmədən bitki və heyvan yetişdirmək metodudur. Bu üsul torpağın münbitliyini qoruyur və bioloji müxtəlifliyi dəstəkləyir.</p>
      <h2>Kompost Hazırlanması</h2>
      <p>Kompost organik tullantıların təbii çürümə prosesi nəticəsində əldə edilən qiymətli gübrədir. Mətbəx tullantıları, bağça qalıqları və digər orqanik materiallar kompost hazırlanmasında istifadə oluna bilər.</p>
      <h2>Növbəli Əkin</h2>
      <p>Növbəli əkin torpağın münbitliyini qorumaq və zərərvericilərlə mübarizə aparmaq üçün müxtəlif bitkilərin rotasiyasıdır. Bu üsul torpağın eroziyasını azaldır və təbii balansı qoruyur.</p>
      <h2>Su Qoruma Texnologiyaları</h2>
      <p>Damcı suvarma, yağış suyu toplama sistemləri və digər su qoruma texnologiyaları kənd təsərrüfatında suyun səmərəli istifadəsini təmin edir. Bu, xüsusilə quraq regionlarda vacib əhəmiyyət kəsb edir.</p>
    `,
    tags: ['Ekoloji Kənd Təsərrüfatı', 'Orqanik Əkinçilik', 'Davamlılıq', 'Ətraf Mühit']
  },
];

export default blogData;