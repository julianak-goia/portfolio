// import { useLanguage } from '@/i18n/LanguageContext';

export const Footer = () => {
  //   const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. footer.rights
          </p>
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-primary">♥</span> using React &
            JavaScript
          </p>
        </div>
      </div>
    </footer>
  );
};
