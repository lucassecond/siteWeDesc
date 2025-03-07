"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react"; // Ícone de idioma

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <Link href="/">
          <img src="/logo.svg" alt="WeDesc Logo" className="h-8" />
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-10 text-white font-medium">
          <li><Link href="/services" className="hover:text-gray-400">Serviços</Link></li>
          <li><Link href="/about" className="hover:text-gray-400">Sobre nós</Link></li>
          <li><Link href="/career" className="hover:text-gray-400">Carreira</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contato</Link></li>
        </ul>

        {/* Ícone de idioma */}
        <button className="hidden md:block text-white hover:text-gray-400">
          <Globe size={24} />
        </button>

        {/* Botão Mobile */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-black w-full shadow-md flex flex-col items-center py-4 space-y-4">
          <Link href="/services" className="text-white hover:text-gray-400">Serviços</Link>
          <Link href="/about" className="text-white hover:text-gray-400">Sobre nós</Link>
          <Link href="/career" className="text-white hover:text-gray-400">Carreira</Link>
          <Link href="/contact" className="text-white hover:text-gray-400">Contato</Link>
        </div>
      )}
    </nav>
  );
}
