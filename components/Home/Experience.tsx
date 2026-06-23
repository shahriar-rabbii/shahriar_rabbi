import { Briefcase, GraduationCap, Award } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";

export default function Experience() {
    return (
        <section id="experience" className="scroll-mt-32 px-6 max-w-7xl mx-auto pb-12 lg:pb-24 space-y-10 lg:space-y-12 overflow-hidden">
            {/* Section Header */}
            <FadeIn delay={0.1} className="flex justify-center">
                <div className="bg-[#FF6B00] text-white px-8 lg:px-10 py-2.5 lg:py-3 rounded-full font-semibold text-lg lg:text-xl shadow-[0_0_20px_rgba(255,107,0,0.2)]">
                    Experience & Education
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Work Experience */}
                <FadeIn delay={0.2} direction="right" className="space-y-6 lg:pr-10 lg:border-r-2 border-b-2 lg:border-b-0 border-[#FF6B00]/40 pb-8 lg:pb-0 flex flex-col h-full">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-4 shrink-0">
                        <Briefcase className="w-7 lg:w-8 h-7 lg:h-8 text-[#FF6B00]" />
                        <h2 className="text-2xl lg:text-3xl font-semibold text-white">Work Experience</h2>
                    </div>

                    <div className="bg-[#111111]/40 backdrop-blur-xl p-6 lg:p-8 rounded-3xl border border-white/30 hover:border-[#FF6B00]/40 transition-all group flex-grow flex flex-col">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3 shrink-0">
                            <div>
                                <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-[#FF6B00] transition-colors leading-tight">UI/UX Designer</h3>
                                <p className="text-white/60 font-medium text-base lg:text-lg mt-1">Sparktech Agency</p>
                            </div>
                            <div className="bg-white/10 px-4 py-1.5 rounded-full text-white/80 text-xs font-medium whitespace-nowrap">
                                August 2025 – Present
                            </div>
                        </div>

                        <ul className="space-y-3 lg:space-y-4 text-white/70 text-sm lg:text-base font-medium leading-relaxed list-none flex-grow">
                            {[
                                "Designed UI/UX for multiple client projects including mobile apps, dashboards, landing pages, and ecommerce platforms",
                                "Created user flows, wireframes, high-fidelity UI, and interactive prototypes",
                                "Built scalable design systems and developer handoff-ready Figma files",
                                "Collaborated closely with developers to ensure pixel-perfect implementation",
                                "Improved usability and accessibility using UX heuristics and visual structure principles",
                                "Delivered high-quality designs consistently under tight deadlines"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="text-[#FF6B00] mt-1 text-base lg:text-lg">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeIn>

                {/* Education & Courses */}
                <div className="space-y-8 lg:pl-10 pt-8 lg:pt-0 flex flex-col h-full">
                    {/* Education */}
                    <FadeIn delay={0.3} direction="left" className="space-y-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 border-b border-white/10 pb-4 shrink-0">
                            <GraduationCap className="w-7 lg:w-8 h-7 lg:h-8 text-[#FF6B00]" />
                            <h2 className="text-2xl lg:text-3xl font-semibold text-white">Education</h2>
                        </div>

                        <div className="space-y-4 flex-grow flex flex-col justify-between">
                            {[
                                {
                                    degree: "MSc in Management Information Systems (MIS)",
                                    institution: "Daffodil International University",
                                    year: "2025 – Present"
                                },
                                {
                                    degree: "BSc in Computer Science & Engineering (CSE)",
                                    institution: "Dhaka International University",
                                    year: "2019 – 2023"
                                },
                                {
                                    degree: "Higher Secondary Certificate (Science)",
                                    institution: "Milestone College",
                                    year: "2015 – 2017"
                                },
                                {
                                    degree: "Secondary School Certificate (Science)",
                                    institution: "Kishoreganj Govt. Boys High School",
                                    year: "2014 – 2015"
                                }
                            ].map((edu, idx) => (
                                <div key={idx} className="bg-[#111111]/40 backdrop-blur-xl p-5 lg:p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all flex-grow flex flex-col justify-center">
                                    <h3 className="text-base lg:text-lg font-semibold text-white mb-1 leading-tight">{edu.degree}</h3>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5 lg:gap-2">
                                        <p className="text-white/60 text-xs lg:text-sm">{edu.institution}</p>
                                        <span className="text-[#FF6B00] text-xs lg:text-sm font-semibold whitespace-nowrap">{edu.year}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Courses & Certifications */}
                    <FadeIn delay={0.4} direction="up" className="space-y-6 shrink-0">
                        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                            <Award className="w-7 lg:w-8 h-7 lg:h-8 text-[#FF6B00]" />
                            <h2 className="text-2xl lg:text-3xl font-semibold text-white">Certifications</h2>
                        </div>
                        
                        <div className="bg-[#111111]/40 backdrop-blur-xl p-5 lg:p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
                            <h3 className="text-base lg:text-lg font-semibold text-white mb-1">UI/UX Design Guided Program (6 Months)</h3>
                            <p className="text-[#FF6B00] text-xs lg:text-sm font-semibold">Ostad</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
