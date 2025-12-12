// import { NextResponse } from "next/server";
// import { Locale, i18n } from "next-intl";

// // Lista de idiomas suportados
// const SUPPORTED_LANGUAGES = ["pt", "en", "jp"];

// // Função para definir o locale e redirecionar a URL para o formato correto
// export function proxy(request) {
//   const { pathname, searchParams } = new URL(request.url);
//   const locale = pathname.split("/")[1]; // ex: /pt/about ou /en/contact

//   // Se o idioma não for um dos suportados, redireciona para o idioma padrão (pt)
//   if (!SUPPORTED_LANGUAGES.includes(locale)) {
//     const defaultLocale = "pt"; // ou pt, caso queira definir outro como padrão
//     const url = pathname.replace(`/${locale}`, `/${defaultLocale}`);
//     return NextResponse.redirect(url);
//   }

//   // Se estiver tudo certo com o locale, retorna a requisição normalmente
//   return NextResponse.next();
// }

// // Define o padrão de i18n para a aplicação
// export const config = {
//   matcher: ["/pt", "/en", "/jp"], // Qualquer rota que inclua o locale
// };

import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/routing";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
