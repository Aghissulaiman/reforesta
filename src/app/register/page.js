'use client'

import { useState } from "react";

export default function Register() {
  const [status, setStatus] = useState("Sekolah");

  return (
    <>
      <div className="flex flex-row items-center justify-center p-8 min-h-screen bg-gray-100">
        <div className="relative w-125 h-138.5">
          <img
            src="image 2 (1).png"
            className="object-cover rounded-l-3xl z-0 w-125 h-138.5"
          />

          <div className="absolute inset-0 rounded-l-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg flex items-center justify-center">
            <div className="w-full max-w-md p-10 space-y-4">
              <h2 className="text-white text-2xl font-semibold text-left mb-4">
                Register
              </h2>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Masukkan Nama Depan"
                  className="w-full p-2 rounded border border-white/50 bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
                />
                <input
                  type="text"
                  placeholder="Masukkan Nama Belakang"
                  className="w-full p-2 rounded border border-white/50 bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded border border-white/50 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 rounded border border-white/50 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
              />

              {/* Dropdown utama */}
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full p-2 rounded border border-white/50 bg-transparent text-white focus:outline-none focus:ring-1 focus:ring-white/50"
              >
                <option className="text-black">Sekolah</option>
                <option className="text-black">Publik</option>
              </select>

              {/* Kondisi Sekolah atau Publik */}
              {status === "Sekolah" ? (
                <>
                  <input
                    type="text"
                    placeholder="Nama Sekolah"
                    className="w-full p-2 rounded border border-white/50 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
                  />
                  <input
                    type="text"
                    placeholder="NUPTK"
                    className="w-full p-2 rounded border border-white/50 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
                  />
                </>
              ) : (
                <select className="w-full p-2 rounded border border-white/50 bg-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white/50">
                  <option className="text-black">Pelajar</option>
                  <option className="text-black">Pekerja</option>
                  <option className="text-black">Mahasiswa</option>
                  <option className="text-black">Lainnya</option>
                </select>
              )}

              <button className="w-full bg-white/80 text-green-600 font-semibold py-2 rounded hover:bg-white/90 transition">
                Masuk
              </button>

              <p className="text-white/80 text-center">ATAU</p>
              <div className="flex justify-center gap-4">
                <button className="bg-white/90 p-2 rounded-full">G</button>
                <button className="bg-white/90 p-2 rounded-full">F</button>
              </div>
            </div>
          </div>
        </div>

        {/* CARD IMAGE kanan */}
        <div className="relative">
          <div className="absolute bg-black/45 z-10 w-125 h-138.5 rounded-r-3xl flex items-center justify-center">
            <img src="Logo.png" className="w-40" />
          </div>
          <img
            src="image 2 (1).png"
            className="object-cover rounded-r-3xl z-0 w-125 h-138.5"
          />
        </div>
      </div>
    </>
  );
}
