"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Sparkles } from "lucide-react";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Logic for creating a Remind account goes here
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen bg-white sm:bg-[#fafafa] flex flex-col justify-center py-10"
      >
        <div className="w-full max-w-110 mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="px-6 text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#f8961e] text-white shadow-xl shadow-orange-200/50 mb-6">
              <Sparkles size={28} fill="currentColor" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Remind
            </h1>
            <p className="mt-4 text-[#6b9080] text-xl font-semibold">
              Start your second brain
            </p>
          </motion.div>

          {/* Signup Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white sm:shadow-sm sm:border sm:border-gray-200 sm:rounded-3xl p-6 sm:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 ml-1 mb-1.5">
                  Full Name
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#f8961e] transition-colors">
                    <User size={20} strokeWidth={2.2} />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="block w-full pl-12 pr-4 py-3.5 bg-gray-50 border-transparent border-2 rounded-2xl focus:bg-white focus:border-[#f8961e] focus:ring-4 focus:ring-orange-50 transition-all outline-none text-gray-900"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 ml-1 mb-1.5">
                  Email
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#f8961e] transition-colors">
                    <Mail size={20} strokeWidth={2.2} />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    className="block w-full pl-12 pr-4 py-3.5 bg-gray-50 border-transparent border-2 rounded-2xl focus:bg-white focus:border-[#f8961e] focus:ring-4 focus:ring-orange-50 transition-all outline-none text-gray-900"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 ml-1 mb-1.5">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#f8961e] transition-colors">
                    <Lock size={20} strokeWidth={2.2} />
                  </div>
                  <input
                    type="password"
                    required
                    placeholder="Min. 8 characters"
                    className="block w-full pl-12 pr-4 py-3.5 bg-gray-50 border-transparent border-2 rounded-2xl focus:bg-white focus:border-[#f8961e] focus:ring-4 focus:ring-orange-50 transition-all outline-none text-gray-900"
                  />
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center py-4 px-6 bg-[#f8961e] text-white rounded-2xl font-bold text-lg shadow-lg shadow-orange-200/60 hover:opacity-95 transition-all disabled:opacity-50 mt-4"
              >
                {isLoading ? (
                  <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Create Account{" "}
                    <ArrowRight size={20} className="ml-2" strokeWidth={2.5} />
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col items-center gap-4">
              <p className="text-sm text-gray-500 font-medium">
                Already have an account?
              </p>
              <button className="w-full py-3 px-6 border-2 border-gray-200 rounded-2xl text-gray-700 font-bold hover:bg-gray-50 hover:border-gray-300 transition-all">
                Sign In to Remind
              </button>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-center text-xs text-gray-400 px-6 leading-relaxed"
          >
            By creating an account, you agree to our Terms of Service. <br />
            Capture. Connect. Remember.
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Register;
