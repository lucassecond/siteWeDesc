import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import { Partners } from "@/components/Partners";
import { About } from "@/components/About"; 
import { TeamWeDesc } from "@/components/TeamWeDesc";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="transition-hero-cards">
      <Hero />
      <Cards />
      <Partners />
      <About /> 
      <TeamWeDesc />
      <Footer />
    </main>
  );
}
