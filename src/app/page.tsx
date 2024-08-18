import Image from "next/image";
import { Hero } from "./components/Hero";
import { ImprovementSection } from "./components/ImprovementSection";
import { NewsSection } from "./components/NewsSection";
import { NewsletterSection } from "./components/NewsletterSection";

export default function Home() {
  return (
    <main>
      <Hero/>
      <ImprovementSection/>
      <NewsSection/> 
      <NewsletterSection/>
    </main>
  );
}
