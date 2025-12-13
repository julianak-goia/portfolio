import { createNavigation } from "next-intl/navigation";

export const locales = ["pt", "en", "jp"];
export const defaultLocale = "pt";

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  defaultLocale,
  localePrefix: "always",
});
