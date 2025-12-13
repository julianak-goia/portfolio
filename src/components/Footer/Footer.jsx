"use client";
import { useTranslations } from "next-intl";
export const Footer = () => {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-8 border-t border-border w-full">
      <footer className="max-w-6xl mx-auto ">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Portfolio.
            </p>
            <p className="text-sm text-muted-foreground">
              {t("text1")} <span className="text-primary">♥</span> {t("text2")}{" "}
              - React & JavaScript
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
