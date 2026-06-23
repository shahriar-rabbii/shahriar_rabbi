import Image from "next/image";
import { FadeIn } from "../ui/FadeIn";

export default function Tools() {
    const tools = [
        { name: "Figma", icon: "/figma.svg" },
        { name: "Photoshop", icon: null, isPs: true },
        { name: "Illustrator", icon: "/illustrator.svg" },
        { name: "Framer", icon: "/framer.png" },
        { name: "Sketch", icon: "/sketch.svg" },
    ];

    return (
        <section id="tools" className="scroll-mt-32 px-6 max-w-7xl mx-auto pb-12 lg:pb-24 space-y-10 lg:space-y-12">
            {/* Section Header */}
            <FadeIn delay={0.1} className="flex justify-center">
                <div className="bg-[#FF6B00] text-white px-8 lg:px-10 py-2.5 lg:py-3 rounded-full font-semibold text-lg lg:text-xl shadow-[0_0_20px_rgba(255,107,0,0.2)]">
                    Tools & Technologies
                </div>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                {tools.map((tool, index) => (
                    <FadeIn delay={0.2 + index * 0.1} direction="up" key={tool.name}>
                        <div 
                            className="bg-[#111111]/40 backdrop-blur-xl p-4 lg:p-5 rounded-2xl border border-white/30 flex items-center gap-3 lg:gap-4 hover:border-[#FF6B00]/40 transition-all group cursor-default h-full"
                        >
                            <div className="w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center shrink-0">
                                {tool.isPs ? (
                                    <div className="w-9 lg:w-10 h-9 lg:h-10 bg-[#001E36] border-2 border-[#31A8FF] rounded-lg flex items-center justify-center">
                                        <span className="text-[#31A8FF] font-semibold text-lg lg:text-xl">Ps</span>
                                    </div>
                                ) : (
                                    <Image 
                                        src={tool.icon || "/file.svg"} 
                                        alt={tool.name} 
                                        width={28} 
                                        height={28} 
                                        className="object-contain"
                                    />
                                )}
                            </div>
                            <span className="text-white font-semibold text-base lg:text-lg">{tool.name}</span>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
