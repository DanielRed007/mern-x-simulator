import Image from "next/image";
import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main>
        <section id="hero" className="bg-blue-500 text-white py-20">
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

        <section id="about" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
            <p className="mt-4 text-gray-600">
              We are a team of dedicated professionals committed to delivering
              quality services.
            </p>
          </div>
        </section>

        <section id="services" className="bg-gray-200 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            <p className="mt-4 text-gray-600">
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
            <form className="mt-8 max-w-md mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
