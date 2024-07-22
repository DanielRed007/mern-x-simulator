"use client";

import { useState } from "react";
import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";
import RegisterForm from "../components/shared/RegisterForm";
import { apiHandler } from "@/lib/api/api-handler";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await apiHandler({
      endpoint: "/api/auth",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      requestBody: { email, password, username, action: "register" },
    });

    const data = await response.json();

    if (response.ok) {
      alert("Registration successful");
      setEmail("");
      setPassword("");
      setUsername("");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <Header />
      <div className='flex-grow flex items-center justify-center bg-gray-200 dark:bg-gray-700'>
        <RegisterForm
          email={email}
          password={password}
          username={username}
          setEmail={setEmail}
          setUsername={setUsername}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </div>
  );
}
