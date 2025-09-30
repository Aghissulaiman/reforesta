"use client";

import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("Login sukses:", data.user);
      window.location.href = "/dashboard";
    }

    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center p-25">
        {/* KIRI */}
        <div>
          <div className="absolute bg-black/45 z-10 w-115 h-128.5 rounded-l-3xl">
            <div className="absolute z-20 flex flex-row justify-center items-center">
              <div>
                <div className="flex flex-col item-centers justify-center w-25 ml-42 mt-25">
                  <img src="Logo.png" className="" />
                </div>
                <div className="text-center ml-10">
                  <div className="text-white text-xl whitespace-nowrap font-bold">
                    <p> Selamat datang kembali, Penjaga Bumi</p>
                  </div>
                  <div className="text-white text-lg whitespace-nowrap">
                    <p> Kita butuh kamu lagi. Bumi gak bisa nunggu</p>
                    <div>
                      <div className="text-white text-lg whitespace-nowrap mt-10">
                        <p>Belum Punya akun ?</p>
                      </div>
                      <div>
                        <button
                          className="bg-white text-[#4CAF50] w-40 h-8 rounded-4xl mt-4 hover:bg-[#4CAF50] hover:text-white transition ease-in-out duration-300"
                        >
                          Daftar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <img
            src="image 2 (1).png"
            className="object-cover rounded-l-3xl z-0 w-115 h-128.5"
          />
        </div>

        {/* KANAN */}
        <div>
          <form
            onSubmit={handleLogin}
            className="absolute w-115 h-128.5 rounded-r-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg"
          >
            <div className="p-12 mt-12 space-y-2">
              <h2 className="text-white text-2xl font-semibold mb-6">Masuk</h2>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full mb-4 p-2 rounded border border-white/50 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
              />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full mb-4 p-2 rounded border border-white/50 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
              />

              {error && <p className="text-red-400 mb-2">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white/80 text-green-600 font-semibold py-2 rounded hover:bg-white/90 transition disabled:opacity-50"
              >
                {loading ? "Loading..." : "Masuk"}
              </button>

              <p className="text-white/80 text-center my-4">ATAU</p>
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
          <img
            src="image 2 (1).png"
            className="object-cover rounded-r-3xl z-0 w-115 h-128.5"
          />
        </div>
      </div>
    </>
  );
}
