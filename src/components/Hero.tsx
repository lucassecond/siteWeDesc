"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = `${(e.clientX / window.innerWidth) * 100}%`;
      const y = `${(e.clientY / window.innerHeight) * 100}%`;
      
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/home-background.gif')" }}
    >
      <div className="max-w-[900px]">
        <h1 className="text-[4rem] sm:text-[5rem] font-semibold leading-[1.1] tracking-tight">
          Transformamos <span className="bg-gradient-text bg-clip-text text-transparent">Tecnologia</span> <br /> em Soluções Inovadoras
        </h1>
        <p className="text-lg text-textSecondary mt-6 max-w-[700px] mx-auto leading-relaxed">
          Garantimos a melhor experiência para sua empresa com suporte de TI de alto nível.
        </p>
        {/* Botão com fundo gradiente dinâmico igual à palavra Tecnologia */}
        <button className="mt-8 px-12 py-4 text-white font-semibold text-lg rounded-full relative overflow-hidden transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-2xl"
          style={{ background: "linear-gradient(90deg, #FCCB16, #F9A72B, #F97560, #F93839)", backgroundSize: "300% 300%", animation: "gradientRGB 6s ease infinite" }}>
          Fale Conosco
        </button>
      </div>
    </section>
  );
}
