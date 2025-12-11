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
    title: "Lean Learn",
    description: {
      pt: "Plataforma LMS (Learning Management System). Permite a empresas e instituições de ensino criar, gerenciar, distribuir e monitorar cursos e treinamentos online. Essa plataforma digital organiza o conteúdo educacional, facilita o acesso dos alunos, permite aplicar avaliações, emitir certificados e acompanhar o progresso e desempenho dos usuários.",
      en: "LMS Platform (Learning Management System).It allows companies and educational institutions to create, manage, distribute, and monitor online courses and training programs. This digital platform organizes educational content, facilitates student access, enables the application of assessments, issues certificates, and tracks users’ progress and performance.",
      ja: "LMSプラットフォーム（Learning Management System／学習管理システム）。企業や教育機関がオンラインコースや研修を作成・管理・配信・監視できるしくみです。 このデジタルプラットフォームは教育コンテンツを整理し、学習者のアクセスを容易にし、テストの実施、証明書の発行、ユーザーの進捗やパフォーマンスの確認を可能にします。",
    },
    tech: ["Vue.js", "Nuxt.js", "JavaScript", "Bootstrap", "Laravel"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/images/lean-responsive.jpg",
  },
  {
    title: "Teya✱",
    description: {
      pt: "Site para a empresa Teya, uma plataforma que enfatiza cultura de aprendizagem contínua, conectando pessoas, ideias, conteúdos e ferramentas para cocriar soluções inovadoras para indivíduos e empresas.",
      en: "Website for Teya, a platform that emphasizes a culture of continuous learning, connecting people, ideas, content, and tools to co-create innovative solutions for individuals and companies.",
      ja: "テヤの企業サイトです。テヤは、継続的な学習文化を重視し、人やアイデア、コンテンツ、ツールをつなげて、個人や企業のために革新的なソリューションを共創するプラットフォームです。",
    },
    tech: ["HTML", "Javascript", "CSS", "PHP"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/images/teyaus.png",
  },
  {
    title: "Figa Marcenaria",
    description: {
      pt: "Site para a empresa que faz projetos e fabricação de móveis e artigos de decoração.",
      en: "Website for a company that designs and manufactures furniture and décor items.",
      ja: "家具やインテリア雑貨の設計・製造を行う会社のウェブサイトです。",
    },
    tech: ["HTML", "Javascript", "CSS", "PHP"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/images/figa-marcenaria.png",
  },
  {
    title: "Viatech",
    description: {
      pt: "Clone de rede social com feed, posts, likes e sistema de seguir.",
      en: "Social media clone with feed, posts, likes, and follow system.",
      ja: "フィード、投稿、いいね、フォローシステムを備えたソーシャルメディアクローン。",
    },
    tech: ["React", "Firebase", "Tailwind", "Zustand"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/images/viatech-ipad.png",
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
