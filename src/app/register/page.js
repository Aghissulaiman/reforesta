"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Register() {
  const [form, setForm] = useState({
    nama_depan: "",
    nama_belakang: "",
    email: "",
    password: "",
    role: "Sekolah", // default
    status: "Pelajar", // default untuk Publik
    nama_sekolah: "",
    nuptk: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // 1. Register ke Auth Supabase
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (error) {
      alert("Gagal register: " + error.message);
      return;
    }

    const user = data.user;
    if (!user) return;

    // 2. Simpan ke tabel users
    const { error: insertError } = await supabase.from("users").insert([
      {
        id: user.id, // foreign key dari auth.users
        nama_depan: form.nama_depan,
        nama_belakang: form.nama_belakang,
        email: form.email,
        role: form.role, // Sekolah / Publik
        status: form.role === "Sekolah" ? null : form.status, // status cuma kalau Publik
        password: form.password, // opsional
      },
    ]);

    if (insertError) {
      alert("Gagal menyimpan user: " + insertError.message);
      return;
    }

    // 3. Kalau role = Sekolah → insert ke sekolah_profiles
    if (form.role === "Sekolah") {
      const { error: sekolahError } = await supabase
        .from("sekolah_profiles")
        .insert([
          {
            user_id: user.id,
            nama_sekolah: form.nama_sekolah,
            nuptk: form.nuptk,
          },
        ]);

      if (sekolahError) {
        alert("Gagal menyimpan data sekolah: " + sekolahError.message);
        return;
      }
    }

    alert("Register berhasil, cek email untuk verifikasi!");
  };

  return (
    <div className="flex flex-row items-center justify-center p-8 min-h-screen bg-gray-100">
      {/* KIRI - Form Register */}
      <div className="relative w-125 h-138.5">
        <img
          src="image 2 (1).png"
          className="object-cover rounded-l-3xl z-0 w-125 h-138.5"
        />

        <form
          onSubmit={handleRegister}
          className="absolute inset-0 rounded-l-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg flex items-center justify-center"
        >
          <div className="w-full max-w-md p-10 space-y-4">
            <h2 className="text-white text-2xl font-semibold text-left mb-4">
              Register
            </h2>

            {/* Nama depan & belakang */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="nama_depan"
                value={form.nama_depan}
                onChange={handleChange}
                placeholder="Masukkan Nama Depan"
                className="w-full p-2 rounded border border-white/50 bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
              />
              <input
                type="text"
                name="nama_belakang"
                value={form.nama_belakang}
                onChange={handleChange}
                placeholder="Masukkan Nama Belakang"
                className="w-full p-2 rounded border border-white/50 bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
              />
            </div>

            {/* Email & Password */}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 rounded border border-white/50 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 rounded border border-white/50 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
            />

            {/* Dropdown utama */}
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full p-2 rounded border border-white/50 bg-transparent text-white focus:outline-none focus:ring-1 focus:ring-white/50"
            >
              <option value="Sekolah" className="text-black">
                Sekolah
              </option>
              <option value="Publik" className="text-black">
                Publik
              </option>
            </select>

            {/* Kondisi Sekolah atau Publik */}
            {form.role === "Sekolah" ? (
              <>
                <input
                  type="text"
                  name="nama_sekolah"
                  value={form.nama_sekolah}
                  onChange={handleChange}
                  placeholder="Nama Sekolah"
                  className="w-full p-2 rounded border border-white/50 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
                />
                <input
                  type="text"
                  name="nuptk"
                  value={form.nuptk}
                  onChange={handleChange}
                  placeholder="NUPTK"
                  className="w-full p-2 rounded border border-white/50 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
                />
              </>
            ) : (
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full p-2 rounded border border-white/50 bg-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white/50"
              >
                <option value="Pelajar" className="text-black">
                  Pelajar
                </option>
                <option value="Pekerja" className="text-black">
                  Pekerja
                </option>
                <option value="Mahasiswa" className="text-black">
                  Mahasiswa
                </option>
                <option value="Lainnya" className="text-black">
                  Lainnya
                </option>
              </select>
            )}

            <button
              type="submit"
              className="w-full bg-white/80 text-green-600 font-semibold py-2 rounded hover:bg-white/90 transition"
            >
              Daftar
            </button>

            <p className="text-white/80 text-center">ATAU</p>
            <div className="flex justify-center gap-4">
              <button type="button" className="bg-white/90 p-2 rounded-full">
                G
              </button>
              <button type="button" className="bg-white/90 p-2 rounded-full">
                F
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* KANAN - Card Image */}
      <div className="relative">
        <div className="absolute bg-black/45 z-10 w-125 h-138.5 rounded-r-3xl">
          <div className="absolute z-20 flex flex-row justify-center items-center w-full h-full">
            <div className="text-center px-8">
              <img src="Logo.png" className="mx-auto mb-6" />
              <h3 className="text-white text-xl font-bold mb-2">
                Gabung Bersama Ribuan Penanam Harapan
              </h3>
              <p className="text-white text-lg">
                Satu akun, sejuta pohon di masa depan.
              </p>
              <div className="mt-10">
                <p className="text-white text-lg">Sudah punya akun?</p>
                <button className="bg-white text-[#4CAF50] w-40 h-8 rounded-4xl mt-4 hover:bg-[#4CAF50] hover:text-white transition ease-in-out duration-300">
                  Masuk
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="image 2 (1).png"
          className="object-cover rounded-r-3xl z-0 w-125 h-138.5"
        />
      </div>
    </div>
  );
}
