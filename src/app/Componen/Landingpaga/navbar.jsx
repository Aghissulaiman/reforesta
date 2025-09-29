// components/Navbar.jsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm rounded-b-3xl">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo + Nama */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/Logo.png"
            alt="logo"
            className="h-8 w-8"
          />
          <span
            className="text-transparent bg-clip-text font-bold text-xl"
            style={{
              backgroundImage: "linear-gradient(to bottom, #00FF0A 100%, #4CAF50 80%)",
            }}
          >
            reforesta
          </span>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <Link href="#" className="text-black font-semibold hover:text-green-700">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-500 hover:text-green-700">
              Tanam
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-500 hover:text-green-700">
              Testimoni
            </Link>
          </li>
        </ul>

        {/* Tombol */}
        <div className="flex gap-3">
          <Link
            href="/login"
            className="px-4 py-1 rounded-full bg-[#4CAF50] text-white font-medium hover:bg-green-600"
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className="px-4 py-1 rounded-full border border-[#4CAF50] text-black font-medium hover:bg-green-50"
          >
            Daftar
          </Link>
        </div>
      </nav>
    </header>
  );
}
