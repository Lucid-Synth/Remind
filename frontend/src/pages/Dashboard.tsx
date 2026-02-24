import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Youtube,
  FileText,
  ChevronDown,
  Check,
  ExternalLink,
} from "lucide-react";
import Logo from "../components/Logo";
import AddContentModal from "../components/AddContentModal";

type ContentType = "youtube" | "notes";

// Hardcoded initial data
const INITIAL_CONTENT = [
  {
    id: 1,
    type: "youtube",
    title: "React Design Patterns",
    link: "https://youtu.be/...",
    date: "2 mins ago",
  },
  {
    id: 2,
    type: "notes",
    title: "Grocery List",
    content: "Milk, Eggs, Bread, and Coffee beans for the week.",
    date: "1 hour ago",
  },
  {
    id: 3,
    type: "youtube",
    title: "Next.js 15 Tutorial",
    link: "https://youtu.be/...",
    date: "Yesterday",
  },
  {
    id: 4,
    type: "notes",
    title: "Project Idea",
    content: "A second brain app that syncs with YouTube timestamps.",
    date: "Oct 12",
  },
];

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<ContentType>("notes");

  const options = [
    {
      id: "notes",
      label: "Quick Notes",
      icon: FileText,
      color: "text-[#f8961e]",
    },
    {
      id: "youtube",
      label: "YouTube Videos",
      icon: Youtube,
      color: "text-red-500",
    },
  ];

  const currentOption = options.find((opt) => opt.id === selected);

  // Filter logic
  const filteredContent = INITIAL_CONTENT.filter(
    (item) => item.type === selected,
  );

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-4 md:px-6 md:py-6 max-w-7xl mx-auto w-full gap-2">
        <div className="shrink-0">
          <Logo />
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between bg-white border-2 border-gray-100 p-2.5 sm:px-4 sm:py-2.5 rounded-2xl hover:border-[#f8961e]/30 transition-all active:scale-[0.98] shadow-sm"
            >
              <div className="flex items-center gap-2">
                {currentOption && (
                  <currentOption.icon
                    size={20}
                    className={currentOption.color}
                  />
                )}
                <span className="hidden sm:block font-bold text-gray-700 text-sm">
                  {currentOption?.label}
                </span>
              </div>
              <motion.div
                className="hidden sm:block ml-1"
                animate={{ rotate: isOpen ? 180 : 0 }}
              >
                <ChevronDown size={14} className="text-gray-400" />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 5, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 z-20 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden p-1.5"
                  >
                    {options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => {
                          setSelected(option.id as ContentType);
                          setIsOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-3 rounded-xl transition-colors ${selected === option.id ? "bg-orange-50 text-[#f8961e]" : "text-gray-600 hover:bg-gray-50"}`}
                      >
                        <div className="flex items-center gap-3">
                          <option.icon size={18} />
                          <span className="font-bold text-sm">
                            {option.label}
                          </span>
                        </div>
                        {selected === option.id && (
                          <Check size={14} strokeWidth={3} />
                        )}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
          <AddContentModal />
        </div>
      </nav>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-800">
            {selected === "youtube" ? "Video Library" : "Your Thoughts"}
          </h2>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">
            {filteredContent.length} Items
          </span>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredContent.map((item) => (
              <ContentCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}

// Sub-component for the Cards
function ContentCard({ item }: { item: any }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="group bg-white border border-slate-100 rounded-4xl p-6 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all cursor-pointer relative flex flex-col justify-between min-h-45"
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <div
            className={`p-3 rounded-2xl ${item.type === "youtube" ? "bg-red-50 text-red-500" : "bg-orange-50 text-[#f8961e]"}`}
          >
            {item.type === "youtube" ? (
              <Youtube size={20} />
            ) : (
              <FileText size={20} />
            )}
          </div>
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter group-hover:text-slate-400">
            {item.date}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-800 leading-tight mb-2 group-hover:text-[#f8961e] transition-colors">
          {item.title}
        </h3>

        {item.content && (
          <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed">
            {item.content}
          </p>
        )}
      </div>

      {item.type === "youtube" && (
        <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-2 text-[#f8961e] text-xs font-bold">
          <ExternalLink size={14} />
          Watch Video
        </div>
      )}
    </motion.div>
  );
}

export default Dashboard;
