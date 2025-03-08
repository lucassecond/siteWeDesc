"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/logo1.svg",
  "/logo2.svg",
  "/logo3.svg",
  "/logo4.svg",
  "/logo5.svg",
  "/logo6.svg",
  "/logo5.svg",
  "/logo4.svg",
  "/logo3.svg",
  "/logo2.svg",
  "/logo6.svg",

];

export function Partners() {
  

  return (
    <>
      {/* Transição melhorada entre as seções */}
      <div className="h-40 transition-cards-partners"></div>

      <section className="bg-black text-white py-28 text-center">
        <h2 className="text-5xl font-semibold mb-8">Parceria de <strong>Alto Desempenho</strong></h2>
        <p className="max-w-[700px] mx-auto mb-14 text-gray-300 text-xl">
          São mais de <strong>50</strong> empresas que confiam na <strong className="text-white">WeDesc</strong>
        </p>

        {/* Carrossel Dinâmico */}
        <motion.div className="w-full overflow-hidden relative">
          <motion.div
            className="flex gap-20"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="flex items-center justify-center min-w-[150px]">
                <Image src={logo} width={140} height={70} alt="Logo Parceiro" className="select-none opacity-80 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Redes Sociais mais organizadas */}
        <div className="flex justify-center gap-6 mt-12">
          <a href="https://www.instagram.com/we.desc/" target="_blank">
            <Image src="/instagram.svg" width={40} height={40} alt="Instagram" className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://br.linkedin.com/company/wedesctecnologia" target="_blank">
            <Image src="/linkedin.svg" width={40} height={40} alt="LinkedIn" className="hover:scale-110 transition-transform" />
          </a>
        </div>
      </section>
    </>
  );
}
