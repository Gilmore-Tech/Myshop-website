import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { EarnIncome } from "./components/EarnIncome";
import { Safety } from "./components/Safety";
import { DownloadApp } from "./components/DownloadApp";
import { Waitlist } from "./components/Waitlist";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <EarnIncome />
        <Safety />
        <DownloadApp />
        <Waitlist />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
