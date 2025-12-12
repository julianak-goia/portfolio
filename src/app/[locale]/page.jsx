import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Navbar } from "@/components/Navbar/Navbar";
import { Projects } from "@/components/Projects/Projects";
import { Skills } from "@/components/Skills/Skills";
import "@radix-ui/themes/styles.css";

export default function Home() {
  return (
    // container mx-auto
    <div className="flex flex-col min-h-screen items-center justify-center">
      {/* <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-32 px-16 sm:items-start ">
         </main> */}
      <Navbar />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
