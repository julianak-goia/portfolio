"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Github, Folder } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    key: "leanLearn",
    title: "Lean Learn",
    tech: ["Vue.js", "Nuxt.js", "JavaScript", "Bootstrap", "Laravel"],
    github: "https://github.com",
    live: "https://leanlearn.com.br/",
    image: "/images/lean-responsive.jpg",
  },
  {
    key: "teya",
    title: "Teya✱",
    tech: ["HTML", "Javascript", "CSS", "PHP"],
    github: "https://github.com",
    live: "https://teya.us/",
    image: "/images/teya-responsive.jpg",
  },
  {
    key: "figaMarcenaria",
    title: "Figa Marcenaria",
    tech: ["HTML", "Javascript", "CSS", "PHP"],
    github: "https://github.com",
    live: "https://www.figamarcenaria.com.br/",
    image: "/images/figa-responsive.jpg",
  },
  {
    key: "viatech",
    title: "Viatech",
    tech: ["React", "Next.js", "Tailwind", "Laravel"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/images/viatech-ipad.png",
  },
];

export const Projects = () => {
  const t = useTranslations("projects");

  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal();

  return (
    <section id="projects" className="container py-24 w-full">
      <div
        ref={titleRef}
        className={`text-center scroll-reveal ${
          titleRevealed ? "revealed" : ""
        }`}
      >
        <h2 className="section-title">
          <span className="font-semibold text-3xl">{t("title")}</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          {t("subtitle")}
        </p>
      </div>

      {/* carousel */}

      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.title}>
              <div className="p-1">
                <Card className="p-6 border-0 shadow-md">
                  <CardContent className="relative h-[600px] p-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </CardContent>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t(`items.${project.key}.description`)}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
