import type { Metadata } from "next";
import "./globals.css";
import BackToTop from "./components/BackToTop";
import SplashScreen from "./components/SplashScreen";

import {
  Inter,
  Playfair_Display,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {/* PREMIUM SPLASH SCREEN */}
        <SplashScreen />

        {/* WEBSITE */}
        {children}

        {/* BACK TO TOP */}
        <BackToTop />
      </body>
    </html>
  );
}