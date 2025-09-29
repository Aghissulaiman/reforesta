// components/ReboisasiInfo.jsx
'use client'

import { TreePine, Wind, Droplet } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ReboisasiInfo() {
  // Animasi container untuk efek stagger (anak muncul satu per satu)
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  }

  // Animasi item tiap kolom
  const item = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <section className="w-full bg-gradient-to-r from-white to-[#fdf7f0] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* ===== Judul ===== */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}   // false → animasi bisa berulang
          transition={{ duration: 0.6 }}
        >
          Kami mengumpulkan dan mengoordinasikan proyek{' '}
          <span className="text-[#4CAF50]">reboisasi</span>
          <br />
          di seluruh Indonesia untuk:
        </motion.h2>

        {/* ===== 3 Kolom ===== */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }} // animasi diulang tiap masuk viewport
        >
          {/* --- Kolom 1 --- */}
          <motion.div variants={item} className="flex flex-col items-center text-center">
            <TreePine className="w-16 h-16 text-gray-400 mb-4" />
            <p className="text-gray-700 font-medium">
              Menumbuhkan <span className="text-[#4CAF50]">Hutan</span>
              <br />
              Yang Sudah Gundul
            </p>
          </motion.div>

          {/* --- Kolom 2 --- */}
          <motion.div variants={item} className="flex flex-col items-center text-center">
            <Wind className="w-16 h-16 text-gray-400 mb-4" />
            <p className="text-gray-700 font-medium">
              Membuat Suplai <span className="text-[#4CAF50]">Oksigen</span>
              <br />
              Menjadi Lebih Banyak
            </p>
          </motion.div>

          {/* --- Kolom 3 --- */}
          <motion.div variants={item} className="flex flex-col items-center text-center">
            <Droplet className="w-16 h-16 text-gray-400 mb-4" />
            <p className="text-gray-700 font-medium">
              Mengurangi Resiko <span className="text-[#4CAF50]">Banjir</span>
              <br />
              di Beberapa Daerah
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
