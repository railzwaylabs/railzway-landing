import { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent, AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/cn";
import { Button } from "./ui";
import logo from "../assets/primary.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const hasCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("railzway_is_logged_in=true"));
      setIsLoggedIn(!!hasCookie);
    };
    checkLogin();
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks: { href: string; label: string; external?: boolean }[] = [
    { href: "#features", label: "Features" },
    { href: "#architecture", label: "Architecture" },
    { href: "/deployment", label: "Deployment" },
    { href: "/blog", label: "Blog" },
    { href: "/docs", label: "Docs" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-header transition-all duration-300",
        scrolled || isMenuOpen
          ? "bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle py-3"
          : "py-5 bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2 z-[1000]">
          <img src={logo} alt="Railzway" className="h-10" />
          <span className="text-lg font-semibold text-text-primary">Railzway</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <Button as="a" href={`${import.meta.env.VITE_SITE_URL}/dashboard`} size="sm">
              Go to Dashboard
            </Button>
          ) : (
            <>
              <a
                href={`${import.meta.env.VITE_SITE_URL}/login`}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                Log in
              </a>
              <Button as="a" href={`${import.meta.env.VITE_SITE_URL}/signup`} size="sm">
                Get Started
              </Button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-1000 text-text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white/90 backdrop-blur-xl pt-20 px-6 gap-8 md:hidden"
            >
              <nav className="flex flex-col items-center gap-6 w-full">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="flex flex-col gap-4 w-full max-w-xs">
                {isLoggedIn ? (
                  <Button as="a" href="/dashboard" className="w-full text-center">
                    Dashboard
                  </Button>
                ) : (
                  <>
                    <Button as="a" href={import.meta.env.VITE_SITE_URL} variant="secondary" className="w-full text-center">
                      Log in
                    </Button>
                    <Button as="a" href={`${import.meta.env.VITE_SITE_URL}/signup`} className="w-full text-center">
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
