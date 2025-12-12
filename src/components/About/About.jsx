"use client";

import { useTranslations } from "next-intl";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2, Palette, Zap } from "lucide-react";
import Image from "next/image";

export const About = () => {
  const t = useTranslations("about");
  // const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal();
  const { ref: imageRef, isRevealed: imageRevealed } = useScrollReveal();
  const { ref: textRef, isRevealed: textRevealed } = useScrollReveal();

  // const highlights = [
  //   { icon: Code2, title: "Clean Code", color: "text-primary" },
  //   { icon: Palette, title: "UI/UX Design", color: "text-primary" },
  //   { icon: Zap, title: "Performance", color: "text-primary" },
  // ];

  return (
    <section id="about" className="max-w-6xl mx-auto py-24 relative">
      {/* <h2
        ref={titleRef}
        className={`section-title text-center scroll-reveal ${
          titleRevealed ? "revealed" : ""
        }`}
      >
        <span className="text-gradient">Sobre mim</span>
      </h2> */}

      <div className="grid md:grid-cols-12 items-center">
        {/* Image/Avatar placeholder */}
        <div
          ref={imageRef}
          className={`relative scroll-reveal-left col-span-6 ${
            imageRevealed ? "revealed" : ""
          }`}
        >
          <div className="w-[500px] h-[700px] rounded-2xl">
            <div className="relative w-full h-full">
              <Image
                src="/images/juliana.jpg"
                alt="profile"
                fill
                className="object-cover rounded-2xl "
              />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div
          ref={textRef}
          className={`space-y-6 scroll-reveal-right col-span-6 ${
            textRevealed ? "revealed" : ""
          }`}
        >
          <h3 className="font-semibold text-xl">{t("greeting")}</h3>
          <div>
            <h1 className="text-3xl font-semibold">Juliana Kaori Goia</h1>
            <p className="text-lg">{t("role")}</p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("bio1")}
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("bio2")}
          </p>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6a7282"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github-icon lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>

              <p className="font-semibold text-gray-500">/julianak-goia</p>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6a7282"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <p className="font-semibold text-gray-500">juliana-goia</p>
            </div>
            {/* <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail-icon lucide-mail"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              <p className="font-semibold">goia.julianakg@gmail.com</p>
            </div> */}
          </div>

          {/* Highlights */}
          {/* <div className="grid grid-cols-3 gap-4 pt-6">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};
