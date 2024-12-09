import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/navbar";
import Footer from "./components/footer";
import Bottom from "./components/bottom";
import { Great_Vibes } from '@next/font/google';

const helvetica_init = localFont({
  src: "./fonts/Helvetica.ttf",
  weight: "400",
  variable: "--font-helvetica",
});
const inter_init = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const greatVibes_init = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-greatVibes",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <link
  href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
  rel="stylesheet"
/>
      <body className={`${inter_init.variable} ${greatVibes_init.variable} ${helvetica_init.variable}`}>
        <Header />
        {children}
        <Footer />
        <Bottom />
        </body>
    </html>
  );
}
