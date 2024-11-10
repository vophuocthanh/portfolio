import Footer from '@/components/footer/footer';
import SectionInViewUp from '@/components/SectionInViewUp';
import { listProjectMe } from '@/lib/data-project';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectPage() {
  return (
    <SectionInViewUp className='max-w-6xl mx-auto mt-10'>
      <h1 className='text-3xl items-center font-bold flex justify-center'>Project List</h1>
      <div className='w-full flex items-center mt-10 gap-8 border-b border-gray-800 pb-20 flex-wrap justify-center'>
        {listProjectMe.map((item) => (
          <Link
            href={`https://github.com/vophuocthanh/${item.path}`}
            className='w-[20rem] h-[25rem] rounded-bl-md rounded-br-md space-y-4 shadow-md hover:scale-105 border'
            key={item.id}
          >
            <Image src={item.image} alt='banner' className='w-full h-44 object-cover' />
            <div className='flex flex-col items-center justify-center'>
              <h1 className='font-bold'>{item.name}</h1>
              <p className='text-sm'>{item.date}</p>
            </div>
            <p className='p-2 flex items-center text-center font-medium'>{item.description}</p>
          </Link>
        ))}
      </div>
      <Footer />
    </SectionInViewUp>
  );
}
