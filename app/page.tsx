import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Experience from "@/components/Experience";
import FlagshipProject from "@/components/FlagshipProject";
import CommandCenter from "@/components/CommandCenter";
import GoogleAdsProject from "@/components/GoogleAdsProject";
import ZohoProject from "@/components/ZohoProject";
import AIAgentProject from "@/components/AIAgentProject";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Metrics />
      <Experience />
      <CommandCenter />
      <FlagshipProject />
      <GoogleAdsProject />
      <ZohoProject />
      <AIAgentProject />
      <GitHubSection />
      <Contact />
      <Footer />  
    </>
  );
}