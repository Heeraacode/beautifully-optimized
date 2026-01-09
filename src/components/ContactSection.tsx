import { SectionHeader } from "./SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ContactSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="contact" className="bg-cream py-20 px-6 md:px-16">
      <div
        className="max-w-[750px] mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-center"
        ref={ref}
      >
        <div className="w-[160px] h-[200px] md:w-[180px] md:h-[220px] mx-auto md:mx-0 bg-gradient-to-br from-[#E8E4DD] to-[#D8D4CD] rounded-lg grayscale hover:grayscale-0 hover:scale-[1.02] transition-all fade-up" />

        <div className="text-center md:text-left fade-up">
          <SectionHeader number="07" label="Contact" />

          <h2 className="font-serif text-xl md:text-2xl font-normal mb-3">
            Let's build something meaningful.
          </h2>

          <p className="text-sm text-foreground-light mb-1">
            If you need someone to help your product find its story.
          </p>

          <p className="font-handwritten text-lg text-primary my-4">
            Open to interesting conversations ✦
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="mailto:heeraa@example.com"
              className="px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(196,77,45,0.3)] transition-all hover-target"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border-[1.5px] border-foreground text-foreground text-sm font-semibold rounded-full hover:bg-foreground hover:text-background transition-all hover-target"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-5 py-3 border-[1.5px] border-foreground text-foreground text-sm font-semibold rounded-full hover:bg-foreground hover:text-background transition-all hover-target"
            >
              Resume ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
