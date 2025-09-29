"use client"
import { useEffect, useState } from "react"

export default function Transaksi() {
  const [lokasi, setLokasi] = useState("")
  const [bibit, setBibit] = useState(null) // simpan object {id, nama, harga}
  const [jumlah, setJumlah] = useState(1)
  const [pohonList, setPohonList] = useState([])

  useEffect(() => {
    const fetchPohon = async () => {
      const res = await fetch("/api/pohon")
      const data = await res.json()
      setPohonList(data)
    }
    fetchPohon()
  }, [])

  const total = bibit ? jumlah * bibit.harga : 0

  return (
    <div className="flex gap-4">
      {/* Bagian Kiri */}
      <div className="w-2/3">
        {/* Pilih Lokasi */}
        <h2>Pilih Lokasi</h2>
        <div className="flex gap-2">
          {["Jawa Barat", "Jawa Tengah", "Sumatera"].map((item) => (
            <button
              key={item}
              onClick={() => setLokasi(item)}
              className={`p-2 border rounded ${lokasi === item ? "bg-green-200" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Pilih Bibit (ambil dari DB) */}
        <h2>Pilih Bibit</h2>
        <div className="flex gap-2 flex-wrap">
          {pohonList.map((item) => (
            <button
              key={item.id}
              onClick={() => setBibit(item)}
              className={`p-2 border rounded ${
                bibit?.id === item.id ? "bg-green-200" : ""
              }`}
            >
              {item.nama} (Rp {item.harga})
            </button>
          ))}
        </div>

        {/* Pilih Jumlah */}
        <h2>Pilih Jumlah</h2>
        <div className="flex gap-2 items-center">
          <button onClick={() => setJumlah(Math.max(1, jumlah - 1))}>-</button>
          <span>{jumlah}</span>
          <button onClick={() => setJumlah(jumlah + 1)}>+</button>
        </div>
      </div>

      {/* Bagian Kanan (Preview) */}
      <div className="w-1/3 border rounded p-4 bg-white shadow">
        <p>Lokasi: {lokasi}</p>
        <p>Jenis Bibit: {bibit ? bibit.nama : "-"}</p>
        <p>Harga Satuan: Rp {bibit ? bibit.harga : 0}</p>
        <p>Jumlah Bibit: {jumlah}</p>
        <p className="font-bold">Total: Rp {total}</p>
      </div>
    </div>
  )
}
