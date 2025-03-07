import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import { Partners } from "@/components/Partners";
import { About } from "@/components/About"; 

export default function Home() {
  return (
    <main className="transition-hero-cards">
      <Hero />
      <Cards />
      <Partners />
      <About /> 
    </main>
  );
}
