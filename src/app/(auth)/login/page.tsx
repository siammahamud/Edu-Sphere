"use client";
import { useState } from "react";
import SocialLogin from "@/components/SocialLogin";
import credentialLogin from "../../../app/actions/index";
import { useRouter } from "next/navigation";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ✅ Fixed the event type
    setError(null); // Reset error
    try {
      const res = await credentialLogin(formData);
      if (res?.error) {
        setError(res.error); // or res.error.message if it's an Error object
      } else {
        router.push("/courses");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-6 relative overflow-hidden">
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 bg-white focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 bg-white focus:ring-blue-500 focus:outline-none"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button className="btn-primary w-full cursor-pointer">Login</button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Don’t have an account?{" "}
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
