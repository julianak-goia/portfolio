import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/pt"); // troque para o seu defaultLocale
}
