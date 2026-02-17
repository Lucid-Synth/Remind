import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  return (
    <section className="px-6 pt-20 pb-32 max-w-7xl mx-auto text-center">
      <motion.div {...fadeIn}>
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wide text-[#f8961e] rounded-full">
          INTRODUCING REMIND 1.0
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
          Build your <span className="text-[#f8961e]">digital brain</span>{" "}
          <br />
          for notes and videos.
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop losing track of great ideas. Remind helps you capture insights
          from YouTube and your own thoughts in one organized space.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={'/register'}>
            <button className="w-full sm:w-auto px-8 py-4 bg-[#f8961e] text-white rounded-2xl font-bold text-lg shadow-lg shadow-orange-200 hover:scale-103 transition-all flex items-center justify-center gap-2">
            Get Started Free <ArrowRight size={20} />
          </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
