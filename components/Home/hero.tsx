import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <div className="pt-10 lg:pt-24 pb-8 lg:pb-20 px-6 max-w-7xl mx-auto">

            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pt-6 lg:pt-10 pb-12 lg:pb-20">

                {/* Left Content */}
                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#FF6B00] text-sm font-medium animate-fade-in-up delay-100">
                        <div className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                        Available for Projects
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-white animate-fade-in-up delay-200">
                        Designing <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-[#FF6B00]">Experiences</span> <br />
                        That Matter.
                    </h1>

                    <p className="text-base sm:text-lg text-white/80 max-w-md leading-relaxed animate-fade-in-up delay-300">
                        I&apos;m Shahriar, a Jr. UX/UI Designer dedicated to creating premium, functional, and casually stunning digital products.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 animate-fade-in-up delay-400">
                        <a
                            href="#portfolio"
                            className="flex items-center gap-2 bg-[#FF6B00] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:brightness-110 transition-all"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4" />
                        </a>

                        <a
                            href="/shahriar.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="px-7 py-3.5 rounded-full border border-[#FF6B00] text-white font-semibold text-sm hover:bg-white/5 transition-colors"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative flex justify-center lg:justify-end animate-fade-in-up delay-500">
                    <div className="animate-float w-full flex justify-center lg:justify-end relative">
                        <div className="absolute -top-16 -left-16 w-56 h-56 bg-[#FF6B00]/20 rounded-full blur-[80px] -z-10" />
                        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#FF6B00]/10 rounded-full blur-[80px] -z-10" />

                        <div className="relative w-72 md:w-96 aspect-square rounded-2xl overflow-hidden p-3">
                            {/* Animated Spinning Red Border */}
                            <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_70%,red_100%)] animate-[spin_3s_linear_infinite]" />

                            {/* Inner Dark Background to mask the center of the gradient */}
                            <div className="absolute inset-1 bg-[#0A0A0A] rounded-xl z-10" />

                            {/* Image Container */}
                            <div className="relative z-20 w-full h-full p-2">
                                <Image
                                    src="/hero2.png"
                                    alt="Shahriar"
                                    fill
                                    className="object-cover rounded-xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

