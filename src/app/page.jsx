import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import IntroCards from "@/components/IntroCards";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="container">
      <Hero/>
      <IntroCards/>
      <Featured/>
      <Banner/>
      <Testimonials/>
      <FAQ/>
    </div>
  );
}
