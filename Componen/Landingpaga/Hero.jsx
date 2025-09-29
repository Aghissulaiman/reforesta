// components/Hero.jsx
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full rounded-3xl overflow-hidden shadow-lg"
      style={{
        backgroundImage: "url('/Repeat group 1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gambar pohon: layer tengah */}
      <Image
        src="/image 1.png"
        alt="Pohon"
        fill
        className="object-cover rounded-3xl z-0"  // layer paling bawah dari elemen konten
        priority
      />

      {/* Overlay opsional supaya teks jelas */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* TEKS di atas gambar pohon */}
      <div className="absolute inset-0 flex items-center justify-center px-6 z-20">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center leading-snug">
          Mari <span className="text-[#4CAF50]">Hijaukan</span> dan hidupkan{" "}
          <span className="text-[#4CAF50]">dunia</span>
        </h1>
      </div>
    </section>
  );
}
