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
        enum: ["Peşəkar Trener Akademiyası", "Daxili Motivasiya və Performansın Artırılması", "Xidmət Mədəniyyəti və Müştəri Məmnuniyyəti", "Gənclərin İnkişaf Marafonu", "Komanda İdarəetməsi və Effektiv Kommunikasiya", "Karyera Məsləhətçiləri Kursu", "HR Peşəkarı", "Satış Uğurunun Sirləri", "Zamanı İdarə Etmə", "Bədən Dili və Ünsiyyət Bacarıqları", "Mindfulness: Zehni Rahatlıq və Fokuslanma", "PMP: Layihə İdarəetməsində Peşəkarlıq", "Şəxsi Brendinq və Sosial Media Strategiyaları", "Mobiliqrafiya və Vizual Kontent Yaratma"],
        required: true
    }
});

const TrainingCenterModel = mongoose.model('TrainingCenterForm', TrainingCenterSchema);


module.exports = TrainingCenterModel;