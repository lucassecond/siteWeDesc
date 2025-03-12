"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Lista de imagens dos clientes
const clientes = [
  "/cliente1.jpg",
  "/cliente2.jpg",
  "/cliente3.jpg",
  "/cliente4.jpg",
];

export default function CarouselClientes() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="relative flex justify-center -mt-24 z-100">
      <motion.div
        ref={carousel}
        className="overflow-hidden cursor-grab w-full"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6"
          animate={{
            x: [0, -width],
            transition: { repeat: Infinity, duration: 25, ease: "linear" },
          }}
          whileTap={{ cursor: "grabbing" }}
        >
          {clientes.map((cliente, index) => (
            <div key={index} className="min-w-[500px] lg:min-w-[799px]">
              <Image
                src={cliente}
                width={800}
                height={400}
                alt={`Cliente ${index + 1}`}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
