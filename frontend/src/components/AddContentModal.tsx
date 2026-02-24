import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Youtube,
  FileText,
  ChevronDown,
  Link as LinkIcon,
  Type,
  X,
  Sparkles,
  AlignLeft,
} from "lucide-react";

type ContentType = "youtube" | "notes";

const AddContentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentType, setContentType] = useState<ContentType>("youtube");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={toggleModal}
        className="flex items-center justify-center gap-2 bg-[#f8961e] text-white p-2.5 sm:px-5 sm:py-2.5 rounded-2xl font-bold shadow-lg shadow-orange-200/50 hover:bg-opacity-90 transition-all"
      >
        <Plus size={20} strokeWidth={3} />
        <span className="hidden sm:block text-sm">Add Content</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md bg-white rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden p-6 sm:p-8"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-orange-50 rounded-lg text-[#f8961e]">
                    <Sparkles size={18} fill="currentColor" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800">
                    New Insight
                  </h2>
                </div>
                <button
                  onClick={toggleModal}
                  className="p-2 bg-slate-100 rounded-full text-slate-400 hover:text-slate-600"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                {/* 1. Capture Type Dropdown */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                    Type
                  </label>
                  <div className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full flex items-center justify-between bg-slate-50 border-2 border-transparent px-4 py-3 rounded-2xl"
                    >
                      <div className="flex items-center gap-3">
                        {contentType === "youtube" ? (
                          <Youtube size={20} className="text-red-500" />
                        ) : (
                          <FileText size={20} className="text-[#f8961e]" />
                        )}
                        <span className="font-bold text-slate-700">
                          {contentType === "youtube" ? "YouTube" : "Note"}
                        </span>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`text-slate-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 5 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="absolute z-10 w-full bg-white border border-slate-100 rounded-2xl shadow-xl p-1.5"
                        >
                          <button
                            onClick={() => {
                              setContentType("youtube");
                              setIsDropdownOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50"
                          >
                            <Youtube size={18} className="text-red-500" />{" "}
                            <span className="font-semibold text-sm">
                              YouTube Video
                            </span>
                          </button>
                          <button
                            onClick={() => {
                              setContentType("notes");
                              setIsDropdownOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50"
                          >
                            <FileText size={18} className="text-[#f8961e]" />{" "}
                            <span className="font-semibold text-sm">
                              Personal Note
                            </span>
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* 2. Common Title Field */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                    Title
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300">
                      <Type size={18} />
                    </div>
                    <input
                      type="text"
                      placeholder="Title..."
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border-2 border-transparent focus:border-[#f8961e] rounded-2xl outline-none transition-all text-base sm:text-sm"
                    />
                  </div>
                </div>

                {/* 3. Dynamic Field */}
                <AnimatePresence mode="wait">
                  {contentType === "youtube" ? (
                    <motion.div
                      key="yt"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                        Link
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300">
                          <LinkIcon size={18} />
                        </div>
                        <input
                          type="url"
                          placeholder="https://..."
                          className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border-2 border-transparent focus:border-red-500 rounded-2xl outline-none text-base sm:text-sm"
                        />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="nt"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                        Content
                      </label>
                      <div className="relative">
                        <div className="absolute top-4 left-4 pointer-events-none text-slate-300">
                          <AlignLeft size={18} />
                        </div>
                        <textarea
                          placeholder="Write..."
                          rows={4}
                          className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border-2 border-transparent focus:border-[#f8961e] rounded-2xl outline-none resize-none text-base sm:text-sm"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all mt-2 active:scale-95">
                  Add to Brain
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddContentModal;
