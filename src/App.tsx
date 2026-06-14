import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { VisionMission } from "./components/VisionMission";
import { About } from "./components/About";
import { Brands } from "./components/Brands";
import { News } from "./components/News";
import { Careers } from "./components/Careers";
import { DownloadApp } from "./components/DownloadApp";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";
import { DeleteAccount } from "./components/DeleteAccount";
import { Support } from "./components/Support";

type Route = "home" | "privacy" | "terms" | "delete-account" | "support";

function getRoute(): Route {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const path = window.location.pathname.replace(base, "") || "/";
  if (path.startsWith("/privacy")) return "privacy";
  if (path.startsWith("/terms")) return "terms";
  if (path.startsWith("/delete-account")) return "delete-account";
  if (path.startsWith("/support")) return "support";
  return "home";
}

function App() {
  const [route, setRoute] = useState<Route>(() =>
    typeof window === "undefined" ? "home" : getRoute(),
  );

  useEffect(() => {
    const onPop = () => setRoute(getRoute());
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
      ) : route === "terms" ? (
        <main>
          <TermsOfService />
        </main>
      ) : route === "delete-account" ? (
        <main>
          <DeleteAccount />
        </main>
      ) : route === "support" ? (
        <main>
          <Support />
        </main>
      ) : (
        <main>
          <Hero />
          <VisionMission />
          <About />
          <Brands />
          <News />
          <Careers />
          <DownloadApp />
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
