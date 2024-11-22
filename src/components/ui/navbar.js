import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CodeCircle, DollarCircle, Verify } from "iconsax-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50 && !menuOpen) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }} // Navbar starts at position 0
      animate={{ y: isVisible ? 0 : -100 }} // Animate up (-100px) when not visible
      transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
      className="fixed top-0 lg:top-2 justify-between border-b lg:border-2 border-zinc-500/25 w-screen max-w-screen-lg mx-auto left-0 right-0 lg:rounded-2xl bg-zinc-50/50 dark:bg-zinc-950/50 backdrop-blur-sm flex items-center py-2 shadow-transparent z-[9999] space-x-4 lg:space-x-12 px-2"
    >
      {/* Logo */}
      <a
        href="/"
        // className="p-2 text-sm bg-zinc-900 rounded-xl text-zinc-50 border-2 border-zinc-100 cursor-pointer hover:bg-zinc-800 transition duration-300"
        className="p-2 text-sm bg-zinc-900 rounded-xl text-zinc-50 borde-2 border-zinc-100 cursor-pointer hover:bg-zinc-800 transition duration-300"
      >
        abdlalisalmi
      </a>

      {/* Mobile Burger Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-zinc-900 dark:text-zinc-50 p-2 rounded-md focus:outline-none"
        >
          <span className="sr-only">Open menu</span>
          {/* Burger Icon */}
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-current"></span>
            <span className="block h-0.5 w-6 bg-current"></span>
            <span className="block h-0.5 w-6 bg-current"></span>
          </div>
        </button>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-1">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3"
          >
            {/* <span className="mr-1">{link.icon}</span> */}
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-14 left-[-20px] lg:hidden border-zinc-500/50 left-0 right-0 bg-zinc-950/50"
        >
          <ul className="flex flex-col items-center justify-center gap-5 py-4 min-h-screen text-center text-zinc-900 dark:text-zinc-50 backdrop-blur-2xl">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-[16px]"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}

const links = [
  {
    name: "Open Source",
    href: "#open-source",
    icon: <CodeCircle size={18} color="white" />,
  },
  {
    name: "Freelancing",
    href: "#freelancing",
    icon: <DollarCircle size={18} color="white" />,
  },
  {
    name: "Clients",
    href: "#clients",
    icon: <Verify size={18} color="white" />,
  },
];
