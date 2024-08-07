import { ReactNode } from "react";
import { Metadata } from "next";
import { ThemeProvider } from "./context/ThemeContext";
import { HomeProvider } from "./context/HomeContext";
import { Inter } from "next/font/google";
import "./globals.css";
import { DashboardProvider } from "./context/DashboardContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X - Simulator",
  description: "A clone from certain social media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <ThemeProvider>
        <HomeProvider>
          <DashboardProvider>
            <body className='bg-gray-100 dark:bg-gray-900'>{children}</body>
          </DashboardProvider>
        </HomeProvider>
      </ThemeProvider>
    </html>
  );
}
