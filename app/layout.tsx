import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul Vijay | Porfolio",
  description:
    "Portfolio website of Rahul Vijay to make his profile visible via the web.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link rel="icon" href="/logo.png" sizes="any" />
        <div className="min-h-screen flex justify-center bg-zinc-900 text-white">
          <div className="my-10 lg:w-2/3 w-11/12 flex flex-col gap-4">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
