"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FadeIn } from "../ui/FadeIn"; // For animating the mobile menu
import { Zen_Dots } from "next/font/google";

const zenDots = Zen_Dots({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      const sections = ["my-story", "experience", "portfolio", "contact"];
      let current = "";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if the section crosses the 250px mark from the top of the viewport
          if (rect.top <= 250 && rect.bottom >= 250) {
            current = id;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "My Story", href: "/#my-story" },
    { name: "Education", href: "/#experience" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <div className="fixed top-6 w-full z-50 flex justify-center px-4 ">
        <nav className="w-full max-w-7xl h-14 bg-[#22375e] backdrop-blur-xl border border-white/10 rounded-full px-5 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.3)]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <h2 className={`${zenDots.className} text-[1.4rem] tracking-tight border-2 border-white/10 rounded-full w-full px-4 py-1 flex items-center group-hover:scale-105 transition-transform duration-300`}>
              <span className="text-white/80">Sha</span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-[#FF6B00]">hriar</span>
            </h2>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 ${activeSection === link.href.substring(1)
                  ? "text-[#FF6B00]"
                  : "text-white/60 hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section (CTA + Mobile Toggle) */}
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden sm:block bg-[#FF6B00] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#FF8533] hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all duration-300 active:scale-95"
            >
              Let's Talk
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden">
          <div className="flex flex-col items-center gap-8 text-xl font-bold uppercase tracking-widest">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-all duration-300 ${activeSection === link.href.substring(1)
                  ? "text-[#FF6B00] scale-110"
                  : "text-white/70 hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-[#FF6B00] text-white px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-widest shadow-[0_0_20px_rgba(255,107,0,0.4)] active:scale-95 transition-all"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
