"use client";
import { useTranslations } from "next-intl";
import { ArrowDown } from "phosphor-react";
import AnimatedOrb from "../AnimatedOrb/AnimatedOrb";
import Image from "next/image";

export const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section className="bg-gray-100 w-full">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-6 min-h-screen relative">
        <div>
          <p
            className="font-semibold text-lg mb-4 animate-fade-up opacity-0"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            {t("hello")}
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
            {t("role")}
          </h2>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            {t("description")}
          </p>
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
