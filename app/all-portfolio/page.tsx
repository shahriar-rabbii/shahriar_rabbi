import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "Bean Fien",
        description: "Brew. Order. Earn Rewards",
        image: "/bean.png",
        alt: "Bean Fien Web",
        link: "https://www.figma.com/design/kR9tULhV92X6q9gJkmi4Jr/chaserxhype?node-id=1-2&p=f&t=631CPx5wzsEEpQbE-0"
    },
    {
        title: "Gathering",
        description: "Event Discovery & Social Networking App",
        image: "/gathering.png",
        alt: "Gathering App",
        link: "https://www.behance.net/gallery/242721891/Gathering-Event-Application-Case-Study"
    },
    {
        title: "Photopia App",
        description: "Connect with the world's best Photography & Videos",
        image: "/photopia.png",
        alt: "Photopia App",
        link: "https://www.figma.com/design/zlivS9TYyyc1lDhYsgok5Q/Photopia?node-id=72-9140&t=iseYucSSR5gMlFO8-0"
    },
    {
        title: "Sporve",
        description: "A trading platform for car enthusiasts to trade in high-value collectibles.",
        image: "/sporve.png",
        alt: "Sporve App",
        link: "https://www.figma.com/design/ZsxEWudXvUAADeGg3A5jHN/vsrikan1?node-id=92-65&t=cBEN59wpJ1uZBVV5-0"
    },
    {
        title: "Ascela",
        description: "AI-powered recruitment SaaS platform that streamlines hiring for startups and enterprises.",
        image: "/ascela.png",
        alt: "Ascela App",
        link: "https://www.behance.net/gallery/249258651/Ascela-Personalized-Womens-Wellness-Nutrition-App"
    },
    {
        title: "Prottoyon",
        description: "AI-powered recruitment SaaS platform that streamlines hiring for startups and enterprises.",
        image: "/prottoyon.png",
        alt: "Prottoy App",
        link: "https://www.behance.net/gallery/226418669/Prottoyon-App-Redesigning-Case-Study"
    },

    {
        title: "Amar Adalot",
        description: "A Bangladeshi legal platform offering instant legal advice.",
        image: "/amar_adalot.png",
        alt: "Amar Adalot App",
        link: "https://www.behance.net/gallery/226780723/Amar-Adalat-My-Court-App-Redesign-and-Case-Study"
    },
    {
        title: "Grocery",
        description: "Grocery Shopping & Delivery App",
        image: "/grocery.png",
        alt: "Grocery App",
        link: "https://www.behance.net/gallery/233433769/Grocery-Mobile-App"
    },
];

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

export default function AllPortfolio() {
    return (
        <div className="max-w-7xl mx-auto px-6 mt-10 lg:mt-16 mb-20 lg:mb-28 space-y-16 lg:space-y-24">
            {/* Header - Consistent with Home/Portfolio.tsx */}
            <FadeIn delay={0.1} className="space-y-10 lg:space-y-12">
                <div className="flex justify-center items-center border-b border-white/10 pb-6 lg:pb-8">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter uppercase text-center leading-tight">
                        All Projects
                    </h2>
                </div>
            </FadeIn>

            {projects.map((project, index) => {
                const isOdd = index % 2 === 0;

                return (
                    <div key={project.title} className="relative pt-6 lg:pt-10">
                        <div className="grid grid-cols-12 items-center">

                            {/* Image Container */}
                            <FadeIn
                                delay={0.2}
                                direction={isOdd ? "right" : "left"}
                                className={`col-span-12 relative aspect-[16/9] rounded-2xl overflow-hidden group
                                    ${isOdd
                                        ? "lg:col-span-10"
                                        : "lg:col-start-3 lg:col-span-10 order-1 lg:order-2"
                                    }`}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.alt}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 pointer-events-none" />
                            </FadeIn>

                            {/* Glass Card */}
                            <FadeIn
                                delay={0.4}
                                direction="up"
                                className={`${glassCard} mt-[-60px] lg:mt-0 mx-4 lg:mx-0
                                    ${isOdd
                                        ? "lg:right-0"
                                        : "lg:left-0 lg:mb-0 order-2 lg:order-1"
                                    }`}
                            >
                                <div className="inline-block border border-[#FF6B00] text-[#FF6B00] px-4 lg:px-5 py-1 lg:py-1.5 rounded-full text-[10px] lg:text-xs font-semibold uppercase tracking-widest">
                                    Case Study
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl lg:text-4xl font-semibold text-white tracking-tight uppercase leading-none">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm lg:text-base text-white/60 font-medium leading-relaxed max-w-md">
                                        {project.description}
                                    </p>
                                </div>

                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 text-[#FF6B00] font-semibold text-sm uppercase tracking-wider group/link hover:brightness-110 transition-all"
                                >
                                    {project.link.includes("figma.com") ? "Live Link" : "View Case"}
                                    <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                </Link>
                            </FadeIn>

                        </div>
                    </div>
                );
            })}
        </div>
    );
}