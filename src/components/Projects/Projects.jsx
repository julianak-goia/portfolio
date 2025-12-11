"use client";
// import { useLanguage } from '@/i18n/LanguageContext';
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Github, Folder } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    description: {
      pt: "Plataforma completa de e-commerce com carrinho, pagamentos e dashboard admin.",
      en: "Complete e-commerce platform with cart, payments, and admin dashboard.",
      ja: "カート、決済、管理ダッシュボードを備えた完全なeコマースプラットフォーム。",
    },
    tech: ["React", "JavaScript", "Tailwind", "Node.js"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/images/lean-learn.png",
  },
  {
    title: "Task Management App",
    description: {
      pt: "Aplicativo de gerenciamento de tarefas com drag and drop e colaboração em tempo real.",
      en: "Task management app with drag and drop and real-time collaboration.",
      ja: "ドラッグアンドドロップとリアルタイムコラボレーションを備えたタスク管理アプリ。",
    },
    tech: ["React", "Redux", "Socket.io", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/images/teyaus.png",
  },
  {
    title: "Weather Dashboard",
    description: {
      pt: "Dashboard de previsão do tempo com gráficos interativos e geolocalização.",
      en: "Weather forecast dashboard with interactive charts and geolocation.",
      ja: "インタラクティブなチャートと位置情報を備えた天気予報ダッシュボード。",
    },
    tech: ["Next.js", "JavaScript", "Chart.js", "API"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/images/figa-marcenaria.png",
  },
  {
    title: "Social Media Clone",
    description: {
      pt: "Clone de rede social com feed, posts, likes e sistema de seguir.",
      en: "Social media clone with feed, posts, likes, and follow system.",
      ja: "フィード、投稿、いいね、フォローシステムを備えたソーシャルメディアクローン。",
    },
    tech: ["React", "Firebase", "Tailwind", "Zustand"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/images/gradient4.png",
  },
];

// const ProjectCard = ({ project, language, index }) => {
//   const { ref, isRevealed } = useScrollReveal({ threshold: 0.1 });

//   return (
//     <article
//       ref={ref}
//       className={`group p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 scroll-reveal ${
//         isRevealed ? "revealed" : ""
//       }`}
//       style={{ transitionDelay: `${index * 100}ms` }}
//     >
//       <div className="flex items-start justify-between mb-4">
//         <Folder className="text-primary" size={40} />
//         <div className="flex gap-3">
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-muted-foreground hover:text-primary transition-colors"
//             aria-label="GitHub"
//           >
//             <Github size={20} />
//           </a>
//           <a
//             href={project.live}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-muted-foreground hover:text-primary transition-colors"
//             aria-label="Live demo"
//           >
//             <ExternalLink size={20} />
//           </a>
//         </div>
//       </div>

//       <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
//         {project.title}
//       </h3>

//       <p className="text-muted-foreground mb-6 leading-relaxed">
//         {project.description[language]}
//       </p>

//       <div className="flex flex-wrap gap-2">
//         {project.tech.map((tech) => (
//           <span
//             key={tech}
//             className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
//     </article>
//   );
// };

export const Projects = () => {
  //   const { t, language } = useLanguage();

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
          <span className="font-semibold text-3xl">Projetos</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          Alguns trabalhos que participei
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
                      className="object-contain rounded-2xl"
                    />
                  </CardContent>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description[language]}
                  </p> */}

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink size={20} />
                  </a>

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
