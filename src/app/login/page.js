export default function login() {
  return (
    <>
      <div className="flex flex-row items-center justify-center p-25">
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
                          className="bg-white text-[#4CAF50] w-40 h-8 rounded-4xl mt-4 hover:bg-[#4CAF50] hover:text-white transition ease-in-out duration-300
"
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

        <div>
          <div className="absolute w-115 h-128.5 rounded-r-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
            <div className="p-12 mt-12 space-y-2">
              <h2 className="text-white text-2xl font-semibold mb-6">Masuk</h2>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-2 rounded border border-white/50 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-2 rounded border border-white/50 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
              />
              <button className="w-full bg-white/80 text-green-600 font-semibold py-2 rounded hover:bg-white/90 transition">
                Masuk
              </button>
              <p className="text-white/80 text-center my-4">ATAU</p>
              <div className="flex justify-center gap-4">
                <button className="bg-white/90 p-2 rounded-full">G</button>
                <button className="bg-white/90 p-2 rounded-full">F</button>
              </div>
            </div>
          </div>
          <img
            src="image 2 (1).png"
            className="object-cover rounded-r-3xl z-0 w-115 h-128.5"
          />
        </div>
      </div>
    </>
  );
}
