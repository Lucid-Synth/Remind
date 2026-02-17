import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Action from "../components/Action";
import Footer from "../components/Footer";

const Home = () => {
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
