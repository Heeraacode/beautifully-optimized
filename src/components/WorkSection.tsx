import { SectionHeader } from "./SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { VerticalConnector } from "./decorative/ConnectingPath";
import { Sparkle } from "./decorative/Sparkle";
import { SolidDot } from "./decorative/DottedCircle";

const workExperience = [
  {
    icon: "🏛️",
    tags: ["Education", "0→1", "Growth"],
    title: "IIM Bangalore",
    role: "Team Lead, Growth & Partnerships · Oct 2024 – Present",
    description:
      "Joined as intern. Now lead 12-person team across growth, brand, content, events, partnerships.",
    statValue: "568%",
    statLabel: "Growth",
  },
  {
    icon: "🌱",
    tags: ["Climate-Tech", "Founder"],
    title: "Climacraft",
    role: "Founder · Sep 2023 – Jun 2024",
    description:
      "AI-driven hydroponics for restaurants. Shut down post-MVP. Learned to protect narrative.",
    statValue: "Top 10",
    statLabel: "Startup India",
  },
  {
    icon: "📊",
    tags: ["Research", "Data"],
    title: "CSIR – CLRI",
    role: "Research Intern · Jun – Oct 2023",
    description:
      "Forecasting models. ~15% accuracy improvement. Technical to decision-ready narratives.",
    statValue: "15%",
    statLabel: "Accuracy",
  },
];

export const WorkSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="work" className="relative py-20 px-6 md:px-16 overflow-hidden">
      {/* Artistic decorations */}
      <Sparkle className="top-[12%] right-[6%]" size="sm" />
      <Sparkle className="bottom-[18%] left-[8%]" size="md" />
      <SolidDot className="top-[25%] left-[4%]" />
      <SolidDot className="bottom-[30%] right-[5%]" />

      <div className="max-w-[950px] mx-auto relative" ref={ref}>
        <SectionHeader number="02" label="Experience" />

        <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6 fade-up">
          Where I've Worked
        </h2>

        {/* Vertical connecting line - visible on desktop */}
        <VerticalConnector className="hidden md:block w-10 h-[400px] -left-16 top-24" />

        <div className="flex flex-col gap-3">
          {workExperience.map((work, index) => (
            <div
              key={work.title}
              className="work-card work-card-accent bg-card rounded-xl p-5 md:p-6 grid grid-cols-1 md:grid-cols-[50px_1fr_auto] gap-4 md:gap-5 items-center shadow-[0_4px_15px_rgba(0,0,0,0.04)] relative overflow-hidden hover:translate-x-1.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all fade-up hover-target"
            >
              <div className="hidden md:flex w-[50px] h-[50px] bg-background rounded-lg items-center justify-center text-xl">
                {work.icon}
              </div>

              <div className="text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-1 mb-1">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.5rem] font-semibold uppercase tracking-wide text-primary bg-primary/10 px-1.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-base md:text-lg font-medium mb-0.5">
                  {work.title}
                </h3>
                <p className="text-[0.7rem] text-foreground-muted mb-1">
                  {work.role}
                </p>
                <p className="text-xs md:text-sm text-foreground-light leading-relaxed">
                  {work.description}
                </p>
              </div>

              <div className="hidden md:block text-right relative">
                <div className="font-serif text-base font-semibold text-primary">
                  {work.statValue}
                </div>
                <div className="text-[0.55rem] text-foreground-muted uppercase">
                  {work.statLabel}
                </div>
                {/* Small annotation on first card */}
                {index === 0 && (
                  <span className="absolute -top-6 -right-2 font-handwritten text-xs text-primary rotate-[-10deg]">
                    current ✦
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
