"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex w-[100vw] bg-gray-200 min-h-screen items-center justify-center p-6  overflow-hidden">
      {/* Animated background shape */}
      <div className="flex h-[80vh] w-[700px] shadow-xl relative bg-transparent ">
        <motion.div
          className="bg-red-500 text-white flex justify-center items-center h-full w-[50%] rounded-tl-xl rounded-bl-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <div className="bg-red-500 text-white flex justify-center items-center h-full w-[50%] rounded-tl-xl rounded-bl-xl"> */}
          <div className="flex gap-2 flex-col justify-center items-center">
            <h1 className="text-4xl font-bold ">Wellcome</h1>
            <p className="text-center text-gray-300">
              Please enter your email and <br />
              password to login
            </p>
          </div>
          {/* </div> */}
        </motion.div>
        {/* Signup/Login form */}
        <motion.div
          className="max-w-md w-[50%] py-4 px-8  rounded-tr-xl rounded-br-xl  bg-blue-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 my-5">
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
            <button className="btn-primary w-full ">Log In</button>
          </form>
          <p className="text-center text-gray-500 mt-4">
            Don't have an account.
            <button className="text-blue-600 hover:underline px-5 cursor-pointer">
              Sign Up
            </button>
          </p>

          {/* Social login options */}
          <div className="flex items-center my-2 ">
            <div className="flex-grow border-t border-gray-800"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-800"></div>
          </div>

          <div className="flex gap-4 justify-center mt-2 text-2xl">
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
    </div>
  );
};

export default SignIn;
