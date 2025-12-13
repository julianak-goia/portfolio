import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/routing";

const middleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

// eslint-disable-next-line import/no-anonymous-default-export
export default function (request) {
  console.log("Middleware executado:", request.nextUrl.pathname);
  return middleware(request);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
