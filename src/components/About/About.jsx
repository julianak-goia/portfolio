"use client";

import { GithubLogo, LinkedinLogo } from "phosphor-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Image from "next/image";

const socialLinks = [
  {
    icon: GithubLogo,
    href: "https://github.com/julianak-goia",
    label: "GitHub",
    link: "/julianak-goia",
  },
  {
    icon: LinkedinLogo,
    href: "https://www.linkedin.com/in/juliana-goia/",
    label: "LinkedIn",
    link: "/juliana-goia",
  },
];

export const About = () => {
  const t = useTranslations("about");
  const { ref: imageRef, isRevealed: imageRevealed } = useScrollReveal();
  const { ref: textRef, isRevealed: textRevealed } = useScrollReveal();

  return (
    <section id="about" className="max-w-6xl mx-auto py-24 relative">
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
            {socialLinks.map((social, index) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <div
                  className="flex items-center gap-2"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <social.icon className="text-gray-400" size={26} />
                  <p className="font-semibold text-gray-400">{social.link}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
