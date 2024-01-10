import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import one from '../../public/project-1.jpg';

export default function Project() {
  return (
    <div className='max-w-6xl mx-auto mt-24'>
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-xl font-bold'>Project</h1>
        <div className='flex gap-2 items-center hover:text-green-400'>
          <Link href='/project' className='text-xl font-bold'>
            View all Project
          </Link>
          <MoveRight className='text-xl' />
        </div>
      </div>
      <div className='w-full flex items-center mt-10 gap-8 border-b pb-20 flex-wrap justify-center'>
        <Link
          href='https://github.com/vophuocthanh/monkey-blogging'
          className='w-[20rem] h-[24rem] rounded-bl-md rounded-br-md space-y-4 shadow-md hover:scale-105 border'
        >
          <Image src={one} alt='banner' className='w-full h-44 object-cover ' />
          <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold'>Monkey Blogging</h1>
            <p className='text-sm'>Dec 20, 2022 - Mar 18, 2023</p>
          </div>
          <p className='p-2 flex items-center text-center font-medium'>
            This blog is used to share stories in <br /> life, connect people
            together with technology #ReactJs, #Firebase, #Tailwind css, #SCSS,
            #API, #Axios
          </p>
        </Link>
        <Link
          href='https://github.com/vophuocthanh/monkey-blogging'
          className='w-[20rem] h-[24rem] rounded-bl-md rounded-br-md space-y-4 shadow-md hover:scale-105 border'
        >
          <Image src={one} alt='banner' className='w-full h-44 object-cover ' />
          <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold'>Monkey Blogging</h1>
            <p className='text-sm'>Dec 20, 2022 - Mar 18, 2023</p>
          </div>
          <p className='p-2 flex items-center text-center font-medium'>
            This blog is used to share stories in <br /> life, connect people
            together with technology #ReactJs, #Firebase, #Tailwind css, #SCSS,
            #API, #Axios
          </p>
        </Link>
        <Link
          href='https://github.com/vophuocthanh/monkey-blogging'
          className='w-[20rem] h-[24rem] rounded-bl-md rounded-br-md space-y-4 shadow-md hover:scale-105 border'
        >
          <Image src={one} alt='banner' className='w-full h-44 object-cover ' />
          <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold'>Monkey Blogging</h1>
            <p className='text-sm'>Dec 20, 2022 - Mar 18, 2023</p>
          </div>
          <p className='p-2 flex items-center text-center font-medium'>
            This blog is used to share stories in <br /> life, connect people
            together with technology #ReactJs, #Firebase, #Tailwind css, #SCSS,
            #API, #Axios
          </p>
        </Link>
      </div>
    </div>
  );
}
