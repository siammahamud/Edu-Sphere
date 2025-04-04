"use client";

import SocialLogin from "@/components/SocialLogin";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SignupFormProps {
  role?: string;
}

export default function SignupForm({ role = "student" }: SignupFormProps) {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (form.password !== form.confirmPassword) {
      setError("Password do not match");
    }
    try {
      setLoading(true);
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
          role: role == "student" || role == "instructor" ? role : "student",
        }),
      });

      if (response.status === 201) {
        router.push("/login");
      } else {
        const data = await response.json();
        setError(data.message || "registration failed..");
      }
    } catch (error: any) {
      setError(error.message || "something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[100%] h-screen flex justify-center items-center">
      <div className="bg-blue-200 shadow-xl px-8 py-5 rounded-2xl">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
        >
          <div className="flex gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full p-2 border-3 border-white  outline-blue-400 hover-outline-2 rounded mb-3"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 border-3 border-white  outline-blue-400 hover-outline-2 rounded mb-3"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 border-3 border-white  outline-blue-400 hover-outline-2 rounded mb-3"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-2 border-3 border-white  outline-blue-400 hover-outline-2 rounded mb-3"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full p-2 border-3 border-white  outline-blue-400 hover-outline-2 rounded mb-3"
          />

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition cursor-pointer"
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>
        <SocialLogin />
      </div>
    </div>
  );
}
