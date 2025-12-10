"use client";

// import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2, Palette, Zap } from "lucide-react";

export const About = () => {
  //   const { t } = useLanguage();
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal();
  const { ref: imageRef, isRevealed: imageRevealed } = useScrollReveal();
  const { ref: textRef, isRevealed: textRevealed } = useScrollReveal();

  const highlights = [
    { icon: Code2, title: "Clean Code", color: "text-primary" },
    { icon: Palette, title: "UI/UX Design", color: "text-primary" },
    { icon: Zap, title: "Performance", color: "text-primary" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <h2
        ref={titleRef}
        className={`section-title text-center scroll-reveal ${
          titleRevealed ? "revealed" : ""
        }`}
      >
        <span className="text-gradient">Sobre mim</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image/Avatar placeholder */}
        <div
          ref={imageRef}
          className={`relative scroll-reveal-left ${
            imageRevealed ? "revealed" : ""
          }`}
        >
          <div className="aspect-square rounded-2xl card-gradient border border-border overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
              <div className="w-30 h-30 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                <Code2 size={64} className="text-primary" />
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        </div>

        {/* Text content */}
        <div
          ref={textRef}
          className={`space-y-6 scroll-reveal-right ${
            textRevealed ? "revealed" : ""
          }`}
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sou um desenvolvedor frontend apaixonado por criar interfaces
            bonitas e funcionais. Com experiência em React, JavaScript e as mais
            modernas tecnologias web, transformo ideias em realidade digital.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Minha jornada no desenvolvimento começou há alguns anos, e desde
            então venho aprimorando minhas habilidades constantemente. Acredito
            que um bom código é aquele que é limpo, eficiente e fácil de manter.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estudo Sistemas de Informação e atuo há 1 ano com Front-end e UI/UX
            Design. Minha experiência me permite unir código e design para
            transformar ideias em interfaces digitais eficientes, claras e
            responsivas. Tenho como foco evoluir continuamente meus processos e
            conhecimentos em tecnologias como React e Next.js, sempre com o
            objetivo de criar soluções que fortalecem a presença digital de
            marcas e negócios.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <item.icon className={`mx-auto mb-2 ${item.color}`} size={28} />
                <span className="text-sm font-medium text-foreground">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
