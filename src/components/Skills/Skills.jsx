"use client";
// import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
  { name: "React", level: 90, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Git", level: 85, category: "tools" },
  { name: "Figma", level: 75, category: "design" },
  { name: "REST APIs", level: 85, category: "backend" },
  { name: "Vue.js", level: 70, category: "frontend" },
];

const SkillCard = ({ skill, index }) => {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`group relative p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 scroll-reveal-scale ${
        isRevealed ? "revealed" : ""
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="text-center">
        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {skill.name}
        </span>

        {/* Skill level indicator */}
        <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500 group-hover:glow"
            style={{ width: isRevealed ? `${skill.level}%` : "0%" }}
          />
        </div>
        <span className="text-xs text-muted-foreground mt-1 block">
          {skill.level}%
        </span>
      </div>
    </div>
  );
};

export const Skills = () => {
  //   const { t } = useLanguage();
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal();

  return (
    <section id="skills" className="w-full py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div
            ref={titleRef}
            className={`text-center scroll-reveal ${
              titleRevealed ? "revealed" : ""
            }`}
          >
            <h2 className="section-title">
              <span className="text-gradient">skills.title</span>
            </h2>
            <p className="text-muted-foreground mb-12">skills.subtitle</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
