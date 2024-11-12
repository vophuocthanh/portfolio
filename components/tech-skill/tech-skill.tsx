'use client';

import {
  aws,
  css,
  figma,
  github,
  honojs,
  htmlImage,
  javascript,
  mongodb,
  nestjs,
  nextjs,
  nodejs,
  postgres,
  reactjs,
  tailwindcss,
  tanstackQuery,
  typescript,
  vercel,
  visualStudioCode,
  vite,
} from '@/public';
import Image from 'next/image';
import 'swiper/css';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
  { content: htmlImage },
  { content: css },
  { content: tailwindcss },
  { content: javascript },
  { content: typescript },
  { content: reactjs },
  { content: nextjs },
  { content: tanstackQuery },
  { content: nestjs },
  { content: honojs },
  { content: aws },
  { content: vercel },
  { content: vite },
  { content: postgres },
  { content: mongodb },
  { content: github },
  { content: visualStudioCode },
  { content: nodejs },
  { content: figma },
];

export default function TechSkill() {
  return (
    <div className='max-w-6xl mx-auto space-y-4 mt-20 flex flex-col'>
      <h1 className='text-xl font-bold mb-10'>Tech Skill</h1>
      <div className='mt-10'>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={5}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 1000,
          }}
          speed={1000}
          loop={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className='flex justify-center items-center'>
              <Image
                src={slide.content}
                alt={`Slide ${index + 1}`}
                width={400}
                height={100}
                className='w-[400px] h-28 object-contain'
                loading='lazy'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
