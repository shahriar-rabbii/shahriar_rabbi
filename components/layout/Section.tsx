import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

const Section = ({ children, id, className, title, subtitle }: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)}>
      <div className="container">
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
            {title && <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>}
            {subtitle && <p className="text-secondary text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
