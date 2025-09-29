// components/Hero.jsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full">
      {/* ====== GAMBAR FULL SCREEN ====== */}
      <Image
        src="/Repeat group 1.png"            // gambar background layar penuh
        alt="Background Fullscreen"
        fill
        className="object-cover object-center"
        priority
      />

      {/* optional overlay gelap di seluruh layar */}
      <div className="absolute inset-0 bg-white/20" />

      {/* ====== BOX HERO DI TENGAH ====== */}
      <div className="relative z-10 flex items-center justify-center h-screen px-4">
        <div
          className="
            relative w-full max-w-5xl mx-auto
            rounded-3xl overflow-hidden border-2 border-blue-500 shadow-lg
          "
        >
          {/* Gambar di dalam box */}
          <Image
            src="/image 1.png"     // gambar kedua (seperti awal)
            alt="Hero box background"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay gelap di box */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Teks di box */}
          <div className="relative flex items-center justify-center h-[300px] md:h-[400px] px-6">
            <h1 className="text-white text-2xl md:text-4xl font-semibold text-center">
              Mari{" "}
              <span className="text-green-600 font-bold">Hijaukan</span>{" "}
              dan hidupkan{" "}
              <span className="text-green-600 font-bold">dunia</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
