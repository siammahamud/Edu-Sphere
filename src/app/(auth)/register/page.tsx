"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  return (
    <div className=" flex min-h-screen items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background shape */}
      <motion.div
        className="size-[500px] absolute bg-indigo-500"
        initial={{ borderRadius: "500px 0 0 0", top: 0, left: 0 }}
        animate={{
          borderRadius: isLoginClicked ? "500px 0 0 0" : "0 0 500px 0",
          scaleX: isLoginClicked ? 3 : 1,
          width:"40%",
          top: isLoginClicked ? "55%" : "0%",
          left: isLoginClicked ? "82%" : "0%",
          translateX: isLoginClicked ? "-50%" : "0%",
          translateY: isLoginClicked ? "-50%" : "0%",
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div className="text-white w-full h-full flex flex-col justify-center items-center">
          <h2 className="text-6xl">JOIN US</h2>
          <p className="text-2xl">World Best LMS platform</p>
        </div>
      </motion.div>

      {/* Signup/Login form */}
      <motion.div
        className="max-w-md w-full py-4 px-8 bg-blue-200 shadow-xl rounded-2xl absolute top-[10%] right-[15%]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          {isLoginClicked ? "LOGIN" : "SIGN UP"}
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="btn-primary w-full ">
            {isLoginClicked ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          {isLoginClicked ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLoginClicked(!isLoginClicked)}
            className="text-blue-600 hover:underline"
          >
            {isLoginClicked ? "Sign Up" : "Login"}
          </button>
        </p>

        {/* Social login options */}
        <div className="flex items-center my-4 ">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex gap-4 justify-center mt-4 text-2xl">
          <button className="p-2 cursor-pointer flex-grow bg-blue-200 hover:bg-blue-400 rounded-full flex justify-center items-center">
            <FaGoogle className="text-red-500" />
          </button>
          <button className="p-2 cursor-pointer flex-grow bg-blue-200 hover:bg-blue-400 rounded-full flex justify-center items-center">
            <FaFacebook className="text-blue-600" />
          </button>
          <button className="p-2 cursor-pointer flex-grow bg-blue-200 hover:bg-blue-400 rounded-full flex justify-center items-center">
            <FaGithub className="text-gray-800" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
