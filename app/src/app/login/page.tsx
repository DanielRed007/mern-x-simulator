"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";
import LoginForm from "../components/shared/LoginForm";
import { apiHandler } from "@/lib/api/api-handler";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const response = await apiHandler({
      endpoint: "/api/auth",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      requestBody: { email, password, action: "login" },
    });

    const data = await response.json();

    const { token } = data;

    if (token) {
      localStorage.setItem("token", token);
      router.push("/dashboard");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <Header />
      <div className='flex-grow flex items-center justify-center bg-gray-200 dark:bg-gray-700'>
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      </div>
      <Footer />
    </div>
  );
}
