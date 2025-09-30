"use client";

import { motion } from "framer-motion";

export default function PohonList() {
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Tambahkan label untuk semua gambar
  const images = [
    { src: "/pohon1.png", alt: "Pohon Sengon", label: "Pohon Sengon" },
    { src: "/pohon2.png", alt: "Bibit Pohon 2", label: "Bibit Pohon 2" },
    { src: "/pohon3.png", alt: "Bibit Pohon 3", label: "Bibit Pohon 3" },
    { src: "/pohon4.png", alt: "Bibit Pohon 4", label: "Bibit Pohon 4" },
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
              viewport={{ once: false, amount: 0.3 }}
              custom={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Gambar */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay yang muncul saat hover */}
              <div className="
                absolute inset-0 flex items-center justify-center 
                bg-black/0 group-hover:bg-black/40 
                transition-colors duration-300
              ">
                <span className="
                  text-white text-lg font-semibold opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300
                ">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
