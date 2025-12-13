"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../../../i18n/routing";
import { useTransition } from "react";
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

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (nextLocale) => {
    if (nextLocale === locale) return;

    startTransition(() => {
      const localeRegex = new RegExp(
        `^/(?:${LOCALES.map((l) => l.value).join("|")})(?=/|$)`
      );
      const cleanedPathname = pathname.replace(localeRegex, "");
      router.replace(cleanedPathname || "/", { locale: nextLocale });
    });
  };

  return (
    <Select value={locale} onValueChange={handleChange} disabled={isPending}>
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
