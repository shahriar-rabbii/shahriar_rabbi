import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";
import Link from "next/link";

const glassCard = `col-span-12 lg:w-[45%] lg:absolute p-6 md:p-8 rounded-2xl space-y-5 z-10
    bg-white/0.04
    backdrop-blur-2xl
    [background:linear-gradient(135deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.02)_100%)]
    relative
    before:absolute before:inset-0 before:rounded-2xl before:p-px
    before:[background:linear-gradient(135deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.04)_50%,rgba(255,107,0,0.25)_100%)]
    before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
    before:[mask-composite:exclude]
    before:pointer-events-none
    after:absolute after:top-0 after:left-[10%] after:right-[10%] after:h-px
    after:[background:linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)]
    after:pointer-events-none shadow-2xl`;

export default function Portfolio() {
    return (
        <section id="portfolio" className="scroll-mt-32 px-6 max-w-7xl mx-auto pb-12 lg:pb-32 space-y-16 lg:space-y-24">
            {/* Header */}
            <FadeIn delay={0.1} className="space-y-10 lg:space-y-12">
                <div className="flex justify-center">
                    <div className="bg-[#FF6B00] text-white px-8 lg:px-10 py-2.5 lg:py-3 rounded-full font-semibold text-lg lg:text-xl shadow-[0_0_20px_rgba(255,107,0,0.2)]">
                        Portfolio
                    </div>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-6 lg:pb-8">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter uppercase leading-tight">
                        Selected Works
                    </h2>
                    <Link href="/all-portfolio">
                        <button className="px-6 lg:px-8 py-2.5 lg:py-3 rounded-full border border-solid border-[#ff6b00] text-white font-semibold text-xs lg:text-sm hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-all duration-300 whitespace-nowrap">
                            View All
                        </button>
                    </Link>
                </div>
            </FadeIn>

            {/* Project 1: Gathering */}
            <div className="relative pt-6 lg:pt-10">
                <div className="grid grid-cols-12 items-center">
                    {/* Background Image */}
                    <FadeIn delay={0.2} direction="right" className="col-span-12 lg:col-span-10 relative aspect-[16/9] rounded-2xl overflow-hidden group">
                        <Image
                            src="/gathering.png"
                            alt="Gathering App"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 pointer-events-none" />
                    </FadeIn>

                    {/* Glass Card */}
                    <FadeIn delay={0.4} direction="up" className={`${glassCard} mt-[-60px] lg:mt-0 lg:right-0 mx-4 lg:mx-0`}>
                        <div className="inline-block border border-[#FF6B00] text-[#FF6B00] px-4 lg:px-5 py-1 lg:py-1.5 rounded-full text-[10px] lg:text-xs font-semibold uppercase tracking-widest">
                            Case Study
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl lg:text-4xl font-semibold text-white tracking-tight uppercase leading-none">
                                Gathering
                            </h3>
                            <p className="text-white/60 text-sm lg:text-base font-medium leading-relaxed max-w-md">
                                Event Discovery &amp; Social Networking App
                            </p>
                        </div>
                        <Link
                            target="_blank"
                            href="https://www.behance.net/gallery/242721891/Gathering-Event-Application-Case-Study"
                            className="inline-flex items-center gap-3 text-[#FF6B00] font-semibold text-sm uppercase tracking-wider group/link hover:brightness-110 transition-all"
                        >
                            View Case
                            <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </Link>
                    </FadeIn>
                </div>
            </div>

            {/* Project 2: Sporve */}
            <div className="relative pt-12 lg:pt-10">
                <div className="grid grid-cols-12 items-center">
                    {/* Background Image (Top on mobile) */}
                    <FadeIn delay={0.2} direction="left" className="col-span-12 lg:col-start-3 lg:col-span-10 relative aspect-[16/9] rounded-2xl overflow-hidden group order-1 lg:order-2">
                        <Image
                            src="/sporve.png"
                            alt="Sporve App"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 pointer-events-none" />
                    </FadeIn>

                    {/* Glass Card (Overlaps image on mobile) */}
                    <FadeIn delay={0.4} direction="up" className={`${glassCard} mt-[-60px] lg:mt-0 lg:left-0 order-2 lg:order-1 mx-4 lg:mx-0`}>
                        <div className="inline-block border border-[#FF6B00] text-[#FF6B00] px-4 lg:px-5 py-1 lg:py-1.5 rounded-full text-[10px] lg:text-xs font-semibold uppercase tracking-widest">
                            Case Study
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl lg:text-4xl font-semibold text-white tracking-tight uppercase leading-none">
                                Sporve
                            </h3>
                            <p className="text-white/60 text-sm lg:text-base font-medium leading-relaxed max-w-md">
                                A trading platform for car enthusiasts to trade in high-value collectibles.
                            </p>
                        </div>
                        <Link
                            href="https://www.figma.com/design/ZsxEWudXvUAADeGg3A5jHN/vsrikan1?node-id=92-65&t=cBEN59wpJ1uZBVV5-0"
                            target="_blank"
                            className="inline-flex items-center gap-3 text-[#FF6B00] font-semibold text-sm uppercase tracking-wider group/link hover:brightness-110 transition-all"
                        >
                            Live Link
                            <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </Link>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
