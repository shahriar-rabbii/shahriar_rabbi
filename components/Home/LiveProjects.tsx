import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function LiveProjects() {
  const [project] = projects;

  if (!project) return null;

  return (
    <section id="live-projects" className="scroll-mt-32 px-4 sm:px-6 max-w-7xl mx-auto pb-20 lg:pb-32 space-y-10 lg:space-y-12">
      <div className="flex justify-center">
        <div className="bg-[#FF6B00] text-white px-10 lg:px-12 py-3 lg:py-3.5 rounded-full font-semibold text-lg lg:text-xl shadow-[0_0_20px_rgba(255,107,0,0.2)]">
          Live Project
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

      <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-[0_0_40px_rgba(255,107,0,0.08)]">
        <div className="relative aspect-[16/8] overflow-hidden">
          <Image
            src="/webpage.png"
            alt={project.title}
            fill
            className="object-cover transition duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight uppercase leading-none">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/80 max-w-xl">
                  {project.description}
                </p>
              </div>

              {project.link ? (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00] bg-[#FF6B00]/15 px-4 py-3 text-sm font-semibold text-[#FF6B00] transition hover:bg-[#FF6B00]/25"
                >
                  Open Live Project
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
