import type { Metadata } from "next";
import { Overlock, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";


const overlock = Overlock({
  subsets: ['latin'],
  weight: ['700'], 
  variable: '--font-overlock', 
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-poppins', 
});

export const metadata: Metadata = {
  title: "KnusWonen",
  description: "KnusWonen Website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${overlock.variable} ${poppins.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
