"use client";
import Image from "next/image";

export function TeamWeDesc() {
  return (
    <section className="h-[90vh] md:h-screen bg-black text-white py-24 flex flex-col justify-center items-center relative">
      <div className="absolute inset-0">
        <Image 
          src="/team-image.jpg" 
          alt="Equipe WeDesc" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-70 blur-md" 
        />
      </div>
      
      <div className="max-w-7xl w-full px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Texto à esquerda */}
        <div className="w-full md:w-1/2 text-left">
          <h3 className="text-yellow-400 font-bold text-lg">Time WeDesc</h3>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Prepare-se para turbinar sua produtividade com nosso time!
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg">
            Descubra como a WeDesc pode transformar sua tecnologia.
          </p>
          <button className="mt-6 px-6 py-3 text-white border border-white rounded-full hover:bg-white hover:text-black transition-all">
            Vem pra WeDesc →
          </button>
        </div>
      </div>
    </section>
  );
}
