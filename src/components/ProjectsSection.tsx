import { SectionHeader } from "./SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    type: "Case Study",
    title: "Shram",
    subtitle: "Narrative Engine",
    description:
      'AI productivity tool. Repositioned from "task management" to "cognitive freedom."',
    link: "#",
    linkText: "View Case Study →",
  },
  {
    type: "Shipped",
    title: "Content Engine",
    subtitle: "Decision-Support Tool",
    description:
      "Classifies releases and generates platform-aware messaging for product teams.",
    link: "#",
    linkText: "View Tool →",
  },
  {
    type: "Podcast",
    title: "The DBE Show",
    subtitle: "Founder Conversations",
    description:
      "Long-form conversations about pivots, hard parts, and the real story.",
    link: "https://youtu.be/6mKBuUlLWXk?si=GVcVARUbY6T2Hw9x",
    linkText: "Watch on YouTube →",
    external: true,
  },
  {
    type: "Research",
    title: "NLP Research",
    subtitle: "Human vs Machine Text",
    description:
      "RoBERTa + clustering. Optimized for interpretability over accuracy.",
    link: "#",
    linkText: "Read Paper →",
  },
];

export const ProjectsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="projects" className="bg-cream py-20 px-6 md:px-16">
      <div className="max-w-[950px] mx-auto" ref={ref}>
        <SectionHeader number="03" label="Projects" />

        <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6 fade-up">
          Things I've Built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card project-card-accent bg-card rounded-xl p-6 relative overflow-hidden hover-lift fade-up hover-target"
            >
              <p className="text-[0.55rem] font-semibold uppercase tracking-[0.1em] text-foreground-muted mb-2">
                {project.type}
              </p>
              <h3 className="font-serif text-base md:text-lg font-medium mb-0.5">
                {project.title}
              </h3>
              <p className="text-xs text-primary mb-2">{project.subtitle}</p>
              <p className="text-xs text-foreground-light leading-relaxed mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
                className="text-xs font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                {project.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
