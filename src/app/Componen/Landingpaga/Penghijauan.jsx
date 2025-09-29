// components/Penghijauan.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Penghijauan() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* === Kolom Gambar === */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -150 }}       // ⬅️ geser dari kiri lebih jauh
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }} // muncul lagi tiap scroll balik
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-72 h-48 md:w-[500px] md:h-[300px] rounded-md overflow-hidden shadow-lg mt-5">
            <Image
              src="/image 17.png"
              alt="Apel Pagi Sekolah"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* === Kolom Teks === */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}        // ⬇️ turun dari bawah lebih jauh
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }} // animasi bisa diulang
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Setiap Keterlambatan, Satu Langkah
            <br />
            untuk Penghijauan
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Cara paling sederhana bagi warga negara dan perusahaan
            untuk menanam pohon di seluruh dunia dan mengimbangi
            emisi CO2 mereka
          </p>
        </motion.div>
      </div>
    </section>
  );
}
