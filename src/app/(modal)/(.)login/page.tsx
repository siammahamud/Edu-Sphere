"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SignInModal: React.FC<{ onClose: () => void }> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleOverlayClick = () => {
    router.back();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 w-[100vw] h-screen"
      onClick={handleOverlayClick}
    >
      <motion.div
        className="relative bg-gray-200 p-1 rounded-xl shadow-lg w-[90%] max-w-[700px] overflow-hidden"
        initial={{ scale: 0.8, opacity: 0, y: -50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        onClick={(e) => e.stopPropagation()} // IMPORTANT
      >
        {/* Close Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="flex w-full shadow-xl">
          <motion.div className="bg-red-500 text-white flex justify-center items-center w-[50%] rounded-l-xl p-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl font-bold">Welcome</h1>
              <p className="text-gray-300">
                Please enter your credentials to login
              </p>
            </div>
          </motion.div>

          <motion.div className="w-[50%] bg-blue-200 p-6 rounded-r-xl">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-5">
              LOGIN
            </h2>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button className="btn-primary w-full">Log In</button>
            </form>

            <p className="text-center text-gray-500 mt-4">
              Don't have an account?
              <button className="text-blue-600 hover:underline px-5 cursor-pointer">
                Sign Up
              </button>
            </p>

            <div className="flex items-center my-2">
              <div className="flex-grow border-t border-gray-800"></div>
              <span className="mx-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-800"></div>
            </div>

            <div className="flex gap-4 justify-center mt-2 text-2xl">
              <button className="p-2 flex-grow bg-blue-200 hover:bg-blue-400 rounded-full flex justify-center items-center">
                <FaGoogle className="text-red-500" />
              </button>
              <button className="p-2 flex-grow bg-blue-200 hover:bg-blue-400 rounded-full flex justify-center items-center">
                <FaFacebook className="text-blue-600" />
              </button>
              <button className="p-2 flex-grow bg-blue-200 hover:bg-blue-400 rounded-full flex justify-center items-center">
                <FaGithub className="text-gray-800" />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignInModal;
