"use client";
import Image from "next/image";

const services = [
  {
    title: "Soluções de Segurança",
    description: "Gestão e Monitoramento de toda sua Infraestrutura",
    image: "/solucoes-seguranca.jpg",
  },
  {
    title: "Soluções em Nuvens",
    description: "Gerenciamento e Know-how para garantir seu sucesso na Nuvem",
    image: "/solucoes-nuvens.jpg",
  },
  {
    title: "Gestão e Suporte TI",
    description: "Tenha uma equipe completa para cuidar da sua T.I e Infraestrutura",
    image: "/gestao-suporte.jpg",
  },
];

export default function Cards() {
  return (
    <section className="py-38 bg-white text-black text-center transition-all duration-500 ease-in-out">
      <h2 className="text-5xl font-semibold text-[#FCCB16]">
        Pessoas incríveis, entregam <br /> resultados fantásticos
      </h2>
      <p className="text-xl text-black mt-4">
        Soluções completas para sua empresa decolar em tecnologia!
      </p>

      {/* Grid de Cards */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <a
            key={index}
            href="#"
            className="relative group overflow-hidden rounded-2xl shadow-xl border border-gray-300 hover:scale-[1.05] transition-transform duration-500 ease-in-out block"
          >
            {/* Imagem de Fundo */}
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="opacity-70 group-hover:opacity-50 transition duration-500"
              />
            </div>

            {/* Overlay com efeito sutil */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>

            {/* Conteúdo do Card */}
            <div className="relative z-10 p-8 flex flex-col justify-end h-full text-left">
              <h3 className="text-2xl font-semibold text-white group-hover:text-[#FCCB16] transition">
                {service.title}
              </h3>
              <p className="text-gray-300 mt-2">{service.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Botão Centralizado */}
      <button className="mt-12 px-10 py-4 rounded-full text-black border border-gray-400 bg-transparent hover:bg-gray-200 transition-all duration-300">
        Conheça nossos Serviços
      </button>
    </section>
  );
}
