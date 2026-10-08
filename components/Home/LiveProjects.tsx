import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { FadeIn } from "../ui/FadeIn";

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

export default function LiveProjects() {
  const liveProjects = projects.slice(0, 3);

  if (!liveProjects.length) return null;

  return (
    <section id="live-projects" className="scroll-mt-32 px-4 sm:px-6 max-w-7xl mx-auto pb-12 lg:pb-32 space-y-10 lg:space-y-12">
      <FadeIn delay={0.1} className="space-y-10 lg:space-y-12">
        <div className="flex justify-center">
          <div className="bg-[#FF6B00] text-white px-10 lg:px-12 py-2.5 lg:py-3 rounded-full font-semibold text-lg lg:text-xl shadow-[0_0_20px_rgba(255,107,0,0.2)]">
            Live Projects
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-white/10 pb-8 lg:pb-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter uppercase leading-tight">
            Live Projects
          </h2>
          <p className="text-sm lg:text-base text-white/60 max-w-xl leading-relaxed md:text-right">
            A featured live experience designed for real users and real impact.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-12 lg:gap-24 grid-cols-1">
        {liveProjects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={project.id} className="relative pt-6 lg:pt-10">
              <div className="grid grid-cols-12 items-center">
                {/* Background Image */}
                <FadeIn delay={0.2} direction={isEven ? "right" : "left"} className={`col-span-12 ${isEven ? 'lg:col-span-10' : 'lg:col-start-3 lg:col-span-10'} relative aspect-[16/9] md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden group ${!isEven ? 'order-1 lg:order-2' : ''}`}>
                  <Image
                    src={project.image ?? "/webpage.png"}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 pointer-events-none" />
                </FadeIn>

                {/* Glass Card */}
                <FadeIn delay={0.4} direction="up" className={`${glassCard} mt-[-60px] lg:mt-0 ${isEven ? 'lg:right-0 mx-4 lg:mx-0' : 'lg:left-0 order-2 lg:order-1 mx-4 lg:mx-0'}`}>
                  <div className="inline-block border border-[#FF6B00] text-[#FF6B00] px-4 lg:px-5 py-1 lg:py-1.5 rounded-full text-[10px] lg:text-xs font-semibold uppercase tracking-widest">
                    Live Project
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl lg:text-4xl font-semibold text-white tracking-tight uppercase leading-none">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm lg:text-base font-medium leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap pt-2">
                    {project.link ? (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-[#FF6B00] font-semibold text-sm uppercase tracking-wider group/link hover:brightness-110 transition-all"
                      >
                        Open Live Project
                        <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </Link>
                    ) : null}
                    {project.applink ? (
                      <Link
                        href={project.applink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-[#FF6B00] font-semibold text-sm uppercase tracking-wider group/link hover:brightness-110 transition-all"
                      >
                        Open App Store Link
                        <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </Link>
                    ) : null}
                  </div>
                </FadeIn>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
