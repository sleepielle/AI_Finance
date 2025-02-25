import Image from "next/image";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Features from "@/components/features";
import Works from "@/components/works";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <div className="top-96">
      <Hero />
      <Stats />
      <Features />
      <Works />
      <Testimonials />
      <CTA />
    </div>
  );
}
