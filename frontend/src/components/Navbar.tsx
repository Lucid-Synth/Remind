import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <div className="bg-[#f8961e] p-2 rounded-xl text-white shadow-lg shadow-orange-200">
          <Sparkles size={24} fill="currentColor" />
        </div>
        <span className="text-2xl font-bold tracking-tight">Remind</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#features" className="hover:text-[#f8961e] transition-colors">
          Features
        </a>
        <a href="#workflow" className="hover:text-[#f8961e] transition-colors">
          Workflow
        </a>
      </div>
      <Link to={'/login'}>
        <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all">
        Sign In
      </button>
      </Link>
    </nav>
  );
}

export default Navbar;
