"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-16 px-6 md:px-20 overflow-hidden">
      {/* Efeito de luz dinâmica */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-10 left-1/3 w-96 h-96 bg-gradient-radial from-[#FCCB16] to-transparent blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-gradient-radial from-[#F93839] to-transparent blur-3xl"></div>
      </div>
      
      {/* Container principal */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo e descrição */}
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
          <Image src="/logo.svg" alt="WeDesc Logo" width={150} height={40} />
          <p className="text-gray-400 text-sm">Impulsionamos a tecnologia para transformar negócios e simplificar o futuro.</p>
        </div>

        {/* Links úteis */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-full md:w-2/3">
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-white transition">Sobre Nós</Link></li>
              <li><Link href="/career" className="hover:text-white transition">Carreira</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/services" className="hover:text-white transition">Serviços</Link></li>
              <li><Link href="/security" className="hover:text-white transition">Segurança</Link></li>
              <li><Link href="/cloud" className="hover:text-white transition">Cloud</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="/support" className="hover:text-white transition">Atendimento</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Redes sociais */}
      <div className="relative z-10 mt-12 flex justify-center space-x-6">
        <a href="https://www.instagram.com/we.desc/" target="_blank" className="text-gray-400 hover:text-white transition">
          <Image src="/instagram.svg" width={24} height={24} alt="Instagram" />
        </a>
        <a href="https://br.linkedin.com/company/wedesctecnologia" target="_blank" className="text-gray-400 hover:text-white transition">
          <Image src="/linkedin.svg" width={24} height={24} alt="LinkedIn" />
        </a>
      </div>
      
      {/* Direitos autorais */}
      <div className="relative z-10 text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} WeDesc. Todos os direitos reservados.
      </div>
    </footer>
  );
}
