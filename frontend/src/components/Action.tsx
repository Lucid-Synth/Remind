import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

function Action() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto" id="workflow">
      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f8961e] opacity-10 blur-[100px] -mr-32 -mt-32"></div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
          Ready to organize your mind?
        </h2>
        <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-xl mx-auto">
          Join students and developers using Remind to supercharge their
          learning workflow.
        </p>
        <Link to="/register" className="inline-block">
          <button className="group bg-[#f8961e] text-white flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm">
            Get Started
            <ArrowRight
              size={16}
              className="sm:w-5 sm:h-5"
              strokeWidth={2.5}
            />
          </button>
        </Link>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-slate-400 text-sm font-medium">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-[#f8961e]" /> No credit card
            required
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-[#f8961e]" /> Sync across
            devices
          </span>
        </div>
      </div>
    </section>
  );
}

export default Action;
