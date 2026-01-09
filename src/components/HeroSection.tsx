import { ArrowRight } from "lucide-react";
import { HeroDecorations } from "./decorative/DecorativeElements";
import { DottedCircle } from "./decorative/DottedCircle";
import { Sparkle, StarBurst } from "./decorative/Sparkle";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 pt-20 pb-12 overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <HeroDecorations />
      
      {/* Original Deco Elements */}
      <div className="deco-circle absolute -top-[8%] -right-[8%] w-[400px] h-[400px] pointer-events-none" />
      <div className="deco-circle absolute bottom-[12%] left-[5%] w-[200px] h-[200px] pointer-events-none" />
      <div className="absolute top-[22%] left-[15%] w-[70px] h-[70px] rounded-full bg-primary/[0.04] pointer-events-none" />
      <div className="deco-line absolute top-[30%] left-[5%] -rotate-[25deg] pointer-events-none" />
      <div className="deco-line absolute bottom-[25%] right-[8%] rotate-[35deg] pointer-events-none" />
      <div className="deco-cross absolute top-[15%] right-[18%] w-[14px] h-[14px] opacity-15 animate-spin-slow pointer-events-none" />
      <div className="deco-cross absolute bottom-[30%] left-[12%] w-[14px] h-[14px] opacity-15 animate-spin-slow-reverse pointer-events-none" />

      {/* Extra artistic elements */}
      <DottedCircle className="top-[8%] left-[30%]" size="sm" />
      <Sparkle className="top-[45%] right-[30%]" size="lg" />
      <StarBurst className="bottom-[45%] left-[8%]" />

      <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_0.7fr] gap-8 md:gap-16 items-center">
        {/* Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-4">
            <span className="w-6 h-[1px] bg-primary" />
            Growth Marketer
          </span>

          <h1 className="font-serif text-3xl md:text-[clamp(2.4rem,4vw,3.2rem)] font-normal leading-[1.2] mb-5">
            Products fail because{" "}
            <span className="line-through decoration-primary text-foreground-muted">
              they lack features
            </span>{" "}
            — they lack a <span className="text-primary">story</span>.
          </h1>

          <p className="text-base md:text-lg text-foreground-light leading-relaxed mb-8 max-w-[440px] mx-auto md:mx-0">
            I find the narrative your product is missing, build the system to
            tell it, and make growth feel inevitable.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mb-10">
            <button
              onClick={() => scrollToSection("work")}
              className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(196,77,45,0.3)] transition-all btn-magnetic hover-target"
            >
              See My Work
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-foreground-muted hover:text-primary transition-colors hover-target"
            >
              Learn more →
            </button>
          </div>

          <div className="flex justify-center md:justify-start gap-10">
            <div className="text-left">
              <div className="font-serif text-2xl font-semibold text-primary leading-tight">
                568%
              </div>
              <div className="text-[0.7rem] text-foreground-muted uppercase tracking-wide">
                YoY Growth
              </div>
            </div>
            <div className="text-left">
              <div className="font-serif text-2xl font-semibold text-primary leading-tight">
                3.9M+
              </div>
              <div className="text-[0.7rem] text-foreground-muted uppercase tracking-wide">
                Views
              </div>
            </div>
            <div className="text-left">
              <div className="font-serif text-2xl font-semibold text-primary leading-tight">
                0→1
              </div>
              <div className="text-[0.7rem] text-foreground-muted uppercase tracking-wide">
                Built
              </div>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="order-1 md:order-2 relative flex justify-center items-center">
          <div className="relative w-[180px] h-[225px] md:w-[280px] md:h-[350px]">
            {/* Main Image Placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-[#E8E4DD] to-[#D8D4CD] rounded-[180px_180px_24px_24px] relative z-10" />
            
            {/* Frame */}
            <div className="absolute -inset-3.5 border border-primary/25 rounded-[194px_194px_38px_38px] z-0" />

            {/* Floating Cards - Hidden on mobile */}
            <div className="hidden md:block absolute top-[8%] -left-[18%] bg-card px-4 py-2.5 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.08)] text-xs z-20 animate-float">
              <strong className="font-serif text-lg text-primary">77%</strong>{" "}
              organic
            </div>
            <div className="hidden md:block absolute bottom-[22%] -left-[22%] bg-card px-4 py-2.5 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.08)] text-xs z-20 animate-float-delayed-1">
              <strong className="font-serif text-lg text-primary">12</strong>{" "}
              team led
            </div>
            <div className="hidden md:block absolute top-[32%] -right-[18%] bg-card px-4 py-2.5 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.08)] text-xs z-20 animate-float-delayed-2">
              IIM-B
            </div>

            {/* Annotations - Hidden on mobile */}
            <span className="hidden md:block absolute -top-[2%] right-[8%] font-handwritten text-base text-primary -rotate-[8deg] z-20">
              that's me! ✦
            </span>
            <span className="hidden md:block absolute bottom-[8%] left-[2%] font-handwritten text-base text-primary rotate-[5deg] z-20">
              → 30 tabs open
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
        <div className="w-[1px] h-10 bg-foreground-muted relative overflow-hidden animate-scroll-line" />
        <span className="text-[0.65rem] uppercase tracking-[0.1em] text-foreground-muted">
          Scroll
        </span>
      </div>
    </section>
  );
};
