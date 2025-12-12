"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LOCALES = [
  { value: "pt", label: "PT" },
  { value: "en", label: "EN" },
  { value: "jp", label: "JP" },
];

function replaceLocaleInPath(pathname, nextLocale) {
  const path = pathname || "/";
  const parts = path.split("/");

  if (parts.length > 1 && LOCALES.some((l) => l.value === parts[1])) {
    parts[1] = nextLocale;
    return parts.join("/") || "/";
  }

  return `/${nextLocale}${path.startsWith("/") ? "" : "/"}${path}`;
}

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (nextLocale) => {
    if (nextLocale === locale) return;
    const nextPath = replaceLocaleInPath(pathname, nextLocale);
    router.push(nextPath);
  };

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-20 h-9">
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {LOCALES.map((l) => (
          <SelectItem key={l.value} value={l.value}>
            {l.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
