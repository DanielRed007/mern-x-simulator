"use client";

import { useEffect } from "react";
import { useHome } from "./context/HomeContext";
import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";
import HomeContactForm from "./components/HomeContactForm";
import { HeroBanner } from "./components/shared/HeroBanner";
import { ProfileCard } from "./components/shared/ProfileCard";
import Loader from "./components/shared/Loader";

export default function HomePage() {
  const { homeBannerProfiles, profilesLoading } = useHome();

  useEffect(() => {}, []);

  if (profilesLoading) {
    return <Loader />;
  }

  return (
    <div className='min-h-screen bg-gray-100'>
      <Header />

      <main>
        <HeroBanner />

        <section id='about' className='py-20 bg-white dark:bg-gray-700'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-5xl font-bold text-blue-900 dark:text-gray-100'>
              About Us
            </h2>
            <p className='mt-4 text-xl text-gray-900 dark:text-gray-100'>
              We are a team of dedicated professionals committed to delivering
              quality services.
            </p>
          </div>
        </section>

        <section id='about' className='py-20 bg-blue-300 dark:bg-blue-700'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-5xl font-bold text-blue-700 dark:text-gray-100'>
              Discover More!
            </h2>
            <div className='flex justify-between mt-7'>
              {homeBannerProfiles.map((profile: any, index: any) => (
                <ProfileCard profile={profile} />
              ))}
            </div>
          </div>
        </section>

        <section id='services' className='bg-gray-200 dark:bg-gray-900 py-20'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold text-gray-800 dark:text-gray-100'>
              Our Services
            </h2>
            <p className='mt-4 text-gray-600 dark:text-white'>
              We offer a wide range of services to meet your needs.
            </p>
          </div>
        </section>

        <section id='contact' className='py-20'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold text-gray-800'>Contact Us</h2>
            <p className='mt-4 text-gray-600'>
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
