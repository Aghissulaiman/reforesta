// components/Reboisasi.jsx
import Image from "next/image";

export default function Reboisasi() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* === Kolom Teks === */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Bergabunglah dengan kami untuk
            <br />
            melakukan reboisasi dunia
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Cara paling sederhana bagi warga negara dan perusahaan
            untuk menanam pohon di seluruh dunia dan mengimbangi
            emisi CO2 mereka
          </p>
        </div>

        {/* === Kolom Gambar === */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-48 md:w-80 md:h-56">
            <Image
              src="/Mask group.png" // ganti sesuai path gambar kamu, misal public/tanam-pohon.jpg
              alt="Menanam pohon"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
