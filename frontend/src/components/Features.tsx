import { motion } from "framer-motion";
import { FileText, Search, Youtube } from "lucide-react";

function Features() {
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      id="features"
      className="px-6 py-24 bg-white border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Engineered for focus.</h2>
          <p className="text-slate-500">
            Everything you need to capture knowledge, nothing you don't.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Feature 1 */}
          <motion.div
            variants={fadeIn}
            className="p-8 rounded-3xl bg-slate-50 hover:bg-orange-50/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
              <Youtube className="text-[#f8961e]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Video Insights</h3>
            <p className="text-slate-600 leading-relaxed">
              Save YouTube videos and timestamp key moments directly into your
              knowledge base.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            variants={fadeIn}
            className="p-8 rounded-3xl bg-slate-50 hover:bg-orange-50/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
              <FileText className="text-[#f8961e]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Rich Notes</h3>
            <p className="text-slate-600 leading-relaxed">
              A minimalist markdown editor that lets your thoughts flow without
              friction.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            variants={fadeIn}
            className="p-8 rounded-3xl bg-slate-50 hover:bg-orange-50/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
              <Search className="text-[#f8961e]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Instant Search</h3>
            <p className="text-slate-600 leading-relaxed">
              Find any note or video in milliseconds. Your second brain never
              forgets.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
