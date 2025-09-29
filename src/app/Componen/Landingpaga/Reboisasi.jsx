// components/Reboisasi.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Reboisasi() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* === Kolom Teks === */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}   // ⬅️ lebih jauh ke bawah
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}     // bisa juga sedikit lebih lama
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Bergabunglah dengan kami untuk
            <br />
            melakukan reboisasi dunia
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Cara paling sederhana bagi warga negara dan perusahaan
            untuk menanam pohon di seluruh dunia dan mengimbangi
            emisi CO2 mereka
          </p>
        </motion.div>

        {/* === Kolom Gambar === */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 150 }}  // ⬅️ geser dari kanan lebih jauh
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-64 h-48 md:w-80 md:h-56">
            <Image
              src="/Mask group.png"
              alt="Menanam pohon"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
