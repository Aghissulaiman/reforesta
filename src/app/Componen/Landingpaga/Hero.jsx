'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* ===== Background Fullscreen + Zoom Pelan ===== */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0"
      >
        <Image
          src="/Repeat group 1.png"
          alt="Background Fullscreen"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Overlay gelap tipis */}
      <div className="absolute inset-0 bg-white/20" />

      {/* ===== Box Hero di Tengah ===== */}
      <div className="relative z-10 flex items-center justify-center h-screen px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border-2 border-blue-500 shadow-lg"
        >
          {/* Gambar dalam box */}
          <Image
            src="/image 1.png"
            alt="Hero box background"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay gelap di box */}
          <div className="absolute inset-0 bg-black/40" />

          {/* ====== Teks dengan animasi Fade + Slide Up ====== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative flex items-center justify-center h-[300px] md:h-[400px] px-6"
          >
            <h1 className="text-white text-2xl md:text-4xl font-semibold text-center">
              Mari{' '}
              <span className="text-green-600 font-bold">Hijaukan</span>{' '}
              dan hidupkan{' '}
              <span className="text-green-600 font-bold">dunia</span>
            </h1>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
