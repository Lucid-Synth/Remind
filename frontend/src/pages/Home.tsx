import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Action from "../components/Action";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { Base_Url } from "../config/config";

const Home = () => {

  useEffect(() => {
    fetch(Base_Url, {
      method: "GET",
    }).catch((err) => {
      console.error("Warm-up request failed:", err);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-orange-100">
      <Navbar />
      <Hero />
      <Features />
      <Action />
      <Footer />
    </div>
  );
};

export default Home;
