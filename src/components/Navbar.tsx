"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setHidden(true); // Esconde ao rolar para baixo
      } else {
        setHidden(false); // Mostra ao rolar para cima
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* NavBar Principal com efeito de rolagem */}
      <motion.nav
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed w-full top-0 z-50 px-6 py-3 backdrop-blur-lg bg-black/30 shadow-lg rounded-full transition-all duration-500`}
      >
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/">
            <motion.img 
              src="/logo.svg" 
              alt="WeDesc Logo" 
              className="h-8 transition-transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />
          </Link>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-10 text-white font-medium">
            {["Serviços", "Sobre nós", "Carreira", "Contato"].map((item, index) => (
              <motion.li 
                key={index} 
                whileHover={{ scale: 1.1, color: "#FCCB16" }}
                transition={{ duration: 0.2 }}
              >
                <Link href={`/${item.toLowerCase().replace(" ", "")}`} className="hover:text-[#FCCB16] transition-colors">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Ícone de idioma */}
          <motion.button 
            className="hidden md:block text-white hover:text-[#FCCB16] transition"
            whileHover={{ scale: 1.2 }}
          >
            <Globe size={24} />
          </motion.button>

          {/* Botão Mobile */}
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Menu Mobile */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-3/4 h-full bg-black shadow-lg md:hidden flex flex-col items-center justify-center space-y-6 z-50"
      >
        {["Serviços", "Sobre nós", "Carreira", "Contato"].map((item, index) => (
          <motion.a
            key={index}
            href={`/${item.toLowerCase().replace(" ", "")}`}
            className="text-white text-xl hover:text-[#FCCB16] transition-colors"
            whileHover={{ scale: 1.1 }}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}
