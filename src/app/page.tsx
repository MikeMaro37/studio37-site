import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { FeaturedCase } from "@/components/sections/FeaturedCase";
import { Work } from "@/components/sections/Work";
import { Capabilities } from "@/components/sections/Capabilities";
import { Tools } from "@/components/sections/Tools";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <Statement />
        <FeaturedCase />
        <Work />
        <Capabilities />
        <Tools />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}