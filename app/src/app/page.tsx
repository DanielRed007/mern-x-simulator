"use client";

import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";
import { HomeContactForm } from "./components/HomeContactForm";
import { useEffect, useState } from "react";

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
        <section
          id="hero"
          className="bg-blue-500 dark:bg-blue-900 text-white py-20"
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold">Welcome to My Website</h1>
            <p className="mt-4 text-lg">
              This is a simple hero section to catch your attention.
            </p>
            <button className="mt-6 px-4 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-gray-200">
              Learn More
            </button>
          </div>
        </section>

        <section id="about" className="py-20 bg-white dark:bg-gray-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              About Us
            </h2>
            <p className="mt-4 text-gray-900 dark:text-gray-100">
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
            <div className="mt-8 flex justify-center space-x-8">
              <div className="w-1/3 bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">
                  Service One
                </h3>
                <p className="mt-4 text-gray-600">
                  Description of service one.
                </p>
              </div>
              <div className="w-1/3 bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">
                  Service Two
                </h3>
                <p className="mt-4 text-gray-600">
                  Description of service two.
                </p>
              </div>
              <div className="w-1/3 bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">
                  Service Three
                </h3>
                <p className="mt-4 text-gray-600">
                  Description of service three.
                </p>
              </div>
            </div>
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
