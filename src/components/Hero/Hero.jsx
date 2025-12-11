// import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import AnimatedOrb from "../AnimatedOrb/AnimatedOrb";
import Image from "next/image";

export const Hero = () => {
  // const { t } = useLanguage();

  return (
    <section className="bg-gray-100 w-full">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-6 min-h-screen relative">
        <div>
          <p
            className="font-semibold text-lg mb-4 animate-fade-up opacity-0"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            👋 Olá, eu sou
          </p>

          <h1
            className="text-4xl md:text-7xl lg:text-7xl font-display font-bold mb-6 animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <span className="text-gradient">Juliana Goia</span>
          </h1>

          <h2
            className="text-2xl md:text-3xl lg:text-3xl text-muted-foreground font-display mb-8 animate-fade-up opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Desenvolvedora Frontend
          </h2>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Aplico minha experiência em código e UI Design para criar soluções
            digitais com foco em acessibilidade, performance e design moderno.
          </p>
          {/* <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up opacity-0"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          Do código ao design, aplico minha experiência em HTML, CSS, JavaScript
          e UI/UX para criar soluções digitais completas. Busco sempre o
          equilíbrio entre funcionalidade, estética e experiência, garantindo
          que cada projeto seja útil e envolvente.
        </p> */}

          {/* <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up opacity-0"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:glow transition-all duration-300 hover:scale-105"
          >
            hero.cta
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:bg-secondary transition-all duration-300"
          >
            hero.contact
          </a>
        </div> */}

          {/* Social Links */}
          {/* <div
          className="flex items-center justify-center gap-6 animate-fade-up opacity-0"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:email@example.com"
            className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
          >
            <Mail size={24} />
          </a>
        </div> */}
        </div>
        {/* Right Content - Photo with Orb */}
        <div
          className="flex items-center justify-center relative animate-fade-up opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          {/* Animated Orb */}
          <AnimatedOrb />

          {/* Profile Photo Placeholder */}
          <div className="relative z-10 w-[280px] h-[350px] md:w-[350px] md:h-[420px] lg:w-[400px] lg:h-[600px]">
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              {/* Replace this div with your actual photo  */}
              <Image
                src="/images/villager3.png"
                alt="profilepic"
                fill
                className="object-contain rounded-2xl"
              />
              {/* <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-4xl">📷</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Adicione sua foto aqui
                </p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};
