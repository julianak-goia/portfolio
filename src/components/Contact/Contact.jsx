"use client";

// import { useLanguage } from '@/i18n/LanguageContext';
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "phosphor-react";

const socialLinks = [
  {
    icon: GithubLogo,
    href: "https://github.com/julianak-goia",
    label: "GitHub",
  },
  {
    icon: LinkedinLogo,
    href: "https://www.linkedin.com/in/juliana-goia/",
    label: "LinkedIn",
  },
  {
    icon: EnvelopeSimple,
    href: "mailto:goia.julianakg@gmail.com",
    label: "Twitter",
  },
];

export const Contact = () => {
  //   const { t } = useLanguage();
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal();
  const { ref: ctaRef, isRevealed: ctaRevealed } = useScrollReveal();
  const { ref: socialRef, isRevealed: socialRevealed } = useScrollReveal();

  return (
    <section id="contact" className="py-24 container">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div
            ref={titleRef}
            className={`scroll-reveal ${titleRevealed ? "revealed" : ""}`}
          >
            <h2 className="section-title">
              <span className="text-gradient font-semibold text-3xl">
                Contato
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Vamos trabalhar juntos?
            </p>
          </div>

          {/* Email CTA */}
          {/* <div
            ref={ctaRef}
            className={`scroll-reveal-scale ${ctaRevealed ? "revealed" : ""}`}
          >
            <a
              href="mailto:goia.julianakg@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:glow transition-all duration-300 hover:scale-105 mb-12"
            >
              <Mail size={20} />
              <span>goia.julianakg@gmail.com</span>
              <Send size={18} />
            </a>
          </div> */}

          {/* Social Links */}
          <div
            ref={socialRef}
            className={`scroll-reveal ${socialRevealed ? "revealed" : ""}`}
          >
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <div
                    className="p-4 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary hover:glow transition-all duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <social.icon size={24} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
