// src/app/[locale]/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SUPPORTED_LOCALES = ["pt", "en", "jp"]; // ajuste pro seu projeto

export default async function RootLayout({ children, params }) {
  // ✅ Next 16: params pode ser Promise
  const { locale } = await params;

  if (!SUPPORTED_LOCALES.includes(locale)) notFound();

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider
          key={locale}
          locale={locale}
          messages={messages}
        >
          <Theme>{children}</Theme>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
