const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrainingCenterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    course: {
        type: String,
        enum: ["Peşəkar Trener Akademiyası", "Karyera məsləhətçilərinin inkişaf kursu", "Rəqəmsal məhsul sahibliyi kursu", "İnsan resurslarının idarə olunması kursu", "Dövlət satınalmaları kursu", "Psixoloji Konsultasiya prosesi kursu", "Yeniyetmə və böyüklərlə psixoterapiya texnikaları kursu", "Daxili Motivasiya və Performansın Artırılması", "Region Gənclərinin Yay Düşərgəsi", "İnkişaf Akademiyası", "Təcrübəli mentorlarla fərdi görüşlər", "Masterklasslar", "Təcrübə imkanları", "Xidmət Mədəniyyəti və Müştəri Məmnuniyyəti", "Gənclərin İnkişaf Marafonu", "Komanda İdarəetməsi və Effektiv Kommunikasiya", "Karyera Məsləhətçiləri Kursu", "HR Peşəkarı", "Satış Uğurunun Sirləri", "Zamanı İdarə Etmə", "Bədən Dili və Ünsiyyət Bacarıqları", "Mindfulness: Zehni Rahatlıq və Fokuslanma", "PMP: Layihə İdarəetməsində Peşəkarlıq", "Şəxsi Brendinq və Sosial Media Strategiyaları", "Mobiliqrafiya və Vizual Kontent Yaratma"],
        required: true
    }
});

const TrainingCenterModel = mongoose.model('TrainingCenterForm', TrainingCenterSchema);


module.exports = TrainingCenterModel;