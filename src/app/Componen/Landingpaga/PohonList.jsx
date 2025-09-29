"use client";

import { motion } from "framer-motion";

export default function PohonList() {
  // Variasi animasi tiap kartu
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const images = [
    { src: "/pohon1.png", alt: "Pohon Sengon", label: "Pohon Sengon", overlay: true },
    { src: "/pohon2.png", alt: "Bibit Pohon 2" },
    { src: "/pohon3.png", alt: "Bibit Pohon 3" },
    { src: "/pohon4.png", alt: "Bibit Pohon 4" },
  ];

  return (
    <section className="w-full py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
          Pohon-Pohon yang kami tanam
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-xl shadow-md group"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              // === Perubahan penting di bawah ===
              viewport={{ once: false, amount: 0.3 }} // animasi bisa berulang
              custom={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {img.overlay && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {img.label}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
