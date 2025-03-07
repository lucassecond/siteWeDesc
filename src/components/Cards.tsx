"use client";
import Image from "next/image";

const services = [
  {
    title: "Produtos Digitais",
    description: "Desenvolvimento de aplicações personalizadas para seu negócio",
    image: "/produtos-digitais.jpg",
  },
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
    description: "Tenha uma equipe completa para cuidar da sua T.I e processos",
    image: "/gestao-suporte.jpg",
  },
];

export default function Cards() {
  return (
    <section className="py-24 bg-background text-white text-center">
      <h2 className="text-5xl font-semibold">
        Pessoas incríveis, entregam <br /> resultados fantásticos
      </h2>
      <p className="text-xl text-primary mt-4">
        Soluções completas para sua empresa decolar em tecnologia!
      </p>

      {/* Grid de Cards */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-xl border border-gray-700 hover:scale-[1.05] transition-transform duration-500 ease-in-out"
          >
            {/* Imagem de Fundo */}
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="opacity-60 group-hover:opacity-40 transition duration-500"
              />
            </div>

            {/* Overlay com efeito sutil */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-500"></div>

            {/* Conteúdo do Card */}
            <div className="relative z-10 p-8 flex flex-col justify-end h-full text-left">
              <h3 className="text-2xl font-semibold text-primary group-hover:text-yellow-400 transition">
                {service.title}
              </h3>
              <p className="text-gray-300 mt-2">{service.description}</p>
              <a
                href="#"
                className="mt-5 flex items-center text-white group-hover:text-primary transition"
              >
                Saiba mais →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Botão Centralizado */}
      <button className="mt-12 px-10 py-4 rounded-full text-white border border-gray-500 bg-transparent hover:bg-gray-800 transition-all duration-300">
  Conheça nossos Serviços
</button>
    </section>
  );
}
