'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export default function BibitSlider() {
  const data = [
    {
      id: 1,
      img: '/hutan1.png',
      label: '75 Bibit Pohon Sudah Ditanam',
    },
    {
      id: 2,
      img: '/hutan2.png',
      label: '125 Bibit Pohon Sudah Ditanam',
    },
    {
      id: 3,
      img: '/hutan3.png',
      label: '200 Bibit Pohon Sudah Ditanam',
    },
  ]

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-gray-900 text-xl md:text-2xl font-bold mb-8">
          Ribuan bibit telah tumbuh menjadi pohon lewat platform ini
        </h2>

        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: -40,      // jarak overlap
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="w-full max-w-3xl"
        >
          {data.map(item => (
            <SwiperSlide
              key={item.id}
              className="w-[260px] md:w-[320px]"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-56 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <p className="text-white text-center font-bold text-lg md:text-xl">
                    <span className="text-gray-200">
                      {item.label.replace(/Pohon.*/, '')}
                    </span>{' '}
                    <span className="text-green-400">
                      Pohon
                    </span>{' '}
                    <span className="text-green-500">
                      {item.label.split('Sudah')[1]}
                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="mt-8 text-base md:text-lg text-gray-700 font-medium">
          Yuk, lanjutkan langkah kecil ini untuk masa depan yang lebih hijau
        </p>
      </div>
    </section>
  )
}
