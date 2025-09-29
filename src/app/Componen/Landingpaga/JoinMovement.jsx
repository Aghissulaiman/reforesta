'use client'

import { motion } from 'framer-motion'

export default function JoinMovement() {
  return (
    <motion.section
      className="w-full bg-white py-16 px-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }} // <== animasi ulang setiap terlihat
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Judul */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Mari Jadi Bagian dari Gerakan{" "}
          <span className="text-green-600">Penghijauan</span>
        </motion.h2>

        {/* Deskripsi */}
        <motion.p
          className="text-gray-700 mb-8 text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          Setiap keterlambatan bisa berubah jadi ribuan pohon baru.
        </motion.p>

        {/* Tombol */}
        <motion.button
          className="
            bg-green-600 text-white font-semibold text-lg md:text-xl
            px-8 py-3 rounded-full shadow-md
            hover:bg-green-700 hover:shadow-lg
            active:scale-95 transition-all duration-200
          "
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
        >
          Gabung Sekarang
        </motion.button>
      </div>
    </motion.section>
  )
}
