import CountUp from "react-countup";
import { User, BookOpen, GraduationCap, Zap } from "lucide-react";

const stats = [
    { id: 1, name: "Təhsil Mütəxəssisi", value: 4, icon: <User size={40} /> },
    { id: 2, name: "Universitetlə əməkdaşlıq", value: 20, icon: <BookOpen size={40} /> },
    { id: 3, name: "Tələbə qəbulu", value: 30, icon: <GraduationCap size={40} /> },
    { id: 4, name: "Seminarlar", value: 50, icon: <Zap size={40} /> },
];

function StatCard() {
    return (
        <div className="relative mt-10  py-16 px-4 sm:px-6 lg:px-8  overflow-hidden">
            {/* Background Particles Effect */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-30"></div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {stats.map((stat) => (
                    <div key={stat.id} className="flex flex-col items-center text-black">
                        <div className="mb-2">{stat.icon}</div>
                        <h3 className="text-4xl font-bold">
                            +<CountUp start={0} end={stat.value} duration={10} separator="," />
                        </h3>
                        <p className="text-lg font-medium">{stat.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StatCard;
