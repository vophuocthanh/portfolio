'use client';

import { listProjectMe } from '@/lib/data-project';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Project() {
  return (
    <div className='max-w-6xl mx-auto mt-24'>
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-xl font-bold'>Project</h1>
        <div className='flex gap-2 items-center hover:text-[#972AC1]'>
          <Link href='/project' className='text-xl font-bold'>
            View all Project
          </Link>
          <MoveRight className='text-xl' />
        </div>
      </div>
      <div className='w-full flex items-center mt-10 gap-8 border-b border-gray-800 pb-20 flex-wrap justify-center'>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay: 3000,
          }}
          loop={true}
        >
          {listProjectMe.map((item) => (
            <SwiperSlide
              key={item.id}
              className='w-[20rem] h-[25rem] flex rounded-bl-md rounded-br-md space-y-4 shadow-md hover:scale-105 border'
            >
              <Link href={`https://github.com/vophuocthanh/${item.path}`}>
                <Image src={item.image} alt='banner' className='w-full h-44 object-cover ' />
                <div className='flex flex-col items-center justify-center'>
                  <h1 className='font-bold'>{item.name}</h1>
                  <p className='text-sm'>{item.date}</p>
                </div>
                <p className='p-2 flex items-center text-center font-medium'>{item.description}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
