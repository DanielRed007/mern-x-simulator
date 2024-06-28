"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";
import { HomeContactForm } from "./components/HomeContactForm";
import { HomeTabsSection } from "./components/HomeTabsSection";
import { HeroBanner } from "./components/shared/HeroBanner";

type Item = {
  _id: string;
  name: string;
  description: string;
};

export default function HomePage() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // setItems(data.data);
          console.log(data);
        }
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main>
        <HeroBanner />

        <section id="about" className="py-20 bg-white dark:bg-gray-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
              About Us
            </h2>
            <p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
              We are a team of dedicated professionals committed to delivering
              quality services.
            </p>
          </div>
        </section>

        <section id="services" className="bg-gray-200 dark:bg-gray-900 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Our Services
            </h2>
            <p className="mt-4 text-gray-600 dark:text-white">
              We offer a wide range of services to meet your needs.
            </p>
            <HomeTabsSection />
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            <p className="mt-4 text-gray-600">
              Feel free to reach out to us with any questions or inquiries.
            </p>
            <HomeContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
