"use client";

// import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export const Contact = () => {
  //   const { t } = useLanguage();
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal();
  const { ref: ctaRef, isRevealed: ctaRevealed } = useScrollReveal();
  const { ref: socialRef, isRevealed: socialRevealed } = useScrollReveal();

  return (
    <section id="contact" className="py-24 w-full bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div
            ref={titleRef}
            className={`scroll-reveal ${titleRevealed ? "revealed" : ""}`}
          >
            <h2 className="section-title">
              <span className="text-gradient">contact.title</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              contact.subtitle
            </p>
            <p className="text-muted-foreground mb-12">contact.description</p>
          </div>

          {/* Email CTA */}
          <div
            ref={ctaRef}
            className={`scroll-reveal-scale ${ctaRevealed ? "revealed" : ""}`}
          >
            <a
              href="mailto:seuemail@example.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:glow transition-all duration-300 hover:scale-105 mb-12"
            >
              <Mail size={20} />
              <span>seuemail@example.com</span>
              <Send size={18} />
            </a>
          </div>

          {/* Social Links */}
          <div
            ref={socialRef}
            className={`scroll-reveal ${socialRevealed ? "revealed" : ""}`}
          >
            <p className="text-sm text-muted-foreground mb-4">contact.social</p>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary hover:glow transition-all duration-300"
                  aria-label={social.label}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
