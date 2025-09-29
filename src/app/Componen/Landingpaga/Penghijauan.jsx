// components/Penghijauan.jsx
import Image from "next/image";

export default function Penghijauan() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* === Kolom Gambar === */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-72 h-48 md:w-[500px] md:h-[300px] rounded-md overflow-hidden shadow-lg mt-5">
            <Image
              src="/image 17.png" // ganti sesuai path gambar di folder public
              alt="Apel Pagi Sekolah"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* === Kolom Teks === */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Setiap Keterlambatan, Satu Langkah
            <br />
            untuk Penghijauan
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Cara paling sederhana bagi warga negara dan perusahaan
            untuk menanam pohon di seluruh dunia dan mengimbangi
            emisi CO2 mereka
          </p>
        </div>
      </div>
    </section>
  );
}
