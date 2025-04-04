"use client";
import { useState } from "react";
import SocialLogin from "@/components/SocialLogin";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className=" flex min-h-screen items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background shape */}

      <div className="bg-blue-500 size-[500px] rounded-br-full absolute top-0 left-0">
        <div className="text-white w-full h-[50%] flex flex-col justify-center items-center">
          <h2 className="text-6xl">WELCOME BACK</h2>
          <p className="text-2xl">Login to your account</p>
        </div>
      </div>

      {/* Login form */}
      <div className="w-[400px] absolute top-10 right-[10%] bg-blue-300 p-5 rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 my-4">
          LOGIN
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 bg-white focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 bg-white focus:ring-blue-500 focus:outline-none"
          />
          <button className="btn-primary w-full cursor-pointer">Login</button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Don`t have an account?{" "}
          <button className="cursor-pointer text-blue-500 font-semibold">
            Sign Up
          </button>
        </p>

        {/* Social login options */}
        <SocialLogin />
      </div>
    </div>
  );
}
