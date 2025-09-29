// components/Footer.jsx
"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#4CAF50] text-white">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10"
        initial={{ opacity: 0, y: 100 }}          // geser dari bawah
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}   // animasi muncul ulang saat scroll
        transition={{ duration: 0.8 }}
      >
        {/* Kolom 1 - Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold mb-3">reforestacia</h2>
          <p className="text-sm leading-relaxed">
            Platform pengumpulan dana sekolah untuk reforestasi dan penanaman
            pohon di wilayah rawan banjir &amp; gundul.
          </p>
        </div>

        {/* Kolom 2 - Aksi Cepat */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Aksi Cepat</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Donasi Sekarang</a></li>
            <li><a href="#" className="hover:underline">Lihat Laporan Dana</a></li>
            <li><a href="#" className="hover:underline">Lokasi Penanaman</a></li>
            <li><a href="#" className="hover:underline">Daftar Jadi Relawan</a></li>
          </ul>
        </div>

        {/* Kolom 3 - Terhubung */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Terhubung</h3>
          <p className="text-sm mb-3">reforestacia@gmail.com</p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-200"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-200"><FaGithub /></a>
            <a href="#" className="hover:text-gray-200"><FaLinkedin /></a>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <div className="border-t border-white/20 text-center text-sm py-4">
        © {new Date().getFullYear()} Reforestacia • All rights reserved
      </div>
    </footer>
  );
}
