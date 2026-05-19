import { useEffect, useState } from "react";
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
import { PrivacyPolicy } from "./components/PrivacyPolicy";

function getRoute() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const path = window.location.pathname.replace(base, "") || "/";
  if (path.startsWith("/privacy")) return "privacy";
  return "home";
}

function App() {
  const [route, setRoute] = useState<"home" | "privacy">(() =>
    typeof window === "undefined" ? "home" : (getRoute() as "home" | "privacy"),
  );

  useEffect(() => {
    const onPop = () => setRoute(getRoute() as "home" | "privacy");
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {route === "privacy" ? (
        <main>
          <PrivacyPolicy />
        </main>
      ) : (
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
      )}
      <Footer />
    </div>
  );
}

export default App;
