export function About() {
    return (
      <>
        {/* Transição entre Partners e About */}
        <div className="transition-partners-sobre"></div>
  
        <section className="bg-white text-black py-28 px-6 md:px-16 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Somos a <span className="text-[#FCCB16]">WeDesc</span>,
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              Transformamos desafios em soluções!
            </h3>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto">
              Há mais de <strong>10 anos</strong>, surgimos para fazer a diferença, levando tecnologia para impactar negócios e pessoas.
              Evoluímos juntos com nossos clientes, aprimorando processos, otimizando operações e entregando inovação.
            </p>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mt-4 max-w-3xl mx-auto">
              Nosso compromisso é <strong>transformar desafios em soluções eficientes</strong>, promovendo <strong>crescimento e excelência</strong> para cada empresa que atendemos.
            </p>
            
            {/* Botão */}
            <button className="mt-10 px-10 py-4 bg-gradient-to-r from-[#FCCB16] to-[#F93839] text-white font-semibold text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-110">
              Entre em contato →
            </button>
          </div>
  
          {/* Elementos decorativos */}
          <div className="absolute top-12 left-10 hidden md:block">
            <span className="text-[#FCCB16] text-5xl">+</span>
          </div>
          <div className="absolute bottom-12 right-10 hidden md:block">
            <span className="text-[#FCCB16] text-5xl">+</span>
          </div>
        </section>
      </>
    );
  }
  