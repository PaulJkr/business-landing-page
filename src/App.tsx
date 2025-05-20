import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
