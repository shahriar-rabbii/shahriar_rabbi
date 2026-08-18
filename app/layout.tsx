import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shahriar | Portfolio",
  description: "Professional portfolio of Shahriar Rabbi, showcasing projects and skills.",
  icons: {
    icon: "/icon.png",
  },
};

import { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable, "font-sans", geist.variable)}>
      <body className="font-sans min-h-screen flex flex-col text-white md:cursor-none">
        <TooltipProvider>
          <CustomCursor />
          <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
