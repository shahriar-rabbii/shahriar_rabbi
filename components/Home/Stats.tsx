import { Briefcase, Users, Award, Star } from "lucide-react";

export default function Stats() {
    return (
        <div className="px-6 max-w-7xl mx-auto pb-12 lg:pb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon={<Briefcase className="w-5 h-5" />} value="1+" label="Years Experience" />
                <StatCard icon={<Users className="w-5 h-5" />} value="10+" label="Happy Clients" />
                <StatCard icon={<Award className="w-5 h-5" />} value="15+" label="Projects Completed" />
                <StatCard icon={<Star className="w-5 h-5" />} value="4.9" label="Client Rating" />
            </div>
        </div>
    );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
    return (
        <div className="bg-[#111111]/40 backdrop-blur-xl p-5 lg:p-6 rounded-2xl border border-white/30 hover:border-[#FF6B00]/50 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00] flex items-center justify-center text-white mb-3 lg:mb-5 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,107,0,0.3)]">
                {icon}
            </div>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-1 text-white">{value}</h3>
            <p className="text-white/80 text-[10px] lg:text-xs font-medium uppercase tracking-wider">{label}</p>
        </div>
    );
}
